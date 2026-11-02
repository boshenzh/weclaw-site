import type { GeoPage } from "@/lib/geo-pages";
import {
  WORKBUDDY_ENTERPRISE_PRODUCT,
  relatedCard,
  withPseoShell,
} from "@/lib/pseo/shell";

/** Small-team private / local WorkBuddy pages. No city pages. */
const UPDATED = "2026-11-02";

const tiers = `腾讯云 [WorkBuddy Enterprise 产品页](${WORKBUDDY_ENTERPRISE_PRODUCT})公开列出三档，下面只写该页上的门槛和部署形态，不转抄单价，也不补该页没写的价格。旗舰版：无需自建，共享网络、多租户逻辑隔离，1 席位起。专享版：云端专属资源池，专属网络（VPC），100 席位起。企业私有化版：自备算力资源与模型服务，企业内网，300 席位起；该页还写了数据不出域。旗舰版和专享版该页有按人按月的标价，企业私有化版该页没有标价。席位和标价以该页当时显示为准。`;
const human = "对外发送、报价、退款、改价和付款由人确认。";
const remote = "上门目前只在深圳。人在其他城市，实施走远程。";

function page(entry: GeoPage): GeoPage {
  return withPseoShell({ ...entry, updatedAt: UPDATED });
}

const tidai = relatedCard("/compare/workbuddy-tidai", "WorkBuddy 替代", "什么时候换，什么时候留在腾讯云。", "对比");
const qiye = relatedCard("/compare/workbuddy-qiye-vs-siyou", "企业版 vs 私有部署", "先问进程和日志在谁手里。", "对比");
const enterprise = relatedCard("/enterprise", "企业陪跑计划", "把 1–2 个流程做进现有工具。", "服务");
const remoteCard = relatedCard("/zh/yuancheng-qiye-zhushou", "远程部署", "深圳以外走远程。", "服务");
const shenzhen = relatedCard("/zh/shenzhen-qiye-zhushou-bushu", "深圳上门", "上门目前只在深圳。", "服务");

export const batch6ChinesePages: GeoPage[] = [
  page({
    category: "solutions",
    slug: "workbuddy-siyouhua-bushu",
    title: "WorkBuddy 私有化部署｜不到 300 席怎么看",
    h1: "WorkBuddy 私有化部署：小团队先看 300 席起售",
    description:
      "腾讯云产品页上，WorkBuddy 企业私有化版从 300 席起售。大约 4 到 50 人的团队够不到这一档。要运行时放在自己环境里，再看客户侧部署。单价以该页为准。",
    definition:
      "WorkBuddy 私有化部署在腾讯云产品页上对应企业私有化版：自备算力与模型、企业内网，起售写的是 300 席位。本页写给大约 4 到 50 人、按这个公开门槛进不去、又要求运行时放在自己授权环境里的团队。喂龙虾不卖 WorkBuddy 席位。客户侧部署是另一条路径，OpenClaw 只在选定之后才装。",
    audience: "大约 4 到 50 人、在看 WorkBuddy 私有化、又够不到 300 席起售的负责人",
    keywords: ["WorkBuddy 私有化部署", "WorkBuddy 私有化", "WorkBuddy 企业私有化版", "小团队 私有部署"],
    bullets: [
      "企业私有化版公开起售是 300 席",
      "专享版是 100 席起的云上专属，不是小团队本地档",
      "旗舰版 1 席起，但是共享网络",
      "够不到门槛，不等于必须离开腾讯云",
    ],
    workflows: ["打开产品页核对三档起售", "写下要的是共享云还是自己的机器", "只圈 1–2 个流程", "对外动作仍由人确认"],
    sections: [
      {
        title: "产品页上的三档",
        body: tiers,
      },
      {
        title: "4 到 50 人卡在哪",
        body: "4 到 50 人是这页要写的读者，不是腾讯云公布的客户分档。按产品页的起售门槛：旗舰版从 1 席起，这种规模买得起席位，但该档写的是共享网络和多租户逻辑隔离。专享版从 100 席起，企业私有化版从 300 席起。人不够这些门槛，就进不了后两档里写的专属 VPC 或企业内网。进不去，不等于 WorkBuddy 没有企业版，也不等于必须把腾讯云里已经在用的办公停掉。",
      },
      {
        title: "够不到企业私有化版时，客户侧部署指什么",
        body: `${human} 客户侧部署是把运行时放在客户授权的电脑或 VPC，密钥和日志按客户的边界来。客户选定 OpenClaw，喂龙虾可以部署和托管；客户选定别的能放在该环境里的框架，陪跑按那个框架做。这不是 WorkBuddy 企业私有化版的转售，也不是把腾讯的功能表复刻一遍。范围是 [企业陪跑计划](/enterprise) 里约好的 1–2 个流程。首页上的安装套餐只覆盖选定 OpenClaw 时的安装与托管，不是一整套私有化项目。`,
        items: [
          "腾讯云里仍然合适的办公可以留下",
          "报价、退款、付款和对外承诺不自动执行",
          "让助手读业务数据不是零风险",
        ],
      },
      {
        title: "和另外两篇怎么分",
        body: `要的是「进程在自己的电脑或内网」，看 [WorkBuddy 本地版](/zh/workbuddy-bendiban)。企业版和客户侧部署谁掌握 Gateway，看 [企业版 vs 私有部署](/compare/workbuddy-qiye-vs-siyou)。还没决定要不要离开腾讯云，看 [WorkBuddy 替代](/compare/workbuddy-tidai)。${remote}`,
      },
    ],
    faqs: [
      {
        q: "企业私有化版是不是 300 席起？",
        a: "产品页上写的起售门槛是 300 席位起，基础设施是自备算力与模型，网络是企业内网。该页没有这一档的单价。是否可以低于起售购买，问腾讯云，不要按这篇假设。",
      },
      {
        q: "专享版算不算私有化？",
        a: "产品页把它写成云端专属资源池和专属 VPC，100 席位起。这和「企业内网、自备算力」不是同一档。4 到 50 人按 100 席的起售也进不去。",
      },
      {
        q: "喂龙虾是 WorkBuddy 私有化的代理吗？",
        a: "不是。我们不卖 WorkBuddy 席位，也不交付腾讯云的企业私有化版。客户要的是自己环境里的运行时时，才做陪跑或 OpenClaw 部署。",
      },
      {
        q: "人不在深圳能上门吗？",
        a: "不能。上门目前只在深圳。其他城市走远程。",
      },
    ],
    related: [
      relatedCard("/zh/workbuddy-bendiban", "WorkBuddy 本地版", "产品页没有按几人起售的本地档。", "说明"),
      qiye,
      tidai,
      enterprise,
      shenzhen,
      remoteCard,
    ],
  }),
  page({
    category: "solutions",
    slug: "workbuddy-bendiban",
    title: "WorkBuddy 本地版｜小团队没有单独的公开档",
    h1: "WorkBuddy 本地版：产品页没有按几人起售的本地档",
    description:
      "WorkBuddy Enterprise 产品页没有名为本地版、按几人起售的一档。公开最接近内网的是企业私有化版，300 席起。小团队要进程在自己环境，走客户侧部署。上门只在深圳。",
    definition:
      "WorkBuddy 本地版不是产品页上的一个独立档名。该页公开的三档里，旗舰版写无需自建，专享版写云端专属资源池，企业私有化版写企业内网和自备算力，并且从 300 席起售。小团队搜索「本地版」，通常是要进程在自己的电脑或办公室网络里。那是客户侧运行时，不是一盒按几人卖的 WorkBuddy 安装包。",
    audience: "搜索 WorkBuddy 本地版或本地部署、团队大约 4 到 50 人的负责人",
    keywords: ["WorkBuddy 本地版", "WorkBuddy 本地部署", "WorkBuddy 内网", "小团队 本地部署"],
    bullets: [
      "产品页没有按几人起售的本地版",
      "企业内网那一档从 300 席起",
      "旗舰版写的是无需自建",
      "自己环境里的运行时是另一条路径",
    ],
    workflows: ["确认要的是腾讯云账号还是自己的机器", "核对 300 席门槛", "只接一条每天会用的流程", "深圳以外改为远程"],
    sections: [
      {
        title: "「本地版」在产品页上对得上哪一档",
        body: `${tiers} 三档里没有一档名叫本地版，也没有一档写着按几个人起售、装到客户自己的办公电脑上。`,
      },
      {
        title: "小团队要的本地，多半不是旗舰版",
        body: "旗舰版从 1 席起，小团队买得起席位。该档写的是注册即用、共享网络。如果搜索本地版是因为文件不能出办公室网络，旗舰版答的不是这道题。专享版是腾讯云上的专属资源池，起售 100 席，仍然不是客户自己的机房。企业私有化版才写企业内网和自备算力，起售 300 席。大约 4 到 50 人按这些起售数字，进不了后两档。",
      },
      {
        title: "进程要在自己环境时",
        body: `${human} 喂龙虾能做的是：在客户授权的电脑或 VPC 上，把 1–2 个流程做成带审核的助手。运行时由客户定。选定 OpenClaw 时我们部署；没选定，就按已经能放进该环境的框架陪跑。我们不提供 WorkBuddy 的本地安装包，也不把腾讯云产品页没写的档说成存在。实施范围在 [企业陪跑计划](/enterprise)。门槛和三档的采购说明在 [WorkBuddy 私有化部署](/zh/workbuddy-siyouhua-bushu)。`,
      },
      {
        title: "在哪做",
        body: `${remote} 已经决定继续用腾讯云的共享或专属云，直接找腾讯云。还在判断自己的机器值不值得管，看 [企业版 vs 私有部署](/compare/workbuddy-qiye-vs-siyou)。`,
      },
    ],
    faqs: [
      {
        q: "WorkBuddy 有没有本地版？",
        a: "在企业版产品页上，没有名为本地版、按几人起售的一档。公开写了企业内网和自备算力的是企业私有化版，300 席位起。别的文档如果另有说法，以腾讯云当时的页面和合同为准。",
      },
      {
        q: "把旗舰版装到公司电脑上算本地版吗？",
        a: "不算这篇说的本地。旗舰版在产品页上是无需自建、共享网络。装不装到某一台电脑，不改变该档写的网络隔离。",
      },
      {
        q: "喂龙虾能把 WorkBuddy 部署到内网吗？",
        a: "不能作为 WorkBuddy 的交付。我们部署的是客户选定、并且能放在该环境里的运行时。OpenClaw 是常见的一条，不是必须。",
      },
      {
        q: "其他城市能上门装吗？",
        a: "不能。上门目前只在深圳。其他城市走远程。",
      },
    ],
    related: [
      relatedCard("/zh/workbuddy-siyouhua-bushu", "WorkBuddy 私有化部署", "企业私有化版从 300 席起。", "说明"),
      qiye,
      tidai,
      enterprise,
      remoteCard,
      shenzhen,
    ],
  }),
];
