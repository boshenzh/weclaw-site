export type PricingCard = {
  name: string;
  checkoutPlan?: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  description: string;
  features: string[];
  recommended: boolean;
  detailsHref?: string;
};

/** Displayed prices. Do not change these numbers without a matching checkout plan update. */
export const pricingCards: PricingCard[] = [
  {
    name: "飞书 + Gateway 快速连接包",
    checkoutPlan: "feishu_gateway_install",
    price: "¥489",
    description: "2 小时远程安装：仅安装与连接，不含工作流整合",
    features: [
      "飞书连接与基础可用性验证",
      "云端或本地 Gateway 二选一安装",
      "2 小时远程安装支持",
      "仅提供安装与连接（不含工作流整合）",
      "不含个性化定制",
    ],
    recommended: false,
  },
  {
    name: "个人部署",
    checkoutPlan: "personal_pc",
    price: "¥1,888",
    originalPrice: "¥4,720",
    badge: "限时 4 折",
    description: "部署在客户个人电脑（远程安装）",
    features: [
      "在客户笔记本/台式机上部署 OpenClaw",
      "远程 1v1 安装与配置",
      "邮件和日历集成",
      "安全基础加固",
      "基于个人需求个性化打造专属 AI 工作助手与技能体系",
      "持续优化与迭代支持",
    ],
    recommended: true,
  },
  {
    name: "托管部署",
    checkoutPlan: "managed",
    price: "¥3,800",
    originalPrice: "¥7,600",
    badge: "限时 5 折",
    description: "云端托管部署（限时优惠）",
    features: [
      "云端 VPS 部署",
      "含 14 天专属客服服务",
      "当天完成部署",
      "安全加固配置",
      "邮件和日历集成",
      "最多 3 个工作流",
    ],
    recommended: false,
  },
  {
    name: "企业陪跑计划",
    price: "定制",
    badge: "3 天线下",
    description: "1–2 名专属工程师驻场 3 天，一次性把企业 AI 工作流彻底调优",
    features: [
      "3 天线下集训营，节奏紧凑",
      "1–2 名专属工程师全程驻场",
      "高度定制：针对你公司真实业务一对一调优",
      "Day 1：盘清楚最痛的 1–2 个工作流和 ROI 指标",
      "Day 2：把助手接入微信 / 飞书 / 邮件 / CRM / ERP；选定 OpenClaw 时按该运行时部署",
      "Day 3：跑通端到端流程，交付完整可用系统",
      "一次性付费 · 调好的系统永久留给你",
      "适合货代、跨境电商、律所、政企等高复杂度团队",
    ],
    detailsHref: "/enterprise",
    recommended: false,
  },
];

export function displayedCny(price: string) {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? Number(digits) : null;
}
