// 26.19 目录快照：英雄名册与可用海克斯。推荐内容仍需用正式统计持续校准。
const championSeeds = [
  ["aatrox", "Aatrox", "暗裔剑魔", "fighter"],
  ["ahri", "Ahri", "九尾妖狐", "mage"],
  ["akali", "Akali", "离群之刺", "assassin"],
  ["akshan", "Akshan", "影哨", "marksman"],
  ["alistar", "Alistar", "牛头酋长", "tank"],
  ["ambessa", "Ambessa", "安蓓萨", "fighter"],
  ["amumu", "Amumu", "殇之木乃伊", "tank"],
  ["anivia", "Anivia", "冰晶凤凰", "mage"],
  ["annie", "Annie", "黑暗之女", "mage"],
  ["aphelios", "Aphelios", "残月之肃", "marksman"],
  ["ashe", "Ashe", "寒冰射手", "marksman"],
  ["aurelionsol", "AurelionSol", "铸星龙王", "mage"],
  ["aurora", "Aurora", "阿萝拉", "mage"],
  ["azir", "Azir", "沙漠皇帝", "mage"],
  ["bard", "Bard", "星界游神", "support"],
  ["belveth", "Belveth", "虚空女皇", "fighter"],
  ["blitzcrank", "Blitzcrank", "蒸汽机器人", "tank"],
  ["brand", "Brand", "复仇焰魂", "mage"],
  ["braum", "Braum", "弗雷尔卓德之心", "tank"],
  ["briar", "Briar", "狂厄蔷薇", "fighter"],
  ["caitlyn", "Caitlyn", "皮城女警", "marksman"],
  ["camille", "Camille", "青钢影", "fighter"],
  ["cassiopeia", "Cassiopeia", "魔蛇之拥", "mage"],
  ["chogath", "Chogath", "虚空恐惧", "tank"],
  ["corki", "Corki", "英勇投弹手", "marksman"],
  ["darius", "Darius", "诺克萨斯之手", "fighter"],
  ["diana", "Diana", "皎月女神", "fighter"],
  ["draven", "Draven", "荣耀行刑官", "marksman"],
  ["drmundo", "DrMundo", "祖安狂人", "tank"],
  ["ekko", "Ekko", "时间刺客", "assassin"],
  ["elise", "Elise", "蜘蛛女皇", "mage"],
  ["evelynn", "Evelynn", "痛苦之拥", "assassin"],
  ["ezreal", "Ezreal", "探险家", "marksman"],
  ["fiddlesticks", "Fiddlesticks", "远古恐惧", "mage"],
  ["fiora", "Fiora", "无双剑姬", "fighter"],
  ["fizz", "Fizz", "潮汐海灵", "assassin"],
  ["galio", "Galio", "正义巨像", "tank"],
  ["gangplank", "Gangplank", "海洋之灾", "fighter"],
  ["garen", "Garen", "德玛西亚之力", "fighter"],
  ["gnar", "Gnar", "迷失之牙", "fighter"],
  ["gragas", "Gragas", "酒桶", "fighter"],
  ["graves", "Graves", "法外狂徒", "marksman"],
  ["gwen", "Gwen", "灵罗娃娃", "fighter"],
  ["hecarim", "Hecarim", "战争之影", "fighter"],
  ["heimerdinger", "Heimerdinger", "大发明家", "mage"],
  ["hwei", "Hwei", "彗", "mage"],
  ["illaoi", "Illaoi", "海兽祭司", "fighter"],
  ["irelia", "Irelia", "刀锋舞者", "fighter"],
  ["ivern", "Ivern", "翠神", "support"],
  ["janna", "Janna", "风暴之怒", "support"],
  ["jarvaniv", "JarvanIV", "德玛西亚皇子", "fighter"],
  ["jax", "Jax", "武器大师", "fighter"],
  ["jayce", "Jayce", "未来守护者", "fighter"],
  ["jhin", "Jhin", "戏命师", "marksman"],
  ["jinx", "Jinx", "暴走萝莉", "marksman"],
  ["ksante", "KSante", "纳祖芒荣耀", "tank"],
  ["kaisa", "Kaisa", "虚空之女", "marksman"],
  ["kalista", "Kalista", "复仇之矛", "marksman"],
  ["karma", "Karma", "天启者", "support"],
  ["karthus", "Karthus", "死亡颂唱者", "mage"],
  ["kassadin", "Kassadin", "虚空行者", "assassin"],
  ["katarina", "Katarina", "不祥之刃", "assassin"],
  ["kayle", "Kayle", "正义天使", "fighter"],
  ["kayn", "Kayn", "影流之镰", "fighter"],
  ["kennen", "Kennen", "狂暴之心", "mage"],
  ["khazix", "Khazix", "虚空掠夺者", "assassin"],
  ["kindred", "Kindred", "永猎双子", "marksman"],
  ["kled", "Kled", "暴怒骑士", "fighter"],
  ["kogmaw", "KogMaw", "深渊巨口", "marksman"],
  ["leblanc", "Leblanc", "诡术妖姬", "assassin"],
  ["leesin", "LeeSin", "盲僧", "fighter"],
  ["leona", "Leona", "曙光女神", "tank"],
  ["lillia", "Lillia", "含羞蓓蕾", "mage"],
  ["lissandra", "Lissandra", "冰霜女巫", "mage"],
  ["lucian", "Lucian", "圣枪游侠", "marksman"],
  ["lulu", "Lulu", "仙灵女巫", "support"],
  ["lux", "Lux", "光辉女郎", "mage"],
  ["malphite", "Malphite", "熔岩巨兽", "tank"],
  ["malzahar", "Malzahar", "虚空先知", "mage"],
  ["maokai", "Maokai", "扭曲树精", "tank"],
  ["masteryi", "MasterYi", "无极剑圣", "fighter"],
  ["mel", "Mel", "梅尔", "mage"],
  ["milio", "Milio", "明烛", "support"],
  ["missfortune", "MissFortune", "赏金猎人", "marksman"],
  ["mordekaiser", "Mordekaiser", "铁铠冥魂", "fighter"],
  ["morgana", "Morgana", "堕落天使", "mage"],
  ["naafiri", "Naafiri", "百裂冥犬", "assassin"],
  ["nami", "Nami", "唤潮鲛姬", "support"],
  ["nasus", "Nasus", "沙漠死神", "fighter"],
  ["nautilus", "Nautilus", "深海泰坦", "tank"],
  ["neeko", "Neeko", "万花通灵", "mage"],
  ["nidalee", "Nidalee", "狂野女猎手", "assassin"],
  ["nilah", "Nilah", "不羁之悦", "marksman"],
  ["nocturne", "Nocturne", "永恒梦魇", "assassin"],
  ["nunu", "Nunu", "雪原双子", "tank"],
  ["olaf", "Olaf", "狂战士", "fighter"],
  ["orianna", "Orianna", "发条魔灵", "mage"],
  ["ornn", "Ornn", "山隐之焰", "tank"],
  ["pantheon", "Pantheon", "不屈之志", "fighter"],
  ["poppy", "Poppy", "圣锤之毅", "tank"],
  ["pyke", "Pyke", "血港鬼影", "assassin"],
  ["qiyana", "Qiyana", "元素女皇", "assassin"],
  ["quinn", "Quinn", "德玛西亚之翼", "marksman"],
  ["rakan", "Rakan", "幻翎", "support"],
  ["rammus", "Rammus", "披甲龙龟", "tank"],
  ["reksai", "RekSai", "虚空遁地兽", "fighter"],
  ["rell", "Rell", "镕铁少女", "tank"],
  ["renata", "Renata", "炼金男爵", "support"],
  ["renekton", "Renekton", "荒漠屠夫", "fighter"],
  ["rengar", "Rengar", "傲之追猎者", "assassin"],
  ["riven", "Riven", "放逐之刃", "fighter"],
  ["rumble", "Rumble", "机械公敌", "fighter"],
  ["ryze", "Ryze", "符文法师", "mage"],
  ["samira", "Samira", "沙漠玫瑰", "marksman"],
  ["sejuani", "Sejuani", "北地之怒", "tank"],
  ["senna", "Senna", "涤魂圣枪", "marksman"],
  ["seraphine", "Seraphine", "星籁歌姬", "support"],
  ["sett", "Sett", "腕豪", "fighter"],
  ["shaco", "Shaco", "恶魔小丑", "assassin"],
  ["shen", "Shen", "暮光之眼", "tank"],
  ["shyvana", "Shyvana", "龙血武姬", "fighter"],
  ["singed", "Singed", "炼金术士", "tank"],
  ["sion", "Sion", "亡灵战神", "tank"],
  ["sivir", "Sivir", "战争女神", "marksman"],
  ["skarner", "Skarner", "水晶先锋", "tank"],
  ["smolder", "Smolder", "炽炎雏龙", "marksman"],
  ["sona", "Sona", "琴瑟仙女", "support"],
  ["soraka", "Soraka", "众星之子", "support"],
  ["swain", "Swain", "诺克萨斯统领", "mage"],
  ["sylas", "Sylas", "解脱者", "fighter"],
  ["syndra", "Syndra", "暗黑元首", "mage"],
  ["tahm", "TahmKench", "河流之王", "tank"],
  ["taliyah", "Taliyah", "岩雀", "mage"],
  ["talon", "Talon", "刀锋之影", "assassin"],
  ["taric", "Taric", "瓦洛兰之盾", "support"],
  ["teemo", "Teemo", "迅捷斥候", "mage"],
  ["thresh", "Thresh", "魂锁典狱长", "support"],
  ["tristana", "Tristana", "麦林炮手", "marksman"],
  ["trundle", "Trundle", "巨魔之王", "fighter"],
  ["tryndamere", "Tryndamere", "蛮族之王", "fighter"],
  ["twistedfate", "TwistedFate", "卡牌大师", "mage"],
  ["twitch", "Twitch", "瘟疫之源", "marksman"],
  ["udyr", "Udyr", "兽灵行者", "fighter"],
  ["urgot", "Urgot", "无畏战车", "fighter"],
  ["varus", "Varus", "惩戒之箭", "marksman"],
  ["vayne", "Vayne", "暗夜猎手", "marksman"],
  ["veigar", "Veigar", "邪恶小法师", "mage"],
  ["velkoz", "Velkoz", "虚空之眼", "mage"],
  ["vex", "Vex", "愁云使者", "mage"],
  ["vi", "Vi", "皮城执法官", "fighter"],
  ["viego", "Viego", "破败之王", "fighter"],
  ["viktor", "Viktor", "机械先驱", "mage"],
  ["vladimir", "Vladimir", "猩红收割者", "mage"],
  ["volibear", "Volibear", "不灭狂雷", "fighter"],
  ["warwick", "Warwick", "祖安怒兽", "fighter"],
  ["monkeyking", "MonkeyKing", "齐天大圣", "fighter"],
  ["xayah", "Xayah", "逆羽", "marksman"],
  ["xerath", "Xerath", "远古巫灵", "mage"],
  ["xinzhao", "XinZhao", "德邦总管", "fighter"],
  ["yasuo", "Yasuo", "疾风剑豪", "fighter"],
  ["yone", "Yone", "封魔剑魂", "fighter"],
  ["yorick", "Yorick", "牧魂人", "fighter"],
  ["yunara", "Yunara", "芸阿拉", "marksman"],
  ["yuumi", "Yuumi", "魔法猫咪", "support"],
  ["zaahen", "Zaahen", "Zaahen", "fighter"],
  ["zac", "Zac", "生化魔人", "tank"],
  ["zed", "Zed", "影流之主", "assassin"],
  ["zeri", "Zeri", "祖安花火", "marksman"],
  ["ziggs", "Ziggs", "爆破鬼才", "mage"],
  [" zilean", "Zilean", "时光守护者", "support"],
  ["zoe", "Zoe", "暮光星灵", "mage"],
  ["zyra", "Zyra", "荆棘之兴", "mage"],
  ["locke", "Locke", "Locke", "assassin"],
].map(([id, key, name, role]) => ({ id: id.trim(), key, name, role }));

const augmentSeeds = `
质变：棱彩阶|黄金
掷骰狂人|棱彩
缩小引擎|黄金
循环往复|黄金
亮出你的剑|棱彩
坦克引擎|黄金
炽燃利息|黄金
术士果汁盒|黄金
任务：钢化你心|黄金
暴击飞弹|黄金
无限循环往复|棱彩
灵魂虹吸|黄金
大力|白银
牙仙子|黄金
尤里卡|棱彩
超凡邪恶|黄金
重量级打击手|白银
易损|黄金
科学狂人|棱彩
虚幻武器|黄金
珠光护手|棱彩
有始有终|黄金
升级：无尽之刃|黄金
回归基本功|棱彩
歌利亚巨人|棱彩
逃跑计划|白银
炼狱导管|棱彩
双刀流|棱彩
巨人杀手|棱彩
捐赠|黄金
叠角龙|白银
飞身踢|棱彩
物理转魔法|白银
渴血|白银
空投熊|棱彩
灵巧|白银
家园卫士|白银
更万用的瞄准镜|黄金
小丑学院|棱彩
暗影疾奔|白银
大师铸就|白银
艾卡西亚的陷落|棱彩
会心防御|白银
喂呜喂呜|黄金
狂热者|白银
秘术冲拳|棱彩
任务：沃格勒特的巫师帽|棱彩
魔法飞弹|黄金
星界躯体|黄金
双生火焰|白银
升级：献祭|白银
暴击律动|黄金
旋转至胜|白银
质变：混沌|棱彩
属性叠属性！|黄金
纯粹主义者 - 术师|白银
风语者的祝福|棱彩
咏叹奏鸣|黄金
升级：收集者|白银
男爵之手|棱彩
魔法转物理|白银
狂徒豪气|黄金
狙神飞星|黄金
灵魄炸弹|棱彩
海洋龙魂|白银
练腿日|白银
最终形态|棱彩
快中求稳|白银
侵蚀|白银
任务：海牛阿福的勇士|棱彩
老练狙神|黄金
由心及物|白银
神射法师|黄金
无尽大杀四方|黄金
全能龙魂|棱彩
冰寒|白银
保持坚定|白银
急急小子|黄金
最万用的瞄准镜|棱彩
别停止引导|白银
大法师|棱彩
超强大脑|黄金
升级：中娅|白银
罪恶快感|黄金
连拨击锤|棱彩
巫师式思考|白银
死亡之环|棱彩
面包和黄油|黄金
俯冲轰炸|白银
踢踏舞|棱彩
地形专家|黄金
生机迸发|黄金
唯快不破|白银
急速之追求|黄金
尊我为王|棱彩
邦！|黄金
关键暴击|黄金
史上最大雪球|棱彩
穿针引线|黄金
扇巴掌|白银
小小的额外帮助|黄金
贪欲束缚|黄金
面包和奶酪|黄金
溢流|黄金
黎明使者的坚决|黄金
升级：耀光|黄金
天音爆|白银
威能之追求|白银
急救用具|白银
夺金|棱彩
回响施放|棱彩
吃过路兵|棱彩
过量延伸者|黄金
万用瞄准镜|白银
虹吸|白银
属性叠属性叠属性！|棱彩
台风|白银
高压锅|黄金
终极唤醒|棱彩
回力OK镖|黄金
战争交响乐|棱彩
火上浇油|黄金
点亮他们！|白银
吞噬灵魂|黄金
全心为你|黄金
哎哟，我的硬币！|黄金
不祥契约|棱彩
仆从大师|黄金
至高天诺言|棱彩
残忍|棱彩
海克斯科技龙魂|白银
会心治疗|黄金
物法皆修|棱彩
蛋白粉奶昔|棱彩
炼狱龙魂|白银
火狐|白银
面包和果酱|黄金
全凭身法|棱彩
巨像的勇气|棱彩
双发快射|棱彩
杀戮时间到了|黄金
利刃华尔兹|棱彩
潘朵拉的盒子|棱彩
尖端发明家|黄金
属性！|白银
夜狩|黄金
杀意翻涌|白银
濒死悟道|棱彩
鲨鱼诱饵|黄金
信念者的强化|棱彩
前进时间到|白银
超负荷|棱彩
强力护盾|白银
三重射击|棱彩
可靠武器|白银
炽烈黎明|黄金
双重防御|白银
神圣干预|黄金
终极刷新|棱彩
自适应防护|白银
仁慈打击|黄金
精怪魔法|棱彩
扳机炼狱|棱彩
终极不可阻挡|白银
你摸不到|棱彩
心灵净化|黄金
缩小射线|黄金
咒语裂变|棱彩
由暴生急|白银
古式佳酿|黄金
自然即是治愈|黄金
和我一起困在这里|棱彩
不动如山|黄金
快步|黄金
弹球|黄金
闪光弹|白银
豪猪|黄金
轻拍背部|黄金
山脉龙魂|白银
吵闹鬼|白银
舞会女王|棱彩
泰坦的坚决|棱彩
鲨鱼暴风|黄金
下雪天|白银
藏身草丛|黄金
闪闪现现|白银
惊惧|棱彩
软弹啪叽抓|棱彩
飞升仪式|棱彩
连锁反应|黄金
注魔|白银
我们的治疗|黄金
神圣雪球|棱彩
针插垫|棱彩
多重射击|棱彩
冰雪爆裂|黄金
电涌力场|棱彩
玻璃大炮|棱彩
转得我眩晕了|白银
位面转移|棱彩
魄罗蛮冲|棱彩
`.trim().split("\n").map((line, index) => {
  const [name, color] = line.split("|");
  return { rank: index + 1, name, color };
});

export { championSeeds, augmentSeeds };
