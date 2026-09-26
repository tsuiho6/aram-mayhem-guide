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
    signal: "玩法草案",
    tags: ["持续作战", "跳脸开团", "普攻联动"],
    note: "围绕近身持续作战构筑，海克斯决定你是强化普攻循环，还是把自己变成更可靠的前排。",
    builds: [
      ["持续作战", "优先强化普攻与技能循环；装备顺序强调进场后的持续输出。"],
      ["半肉开团", "当队伍缺少前排时，牺牲部分爆发换取更稳定的第二轮技能。"],
      ["反制近战", "对面近战较多时，利用抗性和贴脸能力把战斗拉长。"],
    ],
    augments: ["秘术冲拳", "坚韧", "技能循环类强化"],
    items: ["攻击速度 / 技能急速", "持续输出核心", "根据敌方伤害类型补抗性"],
    caution: "不要只看面板伤害；如果队伍没有稳定开团，纯输出路线可能让整队失去容错。",
    guide: {
      headline: "武器大师的核心不是第一时间秒人，而是把一次进场变成持续作战。",
      mechanics: [
        ["被动", "连续攻击会让近身作战越来越强，短促换血和长时间站撸的装备判断不同。"],
        ["Q：跳斩", "既是进场工具，也是追击和撤退工具；没有明确目标时不要随意交掉。"],
        ["W：蓄力一击", "用于强化下一次普攻或跳斩，重点是提高一轮爆发的确定性。"],
        ["E：反击风暴", "既能规避普攻，也能制造控制窗口；面对多名近战时价值明显上升。"],
        ["R：宗师之威", "开启后提高正面作战容错，第三次攻击和进场时机要围绕敌方关键技能安排。"],
      ],
      decisions: [
        ["优先持续作战", "队伍有可靠开团或保护，你可以把海克斯和装备收益集中到近身输出。"],
        ["优先半肉容错", "队伍缺前排、敌方爆发高，活过第一轮比多一件纯输出更重要。"],
        ["暂缓进场", "敌方控制和反打技能都在，先用队友或兵线逼出关键技能，再用 Q 进入。"],
      ],
      rotation: "常规思路：先用 E 创造接近窗口，再根据敌方关键控制决定 Q 进场；不要把所有位移和控制一次性交完。",
      mistakes: [
        "看到脆皮就直接 Q，结果落地后没有 E 或 R 支撑。",
        "只按个人面板伤害出装，忽略队伍是否已经缺少前排。",
        "E 只当伤害技能使用，没有把它留给敌方普攻或关键集火。",
      ],
      evidence: "玩法说明：人工整理草案；统计信号：待接入版本快照；数值与模式平衡参数不在本页硬编码。",
    },
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
    signal: "玩法草案",
    tags: ["暴击转化", "近身收割", "风墙价值"],
    note: "先判断队伍能否帮你创造近身窗口，再决定走持续普攻、暴击转化还是更高容错的路线。",
    builds: [
      ["暴击持续输出", "适合队伍有控制或前排时，把海克斯收益转化为持续普攻压力。"],
      ["高容错近战", "敌方爆发和控制较多时，优先保证进场后能活过第一轮。"],
      ["技能联动", "拥有改变 Q 或普攻机制的海克斯时，装备围绕触发频率重排。"],
    ],
    augments: ["亮出你的剑", "秘术冲拳", "暴击 / 普攻联动"],
    items: ["暴击组件", "攻速与穿透", "根据敌方前排补反制装备"],
    caution: "选到强海克斯不代表必须无脑进场；没有队友跟进时，先把风墙和位移留给第二轮。",
    guide: {
      headline: "亚索的上限来自连续制造进场窗口，而不是每一波都赌一次大招。",
      mechanics: [
        ["被动", "护盾和暴击转化让他适合持续接战，但也更依赖进入战斗的时机。"],
        ["Q：斩钢闪", "把第三次 Q 当成控制资源保存；不要为了补一个远程消耗就提前交掉。"],
        ["W：风之障壁", "优先挡住敌方决定战斗的远程技能，而不是看到一个小技能就立刻使用。"],
        ["E：踏前斩", "小兵和敌人都是位移节点；提前规划退路，避免 E 进场后没有下一跳。"],
        ["R：狂风绝息斩", "大招是进场和刷新节奏的工具，队伍没有跟进时不要只为追求击飞人数。"],
      ],
      decisions: [
        ["有前排与击飞", "优先把海克斯和装备转化成持续普攻，让队友制造更稳定的 R 入口。"],
        ["敌方远程消耗", "提高接近和容错价值；风墙应服务于进场，而不是只用来挡一次普通消耗。"],
        ["敌方控制密集", "先补生存和进场容错，等关键控制交出后再用 E 和 R 接管战斗。"],
      ],
      rotation: "常规思路：用 Q 和 E 维持威胁，风墙保留给真正改变团战的技能；进场后优先攻击可持续输出的目标，不要只追最远的残血。",
      mistakes: [
        "把风墙当成冷却好了就用，导致真正进场时无法挡住关键技能。",
        "没有队友跟进时强行 R，落地后同时承受全部控制和集火。",
        "只看暴击和伤害，不为敌方硬控、爆发或前排处理能力留装备位置。",
      ],
      evidence: "玩法说明：人工整理草案；统计信号：待接入版本快照；不同暴击与普攻类海克斯需要按版本重新核验。",
    },
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
    signal: "玩法草案",
    tags: ["区域控制", "持续消耗", "视野压制"],
    note: "核心不是单次爆发，而是让敌方在推进、接战和撤退时持续付出代价。",
    builds: [
      ["蘑菇控制", "强化持续伤害与区域覆盖，适合敌方必须经过固定路线的局面。"],
      ["普攻转化", "拿到普攻相关海克斯时，出装要跟随强化内容而不是照搬纯 AP。"],
      ["反冲脸", "敌方强开能力很强时，先保证拉扯距离和技能命中后的撤退空间。"],
    ],
    augments: ["剧毒联动", "持续伤害类强化", "技能范围 / 频率类强化"],
    items: ["法术强度与穿透", "持续伤害", "根据敌方突进补保命"],
    caution: "伤害统计高不等于团战贡献高；蘑菇位置和队伍推进节奏同样重要。",
    guide: {
      headline: "提莫的胜点是让敌方每次推进都变得昂贵，而不是站在最前面换伤害。",
      mechanics: [
        ["被动", "隐藏和埋伏价值取决于位置；大乱斗狭窄地形里，提前占据安全角度比贪一次普攻更重要。"],
        ["Q：致盲吹箭", "优先交给依赖普攻完成收割的目标，面对法系或技能型阵容时不要把它当成普通消耗。"],
        ["W：小莫快跑", "用于调整输出位置和躲避先手，不要为了追一名残血过度离开队伍。"],
        ["E：毒性射击", "普攻转化类海克斯会改变出装方向；有强化时先确认它是否值得牺牲技能型收益。"],
        ["R：种蘑菇", "蘑菇要覆盖敌方必经路线、撤退路线和己方后排侧翼，而不是全部堆在最远处。"],
      ],
      decisions: [
        ["敌方必须推进", "优先扩大区域控制和持续伤害，让蘑菇覆盖兵线、入口和撤退路线。"],
        ["敌方强开突进", "保留致盲和保命手段，出装先解决被接近后的生存问题，再追求更高消耗。"],
        ["拿到普攻联动", "检查队伍是否仍需要法术伤害和区域控制，不要因为海克斯强就完全放弃原本的职责。"],
      ],
      rotation: "常规思路：先布置阵地，再用 Q 和普攻消耗；团战开始后优先保护自己的输出位置，蘑菇用于切割战场而不是只追求命中人头。",
      mistakes: [
        "蘑菇全部放在敌方脚下，忽略兵线和地形导致的持续控制价值。",
        "伤害统计很高，但因为站位过前每波都第一个阵亡。",
        "看到普攻类海克斯就固定转物理，忘记观察敌我阵容和装备曲线。",
      ],
      evidence: "玩法说明：人工整理草案；统计信号：待接入版本快照；蘑菇伤害与模式平衡参数不在本页硬编码。",
    },
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
    signal: "玩法草案",
    tags: ["前排承伤", "保护队友", "持续控制"],
    note: "队伍缺少可靠前排时，塔姆的价值通常不只体现在个人伤害，还体现在保护和拖延时间。",
    builds: [
      ["纯前排保护", "为队伍制造更长输出窗口，装备优先考虑承伤和控制覆盖。"],
      ["生命值联动", "拥有生命值成长或相关海克斯时，围绕收益最大化调整装备。"],
      ["伤害型前排", "己方输出充足且敌方难以处理你时，再补充更多持续伤害。"],
    ],
    augments: ["坦克引擎", "钢铁之心任务", "生命值 / 承伤类强化"],
    items: ["生命值与抗性", "团队功能装备", "按敌方主要伤害类型调整"],
    caution: "前排不是只堆血；如果没有抗性、控制或保护价值，单纯变厚并不一定能提高团队容错。",
    guide: {
      headline: "塔姆的价值是把队伍的失误变成可挽回的局面：能吃伤害，也能保护关键队友。",
      mechanics: [
        ["被动", "持续攻击会提高近身威胁，因此塔姆不是只负责挨打，也要寻找安全的持续输出窗口。"],
        ["Q：舌头鞭击", "用于消耗、减速和叠层；命中后要根据队友位置决定继续压制还是回撤保护。"],
        ["W：深渊潜航", "既可以开团也可以转移，使用前先确认队友是否真的准备跟进。"],
        ["E：厚实表皮", "灰色生命值不是免费血量；开启时机要覆盖敌方爆发，而不是战斗结束后才使用。"],
        ["R：大快朵颐", "吞队友是保护和重置战斗的手段，不要为了自己追击而过早消耗掉保护资源。"],
      ],
      decisions: [
        ["队伍缺前排", "优先承伤、抗性和控制覆盖，让后排拥有稳定的输出时间。"],
        ["队伍已有前排", "可以增加持续伤害或功能装备，但仍要保留保护核心队友的能力。"],
        ["敌方爆发强", "把 E 和 R 留给第一轮爆发与关键队友，不要因为看到残血就提前离开阵型。"],
      ],
      rotation: "常规思路：先用 Q 和身位限制敌人，等敌方关键技能交出后再 W 进场；保护队友时优先保证撤退路线，而不是追求最长控制链。",
      mistakes: [
        "只堆生命值不补抗性，导致血条很长但实际承伤效率低。",
        "W 进场前没有确认队友位置，自己开到了，队友却无法跟上。",
        "把 R 当成追击技能，关键输出位被击杀后才发现没有保护手段。",
      ],
      evidence: "玩法说明：人工整理草案；统计信号：待接入版本快照；装备收益需要结合敌方主要伤害类型校验。",
    },
  },
];

const state = { query: "", role: "全部", selected: "jax" };
const heroGrid = document.querySelector("#heroGrid");
const detailPanel = document.querySelector("#detailPanel");
const resultCount = document.querySelector("#resultCount");

function matches(hero) {
  const query = state.query.trim().toLowerCase();
  const text = [hero.name, hero.alias, hero.note, ...hero.roles, ...hero.tags, ...hero.augments].join(" ").toLowerCase();
  const roleMatch = state.role === "全部" || hero.roles.includes(state.role);
  return roleMatch && (!query || text.includes(query));
}

function renderCards() {
  const visible = heroes.filter(matches);
  resultCount.textContent = `${visible.length} 个草案`;
  heroGrid.innerHTML = visible.length
    ? visible.map((hero) => `
      <button class="hero-card ${state.selected === hero.id ? "selected" : ""}" data-hero="${hero.id}">
        <div class="hero-card-top">
          <div class="hero-identity">
            <span class="avatar ${hero.avatar}">${hero.initial}</span>
            <div><h3>${hero.name}</h3><small>${hero.alias} · ${hero.roles.join(" / ")}</small></div>
          </div>
          <span class="tier ${hero.tierClass}">${hero.tier}</span>
        </div>
        <p class="card-note">${hero.note}</p>
        <div class="tag-row">${hero.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="hero-card-footer"><span>${hero.signal}</span><strong>查看玩法 →</strong></div>
      </button>
    `).join("")
    : `<div class="empty-state">没有找到匹配的英雄或玩法。</div>`;

  heroGrid.querySelectorAll("[data-hero]").forEach((card) => {
    card.addEventListener("click", () => {
      state.selected = card.dataset.hero;
      renderCards();
      renderDetail();
    });
  });
}

function renderDetail() {
  const hero = heroes.find((item) => item.id === state.selected) || heroes[0];
  const guide = hero.guide;
  detailPanel.innerHTML = `
    <div class="detail-kicker"><span>QUICK BUILD NOTE</span><span>内容草案</span></div>
    <div class="detail-title">
      <span class="avatar ${hero.avatar}">${hero.initial}</span>
      <div><h3>${hero.name}</h3><p>${hero.alias} · ${hero.roles.join(" / ")}</p></div>
    </div>
    <h4>海克斯方向</h4>
    <div class="tag-row">${hero.augments.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
    <h4>三条构筑思路</h4>
    <div class="build-list">${hero.builds.map(([name, text]) => `<div class="build-item"><strong>${name}</strong><span>${text}</span></div>`).join("")}</div>
    <h4>装备判断</h4>
    <div class="tag-row">${hero.items.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
    <div class="detail-footnote">${hero.caution}</div>
    <button class="guide-toggle" type="button" data-guide-toggle>${guide ? "展开完整英雄手册" : "该英雄手册待整理"}<span>＋</span></button>
    ${guide ? `
      <div class="guide-content" data-guide-content hidden>
        <p class="guide-headline">${guide.headline}</p>
        <h4>技能与机制</h4>
        <div class="guide-list">${guide.mechanics.map(([name, text]) => `<div><strong>${name}</strong><span>${text}</span></div>`).join("")}</div>
        <h4>这局怎么决定</h4>
        <div class="guide-list decision-list">${guide.decisions.map(([name, text]) => `<div><strong>${name}</strong><span>${text}</span></div>`).join("")}</div>
        <h4>团战节奏</h4>
        <p class="guide-copy">${guide.rotation}</p>
        <h4>常见误区</h4>
        <ul class="mistake-list">${guide.mistakes.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="guide-evidence">${guide.evidence}</div>
      </div>
    ` : ""}
  `;

  const guideToggle = detailPanel.querySelector("[data-guide-toggle]");
  const guideContent = detailPanel.querySelector("[data-guide-content]");
  if (guideToggle && guideContent) {
    guideToggle.addEventListener("click", () => {
      const isHidden = guideContent.hasAttribute("hidden");
      guideContent.toggleAttribute("hidden", !isHidden);
      guideToggle.innerHTML = `${isHidden ? "收起完整英雄手册" : "展开完整英雄手册"}<span>${isHidden ? "－" : "＋"}</span>`;
    });
  }
}

document.querySelector("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

document.querySelectorAll("#roleFilters .filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("#roleFilters .filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.role = button.dataset.role;
    renderCards();
  });
});

renderCards();
renderDetail();
