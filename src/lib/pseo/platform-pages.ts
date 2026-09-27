import type { GeoPage } from "@/lib/geo-pages";
import { batch3PlatformPages } from "@/lib/pseo/batch3-pages";
import { relatedCard, withPseoShell } from "@/lib/pseo/shell";

const human = "对外发送、报价、退款和付款默认生成草稿，由人确认。";

/**
 * Channel pages. Append here to publish `/zh/[slug]`.
 * Freight-specific WeCom stays on /zh/qiyeweixin-huodai-ai.
 */
export const pseoPlatformPages: GeoPage[] = [
  withPseoShell({
    category: "integrations",
    slug: "qiyeweixin-qiye-zhushou",
    title: "企业微信企业助手｜消息进草稿和待办，不自动发给客户",
    h1: "企业微信企业助手：把群聊变成待办，而不是再装一个客服机器人",
    description:
      "企微是很多中国团队的主通道。腾讯生态里可先评估 WorkBuddy。喂龙虾把企业助手接到企微：摘要、草稿、未回复提醒。OpenClaw 只在客户选定该运行时时部署。",
    definition:
      "企业微信企业助手是接在企微权限内的执行流程，从客户或内部消息里提取待办和缺失信息。它不是固定话术的客服机器人。货代专用流程另有专页。",
    audience: "用企业微信做内外部沟通的 4–50 人团队负责人",
    keywords: ["企业微信 企业助手", "企业微信 AI 助手", "企微 智能办公", "WeCom 企业助手", "企业微信 OpenClaw"],
    bullets: [
      "未回复和缺失字段比自动回复优先",
      "WorkBuddy 在企微上是原生路径，先评估它",
      "货代询盘不在本页重做",
      "通道能接，不代表可以无人值守",
    ],
    workflows: ["未回复提醒", "群聊摘要", "回复草稿", "内部升级", "每日交接"],
    sections: [
      {
        title: "企微上的企业助手做什么",
        body: `在客户授权和技术条件允许时，把聊天整理成摘要、缺失信息清单和待办。${human} 更细的场景说明已在 [企业微信 AI 助手能做什么](/blog/wecom-ai-assistant-workflows)。英文集成页在 [WeCom](/integrations/wecom)。本页只回答商业选型：继续用腾讯云产品，还是把运行时放在自己这边。`,
      },
      {
        title: "WorkBuddy 往往是更短的企微路径",
        body: "企业微信是腾讯的产品。团队若已经在腾讯云上采购，WorkBuddy 接企微通常比自建一条机器人更贴账号体系。喂龙虾不会把「企微企业助手」说成只有 OpenClaw 能做。只有当你还要同时接飞书、邮箱，或消息内容不能进公有办公产品时，才值得把这一条流程放到客户侧运行时。",
        items: [
          "只在企微里办公：先看 WorkBuddy",
          "企微只是其中一个通道：看喂龙虾陪跑",
          "选定 OpenClaw 再看 [企业微信 OpenClaw](/zh/qiyeweixin-openclaw)",
        ],
      },
      {
        title: "不要和货代专页抢同一件事",
        body: "货代团队从企微询盘里提取港口、货量和报价跟进，用 [企业微信货代 AI](/zh/qiyeweixin-huodai-ai) 和 [货代 AI 助手](/zh/huodai-ai-zhushou)。本页给非货代团队：客服草稿、销售未回复、内部交接。实施仍是 [企业陪跑](/enterprise) 里的 1–2 个流程，不是把整个企微历史交给模型。",
      },
    ],
    faqs: [
      {
        q: "会自动在企微里回复客户吗？",
        a: "默认不会。先出草稿和提醒。涉及报价、承诺和外部发送，由员工确认。",
      },
      {
        q: "和普通企微客服机器人有何不同？",
        a: "客服机器人偏固定问答。这里的企业助手偏内部执行：结合聊天、邮件和表格做连续待办，而不是只匹配一句 FAQ。",
      },
      {
        q: "没有企微管理员权限能做吗？",
        a: "不能假装能做。权限不够时，只能从员工手工导出或抄送开始，并在页面和合同里写明这个限制。",
      },
      {
        q: "是否必须 OpenClaw？",
        a: "不必须。企微是通道，不是运行时。OpenClaw 是客户选定之后的部署选项。",
      },
    ],
    related: [
      relatedCard("/zh/qiyeweixin-openclaw", "企业微信 OpenClaw", "已经决定用 OpenClaw 接企微时再看这篇。", "平台"),
      relatedCard("/blog/wecom-ai-assistant-workflows", "企微 AI 能做什么", "已有文章：摘要、提醒和人工审核。", "已有文章"),
      relatedCard("/zh/qiyeweixin-huodai-ai", "企业微信货代 AI", "货代询盘专页，不在通用页重复。", "已有页面"),
      relatedCard("/integrations/wecom", "WeCom 集成", "英文集成说明。", "集成"),
      relatedCard("/compare/workbuddy-vs-openclaw", "WorkBuddy vs OpenClaw", "企微原生产品和自持运行时。", "对比"),
      relatedCard("/enterprise", "企业陪跑计划", "把一条企微流程做到有人每天用。", "服务"),
    ],
  }),
  withPseoShell({
    category: "integrations",
    slug: "feishu-qiye-zhushou",
    title: "飞书企业助手｜文档、日历和消息进同一条待办",
    h1: "飞书企业助手：从文档和日历开始，而不是先买一个聊天框",
    description:
      "飞书团队的企业助手应接在文档、日历和消息上。首页的飞书连接套餐只做安装，不含流程。喂龙虾陪跑这一条；OpenClaw 在客户选定后部署。腾讯栈团队不必为了飞书页离开 WorkBuddy。",
    definition:
      "飞书企业助手是把飞书消息、文档和日历收成草稿与提醒的工作流。[首页](/)飞书连接包（当前公示 ¥489，以首页为准）只保证安装与连通，不是这套工作流本身。",
    audience: "以飞书为主要办公套件的团队负责人和行政",
    keywords: ["飞书 企业助手", "飞书 AI 助手", "飞书 OpenClaw", "飞书 智能办公", "企业助手"],
    bullets: [
      "文档、日历、消息要说清哪一个先做",
      "安装套餐不等于流程交付",
      "飞书不是腾讯生态，WorkBuddy 不是默认更短",
      "对外承诺仍然人工确认",
    ],
    workflows: ["日历晨报", "文档要点", "群消息待办", "会议后草稿", "未完成提醒"],
    sections: [
      {
        title: "飞书上先做哪一件",
        body: `大多数团队文档在飞书、会议在飞书日历、催办在飞书群。助手如果三件同时开，验收会糊。先选一件：例如每天早上的日历和未读要点。${human} 集成能力的英文说明在 [Feishu](/integrations/feishu)。智能办公的品类边界在 [智能办公 AI 助手](/zh/zhineng-bangong-ai)。`,
      },
      {
        title: "首页套餐和陪跑差在哪",
        body: "首页「飞书 + Gateway 快速连接」是 2 小时量级的远程安装，只验证连通，不含工作流整合，也不含个性化。要把晨报或文档摘要做成每天在跑的流程，是另一张订单，通常落在 [企业陪跑计划](/enterprise) 或单独约定的工作流配置。客户选定 OpenClaw 时，这条运行时由我们部署；飞书本身不要求必须是 OpenClaw。",
      },
      {
        title: "和 WorkBuddy 的关系",
        body: "公司主场若是企微和腾讯云，不要因为看了飞书页就迁移。WorkBuddy 在腾讯栈上更贴。公司主场若是飞书，腾讯云产品就不是更短的路，喂龙虾按飞书的权限做一条流程更贴。两边都在用时，不要做两个机器人同时催同一件事。",
      },
    ],
    faqs: [
      {
        q: "买了 489 元（以首页为准）是不是就有企业助手？",
        a: "不是。[首页](/)飞书连接包（当前公示 ¥489，以首页为准）只保证安装与连通。企业助手还要规定读哪些文档、早报送到哪、谁确认外部消息。",
      },
      {
        q: "能读全部飞书知识库吗？",
        a: "不该默认全读。先列目录和权限。知识库越大，越要先做一条窄流程，避免助手引用过期制度。",
      },
      {
        q: "钉钉或企微还能一起接吗？",
        a: "可以按客户授权逐个接。每多一个通道就多一组权限和故障。试点阶段只接飞书。",
      },
      {
        q: "是否替代飞书自带的 AI？",
        a: "不替代文档里的临时写作。差在固定的每日流程、跨日历和消息的待办，以及你是否要把运行时放在自己的环境。",
      },
    ],
    related: [
      relatedCard("/integrations/feishu", "Feishu 集成", "英文集成页。", "集成"),
      relatedCard("/zh/zhineng-bangong-ai", "智能办公 AI 助手", "飞书晨报属于对内办公，不是客服。", "品类"),
      relatedCard("/zh/qiye-zhushou", "企业助手", "先有流程定义，再谈飞书通道。", "品类"),
      relatedCard("/compare/openclaw-diy-vs-tuoguan", "自己部署 vs 托管", "选定 OpenClaw 后，安装谁来做。", "对比"),
      relatedCard("/enterprise", "企业陪跑计划", "把飞书晨报做成每天在用的流程。", "服务"),
      relatedCard("/zh/dingding-qiye-zhushou", "钉钉企业助手", "主场若是钉钉，走对应的一页。", "平台"),
    ],
  }),
  withPseoShell({
    category: "integrations",
    slug: "qiyeweixin-openclaw",
    title: "企业微信 OpenClaw｜选定这个运行时之后怎么接",
    h1: "企业微信 OpenClaw：运行时选定之后，才谈白手套部署",
    description:
      "这篇只写已经决定用 OpenClaw 接企业微信的团队。还没选定运行时的，先看企业微信企业助手。喂龙虾做部署和托管；权限不够就做不了自动读取。",
    definition:
      "企业微信 OpenClaw 指把 OpenClaw 运行时接到企微，在授权范围内做摘要、草稿和提醒。它是通道加运行时的组合，不是企微里的官方应用名，也不是 WorkBuddy 的换名。",
    audience: "已经选定 OpenClaw、准备接到企业微信的技术或运营负责人",
    keywords: ["企业微信 OpenClaw", "OpenClaw 企微", "OpenClaw 企业微信 部署", "企微 机器人", "OpenClaw 托管"],
    bullets: [
      "先有企业微信侧的权限，再谈技能",
      "WorkBuddy 的技能兼容叙事不等于这就是你的实例",
      "部署可以自己做，也可以交给喂龙虾",
      "货代询盘字段去货代专页",
    ],
    workflows: ["权限清单", "只读摘要", "草稿队列", "失败告警", "人工审核"],
    sections: [
      {
        title: "这篇不负责说服你用 OpenClaw",
        body: "若你还在腾讯云和 OpenClaw 之间，去 [WorkBuddy vs OpenClaw](/compare/workbuddy-vs-openclaw) 和 [企业微信企业助手](/zh/qiyeweixin-qiye-zhushou)。这里假设运行时已经选定为 OpenClaw。喂龙虾的交付是白手套部署、基础加固、以及约定支持期内的值守。业务规则仍要单独写：哪些群要看、哪些句子不能自动发。",
      },
      {
        title: "接入时真正卡住的地方",
        body: "不是模型不会说中文。卡住的是企微应用权限、消息是否允许被第三方进程读取、令牌谁保管、接口变更谁改配置。自己有工程师就自己做，见 [自己部署 vs 托管](/compare/openclaw-diy-vs-tuoguan)。没有人值守，用首页托管套餐或陪跑，不要假设社区教程等于生产环境。已有流程说明在 [企业微信 AI 助手](/blog/wecom-ai-assistant-workflows)。",
        items: [
          "没有管理员权限：只能做人工抄送，不能称自动接入",
          "密钥放在个人聊天记录里：不算部署完成",
          "两个机器人同时回复同一客户：上线前要关掉一个",
        ],
      },
      {
        title: "和 WorkBuddy 技能兼容怎么理解",
        body: "公开材料提到 WorkBuddy 与 OpenClaw Skills 的兼容。那说明技能层可能复用，不说明企微消息已经跑在你自己的 Gateway 上。兼容范围以腾讯云当时文档为准。你要的如果是腾讯托管的企微助手，就用 WorkBuddy，不必再装一套 OpenClaw。",
      },
    ],
    faqs: [
      {
        q: "OpenClaw 是企微官方机器人吗？",
        a: "不是。它是独立运行时，通过客户自己的应用权限或约定方式读消息。官方产品和权限以企业微信当时的规则为准。",
      },
      {
        q: "喂龙虾能否保证任何企微账号都能接？",
        a: "不能。主体类型、应用权限和合规限制会让有些账号只能做草稿，不能做自动读取。做不到的会在评估时说，不事后补票。",
      },
      {
        q: "接上之后能否自动报价？",
        a: "不作为标准。货代报价有单独案例和专页，且仍要人工确认。其他行业同样不要让运行时直接承诺价格。",
      },
      {
        q: "以后不想用 OpenClaw 了呢？",
        a: "通道权限在企业微信侧，可以停用。陪跑若按别的框架重做流程，是新的范围，不是安装当天的免费迁移。合同里若写了迁移支持，以那次约定为准。",
      },
    ],
    related: [
      relatedCard("/zh/qiyeweixin-qiye-zhushou", "企业微信企业助手", "还没选定 OpenClaw 时从这篇开始。", "平台"),
      relatedCard("/compare/openclaw-diy-vs-tuoguan", "自己部署 vs 托管", "谁安装、谁值守。", "对比"),
      relatedCard("/blog/wecom-ai-assistant-workflows", "企微工作流", "已有文章，避免把教程再写一遍。", "已有文章"),
      relatedCard("/zh/qiyeweixin-huodai-ai", "企微货代", "物流询盘不要堆在这篇技术选型里。", "已有页面"),
      relatedCard("/compare/tencent-workbuddy-openclaw-qubie", "WorkBuddy 和 OpenClaw 的区别", "免部署产品和自有运行时。", "对比"),
      relatedCard("/enterprise", "企业陪跑计划", "权限通了之后，把一条流程做完。", "服务"),
    ],
  }),
  withPseoShell({
    category: "integrations",
    slug: "dingding-qiye-zhushou",
    title: "钉钉企业助手｜审批、群消息和待办先收成一条",
    h1: "钉钉企业助手：先接一件每天都在催的事",
    description:
      "钉钉团队的企业助手从群消息、审批提醒或日程里选一件来做。喂龙虾陪跑落地，框架不锁 OpenClaw。主场若在企微和腾讯云，不必为了钉钉页迁移。",
    definition:
      "钉钉企业助手是接在钉钉权限内的执行流程，把重复的提醒和摘要送到固定位置。它不替代钉钉审批本身的制度，也不自动代签。",
    audience: "以钉钉为内部协作工具的运营、行政和信息化负责人",
    keywords: ["钉钉 企业助手", "钉钉 AI 助手", "钉钉 智能办公", "钉钉 OpenClaw", "企业助手"],
    bullets: [
      "审批可以提醒，不可以代签",
      "先一个群或一类审批，不先接全公司",
      "OpenClaw 是可选运行时",
      "英文集成说明单独链出",
    ],
    workflows: ["待审批提醒", "群公告摘要", "日程晨报", "逾期未办", "交接草稿"],
    sections: [
      {
        title: "钉钉里最容易验收的一件",
        body: `逾期未处理的审批或无人认领的群问题。助手每天列一份名单，负责人自己点。${human} 不要把「帮我批掉」当成需求。英文集成页是 [DingTalk](/integrations/dingtalk)。`,
      },
      {
        title: "和飞书、企微页的分工",
        body: "公司主通道是哪一个，就只做那一页上的试点。钉钉、飞书、企微同时接，是三个权限项目。试点期选钉钉，就先不要为了完整而把 [飞书企业助手](/zh/feishu-qiye-zhushou) 和 [企业微信企业助手](/zh/qiyeweixin-qiye-zhushou) 一起上线。",
      },
      {
        title: "运行时仍然后选",
        body: "钉钉是通道。客户可以选定 OpenClaw，由喂龙虾部署；也可以沿用已经在客户环境里的其他框架。主场若其实是腾讯云和企微，WorkBuddy 仍可能是更短的路，不要因为内部有几个钉钉群就整套搬迁。流程做完的方式见 [企业陪跑计划](/enterprise)。",
      },
    ],
    faqs: [
      {
        q: "能否自动通过钉钉审批？",
        a: "不能作为交付。助手可以提醒谁还没处理。同意或拒绝仍由有权限的人在钉钉里操作。",
      },
      {
        q: "钉钉机器人是不是企业助手？",
        a: "群机器人只是入口。企业助手还要有固定的输入、输出位置和审核。只有一个会回话的机器人，不算这条流程做完。",
      },
      {
        q: "适合政务或学校钉钉吗？",
        a: "权限和合规通常更严。没有管理员书面授权，我们不接。能做的往往是内部提醒，不是对公众自动答复。",
      },
      {
        q: "必须上 OpenClaw 吗？",
        a: "不必须。先把逾期名单这件事跑通。运行时按你的环境限制再定。",
      },
    ],
    related: [
      relatedCard("/integrations/dingtalk", "DingTalk 集成", "英文集成页。", "集成"),
      relatedCard("/zh/feishu-qiye-zhushou", "飞书企业助手", "主场在飞书时不要同时开两条试点。", "平台"),
      relatedCard("/zh/qiyeweixin-qiye-zhushou", "企业微信企业助手", "主场在企微时走这篇。", "平台"),
      relatedCard("/zh/qiye-zhushou", "企业助手", "通道之上的定义。", "品类"),
      relatedCard("/enterprise", "企业陪跑计划", "钉钉上的一条逾期提醒，可以是 3 天的范围。", "服务"),
      relatedCard("/zh/zhineng-bangong-ai", "智能办公 AI 助手", "审批提醒属于对内办公。", "品类"),
    ],
  }),
  ...batch3PlatformPages,
];
