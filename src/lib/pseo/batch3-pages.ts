import type { GeoPage } from "@/lib/geo-pages";
import {
  WORKBUDDY_ENTERPRISE_DOC,
  WORKBUDDY_HOME,
  relatedCard,
  weclawdPriceCell,
  withPseoShell,
  workbuddyPriceCell,
} from "@/lib/pseo/shell";

const noCheat = "不做刷单、刷评、伪造评价、虚假流量或规避平台规则的操作。";
const human = "对买家的回复、退款、改价和时效承诺由人确认后发出。";

/** Cross-border sub-scenes appended to the industry array. */
export const batch3IndustryPages: GeoPage[] = [
  withPseoShell({
    category: "industries",
    slug: "amazon-maijia-ai",
    title: "亚马逊卖家 AI 助手｜草稿和异常单，不碰违规增长",
    h1: "亚马逊卖家 AI 助手：先处理买家消息和异常单，不承诺排名",
    description:
      "喂龙虾帮亚马逊卖家把买家消息、订单异常和商品要点收成草稿。回复由人发出。不刷单、不刷评。OpenClaw 只在你选定该运行时才部署。",
    definition:
      "亚马逊卖家 AI 助手是卖家侧的执行流程：整理买家消息和订单异常，起草回复和商品说明。它不登录后台替你改广告，也不做任何规避平台规则的增长。",
    audience: "亚马逊卖家里负责客服和运营的小团队",
    keywords: ["亚马逊卖家 AI 助手", "亚马逊 客服 AI", "跨境电商 企业助手", "亚马逊 运营 助手"],
    bullets: ["买家消息先成草稿", "异常单进早报，不自动退款", "商品文案只基于你提供的事实", "账号申诉和广告仍由人处理"],
    workflows: ["买家消息草稿", "超时未发清单", "要点核对", "差评原因摘要", "班次交接"],
    sections: [
      {
        title: "卖家后台不是默认接口",
        body: `没有稳定授权时，从卖家中心导出、邮件和企微交接开始，不编造 SP-API 已接通。${human} ${noCheat} 总览场景在 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)，国内店铺写法在 [电商运营 AI 助手](/zh/dianshang-yunying-ai-zhushou)。`,
      },
      {
        title: "什么不要交给助手",
        body: "广告出价、变体合并、账号绩效申诉、向买家索评的话术设计。这些要么违反平台规则，要么错一次比慢一小时贵。助手可以列出「哪些 ASIN 的消息还没人看」，不能替你承诺补发。",
      },
      {
        title: "运行时以后再选",
        body: "内部交接若已经在企微和腾讯云里完成，先看 WorkBuddy 是否够用，见 [WorkBuddy 适合跨境吗](/zh/workbuddy-shihe-kuajing)。买家数据和供货价不能进公有办公产品时，再谈客户侧运行时。OpenClaw 是选项之一。范围在 [企业陪跑](/enterprise) 的 1–2 个流程。",
      },
    ],
    faqs: [
      { q: "能不能自动回复亚马逊买家？", a: "默认不能。先出草稿。退款、补发和时效由客服在后台发出。" },
      { q: "能否保证排名或广告回报？", a: "不能。本页不涉及排名操作。能验收的是未读消息是否被看见、异常单是否进早报。" },
      { q: "和货代页是一回事吗？", a: "不是。头程和货代报价用货代专页。这里只处理卖家自己的买家沟通和订单异常。" },
      { q: "必须部署 OpenClaw 吗？", a: "不必须。先定数据和通道。选定 OpenClaw 后再做白手套部署。" },
    ],
    related: [
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服企业助手", "多站点客服草稿，不限亚马逊。", "跨境"),
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "订单、物流协同和开发信的总页。", "跨境"),
      relatedCard("/zh/workbuddy-shihe-kuajing", "WorkBuddy 适合跨境吗", "腾讯栈内的办公可以留下。", "选型"),
      relatedCard("/zh/dianshang-yunying-ai-zhushou", "电商运营 AI 助手", "国内店铺运营，不重复写。", "已有页面"),
      relatedCard("/enterprise", "企业陪跑计划", "一条买家消息流程可以是 3 天的范围。", "服务"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "物流公司的询盘不在卖家页重做。", "已有页面"),
    ],
  }),
  withPseoShell({
    category: "industries",
    slug: "dulizhan-yunying-ai",
    title: "独立站运营 AI 助手｜商品草稿和收件箱，不代建站",
    h1: "独立站运营 AI 助手：帮运营起草和分拣，不替换店铺系统",
    description:
      "独立站助手处理商品要点草稿、收件箱分拣和订单异常提醒。喂龙虾不做建站，也不编造某个建站产品的功能。框架不锁 OpenClaw。",
    definition:
      "独立站运营 AI 助手是接在邮箱、表格和授权后台导出上的流程，帮运营减少复制粘贴。店铺本身仍在你现有的建站系统里。",
    audience: "独立站运营、品牌客服和内容负责人",
    keywords: ["独立站 运营 AI 助手", "独立站 AI", "Shopify 运营 助手", "跨境 商品文案"],
    bullets: ["文案只写你核对过的卖点", "收件箱先分类再起草", "异常订单提醒，不自动改价", "不把建站产品说成我们的交付"],
    workflows: ["商品要点草稿", "售前邮件分类", "缺货提醒", "FAQ 草稿", "周报素材"],
    sections: [
      {
        title: "和建站工具分开",
        body: `喂龙虾不提供商店主题，也不承诺某个建站 AI 的按钮。我们把你已经有的商品事实、邮件和订单表收成草稿。${human} ${noCheat} 国内电商品类页是 [电商运营 AI 助手](/zh/dianshang-yunying-ai-zhushou)。`,
      },
      {
        title: "什么时候不必找我们",
        body: "如果团队只在腾讯云文档和企微里写内部通知，WorkBuddy 的智能办公可能更短，不必为了独立站四个字再部署一套运行时。邮件在 Gmail、商品表在表格、客服不在腾讯栈时，陪跑一条收件箱流程更贴。",
      },
      {
        title: "验收看漏项，不看 GMV",
        body: "上线前记一周：售前邮件第一次有人看的间隔，缺货单从发现到认领的间隔。助手只是让群里多一条没人看的摘要，不算完成。实施见 [企业陪跑计划](/enterprise)。",
      },
    ],
    faqs: [
      { q: "能直接改独立站页面吗？", a: "默认不改。先出草稿，运营粘贴或在自己的后台发布。没有稳定接口时不假装已接通。" },
      { q: "WorkBuddy 的内容工具够不够？", a: "内部写作够用就继续用。本页不列它的功能清单。缺口若是店铺邮件和订单表，再单独立项。" },
      { q: "能否自动发促销？", a: "不作为默认。促销价和库存承诺由人发。" },
      { q: "必须 OpenClaw 吗？", a: "不必须。OpenClaw 是客户选定后的部署选项。" },
    ],
    related: [
      relatedCard("/zh/amazon-maijia-ai", "亚马逊卖家 AI 助手", "平台卖家和独立站分开做。", "跨境"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服企业助手", "收件箱升级规则。", "跨境"),
      relatedCard("/zh/dianshang-yunying-ai-zhushou", "电商运营 AI 助手", "国内运营页，避免重复。", "已有页面"),
      relatedCard("/zh/zhineng-bangong-ai", "智能办公 AI 助手", "周报素材属于对内办公。", "品类"),
      relatedCard("/enterprise", "企业陪跑计划", "一条收件箱流程。", "服务"),
      relatedCard("/compare/workbuddy-vs-weclawd", "WorkBuddy vs 喂龙虾", "开箱办公还是陪跑。", "对比"),
    ],
  }),
  withPseoShell({
    category: "industries",
    slug: "kuajing-kefu-qiye-zhushou",
    title: "跨境电商客服企业助手｜多站点草稿和升级",
    h1: "跨境客服企业助手：先把没人看的消息找出来",
    description:
      "跨境客服助手整理多站点买家问题，生成回复草稿，并把退款和时效升级给人。通用客服页不重复写。OpenClaw 可选。",
    definition:
      "跨境电商客服企业助手是面向买家消息的执行流程，处理时差、双语和平台规则下的草稿与升级。它不无人值守店铺。",
    audience: "跨境客服主管和多站点运营",
    keywords: ["跨境电商 客服 企业助手", "跨境客服 AI", "多站点 客服", "企业助手"],
    bullets: ["先列未回复，再写草稿", "退款和补发升级给人", "双语草稿要人改口吻", "不做刷单、刷评或伪造物流"],
    workflows: ["未回复清单", "物流问题草稿", "升级给售后", "班次交接", "高频问题周记"],
    sections: [
      {
        title: "和通用客服页的差别",
        body: `通用的问题分流在 [企业客服 AI 助手](/zh/qiyefuwu-ai-zhushou)。这里多出来的是时区、英文或小语种草稿、以及平台消息不能由助手直接承诺时效。${human} 卖家总流程见 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)。`,
      },
      {
        title: "升级规则要先写",
        body: "地址错误、已发货争议、要退款、要开发票，这些进人工队列，不进自动回复。助手只负责把原文和缺失字段放在一起。没有这张升级表，就不要上线。",
      },
      {
        title: "通道不一定在腾讯",
        body: "买家邮件常在 Gmail 或平台后台，内部交接在企微。企微原生办公可以继续用 WorkBuddy。平台后台没有授权时，用导出和邮件，不编造接口。数据不能进公有产品时看 [跨境私有部署](/zh/kuajing-ai-siyou-bushu)。",
      },
    ],
    faqs: [
      { q: "能否 7×24 自动客服？", a: "不能作为交付标准。可以做未回复提醒和草稿。夜间发出的承诺仍然要人负责。" },
      { q: "能接所有平台吗？", a: "不能事先承诺。先从你能量到的一个站点或一个邮箱开始。" },
      { q: "和亚马逊专页重复吗？", a: "亚马逊的账号规则在亚马逊页。本页是多站点客服的共同部分：草稿、升级、人审。" },
      { q: "是否替代客服？", a: "不替代。客服仍对买家负责。助手减少查找。" },
    ],
    related: [
      relatedCard("/zh/qiyefuwu-ai-zhushou", "企业客服 AI 助手", "不限跨境的客服草稿。", "已有页面"),
      relatedCard("/zh/amazon-maijia-ai", "亚马逊卖家 AI 助手", "平台规则更严的一页。", "跨境"),
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "客服只是其中一条。", "跨境"),
      relatedCard("/zh/kuajing-qiye-tixiao", "跨境企业提效", "用未回复时长做验收。", "跨境"),
      relatedCard("/enterprise", "企业陪跑计划", "升级表加一条草稿，是合理的 3 天范围。", "服务"),
      relatedCard("/zh/workbuddy-shihe-kuajing", "WorkBuddy 适合跨境吗", "内部交接可以留在腾讯侧。", "选型"),
    ],
  }),
  withPseoShell({
    category: "industries",
    slug: "kuajing-xiaoshou-genjin",
    title: "跨境销售跟进 AI｜提醒和开发信草稿，发送前人工看",
    h1: "跨境销售跟进：提醒谁该回访，信由人发出",
    description:
      "跨境跟进助手根据授权内的往来整理下次联系，并基于公开资料起草开发信。不群发未经查看的稿。货代开发信演示不冒充跨境成交案例。",
    definition:
      "跨境销售跟进 AI 是提醒和草稿，不是自动开拓渠道。开发信只使用公开信息，发送前由销售确认。",
    audience: "跨境销售、分销跟进和业务开发",
    keywords: ["跨境 销售跟进 AI", "跨境 开发信", "海外客户 跟进", "销售助手"],
    bullets: ["长时间未回访被点名", "开发信一封一个理由", "不写虚假客户关系", "货代拓客演示只作方法参考"],
    workflows: ["未跟进名单", "会前简报", "开发信草稿", "报价后提醒", "主管早报"],
    sections: [
      {
        title: "跟进和群发不是一回事",
        body: `通用跟进节奏在 [销售跟进 AI 助手](/zh/xiaoshou-genjin-ai-zhushou)。跨境多了时差和双语。开发信方法可以参考 [货代自动开发信演示](/case/freight-auto-outreach)：公开信息、对不上就标明不匹配、人审再发。那是能力演示，不是跨境客户的成交数据。${noCheat}`,
      },
      {
        title: "报价和账期不自动给",
        body: `${human} 分销价格、账期和独家条款由销售决定。助手可以把上次谈话里已说出口的句子找出来，不能新造一个折扣。物流报价若是货代自己的业务，去 [货代 AI 助手](/zh/huodai-ai-zhushou)。`,
      },
      {
        title: "从哪条名单开始",
        body: "先用你已经在跟的 30 个客户，不要先买一份来源不清的名单。陪跑把「多久没联系算逾期」写成规则，见 [企业陪跑计划](/enterprise)。运行时未定就不要先买 OpenClaw 托管。",
      },
    ],
    faqs: [
      { q: "能自动群发开发信吗？", a: "不建议，也不是默认交付。每封草稿由销售看过再发。" },
      { q: "资料从哪来？", a: "客户官网等公开信息和你自己的往来记录。不把猜测写成事实，不承诺买到对方决策人名单。" },
      { q: "和客服页怎么分？", a: "客服处理已下单的买家问题。本页处理还在谈的客户和分销跟进。" },
      { q: "是否保证回复率？", a: "不保证。能验收的是逾期未联系是否被看见、草稿是否还在从零手写。" },
    ],
    related: [
      relatedCard("/zh/xiaoshou-genjin-ai-zhushou", "销售跟进 AI 助手", "不限跨境的跟进页。", "已有页面"),
      relatedCard("/case/freight-auto-outreach", "开发信演示", "方法演示，不是跨境案例。", "案例"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服企业助手", "已成交买家走客服页。", "跨境"),
      relatedCard("/zh/kuajing-ai-tixiao-changjing", "跨境提效场景", "跟进是场景之一，不是全部。", "跨境"),
      relatedCard("/enterprise", "企业陪跑计划", "一条逾期名单可以先做。", "服务"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "物流公司拓客不在这里重做。", "已有页面"),
    ],
  }),
];

/** Category pages appended to the howto array, including two info pages. */
export const batch3HowtoPages: GeoPage[] = [
  withPseoShell({
    category: "solutions",
    slug: "ai-funeng-qiye-bangong",
    title: "AI 赋能企业办公｜先教会当班的人用一条简报",
    h1: "AI 赋能企业办公：赋能的是班次，不是再买一个账号",
    description:
      "企业办公的 AI 赋能是把邮件、日程或交接收成当班能用的简报，并教会同事用草稿。腾讯办公栈可先用 WorkBuddy。喂龙虾做陪跑，OpenClaw 可选。",
    definition:
      "AI 赋能企业办公指一条内部流程被写清、被试用、被留下操作说明。它不是模型采购，也不是无人办公室。",
    audience: "想让行政部门和运营真正用上 AI 的负责人",
    keywords: ["AI 赋能 企业办公", "智能办公", "企业助手", "办公 自动化"],
    bullets: ["先一条晨报或交接", "结论仍由人写", "腾讯栈开箱优先 WorkBuddy", "不把赋能写成全员替换"],
    workflows: ["选出一条每日动作", "当班试用三天", "改掉不该出现的句子", "留下权限清单"],
    sections: [
      {
        title: "和智能办公页的分工",
        body: "品类定义在 [智能办公 AI 助手](/zh/zhineng-bangong-ai)：邮件、日程、交接。本页只讲怎么开始赋能，避免两页写成同一张功能表。会议纪要细节在 [会议纪要 AI 助手](/zh/huiyi-jiyao-ai-zhushou)。",
      },
      {
        title: "第二天早上才算数",
        body: "演示能生成一篇周报。赋能是早班知道哪三件事要人处理。生成全文重贴收件箱，不算赋能。对外承诺不放进办公简报的自动发送里。",
      },
      {
        title: "谁来做",
        body: "人已经在企微和腾讯云里，先把 WorkBuddy 用起来。通道含飞书、Gmail 或客户环境限制时，再由 [企业陪跑](/enterprise) 做 1–2 个流程。未选定运行时，不要先锁 OpenClaw。",
      },
    ],
    faqs: [
      { q: "赋能是不是培训课？", a: "培训是其中一步。没有一条每天在跑的简报，只有课件，不算赋能完成。" },
      { q: "和买聊天账号冲突吗？", a: "不冲突。问答继续用现成产品。固定晨报另做流程。" },
      { q: "能否自动发全员周报？", a: "默认送到待审核。数字由负责人确认后再发。" },
      { q: "小团队也需要吗？", a: "需要看有没有每天重复的整理。没有，就不要做。中小企业的范围见下一页，实施仍然只锁一条。" },
    ],
    related: [
      relatedCard("/zh/zhineng-bangong-ai", "智能办公 AI 助手", "办公品类本身。", "品类"),
      relatedCard("/zh/ai-funeng-zhongxiao-qiye", "AI 赋能中小企业", "4–50 人团队怎么起手。", "品类"),
      relatedCard("/zh/qiye-zhushou", "企业助手", "执行助手的定义。", "品类"),
      relatedCard("/compare/workbuddy-vs-openclaw", "WorkBuddy vs OpenClaw", "开箱还是自持运行时。", "对比"),
      relatedCard("/enterprise", "企业陪跑计划", "教会当班的人是陪跑的第三天。", "服务"),
      relatedCard("/zh/huiyi-jiyao-ai-zhushou", "会议纪要 AI 助手", "已有的纪要流程。", "已有页面"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "ai-funeng-zhongxiao-qiye",
    title: "AI 赋能中小企业｜4–50 人先做一条，不铺全公司",
    h1: "中小企业 AI 赋能：创始人的时间比多开一个系统贵",
    description:
      "4–50 人团队的赋能从一条重复工作开始。喂龙虾陪跑设计、训练和验收。OpenClaw 安装套餐不是全公司改造。腾讯生态够用就不要另起运行时。",
    definition:
      "中小企业 AI 赋能是把一个具体动作交给助手，并让现有员工会用。它不要求先成立 AI 部门，也不承诺编制立刻下降。",
    audience: "4–50 人公司的创始人和运营负责人",
    keywords: ["AI 赋能 中小企业", "中小企业 AI 助手", "企业陪跑", "企业助手"],
    bullets: ["一条流程写进验收", "安装套餐和陪跑不要买混", "没有工程师也可以从邮件和表格开始", "不保证省掉一半人力"],
    workflows: ["创始人指出最痛的一件", "权限只开这一件", "员工试用", "一周后看漏项"],
    sections: [
      {
        title: "两张订单",
        body: "首页的 OpenClaw 安装和云托管，是客户选定该运行时之后的连通和有限工作流，通常远程完成。企业陪跑简单场景约 10–30 万、复杂约 30–80 万，以陪跑页为准，见 [企业陪跑计划](/enterprise)；预约后按 1–2 个工作流报价。4–50 人团队最常见的错误是用安装费期待陪跑的结果。",
      },
      {
        title: "没有技术团队时的边界",
        body: "从邮箱、表格、企微或飞书里你能导出的材料开始。不要同时开五个系统的接口。做不到的权限在评估时说明。选型步骤在 [企业助手怎么选](/zh/qiye-zhushou-zenme-xuan)。",
      },
      {
        title: "什么时候不做",
        body: "没有每天重复的工作，只是想看看 AI。或者采购规定只能走腾讯云，而 WorkBuddy 已经覆盖内部办公。后者应留在腾讯侧，见 [不用 WorkBuddy 用什么](/compare/buyong-workbuddy-yongshenme)。",
      },
    ],
    faqs: [
      { q: "中小企业适合上门吗？", a: "上门只在深圳，且对应陪跑不是安装套餐。其他城市走远程。只装 OpenClaw 时，深圳也可以远程。" },
      { q: "能否三个月替换所有岗位？", a: "不能。助手不替代判断。先证明一条流程减少漏项，再谈第二条。" },
      { q: "价格从哪看？", a: "安装价在首页。陪跑价在企业页。WorkBuddy 的价格不在本站编写，以腾讯云为准。" },
      { q: "必须 OpenClaw 吗？", a: "不必须。框架按数据边界和你已有的工具选。" },
    ],
    related: [
      relatedCard("/zh/ai-funeng-qiye-bangong", "AI 赋能企业办公", "办公这条怎么起手。", "品类"),
      relatedCard("/enterprise", "企业陪跑计划", "中小企业若要做业务流，看范围和报价。", "服务"),
      relatedCard("/zh/qiye-zhushou-zenme-xuan", "企业助手怎么选", "先写流程再花钱。", "选型"),
      relatedCard("/zh/yuancheng-qiye-zhushou", "远程部署企业助手", "全国主路径是远程。", "服务"),
      relatedCard("/compare/buyong-workbuddy-yongshenme", "不用 WorkBuddy 用什么", "很多团队的答案是继续用。", "对比"),
      relatedCard("/zh/baishoutao-ai-bushu", "白手套部署", "有人把安装和一条流程做完。", "服务"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "shuzi-yuangong-siyou",
    title: "数字员工私有部署｜是一条流程，不是席位的别名",
    h1: "数字员工私有部署：客户环境里的流程，不是再买一个工号",
    description:
      "私有数字员工指助手跑在客户授权环境，权限和日志能指到具体机器或 VPC。公开叙事里的开箱数字员工多是云上产品。喂龙虾不强制 OpenClaw，也不写 WorkBuddy 价格。",
    definition:
      "数字员工在本站指一条可重复的执行流程，带草稿和人工审核。私有部署指它跑在客户授权环境。它不是法律上的雇员，也不能无人对外承诺。",
    audience: "在评估数字员工、又被要求说明数据落点的负责人",
    keywords: ["数字员工 私有部署", "数字员工", "企业助手 私有化", "OpenClaw 私有部署"],
    bullets: ["先写岗位动作，再写运行时", "私有要能指出环境和密钥", "开箱数字员工产品不等于这页", "对外动作仍然人工"],
    workflows: ["选一个岗位动作", "数据分级", "只读试点", "审核队列", "权限回收"],
    sections: [
      {
        title: "词不要混用",
        body: `媒体和云厂商会用「数字员工」描述开箱办公，腾讯云 [WorkBuddy](${WORKBUDDY_HOME}) 属于这类产品叙事。那是账号体系里的助手。本页的私有部署是另一件采购：进程在客户机器或 VPC。企业版是否已经等于你的机房，以[腾讯云文档](${WORKBUDDY_ENTERPRISE_DOC})和合同为准，不要从称号推导。`,
      },
      {
        title: "和私有部署页的分工",
        body: "控制面四问在 [企业 AI 助手私有部署](/zh/qiye-ai-zhushou-siyou-bushu)。本页强调：所谓数字员工必须能说清它替哪个岗位做哪一个动作。说不清岗位，就还是聊天。值守谁来做，见 [私有 AI 助手托管](/zh/siyou-ai-zhushou-tuoguan)。",
      },
      {
        title: "不交付的身份",
        body: "不交付劳动合同意义上的员工，不交付自动报价和自动付款。货代场景的「AI 员工」案例是一条报价流程，见 [货代案例](/case/huodai-baojia-speed-to-lead)，不能套到所有岗位。",
      },
    ],
    faqs: [
      { q: "数字员工能否独立对外签约？", a: "不能。合同、付款和客户承诺由人完成。" },
      { q: "是否比 WorkBuddy 更高级？", a: "不是等级关系。腾讯栈开箱用云产品更短。要自己掌握环境时才用私有部署。" },
      { q: "一定 OpenClaw 吗？", a: "不一定。它是常用运行时。其他可放在客户环境的框架按陪跑做。" },
      { q: "首页低价套餐算数字员工私有化吗？", a: "不算。那是 OpenClaw 安装或有限工作流。岗位级私有化走企业陪跑。" },
    ],
    related: [
      relatedCard("/zh/qiye-ai-zhushou-siyou-bushu", "企业 AI 助手私有部署", "环境和密钥怎么写清。", "落地"),
      relatedCard("/compare/siyouhua-vs-tencent-saas", "私有化 vs 腾讯云 SaaS", "两种采购边界。", "对比"),
      relatedCard("/zh/qiye-zhinengti-bushu", "企业智能体部署服务", "部署服务不是智能体平台产品。", "服务"),
      relatedCard("/case/huodai-baojia-speed-to-lead", "货代案例", "一个岗位动作的已有结果。", "案例"),
      relatedCard("/enterprise", "企业陪跑计划", "按 1–2 个动作报价。", "服务"),
      relatedCard("/zh/workbuddy-shi-shenme", "WorkBuddy 是什么", "云上企业助手的定义。", "说明"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "qiye-zhinengti-bushu",
    title: "企业智能体部署服务｜把一个智能体放进现有工具",
    h1: "企业智能体部署：我们做实施，不卖另一个编排平台",
    description:
      "喂龙虾帮企业把智能体接到企微、飞书、邮箱或表格，并定好审核。框架按客户选择，OpenClaw 是其中一条。不是多租户智能体平台。",
    definition:
      "企业智能体部署服务是设计、权限、上线和训练。交付物是客户环境里在跑的一条流程，不是一个让你再登录的新平台。",
    audience: "正在比较智能体平台和实施服务的信息化与业务负责人",
    keywords: ["企业智能体 部署服务", "智能体 部署", "AI Agent 落地", "企业助手"],
    bullets: ["平台账号不等于流程跑起来", "一条智能体对应一个动作", "审核点写进交付", "OpenClaw 可选"],
    workflows: ["选定动作和数据", "接一个通道", "草稿队列", "员工试用", "文档移交"],
    sections: [
      {
        title: "三层不要比错",
        body: "模型负责生成，聊天产品负责问答，部署服务负责权限和每天执行。已有说明在 [企业 AI 助手选型对标](/zh/qiye-ai-zhushou-duibiao)。买一个智能体平台试用账号，通常仍要人把企微和表格接上。喂龙虾卖的是后面这一段。",
      },
      {
        title: "和 WorkBuddy 怎么放",
        body: "WorkBuddy 是腾讯云上的企业助手产品，本身可以覆盖腾讯栈里的办公。你要的若是那个产品，去腾讯云，不来这里买「部署服务」重复付费。你要的若是非腾讯通道或客户侧运行时，部署服务才成立。选型表见 [企业助手选型 WorkBuddy](/compare/qiye-zhushou-xuanxing-workbuddy)。",
      },
      {
        title: "交付边界",
        body: "陪跑 3 天锁定 1–2 个智能体动作，见 [企业陪跑计划](/enterprise)。白手套安装若只是选定 OpenClaw 后的连通，看 [白手套 AI 助手部署](/zh/baishoutao-ai-bushu)，不要把两个范围写成一张订单。",
      },
    ],
    faqs: [
      { q: "能否部署任意开源智能体框架？", a: "不能口头全包。框架必须能放在约定环境里，并且我们评估过权限模型。做不到会在签约前说。" },
      { q: "是不是多智能体自动协作平台？", a: "不是。我们不上线一个让部门互相调用的平台。一次做一个动作。" },
      { q: "和数字员工页的差别？", a: "数字员工页强调岗位和私有环境。本页强调你买的是部署服务，不是平台订阅。" },
      { q: "安全上能无人运行吗？", a: "不作为标准。高风险动作停在人工审核。" },
    ],
    related: [
      relatedCard("/zh/qiye-ai-zhushou-duibiao", "选型对标", "模型、聊天、部署三层。", "已有页面"),
      relatedCard("/zh/baishoutao-ai-bushu", "白手套部署", "有人把环境装完。", "服务"),
      relatedCard("/zh/shuzi-yuangong-siyou", "数字员工私有部署", "岗位动作加客户环境。", "落地"),
      relatedCard("/compare/qiye-zhushou-xuanxing-workbuddy", "选型里的 WorkBuddy", "何时不要买部署。", "对比"),
      relatedCard("/enterprise", "企业陪跑计划", "部署服务的主要交付形态。", "服务"),
      relatedCard("/zh/qiye-zhushou", "企业助手", "部署完成之后员工每天看到的东西。", "品类"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "baishoutao-ai-bushu",
    title: "白手套 AI 助手部署｜有人装完并留下审核规则",
    h1: "白手套部署：我们代做安装和一条流程，不提供无限定制",
    description:
      "白手套指喂龙虾远程或在深圳上门，把助手装进客户环境并写清谁确认外部消息。客户选定 OpenClaw 时部署 OpenClaw。不是全国上门，也不是全公司改造。",
    definition:
      "白手套 AI 助手部署是实施服务：权限、安装、加固、一条约定工作流和交接说明。系统留在客户侧。它不是一个按月席位的办公套件。",
    audience: "没有精力自己研究部署、希望有人做完的创始人",
    keywords: ["白手套 AI 助手 部署", "白手套部署", "OpenClaw 白手套", "企业助手 实施"],
    bullets: ["安装和业务设计要分开报价", "上门仅深圳", "远程是全国主路径", "14 天安装支持和 30 天陪跑答疑不是同一承诺"],
    workflows: ["确认运行时", "远程或深圳进场", "只读和草稿", "交接文档", "支持期内改边界"],
    sections: [
      {
        title: "白手套包含什么",
        body: "选定 OpenClaw 时：按首页套餐做远程安装、基础加固和有限集成。飞书快速连接只含连通，不含工作流。要把某个业务动作做完并教会人，是 [企业陪跑](/enterprise)。选定其他可落地框架时，不套用 OpenClaw 的低价安装 SKU，放在陪跑里评估。",
      },
      {
        title: "自己做也合理",
        body: "开源运行时可以自己部署。白手套适合没有人值守故障的团队。对比在 [自己部署 vs 托管](/compare/openclaw-diy-vs-tuoguan)。深圳需要工程师到办公室时看 [深圳部署](/zh/shenzhen-qiye-zhushou-bushu)，其他城市看 [远程部署](/zh/yuancheng-qiye-zhushou)。",
      },
      {
        title: "不包含的承诺",
        body: "不包含永久值班、不包含未经约定的第五个系统、不包含自动对外报价。腾讯云上已够用的办公，白手套也不该硬做一套，见 [不用 WorkBuddy 用什么](/compare/buyong-workbuddy-yongshenme)。",
      },
    ],
    faqs: [
      { q: "白手套是否等于数据在喂龙虾？", a: "不是。安装在客户电脑、约定的 VPS 或客户 VPC。密钥按该次部署管理。" },
      { q: "当天能完成吗？", a: "约定的 OpenClaw 安装可以当天完成。业务流上线不是同一句话。" },
      { q: "不满意能退吗？", a: "首页安装套餐写明 14 天内不满意可退。陪跑范围以合同为准，不要用安装退款规则覆盖陪跑。" },
      { q: "能白手套部署 WorkBuddy 吗？", a: "WorkBuddy 是腾讯云产品，开通找腾讯云。我们的白手套是客户侧助手，不是腾讯云代开账号。" },
    ],
    related: [
      relatedCard("/compare/openclaw-diy-vs-tuoguan", "自己部署 vs 托管", "要不要把安装交给别人。", "对比"),
      relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门", "上门只在深圳。", "服务"),
      relatedCard("/zh/yuancheng-qiye-zhushou", "远程部署", "全国主路径。", "服务"),
      relatedCard("/zh/qiye-zhinengti-bushu", "企业智能体部署", "白手套之上的业务实施。", "服务"),
      relatedCard("/enterprise", "企业陪跑计划", "流程设计在这张订单。", "服务"),
      relatedCard("/zh/feishu-openclaw-bushu", "飞书 OpenClaw 部署", "已经选定 OpenClaw 且主场是飞书。", "平台"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "workbuddy-shi-shenme",
    title: "WorkBuddy 是什么｜腾讯云的智能办公产品，不是喂龙虾",
    h1: "WorkBuddy 是什么：腾讯云上的企业助手",
    description:
      "WorkBuddy 是腾讯云的智能办公 / 企业助手产品，在腾讯云账号里使用。它不是 OpenClaw，也不是喂龙虾。企业版以腾讯云文档为准。本页不写它的价格。",
    definition:
      "WorkBuddy 是腾讯云提供的企业助手产品，面向智能办公。喂龙虾是另一家的实施服务：陪跑，以及客户选定 OpenClaw 时的部署托管。两者不是同一个产品的两个版本。",
    audience: "第一次搜索 WorkBuddy、想先弄清它是谁的产品的人",
    keywords: ["WorkBuddy 是什么", "腾讯云 WorkBuddy", "WorkBuddy 企业版", "企业助手"],
    bullets: ["产品归属是腾讯云", "主场是腾讯生态里的办公", "企业版要读原文", "技能兼容不等于你持有运行时"],
    workflows: ["看官方产品页", "核对是否已有腾讯云账号", "列出工具是否都在腾讯", "再决定要不要另外实施"],
    sections: [
      {
        title: "公开能确定的事实",
        body: `产品介绍在 [WorkBuddy](${WORKBUDDY_HOME})，企业向说明在[腾讯云文档](${WORKBUDDY_ENTERPRISE_DOC})。它被放在智能办公和企业助手这个品类里。具体通道、模型和私有化等级会变，以你打开文档的那一版和合同为准。本站不代腾讯列出功能表，也不写价格。`,
      },
      {
        title: "它不是 OpenClaw",
        body: "OpenClaw 是可自持的智能体运行时。公开材料谈到 WorkBuddy 与 OpenClaw Skills 的兼容，那是技能层的说法，不表示 WorkBuddy 账号就是你自己的 OpenClaw 实例。区别见 [腾讯 WorkBuddy 和 OpenClaw 的区别](/compare/tencent-workbuddy-openclaw-qubie)。",
      },
      {
        title: "和喂龙虾的关系",
        body: "我们不是 WorkBuddy 代理。腾讯栈里要开箱，直接用它。工具不在腾讯、或数据要在客户环境时，再谈喂龙虾的陪跑。价格怎么问才不会比错，见 [WorkBuddy 价格对照](/compare/workbuddy-jiage-vs-openclaw)。",
      },
    ],
    faqs: [
      { q: "WorkBuddy 是喂龙虾做的吗？", a: "不是。WorkBuddy 是腾讯云产品。喂龙虾是独立的实施团队。" },
      { q: "有免费版吗？", a: "以腾讯云当前页面为准。本页不转述价格、额度和活动。" },
      { q: "企业版是不是私有化？", a: "不能从名称判断。问数据落点、谁管密钥、合同结束后能否搬走。" },
      { q: "适合跨境团队吗？", a: "内部办公在企微时往往适合作为起点。店铺、境外邮箱和供货价要另看，见跨境专页。" },
    ],
    related: [
      relatedCard("/compare/workbuddy-vs-openclaw", "WorkBuddy vs OpenClaw", "产品和运行时。", "对比"),
      relatedCard("/compare/workbuddy-vs-weclawd", "WorkBuddy vs 喂龙虾", "产品和陪跑。", "对比"),
      relatedCard("/zh/workbuddy-shihe-kuajing", "适合跨境吗", "跨境团队的一半适合、一半不够。", "跨境"),
      relatedCard("/compare/workbuddy-jiage-vs-openclaw", "价格怎么问", "不在这里写对方标价。", "对比"),
      relatedCard("/compare/qiye-zhushou-xuanxing-workbuddy", "选型", "什么时候就该选它。", "对比"),
      relatedCard("/enterprise", "企业陪跑计划", "只有缺口明确时才需要实施。", "服务"),
    ],
  }),
  withPseoShell({
    category: "industries",
    slug: "kuajing-ai-tixiao-changjing",
    title: "跨境电商 AI 提效场景｜先做能验收的几件",
    h1: "跨境提效场景：客服、异常单、跟进和交接，各自有边界",
    description:
      "把跨境团队最容易试点的场景列清楚，并链到专页。不做刷单和虚假评价。周报属于智能办公，不单独许诺全自动。OpenClaw 不是入场条件。",
    definition:
      "跨境电商 AI 提效场景是一组低风险、高重复的草稿和提醒。每条场景都要能看出等待时间是否下降。对外承诺保留人工。",
    audience: "想先选一个跨境试点、而不是一次上全部门的运营负责人",
    keywords: ["跨境电商 AI 提效 场景", "跨境 提效", "跨境 客服", "跨境 周报"],
    bullets: ["一个场景一张验收", "周报用办公页，不新做货代站", "开发信人审", "不借用货代案例的数字"],
    workflows: ["未回复客服", "异常订单早报", "销售逾期提醒", "班次交接", "周报素材"],
    sections: [
      {
        title: "适合先做的场景",
        body: `客服未回复：见 [跨境客服企业助手](/zh/kuajing-kefu-qiye-zhushou)。异常单和卖家总流程：见 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)。销售回访和开发信：见 [跨境销售跟进](/zh/kuajing-xiaoshou-genjin)。亚马逊与独立站分开： [亚马逊](/zh/amazon-maijia-ai)、[独立站](/zh/dulizhan-yunying-ai)。${noCheat}`,
      },
      {
        title: "周报和货代不要塞进同一条",
        body: "周报素材是对内办公，规则在 [跨境智能办公](/zh/kuajing-zhineng-bangong)：助手收集事项，数字由人确认，默认不群发。货代公司的询盘和运价用 [货代 AI 助手](/zh/huodai-ai-zhushou)。卖家只把在途和报价请求收成待办。货代案例里的 90 小时到 15 分钟只属于那家物流公司。",
      },
      {
        title: "怎么排优先级",
        body: "选等待最长、又不涉及自动退款的那条。先只读，再草稿。运行时和腾讯云是否保留，看 [WorkBuddy 适合跨境吗](/zh/workbuddy-shihe-kuajing)。真要做，范围锁在 [企业陪跑](/enterprise)。",
      },
    ],
    faqs: [
      { q: "这些场景能否一起上线？", a: "不要第一周一起上。一条验收通过再加下一条。陪跑合同也只写 1–2 条。" },
      { q: "周报为什么不单独做一页承诺？", a: "它是智能办公里的一个输出。单独许诺全自动周报，容易变成没人看的群消息。" },
      { q: "能否提高转化率？", a: "不承诺转化、排名或 GMV。只验收漏跟进和草稿是否还在手写。" },
      { q: "场景页是否要求私有部署？", a: "不要求。公开话术和内部通知可以留在现有工具。敏感订单数据再看私有部署页。" },
    ],
    related: [
      relatedCard("/zh/kuajing-qiye-tixiao", "跨境企业提效", "怎么量等待，而不是场景清单。", "跨境"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服", "场景之一。", "跨境"),
      relatedCard("/zh/kuajing-xiaoshou-genjin", "跨境销售跟进", "场景之一。", "跨境"),
      relatedCard("/zh/kuajing-zhineng-bangong", "跨境智能办公", "交接和周报。", "跨境"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "物流商专页。", "已有页面"),
      relatedCard("/enterprise", "企业陪跑计划", "从清单里只挑一条实施。", "服务"),
    ],
  }),
];

/** Feishu OpenClaw and WeCom office bot. */
export const batch3PlatformPages: GeoPage[] = [
  withPseoShell({
    category: "integrations",
    slug: "feishu-openclaw-bushu",
    title: "飞书 OpenClaw 部署｜运行时选定之后再装",
    h1: "飞书 OpenClaw 部署：先选定运行时，489 元（以首页为准）只代表连通",
    description:
      "这篇给已经决定用 OpenClaw 接飞书的团队。还没选定的看飞书企业助手。首页飞书连接包只做安装与连通，不含晨报流程。",
    definition:
      "飞书 OpenClaw 部署是把 OpenClaw 接到飞书的消息、文档或日历权限上。它不是飞书官方 AI 的别名，也不是 WorkBuddy。",
    audience: "已选定 OpenClaw、主办公在飞书的负责人",
    keywords: ["飞书 OpenClaw 部署", "飞书 OpenClaw", "OpenClaw 飞书", "飞书 企业助手"],
    bullets: ["未选定运行时不要看这篇", "连接包不含工作流", "权限按目录开，不默认全库", "可以自己装或交给白手套"],
    workflows: ["飞书应用权限", "只接日历或只接消息", "草稿位置", "令牌保管", "失败时谁改配置"],
    sections: [
      {
        title: "和飞书企业助手页的差别",
        body: "还在选择要不要 OpenClaw，去 [飞书企业助手](/zh/feishu-qiye-zhushou)。这里假设运行时已定。英文集成说明在 [Feishu](/integrations/feishu)。白手套怎么报价在 [白手套部署](/zh/baishoutao-ai-bushu)。",
      },
      {
        title: "489 元（以首页为准）不要理解错",
        body: "[首页](/)飞书连接包（当前公示 ¥489，以首页为准）只保证安装与连通，页面写明不含工作流整合。晨报、文档摘要和审核队列是另外的范围。没有飞书管理员权限时，不能称为已部署。",
      },
      {
        title: "腾讯栈客户不必走这条",
        body: "公司主场是企微和腾讯云时，用 WorkBuddy 通常更短。不要为了飞书页把少数飞书群升级成全套 OpenClaw。两个机器人不要同时催同一件事。",
      },
    ],
    faqs: [
      { q: "部署后是否读取全部知识库？", a: "不应该。先指定目录。制度过期是常见事故。" },
      { q: "能否自己部署？", a: "可以。OpenClaw 开源。没有人值守故障时再考虑托管。" },
      { q: "和钉钉、企微能同时接吗？", a: "技术上可以逐个接。试点只接飞书。" },
      { q: "这是飞书官方功能吗？", a: "不是。这是客户侧运行时使用飞书权限。官方能力以飞书当时的产品为准。" },
    ],
    related: [
      relatedCard("/zh/feishu-qiye-zhushou", "飞书企业助手", "还没选定 OpenClaw 时从这里开始。", "平台"),
      relatedCard("/integrations/feishu", "Feishu 集成", "英文集成页。", "集成"),
      relatedCard("/zh/baishoutao-ai-bushu", "白手套部署", "谁来装。", "服务"),
      relatedCard("/compare/openclaw-diy-vs-tuoguan", "自己部署 vs 托管", "装完谁值守。", "对比"),
      relatedCard("/zh/zhineng-bangong-ai", "智能办公", "飞书晨报属于对内办公。", "品类"),
      relatedCard("/enterprise", "企业陪跑计划", "连通之后的那条流程。", "服务"),
    ],
  }),
  withPseoShell({
    category: "integrations",
    slug: "qiwei-jiqiren-zhineng-bangong",
    title: "企微机器人智能办公｜入口是机器人，流程才是助手",
    h1: "企微机器人做智能办公：先有待办和审核，再谈自动",
    description:
      "企业微信里的机器人只是入口。智能办公要有固定的晨报、未回复和交接，并且人确认对外内容。腾讯生态可先用 WorkBuddy。货代询盘不在本页。",
    definition:
      "企微机器人智能办公指用企业微信机器人或应用权限，把内部消息收成办公待办。只有会回复的机器人，还不是企业助手。",
    audience: "想在企微里做内部办公助手的行政和运营",
    keywords: ["企微机器人 智能办公", "企业微信 机器人", "企微 智能办公", "企业助手"],
    bullets: ["机器人不等于流程", "对内简报优先于对外回复", "WorkBuddy 在企微上更原生", "货代专页不要混进来"],
    workflows: ["未读要点", "会议提醒", "交接草稿", "谁确认发送", "停用多余机器人"],
    sections: [
      {
        title: "和两篇企微页怎么分",
        body: "还没选运行时： [企业微信企业助手](/zh/qiyeweixin-qiye-zhushou)。已经选定 OpenClaw： [企业微信 OpenClaw](/zh/qiyeweixin-openclaw)。本页只讨论办公，不讨论货代询盘，那一页是 [企业微信货代 AI](/zh/qiyeweixin-huodai-ai)。场景文章在 [企业微信 AI 助手](/blog/wecom-ai-assistant-workflows)。",
      },
      {
        title: "办公机器人的合格线",
        body: "早报指出需要人处理的几件事，而不是把群消息重贴一遍。审批和客户承诺不由机器人发出。没有管理员权限，就只能做员工手工转发，并在合同里写明。",
      },
      {
        title: "何时不要自建机器人",
        body: "公司采购和日常都在腾讯云、企微里，WorkBuddy 就是为这条栈准备的智能办公产品。自建机器人多出来的是权限和故障。只有还要接非腾讯邮箱或自持日志时，才值得另做。定义见 [WorkBuddy 是什么](/zh/workbuddy-shi-shenme)。",
      },
    ],
    faqs: [
      { q: "群机器人能读全部聊天吗？", a: "不能假设。能读到什么以企业微信当时的权限为准。读不到就不要写成已接入。" },
      { q: "能否代回客户？", a: "办公场景默认不代回。对外句子走草稿。" },
      { q: "和智能办公品类页重复吗？", a: "品类页讲邮件和日程。本页只讲这些事落在企微机器人上时的限制。" },
      { q: "必须 OpenClaw 吗？", a: "不必须。企微是通道。运行时后选。" },
    ],
    related: [
      relatedCard("/zh/qiyeweixin-qiye-zhushou", "企业微信企业助手", "通道选型。", "平台"),
      relatedCard("/zh/qiyeweixin-openclaw", "企业微信 OpenClaw", "运行时已定再看。", "平台"),
      relatedCard("/zh/zhineng-bangong-ai", "智能办公 AI 助手", "对内办公的定义。", "品类"),
      relatedCard("/blog/wecom-ai-assistant-workflows", "企微能做什么", "已有文章。", "已有文章"),
      relatedCard("/zh/qiyeweixin-huodai-ai", "企微货代", "物流询盘专页。", "已有页面"),
      relatedCard("/compare/workbuddy-vs-openclaw", "WorkBuddy vs OpenClaw", "原生企微产品对比自建。", "对比"),
      relatedCard("/enterprise", "企业陪跑计划", "连通之后的那条办公流程。", "服务"),
    ],
  }),
];

/** Comparison pages that send people to an inquiry instead of a fake price. */
export const batch3ComparePages: GeoPage[] = [
  withPseoShell({
    category: "compare",
    slug: "buyong-workbuddy-yongshenme",
    title: "不用 WorkBuddy 用什么｜按场景选，不要先换品牌",
    h1: "不用 WorkBuddy 的时候，用什么",
    description:
      "很多团队的答案是继续用 WorkBuddy。真的不用时：问答用现成聊天产品，固定流程用喂龙虾陪跑，要自持运行时再选 OpenClaw。不写 WorkBuddy 价格。",
    definition:
      "不用 WorkBuddy 用什么，取决于你离开它的原因。没有原因就不要换。有数据边界或非腾讯通道时，替代物是实施和可选的私有运行时，不是另一个克隆套件。",
    audience: "搜索替代品、但还没写清不满的负责人",
    keywords: ["不用 WorkBuddy 用什么", "WorkBuddy 替代", "企业助手 选型", "OpenClaw"],
    comparisonUsLabel: "离开之后的路径",
    comparisonTable: [
      { aspect: "只是问答", us: "继续用豆包、DeepSeek、Kimi 或 ChatGPT", them: "也可以留在 WorkBuddy", themLabel: "WorkBuddy" },
      { aspect: "腾讯栈办公", us: "不建议为了换而换", them: "这是它的主场" },
      { aspect: "非腾讯通道或数据边界", us: "喂龙虾陪跑；选定后再部署 OpenClaw", them: "企业版是否够用，看合同" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: ["先写离开的原因", "问答不必部署", "实施不是第二个 SaaS", "可以并行，不必拆掉"],
    workflows: ["原因写得出来吗", "工具在不在腾讯", "数据能不能进 SaaS", "只试点一条"],
    sections: [
      {
        title: "三种答案",
        body: `第一，内部办公已经在腾讯云和企微：继续用 [WorkBuddy](${WORKBUDDY_HOME})。第二，只是偶尔写文案和提问：用你现在的聊天产品，不必找我们。第三，飞书、Gmail、独立站或客户环境要求对不上：看喂龙虾。异议细节在 [为什么不选 WorkBuddy](/compare/weishenme-siyou-not-workbuddy)，产品定义在 [WorkBuddy 是什么](/zh/workbuddy-shi-shenme)。`,
      },
      {
        title: "不要买的「替代」",
        body: "不要买一个界面相似、数据仍在另一家公有云、却被说成私有化的账号。也不要用本站没有写出的价格去论证更便宜。计费对照只说明单位不同，见价格页。",
      },
      {
        title: "若选第三种，下一步很小",
        body: "圈一条流程，预约后说明工具栈。陪跑见 [企业陪跑计划](/enterprise)。已经决定 OpenClaw 的安装问题见 [自己部署 vs 托管](/compare/openclaw-diy-vs-tuoguan)。",
      },
    ],
    faqs: [
      { q: "喂龙虾是 WorkBuddy 的替代品吗？", a: "只有在你要的是实施和客户侧运行时时才是。你要的是腾讯云开箱产品时，我们不是替代，也不该签。" },
      { q: "可以两个一起用吗？", a: "可以。腾讯侧留下仍然合适的办公，缺口另做一条流程。不要两个机器人同时给客户发信。" },
      { q: "不用它就用 ChatGPT 企业版？", a: "聊天和企业知识问答可以。每天从企微和表格收待办，聊天产品仍然要人复制。那是部署问题，不是模型版本问题。已有对比在中文 ChatGPT 页。" },
      { q: "跨境团队呢？", a: "内部交接可留在 WorkBuddy。店铺和供货价看跨境专页，不在这页展开。" },
    ],
    related: [
      relatedCard("/zh/workbuddy-shi-shenme", "WorkBuddy 是什么", "先确认你要离开的是什么。", "说明"),
      relatedCard("/compare/weishenme-siyou-not-workbuddy", "为什么不选它", "哪些异议不成立。", "对比"),
      relatedCard("/compare/qiye-zhushou-xuanxing-workbuddy", "选型清单", "把 WorkBuddy 放进选型而不是口号。", "对比"),
      relatedCard("/zh/qiye-zhushou-zenme-xuan", "企业助手怎么选", "五步，不跳。", "选型"),
      relatedCard("/enterprise", "企业陪跑计划", "第三种答案的实施。", "服务"),
      relatedCard("/compare/workbuddy-tidai", "WorkBuddy 替代", "替换时实际要重做的东西。", "对比"),
    ],
  }),
  withPseoShell({
    category: "compare",
    slug: "qiye-zhushou-xuanxing-workbuddy",
    title: "企业助手选型｜WorkBuddy 放在哪一格",
    h1: "企业助手选型：WorkBuddy、聊天产品、私有运行时各占一格",
    description:
      "选型时把 WorkBuddy 放在腾讯云开箱这一格，不要和模型或 OpenClaw 运行时打成一行。喂龙虾只在实施格出现。价格不在这张表里编造。",
    definition:
      "含 WorkBuddy 的企业助手选型，是先判断工具和数据在不在腾讯云。在，就优先 WorkBuddy。不在，或合同不满足落点，再看客户侧运行时和陪跑。",
    audience: "把 WorkBuddy 放进采购表的信息化和业务负责人",
    keywords: ["企业助手 选型 WorkBuddy", "WorkBuddy 选型", "企业 AI 助手 怎么选", "私有部署"],
    comparisonUsLabel: "客户侧实施（喂龙虾）",
    comparisonTable: [
      { aspect: "这一格解决什么", us: "权限、一条流程、训练、可选的 OpenClaw 部署", them: "腾讯云账号里的智能办公", themLabel: "WorkBuddy" },
      { aspect: "优先条件", us: "混合工具或数据要在客户环境", them: "人和文档已在腾讯云、企微" },
      { aspect: "不该选的时候", us: "只想要聊天，或采购只能走腾讯云标准产品", them: "通道主要在飞书、Gmail，且合同不接受数据位置" },
      { aspect: "和模型的关系", us: "模型可换，审核不能省", them: "模型以腾讯云当时提供的为准" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: ["WorkBuddy 先写进「留在腾讯」那一格", "聊天产品单独一格", "实施是最后一格", "表上不出现本站没核实的标价"],
    workflows: ["填工具栈", "填数据能不能出去", "填谁运维", "只留一个试点"],
    sections: [
      {
        title: "建议的表格长这样",
        body: "列：问答、腾讯云办公、客户侧流程。行：你的十个需求。多数内部通知会落在腾讯云办公，用 WorkBuddy。商品邮件和订单表可能落在第三列。不要把三列加成一个总分。已有五步说明在 [企业助手怎么选](/zh/qiye-zhushou-zenme-xuan)，三层框架在 [选型对标](/zh/qiye-ai-zhushou-duibiao)。",
      },
      {
        title: "WorkBuddy 赢得干净的情况",
        body: "企微是主通道，会议和文档在腾讯云，没有人愿意管 Gateway，采购名录里有腾讯云。这时第三列留空。喂龙虾不应为了成交把这格说成必须私有化。",
      },
      {
        title: "第三列怎么填",
        body: "只填一条，例如跨境未回复或飞书晨报。实施找 [企业陪跑](/enterprise)。若第三列的理由只是「听说 OpenClaw 更灵活」，先读 [不用 WorkBuddy 用什么](/compare/buyong-workbuddy-yongshenme)，理由不成立就删掉这列。",
      },
    ],
    faqs: [
      { q: "能否给 WorkBuddy 打分？", a: "不能给出脱离你的工具栈的分数。条件满足时它就是优先项。" },
      { q: "选型咨询会不会只推 OpenClaw？", a: "不会。未选定运行时，陪跑按约束选。腾讯栈开箱会明确建议留下。" },
      { q: "和价格页的关系？", a: "选型表不放双方标价。要问钱，单独看价格页，并且只比较你自己从腾讯云拿到的报价。" },
      { q: "跨境需求放哪一列？", a: "内部分给 WorkBuddy 列，店铺和供货价先看数据和通道，再决定是否进入第三列。" },
    ],
    related: [
      relatedCard("/zh/qiye-zhushou-zenme-xuan", "企业助手怎么选", "不针对单一产品的五步。", "选型"),
      relatedCard("/compare/buyong-workbuddy-yongshenme", "不用它用什么", "第三列的候选。", "对比"),
      relatedCard("/zh/workbuddy-shi-shenme", "WorkBuddy 是什么", "先定义再打格。", "说明"),
      relatedCard("/zh/qiye-ai-zhushou-duibiao", "选型对标", "已有的三层框架。", "已有页面"),
      relatedCard("/enterprise", "企业陪跑计划", "第三列的交付。", "服务"),
      relatedCard("/compare/workbuddy-jiage-vs-openclaw", "价格对照", "单位不同，不写对方数字。", "对比"),
    ],
  }),
  withPseoShell({
    category: "compare",
    slug: "workbuddy-jiage-vs-openclaw",
    title: "WorkBuddy 价格和私有 OpenClaw 怎么问｜本页不列对方标价",
    h1: "WorkBuddy 和私有 OpenClaw 的价格不能用一个数字比",
    description:
      "本页不写 WorkBuddy 的价格、席位或额度。腾讯云报价以官网和合同为准。喂龙虾只列出自己公布的安装价和陪跑区间，并建议预约时把两边报价放在一起看。",
    definition:
      "价格对照要先统一计费单位。WorkBuddy 按腾讯云自己的账号、席位或用量。OpenClaw 路径在喂龙虾这里是安装套餐或按工作流的陪跑。单位不同，不存在一个公平的单价。",
    audience: "想比较预算、又容易把不同计费单位硬减的负责人",
    keywords: ["WorkBuddy 价格", "OpenClaw 部署 价格", "私有部署 报价", "企业助手 费用"],
    comparisonUsLabel: "喂龙虾公布的价格",
    comparisonTable: [
      { aspect: "本页是否写出", us: "写出自己的安装价和陪跑区间", them: "不写。向腾讯云要当前报价", themLabel: "WorkBuddy" },
      { aspect: "计费单位", us: "一次安装，或陪跑的工作流范围", them: "账号、席位或用量，以合同为准" },
      { aspect: "安装套餐", us: "飞书连接 ¥489，仅连通；个人部署 ¥1,888；云托管 ¥3,800。以首页为准", them: "不要把这些数字当成它的对标价" },
      { aspect: "业务实施", us: "企业陪跑简单场景约 10–30 万、复杂约 30–80 万，以陪跑页为准，见 [企业陪跑计划](/enterprise)；预约后按 1–2 个工作流报价。", them: "企业版是否另计，看腾讯云报价单" },
      { aspect: "不含什么", us: "489 元（以首页为准）不含工作流；安装不含全公司私有化", them: "未写在合同里的私有化不要假设已包含" },
      { aspect: "怎么决策", us: "预约时带上你的工具栈和腾讯云报价", them: "我们不代替腾讯解释账单" },
    ],
    bullets: ["对方价格一律不编", "自己的价格指向首页和企业页", "低价安装不是陪跑", "比完单位再谈便宜"],
    workflows: ["从腾讯云导出当前价", "标出人数和用量假设", "对照是否只需要办公账号", "需要实施时再预约"],
    sections: [
      {
        title: "为什么不写 WorkBuddy 的数字",
        body: `活动价、席位和额度会变，写在第三方页面上会过期，也会被当成承诺。请直接看 [WorkBuddy](${WORKBUDDY_HOME}) 和腾讯云账单。企业版见[文档](${WORKBUDDY_ENTERPRISE_DOC})。喂龙虾不是渠道，不能报出他们的折扣。`,
      },
      {
        title: "我们自己的数字只说明这些订单",
        body: "¥489 是飞书加 Gateway 的安装与连通。¥1,888 是个人电脑上的 OpenClaw 部署。¥3,800 是云托管和最多 3 个工作流、含一段专属支持。这些都假设客户选定 OpenClaw，以首页为准。企业陪跑是另一张订单，把 1–2 个流程做完，区间以陪跑页为准，见 [企业陪跑计划](/enterprise)。没选定 OpenClaw 时，不要用 3800 元（以首页为准）去对比 WorkBuddy。",
      },
      {
        title: "预约时带什么",
        body: "带人数、主通道、数据能不能进腾讯云，以及你已经拿到的腾讯云报价。我们只判断要不要做实施，不把两边合成一个「每月省多少」。选型格见 [企业助手选型](/compare/qiye-zhushou-xuanxing-workbuddy)。",
      },
    ],
    faqs: [
      { q: "WorkBuddy 一个月多少钱？", a: "本页不回答。以腾讯云当前公示和你的合同为准。" },
      { q: "私有 OpenClaw 是否更便宜？", a: "不一定。机器、模型和值守都要钱。安装套餐只覆盖安装。业务项目是陪跑的区间，经常高于一个办公账号。" },
      { q: "报价含税和发票吗？", a: "以预约后的报价单为准。页面区间不是发票金额。" },
      { q: "能否先付 489（以首页为准）再决定要不要陪跑？", a: "可以买 [首页](/)安装包（当前公示 ¥489，以首页为准），但不要期待它自动变成陪跑。范围不同。" },
    ],
    related: [
      relatedCard("/enterprise", "企业陪跑计划", "简单场景约 10–30 万、复杂约 30–80 万，以陪跑页为准。", "服务"),
      relatedCard("/compare/openclaw-diy-vs-tuoguan", "自己部署 vs 托管", "安装费买的是什么。", "对比"),
      relatedCard("/zh/workbuddy-shi-shenme", "WorkBuddy 是什么", "先确认产品，再问腾讯的价格。", "说明"),
      relatedCard("/compare/qiye-zhushou-xuanxing-workbuddy", "选型", "很多团队比价之前就该留在腾讯侧。", "对比"),
      relatedCard("/zh/siyou-ai-zhushou-tuoguan", "私有助手托管", "托管和安装不是同一张单。", "落地"),
      relatedCard("/compare/workbuddy-qiye-vs-siyou", "企业版 vs 私有部署", "贵的往往是控制面，不是对话框。", "对比"),
    ],
  }),
];
