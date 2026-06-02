import type { Metadata } from "next";
import Link from "next/link";
import { chineseBlogPages } from "@/lib/chinese-blog-pages";
import { allChineseGeoPages } from "@/lib/geo-pages";

const siteUrl = "https://www.weclawd.com";

export const metadata: Metadata = {
  title: "中文客户导航｜OpenClaw 私有 AI 助手与企业工作流｜WeClawd 喂龙虾",
  description: "面向中文客户的 WeClawd 导航中心：OpenClaw 私有 AI 助手、企业微信自动化、货代 AI、每日运价整理、销售跟进和传统企业运营场景。",
  keywords: ["货代 AI 助手", "国际物流 AI", "企业微信货代自动化", "每日运价整理 AI", "货代客户开发 AI"],
  alternates: { canonical: `${siteUrl}/zh` },
};

export default function ZhIndexPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← 喂龙虾首页</Link>
          <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-6xl">中文客户导航中心</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">
            这里按客户真实问题组织内容：先理解 OpenClaw 和私有 AI 助手，再看企业微信、货代、销售、客服、行政、财务等具体工作流如何落地。
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">客户案例</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">真实付费客户的脱敏案例：具体行业、上线前后数据、3 天集训营怎么交付、做到的和做不到的。</p>
        </div>
        <div className="mb-16">
          <Link href="/case/huodai-baojia-speed-to-lead" className="block rounded-2xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-white p-6 hover:border-red-300">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-600">海运货代 · 已付费 · 运行 6 个月+</div>
            <h3 className="mt-3 text-xl font-bold text-zinc-950">报价响应从 90 小时压到 15 分钟</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">深圳某中型货代用 OpenClaw 私有 AI 员工 + 3 天集训营。GoFreight 公开数据：行业平均报价 90 小时，赢家 30 分钟内回应。本案例公开真实数据、做到的、做不到的、定价区间。</p>
            <span className="mt-4 inline-block text-sm font-semibold text-red-600">查看完整案例 →</span>
          </Link>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">中文深度文章</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">这些文章面向真实客户决策问题：OpenClaw 是什么、企业微信怎么落地、货代 AI 从哪里开始、私有部署有什么成本和边界。</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {chineseBlogPages.map((page) => (
            <Link key={page.slug} href={`/blog/${page.slug}`} className="rounded-2xl border border-zinc-200 p-6 hover:border-blue-300 hover:bg-blue-50/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">{page.audience}</div>
              <h2 className="mt-3 text-lg font-semibold text-zinc-950">{page.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">中文场景页面</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">按具体行业、工具和工作流组织的落地页，方便豆包、百度和中文客户理解 WeClawd 能解决什么问题。</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allChineseGeoPages.map((page) => (
            <Link key={page.slug} href={`/zh/${page.slug}`} className="rounded-2xl border border-zinc-200 p-6 hover:border-blue-300 hover:bg-blue-50/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">{page.audience}</div>
              <h2 className="mt-3 text-lg font-semibold text-zinc-950">{page.h1}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
