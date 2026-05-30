import Link from "next/link";
import { BOOKING_URL } from "@/lib/contact";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { chineseBlogPages, getChineseBlogPage } from "@/lib/chinese-blog-pages";
import AuthorBio from "@/components/AuthorBio";
import { renderInline } from "@/components/inline-link";
import DefinitiveDefinition from "@/components/DefinitiveDefinition";
import TldrBox from "@/components/TldrBox";

const siteUrl = "https://www.weclawd.com";

export function generateStaticParams() {
  return chineseBlogPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getChineseBlogPage(slug);
  if (!page) return {};
  const url = `${siteUrl}/blog/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url, languages: { "zh-CN": url } },
    openGraph: {
      type: "article",
      locale: "zh_CN",
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

export default async function ChineseBlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getChineseBlogPage(slug);
  if (!page) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    dateModified: page.updatedAt,
    datePublished: page.updatedAt,
    author: {
      "@type": "Person",
      name: "Boshen",
      url: `${siteUrl}/about`,
      sameAs: ["https://x.com/boshenzh"],
    },
    publisher: { "@type": "Organization", name: "WeClawd / 喂龙虾", logo: { "@type": "ImageObject", url: `${siteUrl}/logos/weclaw-logo.png` } },
    mainEntityOfPage: `${siteUrl}/blog/${page.slug}`,
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

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="text-2xl font-semibold tracking-tight">喂龙虾</Link>
          <div className="flex items-center gap-6">
            <Link href="/zh" className="text-sm font-medium text-zinc-600 hover:text-zinc-950">中文场景</Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">预约咨询</a>
          </div>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← 返回喂龙虾首页</Link>
        <div className="mt-8 border-b border-zinc-200 pb-10">
          <p className="text-sm font-semibold text-blue-700">{page.audience}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">{page.title}</h1>
          <p className="mt-6 text-xl leading-8 text-zinc-600">{page.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {page.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-blue-700">{keyword}</span>
            ))}
          </div>
          <AuthorBio variant="compact" />
          <p className="mt-3 text-sm text-zinc-500">更新日期：{page.updatedAt}</p>
        </div>

        {page.definition && (
          <DefinitiveDefinition>{page.definition}</DefinitiveDefinition>
        )}

        {page.tldr && page.tldr.length > 0 && <TldrBox bullets={page.tldr} />}

        <div className="mt-12 space-y-12">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-3xl font-bold tracking-tight">{section.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700">
                {section.body.map((paragraph) => <p key={paragraph}>{renderInline(paragraph)}</p>)}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-6 space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-700">
                  {section.bullets.map((bullet) => <li key={bullet}>• {renderInline(bullet)}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-16 rounded-2xl border border-zinc-200 bg-white">
          <h2 className="border-b border-zinc-200 p-6 text-2xl font-bold">常见问题</h2>
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
          <h2 className="text-xl font-bold">继续阅读</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {page.related.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl bg-white p-4 text-sm font-semibold text-blue-700 shadow-sm hover:text-blue-900">{item.title}</Link>
            ))}
          </div>
        </section>

        <AuthorBio />
      </article>
    </main>
  );
}
