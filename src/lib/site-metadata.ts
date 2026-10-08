import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.weclawd.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "喂龙虾 WeClawd｜私有可控 AI 智能体与企业助手陪跑",
    template: "%s | 喂龙虾",
  },
  description:
    "喂龙虾 WeClawd 帮企业设计、训练并落地私有可控的 AI 智能体，框架不锁死。客户选定 OpenClaw 时，另做白手套部署与托管。适合货代、跨境、销售、客服和运营。",
  keywords: [
    "OpenClaw",
    "AI助手",
    "AI智能体",
    "自主智能体",
    "企业陪跑",
    "私有可控",
    "企业AI部署",
    "AI托管服务",
    "飞书集成",
    "钉钉集成",
    "企业微信",
    "Slack集成",
    "Discord机器人",
    "AI自动化",
    "企业协作",
    "智能客服",
    "货代AI助手",
    "国际物流AI",
    "企业微信货代自动化",
    "freight forwarder AI assistant",
    "AI部署",
    "喂龙虾",
  ],
  authors: [{ name: "喂龙虾团队" }],
  creator: "喂龙虾",
  publisher: "喂龙虾",
  icons: {
    icon: "/logos/weclaw-logo.png",
    shortcut: "/logos/weclaw-logo.png",
    apple: "/logos/weclaw-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    title: "喂龙虾 WeClawd｜私有可控 AI 智能体与企业助手陪跑",
    description: "帮企业落地私有可控的 AI 智能体，框架不锁死。客户选定 OpenClaw 时，另做白手套部署与托管。",
    siteName: "喂龙虾",
  },
  twitter: {
    card: "summary_large_image",
    site: "@boshenzh",
    creator: "@boshenzh",
    title: "喂龙虾 WeClawd｜私有可控 AI 智能体与企业助手陪跑",
    description: "帮企业落地私有可控的 AI 智能体，框架不锁死。客户选定 OpenClaw 时，另做白手套部署与托管。",
  },
  alternates: {
    canonical: siteUrl,
  },
};
