import type { GeoPage } from "@/lib/geo-pages";
import {
  WORKBUDDY_ENTERPRISE_DOC,
  WORKBUDDY_HOME,
  relatedCard,
  weclawdPriceCell,
  withPseoShell,
  workbuddyPriceCell,
} from "@/lib/pseo/shell";

/** Alternatives and workflows that do not yet have a URL. No city pages. */
const UPDATED = "2026-10-12";

const cite = `[WorkBuddy](${WORKBUDDY_HOME}) 是腾讯云的企业助手，企业版说明见[腾讯云文档](${WORKBUDDY_ENTERPRISE_DOC})。下面不列它的价格，也不代腾讯写功能清单。`;
const human = "对外发送、报价、退款、改价和付款由人确认。";
const remote = "上门目前只在深圳。人在其他城市，实施走远程。";

function page(entry: GeoPage): GeoPage {
  return withPseoShell({ ...entry, updatedAt: UPDATED });
}

const tidai = relatedCard("/compare/workbuddy-tidai", "WorkBuddy 替代", "什么时候换，什么时候留在腾讯云。", "对比");
const compareHub = relatedCard("/compare", "对比", "WorkBuddy、聊天产品和私有运行时分开看。", "栏目");
const zhHub = relatedCard("/zh", "中文场景", "按工具和流程看已经写好的页面。", "栏目");
const enterprise = relatedCard("/enterprise", "企业陪跑计划", "把 1–2 个流程做进现有工具。", "服务");
const remoteCard = relatedCard("/zh/yuancheng-qiye-zhushou", "远程部署", "深圳以外走远程。", "服务");
const shenzhen = relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门", "上门目前只在深圳。", "服务");

export const batch5ComparePages: GeoPage[] = [
  page({
    category: "compare",
    slug: "workbuddy-vs-feishu",
    title: "WorkBuddy 和飞书上的助手怎么分",
    h1: "WorkBuddy 和飞书上的助手：先看团队每天待在哪一套里",
    description:
      "WorkBuddy 是腾讯云的企业助手。团队的文档和日历如果在飞书，先看飞书自己的助手和飞书上的流程，不把两套办公软件当成同一个替代品。价格以各自官网为准。",
    definition:
      "WorkBuddy 和飞书上的助手解决的是不同办公套件里的每日待办。人、文档和会议在腾讯云，先评估 WorkBuddy。人、文档和会议在飞书，先评估飞书上的助手。换产品不等于把历史记录导出成另一套。",
    audience: "同时看过腾讯云和飞书，想知道能不能互相替代的负责人",
    keywords: ["WorkBuddy 飞书", "WorkBuddy 和飞书智能伙伴", "飞书 替代 WorkBuddy", "WorkBuddy 替代"],
    comparisonUsLabel: "主场在飞书时",
    comparisonTable: [
      { aspect: "它是什么", us: "飞书套件里的助手能力，以飞书当时的说明为准", them: "腾讯云的企业助手", themLabel: "WorkBuddy" },
      { aspect: "先选哪边", us: "文档、日历和群已经在飞书", them: "人和文件已经在腾讯云、企业微信" },
      { aspect: "换的时候实际发生什么", us: "重做的是一条流程的权限和审核，不是整库搬家", them: "腾讯侧仍然合适的办公可以留下" },
      { aspect: "价格", us: "飞书的价格以飞书为准，这里不编", them: workbuddyPriceCell },
    ],
    bullets: ["先看人待在哪一套", "飞书页讲怎么做一条流程", "替代与否看总说明", "不编任何一边的价格"],
    workflows: ["确认主场是飞书还是腾讯云", "只试点一条待办", "对外消息仍由人发", "另一套先保持原样"],
    sections: [
      {
        title: "两套办公软件不是互相的克隆",
        body: `${cite} 飞书上的每日流程，例如日历晨报和文档要点，写在 [飞书企业助手](/zh/feishu-qiye-zhushou)。那里讲的是怎么把一条飞书流程做完，不是飞书官方产品的报价单。`,
      },
      {
        title: "什么时候不该为了飞书离开 WorkBuddy",
        body: "同事、文件和审批已经在腾讯云和企业微信里，只因为看到飞书的介绍就整队迁移，通常多一个系统、少一条已经在用的路径。要不要换，先看 [WorkBuddy 替代](/compare/workbuddy-tidai)。",
      },
      {
        title: "主场在飞书时，腾讯云不是更短的路",
        body: `${human} ${remote} 飞书上的安装如果只是连通，范围以首页公示为准。要把晨报做成每天有人用的流程，看 [企业陪跑计划](/enterprise)。`,
      },
    ],
    faqs: [
      { q: "飞书自带的助手能不能换成 WorkBuddy？", a: "人如果已经在飞书里办公，先把飞书上的那条流程用起来。WorkBuddy 是腾讯云的产品，不会因为名字里都有助手就自动接过飞书文档。" },
      { q: "两边能同时开吗？", a: "可以各留各的主场。试点阶段不要让两个机器人催同一件事、给同一个客户发同一句话。" },
      { q: "价格哪边更低？", a: "这里不比较价格。飞书以飞书当时的说明为准，WorkBuddy 以腾讯云为准，喂龙虾的安装和陪跑以首页和陪跑页为准。" },
      { q: "上门能到飞书团队所在的城市吗？", a: "上门目前只在深圳。其他城市走远程。" },
    ],
    related: [
      tidai,
      relatedCard("/zh/feishu-qiye-zhushou", "飞书企业助手", "文档、日历和消息收成一条待办。", "平台"),
      relatedCard("/zh/huodai-feishu-ai", "飞书货代", "货代主场在飞书时看这篇。", "货代"),
      compareHub,
      enterprise,
      shenzhen,
    ],
  }),
  page({
    category: "compare",
    slug: "workbuddy-vs-dingtalk",
    title: "WorkBuddy 和钉钉上的助手怎么分",
    h1: "WorkBuddy 和钉钉上的助手：审批还在钉钉里由人点",
    description:
      "钉钉上的助手负责钉钉里的提醒和待办。WorkBuddy 是腾讯云的企业助手。审批同意或拒绝仍由有权限的人点。两边的价格以各自官网为准。上门目前只在深圳。",
    definition:
      "WorkBuddy 和钉钉上的助手分属两套协作软件。主场在钉钉，先做钉钉里能验收的一件，例如逾期未处理的名单。主场在腾讯云，先评估 WorkBuddy。助手可以提醒，不能代签。",
    audience: "内部用钉钉、同时又在看腾讯云企业助手的负责人",
    keywords: ["WorkBuddy 钉钉", "钉钉 AI 和 WorkBuddy", "钉钉 替代 WorkBuddy", "WorkBuddy 替代"],
    comparisonUsLabel: "主场在钉钉时",
    comparisonTable: [
      { aspect: "它是什么", us: "钉钉权限内的提醒和待办", them: "腾讯云的企业助手", themLabel: "WorkBuddy" },
      { aspect: "审批", us: "可以列逾期名单，不能代签", them: "腾讯侧的审批以腾讯云和企微当时的能力为准" },
      { aspect: "先做哪件", us: "一类审批或一个群", them: "已经在腾讯云里的办公继续用 WorkBuddy" },
      { aspect: "价格", us: "钉钉的价格以钉钉为准，这里不编", them: workbuddyPriceCell },
    ],
    bullets: ["先确认主通道是钉钉还是腾讯", "提醒可以做，代签不做", "替代决策看总说明", "不编两边价格"],
    workflows: ["列出逾期未处理", "负责人自己点同意或拒绝", "试点只留一个通道", "对外承诺仍由人发"],
    sections: [
      {
        title: "钉钉上先做哪一件，已经有专页",
        body: `${cite} 钉钉里从哪一件开始，写在 [钉钉企业助手](/zh/dingding-qiye-zhushou)。那一页的边界同样是：助手列名单，有权限的人自己处理。`,
      },
      {
        title: "有几个钉钉群，不等于该整套离开腾讯云",
        body: "公司的人和文件如果在企业微信和腾讯云，WorkBuddy 仍可能是更短的路。几个钉钉群不够作为整队迁移的理由。要不要换，看 [WorkBuddy 替代](/compare/workbuddy-tidai)。",
      },
      {
        title: "实施在哪做",
        body: `${human} ${remote} 选定一条逾期提醒之后，谁来把它做成每天有人看的名单，看 [企业陪跑计划](/enterprise)。`,
      },
    ],
    faqs: [
      { q: "钉钉审批能交给 WorkBuddy 自动通过吗？", a: "不能作为我们的交付。无论助手接在钉钉还是腾讯云，同意和拒绝都由有权限的人点。" },
      { q: "钉钉机器人和 WorkBuddy 是同一个东西吗？", a: "不是。群机器人是入口。WorkBuddy 是腾讯云的企业助手。入口能回话，还不等于一条审批提醒已经做完。" },
      { q: "哪边更便宜？", a: "这里不写这个比较。钉钉、腾讯云和喂龙虾的价格各看各的公示或合同。" },
      { q: "人不在深圳能上门吗？", a: "不能。上门目前只在深圳，其他城市走远程。" },
    ],
    related: [
      tidai,
      relatedCard("/zh/dingding-qiye-zhushou", "钉钉企业助手", "逾期名单和群消息从哪一件开始。", "平台"),
      relatedCard("/zh/qiyeweixin-shenpi-ai", "企业微信审批", "主场在企微时，审批提醒看这篇。", "平台"),
      compareHub,
      enterprise,
      remoteCard,
    ],
  }),
  page({
    category: "compare",
    slug: "workbuddy-vs-doubao",
    title: "WorkBuddy 和豆包不是同一类工具",
    h1: "用豆包换掉 WorkBuddy，换的是聊天窗，不是办公流程",
    description:
      "豆包适合问答和写作。WorkBuddy 是腾讯云里的企业助手。用聊天产品替换每日待办，人还是得自己复制消息和表格。两者的价格都不在这里编造。",
    definition:
      "WorkBuddy 和豆包不是同一类工具。豆包是通用对话产品。WorkBuddy 放在腾讯云的办公环境里。把豆包当成 WorkBuddy 的替代品，通常只是又打开一个聊天窗口。",
    audience: "想用豆包替换 WorkBuddy 的负责人",
    keywords: ["WorkBuddy 豆包", "豆包 替代 WorkBuddy", "WorkBuddy 和豆包的区别", "WorkBuddy 替代"],
    comparisonUsLabel: "豆包",
    comparisonTable: [
      { aspect: "它是什么", us: "通用对话产品，适合问答和写作", them: "腾讯云的企业助手", themLabel: "WorkBuddy" },
      { aspect: "每日待办", us: "人把消息和表格贴进去再问", them: "人已经在腾讯云里时，先评估它能不能接住这条流程" },
      { aspect: "能不能互相替代", us: "替代不了固定的办公流程", them: "也替代不了临时写作" },
      { aspect: "价格", us: "豆包的价格以字节跳动当时的说明为准", them: workbuddyPriceCell },
    ],
    bullets: ["聊天和办公流程分开", "豆包可以继续用来写作", "办公流程是否离开腾讯云另说", "不编两边价格"],
    workflows: ["先写你要换掉的那一件事", "如果只是问答，留下豆包", "如果是每天的待办，回到 WorkBuddy 或私有流程", "对外句子仍由人发"],
    sections: [
      {
        title: "部署进业务，和豆包能不能顶替 WorkBuddy，是两件事",
        body: `${cite} [WeClawd 和豆包](/compare/weclawd-vs-doubao) 比较的是部署到业务里的助手和通用聊天。豆包能不能顶替 WorkBuddy，看这里。`,
      },
      {
        title: "只想少开一个窗口时",
        body: "团队如果只是用 WorkBuddy 写文案、问问题，豆包或其他聊天产品可以继续承担这件事。团队如果用它收企微消息、出晨报、提醒跟进，换成豆包之后，这些仍要人复制。离开腾讯云之后还有哪些路，写在 [不用 WorkBuddy 用什么](/compare/buyong-workbuddy-yongshenme)。",
      },
      {
        title: "真要换的是流程时",
        body: `${human} 那是实施，不是再注册一个聊天账号。看 [WorkBuddy 替代](/compare/workbuddy-tidai) 和 [企业陪跑计划](/enterprise)。`,
      },
    ],
    faqs: [
      { q: "豆包企业版是不是 WorkBuddy 的替代？", a: "聊天和企业知识问答可以另选产品。每天从企微、表格和日历收待办，聊天产品仍然要人把资料贴进去。这不是同一件采购。" },
      { q: "可以两个都留着吗？", a: "可以。豆包继续用来问答和写作。腾讯云里仍然合适的办公继续用 WorkBuddy。" },
      { q: "Kimi、DeepSeek 呢？", a: "同样先分清是聊天还是每日流程。聊天产品放在一起看的说明在「聊天产品替不了 WorkBuddy」。" },
      { q: "哪边更便宜？", a: "这里没有这个数字。各自以官网和合同为准。" },
    ],
    related: [
      tidai,
      relatedCard("/compare/weclawd-vs-doubao", "喂龙虾和豆包", "部署进业务，和通用聊天，是另一个比较。", "对比"),
      relatedCard("/compare/liaotian-chanpin-tidai-workbuddy", "聊天产品替不了 WorkBuddy", "豆包、Kimi、DeepSeek 放在一起看。", "对比"),
      relatedCard("/compare/buyong-workbuddy-yongshenme", "不用 WorkBuddy 用什么", "先写离开的原因，再选路径。", "对比"),
      compareHub,
      zhHub,
    ],
  }),
  page({
    category: "compare",
    slug: "workbuddy-vs-qiyeweixin-bot",
    title: "WorkBuddy 和企业微信机器人怎么分",
    h1: "企业微信机器人是入口，WorkBuddy 是腾讯云里的企业助手",
    description:
      "企业微信里的机器人负责把消息收成草稿和提醒。WorkBuddy 是腾讯云的企业助手。两个可以同时留着，但不要同时给客户发同一句话。对外发送仍由人确认。",
    definition:
      "WorkBuddy 和企业微信机器人不是同一个产品。机器人是企业微信里的入口。WorkBuddy 是腾讯云提供的企业助手。入口能回话，还不等于晨报、审批提醒或询盘草稿已经做成固定流程。",
    audience: "已经有企微机器人，又在评估 WorkBuddy 的负责人",
    keywords: ["WorkBuddy 企业微信", "企微机器人 和 WorkBuddy", "企业微信 替代 WorkBuddy", "WorkBuddy 替代"],
    comparisonUsLabel: "企业微信机器人",
    comparisonTable: [
      { aspect: "它是什么", us: "企业微信里的入口", them: "腾讯云的企业助手", themLabel: "WorkBuddy" },
      { aspect: "能一起用吗", us: "可以，腾讯侧的办公和群里的草稿各做各的", them: "仍然合适的办公不必拆掉" },
      { aspect: "不该同时做的事", us: "两个机器人同时给客户发同一句话", them: "也不要把群聊历史默认交给模型" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: ["机器人是入口", "WorkBuddy 是腾讯云产品", "可以并行", "对外只留一个发送口"],
    workflows: ["先写群里要收的那一类消息", "草稿进待办", "人确认后再发", "腾讯云里的办公另评估"],
    sections: [
      {
        title: "先分清你买的是入口还是办公产品",
        body: `${cite} 企微里助手能做哪些事，已有文章在 [企业微信 AI 助手能做什么](/blog/wecom-ai-assistant-workflows)。还没选定运行时，看 [企业微信企业助手](/zh/qiyeweixin-qiye-zhushou)。只讨论办公机器人时，看 [企微机器人智能办公](/zh/qiwei-jiqiren-zhineng-bangong)。`,
      },
      {
        title: "有机器人，不等于已经用上 WorkBuddy",
        body: "群里有一个会回话的账号，只说明消息有了一个入口。WorkBuddy 评的是腾讯云办公能不能接住你的每日流程。两件事可以都做，也可以只做一件。",
      },
      {
        title: "对外只留一个口",
        body: `${human} 客户消息如果已经有人在企微里回，就不要再加一个自动回复。替代要不要发生，看 [WorkBuddy 替代](/compare/workbuddy-tidai)。`,
      },
    ],
    faqs: [
      { q: "上了 WorkBuddy 还要企微机器人吗？", a: "看消息在不在企业微信。在，机器人仍可能是入口。不在，就不要为了对称再装一个。" },
      { q: "机器人能读全部聊天吗？", a: "不能假设。能读到什么以企业微信当时的权限为准。读不到，这条流程就还没接上。" },
      { q: "这是 WorkBuddy 的替代品吗？", a: "不是。它是通道上的入口。要不要离开 WorkBuddy，是另一篇说明。" },
      { q: "价格怎么比？", a: "WorkBuddy 以腾讯云为准。喂龙虾的安装和陪跑以首页和陪跑页为准。这里不把两边减成一个单价。" },
    ],
    related: [
      tidai,
      relatedCard("/zh/qiyeweixin-qiye-zhushou", "企业微信企业助手", "还没选定运行时，从这里看。", "平台"),
      relatedCard("/zh/qiwei-jiqiren-zhineng-bangong", "企微机器人智能办公", "入口和流程不是同一件事。", "平台"),
      relatedCard("/blog/wecom-ai-assistant-workflows", "企微能做什么", "摘要、提醒和人工确认。", "文章"),
      compareHub,
      enterprise,
    ],
  }),
  page({
    category: "compare",
    slug: "liaotian-chanpin-tidai-workbuddy",
    title: "聊天产品替不了 WorkBuddy",
    h1: "豆包、Kimi、DeepSeek 可以回答问题，替不了 WorkBuddy 里的每日流程",
    description:
      "搜索 WorkBuddy 替代时，豆包、Kimi、DeepSeek、通义和文心常常被放进同一张表。它们是聊天产品。每日待办、权限和审核仍要另做。价格以各家官网为准。",
    definition:
      "聊天产品替不了 WorkBuddy，因为两边采购的不是同一件事。聊天产品回答当次问题。WorkBuddy 是腾讯云里的企业助手。用一个聊天账号替换每日办公流程，人还是要自己搬运消息和表格。",
    audience: "把 Kimi、DeepSeek 或豆包当成 WorkBuddy 替代品的负责人",
    keywords: ["聊天产品 替代 WorkBuddy", "Kimi 替代 WorkBuddy", "DeepSeek 替代 WorkBuddy", "WorkBuddy 替代"],
    comparisonUsLabel: "聊天产品",
    comparisonTable: [
      { aspect: "适合留下的事", us: "问答、写作、临时检索", them: "腾讯云里已经跑起来的办公", themLabel: "WorkBuddy" },
      { aspect: "替不了的事", us: "从企微、表格、日历收每日待办", them: "也替不了临时写一段文案" },
      { aspect: "已有的分开说明", us: "喂龙虾和豆包、Kimi、DeepSeek、通义、文心各有一篇", them: "产品定义见 WorkBuddy 是什么" },
      { aspect: "价格", us: "各家聊天产品的价格以各家官网为准", them: workbuddyPriceCell },
    ],
    bullets: ["先分聊天和每日流程", "五家聊天产品不要合成一个分数", "办公是否离开腾讯云另看", "不编任何一家的价格"],
    workflows: ["写下要换掉的那一件", "只是问答就留在聊天产品", "是每日流程就回到 WorkBuddy 或实施", "对外发送仍由人确认"],
    sections: [
      {
        title: "这五家不要打成一个总分",
        body: `${cite} 和喂龙虾怎么分，分别在 [豆包](/compare/weclawd-vs-doubao)、[Kimi](/compare/weclawd-vs-kimi)、[DeepSeek](/compare/weclawd-vs-deepseek)、[文心一言](/compare/weclawd-vs-wenxin) 和 [通义千问](/compare/weclawd-vs-tongyi)。那些篇回答的是部署和聊天。这篇只回答它们能不能顶替 WorkBuddy。`,
      },
      {
        title: "豆包和 WorkBuddy 还有一篇更窄的说明",
        body: "如果问题只是豆包，看 [WorkBuddy 和豆包](/compare/workbuddy-vs-doubao)。Kimi、DeepSeek、通义和文心没有必要再各开一篇「能不能替代 WorkBuddy」：结论相同，它们是聊天产品。",
      },
      {
        title: "离开的原因如果写得出来",
        body: `原因如果是数据落点或通道不在腾讯，看 [不用 WorkBuddy 用什么](/compare/buyong-workbuddy-yongshenme) 和 [WorkBuddy 替代](/compare/workbuddy-tidai)。${human}`,
      },
    ],
    faqs: [
      { q: "DeepSeek 更便宜，能不能换掉 WorkBuddy？", a: "价格以 DeepSeek 和腾讯云各自的公示为准，这里不减。更便宜的聊天，仍然是聊天。每日流程不会因为换了模型就自己跑起来。" },
      { q: "可以聊天用一家、办公留 WorkBuddy 吗？", a: "可以。这通常比整队替换更清楚。" },
      { q: "喂龙虾是第几个聊天产品吗？", a: "不是。喂龙虾做的是把一条流程做进你已经在用的工具。OpenClaw 只在你选定之后才部署。" },
      { q: "有没有一张打分表？", a: "没有。通道和数据落点一变，分数就变。先写要换掉的那一件事。" },
    ],
    related: [
      tidai,
      relatedCard("/compare/workbuddy-vs-doubao", "WorkBuddy 和豆包", "只比较这两边。", "对比"),
      relatedCard("/compare/buyong-workbuddy-yongshenme", "不用 WorkBuddy 用什么", "三种答案，先写原因。", "对比"),
      relatedCard("/zh/workbuddy-shi-shenme", "WorkBuddy 是什么", "先确认你要离开的产品是什么。", "说明"),
      compareHub,
      enterprise,
    ],
  }),
  page({
    category: "compare",
    slug: "workbuddy-vs-ziji-kaifa",
    title: "自建企业助手还是继续用 WorkBuddy",
    h1: "自己做企业助手之前，先问 WorkBuddy 是不是已经够用",
    description:
      "继续用 WorkBuddy，还是自己做一条企业助手，取决于人和数据在不在腾讯云，以及你有没有人维护权限。自己部署 OpenClaw 是后一步。这里不写工期和对方价格。",
    definition:
      "自建企业助手还是继续用 WorkBuddy，是两笔不同的决定。WorkBuddy 是腾讯云的现成产品。自建是你的人要维护权限、通道和故障。喂龙虾的陪跑是帮你把 1–2 个流程做完，不是替你成立一个研发部门。",
    audience: "准备自研企业助手，又还没决定要不要离开 WorkBuddy 的负责人",
    keywords: ["自建 企业助手 WorkBuddy", "WorkBuddy 替代 自研", "自己做 AI 助手", "WorkBuddy 替代"],
    comparisonUsLabel: "自己做或请人做完一条",
    comparisonTable: [
      { aspect: "继续用 WorkBuddy", us: "人和文件已在腾讯云，采购也认这个厂商", them: "这是腾讯云的现成产品", themLabel: "WorkBuddy" },
      { aspect: "自己做", us: "你有人持续看权限、通道改版和日志", them: "现成产品覆盖不了的那条流程，才值得另做" },
      { aspect: "请人把一条做完", us: "喂龙虾陪跑 1–2 个流程。OpenClaw 在你选定后才部署", them: "不因此变成必须替换 WorkBuddy" },
      { aspect: "价格", us: weclawdPriceCell, them: workbuddyPriceCell },
    ],
    bullets: ["够用就留下", "自建要有人值守", "陪跑不是第二个 SaaS", "不写工期和对方价格"],
    workflows: ["写出 WorkBuddy 盖不住的那一条", "确认有没有人维护", "只做这一条", "腾讯侧仍然合适的留下"],
    sections: [
      {
        title: "三选一，不要并成一句「我们自己做」",
        body: `${cite} 已经决定用 OpenClaw、只是在问谁来装，看 [自己部署还是托管](/compare/openclaw-diy-vs-tuoguan)。还没决定要不要离开 WorkBuddy，先留在这一篇。`,
      },
      {
        title: "英文站有一篇相近的自建说明",
        body: "[WeClawd vs Building In-house](/compare/weclawd-vs-building-in-house) 用英文讲实施和内部工程的差别。它不是本篇的译文。中文采购先回答：主场在不在腾讯云。",
      },
      {
        title: "自建盖不住的部分，也不要许诺成全公司",
        body: `${human} ${remote} 范围锁在 1–2 个流程时，看 [企业陪跑计划](/enterprise)。什么时候根本不该换，看 [WorkBuddy 替代](/compare/workbuddy-tidai)。`,
      },
    ],
    faqs: [
      { q: "自己做是不是一定比 WorkBuddy 更私有？", a: "不一定。私有指运行时、密钥和日志在谁的环境里。自己起一个项目，如果模型和日志仍在别的公有服务上，并不自动更私有。" },
      { q: "没有工程师能做吗？", a: "可以请人把一条流程做完。没有人在通道改版时看配置，就不要自己部署 OpenClaw。" },
      { q: "要先买服务器吗？", a: "不必为了讨论自建先买。先写清 WorkBuddy 哪一条盖不住。安装套餐以首页为准。" },
      { q: "上门吗？", a: "上门目前只在深圳。其他城市走远程。" },
    ],
    related: [
      tidai,
      relatedCard("/compare/openclaw-diy-vs-tuoguan", "自己部署还是托管", "已经选定 OpenClaw 之后再看这篇。", "对比"),
      relatedCard("/compare/weclawd-vs-building-in-house", "英文：自建对比", "英文说明，不是本篇的译文。", "对比"),
      relatedCard("/zh/qiye-zhushou-zenme-xuan", "企业助手怎么选", "聊天、腾讯云、私有运行时分五步。", "选型"),
      enterprise,
      remoteCard,
    ],
  }),
];

export const batch5ChinesePages: GeoPage[] = [
  page({
    category: "solutions",
    slug: "workbuddy-shihe-huodai",
    title: "WorkBuddy 适合货代吗",
    h1: "货代团队用 WorkBuddy 之前，先看询盘和运价在哪",
    description:
      "货代如果人和运价表都在腾讯云，可以先评估 WorkBuddy。询盘在企业微信或邮箱、报价必须由人确认时，流程看货代专页。上门目前只在深圳，其他城市走远程。",
    definition:
      "WorkBuddy 适合货代吗，取决于询盘、运价和内部群在不在腾讯云。在，就先评估这款腾讯云企业助手。报价、舱位和对外承诺仍由货代业务人员确认。已发布案例的时效只属于那一家公司。",
    audience: "在评估 WorkBuddy 的货代和国际物流负责人",
    keywords: ["WorkBuddy 货代", "WorkBuddy 国际物流", "WorkBuddy 替代 货代", "货代 AI 助手"],
    bullets: ["先看运价和询盘在哪", "报价仍由人确认", "案例数字留在案例页", "深圳以外走远程"],
    workflows: ["抽出询盘里的缺失字段", "运价待确认项列给内部", "对外报价由人发", "腾讯云里的办公可以留下"],
    sections: [
      {
        title: "和跨境电商那篇不是同一类客户",
        body: `${cite} 卖家的店铺、客服和广告看 [WorkBuddy 适合跨境电商吗](/zh/workbuddy-shihe-kuajing)。货代看的是询盘、运价和跟进。能力边界在 [货代 AI 助手](/zh/huodai-ai-zhushou)。`,
      },
      {
        title: "案例里的时效只属于那一家公司",
        body: "已经发布的报价流程在 [货代报价案例](/case/huodai-baojia-speed-to-lead)。那个结果只说明那一家物流公司，不能当成使用 WorkBuddy 或换一条路径之后的成绩。",
      },
      {
        title: "主场在飞书或企微时",
        body: `${human} 消息主要在企业微信，看 [企业微信货代](/zh/qiyeweixin-huodai-ai)。文档和群在飞书，看 [飞书货代](/zh/huodai-feishu-ai)。${remote}`,
      },
    ],
    faqs: [
      { q: "WorkBuddy 能自动给客户报价吗？", a: "不能作为交付。助手可以整理缺失字段和内部待确认项。价格、附加费和舱位由业务人员确认。" },
      { q: "货代一定要离开 WorkBuddy 吗？", a: "不一定。人和运价表已经在腾讯云，就先把它用起来。盖不住的那一条再单独做。" },
      { q: "有货代客户的排名或评分吗？", a: "这里不写未发布的客户名、评分和成交数字。" },
      { q: "港口城市能上门吗？", a: "不能。上门目前只在深圳。人在其他城市，包括港口城市，实施走远程。" },
    ],
    related: [
      tidai,
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "询盘、运价和跟进的总边界。", "货代"),
      relatedCard("/zh/workbuddy-shihe-kuajing", "WorkBuddy 适合跨境吗", "卖家和货代分开看。", "跨境"),
      relatedCard("/case/huodai-baojia-speed-to-lead", "货代报价案例", "数字只属于那一家公司。", "案例"),
      enterprise,
      shenzhen,
    ],
  }),
  page({
    category: "solutions",
    slug: "workbuddy-shihe-dulizhan",
    title: "WorkBuddy 适合独立站团队吗",
    h1: "独立站团队用 WorkBuddy 之前，先看邮件和订单在不在腾讯云",
    description:
      "独立站的邮件、订单和商品资料如果在腾讯云之外，WorkBuddy 不是默认的收件箱。客服草稿和运营总流程看独立站专页。价格以腾讯云和首页为准。",
    definition:
      "WorkBuddy 适合独立站团队吗，取决于邮件和订单落在哪。落在腾讯云里的内部协作，可以先评估 WorkBuddy。独立站收件箱里的分拣和回复草稿，是另一条流程，发出去之前由人确认。",
    audience: "用独立站卖货、同时在看 WorkBuddy 的负责人",
    keywords: ["WorkBuddy 独立站", "WorkBuddy 独立站客服", "独立站 替代 WorkBuddy", "WorkBuddy 替代"],
    bullets: ["先看邮件在不在腾讯云", "回复默认只出草稿", "不代建站", "深圳以外走远程"],
    workflows: ["收件箱分成待办", "退款和改价交给人", "商品资料不在这里许诺自动上架", "腾讯云内部办公可另留"],
    sections: [
      {
        title: "独立站运营和这篇各管一件事",
        body: `${cite} 店铺、内容和订单异常的总页是 [独立站运营 AI 助手](/zh/dulizhan-yunying-ai)。邮件怎么分拣，看 [独立站邮件客服](/zh/dulizhan-youxiang-kefu)。`,
      },
      {
        title: "邮件不在腾讯邮箱时",
        body: "Gmail 或其他独立站邮箱里的未回复，不会因为买了腾讯云办公就自动出现在 WorkBuddy 里。邮箱和日历怎么收成待办，看 [邮箱和日历](/zh/youxiang-rili-zhineng-bangong)。",
      },
      {
        title: "什么时候仍然该留着 WorkBuddy",
        body: `${human} 内部周会、制度问答和已经在腾讯云里的协作，可以继续用 WorkBuddy。要不要整站换掉，看 [WorkBuddy 替代](/compare/workbuddy-tidai)。${remote}`,
      },
    ],
    faqs: [
      { q: "WorkBuddy 能自动回复独立站客户吗？", a: "不能作为默认交付。先分拣，再把草稿交给客服。退款和改价由有权限的人确认。" },
      { q: "它能代建独立站吗？", a: "不能。建站、主题和支付配置不在这条流程里。" },
      { q: "和跨境总页重复吗？", a: "跨境总页写卖家的几类流程。这篇只回答独立站团队该不该把 WorkBuddy 当成收件箱。" },
      { q: "能上门到团队所在城市吗？", a: "上门目前只在深圳。其他城市走远程。" },
    ],
    related: [
      tidai,
      relatedCard("/zh/dulizhan-yunying-ai", "独立站运营", "店铺和订单异常的总页。", "跨境"),
      relatedCard("/zh/dulizhan-youxiang-kefu", "独立站邮件客服", "收件箱分拣和回复草稿。", "客服"),
      relatedCard("/zh/youxiang-rili-zhineng-bangong", "邮箱和日历", "邮件晨报和会前待办。", "办公"),
      enterprise,
      remoteCard,
    ],
  }),
  page({
    category: "solutions",
    slug: "workbuddy-shihe-kefu",
    title: "WorkBuddy 适合做客服草稿吗",
    h1: "客服草稿要不要放在 WorkBuddy，先看消息进了哪一个渠道",
    description:
      "客户消息已经在企业微信和腾讯云里时，可以先评估 WorkBuddy 做内部草稿。邮箱、亚马逊和独立站的回复另有专页。退款和对外发送由人确认。",
    definition:
      "WorkBuddy 适合做客服草稿吗，取决于客户消息在不在腾讯云能读到的范围里。在，就先评估它。不在，草稿流程做在消息实际出现的渠道上。退款、补发和承诺时效由人确认。",
    audience: "想把客服草稿放进 WorkBuddy 的客服主管",
    keywords: ["WorkBuddy 客服", "WorkBuddy 客服草稿", "客服 替代 WorkBuddy", "企业客服 AI"],
    bullets: ["先看消息在哪个渠道", "默认只出草稿", "退款由人处理", "深圳以外走远程"],
    workflows: ["未回复清单", "草稿停在待发", "退款升级给人", "腾讯云内的问答可以留下"],
    sections: [
      {
        title: "客服总页仍然是企业客服",
        body: `${cite} 不限行业的客服边界在 [企业客服 AI 助手](/zh/qiyefuwu-ai-zhushou)。跨境收件箱在 [跨境客服](/zh/kuajing-kefu-qiye-zhushou)。投诉要人接手时，看 [客诉升级](/zh/kehu-tousu-shengji)。`,
      },
      {
        title: "消息不在企微时，不要假设 WorkBuddy 看得到",
        body: "亚马逊买家消息进企微之后的草稿，看 [亚马逊企微客服](/zh/amazon-qiyeweixin-kefu)。独立站邮件看 [独立站邮件客服](/zh/dulizhan-youxiang-kefu)。看不到的渠道，就不能当成已经接上。",
      },
      {
        title: "草稿和自动回复",
        body: `${human} 内部知识问答如果已经在腾讯云里可用，可以继续用 WorkBuddy。对外句子另走审核。要不要因此换掉整个产品，看 [WorkBuddy 替代](/compare/workbuddy-tidai)。${remote}`,
      },
    ],
    faqs: [
      { q: "能自动给客户退款吗？", a: "不能。助手最多标出需要人处理的退款。操作由有权限的人完成。" },
      { q: "知识库问答算客服草稿吗？", a: "内部同事查制度，和给客户的回复不是同一条。给客户的句子默认停在草稿。" },
      { q: "必须上 OpenClaw 吗？", a: "不必须。先把未回复清单做出来。运行时看消息能不能在你授权的环境里读到。" },
      { q: "其他城市能上门吗？", a: "不能。上门目前只在深圳。" },
    ],
    related: [
      tidai,
      relatedCard("/zh/qiyefuwu-ai-zhushou", "企业客服 AI 助手", "客服总边界。", "客服"),
      relatedCard("/zh/kehu-tousu-shengji", "客诉升级", "必须人处理的投诉单独列出来。", "客服"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服", "多站点收件箱。", "跨境"),
      enterprise,
      zhHub,
    ],
  }),
  page({
    category: "solutions",
    slug: "workbuddy-youxiang-rili",
    title: "WorkBuddy 和邮箱日历怎么配合",
    h1: "邮箱和日历在腾讯云里，才先用 WorkBuddy 收晨报",
    description:
      "邮箱和日历如果已经在腾讯云的办公套件里，晨报可以先评估 WorkBuddy。Gmail 或其他外部邮箱里的未回复，看邮箱日历专页。发出去的信仍由人确认。",
    definition:
      "WorkBuddy 和邮箱日历怎么配合，取决于邮箱和日历在不在腾讯云能覆盖的范围。在里面，先评估 WorkBuddy。在外面，晨报和未回复清单做在邮件实际所在的地方。助手不自动发信，也不自动改日程。",
    audience: "想用 WorkBuddy 收邮件晨报和日程提醒的行政、运营",
    keywords: ["WorkBuddy 邮箱", "WorkBuddy 日历", "WorkBuddy 邮件助手", "WorkBuddy 替代"],
    bullets: ["先确认邮箱在哪", "不自动发信", "不自动改日程", "外部邮箱另看专页"],
    workflows: ["未回复清单", "今日会议", "待发草稿", "日程改动由人点"],
    sections: [
      {
        title: "晨报和未回复怎么验收",
        body: `${cite} 晨报、未回复和会前待办怎么验收，写在 [邮箱和日历上的智能办公](/zh/youxiang-rili-zhineng-bangong)。`,
      },
      {
        title: "外部邮箱不会自动出现在腾讯云里",
        body: "团队用 Gmail、独立站邮箱或其他不在腾讯办公套件里的邮箱时，先不要假设 WorkBuddy 能读到那些线程。以腾讯云当时的连接说明为准。读不到，晨报就还在邮箱那一侧。",
      },
      {
        title: "发信和改日程",
        body: `${human} 会议邀请和对外邮件默认停在待发。${remote} 两条都要做时，先做未回复清单，不要同一天改完全部日程规则。`,
      },
    ],
    faqs: [
      { q: "WorkBuddy 能自动回复邮件吗？", a: "不能作为默认交付。草稿放在待发位置，由当班的人发出。" },
      { q: "能自动接受会议吗？", a: "不能作为默认交付。日程改动由人点。" },
      { q: "腾讯企业邮一定已经接上了吗？", a: "以腾讯云当时的产品和你的合同为准。接上之前，先用邮箱里能看到的未回复做清单。" },
      { q: "人不在深圳呢？", a: "实施走远程。上门目前只在深圳。" },
    ],
    related: [
      tidai,
      relatedCard("/zh/youxiang-rili-zhineng-bangong", "邮箱和日历", "晨报和待办怎么验收。", "办公"),
      relatedCard("/zh/zhineng-bangong-ai", "智能办公", "邮件、日程和交接的定义。", "品类"),
      relatedCard("/integrations/gmail", "Gmail", "英文集成说明。", "集成"),
      enterprise,
      remoteCard,
    ],
  }),
  page({
    category: "integrations",
    slug: "whatsapp-qiye-zhushou",
    title: "WhatsApp 企业助手｜跨境消息只出草稿",
    h1: "WhatsApp 上的企业助手：先出草稿和提醒，发送仍由人完成",
    description:
      "跨境团队已经在用 WhatsApp 联系客户时，助手可以把未回复和缺失信息收成草稿。它不自动发送，也不代替 Telegram 或企业微信。上门目前只在深圳。",
    definition:
      "WhatsApp 企业助手是把客户已经授权读取的 WhatsApp 对话收成未回复清单和回复草稿。它是一条渠道上的流程。发送、报价和承诺由人完成。它不是 WorkBuddy，也不是另一个聊天室。",
    audience: "用 WhatsApp 跟海外客户沟通的跨境和外贸负责人",
    keywords: ["WhatsApp 企业助手", "WhatsApp 客服 草稿", "WhatsApp AI 助手", "跨境 WhatsApp"],
    bullets: ["只出草稿", "不自动发送", "和 Telegram、企微分开", "深圳以外走远程"],
    workflows: ["未回复清单", "缺失信息", "回复草稿", "人确认后自己发送"],
    sections: [
      {
        title: "和 Telegram、企业微信各是一条渠道",
        body: "Telegram 上的草稿和提醒看 [Telegram 企业助手](/zh/telegram-qiye-zhushou)。企业微信看 [企业微信企业助手](/zh/qiyeweixin-qiye-zhushou)。客户实际出现在哪一个应用，就只先做那一个。",
      },
      {
        title: "WorkBuddy 读不到的对话，不要算成已经接上",
        body: `${cite} WhatsApp 不在腾讯云办公套件里。要用这条渠道，就按客户已经开通的账号和当时的接口权限来做。WorkBuddy 的产品介绍不等于 WhatsApp 已经连通。`,
      },
      {
        title: "发送和报价",
        body: `${human} 跨境客服的升级规则在 [跨境客服企业助手](/zh/kuajing-kefu-qiye-zhushou)。${remote}`,
      },
    ],
    faqs: [
      { q: "会自动给 WhatsApp 客户发消息吗？", a: "默认不会。助手列出未回复和草稿，由当班的人发送。" },
      { q: "需要单独买 WhatsApp 的官方接口吗？", a: "以你已经在用的账号和 WhatsApp 当时的规则为准。我们不在这里写接口价格，也不保证每个个人号都能接入。" },
      { q: "能和 WorkBuddy 互相替代吗？", a: "不能。一个是腾讯云里的企业助手，一个是 WhatsApp 这条渠道上的草稿流程。" },
      { q: "海外团队能上门吗？", a: "不能。上门目前只在深圳。其他地方走远程，并且先确认账号能在远程共享里看得到。" },
    ],
    related: [
      relatedCard("/zh/telegram-qiye-zhushou", "Telegram 企业助手", "另一条跨境渠道。", "平台"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服", "多站点草稿和升级。", "跨境"),
      tidai,
      relatedCard("/zh/kuajing-yuancheng-ai-bushu", "跨境远程部署", "时差和双语交接。", "跨境"),
      enterprise,
      zhHub,
    ],
  }),
  page({
    category: "solutions",
    slug: "waimao-gendan-ai",
    title: "外贸跟单助手｜进度和单证先给人看",
    h1: "外贸跟单：把订单进度和缺的单证列出来，不代替业务员承诺交期",
    description:
      "外贸跟单助手整理已有订单的进度、缺失单证和该谁回复。它不开发新客户，也不代替货代报价。发给买家的交期和异常说明由人确认。上门目前只在深圳，其他城市走远程。",
    definition:
      "外贸跟单助手处理的是已经存在的订单：生产或备货进度、缺失的单证、逾期未回的内部询问。它不是开发信，也不是货代的运价简报。对买家的交期承诺由人发出。",
    audience: "手里有在执行订单的外贸跟单和业务负责人",
    keywords: ["外贸跟单 AI", "跟单 助手", "外贸 订单 进度", "单证 缺失 提醒"],
    bullets: ["只跟已有订单", "缺单证先列出", "交期由人确认", "深圳以外走远程"],
    workflows: ["订单进度摘要", "缺失单证", "内部逾期未回", "对外说明停在草稿"],
    sections: [
      {
        title: "和开发信、货代报价分开",
        body: "还没有下单的客户，看 [跨境销售跟进](/zh/kuajing-xiaoshou-genjin) 和 [货代客户开发](/zh/huodai-kehu-kaifa-ai)。运价和询盘看 [货代 AI 助手](/zh/huodai-ai-zhushou)。跟单从订单已经存在开始。",
      },
      {
        title: "交期和异常不要自动发出",
        body: `${human} 助手可以列出「哪张单还缺、哪条内部询问过期了」。能不能对买家说何时交货，由负责这张单的人决定。`,
      },
      {
        title: "单证字段和报关提交不是同一件事",
        body: `发票、装箱单、合同里缺哪些字段，可以先做清单。向海关申报不是这条流程。报关资料的缺项看 [报关资料整理](/zh/baoguan-danju-zhengli)。${remote}`,
      },
    ],
    faqs: [
      { q: "能保证交期缩短吗？", a: "不能。这里没有交期数字。助手只把进度和缺项放到当班的人面前。" },
      { q: "能自动发给海外买家吗？", a: "默认不能。草稿由跟单或业务员确认后再发。" },
      { q: "和货代是同一篇吗？", a: "不是。货代页给物流公司整理询盘和运价。这篇给已经有订单的外贸团队跟进度。" },
      { q: "工厂不在深圳能上门吗？", a: "不能。上门目前只在深圳，其他地方走远程。" },
    ],
    related: [
      relatedCard("/zh/kuajing-xiaoshou-genjin", "跨境销售跟进", "还在开发阶段的客户。", "跨境"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "询盘和运价。", "货代"),
      relatedCard("/zh/baoguan-danju-zhengli", "报关资料整理", "缺哪些字段，不代替申报。", "单证"),
      zhHub,
      enterprise,
      remoteCard,
    ],
  }),
  page({
    category: "solutions",
    slug: "caigou-xunjia-ai",
    title: "采购询价助手｜比价表留给人确认",
    h1: "采购询价：把已经收到的报价收成表，下单仍由采购决定",
    description:
      "采购询价助手整理供应商已经发来的价格、交期和缺失条件，做成内部比价草稿。它不代替谈判，也不自动下单。货代运价看货代专页。上门目前只在深圳，其他城市走远程。",
    definition:
      "采购询价助手服务的是采购已经收到的报价：品名、数量、单价、币种、交期和还缺的条款。它把这些收成一张给人看的表。选哪家、下不下单，由采购决定。",
    audience: "每天在比供应商报价的采购和运营",
    keywords: ["采购询价 AI", "供应商 报价 整理", "比价 助手", "采购 AI 助手"],
    bullets: ["只用已经收到的报价", "缺条件要标出来", "不下自动订单", "不编供应商价格"],
    workflows: ["抽出报价里的条件", "标出缺失项", "内部比价草稿", "采购自己决定"],
    sections: [
      {
        title: "和货代运价、财务报销分开",
        body: "海运空运运价看 [每日运价整理](/zh/meiri-yunjia-zhengli-ai)。发票和报销看 [财务报销 AI 助手](/zh/caiwu-baoxiao-ai-zhushou)。采购这篇只处理供应商报价。",
      },
      {
        title: "表里不出现我们编的价格",
        body: "单价只来自供应商已经发给你的邮件、表格或企微。缺单价就标缺失，不用模型补一个看起来合理的数字。",
      },
      {
        title: "下单和付款",
        body: `${human} ${remote} 比价草稿做好之后，采购在自己的系统里下单。`,
      },
    ],
    faqs: [
      { q: "能自动选最低价供应商吗？", a: "不能作为交付。最低价不一定满足交期、账期和质量条款。人来选。" },
      { q: "能替我们跟供应商砍价吗？", a: "不能自动谈。助手最多按你写好的问题列出还缺什么。对外语句由采购发出。" },
      { q: "有节省比例吗？", a: "没有。这里不写未统计的节省数字。" },
      { q: "工厂在外地能上门收集报价吗？", a: "不能。报价从你已经授权的邮箱、表格或企微里读。上门目前只在深圳。" },
    ],
    related: [
      relatedCard("/zh/meiri-yunjia-zhengli-ai", "每日运价整理", "货代的海运空运运价。", "货代"),
      relatedCard("/zh/caiwu-baoxiao-ai-zhushou", "财务报销", "发票和付款提醒。", "财务"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "下单和付款留在人这里。", "边界"),
      zhHub,
      enterprise,
      remoteCard,
    ],
  }),
  page({
    category: "integrations",
    slug: "qiyeweixin-shenpi-ai",
    title: "企业微信审批助手｜逾期项由人处理",
    h1: "企业微信里的审批提醒：每天一份逾期名单，同意或拒绝由人点",
    description:
      "企业微信审批助手把逾期未处理的审批列成名单，交给有权限的人。它不自动通过，也不代替钉钉上的审批。同意或拒绝仍在企微里完成。上门目前只在深圳。",
    definition:
      "企业微信审批助手是一条提醒：哪些审批过了你们自己定的时限还没有人处理。同意、拒绝和转交仍在企业微信里由有权限的人完成。它不改变公司的审批制度。",
    audience: "审批堆在企业微信里的行政和业务负责人",
    keywords: ["企业微信 审批 AI", "企微 审批 提醒", "审批 逾期 助手", "企业微信 待办"],
    bullets: ["只列逾期", "不能代签", "制度仍在企微", "深圳以外走远程"],
    workflows: ["按你们定的时限列名单", "负责人自己点", "转交仍由人操作", "不扩大到自动通过"],
    sections: [
      {
        title: "和钉钉审批、企微机器人分开",
        body: "主场在钉钉，看 [钉钉企业助手](/zh/dingding-qiye-zhushou)。企微里的一般消息和待办，看 [企业微信企业助手](/zh/qiyeweixin-qiye-zhushou)。这篇只做审批逾期名单。",
      },
      {
        title: "WorkBuddy 如果已经能提醒，就先用它",
        body: `${cite} 腾讯云里如果已经有你能用的审批提醒，先用那条。这篇是逾期名单仍然要人每天对的时候，怎么把它收成一件可以验收的事。`,
      },
      {
        title: "代签不在范围内",
        body: `${human} 付款类审批同样不自动通过。${remote}`,
      },
    ],
    faqs: [
      { q: "能设置自动通过吗？", a: "不能作为交付。助手只列出过了时限还没人处理的项。" },
      { q: "能读到全部历史审批吗？", a: "以企业微信当时给你的权限为准。权限不够，名单就只包含读得到的部分。" },
      { q: "和行政人事页是同一篇吗？", a: "不是。行政人事页还包括日程、招聘和入职。审批逾期只在这里。" },
      { q: "外地公司能上门整理审批吗？", a: "不能。远程把名单做到负责人每天能打开。上门目前只在深圳。" },
    ],
    related: [
      relatedCard("/zh/qiyeweixin-qiye-zhushou", "企业微信企业助手", "消息和待办的总页。", "平台"),
      relatedCard("/zh/dingding-qiye-zhushou", "钉钉企业助手", "审批在钉钉里时看这篇。", "平台"),
      relatedCard("/compare/workbuddy-vs-dingtalk", "WorkBuddy 和钉钉", "两套协作软件怎么分。", "对比"),
      relatedCard("/zh/xingzheng-renshi-ai-zhushou", "行政人事", "日程、招聘和入职。", "行政"),
      enterprise,
      zhHub,
    ],
  }),
  page({
    category: "solutions",
    slug: "kucun-yichang-tixing",
    title: "库存异常提醒｜只列缺口，不自动下单",
    h1: "库存异常：把低于你们自己阈值的货列出来，补货由人决定",
    description:
      "库存异常提醒根据你已有的库存表，列出低于自定阈值或长期未动的商品。它不自动采购，也不报销售额。补货和调拨由仓库或运营确认。上门目前只在深圳。",
    definition:
      "库存异常提醒是一张每日或每班的缺口名单：哪些 SKU 低于你们写好的数量，哪些长期没有出库记录。它不连接成自动采购，也不预测销量。",
    audience: "用表格或店铺后台看库存的运营和仓库负责人",
    keywords: ["库存异常 AI", "库存 提醒 助手", "缺货 待办", "补货 草稿"],
    bullets: ["阈值由你们自己定", "不自动下单", "不写销量预测", "深圳以外走远程"],
    workflows: ["读已有库存表", "列出低于阈值的项", "标出长期未动", "人决定补货或调拨"],
    sections: [
      {
        title: "和店铺运营总页分开",
        body: "商品、内容和订单异常的总页是 [电商运营 AI 助手](/zh/dianshang-yunying-ai-zhushou)。跨境卖家的总流程在 [跨境电商企业助手](/zh/kuajing-qiye-zhushou)。库存这篇只做异常名单。",
      },
      {
        title: "表里没有的数字，不会被补上",
        body: "库存数量以你授权的表格或后台导出为准。导出里是空的，就标成缺失，不用模型填一个估计库存。",
      },
      {
        title: "补货单仍然由人发",
        body: `${human} 要把缺口交给采购去询价，看 [采购询价助手](/zh/caigou-xunjia-ai)。${remote}`,
      },
    ],
    faqs: [
      { q: "能自动向供应商下补货单吗？", a: "不能。名单交给人。采购决定问哪一家、下不下单。" },
      { q: "能预测下一周销量吗？", a: "不能作为这篇的交付。这里没有销量模型，也没有历史准确率。" },
      { q: "支持哪些店铺后台？", a: "先从你已经能导出的表格做起。某个后台能不能直接读，以当时的权限为准，不在这里列一份保证清单。" },
      { q: "仓库不在深圳能上门盘点吗？", a: "不能。我们不派人盘点。上门服务目前只在深圳，而且也不包含仓库盘点。" },
    ],
    related: [
      relatedCard("/zh/dianshang-yunying-ai-zhushou", "电商运营", "店铺运营的总页。", "电商"),
      relatedCard("/zh/caigou-xunjia-ai", "采购询价", "缺口要询价时再看。", "采购"),
      relatedCard("/zh/kuajing-qiye-zhushou", "跨境电商企业助手", "卖家的总流程。", "跨境"),
      zhHub,
      enterprise,
      remoteCard,
    ],
  }),
  page({
    category: "solutions",
    slug: "jianli-chusai-ai",
    title: "简历初筛助手｜名单给人，不发 offer",
    h1: "简历初筛：按你们写好的条件排序，面试和 offer 由人决定",
    description:
      "简历初筛助手按你们已经写明的条件，把收到的简历分成建议看和不看的名单。它不自动发面试邀请或 offer，也不承诺筛选是否公平。上门目前只在深圳。",
    definition:
      "简历初筛助手处理的是公司已经收到的简历。条件由招聘负责人事先写好。助手按这些条件整理名单。约面试、谈薪和发 offer 由人完成。",
    audience: "每周要看一叠简历的招聘负责人和部门主管",
    keywords: ["简历初筛 AI", "招聘 简历 助手", "简历 筛选 草稿", "人事 AI 助手"],
    bullets: ["条件事先写好", "不自动发 offer", "不写公平性分数", "深圳以外走远程"],
    workflows: ["读已收到的简历", "按书面条件分类", "标出信息缺失", "人决定是否约面"],
    sections: [
      {
        title: "行政人事页仍然是总页",
        body: "日程、入职和制度问答在 [行政人事 AI 助手](/zh/xingzheng-renshi-ai-zhushou)。这篇只做简历名单。",
      },
      {
        title: "条件没写清，就不要让助手猜",
        body: "年限、地点、证书和必须会的工具，由招聘负责人写成可以核对的句子。简历里没写的经历，标成未知，不用模型补一段经历。",
      },
      {
        title: "邀请和 offer",
        body: `${human} 面试邀请也默认由人发出。${remote}`,
      },
    ],
    faqs: [
      { q: "能自动拒绝候选人或发 offer 吗？", a: "不能。名单交给招聘负责人。拒绝、约面和 offer 由人操作。" },
      { q: "能保证筛选没有偏见吗？", a: "不能用一个分数保证。助手只按你们写在纸上的条件整理，条件本身是否合适由人负责。" },
      { q: "简历从哪来？", a: "从你们已经在用的邮箱或表格来。我们不提供候选人名单，也不从公开网络抓取简历。" },
      { q: "公司不在深圳能上门筛简历吗？", a: "不能。远程看你们授权的文件。上门目前只在深圳。" },
    ],
    related: [
      relatedCard("/zh/xingzheng-renshi-ai-zhushou", "行政人事", "日程、招聘、入职和制度问答。", "行政"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "对外邀请留在人这里。", "边界"),
      zhHub,
      enterprise,
      remoteCard,
      compareHub,
    ],
  }),
  page({
    category: "solutions",
    slug: "kehu-tousu-shengji",
    title: "客诉升级助手｜先标出必须人处理的投诉",
    h1: "客诉升级：把要人接手的投诉单独列出来，不自动道歉或退款",
    description:
      "客诉升级助手从已有的客服消息里标出涉及退款、超时和重复投诉的项，交给主管。它不自动向客户道歉或退款。普通咨询仍看客服总页。上门目前只在深圳。",
    definition:
      "客诉升级助手只做一件事：按你们写好的规则，把必须人处理的投诉从普通咨询里分出来。退款、补偿和对外致歉由主管确认后发出。",
    audience: "投诉和质量问题需要主管接手的客服负责人",
    keywords: ["客诉 升级 AI", "投诉 草稿 助手", "退款 升级 提醒", "客服 投诉"],
    bullets: ["只标升级项", "不自动退款", "不自动道歉", "普通咨询看客服总页"],
    workflows: ["按书面规则标出投诉", "重复投诉单独列出", "退款交给有权限的人", "对外回复停在草稿"],
    sections: [
      {
        title: "和客服总页的分工",
        body: "日常未回复和一般草稿在 [企业客服 AI 助手](/zh/qiyefuwu-ai-zhushou)。跨境站点看 [跨境客服](/zh/kuajing-kefu-qiye-zhushou)。这篇只处理已经需要升级的投诉。",
      },
      {
        title: "规则由主管写，不由模型现编",
        body: "什么算超时、什么算重复、什么金额以上必须主管看，用你们自己的制度。制度里没有的情形，放进「请人判断」，不要生成一段致歉。",
      },
      {
        title: "退款和致歉",
        body: `${human} 审核边界的定义在 [人工审核](/zh/rengong-shenhe)。${remote}`,
      },
    ],
    faqs: [
      { q: "能自动向客户道歉或承诺补偿吗？", a: "不能。草稿可以列出事实，句子由主管确认后再发。" },
      { q: "能直接退款吗？", a: "不能。退款由有权限的人在你们自己的系统里操作。" },
      { q: "有投诉处理时效的统计吗？", a: "这里不写未在你自己系统里出现的时效和满意度。" },
      { q: "客服团队不在深圳能上门吗？", a: "不能。上门目前只在深圳。其他城市走远程。" },
    ],
    related: [
      relatedCard("/zh/qiyefuwu-ai-zhushou", "企业客服", "普通咨询和草稿。", "客服"),
      relatedCard("/zh/workbuddy-shihe-kefu", "WorkBuddy 适合做客服草稿吗", "消息如果在腾讯云里，先看这篇。", "对比"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "退款和对外句子的边界。", "边界"),
      relatedCard("/zh/kuajing-kefu-qiye-zhushou", "跨境客服", "多站点收件箱。", "跨境"),
      enterprise,
      zhHub,
    ],
  }),
  page({
    category: "solutions",
    slug: "baoguan-danju-zhengli",
    title: "报关资料整理｜缺什么由人补，不代替报关",
    h1: "报关资料：列出缺的字段和附件，申报仍由有资质的人提交",
    description:
      "报关资料整理把发票、装箱单和合同里缺的字段、不一致的件数和缺失附件列成清单。它不向海关申报，也不代替报关行。缺项由人补齐。上门目前只在深圳。",
    definition:
      "报关资料整理是给已经在准备出口文件的团队一张缺项清单。品名、件数、重量、金额和附件对得上对不上，从你们提供的文件里提取。向海关提交申报不在这条流程里。",
    audience: "自己准备出口文件、再交给报关行或持证同事的外贸和货代单证",
    keywords: ["报关 单据 AI", "报关资料 整理", "装箱单 发票 核对", "单证 缺失"],
    bullets: ["只列缺项和不符", "不提交海关", "不代替报关行", "数字来自你提供的文件"],
    workflows: ["抽出已有字段", "标出空白和不一致", "列出缺的附件", "人补齐后再交报关"],
    sections: [
      {
        title: "和货代报价、跟单分开",
        body: "询盘和运价在 [货代 AI 助手](/zh/huodai-ai-zhushou)。订单进度在 [外贸跟单助手](/zh/waimao-gendan-ai)。这篇从文件已经到手、准备交给报关开始。",
      },
      {
        title: "文件里没有的内容不会被编出来",
        body: "HS 编码、申报要素和金额以你提供的文件和你们报关同事的判断为准。文件是空白的，清单里就写缺失，不用模型补一个编码。",
      },
      {
        title: "提交申报的人不变",
        body: `${human} 我们不作为报关行提交申报。${remote}`,
      },
    ],
    faqs: [
      { q: "能代替报关行吗？", a: "不能。助手只整理缺项。申报由有资质的人或你们的报关行提交。" },
      { q: "能自动填 HS 编码吗？", a: "不能作为交付。编码由负责报关的人确定。文件里没写的，就标成缺失。" },
      { q: "和货代案例的时效有关吗？", a: "无关。那个案例是一家公司的报价响应，不是报关时长。" },
      { q: "口岸城市能上门收文件吗？", a: "不能。文件从你授权的邮箱或网盘读取。上门目前只在深圳。" },
    ],
    related: [
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "询盘和运价。", "货代"),
      relatedCard("/zh/waimao-gendan-ai", "外贸跟单", "订单进度和缺的单证。", "外贸"),
      relatedCard("/zh/rengong-shenhe", "人工审核", "对外提交留在有资质的人。", "边界"),
      zhHub,
      enterprise,
      shenzhen,
    ],
  }),
];
