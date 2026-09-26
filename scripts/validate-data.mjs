import fs from "node:fs";
import { fileURLToPath } from "node:url";

const dataPath = fileURLToPath(new URL("../data/aram-mayhem-26.19.json", import.meta.url));
const payload = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const problems = [];

const addProblem = (message) => problems.push(message);
const isNonEmptyArray = (value) => Array.isArray(value) && value.length > 0;
const isItemRef = (item) => typeof item === "string" || (item && typeof item === "object" && item.id && item.name);

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

if (problems.length) {
  console.error(problems.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`数据校验通过：${Object.keys(payload.champions).length} 个英雄，${payload.augments.length} 个海克斯，所有出装/情境路线结构完整。`);
}
