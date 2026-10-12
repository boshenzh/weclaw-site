import type { Metadata } from "next";
import Link from "next/link";
import { chineseBlogPages } from "@/lib/chinese-blog-pages";

const siteUrl = "https://www.weclawd.com";
const title = "博客｜OpenClaw 与企业助手";
const description =
  "喂龙虾的说明文章：OpenClaw 是什么、企业微信能做什么、货代怎么落地、部署成本和接入前要核对的权限。";

const staticPosts = [
  {
    href: "/blog/what-is-openclaw",
    title: "什么是 OpenClaw？",
    description: "自托管 AI 执行助手和聊天产品的差别。",
  },
  {
    href: "/blog/openclaw-setup-cost",
    title: "OpenClaw 部署成本",
    description: "一次性费用、月度运行成本和自己部署的差别。",
  },
  {
    href: "/blog/openclaw-mega-cheatsheet-zh",
    title: "OpenClaw 超级速查表（中文）",
    description: "安装、频道、记忆、命令和常见故障的中文整理。",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: { type: "website", locale: "zh_CN", url: `${siteUrl}/blog`, title, description },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← 喂龙虾首页</Link>
          <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-6xl">博客</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">{description}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-2 lg:px-8">
        {staticPosts.map((post) => (
          <Link key={post.href} href={post.href} className="rounded-2xl border border-zinc-200 p-6 hover:border-blue-300">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{post.description}</p>
          </Link>
        ))}
        {chineseBlogPages.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl border border-zinc-200 p-6 hover:border-blue-300">
            <h2 className="text-lg font-semibold">{post.h1 || post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">{post.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
