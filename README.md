# 海斗玩法库

海克斯大乱斗的英雄强度、海克斯选择、情境出装与数据口径原型。

## 当前状态

- 当前版本为纯静态查询原型，可部署到 GitHub Pages；本地目录已建立 26.19 的完整 173 英雄名册和海克斯目录快照。
- 页面优先展示“选什么海克斯、怎么出装、如何应对阵容”，不制作技能百科。
- 英雄强度榜、英雄专属海克斯和核心出装已经接入本地 26.19 统计快照；情境路线会单独标注为“统计 + 情境规则”，不会把推导结果冒充阵容分层胜率。
- 英雄头像和装备图标通过 Data Dragon 按当前版本动态加载；英雄头像另有 CommunityDragon 兜底，装备图标加载失败时保留文字 fallback。
- 页面显示的英雄名称来自 Riot Data Dragon 国服 `zh_CN` 数据；海克斯名称优先使用 ARAMMayhem 简体中文目录映射，历史/移除条目使用本地中文回退名。
- 数据文件与页面分离，后续可接入版本化统计快照和脱敏社区数据。
- `data/catalog.js` 保存当前版本的基础目录，`data/aram-mayhem-26.19.json` 保存页面实际使用的 173 位英雄、211 个海克斯和英雄专属海克斯/装备统计。
- `data/zh-cn-localization.json` 保存当前快照中海克斯英文键到简体中文名称的对照表，`scripts/prepare-zh-cn-localization.mjs` 可从公开目录重新生成。
- `data/augment-build-guides.json` 保存从公开组合攻略整理出的“海克斯触发后出装”条目；页面会明确标记为公开编辑攻略，不把它们冒充联合胜率统计。
- `data/decision-rules.json` 保存快速出装决策的对面威胁标签与“不建议优先购买”规则；它们是编辑规则，不等同于阵容分层联合胜率。
- `data/zh-cn-item-names.json` 保存统计快照中装备 ID 对应的国服正式名称，避免远程图标数据加载失败时回退到台服或繁体名称。
- 英雄出装路线按起手、第一件核心装、鞋子、第二件、第三件和后期替换阶段展示；统计快照未记录的阶段会明确标注，不会虚构购买顺序。
- `data/build-order-overrides.json` 保存核心英雄的明确阶段覆盖；其余英雄先用统计组合和情境路线推导，并明确标注数据边界。
- 海克斯排行榜支持点击详情：显示前三适配英雄、拿到后的出装阶段、已整理的联动海克斯和不适合直接照搬的条件；缺少专属联动证据时会回退到英雄主线并标注。
- 海克斯排行榜支持按名称/适配英雄搜索，并可筛选真实统计或已有联动攻略；详情卡可直接跳转到对应英雄决策。
- `scripts/prepare-aram-mayhem-data.mjs` 用于从公开的 `ARAM-Mayhem-Database` 快照重新生成本地数据；源数据与本项目均不代表 Riot 官方统计。
- `types.js` 和 `jsconfig.json` 用 JSDoc 约束 `Hero`、`HeroAugment`、`BuildRoute`、`SituationRoute`、`AugmentRanking` 等结构；`scripts/validate-data.mjs` 可在提交前检查快照完整性。

## 本地预览

在本目录启动任意静态文件服务器，然后打开 `index.html`。例如使用 VS Code Live Server，或 Node/Python 的静态服务器。

## GitHub Pages

把本目录作为仓库根目录推送到 GitHub，并在仓库设置中将 Pages 的构建来源设置为 GitHub Actions。`.github/workflows/pages.yml` 会在 `main` 分支更新后自动部署整个静态站点。

## 数据原则

- 每个统计快照必须绑定 patch、queue、region、时间范围和来源。
- 不把普通 ARAM 数据冒充 ARAM: Mayhem 数据。
- 低样本内容不直接作为强推荐。
- 决策推荐与统计信号分开保存。
- 公共数据只发布去身份化聚合结果。
- 当前统计快照来源于公开玩家客户端对局聚合，源项目说明其 Mayhem 数据来自台服真实对局；英雄选择率由快照总局数推导，情境路线是编辑规则。
