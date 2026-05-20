import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { enPages, getEnPage } from "@/lib/en-pages";

const siteUrl = "https://www.weclawd.com";

export function generateStaticParams() {
  return enPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getEnPage(slug);
  if (!page) return {};
  const url = `${siteUrl}/en/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url, languages: { en: url, "zh-CN": siteUrl } },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      title: page.title,
      description: page.description,
      images: [{ url: "/logos/weclaw-logo.png", width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@boshenzh",
      creator: "@boshenzh",
      title: page.title,
      description: page.description,
      images: ["/logos/weclaw-logo.png"],
    },
  };
}

export default async function EnArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getEnPage(slug);
  if (!page) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    author: { "@type": "Organization", name: "WeClawd" },
    publisher: { "@type": "Organization", name: "WeClawd", logo: { "@type": "ImageObject", url: `${siteUrl}/logos/weclaw-logo.png` } },
    mainEntityOfPage: `${siteUrl}/en/${page.slug}`,
    keywords: page.keywords.join(", "),
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link href="/en" className="text-2xl font-semibold tracking-tight">WeClawd</Link>
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">中文主页</Link>
        </div>
      </nav>
      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link href="/en" className="text-sm font-medium text-blue-700 hover:text-blue-900">← English overview</Link>
        <div className="mt-8 border-b border-zinc-200 pb-10">
          <p className="text-sm font-semibold text-blue-700">{page.audience}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">{page.title}</h1>
          <p className="mt-6 text-xl leading-8 text-zinc-600">{page.summary}</p>
        </div>
        <div className="mt-12 space-y-12">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-3xl font-bold tracking-tight">{section.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700">
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-6 space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700">
                  {section.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
        <section className="mt-16 rounded-2xl border border-zinc-200 bg-white">
          <h2 className="border-b border-zinc-200 p-6 text-2xl font-bold">FAQ</h2>
          <div className="divide-y divide-zinc-200">
            {page.faqs.map((faq) => (
              <div key={faq.q} className="p-6">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12 rounded-2xl bg-blue-50 p-6">
          <h2 className="text-xl font-bold">Related pages</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {page.related.map((item) => <Link key={item.href} href={item.href} className="rounded-xl bg-white p-4 text-sm font-semibold text-blue-700 shadow-sm hover:text-blue-900">{item.title}</Link>)}
          </div>
        </section>
      </article>
    </main>
  );
}
