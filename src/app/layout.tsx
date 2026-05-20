import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.weclawd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "喂龙虾 WeClawd｜OpenClaw 私有 AI 助手部署与托管服务",
    template: "%s | 喂龙虾",
  },
  description:
    "喂龙虾 WeClawd 面向中国团队提供 OpenClaw 私有 AI 助手部署与托管服务，支持企业微信、飞书、钉钉、邮箱、日历和表格工作流，适合货代、销售、客服、行政、法务和运营团队。",
  keywords: [
    "OpenClaw",
    "AI助手",
    "AI智能体",
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
    title: "喂龙虾 WeClawd｜OpenClaw 私有 AI 助手部署与托管服务",
    description:
      "面向中国团队的 OpenClaw 私有 AI 助手部署与托管服务，支持企业微信、飞书、钉钉、邮箱、日历和表格工作流。",
    siteName: "喂龙虾",
    images: [
      {
        url: "/logos/weclaw-logo.png",
        width: 1200,
        height: 630,
        alt: "喂龙虾 - OpenClaw AI 助手部署托管服务",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "喂龙虾 WeClawd｜OpenClaw 私有 AI 助手部署与托管服务",
    description:
      "面向中国团队的 OpenClaw 私有 AI 助手部署和托管服务，支持企业微信、飞书、邮箱、日历和表格工作流。",
    images: ["/logos/weclaw-logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Analytics />
        <Script
          defer
          data-website-id="dfid_77Jlkrd1vIbFnBuTpU2a3"
          data-domain="weclawd.com"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
