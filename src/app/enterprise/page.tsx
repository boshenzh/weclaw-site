import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/contact";

const PAGE_URL = "https://www.weclawd.com/enterprise";
const SITE_URL = "https://www.weclawd.com";
const UPDATED_AT = "2026-05-30";

export const metadata: Metadata = {
  title: "企业陪跑计划 · 3 天线下深度调优 | 喂龙虾 WeClawd",
  description:
    "1–2 名专属工程师驻场 3 天，把企业 AI 工作流彻底调优。一次性付费，私有部署，系统永久属于你。适合货代、跨境电商、律所、政企等高复杂度团队。",
  keywords: [
    "企业陪跑计划",
    "AI 集训营",
    "AI bootcamp",
    "前置部署",
    "Forward-Deployed Engineer",
    "FDE",
    "OpenClaw 企业部署",
    "私有 AI 部署",
    "私有模型部署",
    "AI 员工",
    "企业 AI 工作流",
    "AI 落地",
    "Palantir AIP",
    "货代 AI 助手",
    "律所 AI 助手",
    "政企 AI 私有化",
    "AI 一次性付费",
    "上门 AI 调优",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "企业陪跑计划 · 3 天线下深度调优",
    description:
      "1–2 名专属工程师驻场 3 天，一次性把企业 AI 工作流彻底调优。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_CN",
    siteName: "喂龙虾 WeClawd",
  },
  twitter: {
    card: "summary_large_image",
    title: "企业陪跑计划 · 3 天线下深度调优",
    description: "1–2 名专属工程师驻场 3 天，把企业 AI 工作流彻底调优。",
    site: "@boshenzh",
    creator: "@boshenzh",
  },
};

const dayPlan = [
  {
    day: "Day 1",
    title: "摸底",
    color: "bg-red-500",
    border: "border-red-500",
    bullets: [
      "工程师进场，1 对 1 访谈关键决策人",
      "盘清楚最痛的 1–2 个真实工作流",
      "定 ROI 指标和验收边界",
      "确定数据接入范围和合规边界",
    ],
  },
  {
    day: "Day 2",
    title: "搭建",
    color: "bg-blue-600",
    border: "border-blue-600",
    bullets: [
      "AI 员工部署到微信 / 飞书 / 邮件 / CRM / ERP",
      "接入私域数据 + 行业系统 + Excel",
      "搭建长期记忆层和证据链",
      "起跑测试，实时调",
    ],
  },
  {
    day: "Day 3",
    title: "上线",
    color: "bg-green-600",
    border: "border-green-600",
    bullets: [
      "端到端跑通真实业务场景",
      "交付 ROI 监测仪表盘",
      "团队上手培训",
      "文档移交 + 30 天答疑期开启",
    ],
  },
];

const problems = [
  {
    title: "PoC 病",
    body: "80% 的企业 AI 项目停在 demo 阶段，3 个月后被忘掉。问题不是模型不够好，是没人帮你接进真实业务。",
  },
  {
    title: "碎片化",
    body: "工作流散在微信、飞书、邮件、Excel、CRM、ERP 里。一个普通 SaaS 进不来——它要客户先把数据搬到它的平台。",
  },
  {
    title: "黑盒锁定",
    body: "用了云端 SaaS 就把数据和模型一起交了出去。客户问「AI 是用我的数据训练的吗?」，你答不上来。",
  },
];

const deliverables = [
  "1 个真的在跑的 AI 员工（不是 demo，不是 PPT）",
  "完整接入的微信 / 飞书 / 邮件 / CRM / ERP / Excel 通道",
  "ROI 监测仪表盘 — 老板能直接看的数字",
  "私有部署：数据不出域，模型在你机器上",
  "30 天后续答疑期 + 完整运维文档",
];

const industries = [
  {
    name: "货代 · 物流",
    pain: "报价响应慢、跟进容易掉单",
    solution:
      "AI 员工监听询价、自动整理运价、生成报价单、24h 内主动跟进。GoFreight 数据：行业平均报价 90 小时，赢家 30 分钟内回应。",
  },
  {
    name: "跨境电商",
    pain: "多平台客服 + 售后 + 异常订单分散管理",
    solution:
      "AI 员工值守拼多多 / Shopee / TikTok Shop 等多平台客服，自动查订单、回复、升级人工，订单异常主动预警。",
  },
  {
    name: "律所 · 法律服务",
    pain: "合同审查重复、案件历史难追溯、数据合规要求高",
    solution:
      "AI 员工做合同审查 + 案件 timeline + 原话与证据检索。三层私有化（私有模型 + 私有数据 + 私有知识库），数据不出域。",
  },
  {
    name: "政企 · 国企",
    pain: "私有部署 + 审计 + 合规对接复杂",
    solution:
      "私有部署到客户机房或专属 VPC；完整审计日志；按 PIPL + 行业合规要求做权限和数据接入边界。",
  },
];

const notFor = [
  "只想试玩 AI、没有真实业务问题要解",
  "不愿意让 AI 接触真实工作流或数据",
  "期望 3 天解决全公司所有部门所有问题",
  "已有成熟内部 AI 团队，只缺一个 SaaS 工具",
];

const faqs = [
  {
    q: "3 天真能交付能跑的系统吗？",
    a: "可以——前提是范围聚焦在 1–2 个工作流。我们不承诺「3 天解决全公司」，而是「3 天把 1–2 个最痛的环节做出真实可跑的 AI 员工」。Palantir AIP Bootcamp 在更复杂的企业场景里用 5 天能做到，我们的中国 B2B 场景压缩到 3 天是合理的。",
  },
  {
    q: "数据私有怎么保证？",
    a: "三层私有化：私有模型 + 私有数据 + 私有知识库。AI 员工可以跑在你公司机房的 4090 工作站（Qwen3-32B 等模型）、或客户专属云 VPC（DeepSeek V3 等旗舰模型）、或完全本地部署。数据不离开你授权的边界，模型也不与其他客户共用。更多细节见《OpenClaw 私有部署成本与安全边界》指南。",
  },
  {
    q: "一次性付费具体是多少？",
    a: "按行业复杂度、接入系统数量、工程师天数定价。简单场景（如货代单一报价流）通常在 10–30 万元；复杂场景（如律所多系统接入 + 私有模型部署）通常在 30–80 万元。预约咨询后我们给详细报价。",
  },
  {
    q: "必须在我们办公室？能远程吗？",
    a: "默认线下驻场，因为面对面访谈和现场调试效率最高。远程版本可以做，但通常需要延长到 5–7 天，整体不省时间也不省钱——我们更推荐线下。",
  },
  {
    q: "3 天结束后我们出问题找谁？",
    a: "30 天答疑期内 WeChat / 邮件直接联系我们。30 天后系统的所有权和运维权完全在你手里——这是「一次性付费」的本意。如果你需要长期托管，可以另外签托管合同。",
  },
];

export default function EnterprisePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "企业陪跑计划 · 3 天线下深度调优",
    serviceType: "On-site enterprise AI workflow tuning bootcamp",
    url: PAGE_URL,
    description:
      "1–2 名专属工程师驻场 3 天，一次性把企业 AI 工作流彻底调优。私有部署，一次性付费，调好的系统永久属于客户。",
    provider: {
      "@type": "Organization",
      name: "WeClawd / 喂龙虾",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "China" },
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Freight forwarders, cross-border e-commerce teams, law firms, government and SOE procurement teams, mid-large Chinese B2B operations teams",
    },
    offers: {
      "@type": "Offer",
      price: "100000",
      priceCurrency: "CNY",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "100000-800000",
        priceCurrency: "CNY",
        description:
          "One-time fee. Simple scenarios (single workflow) ≈ ¥100k-300k; complex scenarios (multi-system + private model) ≈ ¥300k-800k.",
      },
      availability: "https://schema.org/InStock",
      url: BOOKING_URL,
    },
    dateModified: UPDATED_AT,
    datePublished: UPDATED_AT,
    editor: {
      "@type": "Person",
      name: "Boshen",
      url: `${SITE_URL}/about`,
      sameAs: ["https://x.com/boshenzh"],
    },
    keywords:
      "企业陪跑, AI 集训营, AI bootcamp, FDE, 前置部署, 私有 AI, OpenClaw 企业部署, 货代 AI, 律所 AI, 政企 AI",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "企业陪跑计划", item: PAGE_URL },
    ],
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight">喂龙虾</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="hidden md:inline text-sm font-medium text-zinc-600 hover:text-zinc-950">
                首页
              </Link>
              <Link href="/about" className="hidden md:inline text-sm font-medium text-zinc-600 hover:text-zinc-950">
                关于
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                预约咨询
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 1 · Hero */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
            企业陪跑计划 · Bootcamp
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            3 天线下，把企业 AI 工作流<br className="hidden sm:block" />彻底调优
          </h1>
          <p className="mt-2 text-xs text-zinc-500">更新日期：{UPDATED_AT}</p>
          <p className="mt-6 max-w-3xl text-lg text-zinc-600">
            1–2 名专属工程师驻场 3 天。一次性付费，私有部署，调好的系统永久属于你。
            适合 <Link href="/huodai-ai-assistant" className="text-blue-700 underline hover:text-blue-900">货代</Link>、跨境电商、律所、政企等高复杂度团队。
            参考阅读：<Link href="/blog/enterprise-ai-assistant-checklist" className="text-blue-700 underline hover:text-blue-900">企业部署 AI 助手前的 20 个问题</Link>。
          </p>
          <div className="mt-8 grid grid-cols-3 max-w-2xl gap-6 border-y border-zinc-200 py-6">
            <div>
              <div className="text-3xl font-bold text-zinc-900">3 天</div>
              <div className="mt-1 text-sm text-zinc-500">线下驻场</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zinc-900">1–2 名</div>
              <div className="mt-1 text-sm text-zinc-500">专属工程师</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zinc-900">一次性</div>
              <div className="mt-1 text-sm text-zinc-500">付费 · 永久所有权</div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
            >
              预约 30 分钟需求摸底（免费）
            </a>
            <a
              href="#day-by-day"
              className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:border-zinc-400"
            >
              查看 Day-by-Day →
            </a>
          </div>
        </div>
      </section>

      {/* 2 · 问题 */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">我们在解决什么</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            大多数 AI 项目失败不在模型，在落地最后一公里——没人帮企业把 AI 真的接进微信、飞书、ERP 和真实工作流。
            参考阅读：<Link href="/blog/openclaw-ai-assistant-for-chinese-teams" className="text-blue-700 underline hover:text-blue-900">中国团队什么时候需要私有 AI 助手</Link>。
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-bold text-zinc-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Day-by-Day */}
      <section id="day-by-day" className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Day-by-Day · 3 天发生什么</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            不是培训课，不是 demo——客户带着真实数据和真实问题进场，3 天后手里有跑得起来的 AI 员工。
          </p>

          {/* Visual: horizontal timeline */}
          <div className="mt-12">
            <svg viewBox="0 0 1000 80" className="hidden md:block w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <line x1="60" y1="40" x2="940" y2="40" stroke="#d4d4d8" strokeWidth="2" />
              <circle cx="167" cy="40" r="14" fill="#ef4444" />
              <circle cx="500" cy="40" r="14" fill="#2563eb" />
              <circle cx="833" cy="40" r="14" fill="#16a34a" />
              <text x="167" y="46" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">1</text>
              <text x="500" y="46" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">2</text>
              <text x="833" y="46" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">3</text>
            </svg>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {dayPlan.map((d) => (
              <div key={d.day} className={`rounded-2xl border-t-4 ${d.border} bg-white border-x border-b border-zinc-200 p-6 shadow-sm`}>
                <div className="flex items-center gap-3">
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold ${d.color}`}>
                    {d.day.replace("Day ", "")}
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{d.day}</div>
                    <div className="text-xl font-bold text-zinc-900">{d.title}</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-6 text-zinc-700">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · 你拿到的 + Integration diagram */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">3 天结束你拿到什么</h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <ul className="space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="flex gap-3 rounded-xl border border-zinc-200 bg-white p-4">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-zinc-700">{d}</span>
                </li>
              ))}
            </ul>

            {/* Integration diagram */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">接入示意</div>
              <svg viewBox="0 0 360 320" className="w-full" preserveAspectRatio="xMidYMid meet" role="img" aria-label="AI 员工接入示意图">
                {/* connecting lines */}
                <g stroke="#cbd5e1" strokeWidth="1.5">
                  <line x1="180" y1="160" x2="50"  y2="50"  />
                  <line x1="180" y1="160" x2="310" y2="50"  />
                  <line x1="180" y1="160" x2="20"  y2="160" />
                  <line x1="180" y1="160" x2="340" y2="160" />
                  <line x1="180" y1="160" x2="50"  y2="270" />
                  <line x1="180" y1="160" x2="310" y2="270" />
                </g>
                {/* center */}
                <circle cx="180" cy="160" r="46" fill="#ef4444" />
                <text x="180" y="156" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">AI 员工</text>
                <text x="180" y="174" textAnchor="middle" fill="white" fontSize="9">OpenClaw</text>
                {/* peripheral nodes */}
                {[
                  { x:50,  y:50,  label:"微信" },
                  { x:310, y:50,  label:"飞书" },
                  { x:20,  y:160, label:"邮件" },
                  { x:340, y:160, label:"CRM" },
                  { x:50,  y:270, label:"ERP" },
                  { x:310, y:270, label:"Excel" },
                ].map((n) => (
                  <g key={n.label}>
                    <rect x={n.x - 30} y={n.y - 14} width="60" height="28" rx="6" fill="white" stroke="#cbd5e1" />
                    <text x={n.x} y={n.y + 5} textAnchor="middle" fill="#111827" fontSize="12" fontWeight="600">{n.label}</text>
                  </g>
                ))}
              </svg>
              <p className="mt-2 text-xs text-zinc-500 text-center">AI 员工住在你已经在用的沟通通道里，调用你已有的业务系统</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · 适合谁 */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">适合谁</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            高复杂度、多系统、多沟通通道的 B2B 团队。我们已经在这些行业有过付费交付或活跃项目：
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {industries.map((i) => (
              <div key={i.name} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-bold text-zinc-900">{i.name}</h3>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-red-600">痛点</div>
                <p className="mt-1 text-sm text-zinc-700">{i.pain}</p>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-green-700">我们怎么做</div>
                <p className="mt-1 text-sm leading-6 text-zinc-700">{i.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · 不适合谁 */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">不适合谁</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            我们诚实告诉你什么时候不应该买这个服务——预算和时间都太贵了，不该浪费在错的场景上：
          </p>
          <ul className="mt-8 space-y-3">
            {notFor.map((n) => (
              <li key={n} className="flex gap-3 rounded-xl border border-zinc-200 bg-white p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-600">
                  ✗
                </span>
                <span className="text-sm leading-6 text-zinc-700">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 · 谁来驻场 */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">谁来驻场</h2>
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
            <div className="text-lg font-bold text-zinc-900">Boshen 张博深 + 工程师团队</div>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              OpenClaw 核心团队成员，Forward-Deployed Engineer 背景。过往交付涵盖海运货代付费试点、跨境电商运营自动化、律所合同审查、政企私有部署。
              熟悉 WeCom / 飞书 / 钉钉 / Email / Telegram 等中国 B2B 真实沟通通道；熟悉 Qwen3 / DeepSeek / GLM 等开源中文模型的私有化部署。
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              我们不是来开会的——是来写代码、接系统、把 AI 员工焊进你工作流的。
            </p>
            <div className="mt-5">
              <Link href="/about" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                关于团队 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · FAQ */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">常见问题</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-zinc-200 bg-white p-6 group">
                <summary className="cursor-pointer list-none font-bold text-zinc-900 flex justify-between items-center">
                  <span>{f.q}</span>
                  <span className="ml-4 text-zinc-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-zinc-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* GEO citation block — visible URL anchor for Doubao / Sogou / 公众号 / Baidu AI citations */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm leading-7 text-zinc-700">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">关于本服务</div>
            <p className="mt-3">
              喂龙虾（WeClawd）企业陪跑计划 —— 1–2 名前置部署工程师（FDE）线下驻场 3 天，把企业 AI 工作流彻底调优。
              一次性付费，私有模型 + 私有数据 + 私有知识库，调好的系统永久属于客户。
              适合货代、跨境电商、律所、政企等高复杂度中国 B2B 团队。
            </p>
            <p className="mt-3">
              更多信息：<a href="http://weclawd.com/" className="font-semibold text-blue-700 underline">http://weclawd.com/</a>
              <span className="mx-2 text-zinc-400">·</span>
              本页：<a href={PAGE_URL} className="font-semibold text-blue-700 underline">{PAGE_URL}</a>
              <span className="mx-2 text-zinc-400">·</span>
              联系：<a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-blue-700 underline">{CONTACT_EMAIL}</a>
            </p>
          </div>
        </div>
      </section>

      {/* 9 · Final CTA */}
      <section className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            先来一场 30 分钟需求摸底
          </h2>
          <p className="mt-6 text-lg text-zinc-300">
            免费、不绑、不卖软件——只判断你的场景适不适合 3 天陪跑。聊完不合适也告诉你不合适。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              预约飞书会议 →
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-8 py-4 text-base font-semibold text-white hover:bg-zinc-800"
            >
              发邮件 {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
