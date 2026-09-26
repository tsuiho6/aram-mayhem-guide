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
];

const augmentRankings = [
  { rank: 1, name: "秘术冲拳", tier: "SS", tierClass: "", heroes: "贾克斯 / 亚索", note: "近身技能与普攻循环联动，适合需要连续接战的英雄。" },
  { rank: 2, name: "亮出你的剑", tier: "S", tierClass: "violet", heroes: "亚索", note: "把强化收益转成持续普攻压力，需关注队伍进场条件。" },
  { rank: 3, name: "剧毒联动", tier: "S", tierClass: "pink", heroes: "提莫", note: "提高持续伤害和区域控制的联动价值。" },
  { rank: 4, name: "坦克引擎", tier: "S", tierClass: "", heroes: "塔姆·肯奇", note: "把承伤、控制和保护能力集中到前排职责。" },
  { rank: 5, name: "坚韧", tier: "S", tierClass: "", heroes: "贾克斯 / 塔姆·肯奇", note: "敌方爆发高或队伍缺前排时，容错收益更明显。" },
  { rank: 6, name: "钢铁之心任务", tier: "A", tierClass: "gold", heroes: "塔姆·肯奇", note: "生命值成长需要同步补抗性，不能只看血量面板。" },
  { rank: 7, name: "终极唤醒", tier: "S", tierClass: "violet", heroes: "莫甘娜 / 阿狸 / 加里奥", note: "大招频率越高，越能把进场、控制和撤退串成完整循环。" },
  { rank: 8, name: "炼狱导管", tier: "A", tierClass: "gold", heroes: "莫甘娜 / 阿狸", note: "持续命中时提高技能循环，适合消耗型法师。" },
  { rank: 9, name: "双发快射", tier: "S", tierClass: "violet", heroes: "卡莎 / 艾希", note: "普攻频率提高后，特效和暴击路线的收益会明显变化。" },
  { rank: 10, name: "关键暴击", tier: "A", tierClass: "gold", heroes: "卡莎 / 艾希", note: "看到后再考虑暴击装备，不要在没有联动时强行转型。" },
  { rank: 11, name: "歌利亚巨人", tier: "A", tierClass: "gold", heroes: "奥恩 / 加里奥", note: "成长型前排海克斯，后续装备要补抗性和回复。" },
  { rank: 12, name: "精怪魔法", tier: "A", tierClass: "gold", heroes: "奥恩 / 阿狸", note: "改变技能伤害结构，选到后再把装备向法强和穿透移动。" },
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
