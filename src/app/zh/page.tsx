import type { Metadata } from "next";
import Link from "next/link";
import { chineseBlogPages } from "@/lib/chinese-blog-pages";
import { allChineseGeoPages } from "@/lib/geo-pages";

const siteUrl = "https://www.weclawd.com";

export const metadata: Metadata = {
  title: "中文 SEO/GEO 页面｜货代 AI 助手｜WeClawd 喂龙虾",
  description: "面向中文客户的 WeClawd 货代 AI 助手、国际物流 AI、企业微信自动化、每日运价整理和客户开发 AI 页面。",
  keywords: ["货代 AI 助手", "国际物流 AI", "企业微信货代自动化", "每日运价整理 AI", "货代客户开发 AI"],
  alternates: { canonical: `${siteUrl}/zh` },
};

export default function ZhIndexPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← 喂龙虾首页</Link>
          <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-6xl">中文客户搜索入口</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">
            这些页面专门面向中文搜索、豆包、百度、微信生态和货代/国际物流客户，覆盖货代 AI 助手、企业微信自动化、运价整理和客户开发等高意图关键词。
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
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
