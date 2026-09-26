import fs from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dataPath = `${root}/data/aram-mayhem-26.19.json`;
const outputPath = `${root}/data/zh-cn-localization.json`;
const html = await fetch("https://arammayhem.com/zh-cn/augments/").then((response) => {
  if (!response.ok) throw new Error(`简体海克斯目录请求失败：${response.status}`);
  return response.text();
});

const localization = {};
const pattern = /data-name="([^"<>]+?)\s+([a-z0-9][^"<>]*)"/gi;
for (const match of html.matchAll(pattern)) {
  const [_, nameCN, nameEn] = match;
  localization[nameEn.trim().toLowerCase()] = nameCN.trim();
}

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const sourceNames = data.augments.map((augment) => String(augment.nameEn || "").toLowerCase()).filter(Boolean);
const matched = sourceNames.filter((name) => localization[name]).length;

fs.writeFileSync(outputPath, `${JSON.stringify({ source: "ARAMMayhem zh-cn augment directory", generatedAt: new Date().toISOString().slice(0, 10), matched, entries: localization }, null, 2)}\n`);
console.log(JSON.stringify({ output: outputPath, entries: Object.keys(localization).length, matched, total: sourceNames.length }));
