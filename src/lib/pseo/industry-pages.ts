import type { GeoPage } from "@/lib/geo-pages";
import { batch3IndustryPages } from "@/lib/pseo/batch3-pages";
import { relatedCard, weclawdPriceCell, withPseoShell, workbuddyPriceCell } from "@/lib/pseo/shell";

const freightNote =
  "货代公司自己的询盘、运价和报价跟进，用已有的 [货代 AI 助手](/zh/huodai-ai-zhushou) 和 [跨境电商物流行业页](/industries/cross-border-ecommerce-logistics)。这里写的是跨境卖家侧：怎么跟货代协作，不另做一套货代站。";

const illegalLine =
  "不做刷单、刷评、虚假流量、伪造物流轨迹或任何规避平台规则的动作。";

const humanLine =
  "对外回复、退款、改价、承诺送达时间和开发信发送，默认生成草稿，由人确认后再出去。";

const industryLinks = {
  zhushou: relatedCard(
    "/zh/kuajing-qiye-zhushou",
    "跨境电商企业助手",
    "客服、订单异常、物流协同、开发信。人在回路里。",
    "跨境",
  ),
  tixiao: relatedCard(
    "/zh/kuajing-qiye-tixiao",
    "跨境电商企业提效",
    "先量一条流程的等待时间，不先许诺一个百分比。",
    "跨境",
  ),
  funeng: relatedCard(
    "/zh/kuajing-ai-funeng",
    "跨境电商 AI 赋能",
    "4–50 人团队怎么从设计、训练走到每天在用。",
    "跨境",
  ),
  bangong: relatedCard(
    "/zh/kuajing-zhineng-bangong",
    "跨境电商智能办公",
    "时差、双语和混合工具栈下的办公层，不是再买一个聊天框。",
    "跨境",
  ),
  siyou: relatedCard(
    "/zh/kuajing-ai-siyou-bushu",
    "跨境 AI 助手私有部署",
    "客户名单和供货价放在哪，比模型名字更重要。",
    "跨境",
  ),
  huodai: relatedCard(
    "/zh/huodai-ai-zhushou",
    "货代 AI 助手",
    "物流服务商的询盘和运价。卖家页只链接，不重复。",
    "已有页面",
  ),
  kefu: relatedCard(
    "/zh/qiyefuwu-ai-zhushou",
    "企业客服 AI 助手",
    "通用客服草稿和升级。跨境页补上多站点订单和物流语境。",
    "已有页面",
  ),
  enterprise: relatedCard(
    "/enterprise",
    "企业陪跑计划",
    "3 天把 1–2 个跨境流程做完，系统留在客户侧。",
    "服务",
  ),
  workbuddy: relatedCard(
    "/compare/workbuddy-vs-weclawd",
    "WorkBuddy vs 喂龙虾",
    "腾讯云开箱办公，还是陪跑加可选的私有运行时。",
    "对比",
  ),
};

/**
 * Cross-border industry batch. Append a page here to publish `/zh/[slug]`.
 * The Chinese index, sitemap, and llms files read this array via geo-pages.
 */
export const pseoChinesePages: GeoPage[] = [
  withPseoShell({
    category: "industries",
    slug: "kuajing-qiye-zhushou",
    title: "跨境电商企业助手｜客服、订单、物流协同与开发信",
    h1: "跨境电商企业助手：先处理客服、异常单和跟进，不替代运营",
    description:
      "喂龙虾为跨境团队部署企业助手：整理多站点客服、标记异常订单、协同货代、起草开发信。对外动作由人确认。OpenClaw 只在客户选定该运行时时使用。",
    definition:
      "跨境电商企业助手是接在企微、飞书、邮箱或表格上的执行助手，帮运营减少复制粘贴。它不自动承诺退款和时效，也不做刷单刷评。运行时可以是客户选定的 OpenClaw，也可以是别的可私有化框架，由喂龙虾陪跑落地。",
    audience: "跨境电商创始人、运营负责人和客服主管，大约 4–50 人的团队",
    keywords: ["跨境电商 企业助手", "跨境电商 AI 助手", "跨境客服 助手", "跨境 开发信", "企业助手"],
    bullets: [
      "多站点客服问题先变成草稿和升级清单",
      "异常订单被点名，而不是淹没在群里",
      "跟货代的沟通留下待办，报价仍由人发",
      "开发信基于公开资料，发送前人工看一遍",
    ],
    workflows: ["售前售后草稿", "异常订单早报", "货代协同待办", "开发信草稿", "值班交接摘要"],
    sections: [
      {
        title: "一天里它实际碰的四件事",
        body: `客服：把重复的物流时效、尺码、发票问题整理成回复草稿，拿不准的升级给人。订单：从表格或授权后台摘要里标出地址异常、超时未发、缺货，不自动改价退款。物流协同：${freightNote} 开发信：只根据客户官网等公开信息起草，一封一个理由，禁止群发未经查看的稿。${illegalLine}`,
        items: [
          humanLine,
          "国内店铺运营的通用写法在 [电商运营 AI 助手](/zh/dianshang-yunying-ai-zhushou)，本页只写跨境差异：时差、双语、货代和平台规则",
          "客服分流的通用版在 [企业客服 AI 助手](/zh/qiyefuwu-ai-zhushou)",
        ],
      },
      {
        title: "人必须留在回路里",
        body: "跨境客服最贵的错误不是回复慢，是助手承诺了做不到的时效或退款。所以交付标准是草稿队列和提醒，不是无人店铺。销售跟进的通用节奏见 [销售跟进 AI 助手](/zh/xiaoshou-genjin-ai-zhushou)。开发信可以参考货代场景的能力演示 [自动开发信](/case/freight-auto-outreach)，那是演示不是跨境成交案例，方法是「公开信息、可核对、人审再发」。",
      },
      {
        title: "运行时以后再选",
        body: "助手是工作方式，不是某一个框架的别名。团队若已经在腾讯云和企业微信里，且接受其产品边界，[WorkBuddy](/compare/workbuddy-vs-weclawd) 可能更短，不必为了「企业助手」四个字改到 OpenClaw。团队若要数据在自己环境、通道含飞书和境外邮箱，再选定 OpenClaw 或别的框架，由喂龙虾部署或陪跑。安装套餐和企业陪跑不是同一张订单，见 [企业陪跑计划](/enterprise)。",
      },
    ],
    faqs: [
      {
        q: "企业助手能不能直接回复海外买家？",
        a: "默认不能。它准备草稿和缺失信息清单。涉及退款、补发、时效和价格的句子，由客服发出。",
      },
      {
        q: "能连接哪些平台？",
        a: "常见起点是企业微信、飞书、邮箱和表格，而不是先承诺每一个电商后台的官方接口。后台如果没有稳定授权，就从导出表和邮件开始，不编造接口。",
      },
      {
        q: "和货代 AI 助手是同一个产品吗？",
        a: "不是。货代页给物流公司用。本页给跨境卖家用，物流部分只做到协同和提醒，并链接到货代专页。",
      },
      {
        q: "是否保证 GMV 或广告回报？",
        a: "不保证。能验收的是某一条流程：未回复是否被看见、异常单是否进早报、开发信是否还在手写。GMV 由商品、广告和供应链决定。",
      },
    ],
    related: [industryLinks.tixiao, industryLinks.siyou, industryLinks.huodai, industryLinks.kefu, industryLinks.workbuddy, industryLinks.enterprise],
  }),
  withPseoShell({
    category: "industries",
    slug: "kuajing-qiye-tixiao",
    title: "跨境电商企业提效｜从一条等待最长的流程开始",
    h1: "跨境电商企业提效：先量等待时间，再谈自动化",
    description:
      "跨境提效不是再加一个聊天账号。喂龙虾陪团队把客服未回复、异常订单和跟进漏项收成一条可验收的流程。框架不锁 OpenClaw。",
    definition:
      "跨境电商企业提效，指减少运营每天花在复制订单状态、翻译重复问题和追货代回复上的时间。验收看一条流程的等待和漏项，不看口号里的百分比。",
    audience: "觉得人不够用、但还没准备上全自动店铺的跨境运营负责人",
    keywords: ["跨境电商 企业提效", "跨境电商 提效", "跨境 运营 自动化", "AI 赋能 跨境", "企业助手"],
    bullets: [
      "先找等待最长的那一条，不铺全公司",
      "指标用未回复时长、异常单发现、草稿往返次数",
      "货代报价速度的案例不能直接算作卖家提效",
      "腾讯生态里能解决的，不必强行换运行时",
    ],
    workflows: ["未回复盘点", "异常订单早报", "货代回复提醒", "双语交接班", "周报素材整理"],
    sections: [
      {
        title: "时间通常漏在这三处",
        body: `客服在多个站点之间复制同一段物流说明。订单异常要等买家来骂才发现。跟货代的微信里，报价和在途信息没有人收成待办。${freightNote} 这三处都适合助手做摘要和提醒。不适合交给助手的，是广告出价、刷单和伪造转化。${illegalLine}`,
        items: [
          humanLine,
          "已有货代案例是报价响应从行业中位约 90 小时到约 15 分钟，那是 [货代案例](/case/huodai-baojia-speed-to-lead)，不是跨境卖家的通用成绩",
          "卖家侧提效要单独量自己的基线，不能借用货代数字",
        ],
      },
      {
        title: "怎么验收，而不只是演示",
        body: "上线前记下一周：客服首次有人看消息的间隔、异常订单从发生到有人认领的间隔、开发信从名单到发出的手工分钟数。上线后比同一条。助手如果只是让群里多一条谁也不看的摘要，不算提效。陪跑把这个基线写进第一天，见 [企业陪跑计划](/enterprise)。",
      },
      {
        title: "提效和换产品不是一回事",
        body: "有的团队提效手段就是把 [WorkBuddy](/compare/workbuddy-vs-openclaw) 在企微里用起来，喂龙虾不应该拦。有的团队提效卡在数据不能进公有办公产品，那才要私有运行时。OpenClaw 是后一种情况的常用选项，不是提效的同义词。场景入口在 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)。",
      },
    ],
    faqs: [
      {
        q: "能不能承诺省掉一半人力？",
        a: "不能。人还在做判断。能减少的是重复查找和漏跟进。省下的时间是否够减少编制，要看你自己的基线。",
      },
      {
        q: "从哪个流程开始最稳？",
        a: "从只读开始：异常订单早报或未回复清单。第二步才是回复草稿。自动发送放在团队信任草稿之后。",
      },
      {
        q: "和智能办公是同一个项目吗？",
        a: "相关，但不该做成一页。提效看运营等待；智能办公看日程、邮件、周报和跨时区协作。两页都链接到同一套陪跑，范围仍然只锁 1–2 个流程。",
      },
      {
        q: "需要先买 OpenClaw 托管吗？",
        a: "不需要先买。先确认流程和数据能不能离开你的环境。选定 OpenClaw 后再看首页托管套餐。没选定就走陪跑评估。",
      },
    ],
    related: [industryLinks.zhushou, industryLinks.funeng, industryLinks.bangong, industryLinks.huodai, industryLinks.enterprise, industryLinks.workbuddy],
  }),
  withPseoShell({
    category: "industries",
    slug: "kuajing-ai-funeng",
    title: "跨境电商 AI 赋能｜4–50 人团队怎么开始",
    h1: "跨境电商 AI 赋能：设计、训练、放进每天的操作，而不是再看一场演示",
    description:
      "AI 赋能对跨境团队意味着把一个真实流程交给助手并教会在班的人。喂龙虾做框架不锁定的陪跑；OpenClaw 部署是客户选定之后的选项。",
    definition:
      "跨境电商 AI 赋能不是购买模型账号。它是三步：选定一条客服、订单或开发流程，训练当班的人使用草稿和审核，再把助手放进他们已经打开的企微、飞书或邮箱。",
    audience: "听过很多 AI 演示、还没有一条流程在每天运行的跨境公司负责人",
    keywords: ["跨境电商 AI 赋能", "AI 赋能 跨境电商", "跨境 企业助手", "中小企业 AI 落地", "智能办公"],
    bullets: [
      "赋能的对象是当班运营，不是演示日的老板",
      "一条流程写清输入、输出和谁点发送",
      "模型可以换，审核点不能省",
      "OpenClaw 不是赋能的前提",
    ],
    workflows: ["选定一条流程", "写出人工审核点", "当班人员试用草稿", "一周后看漏项", "再决定是否加第二条"],
    sections: [
      {
        title: "演示和赋能差在第二天早上",
        body: `演示能生成一封漂亮的英文信。赋能是第二天早班知道异常单在哪、草稿在哪、什么必须自己发。${humanLine} 做不到这一点的项目，只是多了一个窗口。国内电商的内容与订单草稿见 [电商运营 AI 助手](/zh/dianshang-yunying-ai-zhushou)，跨境还要加上时差交接和货代等待。`,
        items: [
          illegalLine,
          "开发信只使用公开信息，发送前由销售看过",
          freightNote,
        ],
      },
      {
        title: "4–50 人团队的顺序",
        body: "第一，负责人指出最痛的一条，而不是列出十个部门。第二，喂龙虾或你们自己的人把输入来源和权限写下来。第三，当班同事用三天真实单据试用，改掉助手不该说的话。第四，才讨论运行时：继续用腾讯云 WorkBuddy、部署 OpenClaw，或用你们已经付费的框架。这个顺序写在 [企业陪跑计划](/enterprise) 的三天里，范围就是这一两条。",
      },
      {
        title: "赋能不包含的事",
        body: "不包含保证排名、广告回报、店铺权重。不包含代替平台规则部门。不包含把供应商底价自动发给所有询盘对象。模型再好，这些也是人的责任。若你的问题其实是「WorkBuddy 够不够」，先读 [区别说明](/compare/tencent-workbuddy-openclaw-qubie)，再决定要不要实施。",
      },
    ],
    faqs: [
      {
        q: "AI 赋能是不是要换掉运营？",
        a: "不是。运营仍对买家和供应商负责。助手减少查找和起草。判断、赔付和关系留在人那里。",
      },
      {
        q: "没有技术团队能做吗？",
        a: "可以做一条流程。没有技术团队时，不要同时开五个系统的接口。从邮箱、表格和企微里的导出开始，由陪跑把边界定住。",
      },
      {
        q: "和买 WorkBuddy 账号冲突吗？",
        a: "不冲突。腾讯生态里已经能完成的办公，继续用 WorkBuddy。赋能项目只补它没覆盖、且值得单独做审核的那条流程。",
      },
      {
        q: "培训完人走了怎么办？",
        a: "陪跑要留下操作说明和权限清单，不把流程只存在某个人的聊天记录里。人员变动后，新同事按清单接手，而不是重新买一套概念。",
      },
    ],
    related: [industryLinks.tixiao, industryLinks.zhushou, industryLinks.bangong, industryLinks.enterprise, industryLinks.workbuddy, industryLinks.kefu],
  }),
  withPseoShell({
    category: "industries",
    slug: "kuajing-zhineng-bangong",
    title: "跨境电商智能办公｜时差、双语和混合工具栈",
    h1: "跨境电商智能办公：把邮件、日程和交接收成班次能用的简报",
    description:
      "智能办公对跨境团队是跨时区的邮件、日程、周报和交接，不是另一个聊天窗口。腾讯生态原生时 WorkBuddy 更短；工具混用时喂龙虾陪跑，OpenClaw 可选。",
    definition:
      "跨境电商智能办公，指助手在授权范围内整理邮箱、日历、企微或飞书消息，生成交接和周报素材。它服务办公节奏。店铺成交、广告和物流履约是另外的流程，不在这一页里打包承诺。",
    audience: "跨境团队里负责协同的运营负责人、助理和多时区小组长",
    keywords: ["跨境电商 智能办公", "智能办公 AI 助手", "跨境 团队 协作", "企业助手", "WorkBuddy 智能办公"],
    comparisonUsLabel: "混用工具栈时的喂龙虾",
    comparisonTable: [
      { aspect: "办公发生在哪", us: "飞书、Gmail、日历、企微、表格可能同时存在", them: "腾讯云、企微、腾讯文档会议更集中", themLabel: "腾讯云 WorkBuddy" },
      { aspect: "更短的路径", us: "陪跑把一条交接或邮件简报做进现有工具。运行时可选 OpenClaw", them: "在腾讯生态里开箱使用智能办公" },
      { aspect: "双语和时差", us: "简报要标明时区和待谁确认，不自动代表海外同事承诺", them: "产品内能力以腾讯文档为准" },
      { aspect: "不该自动化的", us: "合同、付款、对买家的时效承诺", them: "同样不该只因为产品能生成句子就自动发出" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: [
      "智能办公先做交接和邮件，不先做无人客服",
      "腾讯办公栈用 WorkBuddy 往往更短",
      "Gmail 加飞书加货代群，更适合单独陪跑",
      "周报素材可以自动收，结论由人写",
    ],
    workflows: ["跨时区晨报", "未读邮件分类", "会议待办", "中英交接草稿", "周报素材"],
    sections: [
      {
        title: "跨境办公比国内多出来的部分",
        body: "同一件事会落在加州的邮箱、深圳的企微和货代的微信群里。助手的价值是合成一份当班能看的简报：谁在等回复、哪封邮件只是通知、哪个会还没记待办。它不负责替海外销售答应交期。通用会议纪要见 [会议纪要 AI 助手](/zh/huiyi-jiyao-ai-zhushou)。",
        items: [
          humanLine,
          freightNote,
          "店铺客服和订单异常放在 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)，避免和办公简报混成一个无法验收的项目",
        ],
      },
      {
        title: "WorkBuddy 在智能办公上的位置",
        body: "WorkBuddy 的公开定位就是智能办公和企业助手，腾讯云与企微用户应先评估它。喂龙虾不会把「智能办公」说成只有私有部署能做。当邮件在 Gmail、文档在飞书、货代在个人微信，一个腾讯云账号盖不住全部通道时，再把这一条交接流程做成客户侧助手。选型表的展开在 [WorkBuddy vs OpenClaw](/compare/workbuddy-vs-openclaw)。",
      },
      {
        title: "简报的合格线",
        body: "合格的早报能指出三封需要人处理的信，并说明为什么。不合格的早报是把收件箱重贴一遍。周报同理：助手可以收集各站问题和货代未回事项，数字和判断由负责人确认后再发给老板。这种办公层项目适合放进陪跑的 1–2 个流程里。",
      },
    ],
    faqs: [
      {
        q: "智能办公和客服机器人有什么区别？",
        a: "智能办公对内：邮件、日程、交接、周报。客服对外，风险更高，默认只出草稿。两件不要在一个账号里不设审核地打开。",
      },
      {
        q: "已经买了 WorkBuddy，这页还有用吗？",
        a: "有用在判断缺口。腾讯生态内的日程和文档继续用 WorkBuddy。缺口如果是境外邮箱或非腾讯通道，再单独立项，不必整套替换。",
      },
      {
        q: "能自动发周报给全员吗？",
        a: "可以配置到待审核位置。默认不直接群发。周报里的数字错一次，比晚发一小时更贵。",
      },
      {
        q: "必须部署 OpenClaw 吗？",
        a: "不必须。OpenClaw 适合你要自己持有运行时的时候。只读邮件简报若在现有腾讯产品里已经完成，就不要为了框架再部署一套。",
      },
    ],
    related: [industryLinks.zhushou, industryLinks.funeng, industryLinks.workbuddy, industryLinks.enterprise, industryLinks.huodai, industryLinks.siyou],
  }),
  withPseoShell({
    category: "industries",
    slug: "kuajing-ai-siyou-bushu",
    title: "跨境电商 AI 助手私有部署｜数据留在授权环境",
    h1: "跨境电商 AI 助手私有部署：先定数据能不能离开你的环境",
    description:
      "客户名单、供货价和订单导出若不能进公有办公 SaaS，再谈私有部署。喂龙虾把运行时放在客户授权环境；OpenClaw 是常见选项，不是唯一框架。WorkBuddy 企业版是否够用，以腾讯云合同为准。",
    definition:
      "跨境电商场景下的私有部署，指处理订单、客户和供货价的助手运行在客户授权的机器或 VPC 内，权限和日志由客户掌握。它不是首页最低价安装包的别名，也不是「只要不用 WorkBuddy 就算私有」。",
    audience: "在意客户数据和供货价落点的跨境公司负责人、安全或信息化负责人",
    keywords: ["跨境电商 AI 助手 私有部署", "跨境 私有部署", "企业 AI 助手 私有部署", "数据不出域", "OpenClaw 私有部署"],
    comparisonUsLabel: "客户授权环境中的助手",
    comparisonTable: [
      { aspect: "数据问题", us: "名单、供货价、订单导出留在约定环境，按名单授权", them: "是否留在腾讯云区域，以 WorkBuddy 企业版文档和合同为准", themLabel: "腾讯云办公产品" },
      { aspect: "什么时候不需要", us: "只处理公开话术和内部通知时，私有化可能过重", them: "腾讯栈开箱办公足够时，继续用 WorkBuddy" },
      { aspect: "运行时", us: "客户选定 OpenClaw 则白手套部署；否则按约定的可私有化框架陪跑", them: "WorkBuddy 产品边界" },
      { aspect: "和低价套餐的差别", us: "首页安装/托管是 OpenClaw 连通和少量工作流，不是多站点订单私有化", them: "公有开通和企业版不是同一个报价" },
      { aspect: "人工审核", us: "私有不等于可以自动对外承诺", them: "同样保留人工审核" },
      { aspect: "价格", us: "企业陪跑简单场景约 10–30 万、复杂约 30–80 万，以陪跑页为准，见 [企业陪跑计划](/enterprise)；预约后按 1–2 个工作流报价。", them: workbuddyPriceCell },
    ],
    bullets: [
      "先写不能出环境的数据，再选框架",
      "WorkBuddy 企业版可能已经满足，要读文档而不是假设",
      "OpenClaw 是私有路径的常用运行时",
      "私有部署仍然禁止无人退款和刷单",
    ],
    workflows: ["数据分级", "选定环境：电脑、VPC 或机房", "只读订单摘要", "审核队列", "权限回收演练"],
    sections: [
      {
        title: "跨境团队通常在意的数据",
        body: `买家联系方式、供应商价格、广告账户不是同一级。私有部署至少要说清哪一级能进模型请求。做不到分级的项目，不要称为私有可控。办公通知和公开 FAQ 不必上私有化。${illegalLine}`,
        items: [
          "订单异常可以先用脱敏导出或授权只读",
          "供货价默认不进对买家可见的草稿",
          "细节和风险见 [私有部署成本与风险](/blog/openclaw-private-deployment-cost-and-risk)",
        ],
      },
      {
        title: "和腾讯云方案怎么并存",
        body: "私有部署不是为了在幻灯片上打败 WorkBuddy。若企业版合同已经写明你要求的地域、隔离和退出条款，应采用企业版，见 [企业版 vs 私有部署](/compare/workbuddy-qiye-vs-siyou)。若合同仍把订单导出放在公有产品里，而你不能接受，再在客户 VPC 或办公电脑上部署运行时。喂龙虾实施这一侧，并在客户点名时使用 OpenClaw。",
      },
      {
        title: "落地时仍然从草稿开始",
        body: `${humanLine} 私有环境降低的是数据离开边界的概率，不降低说错话的概率。跨境客服、物流协同和开发信的做法与 [企业助手页](/zh/kuajing-qiye-zhushou) 相同。${freightNote} 全量多系统私有化放在 [企业陪跑](/enterprise)，用 3 天完成其中 1–2 个流程，而不是 3 天替换所有店铺后台。`,
      },
    ],
    faqs: [
      {
        q: "私有部署是不是数据绝对不会出去？",
        a: "不是绝对。模型接口若指向外部，请求仍会离开。私有的含义是你能指定环境、关闭不该开的出网，并审计谁授权了工具。做不到这些就不要宣传成不出域。",
      },
      {
        q: "一定要用 OpenClaw 吗？",
        a: "不一定。它是我们最常部署的运行时。客户已有可放在自己环境里的框架时，陪跑按该框架做。不能私有化的纯 SaaS，不包装成私有部署。",
      },
      {
        q: "个人电脑上的部署算不算？",
        a: "算一种边界，适合个人助手和低敏数据。跨境订单和供货价通常不应只放在一台没有备份和权限回收的个人电脑上。那种范围走陪跑里的 VPC 或机房方案。",
      },
      {
        q: "能否自动向所有买家同步物流？",
        a: "不作为默认。错误的物流承诺比慢一点更糟。助手可以准备状态摘要，发送仍由人确认，直到你有可靠的数据源和抽查机制。",
      },
    ],
    related: [industryLinks.zhushou, industryLinks.workbuddy, industryLinks.enterprise, industryLinks.huodai, industryLinks.tixiao, industryLinks.bangong],
  }),
  ...batch3IndustryPages,
];
