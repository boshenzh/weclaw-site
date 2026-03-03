import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OpenClaw 配置服务 | 专业 AI 助手部署",
  description:
    "专业的 OpenClaw 配置与部署服务，中文支持，快速上手。帮助创业者、投资人、产品团队实现工作流自动化。",
  openGraph: {
    title: "OpenClaw 配置服务 | 专业 AI 助手部署",
    description:
      "专业的 OpenClaw 配置与部署服务，中文支持，快速上手。帮助创业者、投资人、产品团队实现工作流自动化。",
    locale: "zh_CN",
  },
};

export default function SetupPage() {
  const targetAudiences = [
    {
      title: "创业者 & CEO",
      description: "每天 10+ 会议，需要自动化纪要和跟进任务",
    },
    {
      title: "投资人 & VC",
      description: "管理多个项目，需要投后管理自动化",
    },
    {
      title: "产品经理",
      description: "需求收集、优先级排序、进度跟踪自动化",
    },
    {
      title: "技术团队",
      description: "代码审查、文档生成、技术债管理",
    },
  ];

  const differentiators = [
    {
      title: "中文界面与工作流优化",
      description: "针对中文用户习惯优化，无需担心语言障碍",
    },
    {
      title: "集成国内常用工具",
      description: "支持飞书、钉钉、企业微信等主流协作平台",
    },
    {
      title: "一对一配置指导",
      description: "专业工程师全程指导，确保配置符合你的工作流",
    },
    {
      title: "持续技术支持",
      description: "配置后提供技术支持，遇到问题随时解决",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "预约咨询",
      description: "15 分钟了解你的需求和工作流程",
    },
    {
      number: "02",
      title: "配置部署",
      description: "连接日历、消息、工作流等工具，定制你的 AI 助手",
    },
    {
      number: "03",
      title: "交付培训",
      description: "确保你和团队能够熟练使用 OpenClaw",
    },
  ];

  const pricingTiers = [
    {
      name: "基础版",
      price: "¥999",
      features: [
        "基础配置与部署",
        "1 小时一对一培训",
        "邮件技术支持",
        "配置文档交付",
      ],
    },
    {
      name: "进阶版",
      price: "¥2,999",
      popular: true,
      features: [
        "定制工作流配置",
        "3 小时深度培训",
        "1 个月技术支持",
        "工具集成优化",
        "定期回访与优化",
      ],
    },
    {
      name: "企业版",
      price: "定制",
      features: [
        "团队批量部署",
        "持续技术支持",
        "定制开发服务",
        "专属客户经理",
        "SLA 保障",
      ],
    },
  ];

  const useCases = [
    {
      title: "会议管理与纪要自动化",
      description: "自动记录会议内容，生成纪要，提取待办事项并自动跟进",
    },
    {
      title: "投资人的投后管理",
      description: "跟踪被投企业进展，自动整理月报，提醒关键节点",
    },
    {
      title: "销售团队的客户跟进",
      description: "自动记录客户沟通，提醒跟进时机，生成销售报告",
    },
    {
      title: "产品团队的需求管理",
      description: "收集用户反馈，整理需求优先级，跟踪开发进度",
    },
  ];

  const faqs = [
    {
      question: "OpenClaw 支持中文吗？",
      answer:
        "完全支持。我们的配置服务会针对中文环境优化，确保 OpenClaw 能够理解和处理中文内容。",
    },
    {
      question: "能否集成飞书、钉钉、企业微信？",
      answer:
        "可以。我们支持主流国内协作工具的集成，包括飞书、钉钉、企业微信等。",
    },
    {
      question: "配置需要多长时间？",
      answer:
        "基础配置通常在 1-2 小时内完成。定制化配置可能需要 1-3 个工作日，具体取决于复杂度。",
    },
    {
      question: "是否提供后续技术支持？",
      answer:
        "是的。进阶版和企业版包含技术支持服务。基础版用户也可以通过邮件获得支持。",
    },
    {
      question: "数据安全如何保障？",
      answer:
        "OpenClaw 在本地运行，你的数据不会上传到第三方服务器。我们会指导你配置安全的访问权限。",
    },
    {
      question: "我需要技术背景吗？",
      answer:
        "不需要。我们的服务面向所有用户，无论技术背景如何。我们会全程指导配置和使用。",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="text-center">
          <div className="mb-4 inline-block rounded-full border px-4 py-1.5 text-sm text-zinc-600">
            面向中文用户 · 专业配置服务
          </div>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            让 OpenClaw 为你工作
            <br />5 分钟完成配置
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-zinc-700 md:text-lg">
            专业的 OpenClaw 配置服务，让你的 AI
            助手真正为你工作。不只是安装，更是为你的工作流量身定制。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="rounded-md bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            >
              立即预约配置
            </a>
            <a
              href="#pricing"
              className="rounded-md border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            >
              查看定价
            </a>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="border-t bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-zinc-900">
            适合谁使用
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {targetAudiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border bg-white p-6 ring-1 ring-zinc-200"
              >
                <h3 className="mb-2 text-base font-semibold text-zinc-900">
                  {audience.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-zinc-900">
            为什么选择我们
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-6"
              >
                <h3 className="mb-2 text-base font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-zinc-900">
            工作流程
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl border bg-white p-6">
                <div className="mb-3 font-mono text-2xl font-semibold text-zinc-900">
                  {step.number}
                </div>
                <h3 className="mb-2 text-base font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-4 text-center text-2xl font-semibold tracking-tight text-zinc-900">
            透明定价
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-zinc-600">
            选择适合你的配置方案，所有价格均为一次性费用
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-6 ${
                  tier.popular
                    ? "border-zinc-900 ring-2 ring-zinc-900"
                    : "border-zinc-200"
                }`}
              >
                {tier.popular && (
                  <div className="mb-3 inline-block rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                    最受欢迎
                  </div>
                )}
                <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                  {tier.name}
                </h3>
                <div className="mb-6 text-3xl font-semibold text-zinc-900">
                  {tier.price}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-sm text-zinc-600"
                    >
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-zinc-600">
            本月前 10 位客户享 8 折优惠 · 100% 满意保证
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="border-t bg-zinc-50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-zinc-900">
            使用场景
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border bg-white p-6"
              >
                <h3 className="mb-2 text-base font-semibold text-zinc-900">
                  {useCase.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-zinc-900">
            常见问题
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border bg-white p-6">
                <h3 className="mb-2 text-base font-semibold text-zinc-900">
                  {faq.question}
                </h3>
                <p className="text-sm leading-6 text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="border-t bg-zinc-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight">
            准备好开始了吗？
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-zinc-300">
            立即预约免费咨询，了解 OpenClaw 如何帮助你提升工作效率
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-white"
            >
              预约 15 分钟咨询
            </a>
            <a
              href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-zinc-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-white"
            >
              通过飞书联系
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-400">
            本月仅剩 5 个配置名额
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-zinc-600">
              © 2026 OpenClaw 配置服务. 保留所有权利。
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-zinc-600 hover:text-zinc-900">
                首页
              </Link>
              <Link href="/docs" className="text-zinc-600 hover:text-zinc-900">
                文档
              </Link>
              <a
                href="https://github.com/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
