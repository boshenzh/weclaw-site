import type { Metadata } from "next";
import Link from "next/link";
import SeoHubLinks from "@/components/SeoHubLinks";
import { allGeoPages, categoryTitle, type GeoPage } from "@/lib/geo-pages";
import { untitled } from "@/lib/page-title";
import { REDIRECT_PATHS } from "@/lib/related-geo";

const siteUrl = "https://www.weclawd.com";

export function categoryMetadata(category: GeoPage["category"]): Metadata {
  const title = untitled(`${categoryTitle(category)} | WeClawd`);
  const description = `Browse WeClawd ${categoryTitle(category).toLowerCase()} pages for private AI agents, freight workflows, integrations, and business automation.`;
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/${category}` },
    openGraph: { type: "website", url: `${siteUrl}/${category}`, title, description },
  };
}

export default function CategoryIndexPage({
  category,
  locale = "en",
}: {
  category: GeoPage["category"];
  locale?: "zh" | "en";
}) {
  const pages = allGeoPages.filter(
    (page) => page.category === category && !REDIRECT_PATHS.has(`/${page.category}/${page.slug}`),
  );
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← WeClawd</Link>
          <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-6xl">
            {locale === "zh" ? "对比" : categoryTitle(category)}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">
            {locale === "zh"
              ? "这些页面按采购问题分开写：继续用腾讯云 WorkBuddy、用通用聊天产品，还是把运行时放在自己授权的环境。OpenClaw 只在你选定该运行时之后才部署。"
              : "Pages for teams evaluating private AI agents, freight and cross-border workflows, and tool connections. OpenClaw deployment is one path when the customer chooses that runtime."}
          </p>
          <SeoHubLinks current={`/${category}`} locale={locale} />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link key={page.slug} href={`/${page.category}/${page.slug}`} className="rounded-2xl border border-zinc-200 p-6 hover:border-blue-300 hover:bg-blue-50/40">
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
