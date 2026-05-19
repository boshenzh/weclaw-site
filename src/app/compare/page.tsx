import type { Metadata } from "next";
import Link from "next/link";
import { allGeoPages, categoryTitle, type GeoPage } from "@/lib/geo-pages";

const category = "compare" as GeoPage["category"];
const siteUrl = "https://www.weclawd.com";

export function generateMetadata(): Metadata {
  const title = `${categoryTitle(category)} | WeClawd AI Assistant Deployment`;
  const description = `Browse WeClawd ${categoryTitle(category).toLowerCase()} pages for OpenClaw AI assistant deployment, freight workflows, integrations, and business automation.`;
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/${category}` },
    openGraph: { type: "website", url: `${siteUrl}/${category}`, title, description },
  };
}

export default function CategoryPage() {
  const pages = allGeoPages.filter((page) => page.category === category);
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← WeClawd</Link>
          <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-6xl">{categoryTitle(category)}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">
            SEO and GEO resource pages for teams evaluating private OpenClaw AI assistants, freight workflows, integrations, and operational automation.
          </p>
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
