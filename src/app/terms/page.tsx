import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "使用条款｜喂龙虾 WeClawd",
  description: "WeClawd 使用条款：说明 OpenClaw AI 助手部署服务、客户授权、人工审核、安全边界、退款和持续维护原则。",
  alternates: { canonical: "https://www.weclawd.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← 返回首页</Link>
        <h1 className="mt-8 text-4xl font-bold tracking-tight">使用条款</h1>
        <p className="mt-4 text-sm text-zinc-500">最后更新：2026-05-19</p>
        <div className="mt-10 space-y-8 leading-7 text-zinc-600">
          <section><h2 className="text-xl font-semibold text-zinc-950">服务范围</h2><p className="mt-3">WeClawd 提供 OpenClaw AI 助手部署、集成配置、工作流设计、安全加固和可选持续维护服务。具体交付内容以双方确认的方案为准。</p></section>
          <section><h2 className="text-xl font-semibold text-zinc-950">客户授权</h2><p className="mt-3">客户需确认所提供账号、API、数据和业务工具访问权限合法有效，并负责决定 AI 助手可访问的数据范围。</p></section>
          <section><h2 className="text-xl font-semibold text-zinc-950">人工审核</h2><p className="mt-3">AI 生成内容可能存在错误。涉及对外承诺、报价、合同、法律意见、付款和敏感人事事项时，客户应进行人工审核。</p></section>
          <section><h2 className="text-xl font-semibold text-zinc-950">退款与支持</h2><p className="mt-3">网站展示的套餐通常包含部署和 14 天专属支持。退款、持续维护和企业定制以实际订单或双方沟通确认为准。</p></section>
        </div>
      </section>
    </main>
  );
}
