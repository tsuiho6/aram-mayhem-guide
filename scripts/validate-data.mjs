import fs from "node:fs";
import { fileURLToPath } from "node:url";

const dataPath = fileURLToPath(new URL("../data/aram-mayhem-26.19.json", import.meta.url));
const guidePath = fileURLToPath(new URL("../data/augment-build-guides.json", import.meta.url));
const payload = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const guidePayload = JSON.parse(fs.readFileSync(guidePath, "utf8"));
const problems = [];

const addProblem = (message) => problems.push(message);
const isNonEmptyArray = (value) => Array.isArray(value) && value.length > 0;
const isItemRef = (item) => typeof item === "string" || (item && typeof item === "object" && item.id && item.name);
const isHttpUrl = (value) => typeof value === "string" && /^https?:\/\//.test(value);

if (payload.meta?.displayPatch !== "26.19") addProblem("meta.displayPatch 必须是 26.19");
if (Object.keys(payload.champions || {}).length !== 173) addProblem("英雄数量不是 173");
if ((payload.augments || []).length !== 211) addProblem("海克斯数量不是 211");

for (const [heroId, hero] of Object.entries(payload.champions || {})) {
  if (!hero.sourceId || !hero.sourceName || !hero.sourceAlias) addProblem(`英雄 ${heroId} 缺少源身份字段`);
  if (!hero.stats || typeof hero.stats.winRate !== "string" || typeof hero.stats.pickRate !== "string") addProblem(`英雄 ${heroId} 缺少统计字段`);
  if (!isNonEmptyArray(hero.coreAugments)) addProblem(`英雄 ${heroId} 缺少海克斯推荐`);
  if (!isNonEmptyArray(hero.builds)) addProblem(`英雄 ${heroId} 缺少出装路线`);
  if (!isNonEmptyArray(hero.situations)) addProblem(`英雄 ${heroId} 缺少情境路线`);
  for (const build of hero.builds || []) {
    if (!build.label || !isNonEmptyArray(build.items) || !build.items.every(isItemRef)) addProblem(`英雄 ${heroId} 存在无效出装路线`);
  }
  for (const situation of hero.situations || []) {
    if (!situation.id || !situation.label || !isNonEmptyArray(situation.items) || !situation.items.every(isItemRef)) addProblem(`英雄 ${heroId} 存在无效情境路线`);
  }
}

for (const augment of payload.augments || []) {
  if (!augment.name || !["白银", "黄金", "棱彩"].includes(augment.rarity)) addProblem(`海克斯 ${augment.name || "未知"} 缺少名称或稀有度`);
  if (!Array.isArray(augment.heroes) || augment.heroes.length !== 3) addProblem(`海克斯 ${augment.name || "未知"} 没有恰好 3 个适配英雄`);
  if (!augment.recommendationStatus || !augment.note) addProblem(`海克斯 ${augment.name || "未知"} 缺少推荐说明`);
}

const guideIds = new Set();
for (const [heroId, guides] of Object.entries(guidePayload.guides || {})) {
  if (!payload.champions[heroId]) addProblem(`海克斯联动攻略引用了不存在的英雄 ${heroId}`);
  if (!isNonEmptyArray(guides)) addProblem(`英雄 ${heroId} 没有有效的海克斯联动攻略列表`);
  for (const guide of guides || []) {
    if (!guide.id || guideIds.has(guide.id)) addProblem(`海克斯联动攻略存在重复或缺失 id：${guide.id || "未知"}`);
    guideIds.add(guide.id);
    if (!guide.title || !isNonEmptyArray(guide.requiredAugments) || !guide.requiredAugments.every((name) => typeof name === "string" && name)) {
      addProblem(`英雄 ${heroId} 的海克斯联动攻略缺少触发海克斯`);
    }
    if (!guide.tier || !isNonEmptyArray(guide.items) || !guide.items.every(isItemRef)) addProblem(`英雄 ${heroId} 的海克斯联动攻略出装无效`);
    if (!guide.note || !guide.sourceType || !isHttpUrl(guide.source)) addProblem(`英雄 ${heroId} 的海克斯联动攻略缺少说明或来源`);
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`数据校验通过：${Object.keys(payload.champions).length} 个英雄，${payload.augments.length} 个海克斯，${guideIds.size} 条海克斯联动攻略，所有出装/情境路线结构完整。`);
}
