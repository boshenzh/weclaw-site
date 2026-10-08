import type { GeoPage } from "@/lib/geo-pages";
import { batch3ComparePages } from "@/lib/pseo/batch3-pages";
import { batch4ComparePages } from "@/lib/pseo/batch4-pages";
import {
  WORKBUDDY_ENTERPRISE_DOC,
  WORKBUDDY_HOME,
  relatedCard,
  weclawdPriceCell,
  withPseoShell,
  workbuddyPriceCell,
} from "@/lib/pseo/shell";

const workbuddyCite = `[WorkBuddy](${WORKBUDDY_HOME}) 是腾讯云的智能办公 / 企业助手产品；企业版说明见[腾讯云文档](${WORKBUDDY_ENTERPRISE_DOC})。下面只写公开产品性质，不代腾讯列功能清单，也不写它的价格。`;

const compareLinks = {
  vsOpenclaw: relatedCard(
    "/compare/workbuddy-vs-openclaw",
    "WorkBuddy vs OpenClaw",
    "腾讯云企业助手产品和可自持的智能体运行时，不是同一个采购对象。",
    "对比",
  ),
  vsWeclawd: relatedCard(
    "/compare/workbuddy-vs-weclawd",
    "WorkBuddy vs 喂龙虾",
    "一个是腾讯云产品，一个是企业陪跑；OpenClaw 托管只是陪跑里的一条路径。",
    "对比",
  ),
  qubie: relatedCard(
    "/compare/tencent-workbuddy-openclaw-qubie",
    "腾讯 WorkBuddy 和 OpenClaw 的区别",
    "免部署产品和自有运行时差在谁管 Gateway、数据和模型。",
    "对比",
  ),
  tidai: relatedCard(
    "/compare/workbuddy-tidai",
    "WorkBuddy 替代",
    "什么时候值得换，什么时候留在腾讯生态里更省事。",
    "对比",
  ),
  qiye: relatedCard(
    "/compare/workbuddy-qiye-vs-siyou",
    "WorkBuddy 企业版 vs 私有部署",
    "腾讯有企业版，不等于 Gateway 已经在你自己手里。",
    "对比",
  ),
  diy: relatedCard(
    "/compare/openclaw-diy-vs-tuoguan",
    "OpenClaw 自己部署 vs 托管",
    "开源能自己装。时间花在加固、通道和后续故障上。",
    "对比",
  ),
  enterprise: relatedCard(
    "/enterprise",
    "企业陪跑计划",
    "3 天驻场，范围锁在 1–2 个工作流。系统留在客户侧。",
    "服务",
  ),
  kuajing: relatedCard(
    "/zh/kuajing-qiye-zhushou",
    "跨境电商企业助手",
    "客服、订单异常、物流协同和开发信，默认人工确认后再对外。",
    "跨境",
  ),
};

/**
 * Comparison batch. Append a page here to publish `/compare/[slug]`.
 * Sitemap, the compare index, and llms files read this array via geo-pages.
 */
export const pseoComparePages: GeoPage[] = [
  withPseoShell({
    category: "compare",
    slug: "workbuddy-vs-openclaw",
    title: "WorkBuddy vs OpenClaw｜腾讯云企业助手和私有运行时怎么选",
    h1: "WorkBuddy vs OpenClaw：一个是腾讯云产品，一个是可自持的运行时",
    description:
      "WorkBuddy 是腾讯云智能办公 / 企业助手；OpenClaw 是团队可以自己持有的智能体运行时。喂龙虾在客户选定 OpenClaw 时做部署托管，也做不锁框架的企业陪跑。",
    definition:
      "WorkBuddy 是腾讯云提供的企业助手产品，主路径是在腾讯云账号里开通和使用。OpenClaw 是智能体运行时，要有人把它部署到客户授权的机器或 VPC，再接到企微、飞书、邮箱这些通道。两者都能做办公自动化，采购对象不是同一个。",
    audience: "正在比较腾讯云 WorkBuddy 和 OpenClaw 私有运行时的企业负责人",
    keywords: ["WorkBuddy vs OpenClaw", "WorkBuddy 和 OpenClaw", "腾讯云 WorkBuddy", "OpenClaw 私有部署", "企业助手"],
    comparisonUsLabel: "OpenClaw 运行时",
    comparisonTable: [
      { aspect: "是什么", us: "可自持的智能体运行时，技能和通道由部署方配置", them: "腾讯云智能办公 / 企业助手产品", themLabel: "腾讯云 WorkBuddy" },
      { aspect: "谁先受益", us: "工具栈混用，或要求数据和 Gateway 在自己授权环境里", them: "已经在腾讯云和企业微信上，想少养运维" },
      { aspect: "上线方式", us: "需要部署。可以自己做，也可以交给喂龙虾白手套", them: "以云端开通为主。企业版另有企业侧能力，以当时文档和合同为准" },
      { aspect: "生态", us: "不绑定腾讯。企微、飞书、钉钉、Slack、邮箱都能作为通道", them: "腾讯生态原生。企微和腾讯云账号体系更顺" },
      { aspect: "技能兼容", us: "Skills 跑在你自己的运行时里", them: "公开材料谈到与 OpenClaw Skills 的兼容。范围以腾讯云文档为准，兼容不等于数据已在你这边" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: [
      "腾讯云账号里开箱：WorkBuddy 更短",
      "Gateway 和数据要在自己这边：看 OpenClaw 这条私有路径",
      "技能兼容叙事不能代替「谁掌握运行时」",
      "喂龙虾不把 OpenClaw 说成唯一框架",
    ],
    workflows: ["先问工具栈是不是腾讯一家", "再问数据能不能进公有办公 SaaS", "选定运行时后再做白手套或陪跑", "对外动作保持人工审核"],
    sections: [
      {
        title: "先分清你在买产品，还是在买运行时",
        body: `${workbuddyCite} OpenClaw 不是腾讯的竞品套餐，它是一套可以放在客户环境里的智能体运行时。喂龙虾的角色也不是「另一个 WorkBuddy」：客户选定这条运行时时，我们做部署和托管；客户要的是企业助手落地、但未必用 OpenClaw，陪跑按他们的框架做。`,
        items: [
          "只想在腾讯云里开一个智能办公账号：优先评估 WorkBuddy",
          "要自己决定模型、日志和工具权限：评估 OpenClaw 或别的可私有化运行时",
          "还没选定运行时：先做 [企业陪跑](/enterprise)，把 1–2 个工作流定下来",
        ],
      },
      {
        title: "WorkBuddy 更合适的时候，我们会直接说",
        body: "团队的人、文档、会议和客户消息已经在腾讯云和企业微信里，采购流程也认腾讯云厂商，WorkBuddy 通常比自建运行时省事。你少碰服务器、密钥和升级。代价是产品边界、计费和数据落点按腾讯云的规则走，不是按你机房的规则走。",
        items: [
          "企微是主通道，周边系统也在腾讯云",
          "没有人愿意值守 Gateway",
          "能接受厂商 SLA，而不是自己持有进程",
        ],
      },
      {
        title: "OpenClaw 更合适的时候",
        body: "飞书、钉钉、Gmail、独立站后台、货代微信群不在同一个厂商里，或者客户名单和供货价不能默认进一个公有办公产品，自持运行时更说得通。OpenClaw 要部署，部署完才有通道和定时任务。这部分可以自己做，见 [自己部署 vs 托管](/compare/openclaw-diy-vs-tuoguan)；不想自己扛故障，就用喂龙虾的白手套。",
        items: [
          "通道不止企微",
          "要换模型或把日志留在自己的环境",
          "以后可能换运行时，不想被单个 SaaS 账号锁死",
        ],
      },
      {
        title: "别把 Skills 兼容理解成两个产品是同一个",
        body: "公开介绍里，WorkBuddy 企业侧会提到托管智能体，以及和 OpenClaw Skills 生态的兼容。技能包能复用是好事，它不改变三件事：进程跑在谁的机器上、密钥谁管、合同结束后能不能搬走。这三件以腾讯云当时文档和你自己的部署架构为准。",
      },
    ],
    faqs: [
      {
        q: "WorkBuddy 是 OpenClaw 的托管版吗？",
        a: "不是。WorkBuddy 是腾讯云的企业助手产品。OpenClaw 是另一套运行时。公开材料提到技能生态兼容，兼容不等于 WorkBuddy 就是你自己的 OpenClaw 实例。",
      },
      {
        q: "选了 OpenClaw 是不是就必须找喂龙虾？",
        a: "不是。OpenClaw 可以自己部署。喂龙虾提供白手套部署、托管，以及不锁死在 OpenClaw 上的企业陪跑。只想试一个聊天产品的团队，不需要这层服务。",
      },
      {
        q: "WorkBuddy 能不能接飞书？",
        a: "腾讯侧公开方案不只有企业微信。具体通道以 WorkBuddy 当时的文档为准。飞书、钉钉、邮箱也是 OpenClaw 部署时的常见通道，两边都能谈连接，差别在运行时归谁。",
      },
      {
        q: "价格怎么比？",
        a: "本页不写 WorkBuddy 价格。喂龙虾首页写的是 OpenClaw 安装和托管套餐，企业陪跑另报价。两边的计费单位不一样，用一个数字硬比会比错。",
      },
    ],
    related: [compareLinks.qubie, compareLinks.vsWeclawd, compareLinks.qiye, compareLinks.diy, compareLinks.enterprise, compareLinks.kuajing],
  }),
  withPseoShell({
    category: "compare",
    slug: "workbuddy-vs-weclawd",
    title: "WorkBuddy vs 喂龙虾｜腾讯云企业助手和企业陪跑怎么分",
    h1: "WorkBuddy vs 喂龙虾：一个卖产品，一个做陪跑和可选的私有部署",
    description:
      "WorkBuddy 是腾讯云企业助手。喂龙虾帮企业把智能体放进真实办公：可以部署 OpenClaw，也可以按别的框架陪跑。腾讯生态原生时，WorkBuddy 往往更短。",
    definition:
      "喂龙虾 WeClawd 是企业陪跑服务，外加客户选定 OpenClaw 时的白手套部署和托管。WorkBuddy 是腾讯云的智能办公产品。你不是在两个聊天窗口里二选一。",
    audience: "拿 WorkBuddy 和喂龙虾放在一起做预算的创始人、运营负责人和信息化负责人",
    keywords: ["WorkBuddy vs 喂龙虾", "WorkBuddy 对比", "企业助手 陪跑", "OpenClaw 托管", "智能办公"],
    comparisonUsLabel: "喂龙虾 WeClawd",
    comparisonTable: [
      { aspect: "你买到的", us: "流程设计、团队训练、上线验收；选定 OpenClaw 时含部署托管", them: "腾讯云上的企业助手产品", themLabel: "腾讯云 WorkBuddy" },
      { aspect: "框架", us: "不锁一个运行时。OpenClaw 是常用选项，不是唯一选项", them: "WorkBuddy 产品边界内" },
      { aspect: "腾讯栈", us: "能接企微，但不假设整家公司在腾讯云", them: "腾讯云、企业微信原生，这条栈上更省事" },
      { aspect: "数据与控制面", us: "私有路径放在客户授权的机器或 VPC，权限名单客户定", them: "腾讯云账号体系。企业版/私有化范围以文档和合同为准" },
      { aspect: "谁干活", us: "顾问把 1–2 个工作流做完并教会团队", them: "主要是开产品、看文档、用厂商支持" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: [
      "腾讯生态里要开箱：选 WorkBuddy，不必为了换而换",
      "混用飞书、邮箱、独立站、货代群：陪跑更对口",
      "OpenClaw 托管是可选项，不是入场券",
      "对外承诺仍然由人发出",
    ],
    workflows: ["确认主通道在不在腾讯", "圈定 1–2 个重复工作", "决定 SaaS 还是客户侧运行时", "先跑草稿和提醒，再谈自动发送"],
    sections: [
      {
        title: "喂龙虾不是 WorkBuddy 的换皮",
        body: `${workbuddyCite} 喂龙虾没有一个让你登录就用的公有办公套件。客户找来，通常是因为聊天机器人已经试过，消息仍要人工复制。我们把一个具体流程做成可运行的助手：读授权范围内的记录，出草稿和提醒，高风险动作停在人那里。运行时可以是 OpenClaw，也可以是客户已经选定的别的智能体框架。`,
        items: [
          "要厂商产品：看 WorkBuddy",
          "要有人把流程钉进企微、飞书、邮箱、表格：看喂龙虾",
          "两样可以并存。个人问答继续用现成产品，固定流程另做部署",
        ],
      },
      {
        title: "什么时候留在 WorkBuddy",
        body: "公司已经为腾讯云付费，员工每天在企微里干活，信息化要求走云厂商采购。这时再让我们部署一套运行时，多出来的是运维，不是能力。WorkBuddy 在这条栈上是更短的路。我们接这种咨询，会建议先把腾讯侧方案用起来，而不是先签陪跑。",
      },
      {
        title: "什么时候喂龙虾更合适",
        body: "工具不在一家：飞书文档、Gmail、Shopify 或独立站后台、货代微信群、Excel 运价表。或者安全问卷问的是「数据落在谁的机器上、模型能不能换、日志能不能审计」。这类问题 SaaS 开通回答不完。陪跑先锁 1–2 个工作流，见 [企业陪跑计划](/enterprise)。若客户点名 OpenClaw，再走首页上的部署或托管套餐；那几个套餐是安装和少量工作流，不是整家跨境公司的系统改造。",
        items: [
          "非腾讯栈，或腾讯只是其中一个通道",
          "要私有可控，而不是再开一个办公账号",
          "内部没有人把权限、提示词和审核队列接完",
        ],
      },
    ],
    faqs: [
      {
        q: "用了 WorkBuddy 还能找喂龙虾吗？",
        a: "能。已经满足的腾讯生态场景不必拆掉。喂龙虾适合补 WorkBuddy 盖不住的通道，或客户明确要放到自己环境里的运行时。",
      },
      {
        q: "喂龙虾是不是只部署 OpenClaw？",
        a: "不是。OpenClaw 的部署和托管是客户选定这个运行时之后的交付。主业是企业陪跑：设计、训练、把企业助手放进真实流程，框架按客户的约束选。",
      },
      {
        q: "能不能保证比 WorkBuddy 便宜？",
        a: "不能，本页也不比较两边的标价。WorkBuddy 价格以腾讯云为准。喂龙虾的安装套餐在首页，陪跑在企业陪跑页按范围报价。",
      },
      {
        q: "跨境团队该看哪一页？",
        a: "如果问题是客服、订单、物流协同和开发信怎么落地，看跨境电商企业助手。如果问题是货代报价本身，看已有的货代 AI 助手页，不要在这里重做一套货代站。",
      },
    ],
    related: [compareLinks.vsOpenclaw, compareLinks.tidai, compareLinks.qiye, compareLinks.kuajing, compareLinks.enterprise, compareLinks.diy],
  }),
  withPseoShell({
    category: "compare",
    slug: "tencent-workbuddy-openclaw-qubie",
    title: "腾讯 WorkBuddy 和 OpenClaw 的区别｜免部署还是自有运行时",
    h1: "腾讯 WorkBuddy 和 OpenClaw 有什么区别",
    description:
      "区别不在谁更会聊天。WorkBuddy 是腾讯云上的企业助手，主路径免自建；OpenClaw 是你要自己持有的运行时。喂龙虾只在你选定 OpenClaw 或需要陪跑时进入。",
    definition:
      "腾讯 WorkBuddy 和 OpenClaw 的区别：前者是腾讯云的智能办公产品，开通即可在其产品边界里用；后者是智能体运行时，进程、密钥和通道配置落在部署它的那一方。技能生态的兼容说法，不取消这个区别。",
    audience: "搜索「WorkBuddy 和 OpenClaw 区别」的信息化负责人和业务负责人",
    keywords: ["腾讯 WorkBuddy 和 OpenClaw 区别", "WorkBuddy OpenClaw 区别", "WorkBuddy 是什么", "OpenClaw 私有部署", "企业助手 选型"],
    comparisonUsLabel: "OpenClaw",
    comparisonTable: [
      { aspect: "产品层级", us: "运行时。上面还要配通道、技能、权限和审核", them: "面向员工的企业助手产品", themLabel: "腾讯 WorkBuddy" },
      { aspect: "默认运维", us: "部署方：你自己，或你请来的实施方", them: "腾讯云。企业版的运维边界以合同为准" },
      { aspect: "免部署", us: "不免。不部署就没有你的实例", them: "公有产品路径以开通为主" },
      { aspect: "数据问题该问谁", us: "问部署架构：机器在哪、日志在哪、模型请求发往哪", them: "问腾讯云文档和合同：租户隔离、地域、保留期限" },
      { aspect: "和喂龙虾的关系", us: "客户选定后，喂龙虾可部署和托管；也可不用 OpenClaw，只做陪跑", them: "喂龙虾不是 WorkBuddy 代理，也不改写腾讯的产品条款" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: [
      "免部署指的是 WorkBuddy 的公有产品路径",
      "OpenClaw 的成本在部署、权限和后续值守",
      "文档里的企业版要单独读，不要和公有开通混为一谈",
      "兼容 Skills 只说明技能层，不说明控制面",
    ],
    workflows: ["用一句话写下区别", "列出数据落点问题", "核对企业版文档而不是二手测评", "再决定自建、腾讯云或陪跑"],
    sections: [
      {
        title: "一句话版",
        body: `${workbuddyCite} 你要是想少管服务器，先看 WorkBuddy。你要是想自己掌握运行时，再看 OpenClaw。喂龙虾不生产第三个聊天机器人，只在后面两种需求里干活：把 OpenClaw 部署好，或帮企业把助手落地到选定的框架上。`,
      },
      {
        title: "免部署和自有运行时，差在出事时找谁",
        body: "免部署的好处是账号开了就能试智能办公。出问题走厂商支持，升级也跟厂商版本。自有运行时的好处是通道、模型和日志按你的边界来；坏处是进程挂了、令牌过期了、接口改了，得有人处理。自己处理见开源部署；交给喂龙虾，就是托管和陪跑，范围以报价单为准，不是无限值班。",
        items: [
          "没有运维的 10 人团队：先算腾讯侧方案的人力，再算自建",
          "有合规问卷的团队：把「数据落点」写成必答题，而不是功能对比里的一行",
          "两套并行的成本通常高于选对一套",
        ],
      },
      {
        title: "企业版文档要单独看",
        body: "腾讯云文档中心里有 WorkBuddy 企业版。有的团队用「OpenClaw 才能私有化」来对比，这个说法不准确。企业版承诺到哪一层——专属环境、客户机房，还是仍在腾讯云区域——以那份文档和合同为准。本站不把二手文章里的功能表当成事实。控制面问题的清单在 [企业版 vs 私有部署](/compare/workbuddy-qiye-vs-siyou)。",
      },
      {
        title: "和豆包、ChatGPT 不是同一道题",
        body: "豆包和 ChatGPT 是通用对话。WorkBuddy 是办公产品。OpenClaw 是运行时。喂龙虾是实施。四层叠在一起比，会得出「谁回答更好」这种没用的结论。已有对话产品对比在 [WeClawd 和豆包](/compare/weclawd-vs-doubao)、[WeClawd 和 DeepSeek](/compare/weclawd-vs-deepseek)。",
      },
    ],
    faqs: [
      {
        q: "WorkBuddy 和 OpenClaw 谁更强？",
        a: "没有统一的更强。腾讯生态里的开箱办公，WorkBuddy 路径更短。要自己持有运行时和混用非腾讯工具，OpenClaw 更对题。聊天质量取决于你接的模型，不是这两个名字本身。",
      },
      {
        q: "OpenClaw 是腾讯做的吗？",
        a: "不是。WorkBuddy 是腾讯云产品。OpenClaw 是独立的开源智能体运行时。公开材料讨论过技能兼容，这不表示两边是同一家的同一个产品。",
      },
      {
        q: "区别页和对比页为什么分开？",
        a: "区别页回答「它们各是什么」。选型页回答「我们这家公司该买哪边」。喂龙虾只在实施这一层出现，不替代腾讯的产品说明。",
      },
      {
        q: "我该预约谁？",
        a: "已经决定走腾讯云标准产品，直接找腾讯云。还在判断要不要私有运行时，或需要人把一个工作流做完，可以预约喂龙虾，15 分钟先把范围说清楚。",
      },
    ],
    related: [compareLinks.vsOpenclaw, compareLinks.qiye, compareLinks.vsWeclawd, compareLinks.diy, compareLinks.enterprise, compareLinks.kuajing],
  }),
  withPseoShell({
    category: "compare",
    slug: "workbuddy-tidai",
    title: "WorkBuddy 替代｜什么时候换，什么时候不该换",
    h1: "WorkBuddy 替代：先写清你要换掉的是产品，还是落地方式",
    description:
      "WorkBuddy 的替代不是再找一个克隆套件。腾讯生态原生就继续用。要私有可控、非腾讯栈或白手套陪跑时，喂龙虾是另一条路径，OpenClaw 只是可选运行时。",
    definition:
      "WorkBuddy 替代指：团队不再把腾讯云这款企业助手当作唯一的智能办公方案。合理的替代是换控制面或换实施方式。把一个 SaaS 的全部按钮复刻一遍，通常不值得。",
    audience: "搜索 WorkBuddy 替代方案、但还不想为了换而换的企业负责人",
    keywords: ["WorkBuddy 替代", "WorkBuddy 替代方案", "不用 WorkBuddy", "企业助手 替代", "私有 AI 助手"],
    comparisonUsLabel: "考虑替代时看喂龙虾",
    comparisonTable: [
      { aspect: "留在 WorkBuddy", us: "如果痛点只是还没学会产品，替代解决不了", them: "腾讯栈开箱、采购认厂商、能接受云上边界", themLabel: "继续用 WorkBuddy" },
      { aspect: "值得另找路径", us: "数据要在客户环境、通道不在腾讯、需要人把流程做完", them: "这些不是换一个相似界面就能自动满足" },
      { aspect: "替代物是什么", us: "陪跑加上客户选定的运行时。OpenClaw 常见，但不是强制", them: "WorkBuddy 仍是腾讯生态里的默认产品" },
      { aspect: "迁什么", us: "重做的是通道授权、审核队列和一两个工作流，不是导出一个魔法文件", them: "账号、文档和企微历史留在腾讯侧，除非你另有迁移计划" },
      { aspect: "不承诺的事", us: "不承诺功能一一对应，不承诺更便宜，不写对方价格", them: "腾讯的价格和路线图以腾讯为准" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: [
      "替代之前先写出不满意的那一条",
      "只是没人内部培训：先把 WorkBuddy 用起来",
      "不满意的是数据落点和厂商锁定：再谈私有路径",
      "迁移从一条工作流开始，不从全公司替换开始",
    ],
    workflows: ["写下留在腾讯侧的原因", "圈一条 WorkBuddy 盖不住的流程", "选定运行时", "草稿上线，人审对外"],
    sections: [
      {
        title: "三种「想换」里，有两种不该换",
        body: `${workbuddyCite} 第一种：同事还没认真用，功能清单是从测评文抄来的。第二种：采购只允许腾讯云。这两种换到喂龙虾，只会多一个实施方，少一个厂商。第三种才值得谈替代：客户数据和供货价不能放在当前产品里，或者飞书、邮箱、独立站、货代群这些通道在 WorkBuddy 的主路径之外，内部又没人把审核流程接上。`,
        items: [
          "先列「必须离开」的条件，列不出来就留在 WorkBuddy",
          "条件如果是价格，请自己打开腾讯云报价，本页不编数字",
          "条件如果是控制面，继续看企业版和私有部署的差别",
        ],
      },
      {
        title: "替代时长什么样",
        body: "不会出现一个按钮把 WorkBuddy 对话记录变成 OpenClaw。实际替换的是一条工作流：例如跨境客服草稿，或订单异常提醒。人把权限范围、输入来源、输出位置和谁点发送定下来。运行时若选 OpenClaw，喂龙虾可以部署；若客户已有别的可私有化框架，陪跑按那个框架做。腾讯生态里仍然好用的部分，建议留着。",
        items: [
          "一条流程跑稳，再加第二条",
          "对外话术、退款、改价继续人工确认",
          "货代报价自动化不要在替代项目里重做，用现成的 [货代 AI 助手](/zh/huodai-ai-zhushou)",
        ],
      },
      {
        title: "喂龙虾赢的地方，和赢不了的地方",
        body: "赢在非腾讯栈、私有可控、以及有人把多框架的落地做完。赢不了腾讯会议、企微、腾讯云账号打通这种原生集成——那是 WorkBuddy 的主场。我们也赢不了「今天开通、明天全员会用」：陪跑是 3 天量级的聚焦实施，不是全公司瞬间替换，细节在 [企业陪跑计划](/enterprise)。",
      },
    ],
    faqs: [
      {
        q: "不用 WorkBuddy 用什么？",
        a: "如果仍在腾讯云里办公，先把 WorkBuddy 用完整。如果要客户侧运行时，常见选项是 OpenClaw，由自己部署或交给喂龙虾。如果还没选框架，先做陪跑，不要先买一套名字不同的 SaaS。",
      },
      {
        q: "替代会不会中断现有企微？",
        a: "不应该。正确做法是新流程并行，旧产品继续承担它仍然合适的场景。通道授权和对外发送分开，避免两套机器人同时给客户发消息。",
      },
      {
        q: "能把 WorkBuddy 的价格打下来吗？",
        a: "不能用喂龙虾的套餐去对标一个我们没有写在页面上的数字。请以腾讯云当前报价为准，再单独看喂龙虾首页套餐和企业陪跑报价。",
      },
      {
        q: "替代是否包括刷单、刷评这类增长？",
        a: "不包括。我们不做虚假交易、虚假评价或伪造物流。替代只涉及合规的办公与运营流程。",
      },
    ],
    related: [compareLinks.vsWeclawd, compareLinks.qiye, compareLinks.vsOpenclaw, compareLinks.kuajing, compareLinks.enterprise, compareLinks.diy],
  }),
  withPseoShell({
    category: "compare",
    slug: "workbuddy-qiye-vs-siyou",
    title: "WorkBuddy 企业版 vs 私有部署｜谁掌握 Gateway 和数据",
    h1: "WorkBuddy 企业版和私有部署：先问控制面在谁手里",
    description:
      "腾讯云提供 WorkBuddy 企业版，不能把它说成「没有私有化」。差别在于 Gateway、密钥、模型和日志落在哪。喂龙虾的私有路径放在客户授权环境，OpenClaw 是可选运行时。",
    definition:
      "WorkBuddy 企业版是腾讯云文档中的企业向产品能力。私有部署在喂龙虾这里指：智能体运行在客户授权的机器或 VPC，权限和人工审核由客户定。有企业版，不等于控制面已经在客户机房。",
    audience: "在看 WorkBuddy 企业版、私有化采购和自建智能体的信息化与安全负责人",
    keywords: ["WorkBuddy 企业版", "WorkBuddy 私有化", "私有部署 vs 腾讯云", "企业 AI 助手 私有部署", "OpenClaw 私有部署"],
    comparisonUsLabel: "客户侧私有部署",
    comparisonTable: [
      { aspect: "公开事实", us: "运行时在客户机器或客户 VPC。选定 OpenClaw 时由喂龙虾部署，也可换别的框架", them: "腾讯云有 WorkBuddy 企业版文档。具体私有化等级以该文档和合同为准", themLabel: "WorkBuddy 企业版" },
      { aspect: "该问的第一句", us: "进程、密钥、日志、模型请求各在哪", them: "企业版交付的是专属云、客户机房，还是仍在腾讯云区域" },
      { aspect: "腾讯生态", us: "企微可以接，但不是整套腾讯办公的原生替代", them: "企业微信和腾讯云体系内更完整" },
      { aspect: "换模型和搬走", us: "架构上可以换模型、把实例留在客户名下。实施范围以合同为准", them: "能否导出配置和数据，问腾讯合同，不要假设" },
      { aspect: "低价套餐不是这件事", us: "首页 OpenClaw 安装套餐不含跨境订单系统的全量私有化", them: "企业版报价不是公有开通价。本页不写数字" },
      { aspect: "价格", us: "企业陪跑简单场景约 10–30 万、复杂约 30–80 万，以陪跑页为准，见 [企业陪跑计划](/enterprise)；预约后按 1–2 个工作流报价。", them: workbuddyPriceCell },
    ],
    bullets: [
      "企业版三个字不能代替数据落点",
      "腾讯栈里的原生集成，私有部署不会自动更强",
      "喂龙虾的私有路径不强制 OpenClaw",
      "首页低价套餐和私有化项目不是同一张订单",
    ],
    workflows: ["拿到企业版文档原文", "写下数据落点四个问题", "对照陪跑能交付的 1–2 个流程", "拒绝口头「完全私有」"],
    sections: [
      {
        title: "不要把「有企业版」和「没有私有化」对立起来",
        body: `${workbuddyCite} 比较「私有 OpenClaw vs 只能用公有 SaaS」会把 WorkBuddy 说窄。企业版存在。你要核对的是等级：账号隔离、专属 VPC、客户机房，还是仍然由腾讯运营的区域服务。核对对象是腾讯云文档和报价合同，不是营销文。`,
      },
      {
        title: "私有部署在喂龙虾这边指什么",
        body: "运行时放在客户授权的环境。模型可以是客户指定的接口或客户自己的机器。工具权限按名单开，外部发送进审核队列。客户选定 OpenClaw，我们就部署和托管 OpenClaw；客户选定别的可私有化智能体框架，陪跑按那个框架做，不把项目改写成必须 OpenClaw。安全边界的展开说明在 [私有部署成本与风险](/blog/openclaw-private-deployment-cost-and-risk)。让 AI 读业务数据从来不是零风险。",
        items: [
          "密钥不放在个人聊天账号里",
          "日志留在客户能调取的一侧",
          "退款、报价、付款、对外承诺不自动执行",
        ],
      },
      {
        title: "签约前两边都要问的四句",
        body: "数据文件落在哪个地域、哪台机器。模型请求是否离开该环境。员工离职后权限怎么收。合同结束后实例和配置归谁。WorkBuddy 企业版和喂龙虾的私有部署都应该答得出来。答不出的那一方，不要因为「私有」两个字就签。",
      },
      {
        title: "哪边会赢",
        body: "采购必须落在腾讯云、员工只在企微和腾讯文档里协作，WorkBuddy 企业版通常更贴合同。数据不能进公有办公产品、通道含飞书或境外邮箱和独立站、还要人把流程教会，喂龙虾的私有路径更贴。跨境卖家的场景说明在 [跨境电商 AI 私有部署](/zh/kuajing-ai-siyou-bushu)。",
      },
    ],
    faqs: [
      {
        q: "WorkBuddy 企业版是不是已经等于私有部署？",
        a: "不能从「企业版」三个字推导。腾讯云文档描述了企业向能力，交付等级以当前文档和合同为准。有的等级仍在腾讯云上，有的更接近客户侧环境。要逐项问数据落点。",
      },
      {
        q: "喂龙虾的私有部署是否一定用 OpenClaw？",
        a: "不一定。OpenClaw 是客户常选的运行时，也是我们白手套部署最熟的一条。陪跑可以按客户指定的其他可私有化框架做，前提是该框架真能放在客户环境里。",
      },
      {
        q: "首页 489 元套餐（以首页为准）算私有化吗？",
        a: "不算你要的那种。[首页](/)飞书连接包（当前公示 ¥489，以首页为准）只保证安装与连通，不含工作流整合。个人部署和云托管是更大一点的 OpenClaw 套餐，仍然不是跨境多系统私有化。后者走企业陪跑。",
      },
      {
        q: "私有部署能不能做到无人值守对外发消息？",
        a: "不建议，我们也不把这当作交付标准。草稿、摘要、提醒可以自动。报价、退款、时效承诺和付款保留人工确认。",
      },
    ],
    related: [compareLinks.vsOpenclaw, compareLinks.qubie, compareLinks.tidai, compareLinks.diy, compareLinks.enterprise, compareLinks.kuajing],
  }),
  withPseoShell({
    category: "compare",
    slug: "openclaw-diy-vs-tuoguan",
    title: "OpenClaw 自己部署 vs 托管｜创始人该不该自己装",
    h1: "OpenClaw 自己部署还是交给喂龙虾托管",
    description:
      "OpenClaw 是开源的，可以自己部署。时间花在安全加固、通道、故障和后续更新。喂龙虾托管的是这条运行时；如果你根本不想用 OpenClaw，企业陪跑可以换框架。",
    definition:
      "自己部署是团队自行安装 OpenClaw、自己管权限和故障。托管是喂龙虾把选定的 OpenClaw 装进客户环境并在约定范围内值守。两者都不等于企业陪跑：陪跑是把 1–2 个业务工作流做完，运行时可以是 OpenClaw，也可以不是。",
    audience: "会搜「为什么不自己部署 OpenClaw」的创始人、技术负责人和运营负责人",
    keywords: ["OpenClaw 自己部署", "OpenClaw 托管", "OpenClaw 部署服务", "私有 AI 助手 托管", "OpenClaw 白手套"],
    comparisonUsLabel: "喂龙虾白手套 / 托管",
    comparisonTable: [
      { aspect: "谁来装", us: "远程或按套餐约定的安装、加固和常用通道", them: "你自己或你的工程师", themLabel: "自己部署 OpenClaw" },
      { aspect: "时间", us: "首页套餐通常当天完成安装。陪跑是另外 3 天，只覆盖约好的 1–2 个流程", them: "顺利时也常常是数周，卡在权限和通道上会更久" },
      { aspect: "安全", us: "OAuth、沙箱、防火墙、审计按套餐做基础加固。不是零风险", them: "要自己研究。漏掉密钥和出网策略很常见" },
      { aspect: "故障", us: "约定支持期内在专属沟通里处理。过了支持期，系统仍归你，值守另计", them: "社区和你自己" },
      { aspect: "框架", us: "这页讲的是 OpenClaw。不想用它，走企业陪跑选别的运行时", them: "只涉及你正在安装的那一个运行时" },
      { aspect: "价格", us: "飞书连接、个人部署、云托管见 [首页](/)，以首页为准。企业陪跑简单场景约 10–30 万、复杂约 30–80 万，以陪跑页为准，见 [企业陪跑计划](/enterprise)；预约后按 1–2 个工作流报价。", them: "软件可以不付授权费，机器、模型和人力另计" },
    ],
    bullets: [
      "开源不等于免费，也不等于下午能用",
      "托管解决安装和值守，不自动解决业务设计",
      "业务设计是企业陪跑，范围要写进 1–2 个流程",
      "14 天内觉得安装套餐不值，按首页规则可退",
    ],
    workflows: ["确认是不是一定要 OpenClaw", "分开报安装和陪跑", "先接只读和草稿", "再决定要不要延长托管"],
    sections: [
      {
        title: "自己部署完全合理",
        body: "OpenClaw 是开源的。有工程师、愿意读权限模型、扛得住通道改版的团队，应该自己装。喂龙虾的客户多是创始人和业务负责人，他们的时间比安装贵。这是分工，不是「自己部署不专业」。",
        items: [
          "你有人持续看日志：自己部署往往更便宜",
          "你没有人在接口失效时改配置：托管更便宜",
          "你还没选定 OpenClaw：不要为了托管而先锁定运行时",
        ],
      },
      {
        title: "托管套餐实际包含什么",
        body: "以首页为准，不要把销售口头补充算进去。飞书加 Gateway 的快速连接是安装和连通，不含工作流整合。个人部署做在客户电脑上，含邮件和日历一类基础集成。云托管是 VPS、当天部署、安全加固和最多 3 个工作流，含一段专属支持。这些是 OpenClaw 路径。数据安全和让 AI 读邮箱一样，不是 100% 无风险，我们把权限收窄并留下日志。",
      },
      {
        title: "托管和陪跑不要买错",
        body: "托管回答「OpenClaw 谁来装、谁来看」。陪跑回答「哪一个业务动作交给助手，验收标准是什么」。跨境客服或订单异常这类项目，通常不是 [首页](/)飞书连接包（当前公示 ¥489，以首页为准）能结束的。企业陪跑简单场景约 10–30 万、复杂约 30–80 万，以陪跑页为准，见 [企业陪跑计划](/enterprise)；预约后按 1–2 个工作流报价。系统留在客户侧。若你的结论是不该用 OpenClaw、该留在腾讯云，看 [WorkBuddy vs OpenClaw](/compare/workbuddy-vs-openclaw)，我们不会为了卖托管否定这一点。",
      },
      {
        title: "OpenAI 与项目变化",
        body: "OpenClaw 仍是开源运行时。上游如果变化，自建团队要自己跟。选择喂龙虾的一个原因，是合同里可以包含迁移到其他方案的支持——这属于持续服务，不是安装当天自动赠送的无限承诺。具体以当时约定为准。",
      },
    ],
    faqs: [
      {
        q: "为什么不自己部署？",
        a: "可以自己部署。成本在安全加固、通道调试、故障和更新。没有工程师值守时，这些时间通常高于首页上的安装和托管价格。",
      },
      {
        q: "托管是否等于数据在喂龙虾公司？",
        a: "不是这页的默认含义。云托管是客户方案里的 VPS 或约定环境，个人部署在客户电脑。密钥和权限按该次部署配置。企业级数据边界走陪跑，不走最低价安装包。",
      },
      {
        q: "当天上线是指全公司都会用了吗？",
        a: "不是。当天指约定的 OpenClaw 安装完成。全公司工作流不是一天的交付。陪跑把范围写成 1–2 个流程，用 3 天做完这一小块。",
      },
      {
        q: "不用 OpenClaw 还能托管吗？",
        a: "首页托管套餐针对 OpenClaw。其他框架的落地放在企业陪跑里评估，能做的是实施和训练，不是套用同一个云托管 SKU（当前公示 ¥3800，以首页为准）。",
      },
    ],
    related: [
      compareLinks.vsOpenclaw,
      compareLinks.qiye,
      compareLinks.enterprise,
      compareLinks.vsWeclawd,
      relatedCard(
        "/blog/openclaw-private-deployment-cost-and-risk",
        "私有部署成本与风险",
        "权限、成本和安全边界，比口号更值得先读。",
        "已有文章",
      ),
      relatedCard(
        "/compare/weclawd-vs-building-in-house",
        "WeClawd vs 自建",
        "英文对照：把实施交给外部，还是内部工程队自己做。",
        "对比",
      ),
    ],
  }),
  withPseoShell({
    category: "compare",
    slug: "siyouhua-vs-tencent-saas",
    title: "私有化部署 vs 腾讯云 SaaS AI｜企业助手怎么分界",
    h1: "私有化部署和腾讯云 SaaS AI：先分数据落点，再分产品",
    description:
      "腾讯云 SaaS（含 WorkBuddy）适合已经在腾讯账号体系里的团队。私有化是运行时放在客户授权环境。喂龙虾做陪跑，OpenClaw 只在客户选定该运行时才部署。不写 WorkBuddy 价格。",
    definition:
      "私有化部署指智能体跑在客户授权的机器或 VPC 里，密钥和日志按客户边界配置。腾讯云 SaaS AI 指在腾讯云账号里开通的企业助手或智能办公产品，WorkBuddy 是其中公开的一款。两边都能做办公流程，控制面不是同一个。",
    audience: "在私有化和腾讯云 SaaS 之间做预算的信息化负责人与创始人",
    keywords: ["私有化部署 vs 腾讯云", "腾讯云 SaaS AI", "企业 AI 私有化", "WorkBuddy 企业版", "私有 AI 助手"],
    comparisonUsLabel: "客户侧私有化",
    comparisonTable: [
      { aspect: "你买到的边界", us: "客户环境里的运行时、权限名单和审核队列", them: "腾讯云账号内的产品能力", themLabel: "腾讯云 SaaS AI" },
      { aspect: "代表产品", us: "客户选定的可私有化框架。OpenClaw 常见，不是强制", them: "WorkBuddy 等腾讯云智能办公 / 企业助手。企业版以文档为准" },
      { aspect: "谁更短", us: "数据不能进公有办公产品、通道不在腾讯一家", them: "人、文档、会议、企微已经在腾讯云上" },
      { aspect: "运维", us: "客户或实施方值守。首页托管套餐只覆盖约定的 OpenClaw 安装", them: "厂商值守公有路径。企业版是否改到客户机房，看合同" },
      { aspect: "不能从名字推导的", us: "「私有」不等于可以无人对外承诺", them: "「企业版」不等于 Gateway 已经在你机房" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: [
      "腾讯云采购和企微主场：先把 SaaS 用起来",
      "供货价、客户名单不能进公有办公产品：再谈私有化",
      "WorkBuddy 企业版要读原文，不要用二手对比代替",
      "喂龙虾不把每张单都写成 OpenClaw",
    ],
    workflows: ["写下不能出环境的数据", "核对腾讯云合同里的落点", "只试点一条流程", "对外动作保持人工审核"],
    sections: [
      {
        title: "这不是 WorkBuddy 功能表",
        body: `腾讯云把 [WorkBuddy](${WORKBUDDY_HOME}) 作为智能办公 / 企业助手提供，企业向说明在[产品文档](${WORKBUDDY_ENTERPRISE_DOC})。本页比较的是两种采购边界：继续用腾讯云 SaaS，还是把运行时放到客户授权环境。功能是否一一对应，以腾讯当时文档为准，本站不代填。和 WorkBuddy 企业版的控制面问题，展开在 [企业版 vs 私有部署](/compare/workbuddy-qiye-vs-siyou)。`,
      },
      {
        title: "腾讯云 SaaS 会赢的情况",
        body: "员工账号、文档、会议和企业微信都在腾讯云里，信息化要求走云厂商采购，也没有人想值守 Gateway。这时私有化多出来的是机器和故障，不是能力。WorkBuddy 在这条栈上通常更短。喂龙虾接到这种咨询，会建议先用腾讯侧方案，而不是先签部署。",
        items: [
          "主通道是企微，周边系统也在腾讯云",
          "能接受厂商的地域、隔离和升级节奏",
          "要的是开箱办公，不是自己持有进程",
        ],
      },
      {
        title: "私有化会赢的情况",
        body: "飞书、钉钉、Gmail、独立站和货代微信群不在同一个厂商里，或者安全问卷问的是模型请求发往哪里、合同结束后实例归谁。私有化回答的是这些控制面问题。实施可以是 OpenClaw 白手套，也可以是客户已经选定的其他可私有化框架。首页上的安装和托管价不是整家公司的私有化项目，那种范围在 [企业陪跑计划](/enterprise)。风险说明见 [私有部署成本与风险](/blog/openclaw-private-deployment-cost-and-risk)。",
      },
      {
        title: "两边都不要跳过的审核",
        body: "无论进程在腾讯云还是在客户 VPC，报价、退款、付款和对客户的时效承诺都应由人确认。私有化降低的是数据默认进了哪一家公有产品，不降低说错话的概率。货代公司的询盘和运价不要在这页重做，用 [货代 AI 助手](/zh/huodai-ai-zhushou)。",
      },
    ],
    faqs: [
      {
        q: "不用腾讯云是不是就算私有化？",
        a: "不算。换一个别的公有 SaaS 仍然是 SaaS。私有化要能指出机器或 VPC、密钥、日志和模型请求各在哪。",
      },
      {
        q: "WorkBuddy 企业版算腾讯云 SaaS 还是私有化？",
        a: "先算腾讯云产品。文档里有企业向能力，是否等于客户机房或客户 VPC，以当前文档和合同为准。不能从「企业版」三个字推导。",
      },
      {
        q: "喂龙虾是否只卖 OpenClaw 私有化？",
        a: "不是。陪跑按客户选定的可私有化框架做。OpenClaw 的部署和托管是客户点名这条运行时之后的交付。",
      },
      {
        q: "价格怎么和腾讯云比？",
        a: "本页不写 WorkBuddy 或腾讯云的标价。喂龙虾首页是 OpenClaw 安装与托管套餐，企业陪跑另按 1–2 个工作流报价。计费单位不同，不要用一个数字硬比。",
      },
    ],
    related: [
      relatedCard("/compare/workbuddy-qiye-vs-siyou", "WorkBuddy 企业版 vs 私有部署", "谁掌握 Gateway 和数据，比「企业版」三个字具体。", "对比"),
      relatedCard("/compare/weishenme-siyou-not-workbuddy", "为什么不选 WorkBuddy", "只在控制面和工具栈对不上时，私有路径才值得。", "对比"),
      relatedCard("/zh/qiye-ai-zhushou-siyou-bushu", "企业 AI 助手私有部署", "私有部署在企业场景里具体指什么、不指什么。", "落地"),
      relatedCard("/enterprise", "企业陪跑计划", "3 天驻场，范围锁在 1–2 个工作流。", "服务"),
      relatedCard("/blog/openclaw-private-deployment-cost-and-risk", "私有部署成本与风险", "权限和成本，比口号先读。", "已有文章"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "物流公司的询盘和运价走专页，不在对比里重做。", "已有页面"),
    ],
  }),
  withPseoShell({
    category: "compare",
    slug: "weishenme-siyou-not-workbuddy",
    title: "为什么选私有 AI 助手而不选 WorkBuddy｜异议说明",
    h1: "为什么有的团队不选 WorkBuddy，而做私有 AI 助手",
    description:
      "不选 WorkBuddy 的正当理由只有几条：数据边界、非腾讯工具栈、要自己掌握运行时。腾讯生态原生就继续用 WorkBuddy。喂龙虾做陪跑，不编造对方价格。",
    definition:
      "选私有 AI 助手而不是 WorkBuddy，指团队拒绝把企业助手只放在腾讯云这款产品里，改为在客户授权环境中运行智能体。这不是「WorkBuddy 不好」，而是控制面和工具栈对不上。",
    audience: "已经被推荐 WorkBuddy、正在犹豫要不要私有化的负责人",
    keywords: ["为什么不选 WorkBuddy", "私有 AI 助手", "WorkBuddy 替代", "企业助手 选型", "数据不出域"],
    comparisonUsLabel: "私有 AI 助手路径",
    comparisonTable: [
      { aspect: "该留在 WorkBuddy", us: "若只是还没学会产品，私有化解决不了", them: "腾讯云 + 企微开箱，采购认厂商", themLabel: "WorkBuddy" },
      { aspect: "正当的离开理由", us: "数据落点、非腾讯通道、要换模型或搬走实例", them: "这些不是多开一个功能开关就能自动满足" },
      { aspect: "不正当的离开理由", us: "听说私有更先进、想比一个没写出来的价格", them: "价格以腾讯云官网和合同为准" },
      { aspect: "私有路径是什么", us: "陪跑 + 客户选定的运行时。OpenClaw 常见，不是入场条件", them: "仍是腾讯生态里的默认企业助手" },
      { aspect: "迁移动作", us: "并行一条流程，不要求当天关掉 WorkBuddy", them: "账号和历史留在腾讯侧，除非另有迁移计划" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: [
      "先写出必须离开的那一条，写不出就留下",
      "腾讯原生集成是 WorkBuddy 的主场",
      "私有助手仍然要人工审核对外承诺",
      "可以两套并存，不必全公司替换",
    ],
    workflows: ["列出留在腾讯的原因", "只挑一条盖不住的流程", "核对数据落点", "草稿上线后再谈第二条"],
    sections: [
      {
        title: "多数异议不构成离开的理由",
        body: `「别家也有智能办公」「测评文说开源更灵活」「想压价格」。这三条都不该直接改成私有部署。[WorkBuddy](${WORKBUDDY_HOME}) 在腾讯云和企微里就是为智能办公准备的。价格请看腾讯云当时报价，本页不写数字，也不用喂龙虾套餐去对标一个未公开在这里的标价。`,
        items: [
          "同事还没用起来：先内部培训，或把腾讯侧方案用完整",
          "采购只允许腾讯云：私有化会和采购制度冲突",
          "只想要一个聊天窗口：WorkBuddy 或通用对话产品都比自建轻",
        ],
      },
      {
        title: "值得选私有助手的三条",
        body: "第一，客户名单、供货价或订单导出不能默认进入公有办公产品，而企业版合同仍把数据放在你不能接受的区域。第二，飞书、Gmail、独立站、货代群和企微同时在用，一个腾讯云账号盖不住通道。第三，你要换模型、调日志、合同结束后把实例留在自己名下。三条里占一条，再谈喂龙虾。一条都不占，就留在 WorkBuddy。",
      },
      {
        title: "选了私有，也别指望它变成另一个 WorkBuddy",
        body: "私有路径不会自动获得腾讯会议、企微和腾讯文档的原生深度。你得到的是自己的运行时和一条被陪跑做完的流程。OpenClaw 是这条路径上常用的运行时；客户指定别的可私有化框架时，陪跑按那个框架做。范围是 [企业陪跑](/enterprise) 里的 1–2 个工作流，不是三天替换全公司。已有的货代场景继续用 [货代 AI 助手](/zh/huodai-ai-zhushou)。",
      },
      {
        title: "怎么和老板解释",
        body: "不要说「我们不用腾讯」。说「腾讯生态里的办公继续用 WorkBuddy；这一条流程的数据和控制面要在我们自己的环境里，所以单独做私有助手」。两套并行，避免两个机器人同时给客户发消息。选型顺序见 [企业助手怎么选](/zh/qiye-zhushou-zenme-xuan)。",
      },
    ],
    faqs: [
      {
        q: "是不是 WorkBuddy 做不到企业助手？",
        a: "不是。它就是腾讯云的企业助手产品。不选它，只因为你的数据边界或工具栈不在它的主路径上。",
      },
      {
        q: "私有助手会不会更便宜？",
        a: "不一定。自己的机器、模型和值守都要钱。本页不比较两边标价。喂龙虾的安装套餐在首页，陪跑在企业页按范围报价。",
      },
      {
        q: "已经买了 WorkBuddy 还要拆掉吗？",
        a: "不要为了新项目拆掉仍然合适的部分。新流程并行。对外发送只走一个审核队列。",
      },
      {
        q: "不选 WorkBuddy 是否等于必须上 OpenClaw？",
        a: "不等于。OpenClaw 是客户常选、我们也做白手套的运行时。陪跑可以按别的可放在客户环境里的框架做。不能私有化的纯 SaaS，不会被说成私有助手。",
      },
    ],
    related: [
      relatedCard("/compare/siyouhua-vs-tencent-saas", "私有化 vs 腾讯云 SaaS", "先分控制面，再谈具体产品。", "对比"),
      relatedCard("/compare/workbuddy-tidai", "WorkBuddy 替代", "什么时候换、什么时候不该换。", "对比"),
      relatedCard("/zh/qiye-zhushou-zenme-xuan", "企业助手怎么选", "用五步把聊天产品、腾讯云和私有路径分开。", "选型"),
      relatedCard("/zh/workbuddy-shihe-kuajing", "WorkBuddy 适合跨境吗", "跨境团队何时留在腾讯侧，何时做私有助手。", "跨境"),
      relatedCard("/enterprise", "企业陪跑计划", "只把 1–2 个工作流做完，系统留在客户侧。", "服务"),
      relatedCard("/compare/workbuddy-vs-weclawd", "WorkBuddy vs 喂龙虾", "一个是腾讯云产品，一个是陪跑和可选部署。", "对比"),
    ],
  }),
  ...batch3ComparePages,
  ...batch4ComparePages,
];
