import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, "..");
const sourceRoot = path.resolve(process.argv[2] || path.join(projectRoot, "..", ".source-aram-mayhem"));
const sourceApi = path.join(sourceRoot, "docs", "api");
const outputPath = path.join(projectRoot, "data", "aram-mayhem-26.19.json");

const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const tierList = readJson(path.join(sourceApi, "tier-list.json"));
const namesById = tierList.itemLut || {};
const sourceChampions = tierList.champs || {};
const currentGames = tierList.patchChanges?.currentGames || 0;

const catalogText = fs.readFileSync(path.join(projectRoot, "data", "catalog.js"), "utf8");
const seedRows = [...catalogText.matchAll(/\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\]/g)].map((match) => ({
  id: match[1].trim(),
  key: match[2],
  name: match[3],
  role: match[4],
}));
const seedsByAlias = new Map(seedRows.map((seed) => [seed.key.toLowerCase(), seed]));

const rarityNames = { kPrismatic: "棱彩", kGold: "黄金", kSilver: "白银" };
const roleNames = {
  Fighter: "战士",
  Tank: "坦克",
  Mage: "法师",
  Assassin: "刺客",
  Marksman: "射手",
  Support: "辅助",
};

const percent = (value) => typeof value === "number" ? `${(value * 100).toFixed(2)}%` : "—";
const tierFromWinRate = (value) => value >= 0.55 ? "SS" : value >= 0.52 ? "S" : value >= 0.50 ? "A" : value >= 0.48 ? "B" : "C";
const tierClass = (tier) => ({ SS: "", S: "violet", A: "gold", B: "blue", C: "pink" }[tier] || "");
const sourceUrl = (sourceId) => `https://github.com/Lanternko/ARAM-Mayhem-Database/blob/main/docs/api/champions/${sourceId}.json`;

function augmentFromId(id) {
  const augment = tierList.augs?.[String(id)];
  if (!augment) return { id, name: `海克斯 #${id}`, nameEn: "Unknown augment", rarity: "—" };
  return {
    id,
    name: augment.name_zh || augment.name || augment.name_en,
    nameEn: augment.name_en || augment.name,
    rarity: rarityNames[augment.rarity] || augment.rarity || "—",
    description: augment.desc_zh || augment.desc || "",
    globalWinRate: percent(augment.wr),
    globalPickRate: percent(augment.pick),
    globalSample: augment.g || 0,
  };
}

function itemFromId(id) {
  const item = namesById[String(id)];
  return {
    id,
    name: item?.z || item?.e || `装备 #${id}`,
    nameEn: item?.e || "Unknown item",
  };
}

function itemIdsFromEntry(entry) {
  return (entry?.items || []).map((item) => item.id).filter(Boolean);
}

function uniqueItems(ids) {
  return [...new Set(ids)].map(itemFromId);
}

function metric(entry) {
  return entry ? {
    winRate: percent(entry.wr),
    pickRate: percent(entry.pick),
    sample: entry.g || 0,
  } : null;
}

function augmentChoices(champion) {
  return Object.entries(champion.top || {}).flatMap(([rarity, entries]) => entries.slice(0, 6).map((entry) => ({
    ...augmentFromId(entry.id),
    rarity: rarityNames[rarity] || rarity,
    winRate: percent(entry.wr),
    pickRate: percent(entry.pick),
    sample: entry.g || 0,
    lift: entry.lift,
    score: entry.score,
  })));
}

function topBuilds(detail) {
  const routes = (detail.items?.top || []).slice(0, 4).map((entry, index) => ({
    label: ["统计主线 1", "统计主线 2", "统计主线 3", "统计主线 4"][index],
    items: uniqueItems(itemIdsFromEntry(entry)),
    metric: metric(entry),
    note: `该组合样本 ${entry.g || 0} 局，组合胜率 ${percent(entry.wr)}；优先级来自英雄专属统计。`,
  })).filter((route) => route.items.length > 0);

  const singles = (detail.singleItems?.top || []).slice(0, 8);
  const fallback = singles.slice(0, 4).map((entry) => itemFromId(entry.items?.[0]?.id)).filter((item) => item.id);
  if (fallback.length) routes.push({
    label: "高胜率单件池",
    items: fallback,
    metric: metric(singles[0]),
    note: "从该英雄当前统计中的高胜率单件装备提取，适合根据局势调整购买顺序。",
  });
  return routes.slice(0, 5);
}

function situations(detail, builds) {
  const base = builds[0]?.items || [];
  const alternative = builds[1]?.items || builds[0]?.items || [];
  const singlePool = (detail.singleItems?.top || []).map((entry) => itemFromId(entry.items?.[0]?.id)).filter((item) => item.id);
  const boots = (detail.boots?.top || []).slice(0, 2).map((entry) => itemFromId(entry.items?.[0]?.id)).filter((item) => item.id);
  const pick = (offset, fallback) => [...new Map([...singlePool.slice(offset, offset + 2), ...fallback].map((item) => [item.id, item])).values()].slice(0, 3);
  return [
    { id: "frontline", label: "对面多前排", items: pick(0, base), note: "优先从该英雄的高胜率单件池补足持续输出或穿透；这是基于统计装备池的决策规则，不是对手阵容分层胜率。" },
    { id: "burst", label: "对面多爆发", items: pick(2, alternative), note: "优先保留统计主线中的生存/容错候选，再恢复输出；具体装备仍应看敌方伤害类型。" },
    { id: "control", label: "对面多控制", items: pick(4, [...boots, ...alternative]), note: "鞋子优先参考该英雄的统计鞋子池，第三件回到英雄主线；不把鞋子胜率解释为因果。" },
    { id: "poke", label: "对面远程消耗", items: pick(6, [...boots, ...base]), note: "用统计主线和鞋子池提高接战稳定性，优先选择能让你更快进入有效输出距离的组合。" },
  ];
}

const fallbackHeroesByCategory = {
  tank: ["塔姆", "奥恩", "蕾欧娜"],
  support: ["莫甘娜", "琴瑟仙女", "风暴之怒"],
  ap: ["莫甘娜", "提莫", "阿狸"],
  ad: ["亚索", "人马", "锐雯"],
  cd: ["阿狸", "莫甘娜", "人马"],
  mechanic: ["贾克斯", "卡莎", "亚索"],
  amp: ["贾克斯", "人马", "提莫"],
};

function categoryFallback(cats) {
  const output = [];
  for (const cat of cats || []) {
    for (const hero of fallbackHeroesByCategory[cat] || []) {
      if (!output.includes(hero)) output.push(hero);
    }
  }
  return output;
}

const champions = {};
const championAugmentLinks = new Map();
for (const [sourceId, champion] of Object.entries(sourceChampions)) {
  const seed = seedsByAlias.get(String(champion.alias).toLowerCase());
  if (!seed) continue;
  const detailFile = path.join(sourceApi, "champions", `${sourceId}.json`);
  const detail = fs.existsSync(detailFile) ? readJson(detailFile) : {};
  const choices = augmentChoices(champion);
  for (const choice of choices) {
    const key = String(choice.id);
    if (!championAugmentLinks.has(key)) championAugmentLinks.set(key, []);
    championAugmentLinks.get(key).push({
      championId: seed.id,
      championName: seed.name,
      winRate: choice.winRate,
      sample: choice.sample,
      score: choice.score,
    });
  }
  const builds = topBuilds(detail);
  champions[seed.id] = {
    sourceId: Number(sourceId),
    sourceAlias: champion.alias,
    sourceName: champion.name_en,
    roles: (champion.tags || []).map((role) => roleNames[role] || role),
    tier: tierFromWinRate(champion.wr),
    tierClass: tierClass(tierFromWinRate(champion.wr)),
    stats: { winRate: percent(champion.wr), pickRate: currentGames ? percent((champion.g || 0) / currentGames) : "—", sample: champion.g || 0 },
    note: `26.19 统计快照：胜率 ${percent(champion.wr)}，样本 ${champion.g || 0} 局。海克斯为英雄专属统计，出装为核心组合与单件装备统计。`,
    coreAugments: choices,
    builds,
    situations: situations(detail, builds),
    source: sourceUrl(sourceId),
  };
}

const augmentRankings = Object.entries(tierList.augs || {}).map(([id, augment]) => {
  const rarity = rarityNames[augment.rarity] || augment.rarity || "—";
  const linked = (championAugmentLinks.get(id) || [])
    .filter((entry) => entry.sample >= 20)
    .sort((left, right) => (right.score ?? -Infinity) - (left.score ?? -Infinity) || right.sample - left.sample)
    .slice(0, 3);
  const heroes = [...linked.map((entry) => entry.championName), ...categoryFallback(augment.cats)].filter((hero, index, list) => list.indexOf(hero) === index).slice(0, 3);
  const status = linked.length >= 3 ? "统计快照" : linked.length ? "统计 + 角色补位" : "角色联动补位";
  return {
    ...augmentFromId(Number(id)),
    rarity,
    strength: tierFromWinRate(augment.wr),
    winRate: percent(augment.wr),
    pickRate: percent(augment.pick),
    sample: augment.g || 0,
    heroes,
    heroDetails: linked,
    note: `全局胜率 ${percent(augment.wr)}，样本 ${augment.g || 0} 局；适配英雄按英雄专属 lift/样本排序${linked.length < 3 ? "，不足部分用海克斯标签做角色补位" : ""}。`,
    recommendationStatus: status,
  };
}).sort((left, right) => right.sample - left.sample);

const output = {
  meta: {
    source: "Lanternko/ARAM-Mayhem-Database",
    sourceUrl: "https://github.com/Lanternko/ARAM-Mayhem-Database",
    sourcePatch: tierList.patch_prefix || "16.19",
    displayPatch: "26.19",
    generatedAt: new Date().toISOString().slice(0, 10),
    queue: "ARAM: Mayhem",
    region: "TW（源项目说明）",
    snapshotGames: currentGames,
    championCount: Object.keys(champions).length,
    augmentCount: augmentRankings.length,
    methodology: "公开玩家客户端对局聚合；英雄/海克斯/装备为统计快照，情境路线是基于统计候选池的编辑规则。",
  },
  champions,
  augments: augmentRankings,
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(output));
console.log(JSON.stringify({ output: outputPath, champions: Object.keys(champions).length, augments: augmentRankings.length, bytes: fs.statSync(outputPath).size }));
