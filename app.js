// @ts-check

/** @typedef {import("./types.js").Hero} Hero */
/** @typedef {import("./types.js").HeroAugment} HeroAugment */
/** @typedef {import("./types.js").BuildItemRef} BuildItemRef */
/** @typedef {import("./types.js").AugmentRanking} AugmentRanking */

import { championSeeds, augmentSeeds } from "./data/catalog.js";

/** @type {Hero[]} */
const featuredHeroes = [
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
      { label: "默认持续作战", items: ["三相之力", "破败王者之刃", "死亡之舞"], note: "队伍有开团或保护时，优先把收益转成近身持续输出。" },
      { label: "队伍缺前排", items: ["三相之力", "冰霜之心", "振奋盔甲"], note: "少一点面板伤害，换取活过第一轮并开启第二轮技能。" },
      { label: "对面近战较多", items: ["三相之力", "破败王者之刃", "兰顿之兆"], note: "把战斗拉长，利用 E 和 R 的正面作战价值。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["破败王者之刃", "三相之力", "黑色切割者"], note: "不要急着堆一次性爆发，优先保证能打完第二轮技能。" },
      { id: "burst", label: "对面多爆发", items: ["死亡之舞", "玛莫提乌斯之噬", "斯特拉克的挑战护手"], note: "进场前先等敌方关键爆发，存活价值高于纯输出。" },
      { id: "control", label: "对面多控制", items: ["水银之靴", "三相之力", "死亡之舞"], note: "避免第一时间吃满控制，保留 Q 或 E 给第二次进场。" },
      { id: "poke", label: "对面远程消耗", items: ["水银之靴", "三相之力", "破败王者之刃"], note: "先解决接近问题，再考虑完整输出曲线。" },
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
      { label: "有前排与击飞", items: ["无尽之刃", "纳沃利迅刃", "饮血剑"], note: "队友能制造 R 入口时，优先转化成持续普攻压力。" },
      { label: "高容错近战", items: ["无尽之刃", "饮血剑", "死亡之舞"], note: "敌方爆发和控制多时，先保证落地后能继续输出。" },
      { label: "敌方远程消耗", items: ["破败王者之刃", "无尽之刃", "水银弯刀"], note: "风墙和位移要服务于进场，而不是只挡一轮小消耗。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["无尽之刃", "多米尼克领主的致意", "纳沃利迅刃"], note: "不要只追脆皮，先保证能处理前排并打完完整循环。" },
      { id: "burst", label: "对面多爆发", items: ["无尽之刃", "饮血剑", "守护天使"], note: "没有队友跟进时不要强行 R，等第一轮爆发交出。" },
      { id: "control", label: "对面多控制", items: ["水银弯刀", "无尽之刃", "纳沃利迅刃"], note: "风墙和位移不要过早使用，关键控制交掉后再接管战斗。" },
      { id: "poke", label: "对面远程消耗", items: ["破败王者之刃", "无尽之刃", "卢安娜的飓风"], note: "让进场路线更稳定，避免在没有风墙时被持续消耗。" },
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
      { label: "蘑菇控制", items: ["兰德里的折磨", "影焰", "虚空之杖"], note: "先让蘑菇覆盖兵线、入口和撤退路线，再追求单次伤害。" },
      { label: "普攻转化", items: ["纳什之牙", "鬼索的狂暴之刃", "智慧末刃"], note: "拿到普攻类海克斯后，先确认是否值得牺牲区域控制。" },
      { label: "对面强开", items: ["兰德里的折磨", "中娅沙漏", "影焰"], note: "伤害统计高不等于团战贡献高，先保证输出位置。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["兰德里的折磨", "虚空之杖", "瑞莱的冰晶节杖"], note: "用蘑菇和持续伤害拉长处理前排的时间，不要只堆爆发。" },
      { id: "burst", label: "对面多爆发", items: ["中娅沙漏", "兰德里的折磨", "影焰"], note: "让自己活过第一轮，才能把区域控制转成实际收益。" },
      { id: "control", label: "对面多控制", items: ["中娅沙漏", "法师之靴", "兰德里的折磨"], note: "不要站在最前面换伤害，蘑菇要帮助队伍切割战场。" },
      { id: "poke", label: "对面远程消耗", items: ["兰德里的折磨", "影焰", "虚空之杖"], note: "提前布置阵地，把敌方推进路线变成高成本路线。" },
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
      { label: "纯前排保护", items: ["心之钢", "日炎圣盾", "荆棘之甲"], note: "为后排制造更长输出窗口，优先保证保护能力。" },
      { label: "生命值联动", items: ["心之钢", "狂徒铠甲", "坚定之心"], note: "海克斯提供成长时，别忘了用抗性把血量转成有效承伤。" },
      { label: "伤害型前排", items: ["日炎圣盾", "冰霜之心", "荆棘之甲"], note: "己方输出充足且敌方难处理你时，再补更多伤害。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["心之钢", "日炎圣盾", "荆棘之甲"], note: "不要只做肉，补一点持续伤害才能把战斗拖入自己的节奏。" },
      { id: "burst", label: "对面多爆发", items: ["心之钢", "兰顿之兆", "振奋盔甲"], note: "把 E 和 R 留给第一轮爆发与关键队友，不要过早消耗。" },
      { id: "control", label: "对面多控制", items: ["水银之靴", "振奋盔甲", "坚定之心"], note: "先确保自己能走到队友身边，再考虑更长的控制链。" },
      { id: "poke", label: "对面远程消耗", items: ["心之钢", "自然之力", "狂徒铠甲"], note: "减少被白白消耗的时间，让 W 和身位限制真正产生价值。" },
    ],
  },
  {
    id: "ornn",
    name: "山隐之焰",
    alias: "奥恩",
    initial: "O",
    avatar: "green",
    roles: ["前排", "战士"],
    tier: "A",
    tierClass: "gold",
    tags: ["开团", "成长", "抗性联动"],
    note: "奥恩的出装先解决承伤和开团，再根据海克斯决定走纯前排还是技能爆发。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "坦克引擎", tier: "S", note: "把生命值和近身承伤转成更稳定的开团窗口。" },
      { name: "任务：钢化你心", tier: "S", note: "成长型海克斯，优先把血量转成有效抗性。" },
      { name: "精怪魔法", tier: "A", note: "走技能爆发时，装备要跟随技能急速和法穿。" },
    ],
    builds: [
      { label: "默认坦克", items: ["心之钢", "狂徒铠甲", "无终恨意"], note: "前排压力大且队伍需要你反复进场时使用。" },
      { label: "对面物理多", items: ["心之钢", "荆棘之甲", "兰顿之兆"], note: "优先处理暴击和普攻威胁，鞋子按控制情况选择。" },
      { label: "精怪魔法联动", items: ["心之钢", "无终恨意", "影焰"], note: "拿到技能爆发海克斯后，才考虑把第三件转成法强。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["心之钢", "无终恨意", "荆棘之甲"], note: "用持续承伤和百分比生命值伤害拖长战斗，不要只出纯抗性。" },
      { id: "burst", label: "对面多爆发", items: ["心之钢", "狂徒铠甲", "千变者贾修"], note: "先让自己活过第一轮，R 和控制的第二次使用才是胜点。" },
      { id: "control", label: "对面多控制", items: ["水银之靴", "心之钢", "振奋盔甲"], note: "提高走到敌方后排和保护队友的稳定性。" },
      { id: "poke", label: "对面远程消耗", items: ["心之钢", "自然之力", "狂徒铠甲"], note: "减少被消耗的时间，尽快把团战拉到奥恩能发挥的位置。" },
    ],
  },
  {
    id: "kaisa",
    name: "虚空之女",
    alias: "卡莎",
    initial: "K",
    avatar: "teal",
    roles: ["射手", "法师"],
    tier: "A",
    tierClass: "gold",
    tags: ["进化路线", "混合伤害", "收割"],
    note: "卡莎不是固定一套出装：海克斯决定你偏向暴击、特效还是 AP 消耗。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "双发快射", tier: "S", note: "普攻收益高时，优先走特效和持续输出。" },
      { name: "关键暴击", tier: "A", note: "暴击海克斯出现时，才把资源集中到暴击路线。" },
      { name: "虚幻武器", tier: "A", note: "技能附带普攻效果时，鬼索和破败的价值上升。" },
    ],
    builds: [
      { label: "默认特效", items: ["海妖杀手", "破败王者之刃", "鬼索的狂暴之刃"], note: "没有明确 AP 或暴击海克斯时，优先保证持续输出和进化。" },
      { label: "AP 消耗", items: ["卢登的回声", "视界专注", "影焰"], note: "适合技能命中稳定、队伍需要远程消耗的局。" },
      { label: "攻速特效", items: ["斯塔缇克电刃", "鬼索的狂暴之刃", "纳什之牙"], note: "海克斯强化普攻频率时，围绕攻速和命中特效成型。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["海妖杀手", "破败王者之刃", "鬼索的狂暴之刃"], note: "用特效和持续伤害处理前排，不要过早转纯爆发。" },
      { id: "burst", label: "对面多爆发", items: ["海妖杀手", "破败王者之刃", "守护天使"], note: "先保证大招进场后能活下来，第三件再补收割能力。" },
      { id: "control", label: "对面多控制", items: ["海妖杀手", "鬼索的狂暴之刃", "水银弯刀"], note: "有水银弯刀时再考虑深入收割，否则保持边缘输出。" },
      { id: "poke", label: "对面远程消耗", items: ["卢登的回声", "影焰", "中娅沙漏"], note: "AP 消耗路线更容易在安全距离提供作用，但要看队伍伤害类型。" },
    ],
  },
  {
    id: "morgana",
    name: "堕落天使",
    alias: "莫甘娜",
    initial: "M",
    avatar: "violet",
    roles: ["法师"],
    tier: "S",
    tierClass: "violet",
    tags: ["持续伤害", "区域控制", "护盾保护"],
    note: "莫甘娜的装备要服务于持续伤害和区域限制，敌方突进强时中娅的优先级会上升。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "终极唤醒", tier: "S", note: "大招频率提高后，适合把装备转向持续作战。" },
      { name: "炼狱导管", tier: "S", note: "技能持续命中时，能明显提高团战循环频率。" },
      { name: "大法师", tier: "A", note: "纯法强收益高，但要根据敌方突进补中娅。" },
    ],
    builds: [
      { label: "持续控制", items: ["黯炎火炬", "兰德里的折磨", "瑞莱的冰晶节杖"], note: "敌方需要持续推进时，减速和灼烧比一次性爆发更稳定。" },
      { label: "高爆发", items: ["黯炎火炬", "兰德里的折磨", "影焰"], note: "己方已有控制和前排时，第三件转法穿和爆发。" },
      { label: "敌方强开", items: ["黯炎火炬", "兰德里的折磨", "中娅沙漏"], note: "大招进场或被突进时，中娅是保证第二轮技能的关键。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["黯炎火炬", "兰德里的折磨", "瑞莱的冰晶节杖"], note: "优先持续灼烧和减速，不要只做短爆发。" },
      { id: "burst", label: "对面多爆发", items: ["黯炎火炬", "中娅沙漏", "影焰"], note: "中娅结束后要能继续拉开距离，不能只靠一次大招换血。" },
      { id: "control", label: "对面多控制", items: ["黯炎火炬", "瑞莱的冰晶节杖", "中娅沙漏"], note: "站在控制边缘打区域，不要为了大招第一段贸然深入。" },
      { id: "poke", label: "对面远程消耗", items: ["卢登的回声", "影焰", "灭世者的死亡之帽"], note: "用更高的远程爆发逼退对面，黑盾留给真正的开团窗口。" },
    ],
  },
  {
    id: "galio",
    name: "正义巨像",
    alias: "加里奥",
    initial: "G",
    avatar: "green",
    roles: ["前排", "法师"],
    tier: "A",
    tierClass: "gold",
    tags: ["魔抗收益", "反开团", "控制链"],
    note: "加里奥要先判断敌方魔法伤害和控制密度，再决定纯坦克还是半 AP 反打。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "坦克引擎", tier: "S", note: "需要你反复站在第一线时，优先提高承伤和控制容错。" },
      { name: "终极唤醒", tier: "A", note: "大招频率提高后，更重视全图支援和二次进场。" },
      { name: "歌利亚巨人", tier: "A", note: "生命值成长明显时，装备继续补抗性而不是盲目堆血。" },
    ],
    builds: [
      { label: "默认前排", items: ["心之钢", "狂徒铠甲", "无终恨意"], note: "队伍缺开团和承伤时，先保证每波都能进入战场。" },
      { label: "对面 AP 多", items: ["心之钢", "无终恨意", "振奋盔甲"], note: "魔抗收益和被动伤害同时提高，适合魔法爆发阵容。" },
      { label: "半 AP 反打", items: ["心之钢", "璀璨回响", "影焰"], note: "己方已有前排、敌方脆皮多时，再把第三件转成爆发。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["心之钢", "无终恨意", "璀璨回响"], note: "提高持续接战能力，避免只负责开一次团。" },
      { id: "burst", label: "对面多爆发", items: ["心之钢", "狂徒铠甲", "振奋盔甲"], note: "优先活过第一轮，再用第二次控制完成反打。" },
      { id: "control", label: "对面多控制", items: ["水银之靴", "心之钢", "振奋盔甲"], note: "提高接近和保护队友的稳定性，别过早交 W。" },
      { id: "poke", label: "对面远程消耗", items: ["心之钢", "无终恨意", "狂徒铠甲"], note: "利用回复和移速尽快接近，不要在远处和对面拼消耗。" },
    ],
  },
  {
    id: "ashe",
    name: "寒冰射手",
    alias: "艾希",
    initial: "A",
    avatar: "teal",
    roles: ["射手"],
    tier: "A",
    tierClass: "gold",
    tags: ["持续减速", "远程消耗", "功能开团"],
    note: "艾希既可以做持续普攻，也可以用技能和减速做功能输出，海克斯决定两者的比例。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "关键暴击", tier: "S", note: "暴击路线成型后，持续普攻和减速压制更强。" },
      { name: "致命导弹", tier: "S", note: "适合需要远程消耗和多目标压力的对局。" },
      { name: "双发快射", tier: "A", note: "普攻联动收益高，但要给穿透和保命留位置。" },
    ],
    builds: [
      { label: "默认持续输出", items: ["破败王者之刃", "卢安娜的飓风", "界弓"], note: "需要稳定处理前排并持续减速时使用。" },
      { label: "暴击收割", items: ["育恩塔尔荒野箭", "卢安娜的飓风", "无尽之刃"], note: "敌方脆皮多且己方有前排保护时，优先提高暴击收益。" },
      { label: "功能消耗", items: ["破败王者之刃", "卢安娜的飓风", "无尽之刃"], note: "保持普攻压力的同时，用大招和减速为队伍创造入口。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["破败王者之刃", "卢安娜的飓风", "界弓"], note: "优先百分比伤害和持续输出，不要只追求第一发暴击。" },
      { id: "burst", label: "对面多爆发", items: ["破败王者之刃", "卢安娜的飓风", "守护天使"], note: "保命比第三件纯输出重要，活着才能持续减速和开团。" },
      { id: "control", label: "对面多控制", items: ["破败王者之刃", "无尽之刃", "水银弯刀"], note: "解除关键控制后再进入持续输出距离。" },
      { id: "poke", label: "对面远程消耗", items: ["育恩塔尔荒野箭", "卢安娜的飓风", "无尽之刃"], note: "通过更高的持续输出逼退对面，避免在技能真空期硬换血。" },
    ],
  },
  {
    id: "ahri",
    name: "九尾妖狐",
    alias: "阿狸",
    initial: "A",
    avatar: "violet",
    roles: ["法师"],
    tier: "S",
    tierClass: "violet",
    tags: ["远程消耗", "灵活收割", "技能循环"],
    note: "阿狸的装备围绕远程消耗、魅惑命中后的爆发和大招多段位移来取舍。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "终极唤醒", tier: "S", note: "提高大招使用频率，强化进退和收割能力。" },
      { name: "大法师", tier: "A", note: "纯法强路线的上限更高，但要看敌方是否有强突进。" },
      { name: "炼狱导管", tier: "A", note: "持续命中时可以把技能循环转成稳定消耗。" },
    ],
    builds: [
      { label: "默认爆发", items: ["卢登的回声", "影焰", "灭世者的死亡之帽"], note: "魅惑命中稳定、队伍已有前排时使用。" },
      { label: "技能循环", items: ["残疫", "影焰", "灭世者的死亡之帽"], note: "需要频繁消耗和多次进场时，优先技能急速与持续输出。" },
      { label: "敌方强开", items: ["卢登的回声", "中娅沙漏", "影焰"], note: "用中娅保证大招进场后能活着完成第二次位移。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["残疫", "影焰", "虚空之杖"], note: "穿透和持续技能伤害优先，不要只堆单次爆发。" },
      { id: "burst", label: "对面多爆发", items: ["卢登的回声", "中娅沙漏", "影焰"], note: "先保留大招和中娅的退路，再寻找魅惑窗口。" },
      { id: "control", label: "对面多控制", items: ["卢登的回声", "影焰", "女妖面纱"], note: "女妖面纱帮助你找到第一轮魅惑和进场角度。" },
      { id: "poke", label: "对面远程消耗", items: ["卢登的回声", "影焰", "灭世者的死亡之帽"], note: "用更高的远程爆发逼退对方，不要长时间站在兵线前。" },
    ],
  },
  {
    id: "hecarim",
    name: "战争之影",
    alias: "人马",
    initial: "H",
    avatar: "green",
    roles: ["战士", "前排"],
    tier: "S",
    tierClass: "violet",
    tags: ["高频技能", "冲阵", "持续回复"],
    note: "人马的海克斯和装备要围绕高频 Q、冲阵后的回复，以及第二次进场展开。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "秘术冲拳", tier: "S", note: "普攻触发减 CD 后，可以把 Q 和 W 的循环拉起来。" },
      { name: "虚幻武器", tier: "S", note: "让技能触发普攻效果时，和秘术冲拳形成联动。" },
      { name: "炼狱导管", tier: "A", note: "持续命中时提高技能频率，适合长时间混战。" },
    ],
    builds: [
      { label: "秘术冲拳联动", items: ["夺萃之镰", "破败王者之刃", "贪欲九头蛇"], note: "优先解决技能循环和蓝量，再补持续作战能力。" },
      { label: "半肉冲阵", items: ["破败王者之刃", "死亡之舞", "振奋盔甲"], note: "敌方爆发高时，进场后的回复和承伤比纯输出更重要。" },
      { label: "技能急速成长", items: ["朔极之矛", "魔切", "死亡之舞"], note: "拿到高频技能海克斯后，围绕技能急速和资源循环成型。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["破败王者之刃", "贪欲九头蛇", "黑色切割者"], note: "用持续技能和百分比伤害处理前排，不要一头撞进去秒人。" },
      { id: "burst", label: "对面多爆发", items: ["破败王者之刃", "死亡之舞", "振奋盔甲"], note: "先让第一轮伤害可承受，再利用移速和回复拉出第二轮。" },
      { id: "control", label: "对面多控制", items: ["水银之靴", "死亡之舞", "振奋盔甲"], note: "不要在控制都没交时单人冲阵，等待更好的二次进场。" },
      { id: "poke", label: "对面远程消耗", items: ["破败王者之刃", "朔极之矛", "死亡之舞"], note: "尽快接近并维持技能循环，避免在远处被消耗到无法进场。" },
    ],
  },
  {
    id: "masteryi",
    name: "无极剑圣",
    alias: "易大师",
    initial: "YI",
    avatar: "orange",
    roles: ["战士", "射手"],
    tier: "S",
    tierClass: "violet",
    tags: ["收割", "高频 Q", "残局接管"],
    note: "剑圣的具体路线取决于海克斯是否能把 Q 变成高频核心，以及敌方是否有稳定控制。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "秘术冲拳", tier: "S", note: "配合高技能急速可以显著提高 Q 的无敌和收割频率。" },
      { name: "升级：收集者", tier: "A", note: "敌方脆皮多时，强化收割线会更清晰。" },
      { name: "裁决使", tier: "A", note: "暴击路线成型后，适合快速结束残血目标。" },
    ],
    builds: [
      { label: "无限 Q 方向", items: ["夺萃之镰", "破败王者之刃", "贪欲九头蛇"], note: "需要足够技能急速和蓝量，先把 Q 循环做出来。" },
      { label: "暴击收割", items: ["无尽之刃", "收集者", "夺萃之镰"], note: "敌方脆皮多且控制少时，快速收割比站撸前排更重要。" },
      { label: "半肉容错", items: ["破败王者之刃", "死亡之舞", "斯特拉克的挑战护手"], note: "敌方控制和爆发高时，先保证第一次进场能活着退出。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["破败王者之刃", "贪欲九头蛇", "黑色切割者"], note: "不要把全部资源放在一次收割，先保证能持续处理前排。" },
      { id: "burst", label: "对面多爆发", items: ["破败王者之刃", "死亡之舞", "守护天使"], note: "第一次进场的目标是打出重置，不是立刻穿过全部敌人。" },
      { id: "control", label: "对面多控制", items: ["水银弯刀", "破败王者之刃", "死亡之舞"], note: "等关键控制交出再开大进场，水银弯刀留给决定生死的控制。" },
      { id: "poke", label: "对面远程消耗", items: ["夺萃之镰", "破败王者之刃", "收集者"], note: "先解决接近和蓝量，再用 Q 躲技能并寻找残血。" },
    ],
  },
  {
    id: "riven",
    name: "放逐之刃",
    alias: "锐雯",
    initial: "R",
    avatar: "orange",
    roles: ["战士"],
    tier: "A",
    tierClass: "gold",
    tags: ["连段爆发", "护盾换血", "二次进场"],
    note: "锐雯要根据海克斯决定是追求技能循环，还是用半肉装备把一次进场变成持续作战。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "秘术冲拳", tier: "S", note: "普攻减 CD 能显著提高技能连段的重复频率。" },
      { name: "终极唤醒", tier: "A", note: "提高大招频率，适合连续寻找进场和收割窗口。" },
      { name: "升级：死亡之舞", tier: "A", note: "敌方爆发高时，把海克斯收益转成更可靠的容错。" },
    ],
    builds: [
      { label: "默认半肉", items: ["焚天", "黑色切割者", "死亡之舞"], note: "兼顾技能急速、持续作战和第一轮进场后的生存。" },
      { label: "对面脆皮多", items: ["焚天", "朔极之矛", "无尽之刃"], note: "己方已有前排时，第三件再转更高爆发。" },
      { label: "敌方爆发高", items: ["焚天", "死亡之舞", "斯特拉克的挑战护手"], note: "先解决进场后被秒的问题，再补输出。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["焚天", "黑色切割者", "死亡之舞"], note: "技能急速和持续作战优先，避免只做一次性爆发。" },
      { id: "burst", label: "对面多爆发", items: ["焚天", "死亡之舞", "斯特拉克的挑战护手"], note: "护盾和伤害延迟能帮助你打出第二轮技能。" },
      { id: "control", label: "对面多控制", items: ["水银之靴", "焚天", "死亡之舞"], note: "不要把 E 和位移一次性交完，等待控制链断档。" },
      { id: "poke", label: "对面远程消耗", items: ["焚天", "朔极之矛", "黑色切割者"], note: "提高接近和技能频率，减少在边缘被慢慢磨死。" },
    ],
  },
  {
    id: "leona",
    name: "曙光女神",
    alias: "蕾欧娜",
    initial: "L",
    avatar: "gold",
    roles: ["前排"],
    tier: "A",
    tierClass: "gold",
    tags: ["硬控开团", "前排承伤", "保护后排"],
    note: "蕾欧娜不是只看开团次数，装备要保证她能活着打出第二轮控制并保护队友。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: [
      { name: "坦克引擎", tier: "S", note: "提高进入敌阵后的有效承伤，适合缺前排的队伍。" },
      { name: "终极唤醒", tier: "A", note: "大招更频繁时，开团和保护两个职责都能兼顾。" },
      { name: "炼狱导管", tier: "A", note: "技能持续命中时，提高控制循环和团队威胁。" },
    ],
    builds: [
      { label: "默认开团", items: ["心之钢", "日炎圣盾", "兰顿之兆"], note: "需要你主动开团并吃第一轮伤害时使用。" },
      { label: "对面 AP 多", items: ["心之钢", "振奋盔甲", "自然之力"], note: "把魔抗和回复做好，避免开完团立刻蒸发。" },
      { label: "保护后排", items: ["坚定之心", "冰霜之心", "荆棘之甲"], note: "己方后排强时，优先做减伤和限制敌方普攻。" },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["心之钢", "日炎圣盾", "冰霜之心"], note: "先限制对面前排的输出，再把控制留给突进者。" },
      { id: "burst", label: "对面多爆发", items: ["心之钢", "兰顿之兆", "振奋盔甲"], note: "开团后不要只追最远目标，优先保护己方输出。" },
      { id: "control", label: "对面多控制", items: ["水银之靴", "坚定之心", "心之钢"], note: "先保证自己能完成一轮控制链，再追求更多生命值。" },
      { id: "poke", label: "对面远程消耗", items: ["心之钢", "自然之力", "日炎圣盾"], note: "用移速和抗性尽快接近，别在远处和射手换血。" },
    ],
  },
];

const draftTemplates = {
  fighter: {
    avatar: "orange",
    role: "战士",
    augments: ["秘术冲拳", "虚幻武器", "关键暴击"],
    builds: [
      { label: "默认持续作战", items: ["三相之力", "死亡之舞", "黑色切割者"] },
      { label: "对面爆发较高", items: ["焚天", "死亡之舞", "斯特拉克的挑战护手"] },
      { label: "对面前排较多", items: ["破败王者之刃", "黑色切割者", "贪欲九头蛇"] },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["破败王者之刃", "黑色切割者", "死亡之舞"] },
      { id: "burst", label: "对面多爆发", items: ["死亡之舞", "斯特拉克的挑战护手", "守护天使"] },
      { id: "control", label: "对面多控制", items: ["水银之靴", "死亡之舞", "三相之力"] },
      { id: "poke", label: "对面远程消耗", items: ["三相之力", "破败王者之刃", "黑色切割者"] },
    ],
  },
  tank: {
    avatar: "green",
    role: "前排",
    augments: ["坦克引擎", "任务：钢化你心", "歌利亚巨人"],
    builds: [
      { label: "默认前排", items: ["心之钢", "日炎圣盾", "振奋盔甲"] },
      { label: "对面物理较多", items: ["心之钢", "荆棘之甲", "兰顿之兆"] },
      { label: "对面法术较多", items: ["心之钢", "自然之力", "狂徒铠甲"] },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["心之钢", "日炎圣盾", "荆棘之甲"] },
      { id: "burst", label: "对面多爆发", items: ["心之钢", "兰顿之兆", "振奋盔甲"] },
      { id: "control", label: "对面多控制", items: ["水银之靴", "振奋盔甲", "坚定之心"] },
      { id: "poke", label: "对面远程消耗", items: ["心之钢", "自然之力", "狂徒铠甲"] },
    ],
  },
  mage: {
    avatar: "violet",
    role: "法师",
    augments: ["炼狱导管", "大法师", "终极唤醒"],
    builds: [
      { label: "默认持续伤害", items: ["兰德里的折磨", "影焰", "虚空之杖"] },
      { label: "对面强开", items: ["黯炎火炬", "兰德里的折磨", "中娅沙漏"] },
      { label: "远程爆发", items: ["卢登的回声", "影焰", "灭世者的死亡之帽"] },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["兰德里的折磨", "虚空之杖", "瑞莱的冰晶节杖"] },
      { id: "burst", label: "对面多爆发", items: ["中娅沙漏", "影焰", "兰德里的折磨"] },
      { id: "control", label: "对面多控制", items: ["中娅沙漏", "法师之靴", "虚空之杖"] },
      { id: "poke", label: "对面远程消耗", items: ["卢登的回声", "影焰", "灭世者的死亡之帽"] },
    ],
  },
  assassin: {
    avatar: "orange",
    role: "刺客",
    augments: ["暴击律动", "穿针引线", "终极唤醒"],
    builds: [
      { label: "默认收割", items: ["收集者", "无尽之刃", "守护天使"] },
      { label: "对面爆发较高", items: ["焚天", "死亡之舞", "斯特拉克的挑战护手"] },
      { label: "对面前排较多", items: ["收集者", "多米尼克领主的致意", "无尽之刃"] },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["多米尼克领主的致意", "收集者", "无尽之刃"] },
      { id: "burst", label: "对面多爆发", items: ["焚天", "死亡之舞", "守护天使"] },
      { id: "control", label: "对面多控制", items: ["水银弯刀", "收集者", "守护天使"] },
      { id: "poke", label: "对面远程消耗", items: ["幽梦之灵", "收集者", "无尽之刃"] },
    ],
  },
  marksman: {
    avatar: "teal",
    role: "射手",
    augments: ["亮出你的剑", "双发快射", "关键暴击"],
    builds: [
      { label: "默认持续输出", items: ["破败王者之刃", "无尽之刃", "卢安娜的飓风"] },
      { label: "特效路线", items: ["海妖杀手", "破败王者之刃", "鬼索的狂暴之刃"] },
      { label: "敌方强开", items: ["破败王者之刃", "无尽之刃", "守护天使"] },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["破败王者之刃", "卢安娜的飓风", "界弓"] },
      { id: "burst", label: "对面多爆发", items: ["破败王者之刃", "无尽之刃", "守护天使"] },
      { id: "control", label: "对面多控制", items: ["破败王者之刃", "水银弯刀", "无尽之刃"] },
      { id: "poke", label: "对面远程消耗", items: ["卢安娜的飓风", "无尽之刃", "破败王者之刃"] },
    ],
  },
  support: {
    avatar: "gold",
    role: "辅助",
    augments: ["全心为你", "心灵净化", "终极唤醒"],
    builds: [
      { label: "默认保护", items: ["月石再生器", "救赎", "流水法杖"] },
      { label: "需要开团", items: ["钢铁烈阳之匣", "骑士之誓", "兰顿之兆"] },
      { label: "队伍缺伤害", items: ["月石再生器", "灭世者的死亡之帽", "中娅沙漏"] },
    ],
    situations: [
      { id: "frontline", label: "对面多前排", items: ["月石再生器", "流水法杖", "救赎"] },
      { id: "burst", label: "对面多爆发", items: ["钢铁烈阳之匣", "救赎", "骑士之誓"] },
      { id: "control", label: "对面多控制", items: ["水银之靴", "月石再生器", "救赎"] },
      { id: "poke", label: "对面远程消耗", items: ["救赎", "流水法杖", "月石再生器"] },
    ],
  },
};

/**
 * @param {{id:string,key:string,name:string,role:string}} seed
 * @returns {Hero}
 */
function makeDraftHero(seed) {
  const template = draftTemplates[seed.role] || draftTemplates.fighter;
  return {
    id: seed.id,
    name: seed.name,
    alias: seed.key,
    initial: seed.name.slice(0, 1),
    avatar: template.avatar,
    roles: [template.role],
    tier: "待定",
    tierClass: "",
    tags: ["完整名册", "待补专属数据"],
    note: "26.19 英雄名册条目已建立。当前出装和海克斯为定位模板，等待英雄专属样本与玩法校准。",
    stats: { winRate: "待接入", pickRate: "待接入", sample: "待接入" },
    coreAugments: template.augments.map((name) => ({ name, tier: "—", note: "定位模板，暂不代表正式强度排名。" })),
    builds: template.builds.map((build) => ({ ...build, note: "通用定位模板；正式版本将替换为该英雄的 26.19 专属路线。" })),
    situations: template.situations.map((situation) => ({ ...situation, note: "通用情境模板；正式版本将结合英雄技能、队友和对手数据校准。" })),
  };
}

/** @type {Hero[]} */
const heroes = [
  ...featuredHeroes,
  ...championSeeds.filter((seed) => !featuredHeroes.some((hero) => hero.id === seed.id)).map(makeDraftHero),
];

/** @type {AugmentRanking[]} */
const legacyAugmentRankings = [
  { rank: 1, name: "秘术冲拳", color: "棱彩", strength: "SS", tierClass: "", heroes: ["贾克斯", "人马", "剑圣"], note: "近身技能与普攻循环联动，适合需要连续接战的英雄。" },
  { rank: 2, name: "亮出你的剑", color: "棱彩", strength: "S", tierClass: "violet", heroes: ["亚索", "永恩", "剑圣"], note: "把强化收益转成持续普攻压力，需关注队伍进场条件。" },
  { rank: 3, name: "剧毒联动", color: "棱彩", strength: "S", tierClass: "pink", heroes: ["提莫", "莫甘娜", "卡莎"], note: "提高持续伤害和区域控制的联动价值。" },
  { rank: 7, name: "终极唤醒", color: "棱彩", strength: "S", tierClass: "violet", heroes: ["莫甘娜", "阿狸", "加里奥"], note: "大招频率越高，越能把进场、控制和撤退串成完整循环。" },
  { rank: 9, name: "双发快射", color: "棱彩", strength: "S", tierClass: "violet", heroes: ["卡莎", "艾希", "亚索"], note: "普攻频率提高后，特效和暴击路线的收益会明显变化。" },
  { rank: 12, name: "精怪魔法", color: "棱彩", strength: "A", tierClass: "gold", heroes: ["奥恩", "阿狸", "加里奥"], note: "改变技能伤害结构，选到后再把装备向法强和穿透移动。" },
  { rank: 13, name: "虚幻武器", color: "棱彩", strength: "S", tierClass: "violet", heroes: ["人马", "剑圣", "贾克斯"], note: "让技能触发普攻效果时，和秘术冲拳形成更强循环。" },
  { rank: 4, name: "坦克引擎", color: "黄金", strength: "S", tierClass: "", heroes: ["塔姆", "蕾欧娜", "加里奥"], note: "把承伤、控制和保护能力集中到前排职责。" },
  { rank: 5, name: "坚韧", color: "黄金", strength: "S", tierClass: "", heroes: ["贾克斯", "塔姆", "奥恩"], note: "敌方爆发高或队伍缺前排时，容错收益更明显。" },
  { rank: 6, name: "任务：钢化你心", color: "黄金", strength: "A", tierClass: "gold", heroes: ["奥恩", "塔姆", "加里奥"], note: "生命值成长需要同步补抗性，不能只看血量面板。" },
  { rank: 8, name: "炼狱导管", color: "黄金", strength: "A", tierClass: "gold", heroes: ["莫甘娜", "阿狸", "人马"], note: "持续命中时提高技能循环，适合消耗型法师和持续接战英雄。" },
  { rank: 10, name: "关键暴击", color: "黄金", strength: "A", tierClass: "gold", heroes: ["卡莎", "艾希", "亚索"], note: "看到后再考虑暴击装备，不要在没有联动时强行转型。" },
  { rank: 11, name: "歌利亚巨人", color: "黄金", strength: "A", tierClass: "gold", heroes: ["奥恩", "加里奥", "塔姆"], note: "成长型前排海克斯，后续装备要补抗性和回复。" },
  { rank: 15, name: "裁决使", color: "黄金", strength: "A", tierClass: "gold", heroes: ["剑圣", "锐雯", "亚索"], note: "暴击和收割路线的候选海克斯，需要看敌方控制量。" },
  { rank: 14, name: "升级：收集者", color: "白银", strength: "A", tierClass: "gold", heroes: ["剑圣", "卡莎", "艾希"], note: "敌方脆皮多时提高收割确定性，前排局不要盲目选择。" },
  { rank: 16, name: "升级：死亡之舞", color: "白银", strength: "A", tierClass: "gold", heroes: ["锐雯", "贾克斯", "人马"], note: "敌方爆发高时提升进场容错，避免只看面板伤害。" },
];

/** @param {string} name @returns {string[]} */
function fitHeroesForAugment(name) {
  if (/坦克|巨人|防御|护盾|坚决|钢化|星界躯体|高压锅|荆棘|不动如山|豪猪|治疗|祝福|奏鸣|全心|心灵|净化|我们的治疗|至高天诺言/.test(name)) return ["塔姆", "奥恩", "蕾欧娜"];
  if (/暴击|飞弹|射击|瞄准|神射|台风|三重|双刀|狙神|穿针|利刃|回响施放|可靠武器|由暴生急|闪电|轻拍/.test(name)) return ["卡莎", "艾希", "亚索"];
  if (/魔法|大法师|法师|巫师|炼狱|火狐|灵魄|属性|咒语|珠光|精怪|科学|超强大脑|回归基本功|物法/.test(name)) return ["莫甘娜", "阿狸", "提莫"];
  if (/杀意|夜狩|杀戮|濒死|飞身踢|全凭身法|死亡之环|位面|渴血|虹吸|吞噬灵魂|超负荷|尊我为王/.test(name)) return ["人马", "锐雯", "剑圣"];
  return ["贾克斯", "人马", "锐雯"];
}

const legacyAugmentMap = new Map(legacyAugmentRankings.map((augment) => [augment.name, augment]));
/** @type {AugmentRanking[]} */
let augmentRankings = augmentSeeds.map((augment) => {
  const legacy = legacyAugmentMap.get(augment.name);
  return {
    ...augment,
    strength: legacy?.strength || "—",
    tierClass: legacy?.tierClass || "",
    heroes: legacy?.heroes || fitHeroesForAugment(augment.name),
    note: legacy?.note || "26.19 目录条目；适配英雄为角色联动模板，待真实对局统计校准。",
    recommendationStatus: legacy ? "编辑草案" : "角色模板",
  };
});

const tierOrder = { SS: 0, S: 1, A: 2, B: 3, C: 4, 待定: 9 };
const state = { query: "", role: "全部", sort: "tier", selected: "jax", scenarioHero: "jax", scenarioThreat: "frontline" };
const championKeys = { jax: "Jax", yasuo: "Yasuo", teemo: "Teemo", tahm: "TahmKench", ornn: "Ornn", kaisa: "Kaisa", morgana: "Morgana", galio: "Galio", ashe: "Ashe", ahri: "Ahri", hecarim: "Hecarim", masteryi: "MasterYi", riven: "Riven", leona: "Leona", ...Object.fromEntries(championSeeds.map((champion) => [champion.id, champion.key])) };
const championIds = { jax: 24, yasuo: 157, teemo: 17, tahm: 223, ornn: 516, kaisa: 145, morgana: 25, galio: 3, ashe: 22, ahri: 103, hecarim: 120, masteryi: 11, riven: 92, leona: 89 };
/** @type {Record<string, number>} */
const itemIds = {
  "三相之力": 3078,
  "破败王者之刃": 3153,
  "死亡之舞": 6333,
  "冰霜之心": 3110,
  "振奋盔甲": 3065,
  "兰顿之兆": 3143,
  "黑色切割者": 3071,
  "斯特拉克的挑战护手": 3053,
  "水银之靴": 3111,
  "水银弯刀": 3139,
  "无尽之刃": 3031,
  "纳沃利迅刃": 6675,
  "饮血剑": 3072,
  "卢安娜的飓风": 3085,
  "兰德里的折磨": 3116,
  "影焰": 4646,
  "虚空之杖": 3135,
  "法师之靴": 3020,
  "中娅沙漏": 3157,
  "纳什之牙": 3115,
  "鬼索的狂暴之刃": 3124,
  "智慧末刃": 3091,
  "黯炎火炬": 4645,
  "瑞莱的冰晶节杖": 3118,
  "心之钢": 3084,
  "狂徒铠甲": 3083,
  "荆棘之甲": 3075,
  "千变者贾修": 6665,
  "自然之力": 4401,
  "日炎圣盾": 3068,
  "无终恨意": 2502,
  "幽梦之灵": 3142,
  "月石再生器": 6610,
  "救赎": 3107,
  "流水法杖": 6614,
  "钢铁烈阳之匣": 3190,
  "骑士之誓": 3109,
  "斯塔缇克电刃": 3087,
  "夺萃之镰": 3508,
  "贪欲九头蛇": 3748,
  "朔极之矛": 3161,
  "焚天": 6692,
  "守护天使": 3026,
  "收集者": 6676,
  "海妖杀手": 6672,
  "卢登的回声": 6655,
  "视界专注": 4628,
  "灭世者的死亡之帽": 3089,
  "多米尼克领主的致意": 3036,
  "育恩塔尔荒野箭": 3032,
  "界弓": 3302,
};
const assets = { baseUrl: "", championUrls: {}, championFallbackUrls: {}, itemUrls: {}, itemNamesById: {} };
Object.entries(championIds).forEach(([heroId, championId]) => {
  const communityDragonUrl = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`;
  assets.championUrls[heroId] = communityDragonUrl;
  assets.championFallbackUrls[heroId] = communityDragonUrl;
});
const heroList = document.querySelector("#heroList");
const detailPanel = document.querySelector("#detailPanel");
const resultCount = document.querySelector("#resultCount");
const scenarioHero = document.querySelector("#scenarioHero");
const scenarioThreat = document.querySelector("#scenarioThreat");
const scenarioResult = document.querySelector("#scenarioResult");

/** @param {Hero} hero */
function avatarMarkup(hero) {
  const imageUrl = assets.championUrls[hero.id];
  const fallbackUrl = assets.championFallbackUrls[hero.id];
  return `<span class="avatar ${hero.avatar}">${imageUrl ? `<img src="${imageUrl}" alt="${hero.name}头像" data-avatar-image data-fallback-src="${fallbackUrl || ""}" /><b class="avatar-fallback" hidden>${hero.initial}</b>` : `<b class="avatar-fallback">${hero.initial}</b>`}</span>`;
}

/** @param {BuildItemRef} item */
function itemMarkup(item) {
  const itemId = typeof item === "object" ? item.id : itemIds[item];
  const itemName = typeof item === "object" ? item.name : item;
  const label = (itemId && assets.itemNamesById[String(itemId)]) || itemName;
  const imageUrl = itemId && assets.baseUrl ? `${assets.baseUrl}/img/item/${itemId}.png` : assets.itemUrls[itemName] || (itemId ? `https://ddragon.leagueoflegends.com/cdn/16.19.1/img/item/${itemId}.png` : "");
  return `<em class="item-chip">${imageUrl ? `<img src="${imageUrl}" alt="${label}图标" data-item-image />` : `<span class="item-placeholder">◆</span>`}<span>${label}</span></em>`;
}

function bindAssetFallbacks() {
  document.querySelectorAll("[data-avatar-image]").forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.fallbackSrc && image.dataset.fallbackTried !== "true") {
        image.dataset.fallbackTried = "true";
        image.src = image.dataset.fallbackSrc;
        return;
      }
      image.remove();
      const fallback = image.parentElement?.querySelector(".avatar-fallback");
      if (fallback) fallback.hidden = false;
    });
  });
  document.querySelectorAll("[data-item-image]").forEach((image) => {
    image.addEventListener("error", () => {
      image.remove();
      const placeholder = image.parentElement?.querySelector(".item-placeholder");
      if (placeholder) placeholder.hidden = false;
    });
  });
}

/** @param {Hero} hero */
function heroText(hero) {
  return [hero.name, hero.alias, hero.note, ...hero.roles, ...hero.tags, ...hero.coreAugments.map((item) => item.name), ...hero.builds.flatMap((build) => [build.label, ...build.items, build.note])].join(" ").toLowerCase();
}

/** @param {Hero} hero */
function matches(hero) {
  const query = state.query.trim().toLowerCase();
  const roleMatch = state.role === "全部" || hero.roles.includes(state.role);
  return roleMatch && (!query || heroText(hero).includes(query));
}

/** @returns {Hero[]} */
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
        <span class="ranking-hero">${avatarMarkup(hero)}<span><strong>${hero.name}</strong><small>${hero.alias} · ${hero.roles.join(" / ")}</small></span></span>
        <span class="ranking-tier"><b class="tier ${hero.tierClass}">${hero.tier}</b><small>${hero.dataState === "统计快照" ? "统计快照" : "待补数据"}</small></span>
        <span class="ranking-augment">${hero.coreAugments.slice(0, 2).map((item) => `<em>${item.name}</em>`).join("")}</span>
        <span class="ranking-data"><strong>${hero.stats.winRate}</strong><small>样本 ${hero.stats.sample}</small></span>
      </button>
    `).join("")
    : `<div class="empty-state">没有找到匹配的英雄、海克斯或出装关键词。</div>`;

  bindAssetFallbacks();
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
  const sourceStatus = hero.dataState === "统计快照" ? "统计快照" : "编辑草案";
  detailPanel.innerHTML = `
    <div class="detail-kicker"><span>DECISION CARD</span><span>${sourceStatus}</span></div>
    <div class="detail-title">${avatarMarkup(hero)}<div><h3>${hero.name}</h3><p>${hero.alias} · ${hero.roles.join(" / ")}</p></div><b class="tier ${hero.tierClass}">${hero.tier}</b></div>
    <div class="metric-strip"><div><strong>${hero.stats.winRate}</strong><span>胜率</span></div><div><strong>${hero.stats.pickRate}</strong><span>选择率</span></div><div><strong>${hero.stats.sample}</strong><span>样本</span></div></div>
    <p class="detail-summary">${hero.note}</p>
    <h4>海克斯优先级</h4>
    <div class="augment-stack">${hero.coreAugments.map((item) => `<div class="augment-item"><b class="mini-tier ${item.rarity === "棱彩" ? "ss" : item.rarity === "黄金" ? "s" : ""}">${item.rarity || item.tier || "—"}</b><span><strong>${item.name}</strong><small>${item.note || `${item.winRate || "—"} 胜率 · ${item.sample || 0} 局 · 选择率 ${item.pickRate || "—"}`}</small></span></div>`).join("")}</div>
    <h4>出装决策</h4>
    <div class="decision-table">${hero.builds.map((build) => `<div class="decision-row"><strong>${build.label}</strong><span class="item-chips">${build.items.map(itemMarkup).join("")}</span><small>${build.note}</small></div>`).join("")}</div>
    <div class="detail-footnote">数据状态：${sourceStatus}。${hero.source ? ` <a href="${hero.source}" target="_blank" rel="noreferrer">查看该英雄原始快照</a>` : ""}</div>
  `;
  bindAssetFallbacks();
}

function renderAugments() {
  document.querySelector("#augmentCount").textContent = augmentRankings.length;
  const groups = ["白银", "黄金", "棱彩"];
  document.querySelector("#augmentList").innerHTML = groups.map((color) => {
    const group = augmentRankings.filter((augment) => augment.color === color).sort((left, right) => left.rank - right.rank);
    return `
      <section class="augment-group">
        <div class="augment-group-heading"><div><span class="color-badge ${color === "棱彩" ? "prismatic" : color === "黄金" ? "gold" : "silver"}">${color}</span><strong>${color}海克斯</strong></div><small>每个条目列出最适配的 3 个英雄</small></div>
        <div class="augment-table">
          <div class="augment-head"><span># / 海克斯</span><span>稀有度</span><span>最适配英雄</span><span>联动方向 / 状态</span></div>
          ${group.map((augment) => `<div class="augment-row"><span class="rank-index">${String(augment.rank).padStart(3, "0")}</span><span class="augment-name"><strong>${augment.name}</strong><small>26.19 目录</small></span><span><b class="color-badge ${augment.color === "棱彩" ? "prismatic" : augment.color === "黄金" ? "gold" : "silver"}">${augment.color}</b></span><span class="augment-copy"><strong class="fit-heroes">${augment.heroes.map((hero, index) => `<em>${index + 1}. ${hero}</em>`).join("")}</strong><small>${augment.note} · ${augment.recommendationStatus}</small></span></div>`).join("")}
        </div>
      </section>
    `;
  }).join("");
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
  const sourceStatus = hero.dataState === "统计快照" ? "统计 + 情境规则" : "编辑草案";
  scenarioResult.innerHTML = `
    <div class="scenario-result-top"><span class="eyebrow">RECOMMENDATION</span><span class="status-pill">${sourceStatus}</span></div>
    <h3>${hero.name} · ${situation.label}</h3>
    <p>${situation.note}</p>
    <div class="scenario-items">${situation.items.map(itemMarkup).join("")}</div>
    <small>${hero.dataState === "统计快照" ? "装备来自英雄专属统计；情境标签用于帮助你在对局中从统计候选池做决策。" : "正式版本将补充装备 ID、样本量和数据来源。"}</small>
  `;
  bindAssetFallbacks();
}

async function hydrateAssets() {
  try {
    const versions = await fetch("https://ddragon.leagueoflegends.com/api/versions.json").then((response) => response.json());
    const version = versions[0];
    const baseUrl = `https://ddragon.leagueoflegends.com/cdn/${version}`;
    const itemData = await fetch(`${baseUrl}/data/zh_CN/item.json`).then((response) => response.json());
    assets.baseUrl = baseUrl;
    heroes.forEach((hero) => {
      assets.championUrls[hero.id] = `${baseUrl}/img/champion/${championKeys[hero.id]}.png`;
      assets.championFallbackUrls[hero.id] = championIds[hero.id]
        ? `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championIds[hero.id]}.png`
        : "";
    });
    Object.values(itemData.data).forEach((item) => {
      if (item.name && !assets.itemUrls[item.name]) assets.itemUrls[item.name] = `${baseUrl}/img/item/${item.id}.png`;
      if (item.name) assets.itemNamesById[String(item.id)] = item.name;
    });
    Object.entries(itemIds).forEach(([name, id]) => {
      if (!assets.itemUrls[name]) assets.itemUrls[name] = `${baseUrl}/img/item/${id}.png`;
    });
    renderHeroList();
    renderDetail();
    renderScenario();
  } catch (error) {
    console.info("游戏图标加载失败，保留文字 fallback。", error);
  }
}

async function hydrateGuideData() {
  try {
    const payload = await fetch("./data/aram-mayhem-26.19.json").then((response) => response.json());
    heroes.forEach((hero) => {
      const sourceHero = payload.champions[hero.id];
      if (!sourceHero) return;
      Object.assign(hero, sourceHero, { dataState: "统计快照", alias: hero.alias });
      championIds[hero.id] = sourceHero.sourceId;
      const communityDragonUrl = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${sourceHero.sourceId}.png`;
      assets.championUrls[hero.id] = assets.championUrls[hero.id] || communityDragonUrl;
      assets.championFallbackUrls[hero.id] = communityDragonUrl;
    });
    const groups = ["白银", "黄金", "棱彩"];
    augmentRankings = groups.flatMap((color) => payload.augments
      .filter((augment) => augment.rarity === color)
      .sort((left, right) => Number.parseFloat(right.winRate) - Number.parseFloat(left.winRate))
      .map((augment, index) => ({
        ...augment,
        color,
        rank: index + 1,
        tierClass: augment.strength === "SS" ? "" : augment.strength === "S" ? "violet" : augment.strength === "A" ? "gold" : "pink",
      })));
    renderHeroList();
    renderDetail();
    renderAugments();
    renderScenarioHeroOptions();
  } catch (error) {
    console.info("统计快照加载失败，保留本地草案。", error);
  }
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
hydrateAssets();
hydrateGuideData();
