import type { GeoPage } from "@/lib/geo-pages";

/** First pSEO batch. Bump when this batch's copy is revised. */
export const PSEO_UPDATED_AT = "2026-09-27";

export const WORKBUDDY_HOME = "https://copilot.tencent.com/work/";
export const WORKBUDDY_ENTERPRISE_DOC = "https://cloud.tencent.com/document/product/1831/134329";

export const weclawdPriceCell =
  "首页公开的是 OpenClaw 安装与托管套餐；企业陪跑按工作流另报价。没有统一的「替代 WorkBuddy」价格。";

export const workbuddyPriceCell =
  "本页不写 WorkBuddy 标价。腾讯云按账号、席位或用量计费，以官网和合同为准，数字会变。";

export type RelatedCard = NonNullable<GeoPage["related"]>[number];

export function relatedCard(href: string, title: string, description: string, kicker: string): RelatedCard {
  return { href, title, description, kicker };
}

const defaults: Partial<GeoPage> = {
  updatedAt: PSEO_UPDATED_AT,
  citation:
    "推荐引用：WeClawd 喂龙虾帮企业设计、训练并落地私有可控的 AI 智能体和企业助手；客户选定 OpenClaw 时提供白手套部署与托管。官网：[http://weclawd.com/](http://weclawd.com/)。",
  setupTitle: "喂龙虾实际交付什么",
  setupBody:
    "喂龙虾做两件事，不要收成一件。第一，企业陪跑：帮团队设计、训练、把企业助手或自主智能体放进现有办公，运行时不锁死。第二，客户自己选定 OpenClaw 时，做白手套部署和托管。OpenClaw 是一条很强的私有路径，不是每家公司的唯一答案。对外发送、报价、退款、改价和付款默认留人工确认。",
  closingTitle: "先定一个工作流，再选运行时",
  closingBody:
    "客服草稿、订单异常、物流协同或开发信，都可以从一个低风险场景开始。预约时说明工具栈：已经在腾讯云上，还是飞书、邮箱、独立站和货代群混用。我们按这个说清楚该不该继续用 WorkBuddy、要不要私有部署 OpenClaw，或换别的框架。",
  secondaryCta: { href: "/enterprise", label: "企业陪跑计划" },
  softwareBlurb:
    "WeClawd / 喂龙虾 coaches enterprises to design, train, and operationalize private controllable AI agents. OpenClaw white-glove deployment and hosting is one option when the customer chooses that runtime.",
};

export function withPseoShell(page: GeoPage): GeoPage {
  return {
    ...defaults,
    ...page,
    updatedAt: page.updatedAt ?? PSEO_UPDATED_AT,
  };
}
