import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策｜喂龙虾 WeClawd",
  description: "WeClawd 隐私政策：说明 OpenClaw AI 助手部署服务中的数据访问、权限、安全措施、人工审核和客户控制原则。",
  alternates: { canonical: "https://www.weclawd.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← 返回首页</Link>
        <h1 className="mt-8 text-4xl font-bold tracking-tight">隐私政策</h1>
        <p className="mt-4 text-sm text-zinc-500">最后更新：2026-05-19</p>
        <div className="mt-10 space-y-8 leading-7 text-zinc-600">
          <section><h2 className="text-xl font-semibold text-zinc-950">数据访问</h2><p className="mt-3">WeClawd 根据客户授权配置 OpenClaw 助手访问企业微信、飞书、邮箱、日历、文档或表格等工具。访问范围由客户提供的账号、权限和集成配置决定。</p></section>
          <section><h2 className="text-xl font-semibold text-zinc-950">数据处理</h2><p className="mt-3">AI 助手可能读取消息、邮件、日程、文档和表格内容，用于摘要、分类、提醒、草稿生成和工作流执行。涉及对外发送、报价、合同、付款等高风险动作，建议保留人工确认。</p></section>
          <section><h2 className="text-xl font-semibold text-zinc-950">安全措施</h2><p className="mt-3">部署可包含 OAuth、Docker 沙箱、防火墙、执行白名单、日志审计和权限分层等措施。AI 访问业务工具不是零风险，我们建议从低风险场景开始逐步扩展。</p></section>
          <section><h2 className="text-xl font-semibold text-zinc-950">联系我们</h2><p className="mt-3">如需了解或删除相关配置，请联系 <a className="text-blue-700" href="mailto:boshen233@gmail.com">boshen233@gmail.com</a>。</p></section>
        </div>
      </section>
    </main>
  );
}
