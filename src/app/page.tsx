import Link from "next/link";
import Image from "next/image";
import IntegrationLogos from "@/components/IntegrationLogos";

const pricing = [
  {
    name: "托管部署",
    price: "¥8,800",
    description: "推荐方案 - 我们在云端部署和维护",
    features: [
      "云端 VPS 部署",
      "14 天超级护理支持",
      "当天完成部署",
      "安全加固配置",
      "邮件和日历集成",
      "最多 3 个工作流",
    ],
    recommended: true,
  },
  {
    name: "Mac Mini 远程",
    price: "¥15,800",
    description: "包含 iMessage 集成",
    features: [
      "Mac Mini 远程部署",
      "支持 iMessage",
      "14 天超级护理支持",
      "当天完成部署",
      "安全加固配置",
      "最多 3 个工作流",
    ],
    recommended: false,
  },
  {
    name: "Mac Mini 上门",
    price: "¥19,800",
    description: "仅限深圳",
    features: [
      "工程师上门部署",
      "支持 iMessage",
      "14 天超级护理支持",
      "当天完成部署",
      "现场培训指导",
      "最多 3 个工作流",
    ],
    recommended: false,
  },
  {
    name: "额外智能体",
    price: "¥4,800",
    description: "为团队成员添加一个 AI 助手",
    features: [
      "独立的 AI 智能体",
      "独立的邮箱和日历",
      "独立的权限配置",
      "同样的安全标准",
      "统一管理后台",
      "按需扩展",
    ],
    recommended: false,
  },
];

const comparison = [
  {
    feature: "部署时间",
    diy: "2-4 周（如果顺利）",
    weclaw: "当天完成",
  },
  {
    feature: "安全配置",
    diy: "需要自己研究",
    weclaw: "企业级安全加固",
  },
  {
    feature: "持续维护",
    diy: "你自己负责",
    weclaw: "我们负责更新和监控",
  },
  {
    feature: "技术支持",
    diy: "靠社区论坛",
    weclaw: "专属微信群",
  },
  {
    feature: "集成配置",
    diy: "逐个摸索",
    weclaw: "预配置常用集成",
  },
];

const faqs = [
  {
    q: "为什么不自己部署？",
    a: "你当然可以。OpenClaw 是开源的。但在安全加固、持续维护、故障排查上，你会花费大量时间。我们的客户通常是创始人和高管，他们的时间更值钱。",
  },
  {
    q: "数据安全吗？",
    a: "我们使用 OAuth 中间件、Docker 沙箱隔离、完整的审计日志。但说实话，让 AI 访问你的邮件和日历永远不是 100% 安全的。我们做的是将风险降到最低，并提供完全透明的安全措施。",
  },
  {
    q: "OpenAI 收购 OpenClaw 后会怎样？",
    a: "OpenClaw 仍然是开源的。即使未来有变化，我们会帮你迁移到其他方案。这就是为什么我们提供持续支持。",
  },
  {
    q: "支持哪些集成？",
    a: "飞书、钉钉、企业微信、QQ、Telegram、Slack、Gmail、Notion、以及通过 Composio 支持的 10,000+ 应用。如果你需要特定集成，我们可以帮你配置。",
  },
  {
    q: "不满意可以退款吗？",
    a: "100% 满意保证。如果部署后 14 天内你觉得不值，全额退款，无需理由。",
  },
  {
    q: "需要多长时间完成部署？",
    a: "通常 5-8 小时内完成。付款后 48 小时内我们会联系你安排启动会议，20-45 分钟需求评估后，1-3 小时现场构建，当天即可上线使用。",
  },
  {
    q: "支持哪些地区？",
    a: "全球远程部署服务。上门服务目前仅限深圳。其他城市可选择远程部署方案。",
  },
  {
    q: "购买后会得到什么？",
    a: "VPS 或 Mac Mini 配置、安全加固（Docker 沙箱、防火墙、执行白名单）、Composio OAuth 中间件、邮件和日历集成、最多 3 个工作流配置、完整文档、以及 14 天专属支持。",
  },
];

const whyUs = [
  {
    title: "当天上线",
    desc: "不是几周，不是几天。付款后当天完成部署，立即开始使用。",
  },
  {
    title: "安全加固",
    desc: "OAuth 中间件、Docker 沙箱、防火墙配置、审计日志。从第一天起就是企业级安全。",
  },
  {
    title: "14 天超级护理",
    desc: "专属微信群直接支持，包括工作流调优、权限扩展、边界情况修复。",
  },
  {
    title: "持续维护可选",
    desc: "14 天后可选择付费托管护理计划，获得持续监控、更新和支持。",
  },
];

const afterPurchase = [
  {
    step: "01",
    title: "启动会议",
    desc: "付款后 48 小时内联系你，安排 20-45 分钟的需求评估会议。",
  },
  {
    step: "02",
    title: "现场部署",
    desc: "1-3 小时完成部署、安全加固、集成配置。当天上线。",
  },
  {
    step: "03",
    title: "工作流配置",
    desc: "配置最多 3 个工作流，包括邮件分类、会议安排等自动化任务。",
  },
  {
    step: "04",
    title: "14 天超级护理",
    desc: "专属微信群支持，工作流调优、权限扩展、问题修复。之后可选付费托管计划。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "喂龙虾",
            url: "https://weclaw.com",
            logo: "https://weclaw.com/logos/weclaw-logo.png",
            description: "OpenClaw AI 助手专业部署和托管服务提供商",
            address: {
              "@type": "PostalAddress",
              addressCountry: "CN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "销售咨询",
              email: "hello@weclaw.com",
              availableLanguage: ["zh-CN", "en"],
            },
            sameAs: ["https://github.com/openclaw/openclaw"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "AI 助手部署和托管服务",
            provider: {
              "@type": "Organization",
              name: "喂龙虾",
            },
            areaServed: "CN",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "OpenClaw 部署服务",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "托管部署",
                    description: "云端 VPS 部署和维护服务",
                  },
                  price: "8800",
                  priceCurrency: "CNY",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mac Mini 远程部署",
                    description: "包含 iMessage 集成的远程部署服务",
                  },
                  price: "15800",
                  priceCurrency: "CNY",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mac Mini 上门部署",
                    description: "工程师上门部署服务（仅限深圳）",
                  },
                  price: "19800",
                  priceCurrency: "CNY",
                },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight">
                喂龙虾
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <a
                href="#pricing"
                className="hidden md:inline text-sm font-medium text-zinc-600 hover:text-zinc-950"
              >
                价格
              </a>
              <a
                href="#how-it-works"
                className="hidden md:inline text-sm font-medium text-zinc-600 hover:text-zinc-950"
              >
                工作原理
              </a>
              <a
                href="#faq"
                className="hidden md:inline text-sm font-medium text-zinc-600 hover:text-zinc-950"
              >
                FAQ
              </a>
              <a
                href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                预约飞书会议
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20 lg:py-28 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              正在接受新客户
            </div>

            <div className="flex flex-col items-center justify-center mb-6">
              <Image
                src="/logos/weclaw-logo.png"
                alt="喂龙虾"
                width={2816}
                height={1536}
                className="w-auto h-32 mb-6"
              />
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                我们喂你部署和维护
                <br />
                团队的 AI 助手
              </h1>
            </div>

            <p className="text-xl text-zinc-600 leading-relaxed mb-4 max-w-2xl mx-auto">
              远程部署，全球服务，从第一天起就安全加固。
            </p>

            <p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
              基于 OpenClaw 的白手套部署和托管服务。适合 4-50
              人的团队，创始人和高管。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
              >
                预约免费 15 分钟咨询
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-300 px-8 py-4 text-base font-semibold text-zinc-950 hover:border-zinc-400 hover:bg-zinc-50 transition-all"
              >
                查看价格
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                当天部署
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                14 天专属支持
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                100% 满意保证
              </div>
            </div>
          </div>
        </section>

        {/* Integration Logos Section */}
        <IntegrationLogos />

        {/* Features Section */}
        <section id="how-it-works" className="bg-zinc-50 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">
                为什么选择喂龙虾？
              </h2>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                你可以自己部署 OpenClaw。但你应该吗？
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-semibold text-zinc-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
              <div className="px-8 py-6 border-b border-zinc-200">
                <h3 className="text-2xl font-bold text-zinc-950">
                  自己部署 vs 喂龙虾
                </h3>
                <p className="text-zinc-600 mt-2">
                  时间就是金钱。让我们帮你节省两者。
                </p>
              </div>
              <div className="divide-y divide-zinc-200">
                {comparison.map((item) => (
                  <div
                    key={item.feature}
                    className="grid grid-cols-3 gap-4 px-8 py-4"
                  >
                    <div className="font-medium text-zinc-950">
                      {item.feature}
                    </div>
                    <div className="text-zinc-500">{item.diy}</div>
                    <div className="text-emerald-600 font-semibold">
                      {item.weclaw}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">
                简单透明的价格
              </h2>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                一次性设置费用，包含部署和 14 天超级护理支持。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl border-2 p-8 ${
                    plan.recommended
                      ? "border-blue-600 shadow-xl scale-105"
                      : "border-zinc-200 hover:border-zinc-300"
                  } transition-all`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                        推荐
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-zinc-950 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-zinc-600 mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-zinc-950">
                        {plan.price}
                      </span>
                      {plan.price !== "联系咨询" && (
                        <span className="text-zinc-500">一次性</span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                      plan.recommended
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
                    }`}
                  >
                    预约咨询
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center space-y-4">
              <p className="text-zinc-600">
                所有价格为一次性设置费用，包含 14 天超级护理支持。
              </p>
              <div className="bg-zinc-50 rounded-xl p-6 max-w-2xl mx-auto border border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-950 mb-3">
                  持续维护（可选）
                </h3>
                <p className="text-sm text-zinc-600 mb-4">
                  14
                  天后，您可以选择托管护理计划，获得持续监控、更新和技术支持。
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-4 border border-zinc-200">
                    <div className="font-semibold text-zinc-950 mb-2">
                      基础设施成本
                    </div>
                    <div className="text-zinc-600">
                      • 云 VPS：¥35-70/月（您自行承担）
                      <br />• Mac Mini 硬件：约 ¥4,200（一次性）
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-zinc-200">
                    <div className="font-semibold text-zinc-950 mb-2">
                      托管护理计划
                    </div>
                    <div className="text-zinc-600">
                      具体价格请预约咨询讨论
                      <br />
                      包含持续监控、更新和支持
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-zinc-50 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">
                常见问题
              </h2>
              <p className="text-xl text-zinc-600">
                还有疑问？直接预约咨询，我们详细聊。
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-zinc-200 p-8 hover:border-zinc-300 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-zinc-950 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* After Purchase Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">
                购买后的流程
              </h2>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                从付款到上线，我们全程陪伴。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {afterPurchase.map((item) => (
                <div
                  key={item.step}
                  className="relative bg-zinc-50 rounded-2xl p-8 border border-zinc-200"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-4 opacity-20">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-6">
              准备好开始了吗？
            </h2>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
              预约免费 15 分钟咨询，我们聊聊你的需求，看看 OpenClaw 是否适合你。
            </p>
            <a
              href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              预约飞书会议
            </a>
            <p className="mt-6 text-sm text-zinc-500">
              100% 满意保证 · 当天部署 · 14 天专属支持
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="text-lg font-semibold mb-4">喂龙虾</div>
              <p className="text-sm text-zinc-600">
                基于 OpenClaw 的专业部署和托管服务
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-950 mb-4">
                产品
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-zinc-600 hover:text-zinc-950"
                  >
                    价格
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-zinc-600 hover:text-zinc-950"
                  >
                    工作原理
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-sm text-zinc-600 hover:text-zinc-950"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-950 mb-4">
                资源
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-zinc-600 hover:text-zinc-950"
                  >
                    文档
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/openclaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 hover:text-zinc-950"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-950 mb-4">
                联系
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 hover:text-zinc-950"
                  >
                    预约会议
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@weclaw.com"
                    className="text-sm text-zinc-600 hover:text-zinc-950"
                  >
                    邮件咨询
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-zinc-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-zinc-600">
                © {new Date().getFullYear()} 喂龙虾. 保留所有权利。
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-sm text-zinc-600 hover:text-zinc-950"
                >
                  隐私政策
                </a>
                <a
                  href="#"
                  className="text-sm text-zinc-600 hover:text-zinc-950"
                >
                  使用条款
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
