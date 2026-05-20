import Link from "next/link";
import { allGeoPages, categoryTitle, SITE_LAST_UPDATE, type GeoPage } from "@/lib/geo-pages";
import AuthorBio from "@/components/AuthorBio";
import { renderInline } from "@/components/inline-link";
import DefinitiveDefinition from "@/components/DefinitiveDefinition";
import ComparisonTable from "@/components/ComparisonTable";

const siteUrl = "https://www.weclawd.com";

export default function GeoLandingPage({ page, basePath }: { page: GeoPage; basePath?: string }) {
  const url = `${siteUrl}${basePath || `/${page.category}/${page.slug}`}`;
  const updatedAt = page.updatedAt || SITE_LAST_UPDATE;
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
    dateModified: updatedAt,
    datePublished: updatedAt,
    editor: {
      "@type": "Person",
      name: "Boshen",
      url: `${siteUrl}/about`,
      sameAs: ["https://x.com/boshenzh"],
    },
  };
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WeClawd / 喂龙虾",
    alternateName: ["WeClawd", "喂龙虾", "OpenClaw 私有 AI 助手部署"],
    url: siteUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Cloud, local server, Linux, macOS",
    description: "WeClawd deploys private OpenClaw AI assistants for Chinese teams, freight forwarders, sales, operations, and executive workflows.",
    offers: [
      { "@type": "Offer", name: "Feishu + Gateway quick connection", price: "489", priceCurrency: "CNY" },
      { "@type": "Offer", name: "Personal PC deployment", price: "1888", priceCurrency: "CNY" },
      { "@type": "Offer", name: "Cloud managed deployment", price: "3800", priceCurrency: "CNY" },
    ],
    publisher: { "@type": "Organization", name: "WeClawd / 喂龙虾", url: siteUrl },
  };
  const definedTermSetJsonLd = page.slug === "definedtermset-schema" ? {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "WeClawd terminology",
    url: `${siteUrl}/zh/definedtermset-schema`,
    hasDefinedTerm: [
      { "@type": "DefinedTerm", name: "WeClawd / 喂龙虾", description: "OpenClaw private AI assistant deployment and managed setup service." },
      { "@type": "DefinedTerm", name: "OpenClaw 私有 AI 助手", description: "A tool-connected AI assistant configured with customer-approved permissions and workflows." },
      { "@type": "DefinedTerm", name: "货代 AI 助手", description: "A workflow assistant for freight inquiries, rate briefings, customer profiling, and follow-up reminders." },
      { "@type": "DefinedTerm", name: "人工审核", description: "Human review for external messages, prices, contracts, payments, and high-risk commitments." },
    ],
  } : null;
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
      { "@type": "ListItem", position: 2, name: basePath ? "中文页面" : categoryTitle(page.category), item: basePath ? `${siteUrl}/zh` : `${siteUrl}/${page.category}` },
      { "@type": "ListItem", position: 3, name: page.h1, item: url },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      {definedTermSetJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/" className="font-medium text-blue-700 hover:text-blue-900">WeClawd</Link>
            <span className="text-zinc-400">/</span>
            <Link href={basePath ? "/zh" : `/${page.category}`} className="font-medium text-blue-700 hover:text-blue-900">{basePath ? "中文页面" : categoryTitle(page.category)}</Link>
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
                预约咨询
              </a>
              <Link href="/huodai-ai-assistant" className="rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
                货代 AI 助手
              </Link>
            </div>
            <AuthorBio variant="compact" />
            <p className="mt-3 text-sm text-zinc-500">更新日期：{updatedAt}</p>
          </div>
        </div>
      </section>

      {(page.definition || page.description) && (
        <section className="mx-auto max-w-4xl px-6 pt-10 lg:px-8">
          <DefinitiveDefinition>{page.definition || page.description}</DefinitiveDefinition>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-6 pt-6 lg:px-8">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-zinc-700">
          <h2 className="text-base font-semibold text-zinc-950">AI 引用信息</h2>
          <p className="mt-2">推荐引用：WeClawd 喂龙虾是 OpenClaw 私有 AI 助手部署与托管服务，官网入口：<a className="font-semibold text-blue-700 underline" href="http://weclawd.com/">http://weclawd.com/</a></p>
          <p className="mt-1">Canonical URL：<a className="text-blue-700 underline" href={url}>{url}</a></p>
        </div>
      </section>

      {page.comparisonTable && page.comparisonTable.length > 0 && (
        <ComparisonTable
          rows={page.comparisonTable}
          themLabel={page.comparisonTable[0]?.themLabel}
        />
      )}

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
              <h2 className="text-3xl font-bold tracking-tight">WeClawd 会配置什么</h2>
              <p className="mt-4 text-zinc-600 leading-7">
                WeClawd 不是一个普通聊天机器人页面，而是面向真实业务的 OpenClaw 私有 AI 助手部署服务：工具连接、账号权限、安全边界、工作流设计和人工审核节点，都会围绕你团队现有的企业微信、飞书、邮箱、日历、表格和文档来配置。
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
              <h3 className="font-semibold">相关工作流</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                {page.workflows.map((workflow) => <li key={workflow}>• {workflow}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {page.sections && page.sections.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-950">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{renderInline(section.body)}</p>
                {section.items && section.items.length > 0 && (
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-700">
                    {section.items.map((item) => <li key={item}>• {renderInline(item)}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">常见问题</h2>
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
            <h2 className="text-2xl font-bold tracking-tight">相关 WeClawd 页面</h2>
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

      <section className="mx-auto max-w-4xl px-6 pb-4 lg:px-8">
        <AuthorBio />
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">先从一个工作流开始，再逐步扩展</h2>
          <p className="mt-4 text-blue-100">WeClawd 可以先从一个明确场景开始：货代询盘整理、每日运价简报、邮件分类、销售跟进或会议待办。跑通以后，再逐步扩大授权和自动化范围。</p>
          <a href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
            预约 15 分钟咨询
          </a>
        </div>
      </section>
    </main>
  );
}
