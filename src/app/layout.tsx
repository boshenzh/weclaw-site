import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SetupClaw 中文版（模板）",
  description: "类似 setupclaw.com 的中文落地页/引导站模板，用于 Vercel + GitHub 部署。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
