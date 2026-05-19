import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.weclawd.com";
const pageUrl = `${siteUrl}/huodai-ai-assistant`;

const workflows = [
  ["客户询盘整理", "从企业微信、飞书、邮件等渠道提取询盘要点，形成待跟进事项和客户上下文。"],
  ["运价表整理", "协助读取每日海运/空运运价信息，区分成本价与销售报价，生成内部简报和客户话术草稿。"],
  ["客户画像与拓客", "基于客户官网等公开信息，谨慎推断货类、出货场景和潜在航线需求，并保留证据来源。"],
  ["销售跟进提醒", "根据聊天记录、日程和待办，提醒销售及时回复货主、海外代理或同行客户。"],
];

const faqs = [
  {
    q: "什么是货代 AI 助手？",
    a: "货代 AI 助手是连接企业微信、飞书、邮件、日历和表格等工具的私有 AI 执行助手，用来帮助货代团队整理询盘、运价、客户资料、跟进提醒和开发信草稿。",
  },
  {
    q: "WeClawd 能接入企业微信吗？",
    a: "可以。WeClawd 提供基于 OpenClaw 的部署和配置服务，可按客户授权接入企业微信、飞书、钉钉、邮箱、日历等工具，并围绕货代业务配置工作流。",
  },
  {
    q: "AI 能直接替销售报价吗？",
    a: "不建议完全自动报价。AI 更适合整理运价、生成报价草稿、提醒有效期和缺失信息；最终价格、附加费、舱位和商务判断应由业务人员确认。",
  },
  {
    q: "适合哪些货代公司？",
    a: "适合依赖企业微信/飞书/邮箱处理客户询盘、每日运价和销售跟进的国际物流、跨境贸易、海运空运代理、海外代理协作团队。",
  },
  {
    q: "WeClawd 和普通 ChatGPT 有什么区别？",
    a: "普通 ChatGPT 需要人工复制粘贴问题；WeClawd 部署的是可长期运行的 OpenClaw 执行助手，可以在客户授权范围内连接业务工具、保留上下文，并按流程主动提醒或起草内容。",
  },
];

export const metadata: Metadata = {
  title: "货代 AI 助手｜国际物流企业微信自动化与 OpenClaw 部署",
  description:
    "WeClawd 为货代和国际物流团队部署私有 AI 助手，支持企业微信/飞书/邮件工作流、询盘整理、运价简报、客户画像、销售跟进和开发信草稿。",
  keywords: ["货代 AI 助手", "国际物流 AI", "企业微信货代自动化", "海运报价自动化", "货代客户开发 AI", "OpenClaw 部署"],
  alternates: { canonical: pageUrl, languages: { en: `${siteUrl}/freight-ai-assistant`, "zh-CN": pageUrl } },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: pageUrl,
    title: "货代 AI 助手｜WeClawd 喂龙虾",
    description: "面向货代、国际物流和跨境贸易团队的私有 AI 助手部署服务。",
    images: [{ url: "/logos/weclaw-logo.png", width: 1200, height: 630, alt: "货代 AI 助手 WeClawd" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "货代 AI 助手｜WeClawd 喂龙虾",
    description: "企业微信、飞书、邮件和运价表工作流的 OpenClaw AI 助手部署。",
    images: ["/logos/weclaw-logo.png"],
  },
};

export default function HuodaiAiAssistantPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "货代 AI 助手部署服务",
    alternateName: "Freight Forwarder AI Assistant Deployment",
    serviceType: "国际物流与货代团队 AI 助手部署",
    provider: { "@type": "Organization", name: "喂龙虾 WeClawd", url: siteUrl },
    areaServed: "Worldwide",
    url: pageUrl,
    description: "为货代、国际物流和跨境贸易团队部署基于 OpenClaw 的私有 AI 助手，支持企业微信、飞书、邮件、日历和表格工作流。",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="border-b border-zinc-200 bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← 返回喂龙虾首页</Link>
          <div className="mt-10 max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">货代 / 国际物流 / 跨境贸易团队</p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 lg:text-6xl">给货代团队部署能工作的 AI 助手</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-600">
              WeClawd（喂龙虾）基于 OpenClaw，为货代和国际物流团队部署私有 AI 助手，连接企业微信、飞书、邮箱、日历和表格，帮助整理询盘、运价、客户画像和销售跟进。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-blue-700">预约 15 分钟咨询</a>
              <Link href="/freight-ai-assistant" className="rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 hover:bg-zinc-50">English page</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">适合优先落地的货代 AI 场景</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflows.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">为什么货代团队需要私有 AI 助手</h2>
            <p className="mt-4 leading-7 text-zinc-600">
              货代业务的信息密度高：客户询盘、船期、运价、附加费、聊天记录和报价有效期经常分散在多个系统里。AI 助手的价值不是替代业务判断，而是把重复整理、提醒和草稿工作标准化。
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
            <h3 className="font-semibold">可交付的工作流示例</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
              <li>• 每日运价整理：生成内部简报和客户推广文案草稿。</li>
              <li>• 客户线索画像：基于官网证据生成货类、航线和开发话术。</li>
              <li>• 企业微信跟进：识别未回复客户和需要业务确认的询盘。</li>
              <li>• 销售晨报：汇总今日会议、重要邮件、待报价和待回访事项。</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">货代 AI 助手常见问题</h2>
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
          <h2 className="text-3xl font-bold">先从一个真实货代工作流开始</h2>
          <p className="mt-4 text-blue-100">我们可以从企业微信询盘、每日运价整理或客户开发信开始，部署后再逐步扩展。</p>
          <a href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">预约咨询</a>
        </div>
      </section>
    </main>
  );
}
