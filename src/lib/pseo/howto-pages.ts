import type { GeoPage } from "@/lib/geo-pages";
import { batch3HowtoPages } from "@/lib/pseo/batch3-pages";
import { batch4HowtoPages } from "@/lib/pseo/batch4-pages";
import { relatedCard, weclawdPriceCell, withPseoShell, workbuddyPriceCell } from "@/lib/pseo/shell";

const human = "对外发送、报价、退款、改价和付款默认留人工确认。";

/**
 * Category and selection pages. Append here to publish `/zh/[slug]`.
 */
export const pseoHowtoPages: GeoPage[] = [
  withPseoShell({
    category: "solutions",
    slug: "qiye-zhushou",
    title: "企业助手｜私有可控的执行助手，不是又一个聊天窗口",
    h1: "企业助手：接在现有工具上的执行助手，运行时由你选",
    description:
      "企业助手帮团队整理消息、出草稿、做提醒。喂龙虾负责设计、训练和落地，框架不锁死。客户选定 OpenClaw 时才做部署托管。腾讯生态开箱可先看 WorkBuddy。",
    definition:
      "企业助手是按固定流程运行的执行助手：在授权范围内读取企微、飞书、邮箱或表格，产出摘要、草稿和待办。它不是通用聊天，也不是某一个框架的别名。OpenClaw 是可选运行时；WorkBuddy 是腾讯云上的另一类企业助手产品。",
    audience: "搜索「企业助手」、还分不清聊天产品和业务部署的负责人",
    keywords: ["企业助手", "企业 AI 助手", "私有 AI 助手", "智能办公", "OpenClaw 企业助手"],
    bullets: [
      "先定义流程，再选 WorkBuddy、OpenClaw 或其他框架",
      "聊天产品负责问答，企业助手负责每天重复的整理",
      "高风险动作不自动发出",
      "货代场景用已有专页，不在这里重做",
    ],
    workflows: ["消息摘要", "回复草稿", "待办提醒", "交接简报", "人工审核队列"],
    sections: [
      {
        title: "企业助手不是模型，也不是某一个 SaaS",
        body: "团队通常已经有豆包、DeepSeek 或腾讯云上的办公产品。缺的不是再开一个对话框，而是有人把「谁的消息要当天回、哪张表要进早报」写成可以每天跑的步骤。喂龙虾做的是这件事：设计、训练、把助手放进已经在用的工具。运行时可以是客户选定的 OpenClaw，也可以是别的可落地框架。",
        items: [
          "临时问答和写文案：继续用现成聊天产品",
          "腾讯云和企微里的开箱办公：先评估 [WorkBuddy](/compare/workbuddy-vs-openclaw)",
          "要自己掌握权限和数据落点：再谈私有企业助手",
        ],
      },
      {
        title: "它每天做什么、不做什么",
        body: `${human} 适合先做的是只读摘要和草稿：未回复清单、会议待办、表格里的异常行。不适合许诺的是无人客服、自动报价、自动付款。货代公司的询盘和运价已经有 [货代 AI 助手](/zh/huodai-ai-zhushou)，本页不重复那套行业流程。跨境卖家的客服和订单见 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)。`,
      },
      {
        title: "和已有选型页怎么分",
        body: "本页回答「企业助手是什么、喂龙虾交付哪一层」。模型、聊天产品和部署层的三分法在 [企业 AI 助手选型对标](/zh/qiye-ai-zhushou-duibiao)。一步步选型用 [企业助手怎么选](/zh/qiye-zhushou-zenme-xuan)。真要进客户环境，看 [企业 AI 助手私有部署](/zh/qiye-ai-zhushou-siyou-bushu)，范围和报价以 [企业陪跑计划](/enterprise) 为准，不是首页最低价安装包。",
      },
    ],
    faqs: [
      {
        q: "有聊天机器人还需要企业助手吗？",
        a: "如果每天仍在把聊天记录、邮件和表格复制进对话框，就需要。企业助手按授权读这些来源，把草稿和提醒送到固定位置。只是偶尔问一个问题，聊天产品够用。",
      },
      {
        q: "企业助手是不是 OpenClaw？",
        a: "不是。OpenClaw 是一种可自持的运行时。企业助手是工作方式。客户选定 OpenClaw，喂龙虾做白手套部署和托管；没选定，陪跑按别的框架做。",
      },
      {
        q: "WorkBuddy 算不算企业助手？",
        a: "算，它是腾讯云的企业助手产品。和喂龙虾的差别在于你买的是云上产品，还是把流程做进客户自己的环境。腾讯栈开箱时，WorkBuddy 往往更短。",
      },
      {
        q: "能不能替代员工？",
        a: "不能。它减少查找和起草。判断、赔付、报价和对外承诺仍由人负责。",
      },
    ],
    related: [
      relatedCard("/zh/qiye-zhushou-zenme-xuan", "企业助手怎么选", "五步分开聊天产品、腾讯云和私有路径。", "选型"),
      relatedCard("/zh/zhineng-bangong-ai", "智能办公 AI 助手", "对内的邮件、日程和交接，不等于对外客服。", "品类"),
      relatedCard("/zh/qiye-ai-zhushou-duibiao", "企业 AI 助手选型对标", "模型、聊天产品、工作流部署分三层。", "已有页面"),
      relatedCard("/compare/workbuddy-vs-weclawd", "WorkBuddy vs 喂龙虾", "产品开通，还是陪跑加可选部署。", "对比"),
      relatedCard("/enterprise", "企业陪跑计划", "3 天把 1–2 个工作流做完。", "服务"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "国际物流询盘和运价走专页。", "已有页面"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "zhineng-bangong-ai",
    title: "智能办公 AI 助手｜邮件、日程和交接，不是无人客服",
    h1: "智能办公 AI 助手：先把当班的人要看的简报做出来",
    description:
      "智能办公是邮件、日程、会议待办和交接。腾讯云与企微团队应先看 WorkBuddy。工具混用时，喂龙虾把一条办公流程做进现有通道，OpenClaw 可选。",
    definition:
      "智能办公 AI 助手面向内部协作：在授权范围内整理邮箱、日历和聊天，生成交接和待办。它不默认代表员工向客户承诺。WorkBuddy 是腾讯云在这个品类里的产品；喂龙虾是把同类流程落地到客户工具栈的陪跑。",
    audience: "在搜智能办公方案的行政、运营负责人和创始人",
    keywords: ["智能办公 AI 助手", "智能办公", "企业助手", "邮件 日程 AI", "WorkBuddy 智能办公"],
    comparisonUsLabel: "混用工具时的喂龙虾",
    comparisonTable: [
      { aspect: "办公在哪发生", us: "飞书、邮箱、日历、企微、钉钉可能同时存在", them: "腾讯云、企微、腾讯文档和会议更集中", themLabel: "腾讯云 WorkBuddy" },
      { aspect: "更短的路径", us: "陪跑一条交接或邮件简报。运行时可选 OpenClaw", them: "在腾讯生态里开箱" },
      { aspect: "合格线", us: "早报能指出需要人处理的几件事", them: "以产品内实际使用为准，不在本页臆测功能清单" },
      { aspect: "不该自动发出", us: "合同、付款、对客户的承诺", them: "同样不该只因为生成了句子就群发" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: [
      "对内简报和对客客服要分开做",
      "腾讯办公栈优先评估 WorkBuddy",
      "周报素材可以收，结论由人写",
      "不把智能办公说成只有私有部署能做",
    ],
    workflows: ["晨间简报", "未读邮件分类", "会议待办", "跨部门交接", "周报素材"],
    sections: [
      {
        title: "智能办公先对内",
        body: `员工真正缺的常常是一份当班能看的清单：哪封邮件要回、哪个会没有待办、哪个群里的问题还没人认领。助手做这个。${human} 通用会议纪要已有 [会议纪要 AI 助手](/zh/huiyi-jiyao-ai-zhushou)，本页讲的是怎么选路径，不把纪要模板再写一遍。`,
      },
      {
        title: "WorkBuddy 在这个词上的位置",
        body: "公开定位里，WorkBuddy 就是智能办公和企业助手。团队若已经在腾讯云和企业微信里办公，应先把那条产品用起来，喂龙虾不应拦。只有当邮箱在 Gmail、文档在飞书、现场沟通在钉钉或货代微信，一个腾讯账号盖不住时，才把这一条交接单独做成客户侧助手。对照见 [WorkBuddy vs OpenClaw](/compare/workbuddy-vs-openclaw)。",
      },
      {
        title: "和跨境、货代页的边界",
        body: "跨境团队的时差和双语交接在 [跨境电商智能办公](/zh/kuajing-zhineng-bangong)。货代销售的询盘和运价在 [货代 AI 助手](/zh/huodai-ai-zhushou)。本页是品类说明：智能办公助手服务内部节奏。怎样算做完写在 [智能办公落地](/zh/zhineng-bangong-luodi)，邮箱和日历的边界在 [邮箱日历智能办公](/zh/youxiang-rili-zhineng-bangong)。店铺成交、广告和履约不要打包进同一张验收单。实施范围仍是 [企业陪跑](/enterprise) 的 1–2 个流程。",
      },
    ],
    faqs: [
      {
        q: "智能办公 AI 能不能自动给全员发周报？",
        a: "可以送到待审核位置。默认不直接群发。周报里的数字错一次，比晚发一小时更贵。",
      },
      {
        q: "和客服机器人是同一个项目吗？",
        a: "不该是。智能办公对内，客服对外。对外句子默认草稿。两个都要做时，分成两个流程、两套审核。",
      },
      {
        q: "必须部署 OpenClaw 吗？",
        a: "不必须。腾讯产品里已经能完成的办公，继续用。只有要自己持有运行时或通道不在腾讯时，才部署 OpenClaw 或别的框架。",
      },
      {
        q: "飞书和邮箱的智能办公算不算？",
        a: "算。飞书文档、日历和邮箱都是常见起点。首页的飞书连接套餐只是安装与连通，不含把简报流程做完。流程本身走陪跑或单独约定。",
      },
    ],
    related: [
      relatedCard("/zh/qiye-zhushou", "企业助手", "执行助手的定义：流程先于框架。", "品类"),
      relatedCard("/zh/kuajing-zhineng-bangong", "跨境电商智能办公", "时差、双语和混合工具栈。", "跨境"),
      relatedCard("/compare/workbuddy-vs-openclaw", "WorkBuddy vs OpenClaw", "开箱产品和自持运行时。", "对比"),
      relatedCard("/zh/huiyi-jiyao-ai-zhushou", "会议纪要 AI 助手", "行动项和跟进提醒的已有页面。", "已有页面"),
      relatedCard("/enterprise", "企业陪跑计划", "一条办公流程做到当班的人真的在用。", "服务"),
      relatedCard("/zh/feishu-qiye-zhushou", "飞书企业助手", "文档和日历在飞书时从这里看通道。", "平台"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "qiye-ai-zhushou-siyou-bushu",
    title: "企业 AI 助手私有部署｜先写清数据能不能离开你的环境",
    h1: "企业 AI 助手私有部署：进程、密钥和日志要能指到具体环境",
    description:
      "私有部署是企业助手跑在客户授权的机器或 VPC。喂龙虾可以部署 OpenClaw，也可以按别的可私有化框架陪跑。首页低价套餐不是这件事。WorkBuddy 企业版是否够用，以腾讯云合同为准。",
    definition:
      "企业 AI 助手的私有部署，指助手运行在客户授权环境中，工具权限和人工审核由客户定。它不是「不用某个品牌」的同义词，也不是首页安装套餐的别名。",
    audience: "要做企业 AI 助手私有部署、并需要回答安全问卷的负责人",
    keywords: ["企业 AI 助手 私有部署", "私有化部署", "企业助手 数据不出域", "OpenClaw 私有部署", "WorkBuddy 企业版"],
    comparisonUsLabel: "客户授权环境",
    comparisonTable: [
      { aspect: "要能指出来", us: "机器或 VPC、密钥、日志、模型请求方向", them: "企业版交付的是专属云、客户机房，还是仍在腾讯云区域", themLabel: "腾讯云企业版" },
      { aspect: "运行时", us: "选定 OpenClaw 则白手套部署；否则按可私有化框架陪跑", them: "WorkBuddy 等产品边界，以文档为准" },
      { aspect: "低价套餐", us: "首页 OpenClaw 安装与托管不是多系统私有化", them: "公有开通和企业版不是同一个报价" },
      { aspect: "仍然要人", us: "私有不等于无人值守对外发消息", them: "同样保留人工审核" },
      { aspect: "价格", us: "企业陪跑简单场景约 10–30 万、复杂约 30–80 万，以陪跑页为准，见 [企业陪跑计划](/enterprise)；预约后按 1–2 个工作流报价。", them: workbuddyPriceCell },
    ],
    bullets: [
      "先做数据分级，再选框架",
      "企业版三个字不能代替落点",
      "OpenClaw 是常用运行时，不是唯一运行时",
      "让 AI 读业务数据从来不是零风险",
    ],
    workflows: ["数据分级", "选定电脑、VPC 或机房", "只读试点", "审核队列", "权限回收"],
    sections: [
      {
        title: "私有部署要回答的四句",
        body: "数据文件在哪。模型请求是否离开该环境。员工离职后权限怎么收。合同结束后实例归谁。答不出的方案，不要因为文案里有「私有」就签。腾讯云企业版和喂龙虾的客户侧部署都该接受这四问。对照见 [私有化 vs 腾讯云 SaaS](/compare/siyouhua-vs-tencent-saas) 和 [企业版 vs 私有部署](/compare/workbuddy-qiye-vs-siyou)。",
      },
      {
        title: "喂龙虾实际怎么做",
        body: `运行时放在客户电脑、客户 VPC 或约定的机房。客户点名 OpenClaw，我们做部署和托管；客户指定别的可放在该环境里的框架，陪跑按那个框架做。${human} 成本、权限和做不到的部分写在 [私有部署成本与风险](/blog/openclaw-private-deployment-cost-and-risk)。跨境订单和供货价的场景边界在 [跨境 AI 私有部署](/zh/kuajing-ai-siyou-bushu)。`,
        items: [
          "个人电脑上的部署适合低敏的个人助手",
          "客户名单和供货价通常要有备份和权限回收，不适合只放在一台笔记本上",
          "全量多系统改造不是 3 天的范围；陪跑锁 1–2 个流程",
        ],
      },
      {
        title: "什么时候不必私有化",
        body: "只处理公开话术、内部通知，或团队已经接受腾讯云合同里的地域和隔离。这时上私有化是在买运维。把 WorkBuddy 或现有聊天产品用完，比再养一个 Gateway 更诚实。真要实施时，入口是 [企业陪跑计划](/enterprise)。",
      },
    ],
    faqs: [
      {
        q: "私有部署能否保证数据绝对不出去？",
        a: "不能绝对保证。只要模型接口指向外部环境，请求就会离开。私有指你能指定环境、关掉不该开的出网，并审计谁授权了工具。",
      },
      {
        q: "489 元或 3800 元套餐（以首页为准）是私有化吗？",
        a: "不是你在安全问卷里要的那种。[首页](/)飞书连接包（当前公示 ¥489，以首页为准）只保证安装与连通，不含工作流整合。云托管（当前公示 ¥3800，以首页为准）是 OpenClaw 和最多 3 个工作流。企业数据边界走陪跑。",
      },
      {
        q: "是否必须 OpenClaw？",
        a: "不必须。它是我们最常部署的运行时。不能放在客户环境里的纯 SaaS，不会被包装成私有部署。",
      },
      {
        q: "和托管是同一个词吗？",
        a: "不是。私有部署说的是环境在谁那边。托管说的是谁值守。可以私有部署后自己运维，也可以在约定范围内交给喂龙虾托管。见私有 AI 助手托管页。",
      },
    ],
    related: [
      relatedCard("/zh/siyou-ai-zhushou-tuoguan", "私有 AI 助手托管", "环境在客户侧之后，谁来值守。", "落地"),
      relatedCard("/compare/workbuddy-qiye-vs-siyou", "企业版 vs 私有部署", "控制面四问，比口号具体。", "对比"),
      relatedCard("/compare/openclaw-diy-vs-tuoguan", "自己部署 vs 托管", "选定 OpenClaw 之后，自己装还是交给喂龙虾。", "对比"),
      relatedCard("/blog/openclaw-private-deployment-cost-and-risk", "成本与风险", "已有说明：权限、成本和安全边界。", "已有文章"),
      relatedCard("/zh/kuajing-ai-siyou-bushu", "跨境私有部署", "订单和供货价场景，不在本页重复。", "跨境"),
      relatedCard("/enterprise", "企业陪跑计划", "私有化项目按 1–2 个工作流报价。", "服务"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "siyou-ai-zhushou-tuoguan",
    title: "私有 AI 助手托管｜谁值守，和环境在谁那边是两件事",
    h1: "私有 AI 助手托管：安装可以当天做完，业务设计不是当天的事",
    description:
      "托管是喂龙虾在约定范围内值守客户侧的助手。首页套餐针对客户选定的 OpenClaw。不想用 OpenClaw，用企业陪跑评估别的框架，不要套用同一个低价 SKU。",
    definition:
      "私有 AI 助手托管，指助手运行在客户授权环境中，由喂龙虾按约定处理安装、加固和故障。它不等于企业陪跑，也不等于数据放在喂龙虾公司的服务器上。",
    audience: "想把私有助手交给别人值守、但不想先养一个运维的创始人",
    keywords: ["私有 AI 助手 托管", "OpenClaw 托管", "AI 助手 托管", "企业助手 运维", "白手套部署"],
    bullets: [
      "开源能自己装，时间花在故障和通道上",
      "托管回答谁来看进程，不回答业务怎么设计",
      "云托管环境按该次方案约定，不是默认进喂龙虾的公有池",
      "过了支持期，系统仍归客户，继续值守另计",
    ],
    workflows: ["确认是不是 OpenClaw", "分开报安装和陪跑", "先接只读和草稿", "约定支持期", "到期后决定是否续托管"],
    sections: [
      {
        title: "三张订单不要买混",
        body: "第一张是首页上的 OpenClaw 安装或云托管：飞书快速连接只保证连通，个人部署和云托管含基础加固和有限工作流，通常当天完成安装。第二张是 [企业陪跑](/enterprise)：3 天，把 1–2 个真实流程做完并教会当班的人。第三张是支持期结束后的持续值守，要另约。把第三张的期待写进第一张的价格里，交付一定会吵。",
        items: [
          "自己有人看日志：不一定需要托管，见 [自己部署 vs 托管](/compare/openclaw-diy-vs-tuoguan)",
          "没有人在接口失效时改配置：托管比自学便宜",
          "还没选定 OpenClaw：不要为了托管套餐先锁定运行时",
        ],
      },
      {
        title: "托管不把数据搬到喂龙虾",
        body: "个人部署在客户电脑。云托管在该次方案约定的 VPS 或客户环境。密钥和权限按这次部署配置。让 AI 读邮箱和日历不是 100% 无风险，我们把权限收窄并留日志。若安全问卷问的是供货价和客户名单的落点，那是私有部署项目，不是云托管套餐（当前公示 ¥3800，以首页为准）能结束的，看 [企业 AI 助手私有部署](/zh/qiye-ai-zhushou-siyou-bushu)。",
      },
      {
        title: "和腾讯云托管智能体的差别",
        body: "腾讯云 WorkBuddy 的公开材料会谈到托管智能体，那是厂商产品里的托管，值守和数据边界按腾讯云规则。喂龙虾的托管是客户侧运行时的值守，常见对象是 OpenClaw。两边都叫托管，买到的不是同一个东西。价格不要互相比一个本页没有的数字。选型若还停在「要不要离开腾讯云」，先读 [为什么不选 WorkBuddy](/compare/weishenme-siyou-not-workbuddy)。",
      },
    ],
    faqs: [
      {
        q: "当天上线是不是全公司都会用？",
        a: "不是。当天指约定的 OpenClaw 安装完成。全公司工作流不是一天的交付。陪跑用 3 天做完事先写好的 1–2 个流程。",
      },
      {
        q: "14 天后谁负责？",
        a: "安装套餐含一段专属支持，云托管页面写的是 14 天。之后系统归客户。要继续值守，另签托管。企业陪跑另有 30 天答疑，不要和安装套餐的 14 天混成同一承诺。",
      },
      {
        q: "不用 OpenClaw 能买托管套餐吗？",
        a: "首页托管套餐针对 OpenClaw。其他框架放在企业陪跑里评估，不套用同一个云托管价格。",
      },
      {
        q: "托管能否自动回复客户？",
        a: "不作为交付标准。托管保证的是进程和约定工作流在支持期内有人看。对外承诺仍由人确认。",
      },
    ],
    related: [
      relatedCard("/compare/openclaw-diy-vs-tuoguan", "自己部署 vs 托管", "OpenClaw 路径上的时间、安全和故障怎么分。", "对比"),
      relatedCard("/zh/qiye-ai-zhushou-siyou-bushu", "企业 AI 助手私有部署", "环境在谁那边，比谁值守更先问。", "落地"),
      relatedCard("/enterprise", "企业陪跑计划", "业务设计不是安装套餐里的赠品。", "服务"),
      relatedCard("/zh/yuancheng-qiye-zhushou", "远程部署企业助手", "全国主路径是远程，上门仅深圳。", "服务"),
      relatedCard("/blog/openclaw-setup-cost", "部署成本", "已有说明：安装和持续成本不要只看授权费。", "已有文章"),
      relatedCard("/compare/weclawd-vs-building-in-house", "交给外部还是自建", "英文页：内部工程队和外部实施怎么分。", "对比"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "qiye-zhushou-zenme-xuan",
    title: "企业助手怎么选｜聊天、腾讯云、私有运行时分五步",
    h1: "企业助手怎么选：先写流程，再决定留在腾讯云还是自持运行时",
    description:
      "选型按五步走：是不是固定流程、工具在不在腾讯、数据能不能进 SaaS、谁运维、先试点哪一条。喂龙虾只在实施层出现。不写 WorkBuddy 价格。",
    definition:
      "企业助手选型是在聊天产品、腾讯云企业助手和客户侧运行时之间做选择。喂龙虾不是第四个必选项。只有当你需要人把流程做完，或需要把运行时放在自己的环境里，才进入陪跑或 OpenClaw 部署。",
    audience: "正在做企业助手采购、容易把模型和办公产品放在一张表里比的负责人",
    keywords: ["企业助手 怎么选", "企业 AI 助手 选型", "WorkBuddy 选型", "私有部署 还是 SaaS", "智能办公 怎么选"],
    bullets: [
      "模型能力不是选型的第一行",
      "腾讯栈开箱就留在 WorkBuddy",
      "写不出数据边界就不要买私有化",
      "试点一条流程，不签全公司替换",
    ],
    workflows: ["写一条每天重复的工作", "标出工具在哪家", "标出数据能不能出去", "指定谁值守", "两周后只验收这一条"],
    sections: [
      {
        title: "五步，按顺序，不要跳",
        body: "第一步：这件事是临时问答，还是每天都要做的整理。临时问答停在聊天产品。第二步：人和文档是否已经在腾讯云、企微。若是，先评估 WorkBuddy，见 [WorkBuddy vs OpenClaw](/compare/workbuddy-vs-openclaw)。第三步：客户名单和供货价能不能进公有办公产品。不能，再读 [私有化 vs 腾讯云 SaaS](/compare/siyouhua-vs-tencent-saas)。第四步：没有人值守就不要自己部署 OpenClaw，看 [托管](/zh/siyou-ai-zhushou-tuoguan)。第五步：只选一条流程试点。",
        items: [
          "三分法的已有说明：[企业 AI 助手选型对标](/zh/qiye-ai-zhushou-duibiao)",
          "品类定义：[企业助手](/zh/qiye-zhushou)",
          "部署前的问题清单：[20 个问题](/blog/ai-assistant-implementation-checklist)",
        ],
      },
      {
        title: "这张表上不要出现的比较",
        body: "不要比「谁聊天更聪明」。那是模型问题，DeepSeek、通义、豆包都可以当引擎。不要比本页没写出的价格。WorkBuddy 的标价以腾讯云为准。不要把货代报价速度当成所有行业的成绩，货代案例在 [报价响应案例](/case/huodai-baojia-speed-to-lead)，只说明那一家物流公司。",
      },
      {
        title: "选完之后谁来做",
        body: `选定腾讯云标准产品，找腾讯云。选定要人把 1–2 个流程做完，找喂龙虾 [企业陪跑](/enterprise)。选定 OpenClaw 且只需要安装，看首页套餐。${human} 跨境团队若卡在「WorkBuddy 够不够」，单独看 [WorkBuddy 适合跨境电商吗](/zh/workbuddy-shihe-kuajing)。`,
      },
    ],
    faqs: [
      {
        q: "能不能出一张所有产品的打分表？",
        a: "不能诚实做到。通道和数据落点一变，分数就变。五步问答比一张过期的打分表有用。",
      },
      {
        q: "喂龙虾会不会在选型里只推荐自己？",
        a: "腾讯生态开箱、采购只认腾讯云时，我们会建议留在 WorkBuddy。只有控制面或混合工具栈对不上，才建议陪跑或 OpenClaw。",
      },
      {
        q: "试点失败怎么办？",
        a: "安装套餐按首页规则，14 天内不满意可退。陪跑的范围在签约时写成 1–2 个流程，不把失败定义成「没搞定全公司」。",
      },
      {
        q: "选型要不要先买服务器？",
        a: "不要。先写流程和数据边界。很多团队写完发现留在现有 SaaS 就够，服务器是第三步之后的事。",
      },
    ],
    related: [
      relatedCard("/zh/qiye-zhushou", "企业助手是什么", "先把词定义清楚，再采购。", "品类"),
      relatedCard("/compare/weishenme-siyou-not-workbuddy", "为什么不选 WorkBuddy", "只在少数异议成立时离开腾讯侧。", "对比"),
      relatedCard("/zh/qiye-ai-zhushou-duibiao", "选型对标", "模型、聊天、部署三层。", "已有页面"),
      relatedCard("/blog/ai-assistant-implementation-checklist", "部署前 20 问", "权限、审核和验收，签约前对一遍。", "已有文章"),
      relatedCard("/enterprise", "企业陪跑计划", "选型结束之后的实施，不是选型本身。", "服务"),
      relatedCard("/zh/workbuddy-shihe-kuajing", "WorkBuddy 适合跨境吗", "跨境是选型里的一个具体问题，不是所有行业的答案。", "跨境"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "workbuddy-shihe-kuajing",
    title: "WorkBuddy 适合跨境电商吗｜什么时候够用，什么时候不够",
    h1: "WorkBuddy 适合跨境电商吗：腾讯栈里的办公够用，订单和供货价要另问",
    description:
      "跨境团队若主要在企微和腾讯云里协作，WorkBuddy 可以作为智能办公起点。飞书、境外邮箱、独立站和货代群混用，或数据不能进公有办公产品时，再考虑私有助手。不写 WorkBuddy 价格。",
    definition:
      "WorkBuddy 适合跨境电商的部分，是腾讯生态内的智能办公和内部协作。它是否覆盖某个店铺后台、境外邮箱或货代群，以腾讯云当时文档为准。喂龙虾不把「适合」说成「必须换掉」。",
    audience: "跨境电商负责人，正在看腾讯云 WorkBuddy 又担心数据和非腾讯工具",
    keywords: ["WorkBuddy 适合跨境电商吗", "跨境电商 WorkBuddy", "跨境电商 企业助手", "跨境 智能办公", "私有 AI 助手"],
    bullets: [
      "内部办公在企微：可以先用 WorkBuddy",
      "不承诺它自动管好所有平台店铺",
      "客户名单和供货价的落点要单独问合同",
      "私有助手从一条草稿流程开始，不刷单",
    ],
    workflows: ["内部交接是否已在企微", "店铺和邮箱在不在腾讯", "供货价能不能进 SaaS", "只加一条客服草稿或异常单早报"],
    sections: [
      {
        title: "适合的那一半",
        body: "深圳或国内运营团队每天在企业微信里交接，文档和会议也在腾讯云，WorkBuddy 作为智能办公工具是合理起点。它解决的是「人已经在腾讯栈里，不想再养一套运行时」。这个判断不需要先部署 OpenClaw。价格和席位以腾讯云为准，本页不写数字。",
        items: [
          "班次交接、内部问答、腾讯文档里的协作：优先留在 WorkBuddy",
          "不要为了「跨境」两个字把一套还能用的办公产品拆掉",
          "公开产品说明见腾讯云 WorkBuddy，本站不代列功能",
        ],
      },
      {
        title: "经常不够的那一半",
        body: "跨境运营还落在 Gmail、飞书、独立站后台、平台卖家中心和货代微信群。这些通道不因为你买了腾讯云办公就自动接上。另外，供应商价格和买家联系方式若不能进入公有办公产品，要读企业版合同里的数据落点，而不是看宣传语。不够的时候，私有助手只补那一条：例如异常订单早报，或开发信草稿。做法见 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)。",
        items: [
          "对外回复、退款和时效承诺由人发",
          "不做刷单、刷评、虚假流量或伪造物流",
          "货代公司自己的报价系统用 [货代 AI 助手](/zh/huodai-ai-zhushou)，卖家只做协同",
        ],
      },
      {
        title: "若要私有助手，从哪条开始",
        body: "不要从「替换 WorkBuddy」开始。从 WorkBuddy 没覆盖、且你能量出等待时间的一条开始：未回复的买家消息，或超时未发的订单。运行时可以是 OpenClaw，也可以是你指定的其他框架，由喂龙虾陪跑。腾讯侧继续承担它仍然合适的内部办公。异议怎么和老板说，见 [为什么不选 WorkBuddy](/compare/weishenme-siyou-not-workbuddy)。实施入口是 [企业陪跑计划](/enterprise)。",
      },
    ],
    faqs: [
      {
        q: "WorkBuddy 能不能直接做跨境客服？",
        a: "要看它当时是否接通你的客服通道，以腾讯云文档为准。即便接通，退款和时效承诺仍建议人工发出。喂龙虾默认只做草稿和提醒。",
      },
      {
        q: "不适合是不是就要换 OpenClaw？",
        a: "不一定。先确认缺口是通道还是数据落点。只是内部没用起来，继续用 WorkBuddy。确认要客户侧运行时之后，OpenClaw 才是选项之一。",
      },
      {
        q: "跨境页面会不会承诺 GMV？",
        a: "不承诺。能验收的是某一条流程的等待和漏项。GMV 由商品、广告和供应链决定。",
      },
      {
        q: "和国内电商运营页有什么区别？",
        a: "国内店铺的文案和订单草稿在电商运营页。跨境多了时区、境外邮箱、货代和平台规则。两边都不要做违规增长。",
      },
    ],
    related: [
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "客服、异常单、物流协同、开发信。", "跨境"),
      relatedCard("/zh/kuajing-zhineng-bangong", "跨境智能办公", "时差和双语交接，不等于店铺自动化。", "跨境"),
      relatedCard("/compare/workbuddy-vs-weclawd", "WorkBuddy vs 喂龙虾", "产品还是陪跑，先分清再预算。", "对比"),
      relatedCard("/zh/kuajing-ai-siyou-bushu", "跨境私有部署", "供货价和订单导出的落点。", "跨境"),
      relatedCard("/zh/dianshang-yunying-ai-zhushou", "电商运营 AI 助手", "国内店铺运营的已有页面。", "已有页面"),
      relatedCard("/enterprise", "企业陪跑计划", "只补 WorkBuddy 没覆盖的那一条流程。", "服务"),
    ],
  }),
  ...batch3HowtoPages,
  ...batch4HowtoPages,
];
