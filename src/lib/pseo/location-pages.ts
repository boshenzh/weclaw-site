import type { GeoPage } from "@/lib/geo-pages";
import { batch4LocationPages } from "@/lib/pseo/batch4-pages";
import { relatedCard, withPseoShell } from "@/lib/pseo/shell";

/**
 * Where the work happens. On-site is Shenzhen only.
 * Remote is the default national path for install packages.
 * The enterprise bootcamp prefers on-site and can be remote at 5–7 days.
 */
export const pseoLocationPages: GeoPage[] = [
  withPseoShell({
    category: "solutions",
    slug: "shenzhen-qiye-zhushou-bushu",
    title: "深圳企业助手部署｜上门仅深圳，范围仍是 1–2 个流程",
    h1: "深圳企业助手部署：可以上门，但三天只做完约定的那两条流程",
    description:
      "上门部署目前只在深圳。喂龙虾的企业陪跑是工程师进场，把企业助手做进真实工具。OpenClaw 在客户选定后部署。其他城市走远程，不把上门写成全国服务。",
    definition:
      "深圳企业助手部署指喂龙虾在深圳提供上门实施：摸清 1–2 个工作流，把助手接到客户授权的通道，并留下审核规则。它不是当天替换整家公司，也不是只安装一个聊天软件。",
    audience: "人在深圳、希望工程师上门的企业负责人",
    keywords: ["深圳 企业助手 部署", "深圳 OpenClaw 上门", "深圳 AI 部署", "企业陪跑 深圳", "上门 AI 助手"],
    bullets: [
      "上门服务目前仅限深圳",
      "陪跑默认线下，远程不是更便宜的缩短版",
      "安装套餐多数仍是远程完成",
      "系统做完留在客户侧",
    ],
    workflows: ["确认人在深圳", "圈定 1–2 个流程", "现场权限和数据边界", "当天或三天内的验收", "30 天答疑按陪跑约定"],
    sections: [
      {
        title: "深圳上门指哪一种单",
        body: "首页的个人部署和云托管，通常是远程安装，不因为你在深圳就自动变成上门。上门对应的是 [企业陪跑计划](/enterprise)：1–2 名工程师进场，默认 3 天，把事先说好的 1–2 个工作流做完。适合货代、跨境、律所和其他流程已经乱在微信、飞书、邮件、表格里的团队。简单场景陪跑约 10–30 万，复杂场景约 30–80 万，以陪跑页为准。",
        items: [
          "人在深圳且需要面对面访谈：走陪跑上门",
          "只是把 OpenClaw 装上：远程套餐就够，不必占用上门档期",
          "其他城市不要约上门",
        ],
      },
      {
        title: "进场三天实际发生什么",
        body: "第一天把最痛的流程和验收数字写下来，并划定数据能接到哪。第二天把助手接到微信、飞书、邮件或你们已经在用的表，客户选定 OpenClaw 就部署 OpenClaw，选定别的可落地框架就按那个做。第三天上线这一两条，交给当班的人，而不是只给老板看演示。做不到全公司、做不到无人报价。货代若要的是询盘和运价，直接用已有的 [货代案例](/case/huodai-baojia-speed-to-lead) 和 [货代 AI 助手](/zh/huodai-ai-zhushou) 作为范围参考，不要在上门项目里临时加十个部门。",
      },
      {
        title: "不在深圳就不要走这一页",
        body: "全国主路径是 [远程部署企业助手](/zh/yuancheng-qiye-zhushou)。企业陪跑也可以远程，但面对面效率更高，远程版本通常要拉到 5–7 天，整体不省时间也不省钱。我们更建议能到深圳现场的客户用上门；不能到现场的，把范围缩到远程也能验收的一条流程。",
      },
    ],
    faqs: [
      {
        q: "深圳以外能上门吗？",
        a: "目前不能。上门只在深圳。其他城市用远程部署。不要以「先签约再看能不能飞」来约。",
      },
      {
        q: "上门是否包含 OpenClaw？",
        a: "只有客户选定 OpenClaw 时，现场才部署它。陪跑本身不强制这个运行时。腾讯云上已经够用的办公，我们会建议继续用 WorkBuddy，不上门硬做一套。",
      },
      {
        q: "三天结束后系统是谁的？",
        a: "按陪跑约定，调好的系统留在客户侧。30 天答疑在陪跑页写明。安装套餐的 14 天支持不要和这 30 天混用。",
      },
      {
        q: "只想让工程师来公司看一看？",
        a: "可以预约咨询，先远程把流程说清楚。没有真实业务问题、或不愿意让助手碰到真实工具的团队，不适合进场。",
      },
    ],
    related: [
      relatedCard("/enterprise", "企业陪跑计划", "3 天线下的范围、价格区间和做不到的事。", "服务"),
      relatedCard("/zh/yuancheng-qiye-zhushou", "远程部署企业助手", "不在深圳，或只需安装时，走远程。", "服务"),
      relatedCard("/zh/qiye-zhushou", "企业助手", "上门之前，先确定要的是执行助手不是聊天窗。", "品类"),
      relatedCard("/case/huodai-baojia-speed-to-lead", "货代报价案例", "深圳货代的已有结果，只说明那一个流程。", "案例"),
      relatedCard("/zh/qiye-ai-zhushou-siyou-bushu", "企业 AI 助手私有部署", "上门之前先写清数据落在哪。", "落地"),
      relatedCard("/compare/workbuddy-vs-weclawd", "WorkBuddy vs 喂龙虾", "腾讯栈开箱就不必为了上门改运行时。", "对比"),
    ],
  }),
  withPseoShell({
    category: "solutions",
    slug: "yuancheng-qiye-zhushou",
    title: "远程部署企业助手｜全国主路径，上门不在此页承诺",
    h1: "远程部署企业助手：全国都可以做安装，陪跑远程会更长",
    description:
      "远程是喂龙虾的全国主路径。OpenClaw 安装和托管可以远程完成。企业陪跑默认希望线下；远程陪跑通常 5–7 天，不比深圳上门更便宜。上门仅深圳。",
    definition:
      "远程部署企业助手指通过远程会议完成权限、安装和一条流程的验收，工程师不到客户办公室。它是除深圳以外的默认方式，也是深圳客户只需要安装时的方式。",
    audience: "人不在深圳、或只需要远程安装的企业负责人",
    keywords: ["远程部署 企业助手", "企业助手 远程", "OpenClaw 远程部署", "全国 AI 部署", "企业助手 托管"],
    bullets: [
      "安装类套餐以远程为主，不限深圳",
      "上门只在深圳，不要从远程页推断全国上门",
      "远程陪跑通常更长，不是折扣版",
      "框架仍由客户选，OpenClaw 不是强制",
    ],
    workflows: ["远程需求评估", "权限共享", "安装与连通", "一条草稿流程验收", "支持期内改边界"],
    sections: [
      {
        title: "远程能做完的，和做不完的",
        body: "能做完的是 OpenClaw 或约定运行时的安装、邮件和日历一类基础集成、以及事先写清楚的少量工作流。首页写明个人部署是远程安装，云托管当天完成的是部署而不是全公司上线。做不完的是替你访谈所有部门、在没有管理员的情况下接通企微、以及无人审核的对外发送。",
        items: [
          "20–45 分钟量级的需求评估后安排安装，具体时段以预约为准",
          "飞书快速连接包不含工作流整合",
          "持续值守不是安装费里的永久条款",
        ],
      },
      {
        title: "陪跑如果改成远程",
        body: "[企业陪跑计划](/enterprise) 默认工程师到现场，因为第一天要面对面把流程问清。远程可以做，但通常要从 3 天拉到 5–7 天，费用不因此下降。人在深圳又确实需要进场的，走 [深圳企业助手部署](/zh/shenzhen-qiye-zhushou-bushu)。人不在深圳，就把范围缩到远程屏幕共享能验收的一条，不要按上门的密度排期。",
      },
      {
        title: "远程也不改变选型",
        body: "远程只说明人不到现场。该不该离开腾讯云、要不要 OpenClaw，仍看工具栈和数据落点。腾讯生态里开箱办公，继续用 WorkBuddy，不必为了「远程部署」这个词再装一套。选型步骤在 [企业助手怎么选](/zh/qiye-zhushou-zenme-xuan)。货代流程不要在远程安装里临时加进去，用 [货代 AI 助手](/zh/huodai-ai-zhushou)。跨境团队的时差和双语交接另写在 [跨境团队远程部署](/zh/kuajing-yuancheng-ai-bushu)，不要和本页收成一篇。",
      },
    ],
    faqs: [
      {
        q: "远程是否覆盖全国？",
        a: "安装和远程陪跑按预约进行，不限深圳。上门不到全国。海外团队若时差和权限允许，也可以远程，但要先确认通道账号能在远程共享。",
      },
      {
        q: "远程部署是否更便宜？",
        a: "安装套餐本来就是远程价，写在首页。企业陪跑改成远程并不降价，而且通常更长。不要把两种订单比成「远程就打折」。",
      },
      {
        q: "需要把电脑密码交给你们吗？",
        a: "不需要把个人密码发在聊天记录里。远程安装使用当次会话的屏幕共享或客户自己输入的授权。密钥和权限按该次部署记录，做完要能回收。",
      },
      {
        q: "远程能否保证当天全员会用？",
        a: "不能。当天指约定安装完成。全员会用要靠一条写清楚的流程和当班的人试用，那是陪跑的验收，不是安装完成的同义词。",
      },
    ],
    related: [
      relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门部署", "只有人在深圳且需要进场时才走这篇。", "服务"),
      relatedCard("/enterprise", "企业陪跑计划", "远程陪跑的天数和价格预期以这一页为准。", "服务"),
      relatedCard("/zh/siyou-ai-zhushou-tuoguan", "私有 AI 助手托管", "装完之后谁值守。", "落地"),
      relatedCard("/compare/openclaw-diy-vs-tuoguan", "自己部署 vs 托管", "远程安装仍然可以自己做。", "对比"),
      relatedCard("/zh/qiye-zhushou-zenme-xuan", "企业助手怎么选", "远程之前先决定要不要自持运行时。", "选型"),
      relatedCard("/zh/huodai-ai-zhushou", "货代 AI 助手", "物流流程用专页，不塞进远程安装。", "已有页面"),
    ],
  }),
  ...batch4LocationPages,
];