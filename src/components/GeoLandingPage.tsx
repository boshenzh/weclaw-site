import Link from "next/link";
import { allGeoPages, categoryTitle, type GeoPage } from "@/lib/geo-pages";

const siteUrl = "https://www.weclawd.com";

export default function GeoLandingPage({ page }: { page: GeoPage }) {
  const url = `${siteUrl}/${page.category}/${page.slug}`;
  const related = allGeoPages
    .filter((item) => item.slug !== page.slug)
    .filter((item) => item.category === page.category || item.keywords.some((kw) => page.keywords.join(" ").toLowerCase().includes(kw.toLowerCase().split(" ")[0] || "__")))
    .slice(0, 6);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": page.category === "compare" ? "WebPage" : "Service",
    name: page.h1,
    url,
    description: page.description,
    provider: { "@type": "Organization", name: "WeClawd / 喂龙虾", url: siteUrl },
    audience: { "@type": "Audience", audienceType: page.audience },
    keywords: page.keywords.join(", "),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: categoryTitle(page.category), item: `${siteUrl}/${page.category}` },
      { "@type": "ListItem", position: 3, name: page.h1, item: url },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/" className="font-medium text-blue-700 hover:text-blue-900">WeClawd</Link>
            <span className="text-zinc-400">/</span>
            <Link href={`/${page.category}`} className="font-medium text-blue-700 hover:text-blue-900">{categoryTitle(page.category)}</Link>
          </div>
          <div className="mt-10 max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">{page.audience}</p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 lg:text-6xl">{page.h1}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">{page.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {page.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-blue-100 bg-white px-3 py-1 text-sm text-blue-700 shadow-sm">{keyword}</span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-blue-700">
                Book a consultation
              </a>
              <Link href="/huodai-ai-assistant" className="rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
                货代 AI 助手
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {page.bullets.map((bullet) => (
            <div key={bullet} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">✓</div>
              <h2 className="text-base font-semibold leading-6 text-zinc-950">{bullet}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">What WeClawd configures</h2>
              <p className="mt-4 text-zinc-600 leading-7">
                WeClawd is not a generic chatbot page. It is a deployment service for private OpenClaw assistants: tool access, permissions, security hardening, workflow design, and review boundaries are configured around the way your team already works.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
              <h3 className="font-semibold">Relevant workflows</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                {page.workflows.map((workflow) => <li key={workflow}>• {workflow}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Questions this page answers</h2>
        <div className="mt-8 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
          {page.faqs.map((faq) => (
            <div key={faq.q} className="p-6">
              <h3 className="font-semibold text-zinc-950">{faq.q}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-zinc-200 bg-white py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight">Related WeClawd pages</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link key={`${item.category}/${item.slug}`} href={`/${item.category}/${item.slug}`} className="rounded-2xl border border-zinc-200 p-5 hover:border-blue-300 hover:bg-blue-50/40">
                  <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">{categoryTitle(item.category)}</div>
                  <div className="mt-2 font-semibold text-zinc-950">{item.h1}</div>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Start with one workflow, then expand</h2>
          <p className="mt-4 text-blue-100">WeClawd can start from one concrete workflow—freight inquiry triage, daily rate briefing, email triage, or sales follow-up—and expand after the assistant proves useful.</p>
          <a href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
            Book a 15-minute consultation
          </a>
        </div>
      </section>
    </main>
  );
}
