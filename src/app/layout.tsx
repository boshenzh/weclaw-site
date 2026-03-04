import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const siteUrl = (() => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "https://weclaw.com";
})();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "喂龙虾 - OpenClaw AI 助手专业部署托管服务",
    template: "%s | 喂龙虾",
  },
  description:
    "喂龙虾提供 OpenClaw AI 助手的白手套部署与托管服务。支持飞书、钉钉、企业微信、Slack、Discord 等集成。当天完成部署，含 14 天专属客服服务与问题响应。适合 CEO/高管与团队的企业级 AI 智能体解决方案。",
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
    title: "喂龙虾 - OpenClaw AI 助手专业部署托管服务",
    description:
      "专业的 OpenClaw AI 助手部署与托管服务。支持飞书、钉钉、企业微信等多平台集成，当天完成部署，含 14 天专属客服服务。",
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
    title: "喂龙虾 - OpenClaw AI 助手专业部署托管服务",
    description:
      "专业的 OpenClaw AI 助手部署和托管服务。支持多平台集成，当天完成部署。",
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
      </body>
    </html>
  );
}
