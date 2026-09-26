const heroes = [
  {
    id: "jax",
    name: "武器大师",
    alias: "贾克斯",
    initial: "J",
    avatar: "",
    roles: ["战士", "前排"],
    tier: "SS",
    tierClass: "",
    tags: ["持续作战", "跳脸开团", "普攻联动"],
    note: "围绕近身持续作战构筑，海克斯决定你是强化普攻循环，还是把自己变成更可靠的前排。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "秘术冲拳", tier: "SS", note: "优先强化进场后的技能与普攻循环。" },
      { name: "坚韧", tier: "S", note: "敌方爆发高或队伍缺前排时，提高进场容错。" },
      { name: "技能循环类强化", tier: "A", note: "让 E、Q 和持续输出更容易接上第二轮。" },
    ],
    builds: [
      { label: "默认持续作战", items: ["攻击速度 / 技能急速", "持续输出核心", "按敌方伤害补抗性"], note: "队伍有开团或保护时，优先把收益转成近身持续输出。" },
      { label: "队伍缺前排", items: ["生命值与抗性", "进场容错", "团队功能装备"], note: "少一点面板伤害，换取活过第一轮并开启第二轮技能。" },
      { label: "对面近战较多", items: ["持续作战核心", "反制普攻", "根据主要伤害补抗性"], note: "把战斗拉长，利用 E 和 R 的正面作战价值。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["持续输出", "攻击速度", "护甲穿透"], note: "不要急着堆一次性爆发，优先保证能打完第二轮技能。" },
      { id: "burst", label: "对面多爆发", items: ["生命值", "抗性", "保命装备"], note: "进场前先等敌方关键爆发，存活价值高于纯输出。" },
      { id: "control", label: "对面多控制", items: ["韧性 / 解控", "技能急速", "进场容错"], note: "避免第一时间吃满控制，保留 Q 或 E 给第二次进场。" },
      { id: "poke", label: "对面远程消耗", items: ["移速 / 抗性", "接近手段", "持续输出"], note: "先解决接近问题，再考虑完整输出曲线。" },
    ],
  },
  {
    id: "yasuo",
    name: "疾风剑豪",
    alias: "亚索",
    initial: "Y",
    avatar: "teal",
    roles: ["战士", "射手"],
    tier: "S",
    tierClass: "violet",
    tags: ["暴击转化", "近身收割", "风墙价值"],
    note: "先判断队伍能否帮你创造近身窗口，再决定持续普攻、暴击转化还是更高容错。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "亮出你的剑", tier: "S", note: "适合把强化收益转成持续普攻和暴击压力。" },
      { name: "秘术冲拳", tier: "S", note: "提高近身后的技能循环，前提是队伍能制造入口。" },
      { name: "暴击 / 普攻联动", tier: "A", note: "根据海克斯实际强化内容重排装备，不要固定照搬。" },
    ],
    builds: [
      { label: "有前排与击飞", items: ["暴击组件", "攻速与穿透", "保命或反制"], note: "队友能制造 R 入口时，优先转化成持续普攻压力。" },
      { label: "高容错近战", items: ["暴击基础", "生存装备", "针对敌方伤害补抗性"], note: "敌方爆发和控制多时，先保证落地后能继续输出。" },
      { label: "敌方远程消耗", items: ["接近能力", "暴击转化", "保命装备"], note: "风墙和位移要服务于进场，而不是只挡一轮小消耗。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["暴击持续输出", "护甲穿透", "持续作战"], note: "不要只追脆皮，先保证能处理前排并打完完整循环。" },
      { id: "burst", label: "对面多爆发", items: ["暴击基础", "保命装备", "进场容错"], note: "没有队友跟进时不要强行 R，等第一轮爆发交出。" },
      { id: "control", label: "对面多控制", items: ["韧性 / 解控", "暴击转化", "第二轮进场"], note: "风墙和位移不要过早使用，关键控制交掉后再接管战斗。" },
      { id: "poke", label: "对面远程消耗", items: ["接近能力", "暴击组件", "护盾或保命"], note: "让进场路线更稳定，避免在没有风墙时被持续消耗。" },
    ],
  },
  {
    id: "teemo",
    name: "迅捷斥候",
    alias: "提莫",
    initial: "T",
    avatar: "orange",
    roles: ["法师", "射手"],
    tier: "S",
    tierClass: "pink",
    tags: ["区域控制", "持续消耗", "视野压制"],
    note: "核心不是单次爆发，而是让敌方在推进、接战和撤退时持续付出代价。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "剧毒联动", tier: "S", note: "提高持续伤害与区域覆盖的收益。" },
      { name: "持续伤害类强化", tier: "S", note: "适合敌方必须经过固定路线的局面。" },
      { name: "技能范围 / 频率类强化", tier: "A", note: "提高消耗和封锁路线的频率，但要看敌方突进能力。" },
    ],
    builds: [
      { label: "蘑菇控制", items: ["法强与穿透", "持续伤害", "保命装备"], note: "先让蘑菇覆盖兵线、入口和撤退路线，再追求单次伤害。" },
      { label: "普攻转化", items: ["按海克斯选择伤害类型", "攻速或法强", "针对敌方补反制"], note: "拿到普攻类海克斯后，先确认是否值得牺牲区域控制。" },
      { label: "对面强开", items: ["持续伤害", "拉扯与保命", "反制突进"], note: "伤害统计高不等于团战贡献高，先保证输出位置。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["持续伤害", "法术穿透", "区域控制"], note: "用蘑菇和持续伤害拉长处理前排的时间，不要只堆爆发。" },
      { id: "burst", label: "对面多爆发", items: ["保命装备", "法强与穿透", "安全输出距离"], note: "让自己活过第一轮，才能把区域控制转成实际收益。" },
      { id: "control", label: "对面多控制", items: ["保命与韧性", "持续伤害", "远程消耗"], note: "不要站在最前面换伤害，蘑菇要帮助队伍切割战场。" },
      { id: "poke", label: "对面远程消耗", items: ["法术穿透", "持续消耗", "区域封锁"], note: "提前布置阵地，把敌方推进路线变成高成本路线。" },
    ],
  },
  {
    id: "tahm",
    name: "河流之王",
    alias: "塔姆",
    initial: "T",
    avatar: "green",
    roles: ["前排"],
    tier: "S",
    tierClass: "",
    tags: ["前排承伤", "保护队友", "持续控制"],
    note: "队伍缺少可靠前排时，塔姆的价值不只在伤害，还在于保护和拖延时间。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "坦克引擎", tier: "S", note: "把承伤、控制和持续接战能力集中起来。" },
      { name: "钢铁之心任务", tier: "A", note: "生命值成长明显时，装备要同步补抗性和功能。" },
      { name: "生命值 / 承伤类强化", tier: "A", note: "队伍缺前排时价值上升，但不能只堆生命值。" },
    ],
    builds: [
      { label: "纯前排保护", items: ["生命值与抗性", "团队功能装备", "控制覆盖"], note: "为后排制造更长输出窗口，优先保证保护能力。" },
      { label: "生命值联动", items: ["生命值成长", "抗性", "持续承伤"], note: "海克斯提供成长时，别忘了用抗性把血量转成有效承伤。" },
      { label: "伤害型前排", items: ["承伤基础", "持续伤害", "针对敌方补抗性"], note: "己方输出充足且敌方难处理你时，再补更多伤害。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["持续伤害", "生命值与抗性", "控制覆盖"], note: "不要只做肉，补一点持续伤害才能把战斗拖入自己的节奏。" },
      { id: "burst", label: "对面多爆发", items: ["主要抗性", "生命值", "保护功能"], note: "把 E 和 R 留给第一轮爆发与关键队友，不要过早消耗。" },
      { id: "control", label: "对面多控制", items: ["韧性 / 解控", "抗性", "保护功能"], note: "先确保自己能走到队友身边，再考虑更长的控制链。" },
      { id: "poke", label: "对面远程消耗", items: ["移速与抗性", "接近能力", "持续承伤"], note: "减少被白白消耗的时间，让 W 和身位限制真正产生价值。" },
    ],
  },
];

const augmentRankings = [
  { rank: 1, name: "秘术冲拳", tier: "SS", tierClass: "", heroes: "贾克斯 / 亚索", note: "近身技能与普攻循环联动，适合需要连续接战的英雄。" },
  { rank: 2, name: "亮出你的剑", tier: "S", tierClass: "violet", heroes: "亚索", note: "把强化收益转成持续普攻压力，需关注队伍进场条件。" },
  { rank: 3, name: "剧毒联动", tier: "S", tierClass: "pink", heroes: "提莫", note: "提高持续伤害和区域控制的联动价值。" },
  { rank: 4, name: "坦克引擎", tier: "S", tierClass: "", heroes: "塔姆·肯奇", note: "把承伤、控制和保护能力集中到前排职责。" },
  { rank: 5, name: "坚韧", tier: "S", tierClass: "", heroes: "贾克斯 / 塔姆·肯奇", note: "敌方爆发高或队伍缺前排时，容错收益更明显。" },
  { rank: 6, name: "钢铁之心任务", tier: "A", tierClass: "gold", heroes: "塔姆·肯奇", note: "生命值成长需要同步补抗性，不能只看血量面板。" },
];

const tierOrder = { SS: 0, S: 1, A: 2, B: 3 };
const state = { query: "", role: "全部", sort: "tier", selected: "jax", scenarioHero: "jax", scenarioThreat: "frontline" };
const heroList = document.querySelector("#heroList");
const detailPanel = document.querySelector("#detailPanel");
const resultCount = document.querySelector("#resultCount");
const scenarioHero = document.querySelector("#scenarioHero");
const scenarioThreat = document.querySelector("#scenarioThreat");
const scenarioResult = document.querySelector("#scenarioResult");

function heroText(hero) {
  return [hero.name, hero.alias, hero.note, ...hero.roles, ...hero.tags, ...hero.coreAugments.map((item) => item.name), ...hero.builds.flatMap((build) => [build.label, ...build.items, build.note])].join(" ").toLowerCase();
}

function matches(hero) {
  const query = state.query.trim().toLowerCase();
  const roleMatch = state.role === "全部" || hero.roles.includes(state.role);
  return roleMatch && (!query || heroText(hero).includes(query));
}

function visibleHeroes() {
  const visible = heroes.filter(matches);
  return visible.sort((left, right) => {
    if (state.sort === "name") return left.name.localeCompare(right.name, "zh-CN");
    return tierOrder[left.tier] - tierOrder[right.tier] || left.name.localeCompare(right.name, "zh-CN");
  });
}

function renderHeroList() {
  const visible = visibleHeroes();
  resultCount.textContent = `${visible.length} 个英雄`;
  document.querySelector("#heroCount").textContent = heroes.length;
  heroList.innerHTML = visible.length
    ? visible.map((hero, index) => `
      <button class="ranking-row ${state.selected === hero.id ? "selected" : ""}" data-hero="${hero.id}">
        <span class="rank-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="ranking-hero"><span class="avatar ${hero.avatar}">${hero.initial}</span><span><strong>${hero.name}</strong><small>${hero.alias} · ${hero.roles.join(" / ")}</small></span></span>
        <span class="ranking-tier"><b class="tier ${hero.tierClass}">${hero.tier}</b><small>编辑评级</small></span>
        <span class="ranking-augment">${hero.coreAugments.slice(0, 2).map((item) => `<em>${item.name}</em>`).join("")}</span>
        <span class="ranking-data"><strong>${hero.stats.winRate}</strong><small>样本 ${hero.stats.sample}</small></span>
      </button>
    `).join("")
    : `<div class="empty-state">没有找到匹配的英雄、海克斯或出装关键词。</div>`;

  heroList.querySelectorAll("[data-hero]").forEach((row) => {
    row.addEventListener("click", () => {
      state.selected = row.dataset.hero;
      renderHeroList();
      renderDetail();
    });
  });
}

function renderDetail() {
  const hero = heroes.find((item) => item.id === state.selected) || heroes[0];
  detailPanel.innerHTML = `
    <div class="detail-kicker"><span>DECISION CARD</span><span>编辑草案</span></div>
    <div class="detail-title"><span class="avatar ${hero.avatar}">${hero.initial}</span><div><h3>${hero.name}</h3><p>${hero.alias} · ${hero.roles.join(" / ")}</p></div><b class="tier ${hero.tierClass}">${hero.tier}</b></div>
    <div class="metric-strip"><div><strong>${hero.stats.winRate}</strong><span>胜率</span></div><div><strong>${hero.stats.pickRate}</strong><span>选择率</span></div><div><strong>${hero.stats.sample}</strong><span>样本</span></div></div>
    <p class="detail-summary">${hero.note}</p>
    <h4>海克斯优先级</h4>
    <div class="augment-stack">${hero.coreAugments.map((item) => `<div class="augment-item"><b class="mini-tier ${item.tier.toLowerCase()}">${item.tier}</b><span><strong>${item.name}</strong><small>${item.note}</small></span></div>`).join("")}</div>
    <h4>出装决策</h4>
    <div class="decision-table">${hero.builds.map((build) => `<div class="decision-row"><strong>${build.label}</strong><span class="item-chips">${build.items.map((item) => `<em>${item}</em>`).join("")}</span><small>${build.note}</small></div>`).join("")}</div>
    <div class="detail-footnote">数据状态：${hero.stats.sample === "待接入" ? "统计快照待接入" : "已接入统计"}。当前评级只用于展示决策结构。</div>
  `;
}

function renderAugments() {
  document.querySelector("#augmentCount").textContent = augmentRankings.length;
  document.querySelector("#augmentList").innerHTML = `
    <div class="augment-head"><span># / 海克斯</span><span>推荐级别</span><span>适配英雄</span><span>联动方向</span></div>
    ${augmentRankings.map((augment) => `<div class="augment-row"><span class="rank-index">${String(augment.rank).padStart(2, "0")}</span><span class="augment-name"><strong>${augment.name}</strong><small>编辑推荐</small></span><span><b class="tier ${augment.tierClass}">${augment.tier}</b></span><span class="augment-copy"><strong>${augment.heroes}</strong><small>${augment.note}</small></span></div>`).join("")}
  `;
}

function renderScenarioHeroOptions() {
  scenarioHero.innerHTML = heroes.map((hero) => `<option value="${hero.id}">${hero.name} · ${hero.alias}</option>`).join("");
  scenarioHero.value = state.scenarioHero;
  renderScenarioThreatOptions();
}

function renderScenarioThreatOptions() {
  const hero = heroes.find((item) => item.id === state.scenarioHero) || heroes[0];
  scenarioThreat.innerHTML = hero.situations.map((situation) => `<option value="${situation.id}">${situation.label}</option>`).join("");
  if (!hero.situations.some((situation) => situation.id === state.scenarioThreat)) state.scenarioThreat = hero.situations[0].id;
  scenarioThreat.value = state.scenarioThreat;
  renderScenario();
}

function renderScenario() {
  const hero = heroes.find((item) => item.id === state.scenarioHero) || heroes[0];
  const situation = hero.situations.find((item) => item.id === state.scenarioThreat) || hero.situations[0];
  scenarioResult.innerHTML = `
    <div class="scenario-result-top"><span class="eyebrow">RECOMMENDATION</span><span class="status-pill">编辑草案</span></div>
    <h3>${hero.name} · ${situation.label}</h3>
    <p>${situation.note}</p>
    <div class="scenario-items">${situation.items.map((item) => `<span>${item}</span>`).join("")}</div>
    <small>正式版本将补充装备 ID、样本量和数据来源。</small>
  `;
}

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderHeroList();
});

document.querySelector("#sortSelect").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderHeroList();
});

document.querySelectorAll("#roleFilters .filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#roleFilters .filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.role = button.dataset.role;
    renderHeroList();
  });
});

scenarioHero.addEventListener("change", (event) => {
  state.scenarioHero = event.target.value;
  state.scenarioThreat = "frontline";
  renderScenarioThreatOptions();
});

scenarioThreat.addEventListener("change", (event) => {
  state.scenarioThreat = event.target.value;
  renderScenario();
});

renderHeroList();
renderDetail();
renderAugments();
renderScenarioHeroOptions();
