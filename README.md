# 海斗玩法库

海克斯大乱斗的英雄玩法、海克斯联动、出装路线与情境分析原型。

## 当前状态

- 第一版为纯静态原型，可部署到 GitHub Pages。
- 页面内容目前是玩法结构草案，不代表正式统计结论。
- 数据文件与页面分离，后续可接入版本化统计快照和脱敏社区数据。

## 本地预览

在 `mayhem-library` 目录启动任意静态文件服务器，然后打开 `index.html`。例如使用 VS Code Live Server，或 Node/Python 的静态服务器。

## GitHub Pages

把本目录作为仓库根目录推送到 GitHub，并在仓库设置中将 Pages 的构建来源设置为 GitHub Actions。`.github/workflows/pages.yml` 会在 `main` 分支更新后自动部署整个静态站点。

## 数据原则

- 每个统计快照必须绑定 patch、queue、region、时间范围和来源。
- 不把普通 ARAM 数据冒充 ARAM: Mayhem 数据。
- 低样本内容不直接作为强推荐。
- 玩法说明与统计信号分开保存。
- 公共数据只发布去身份化聚合结果。
