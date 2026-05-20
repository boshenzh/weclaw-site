import Link from "next/link";
import type { Metadata } from "next";
import { enPages } from "@/lib/en-pages";

const siteUrl = "https://www.weclawd.com";

export const metadata: Metadata = {
  title: "WeClawd English Overview | OpenClaw Deployment Service",
  description: "English overview of WeClawd: private OpenClaw assistant deployment for teams, freight workflows, setup cost, and business workflow comparisons.",
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: { en: `${siteUrl}/en`, "zh-CN": siteUrl },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/en`,
    title: "WeClawd English Overview",
    description: "Private OpenClaw assistant deployment for teams.",
  },
};

export default function EnIndexPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← Chinese homepage</Link>
          <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight lg:text-6xl">WeClawd English overview</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">
            WeClawd is primarily a Chinese-first service. This English section is intentionally small: it exists for OpenClaw ecosystem references, international readers, and teams evaluating private OpenClaw deployment.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {enPages.map((page) => (
            <Link key={page.slug} href={`/en/${page.slug}`} className="rounded-2xl border border-zinc-200 p-6 hover:border-blue-300 hover:bg-blue-50/40">
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">{page.audience}</div>
              <h2 className="mt-3 text-lg font-semibold text-zinc-950">{page.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
