import type { GeoPage } from "@/lib/geo-pages";
import { WORKBUDDY_ENTERPRISE_DOC, WORKBUDDY_HOME, relatedCard, withPseoShell } from "@/lib/pseo/shell";

/** Next batch from docs/pseo-gap-plan.md. City pages are remote; on-site stays Shenzhen-only. */
const UPDATED = "2026-10-08";

const human = "对外发送、报价、退款、改价和付款默认留人工确认。";
const remoteOnly =
  "上门目前只在深圳。这里是远程实施，不能约上门，这个城市也不提供驻场。";

function page(entry: GeoPage): GeoPage {
  return withPseoShell({ ...entry, updatedAt: UPDATED });
}

export const batch4PlatformPages: GeoPage[] = [
  page({
    category: "integrations",
    slug: "youxiang-rili-zhineng-bangong",
    title: "邮箱和日历上的智能办公｜先做晨报和待办，不自动发信",
    h1: "邮箱日历智能办公：把收件箱和日程收成待办，发出去之前要人看",
    description:
      "智能办公接到邮箱和日历时，先做晨报、未回复和会前待办。发出去的信和改过的日程仍由人确认。智能办公指什么，见品类页。",
    definition:
      "邮箱日历智能办公是把收件箱和日程收成当班能看的待办：未回复、即将开始的会、需要人处理的请求。它不是自动代发邮件，也不是把智能办公整页改成邮箱教程。",
    audience: "每天靠邮箱和日历交接的运营、行政和跨境值班的人",
    keywords: ["邮箱日历 智能办公", "邮件晨报", "日历待办", "智能办公 邮箱"],
    bullets: ["先列未回复和今天的会", "草稿停在待发，不自动发出", "改日程要人点", "品类定义仍在智能办公页"],
    workflows: ["晨报：未回复和今日会议", "会前三行背景", "待发草稿队列", "班次交接"],
    sections: [
      {
        title: "和智能办公品类页的分工",
        body: "品类定义在 [智能办公 AI 助手](/zh/zhineng-bangong-ai)：邮件、日程、交接算不算智能办公。邮箱和日历这一条怎么验收，看这里。落地清单在 [智能办公落地](/zh/zhineng-bangong-luodi)。定义、验收和落地清单分三页看。",
      },
      {
        title: "先做哪三件",
        body: `${human} 适合先做的是只读摘要：昨晚到现在没人回的信、今天会和谁、哪封信缺附件。不适合许诺的是无人回复客户、自动接受会议、自动转发含报价的线程。`,
        items: ["未回复清单比全文摘要优先", "会前提醒只写已有日程里的事实", "含报价、退款、付款的信只出草稿"],
      },
      {
        title: "跨境班次不要在这里重做",
        body: "时差和双语交接在 [跨境智能办公](/zh/kuajing-zhineng-bangong)。晨报不写未经确认的 GMV，也不把货代运价塞进去。货代询盘仍用 [货代 AI 助手](/zh/huodai-ai-zhushou)。英文入口是 [Gmail](/integrations/gmail) 和 [Calendar](/integrations/calendar)。",
      },
    ],
    faqs: [
      { q: "会自动发邮件吗？", a: "默认不会。助手把草稿放进待发位置，由当班的人发出。自动群发不在这一页的范围内。" },
      { q: "会改我的日历吗？", a: "默认只读日程并生成待办。新建、改期和取消仍由人在日历里操作。" },
      { q: "必须用 OpenClaw 吗？", a: "不必须。腾讯办公栈里开箱能做的晨报，可以先用 WorkBuddy。只有邮箱和日历不在那条栈上，或数据要留在客户侧时，才谈别的运行时。" },
      { q: "和智能办公页是不是重复？", a: "不是。那页回答「智能办公是什么」。邮箱和日历上先验收哪一条，看这里。" },
    ],
    related: [
      relatedCard("/zh/zhineng-bangong-ai", "智能办公 AI 助手", "先看智能办公指什么，再看邮箱和日历怎么做。", "品类"),
      relatedCard("/zh/zhineng-bangong-luodi", "智能办公落地", "谁用、哪条流程、怎样算做完。", "怎么做"),
      relatedCard("/integrations/gmail", "Gmail", "英文集成页。", "集成"),
      relatedCard("/integrations/calendar", "Calendar", "英文日历集成页。", "集成"),
      relatedCard("/zh/kuajing-zhineng-bangong", "跨境智能办公", "时差和双语交接见跨境智能办公。", "跨境"),
      relatedCard("/enterprise", "企业陪跑计划", "一条晨报可以是约定的那一个流程。", "服务"),
    ],
  }),
  page({
    category: "integrations",
    slug: "slack-qiye-zhushou",
    title: "Slack 企业助手｜出海团队的频道摘要",
    h1: "Slack 上的企业助手：摘要和提醒，对外发送仍要人确认",
    description:
      "出海团队把 Slack 当主通道时，助手做频道摘要、未回复和待办。它不替代聊天室，也不自动对客户发言。",
    definition:
      "Slack 企业助手是接在客户已有 Slack 工作区里的执行流程：汇总频道、标出未回复、起草内部提醒。对外消息默认是草稿。它不是再开一个聊天产品。",
    audience: "用 Slack 和海外同事或客户协作的团队负责人",
    keywords: ["Slack 企业助手 部署", "Slack AI 助手", "出海 Slack", "Slack 待办"],
    bullets: ["摘要优先于自动回复", "对外消息停在草稿", "不把 Slack 说成必须换 OpenClaw", "英文集成页仍在"],
    workflows: ["频道晨报", "未回复提醒", "内部升级草稿", "班次交接"],
    sections: [
      {
        title: "Slack 是通道，不是产品名",
        body: `很多出海团队的主场在 Slack，国内同事仍在企微或飞书。助手只接你点名的那一个频道或那一类线程。${human} 英文集成说明在 [Slack](/integrations/slack)。`,
      },
      {
        title: "不要和企微机器人做成两套嘴",
        body: "同一位客户不要同时被企微助手和 Slack 助手各发一句话。先定主通道。国内主场在 [企业微信企业助手](/zh/qiyeweixin-qiye-zhushou)。Telegram 是另一条入口，见 [Telegram 企业助手](/zh/telegram-qiye-zhushou)。",
      },
      {
        title: "运行时仍可选",
        body: "Slack 能接，不代表必须上 OpenClaw。客户选定 OpenClaw 时，喂龙虾做白手套部署。已经在腾讯云上、主沟通不在 Slack 的团队，不必为了这个词再装一套。选型在 [企业助手怎么选](/zh/qiye-zhushou-zenme-xuan)。",
      },
    ],
    faqs: [
      { q: "会在频道里自动回复客户吗？", a: "默认不会。产出是内部摘要和草稿。对外发送由人确认。" },
      { q: "需要把整个工作区交给模型吗？", a: "不需要。先指定频道和只读范围。扩大权限要另一次确认。" },
      { q: "和英文 Slack 页有什么区别？", a: "英文页是集成入口。出海团队要不要把这一条流程做成企业助手，看这里。" },
      { q: "能保证回复更快吗？", a: "能验收的是未回复被列出来。回复速度仍取决于当班的人。" },
    ],
    related: [
      relatedCard("/integrations/slack", "Slack", "英文集成页。", "集成"),
      relatedCard("/zh/telegram-qiye-zhushou", "Telegram 企业助手", "另一条跨境入口，不要两条同时对外。", "平台"),
      relatedCard("/zh/qiyeweixin-qiye-zhushou", "企业微信企业助手", "国内主通道走这篇。", "平台"),
      relatedCard("/zh/qiye-zhushou", "企业助手", "通道之上的定义。", "品类"),
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "卖家总流程，不在 Slack 页重做。", "跨境"),
      relatedCard("/enterprise", "企业陪跑计划", "一个频道的晨报可以先做。", "服务"),
    ],
  }),
  page({
    category: "integrations",
    slug: "telegram-qiye-zhushou",
    title: "Telegram 企业助手｜跨境沟通里的草稿和提醒",
    h1: "Telegram 可以做入口，不能代替审核",
    description:
      "跨境团队用 Telegram 收客户或代理消息时，助手整理未回复和草稿。它不能代替人工审核，也不能自动承诺时效。",
    definition:
      "Telegram 企业助手是把指定对话收成待办和草稿的流程。入口可以是 Telegram，发出去之前仍要人看。它不是无人客服。",
    audience: "用 Telegram 和海外客户或代理沟通的销售、客服",
    keywords: ["Telegram 企业助手", "Telegram AI 助手", "跨境 Telegram", "Telegram 草稿"],
    bullets: ["先列未回复", "双语草稿要人改口吻", "不自动承诺舱位或时效", "审核规则写在人工审核页"],
    workflows: ["未回复清单", "中英草稿", "升级给当班的人", "代理消息摘要"],
    sections: [
      {
        title: "入口和审核是两件事",
        body: `Telegram 只说明消息从哪进来。${human} 什么叫审核，写在 [人工审核](/zh/rengong-shenhe)。英文集成页是 [Telegram](/integrations/telegram)。`,
      },
      {
        title: "货代和卖家不要混在一个机器人里",
        body: "代理群里的港口和货量，用 [货代 AI 助手](/zh/huodai-ai-zhushou)。卖家的买家消息用 [跨境客服企业助手](/zh/kuajing-kefu-qiye-zhushou)。这里要回答的是：Telegram 能不能当入口。能，但不能跳过审核。",
      },
      {
        title: "和 Slack 的分工",
        body: "内部频道晨报更常在 [Slack 企业助手](/zh/slack-qiye-zhushou)。Telegram 更常是外部或代理对话。两条不要对同一个人各发一版承诺。",
      },
    ],
    faqs: [
      { q: "Telegram 机器人能直接回复客户吗？", a: "默认不能。先出草稿。对外发送、报价和时效承诺由人确认。" },
      { q: "要不要把全部历史聊天交给模型？", a: "不要。先限定对话和时间范围。历史越长，越要人抽查摘要有没有把猜测写成事实。" },
      { q: "和货代专页重复吗？", a: "不重复。货代的询盘和运价有专页。这里只写 Telegram 这条入口的边界。" },
      { q: "必须部署 OpenClaw 吗？", a: "不必须。先把未回复清单跑通。运行时按账号权限和数据落点再定。" },
    ],
    related: [
      relatedCard("/integrations/telegram", "Telegram", "英文集成页。", "集成"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "入口不能代替审核。", "术语"),
      relatedCard("/zh/slack-qiye-zhushou", "Slack 企业助手", "内部频道不要和 Telegram 抢对外发送。", "平台"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "询盘和运价见货代助手。", "货代"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服企业助手", "买家消息的升级规则。", "跨境"),
      relatedCard("/enterprise", "企业陪跑计划", "一条未回复清单可以先做。", "服务"),
    ],
  }),
  page({
    category: "integrations",
    slug: "huodai-feishu-ai",
    title: "飞书上的货代 AI 助手｜询盘和运价",
    h1: "货代团队用飞书时，助手接文档、群和日历",
    description:
      "货代主场在飞书时，助手整理文档、群消息和日历里的询盘与运价待办。企业微信上的货代流程见货代专页。上门目前只在深圳。",
    definition:
      "飞书货代 AI 助手是接在飞书文档、群和日历上的货代工作流：提取询盘字段、提醒运价待确认、生成内部待办。对外报价仍由人确认。企微上的货代流程另有专页。",
    audience: "用飞书管文档和内部群的货代、国际物流团队",
    keywords: ["飞书 货代 AI 助手", "飞书 国际物流", "货代 飞书 文档", "飞书 运价"],
    bullets: ["不重复企微货代页", "文档和群先于自动报价", "对外报价留人", "数字只链到已发布案例，不在城市页重报"],
    workflows: ["飞书群询盘摘要", "运价文档待确认项", "日历跟进", "内部晨报"],
    sections: [
      {
        title: "和企微货代页的分工",
        body: "客户消息主要在企业微信时，用 [企业微信货代 AI](/zh/qiyeweixin-huodai-ai) 和 [货代 AI 助手](/zh/huodai-ai-zhushou)。这里写主场在飞书的团队：多维表、文档、群和日历。两套不要对同一客户各发一版运价。",
      },
      {
        title: "飞书上先做只读和草稿",
        body: `${human} 适合先做的是从授权文档和群里抽出起运港、目的港、货量、缺失字段。不适合许诺的是无人确认舱位。已发布的报价流程在 [货代报价案例](/case/huodai-baojia-speed-to-lead)，那个结果只属于那一个流程，不写成飞书页的成绩。`,
      },
      {
        title: "飞书企业助手和这一页",
        body: "不限行业的飞书办公在 [飞书企业助手](/zh/feishu-qiye-zhushou)。多出来的是货代字段：港口、货量、运价有效期。英文集成页是 [Feishu](/integrations/feishu)。",
      },
    ],
    faqs: [
      { q: "已经有企微货代页，还要看这篇吗？", a: "只有内部协作主场在飞书时才看。主场在企微，继续用企微货代页。" },
      { q: "能自动给客户发运价吗？", a: "不能作为交付。助手整理待确认项和草稿。价格、附加费和舱位由业务确认。" },
      { q: "案例里的时效能写到飞书项目上吗？", a: "不能。案例只说明已经发布的那一个报价流程。新项目用自己的验收，不借用那个数字。" },
      { q: "上门安装飞书吗？", a: "上门只在深圳。飞书连通通常走远程。" },
    ],
    related: [
      relatedCard("/zh/qiyeweixin-huodai-ai", "企业微信货代 AI", "主场在企微时用这篇，不在飞书页重做。", "货代"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "询盘、运价和跟进的总页。", "货代"),
      relatedCard("/zh/feishu-qiye-zhushou", "飞书企业助手", "不限货代的飞书办公。", "平台"),
      relatedCard("/case/huodai-baojia-speed-to-lead", "货代报价案例", "数字只留在案例页。", "案例"),
      relatedCard("/integrations/feishu", "Feishu", "英文集成页。", "集成"),
      relatedCard("/zh/meiri-yunjia-zhengli-ai", "每日运价整理", "运价表本身的流程。", "场景"),
    ],
  }),
  page({
    category: "integrations",
    slug: "amazon-qiyeweixin-kefu",
    title: "亚马逊企微客服｜退款仍由人确认",
    h1: "亚马逊买家消息进企微之后，助手只出草稿",
    description:
      "亚马逊卖家把买家消息同步到企业微信后，助手列出未回复并起草回复。不自动退款，不改平台规则，也不承诺排名。",
    definition:
      "亚马逊企业微信客服是一条草稿流程：买家问题进到卖家已经在用的企微之后，助手提取未回复和缺失信息。退款、补发和时效由人在卖家后台确认。它不操作亚马逊排名或评价。",
    audience: "用企业微信处理亚马逊买家消息的卖家和客服主管",
    keywords: ["亚马逊 企业微信 客服", "亚马逊 客服 草稿", "企微 买家消息", "亚马逊 卖家 助手"],
    bullets: ["只出草稿", "不自动退款", "不碰排名、评价和刷单", "卖家总页仍是亚马逊专页"],
    workflows: ["未回复买家", "物流问题草稿", "退款升级给人", "班次交接"],
    sections: [
      {
        title: "和亚马逊卖家总页的分工",
        body: "卖家先看 [亚马逊卖家 AI 助手](/zh/amazon-maijia-ai)：先处理买家消息和异常单，不承诺排名。这里多写一件事：这些消息如果进了企业微信，草稿怎么停在人确认之前。平台规则和账号安全不在助手里自动执行。",
      },
      {
        title: "哪些句子不能自动发出",
        body: `${human} 另外，补发、退款、评价回复和任何可能违反平台规则的操作，都不进自动发送。跨境客服的升级规则在 [跨境客服企业助手](/zh/kuajing-kefu-qiye-zhushou)。`,
      },
      {
        title: "货代案例不是店铺成绩",
        body: "货代报价案例是物流公司的一个流程，不是亚马逊店铺的成绩。那个时效只属于那家物流公司。企微通道的一般说明在 [企业微信企业助手](/zh/qiyeweixin-qiye-zhushou)。",
      },
    ],
    faqs: [
      { q: "能自动在亚马逊后台退款吗？", a: "不能。助手最多标出需要人处理的退款。操作在卖家后台由有权限的人完成。" },
      { q: "会帮店铺做排名或评价吗？", a: "不会。不写刷单、刷评、伪造物流或规避平台规则的做法。" },
      { q: "和亚马逊卖家页是不是同一篇？", a: "不是。总页写卖家先做哪类消息。这些消息进企微之后的草稿边界，看这里。" },
      { q: "必须上 OpenClaw 吗？", a: "不必须。先把未回复清单和草稿队列跑通。运行时看消息能不能在你授权的环境里读到。" },
    ],
    related: [
      relatedCard("/zh/amazon-maijia-ai", "亚马逊卖家 AI 助手", "卖家先看总页里的排名和账号边界。", "跨境"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服企业助手", "多站点升级规则。", "跨境"),
      relatedCard("/zh/qiyeweixin-qiye-zhushou", "企业微信企业助手", "不限亚马逊的企微草稿。", "平台"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "退款和对外回复的默认边界。", "术语"),
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "卖家总流程。", "跨境"),
      relatedCard("/enterprise", "企业陪跑计划", "一条未回复队列可以先做。", "服务"),
    ],
  }),
  page({
    category: "integrations",
    slug: "dulizhan-youxiang-kefu",
    title: "独立站邮件客服助手｜收件箱分拣和回复草稿",
    h1: "独立站客服走邮箱时，先分拣再起草",
    description:
      "独立站客服若走邮箱，助手先把收件箱分成未回复、物流和退款升级。回复是草稿。运营总页不在这里重做。",
    definition:
      "独立站邮件客服助手是收件箱上的分拣和草稿流程。它不自动退款，不自动改订单。独立站运营的总说明仍在运营专页。",
    audience: "用邮箱处理独立站售前售后的客服和运营",
    keywords: ["独立站 邮件 客服 AI", "独立站 客服 草稿", "邮箱 客服 分拣", "独立站 未回复"],
    bullets: ["先分拣再起草", "退款升级给人", "不重写独立站运营总页", "不自动改价"],
    workflows: ["未回复分拣", "物流问题草稿", "退款升级", "班次交接"],
    sections: [
      {
        title: "和独立站运营页的分工",
        body: "店铺、内容和订单异常的总页是 [独立站运营 AI 助手](/zh/dulizhan-yunying-ai)。这里只写客服走邮箱的那一条：收件箱怎么分成待办。邮箱和日历的对内晨报在 [邮箱日历智能办公](/zh/youxiang-rili-zhineng-bangong)，那是办公，不是对客回复。",
      },
      {
        title: "分拣规则先写死",
        body: `${human} 建议先分三类：只要回复的售前、要查物流的在途、要人决定的退款和改价。第三类不进自动发送。`,
      },
      {
        title: "只处理独立站邮件",
        body: "企微上的一般客服在 [企业客服 AI 助手](/zh/qiyefuwu-ai-zhushou)。亚马逊消息进企微在 [亚马逊企微客服](/zh/amazon-qiyeweixin-kefu)。这里的输入是独立站相关邮件。",
      },
    ],
    faqs: [
      { q: "会自动回复独立站客户吗？", a: "默认不会。先分拣，再把草稿交给客服。" },
      { q: "能改订单价格吗？", a: "不能自动改。改价和退款由有权限的人确认。" },
      { q: "和运营页重复吗？", a: "不重复。运营页写店铺这一侧要做哪些流程。邮箱客服这一条怎么验收，看这里。" },
      { q: "要引用货代案例的时效吗？", a: "不要。那是物流公司一个报价流程的结果，不是独立站客服的成绩。" },
    ],
    related: [
      relatedCard("/zh/dulizhan-yunying-ai", "独立站运营 AI 助手", "先看店铺运营，这里只写邮箱客服。", "跨境"),
      relatedCard("/zh/youxiang-rili-zhineng-bangong", "邮箱日历智能办公", "对内晨报，不是对客回复。", "办公"),
      relatedCard("/zh/qiyefuwu-ai-zhushou", "企业客服 AI 助手", "不限独立站的客服分流。", "客服"),
      relatedCard("/zh/amazon-qiyeweixin-kefu", "亚马逊企微客服", "平台消息进企微，不在邮箱页重做。", "跨境"),
      relatedCard("/integrations/gmail", "Gmail", "英文邮箱集成页。", "集成"),
      relatedCard("/enterprise", "企业陪跑计划", "一个收件箱可以先做。", "服务"),
    ],
  }),
];

export const batch4LocationPages: GeoPage[] = [
  page({
    category: "solutions",
    slug: "kuajing-yuancheng-ai-bushu",
    title: "跨境团队远程 AI 部署｜时差和双语交接，不上门",
    h1: "跨境团队的远程部署：全国可做，上门仍然只有深圳",
    description:
      "跨境团队的远程部署处理时差和双语交接，不上门。全国远程安装见远程部署页。上门目前只在深圳。",
    definition:
      "跨境团队远程 AI 部署指人不到现场，把一条跨境交接做成远程可验收的流程：谁在哪个时区值班、双语草稿停在哪、什么必须升级。它不是全国安装说明书，上门仍只在深圳。",
    audience: "人和同事不在同一个时区的跨境负责人",
    keywords: ["跨境团队 远程 AI 部署", "跨境 远程 部署", "时差 双语 交接", "跨境 不上门"],
    bullets: ["只写时差和双语交接", "不上门", "不重写全国远程安装", "不报 GMV"],
    workflows: ["标出两个时区的班次", "双语草稿队列", "升级给人的规则", "次日交接三行"],
    sections: [
      {
        title: "和全国远程页分开",
        body: `全国能不能远程安装，写在 [远程部署企业助手](/zh/yuancheng-qiye-zhushou)。安装步骤见全国远程部署页。${remoteOnly} 跨境办公的总页是 [跨境智能办公](/zh/kuajing-zhineng-bangong)。`,
      },
      {
        title: "远程验收看交接，不看人到没到",
        body: "验收是：下一班能看到上一班留下的未回复和不能代承诺的句子。人在广州、上海或其他城市，都不把这件事写成出差上门。深圳需要进场的，走 [深圳企业助手部署](/zh/shenzhen-qiye-zhushou-bushu)。",
      },
      {
        title: "不把货代或店铺成绩写进来",
        body: "货代案例的时效只属于那家物流公司，这里也不写 GMV。货代流程用 [货代 AI 助手](/zh/huodai-ai-zhushou)。卖家总流程用 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)。",
      },
    ],
    faqs: [
      { q: "跨境远程包含上门吗？", a: "不包含。上门只在深圳。跨境这一页明确不上门。" },
      { q: "和远程部署企业助手是同一篇吗？", a: "不是。那篇是全国安装和陪跑远程的主路径。时差和双语交接看这里。" },
      { q: "能承诺营收吗？", a: "不能。能验收的是交接有没有漏。营收由商品、广告和供应链决定。" },
      { q: "海外同事可以一起远程吗？", a: "可以，只要账号权限能在远程共享，并且班次写清楚。这仍然不是上门。" },
    ],
    related: [
      relatedCard("/zh/yuancheng-qiye-zhushou", "远程部署企业助手", "全国远程安装看这一页。", "服务"),
      relatedCard("/zh/kuajing-zhineng-bangong", "跨境智能办公", "时差和双语的品类页。", "跨境"),
      relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门部署", "只有深圳进场才走这篇。", "服务"),
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "卖家总流程。", "跨境"),
      relatedCard("/zh/guangzhou-kuajing-ai", "广州跨境", "城市页也是远程，不是上门。", "城市"),
      relatedCard("/enterprise", "企业陪跑计划", "远程范围以陪跑页为准。", "服务"),
    ],
  }),
  page({
    category: "solutions",
    slug: "guangzhou-kuajing-ai",
    title: "广州跨境电商 AI 助手｜远程实施，不做出差上门",
    h1: "广州跨境团队的企业助手：远程把一条客服或跟进流程做完",
    description: "人可以在广州。实施走远程，把一条客服或跟进做完。不做出差上门，上门仍只在深圳。",
    definition: "广州跨境电商 AI 助手指给在广州的跨境团队远程落地一条客服或跟进流程。它不是广州上门服务。",
    audience: "人在广州的跨境卖家和运营负责人",
    keywords: ["广州 跨境电商 AI 助手", "广州 跨境 远程", "广州 企业助手", "广州 不上门"],
    bullets: ["远程，不做出差上门", "只做一条客服或跟进", "上门仍只在深圳", "不报 GMV"],
    workflows: ["确认人在广州但实施远程", "选定客服或跟进其中一条", "草稿和升级规则", "下一班能接上"],
    sections: [
      {
        title: "广州不提供上门",
        body: `${remoteOnly} 需要工程师进场的，人得到深圳，看 [深圳企业助手部署](/zh/shenzhen-qiye-zhushou-bushu)。时差和双语交接的总说明在 [跨境团队远程部署](/zh/kuajing-yuancheng-ai-bushu)。`,
      },
      {
        title: "广州这一条先做哪件",
        body: "先在客服未回复和销售跟进里选一条，不要两件一起开工。客服升级看 [跨境客服企业助手](/zh/kuajing-kefu-qiye-zhushou)。跟进看 [跨境销售跟进](/zh/kuajing-xiaoshou-genjin)。卖家总页是 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)。",
      },
      {
        title: "不写城市成绩",
        body: "这里没有广州客户的案例数字，也不借用货代案例的时效。能说的只有范围：远程、一条流程、人确认对外句子。",
      },
    ],
    faqs: [
      { q: "可以到广州办公室做吗？", a: "上门只在深圳。广州实施走远程。" },
      { q: "能同时做客服和跟进吗？", a: "不要在同一次约定里做两件。先验收一条。" },
      { q: "和深圳上门有什么差别？", a: "深圳那页可以进场。广州这一页明确远程。" },
      { q: "会承诺店铺增长吗？", a: "不会。验收是那一条流程有没有人在用。" },
    ],
    related: [
      relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门部署", "进场只在深圳。", "服务"),
      relatedCard("/zh/kuajing-yuancheng-ai-bushu", "跨境远程部署", "时差和双语，不是城市上门。", "跨境"),
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "卖家总流程。", "跨境"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服", "若选的那一条是客服。", "跨境"),
      relatedCard("/zh/yiwu-kuajing-ai", "义乌跨境", "另一个城市，同样远程。", "城市"),
      relatedCard("/enterprise", "企业陪跑计划", "远程范围以陪跑页为准。", "服务"),
    ],
  }),
  page({
    category: "solutions",
    slug: "shanghai-zhineng-bangong",
    title: "上海智能办公 AI 部署｜远程，不是上门",
    h1: "上海团队的智能办公部署：人可以在上海，实施走远程",
    description: "人可以在上海。智能办公走远程：先做一条对内流程，发出去的内容由人确认。上门服务目前只在深圳。",
    definition: "上海智能办公 AI 部署指给在上海的团队远程落地一条内部办公流程，例如晨报或交接。它不是上海上门服务。",
    audience: "人在上海、想把邮件或交接做成一条流程的负责人",
    keywords: ["上海 智能办公 AI 部署", "上海 远程 部署", "上海 企业助手", "上海 不上门"],
    bullets: ["人可以在上海", "实施走远程", "不是上门", "不把货代流程塞进来"],
    workflows: ["确认远程而不是进场", "选定晨报或交接", "草稿留人", "当班试用"],
    sections: [
      {
        title: "上海不是上门城市",
        body: `${remoteOnly} 品类在 [智能办公 AI 助手](/zh/zhineng-bangong-ai)。怎样算做完在 [智能办公落地](/zh/zhineng-bangong-luodi)。`,
      },
      {
        title: "上海先做对内的一条",
        body: "先做晨报、未回复或会议交接。邮箱和日历的细节在 [邮箱日历智能办公](/zh/youxiang-rili-zhineng-bangong)。这不是跨境卖家页，也不是货代页。",
      },
      {
        title: "和深圳的差别只在人到不到现场",
        body: "流程本身可以一样短：一条、可验收、对外句子留人。差别是上海不进场。进场看 [深圳企业助手部署](/zh/shenzhen-qiye-zhushou-bushu)。全国安装看 [远程部署企业助手](/zh/yuancheng-qiye-zhushou)。",
      },
    ],
    faqs: [
      { q: "能到上海上门吗？", a: "不能。上门只在深圳。上海这一页是远程。" },
      { q: "是跨境页吗？", a: "不是。这是智能办公。跨境时差看跨境远程部署和跨境智能办公。" },
      { q: "会自动发邮件吗？", a: "默认不会。晨报和草稿留给当班的人。" },
      { q: "有上海客户的数字吗？", a: "没有核实过的城市成绩不会写进来。" },
    ],
    related: [
      relatedCard("/zh/zhineng-bangong-ai", "智能办公 AI 助手", "品类定义。", "品类"),
      relatedCard("/zh/zhineng-bangong-luodi", "智能办公落地", "验收清单。", "怎么做"),
      relatedCard("/zh/youxiang-rili-zhineng-bangong", "邮箱日历智能办公", "若那一条是收件箱和日程。", "平台"),
      relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门", "进场只在深圳。", "服务"),
      relatedCard("/zh/yuancheng-qiye-zhushou", "远程部署企业助手", "全国安装主路径。", "服务"),
      relatedCard("/enterprise", "企业陪跑计划", "远程一条流程。", "服务"),
    ],
  }),
  page({
    category: "solutions",
    slug: "ningbo-huodai-ai",
    title: "宁波货代 AI 助手｜远程实施，不上门",
    h1: "宁波货代团队的助手：远程做询盘或运价里的一条",
    description: "宁波货代可以远程做询盘或运价里的一条。不上门。已发布案例的数字只属于那一家公司，不写成宁波的成绩。",
    definition: "宁波货代 AI 助手指给在宁波的货代团队远程落地一条询盘整理或运价待办。它不是宁波上门，也不等于全国货代都有同一组成绩。",
    audience: "人在宁波的货代销售或运价负责人",
    keywords: ["宁波 货代 AI 助手", "宁波 货代 远程", "宁波 国际物流 AI", "宁波 不上门"],
    bullets: ["远程做一条", "不上门", "询盘或运价二选一", "不搬运案例数字"],
    workflows: ["选定询盘或运价", "缺失字段清单", "草稿留人", "次日能复核"],
    sections: [
      {
        title: "宁波不约上门",
        body: `${remoteOnly} 货代总页是 [货代 AI 助手](/zh/huodai-ai-zhushou)。企微上的货代在 [企业微信货代 AI](/zh/qiyeweixin-huodai-ai)。飞书上的在 [飞书货代](/zh/huodai-feishu-ai)。`,
      },
      {
        title: "只做询盘或运价里的一条",
        body: "同一次远程约定不要既做询盘分拣又做每日运价。运价表见 [每日运价整理](/zh/meiri-yunjia-zhengli-ai)。已发布案例在 [货代报价案例](/case/huodai-baojia-speed-to-lead)，那个时效只留在案例页。",
      },
      {
        title: "港口城市不是上门城市",
        body: "青岛也是远程，见 [青岛货代](/zh/qingdao-huodai-ai)。两座城市都不能约上门。",
      },
    ],
    faqs: [
      { q: "能到宁波港附近上门吗？", a: "不能。上门只在深圳。" },
      { q: "能把案例的时效写成宁波项目吗？", a: "不能。案例只说明已经发布的那一个流程。" },
      { q: "询盘和运价能一起做吗？", a: "不要在同一次约定里一起做。先验收一条。" },
      { q: "和货代总页重复吗？", a: "总页写货代场景。宁波的实施是远程，不上门。" },
    ],
    related: [
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "询盘和运价的总页。", "货代"),
      relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门", "进场只在深圳。", "服务"),
      relatedCard("/zh/qingdao-huodai-ai", "青岛货代", "另一座港口城市，同样远程。", "城市"),
      relatedCard("/case/huodai-baojia-speed-to-lead", "货代报价案例", "数字只留在案例页。", "案例"),
      relatedCard("/zh/qiyeweixin-huodai-ai", "企业微信货代", "主场在企微时看这篇。", "货代"),
      relatedCard("/zh/yuancheng-qiye-zhushou", "远程部署", "全国安装主路径。", "服务"),
    ],
  }),
  page({
    category: "solutions",
    slug: "qingdao-huodai-ai",
    title: "青岛货代 AI 助手｜港口城市走远程，上门仍只在深圳",
    h1: "青岛货代可以用远程助手整理询盘，不能约上门",
    description: "青岛货代可以远程整理询盘。不能约上门。上门仍只在深圳。不把已发布案例的数字写成青岛的成绩。",
    definition: "青岛货代 AI 助手指给在青岛的货代团队远程整理询盘或跟进草稿。港口城市不因此变成上门城市。",
    audience: "人在青岛的货代团队负责人",
    keywords: ["青岛 货代 AI 助手", "青岛 货代 远程", "青岛 不上门", "青岛 国际物流"],
    bullets: ["远程整理询盘", "不能约上门", "上门仍只在深圳", "案例数字不属于青岛"],
    workflows: ["询盘缺失字段", "未回复提醒", "报价草稿留人", "内部晨报"],
    sections: [
      {
        title: "青岛不能约上门",
        body: `${remoteOnly} 上门目前只在深圳。深圳进场只在 [深圳企业助手部署](/zh/shenzhen-qiye-zhushou-bushu)。`,
      },
      {
        title: "询盘仍用货代总页的边界",
        body: "字段、人工报价和不能无人承诺舱位，都以 [货代 AI 助手](/zh/huodai-ai-zhushou) 为准。港口、货量和人工报价以货代助手页为准。宁波的远程页是 [宁波货代](/zh/ningbo-huodai-ai)。",
      },
      {
        title: "案例数字留在案例页",
        body: "若需要已发布的报价流程说明，打开 [货代报价案例](/case/huodai-baojia-speed-to-lead)。那个时效只属于那一家物流公司，不能当成青岛项目的成绩。",
      },
    ],
    faqs: [
      { q: "青岛可以上门吗？", a: "不可以。上门只在深圳。" },
      { q: "能无人报价吗？", a: "不能。助手整理询盘和草稿。价格和舱位由人确认。" },
      { q: "和宁波页有什么差别？", a: "都是远程、都不上门。宁波那页在询盘和运价里二选一；青岛这一页先写询盘整理。" },
      { q: "有青岛客户名单吗？", a: "这里不公布客户名，也没有未发布的评价。" },
    ],
    related: [
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "能力边界以总页为准。", "货代"),
      relatedCard("/zh/ningbo-huodai-ai", "宁波货代", "另一座港口城市，同样远程。", "城市"),
      relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门", "唯一的上门页。", "服务"),
      relatedCard("/case/huodai-baojia-speed-to-lead", "货代报价案例", "数字不搬到青岛。", "案例"),
      relatedCard("/zh/meiri-yunjia-zhengli-ai", "每日运价整理", "若下一步才是运价表。", "场景"),
      relatedCard("/enterprise", "企业陪跑计划", "远程一条询盘流程。", "服务"),
    ],
  }),
  page({
    category: "solutions",
    slug: "yiwu-kuajing-ai",
    title: "义乌跨境电商 AI 助手｜远程实施",
    h1: "义乌跨境团队先做一条客服或跟进，实施走远程",
    description: "义乌跨境团队可以远程把一条客服或跟进做完。发出去的回复由人确认。上门目前只在深圳，义乌不提供上门。",
    definition: "义乌跨境电商 AI 助手指给在义乌的跨境团队远程落地一条客服或跟进。它不是义乌上门，也不是小商品市场的驻场服务。",
    audience: "人在义乌的跨境卖家负责人",
    keywords: ["义乌 跨境电商 AI 助手", "义乌 跨境 远程", "义乌 不上门", "义乌 企业助手"],
    bullets: ["远程实施", "义乌不上门、不驻场", "客服或跟进只做一条", "没有未发布的市场成交数字"],
    workflows: ["选定客服或跟进", "未回复或开发信草稿", "升级给人", "次日复核"],
    sections: [
      {
        title: "义乌没有上门档期",
        body: `${remoteOnly} 义乌不能约驻场，也不能上门。进场只看 [深圳企业助手部署](/zh/shenzhen-qiye-zhushou-bushu)。`,
      },
      {
        title: "先做一条，不写市场大盘",
        body: "客服看 [跨境客服企业助手](/zh/kuajing-kefu-qiye-zhushou)，跟进看 [跨境销售跟进](/zh/kuajing-xiaoshou-genjin)。这里不写义乌市场的成交额，也没有客户评价。",
      },
      {
        title: "和广州、杭州的差别",
        body: "三座城市都是远程。[广州](/zh/guangzhou-kuajing-ai) 和 [杭州](/zh/hangzhou-kuajing-ai) 同样不上门。义乌也不能约市场驻场。",
      },
    ],
    faqs: [
      { q: "能在义乌市场驻场吗？", a: "不能。义乌不做驻场，也不上门。实施走远程。" },
      { q: "有义乌卖家的成绩吗？", a: "未发布的客户名、评价和成交数字不会写在这里。" },
      { q: "客服和跟进能一起上吗？", a: "不要。先做一条。" },
      { q: "和跨境总页重复吗？", a: "总页写卖家流程。义乌的实施是远程，不上门。" },
    ],
    related: [
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "卖家总流程。", "跨境"),
      relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门", "上门不在义乌。", "服务"),
      relatedCard("/zh/guangzhou-kuajing-ai", "广州跨境", "同样远程。", "城市"),
      relatedCard("/zh/hangzhou-kuajing-ai", "杭州跨境", "同样远程。", "城市"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服", "若选的那一条是客服。", "跨境"),
      relatedCard("/zh/kuajing-yuancheng-ai-bushu", "跨境远程部署", "时差和双语的总说明。", "跨境"),
    ],
  }),
  page({
    category: "solutions",
    slug: "hangzhou-kuajing-ai",
    title: "杭州跨境电商 AI 助手｜远程部署",
    h1: "杭州跨境团队的企业助手，远程落地一条流程",
    description: "杭州跨境团队可以远程把一条客服、跟进或交接做完。对外发送由人确认。上门服务目前只在深圳。",
    definition: "杭州跨境电商 AI 助手指给在杭州的跨境团队远程做完一条已说清的流程。它不是杭州上门部署。",
    audience: "人在杭州的跨境电商负责人",
    keywords: ["杭州 跨境电商 AI 助手", "杭州 跨境 远程", "杭州 企业助手 远程", "杭州 不上门"],
    bullets: ["远程部署", "一条流程", "不是上门", "不写未核实的城市成绩"],
    workflows: ["选定一条流程", "远程把草稿和升级写清", "当班试用", "不扩大到全店"],
    sections: [
      {
        title: "杭州走远程",
        body: `${remoteOnly} 全国安装仍看 [远程部署企业助手](/zh/yuancheng-qiye-zhushou)。跨境时差看 [跨境团队远程部署](/zh/kuajing-yuancheng-ai-bushu)。`,
      },
      {
        title: "一条流程指什么",
        body: "可以是未回复的客服草稿，或一条跟进，或一封独立站邮件的分拣。对应页面是 [跨境客服](/zh/kuajing-kefu-qiye-zhushou)、[跨境销售跟进](/zh/kuajing-xiaoshou-genjin) 或 [独立站邮件客服](/zh/dulizhan-youxiang-kefu)。杭州先做其中一条。",
      },
      {
        title: "没有杭州专属数字",
        body: "这里不写未发布的成交、人效或客户评价。货代案例的时效也不引用到杭州卖家身上。",
      },
    ],
    faqs: [
      { q: "杭州能上门吗？", a: "不能。上门只在深圳。杭州是远程部署。" },
      { q: "可以一次做完整店吗？", a: "不能作为这一页的承诺。先做一条流程。" },
      { q: "和义乌页有何不同？", a: "都是远程跨境。义乌额外说明不能市场驻场。杭州只约定远程落地一条流程。" },
      { q: "OpenClaw 是必须的吗？", a: "不是。客户选定之后才部署。腾讯栈里已经够用的，不必为了城市页改运行时。" },
    ],
    related: [
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "卖家总流程。", "跨境"),
      relatedCard("/zh/yiwu-kuajing-ai", "义乌跨境", "同样不上门。", "城市"),
      relatedCard("/zh/kuajing-yuancheng-ai-bushu", "跨境远程部署", "时差和双语。", "跨境"),
      relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门", "唯一上门页。", "服务"),
      relatedCard("/zh/dulizhan-youxiang-kefu", "独立站邮件客服", "若那一条是邮箱。", "平台"),
      relatedCard("/enterprise", "企业陪跑计划", "远程一条流程的范围。", "服务"),
    ],
  }),
];

export const batch4HowtoPages: GeoPage[] = [
  page({
    category: "use-cases",
    slug: "kuajing-zhoubao-zidonghua",
    title: "跨境电商周报自动化｜素材进草稿，数字由人确认",
    h1: "跨境周报怎么交给助手：汇总素材，不替你报 GMV",
    description: "跨境周报自动化只把素材收成草稿。GMV、广告和库存数字由人确认后才能写进对内周报。",
    definition: "跨境电商周报自动化是把一周的未回复、异常单和交接收成草稿。它不自动生成营收结论。数字由人确认。",
    audience: "要写跨境周报、又不想让助手编造成绩的运营负责人",
    keywords: ["跨境电商 周报自动化", "跨境 周报 草稿", "周报 不报 GMV", "跨境 交接 素材"],
    bullets: ["素材进草稿", "数字由人确认", "不报 GMV", "不替代跨境办公总页"],
    workflows: ["收集未回复和异常", "标出缺数字的空位", "人填确认过的数", "周报草稿留档"],
    sections: [
      {
        title: "和跨境智能办公分开",
        body: "办公总页是 [跨境智能办公](/zh/kuajing-zhineng-bangong)：时差和双语交接。这里只写周报这一件。不要两页都变成功能清单。",
      },
      {
        title: "助手可以收什么，不可以写什么",
        body: "可以收：未回复条数、升级给了谁、哪条流程还没有人看。不可以替你写 GMV、广告回报或「本周增长」。这些数若要出现，由人从自己的后台抄进草稿并确认。",
      },
      {
        title: "不借用别的行业的时效",
        body: "货代案例的报价时效不是跨境周报的素材。卖家总流程在 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)。",
      },
    ],
    faqs: [
      { q: "周报会自动带上销售额吗？", a: "不会。销售额由人确认后自己写入。助手只留出空位。" },
      { q: "能对全员自动发送周报吗？", a: "默认不自动群发。草稿交给写周报的人。" },
      { q: "和智能办公落地页重复吗？", a: "落地页是验收清单，不限跨境。跨境周报不写未经确认的 GMV。" },
      { q: "没有数据时助手可以估算吗？", a: "不要。缺数就标成缺数，不估算营收。" },
    ],
    related: [
      relatedCard("/zh/kuajing-zhineng-bangong", "跨境智能办公", "先看跨境办公，这里只写周报。", "跨境"),
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "卖家总流程。", "跨境"),
      relatedCard("/zh/zhineng-bangong-luodi", "智能办公落地", "怎样算一条流程做完。", "怎么做"),
      relatedCard("/zh/kuajing-ai-tixiao-changjing", "跨境提效场景", "场景目录，不是周报模板。", "跨境"),
      relatedCard("/enterprise", "企业陪跑计划", "一条周报草稿可以先做。", "服务"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "数字确认也是人的动作。", "术语"),
    ],
  }),
  page({
    category: "solutions",
    slug: "zhineng-bangong-luodi",
    title: "智能办公落地｜先验收一条流程",
    h1: "智能办公落地：先写清谁用、哪条流程、怎样算做完",
    description: "智能办公落地是一张验收清单：谁用、哪条流程、怎样算做完。品类说明见智能办公页，这里只写验收。",
    definition: "智能办公 AI 落地指南是实施前的验收说明。品类定义在智能办公页。落地前先把三件事写在纸上：使用的人、这一条流程、做完的判断。",
    audience: "准备把智能办公从口号做成一条流程的负责人",
    keywords: ["智能办公 AI 落地指南", "智能办公 验收", "智能办公 谁用", "办公 流程 做完"],
    bullets: ["先写谁用", "只定一条流程", "写清怎样算做完", "不从采购口号开始"],
    workflows: ["点名使用的班次", "写下输入和输出", "约定做完的样子", "三天内由当班的人试用"],
    sections: [
      {
        title: "品类页已经解释过是什么",
        body: "定义在 [智能办公 AI 助手](/zh/zhineng-bangong-ai)。邮件、日程和交接的定义见智能办公页。邮箱和日历的具体边界在 [邮箱日历智能办公](/zh/youxiang-rili-zhineng-bangong)。",
      },
      {
        title: "怎样算做完",
        body: "做完不是买了账号，也不是演示能生成一篇文章。做完是：点名的那个人第二天用这条流程交出草稿或待办，并且知道哪些句子不能自动发出。对外发送的规则见 [人工审核](/zh/rengong-shenhe)。",
        items: ["谁用：一个班次或一个岗位，不是全公司", "哪条流程：晨报、交接或未回复，三选一", "做完：当班的人留下使用记录，而不是老板看过演示"],
      },
      {
        title: "腾讯栈和私有路径都用这张清单",
        body: "继续用 WorkBuddy，或客户选定 OpenClaw，验收问题相同。选型在 [企业助手怎么选](/zh/qiye-zhushou-zenme-xuan)。WorkBuddy 和 OpenClaw 的价格不要放在同一张表里硬比。",
      },
    ],
    faqs: [
      { q: "落地是不是要先采购？", a: "不是。先写清谁用和怎样算做完。采购对象取决于工具栈，不从口号开始。" },
      { q: "全员培训算落地吗？", a: "不算这一页说的做完。做完是一条流程被当班的人用过。" },
      { q: "和智能办公页有何不同？", a: "那页定义品类。这里是验收清单。" },
      { q: "跨境周报算这条吗？", a: "周报是其中一种流程，细节在跨境周报页，并且不由助手填营收。" },
    ],
    related: [
      relatedCard("/zh/zhineng-bangong-ai", "智能办公 AI 助手", "先看智能办公指什么。", "品类"),
      relatedCard("/zh/youxiang-rili-zhineng-bangong", "邮箱日历智能办公", "若那一条是收件箱和日程。", "平台"),
      relatedCard("/zh/kuajing-zhoubao-zidonghua", "跨境周报", "若那一条是周报，且不报 GMV。", "跨境"),
      relatedCard("/zh/qiye-zhushou-zenme-xuan", "企业助手怎么选", "验收之前的选型。", "选型"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "做完仍包括人确认。", "术语"),
      relatedCard("/enterprise", "企业陪跑计划", "约定的就是这一条。", "服务"),
    ],
  }),
  page({
    category: "solutions",
    slug: "openclaw-skill-workbuddy",
    title: "OpenClaw Skill 和 WorkBuddy｜公开说法与运行时差别",
    h1: "Skill 能对上，不代表托管和数据边界相同",
    description:
      "公开材料提到 WorkBuddy 与 OpenClaw Skills 的兼容。技能能对上，不说明托管、Gateway 和数据边界相同。兼容范围和价格以腾讯云文档与合同为准。",
    definition:
      "OpenClaw Skill 与 WorkBuddy 的公开说法只覆盖技能层可能复用。它不证明企微消息已经跑在客户自己的 Gateway 上，也不证明两边的托管和合同边界相同。",
    audience: "看到 Skills 兼容说法、准备据此选型的负责人",
    keywords: ["OpenClaw Skill 与 WorkBuddy 兼容", "WorkBuddy Skills", "OpenClaw Skill", "技能层 不是 控制面"],
    bullets: ["只复述公开说法", "不编兼容表", "不写 WorkBuddy 价格", "技能层不等于控制面"],
    workflows: ["核对腾讯云当时文档", "分开技能和控制面", "不把兼容写成必须迁移", "数据落点另问"],
    sections: [
      {
        title: "已经公开的说法",
        body: `站内已有说明：公开材料提到 [WorkBuddy](${WORKBUDDY_HOME}) 与 OpenClaw Skills 的兼容。企业向材料见[腾讯云文档](${WORKBUDDY_ENTERPRISE_DOC})。那说明技能层可能复用，不说明企微消息已经跑在你自己的 Gateway 上。兼容范围以腾讯云当时文档为准。功能对照以腾讯云当时文档为准，WorkBuddy 的标价以官网和合同为准。`,
      },
      {
        title: "技能和控制面",
        body: "技能能对上，只表示某类能力也许可以复用。谁管 Gateway、密钥、模型和日志，是另一问，展开在 [WorkBuddy 企业版 vs 私有部署](/compare/workbuddy-qiye-vs-siyou)。Gateway 这个词的站内定义在 [OpenClaw Gateway](/zh/openclaw-gateway)。",
      },
      {
        title: "不要据此强制迁移",
        body: "你要的如果是腾讯托管的企微助手，就用 WorkBuddy，不必再装一套 OpenClaw。只有控制面要在客户授权环境里，才看私有路径。运行时对比在 [WorkBuddy vs OpenClaw](/compare/workbuddy-vs-openclaw)。",
      },
    ],
    faqs: [
      { q: "是不是所有 Skill 都通用？", a: "不能从本站推出这张表。兼容清单以腾讯云当时文档为准。" },
      { q: "兼容是否等于数据在自己机房？", a: "不等于。技能层和 Gateway、数据落点是两件事。" },
      { q: "WorkBuddy 多少钱？", a: "腾讯云按自己的计费，以官网和合同为准。" },
      { q: "看到兼容就要换 OpenClaw 吗？", a: "不要。主场在腾讯云且没有控制面要求时，继续用 WorkBuddy。" },
    ],
    related: [
      relatedCard("/compare/workbuddy-vs-openclaw", "WorkBuddy vs OpenClaw", "产品和运行时，不是同一采购对象。", "对比"),
      relatedCard("/compare/workbuddy-qiye-vs-siyou", "企业版 vs 私有部署", "控制面四问。", "对比"),
      relatedCard("/zh/openclaw-gateway", "OpenClaw Gateway", "控制面这个词指什么。", "术语"),
      relatedCard("/zh/workbuddy-shi-shenme", "WorkBuddy 是什么", "先看 WorkBuddy 是什么。", "说明"),
      relatedCard("/zh/qiyeweixin-openclaw", "企业微信 OpenClaw", "已经选定运行时之后的商业页。", "平台"),
      relatedCard("/enterprise", "企业陪跑计划", "要落地的是一条流程，不是一张兼容表。", "服务"),
    ],
  }),
  page({
    category: "solutions",
    slug: "rengong-shenhe",
    title: "人工审核是什么｜对外发送、报价和付款的默认边界",
    h1: "人工审核：助手出草稿，人决定能不能发出去",
    description: "人工审核指助手可以出草稿和提醒，对外发送、报价、退款、改价和付款由人决定。这是喂龙虾交付时的默认边界。",
    definition: "人工审核是高风险动作前的确认：对外发送、报价、退款、改价和付款默认不由助手直接执行。人决定能不能发出去。",
    audience: "需要向同事解释为什么助手不能直接发消息的负责人",
    keywords: ["AI 助手 人工审核", "人工审核", "草稿 人确认", "对外发送 边界"],
    bullets: ["助手出草稿", "人决定发送", "报价和付款默认留人", "不是事后补一句免责声明"],
    workflows: ["标出高风险动作", "草稿进入待确认", "点名确认的人", "留下这次是否发出"],
    sections: [
      {
        title: "审核不是免责声明",
        body: `${human} 这句话若只写在页脚、流程里却直接发送，就不算有人工审核。审核是一个有名字的人在发出前看过。`,
      },
      {
        title: "哪些动作算高风险",
        body: "对客户或代理发出的句子、报价、舱位和时效、退款、改价、付款。内部晨报可以风险更低，但含有未确认数字时仍然要人看。跨境周报因此不由助手填写 GMV，见 [跨境周报](/zh/kuajing-zhoubao-zidonghua)。",
      },
      {
        title: "和运行时无关",
        body: "用 WorkBuddy、OpenClaw 或其他框架，这条边界都在。选型不能用来取消审核。控制面问题另见 [OpenClaw Gateway](/zh/openclaw-gateway)。",
      },
    ],
    faqs: [
      { q: "内部摘要也要审核吗？", a: "低风险的内部待办可以先给当班的人直接看。一旦要对外发送或写入报价、付款，就回到人确认。" },
      { q: "审核会不会让助手没价值？", a: "不会。价值是少做整理。发出去的决定仍然是人的。" },
      { q: "能不能设置白名单自动发？", a: "本站不把自动对外发送写成默认交付。若客户以后单独特批某类内部通知，那是另一次书面范围。" },
      { q: "货代报价呢？", a: "同样留人。案例页只说明一个已经发布的流程，不表示报价可以无人确认。" },
    ],
    related: [
      relatedCard("/zh/qiye-zhushou", "企业助手", "执行助手的定义里就包括审核。", "品类"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "报价和舱位留人。", "货代"),
      relatedCard("/zh/kuajing-zhoubao-zidonghua", "跨境周报", "数字也要人确认。", "跨境"),
      relatedCard("/zh/openclaw-gateway", "Gateway", "谁管通道，不取消审核。", "术语"),
      relatedCard("/blog/openclaw-private-deployment-cost-and-risk", "私有部署成本与风险", "权限和风险的长文。", "说明"),
      relatedCard("/enterprise", "企业陪跑计划", "约定里写明谁确认。", "服务"),
    ],
  }),
  page({
    category: "solutions",
    slug: "openclaw-gateway",
    title: "OpenClaw Gateway 是什么｜谁管通道，谁管数据",
    h1: "Gateway 是运行时的控制面，不是一个聊天产品的名字",
    description:
      "Gateway 在这里指运行时的控制面：谁管通道、密钥、模型和日志。它不是聊天产品的名字。差别沿用站内已经公开的对比，不补充未公开参数。",
    definition:
      "OpenClaw Gateway 是运行时的控制面，不是聊天窗口的产品名。站内对比用它区分：通道、数据和模型落在客户授权环境，还是落在云厂商账号里。",
    audience: "在对比页里看到 Gateway、需要一个定义的负责人",
    keywords: ["OpenClaw Gateway 是什么", "Gateway 控制面", "谁管通道", "谁管数据"],
    bullets: ["是控制面，不是聊天产品", "只复述站内已写过的差别", "不补充未公开的参数", "不写对方价格"],
    workflows: ["分清聊天产品和运行时", "问通道和日志落在哪", "不把企业版三个字当成机房", "价格回首页或合同"],
    sections: [
      {
        title: "站内已经怎么用这个词",
        body: "对比页写过：免部署产品和自有运行时差在谁管 Gateway、数据和模型。有企业版，不等于 Gateway 已经在你自己手里。腾讯生态里没有人愿意值守 Gateway 时，第三列可以留空，不必为了成交改成必须私有化。这些句子的展开在 [企业版 vs 私有部署](/compare/workbuddy-qiye-vs-siyou) 和 [私有化 vs 腾讯云 SaaS](/compare/siyouhua-vs-tencent-saas)。",
      },
      {
        title: "不补充未公开参数",
        body: "不写未在站内出现的端口、配置项或默认策略。首页把「飞书 + Gateway 快速连接」写成安装和连通，不含工作流整合，安装价格以首页为准。工作流仍是 [企业陪跑计划](/enterprise) 的范围。",
      },
      {
        title: "和 Skill 兼容不是一回事",
        body: "技能层可能对上，不表示控制面已经在客户侧。见 [OpenClaw Skill 和 WorkBuddy](/zh/openclaw-skill-workbuddy)。审核也不会因为换了 Gateway 就取消，见 [人工审核](/zh/rengong-shenhe)。",
      },
    ],
    faqs: [
      { q: "Gateway 是聊天机器人吗？", a: "不是。本站用它指运行时的控制面：谁管通道和数据。" },
      { q: "企业版是不是已经包含客户自己的 Gateway？", a: "不能从名字推导。企业版承诺到哪一层，以腾讯云文档和合同为准。" },
      { q: "这里有配置参数吗？", a: "没有。未在站内对比页写过的参数，这里不补充。" },
      { q: "装了 Gateway 就能无人值守吗？", a: "不能。对外发送、报价和付款仍然要人确认。" },
    ],
    related: [
      relatedCard("/compare/workbuddy-qiye-vs-siyou", "企业版 vs 私有部署", "谁掌握 Gateway 和数据。", "对比"),
      relatedCard("/compare/siyouhua-vs-tencent-saas", "私有化 vs 腾讯云 SaaS", "两种采购边界。", "对比"),
      relatedCard("/zh/openclaw-skill-workbuddy", "Skill 和 WorkBuddy", "技能层不是控制面。", "说明"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "控制面不取消人的确认。", "术语"),
      relatedCard("/zh/qiye-ai-zhushou-siyou-bushu", "企业 AI 助手私有部署", "数据落点的商业页。", "落地"),
      relatedCard("/enterprise", "企业陪跑计划", "连通不等于流程做完。", "服务"),
    ],
  }),
];

export const batch4ComparePages: GeoPage[] = [
  page({
    category: "compare",
    slug: "shuzi-yuangong-vs-liaotian",
    title: "数字员工和聊天机器人的区别",
    h1: "数字员工不是把聊天窗口换个名字",
    description:
      "数字员工按岗位跑一条固定流程。聊天机器人等你打开窗口提问。两边都不是无人公司。英文站另有一篇相近说明。",
    definition:
      "数字员工在本站指替一个说得清的岗位做一条重复动作，并留下草稿或待办。聊天机器人等用户提问后给一段回答。换名字不改变这个差别。",
    audience: "把数字员工和聊天机器人当成同一个采购对象的负责人",
    keywords: ["数字员工 和 聊天机器人 区别", "数字员工 不是 聊天窗", "聊天机器人 等提问", "数字员工 跑流程"],
    bullets: ["一个跑流程，一个等提问", "不是换个名字", "对外发送仍要人", "不写两边的价格"],
    workflows: ["先写岗位和那一个动作", "聊天窗若做不到就不要叫数字员工", "草稿进入审核", "不承诺无人公司"],
    comparisonUsLabel: "数字员工",
    comparisonTable: [
      { aspect: "什么时候动手", us: "按约定的时间或事件跑一条流程", them: "等你打开窗口提问", themLabel: "聊天机器人" },
      { aspect: "输入", us: "已经授权的消息、表或日程", them: "你贴进去的一段话", themLabel: "聊天机器人" },
      { aspect: "输出", us: "待办、草稿、提醒，停在人确认前", them: "一段回答，贴不贴出去由你决定", themLabel: "聊天机器人" },
      { aspect: "叫错名字时", us: "说不清岗位和动作，就还是聊天", them: "加上「员工」两个字，不会变成流程", themLabel: "聊天机器人" },
    ],
    sections: [
      {
        title: "先把岗位说出来",
        body: "数字员工必须能说清替哪个岗位做哪一个动作。说不清，就还是聊天。这个要求已经写在 [数字员工私有部署](/zh/shuzi-yuangong-siyou)。这里只对比它和聊天机器人，不重写私有部署。",
      },
      {
        title: "英文站的相近说明",
        body: "英文有 [OpenClaw assistant vs chatbot](/compare/openclaw-vs-chatbot)，讲的是工具连接和被动聊天。中文采购里更常说数字员工和聊天机器人，看这里的区别即可。",
      },
      {
        title: "两边都不自动对外承诺",
        body: `${human} 聊天机器人不会因为你少贴了一句上下文就变得安全；数字员工也不会因为接了工具就可以无人报价。审核见 [人工审核](/zh/rengong-shenhe)。`,
      },
    ],
    faqs: [
      { q: "聊天窗口加上定时提醒就是数字员工吗？", a: "只有它替一个明确岗位做一条固定动作，并且输出进到待办或草稿，才接近本站说的数字员工。否则仍是聊天。" },
      { q: "数字员工能无人值守吗？", a: "不能。对外发送、报价和付款由人确认。" },
      { q: "英文站有没有类似说明？", a: "有一篇英文对比，讲 OpenClaw 助手和普通聊天机器人。中文采购里更常说数字员工，看这一页即可。" },
      { q: "有价格对比吗？", a: "没有。聊天产品和数字员工的标价不在这里比较。" },
    ],
    related: [
      relatedCard("/zh/shuzi-yuangong-siyou", "数字员工私有部署", "岗位说不清就还是聊天。", "说明"),
      relatedCard("/compare/openclaw-vs-chatbot", "OpenClaw vs chatbot", "英文有一篇相近的对比。", "英文"),
      relatedCard("/zh/qiye-zhushou", "企业助手", "执行助手的中文品类。", "品类"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "两边都要留人。", "术语"),
      relatedCard("/zh/qiye-zhushou-zenme-xuan", "企业助手怎么选", "先分聊天、产品和部署。", "选型"),
      relatedCard("/enterprise", "企业陪跑计划", "落地的是一个岗位的一条动作。", "服务"),
    ],
  }),
];
