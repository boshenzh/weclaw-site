import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.weclawd.com";
const pageUrl = `${siteUrl}/freight-ai-assistant`;

const useCases = [
  {
    title: "Customer inquiry intake",
    body: "Read freight customer messages from WeCom, Feishu, email, or chat channels and turn them into structured follow-up tasks for sales teams.",
  },
  {
    title: "Quote and rate organization",
    body: "Help teams summarize daily ocean/air freight rate sheets, distinguish sell prices from cost prices, and prepare customer-facing quote drafts for review.",
  },
  {
    title: "Lead profiling",
    body: "Visit public customer websites, infer likely cargo categories cautiously, and prepare freight-specific outreach notes with visible evidence.",
  },
  {
    title: "Sales follow-up reminders",
    body: "Monitor conversations and calendars to remind freight salespeople when a shipper, consignee, or overseas agent needs a reply.",
  },
];

const faqs = [
  {
    q: "What is an AI assistant for freight forwarders?",
    a: "It is a private AI agent connected to a freight team's communication and workflow tools. It can help organize inquiries, summarize rate sheets, draft follow-ups, profile leads, and remind sales teams about pending customer conversations.",
  },
  {
    q: "Can WeClawd work with WeCom for logistics teams?",
    a: "Yes. WeClawd deploys OpenClaw assistants that can be configured for WeCom/企业微信, Feishu, DingTalk, email, calendars, and other business tools depending on the customer's permissions and workflow requirements.",
  },
  {
    q: "Can AI automate freight quotes?",
    a: "AI can help parse rate information, draft quote messages, and organize customer context. Final freight pricing, validity, surcharge handling, and commercial approval should remain under human review.",
  },
  {
    q: "Is WeClawd a SaaS platform or a deployment service?",
    a: "WeClawd is a white-glove deployment and managed setup service for OpenClaw-based AI assistants. The assistant can run in a customer-controlled environment with security hardening and workflow configuration.",
  },
  {
    q: "Who is this for?",
    a: "Freight forwarders, international logistics companies, cross-border trade teams, freight sales teams, overseas agent teams, and operators who rely on WeCom, Feishu, email, spreadsheets, and daily freight rate information.",
  },
];

export const metadata: Metadata = {
  title: "Freight Forwarder AI Assistant for Logistics Teams",
  description:
    "WeClawd deploys private OpenClaw AI assistants for freight forwarders and logistics teams: WeCom/Feishu workflows, freight inquiry follow-up, rate organization, lead profiling, and daily operations automation.",
  keywords: [
    "freight forwarder AI assistant",
    "AI agent for logistics",
    "freight sales automation",
    "freight quote automation",
    "WeCom logistics AI",
    "OpenClaw freight assistant",
    "international logistics AI assistant",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Freight Forwarder AI Assistant | WeClawd",
    description:
      "Private AI assistants for freight and logistics teams using WeCom, Feishu, email, calendars, and rate sheets.",
    images: [{ url: "/logos/weclaw-logo.png", width: 1200, height: 630, alt: "WeClawd freight AI assistant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freight Forwarder AI Assistant | WeClawd",
    description: "OpenClaw AI assistant deployment for freight forwarding and logistics teams.",
    images: ["/logos/weclaw-logo.png"],
  },
};

export default function FreightAiAssistantPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Freight Forwarder AI Assistant Deployment",
    serviceType: "AI assistant deployment for freight forwarding and logistics teams",
    provider: { "@type": "Organization", name: "WeClawd", url: siteUrl },
    areaServed: "Worldwide",
    url: pageUrl,
    description:
      "White-glove deployment of private OpenClaw AI assistants for freight forwarders, logistics sales teams, and international trade operations.",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Freight forwarders, logistics companies, cross-border trade teams",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
      { "@type": "ListItem", position: 2, name: "Freight AI Assistant", item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← WeClawd</Link>
          <div className="mt-10 max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">For freight forwarders and logistics teams</p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 lg:text-6xl">
              Private AI assistants for freight forwarding workflows
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">
              WeClawd deploys OpenClaw-based AI assistants that help freight teams organize customer inquiries, daily rates, lead research, quote drafts, and follow-up reminders across WeCom, Feishu, email, calendars, and spreadsheets.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-blue-700">
                Book a 15-minute consultation
              </a>
              <Link href="/huodai-ai-assistant" className="rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 hover:bg-zinc-50">
                中文：货代 AI 助手
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-zinc-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Why freight teams search for this</h2>
              <p className="mt-4 text-zinc-600 leading-7">
                Freight work is message-heavy, time-sensitive, and fragmented across WeCom groups, email threads, rate sheets, calendars, and CRM notes. A private assistant is useful when it reduces operational drag without replacing commercial judgment.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
              <h3 className="font-semibold">Common workflows</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                <li>• Turn WeCom customer messages into structured sales follow-up tasks.</li>
                <li>• Summarize daily freight rates into internal briefings and customer drafts.</li>
                <li>• Profile potential shippers using public website evidence.</li>
                <li>• Draft bilingual outreach for overseas agents and logistics customers.</li>
                <li>• Prepare morning briefs covering urgent inquiries, meetings, and pending replies.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Freight AI assistant FAQ</h2>
        <div className="mt-8 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-6">
              <h3 className="font-semibold text-zinc-950">{faq.q}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold">Deploy a freight AI workflow without starting from scratch</h2>
          <p className="mt-4 text-blue-100">WeClawd handles OpenClaw deployment, security hardening, integrations, and the first workflows for your team.</p>
          <a href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
            Book a consultation
          </a>
        </div>
      </section>
    </main>
  );
}
