import type { Metadata } from "next";
import { BOOKING_URL } from "@/lib/contact";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于喂龙虾 WeClawd｜OpenClaw AI 助手部署服务",
  description: "喂龙虾 WeClawd 为团队部署和维护私有 OpenClaw AI 助手，连接企业微信、飞书、邮箱、日历、文档和表格，落地客服、销售、法务、电商、财务、人事和物流运营工作流。",
  alternates: { canonical: "https://www.weclawd.com/about" },
};

const siteUrl = "https://www.weclawd.com";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Boshen",
  url: `${siteUrl}/about`,
  sameAs: ["https://x.com/boshenzh"],
  jobTitle: "OpenClaw 维护者",
  worksFor: { "@type": "Organization", name: "WeClawd / 喂龙虾", url: siteUrl },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WeClawd / 喂龙虾",
  url: siteUrl,
  logo: `${siteUrl}/logos/weclaw-logo.png`,
  sameAs: ["https://x.com/boshenzh", "https://github.com/openclaw"],
  founder: { "@type": "Person", name: "Boshen", sameAs: ["https://x.com/boshenzh"] },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <section className="border-b border-zinc-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:text-blue-900">← 返回首页</Link>
          <h1 className="mt-8 text-4xl font-bold tracking-tight lg:text-6xl">关于喂龙虾 WeClawd</h1>
          <p className="mt-6 text-xl leading-8 text-zinc-600">
            WeClawd 是基于 OpenClaw 的 AI 助手部署和托管服务，帮助企业把 AI 接入真实运营工具，而不是停留在聊天窗口里。
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8 space-y-10">
        <div>
          <h2 className="text-2xl font-bold">我们做什么</h2>
          <p className="mt-4 leading-7 text-zinc-600">
            我们为客户部署私有 OpenClaw AI 助手，配置企业微信、飞书、钉钉、邮箱、日历、文档、表格等工具连接，并围绕客服、销售、法务文档、电商运营、财务报销、人事行政、货代物流等传统运营场景设计工作流。
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">我们的原则</h2>
          <ul className="mt-4 space-y-3 leading-7 text-zinc-600">
            <li>• 先从低风险、高重复的工作流开始。</li>
            <li>• 对外发送、报价、合同、付款和法律判断保留人工审核。</li>
            <li>• 以权限最小化、审计和透明配置为默认安全原则。</li>
            <li>• 让 AI 成为执行助手，而不是替代业务负责人。</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">维护人</h2>
          <p className="mt-4 leading-7 text-zinc-600">
            喂龙虾 WeClawd 由 Boshen 维护，长期写企业 AI 助手、企业微信工作流、货代和国际物流的落地实践。常驻深圳。
          </p>
          <p className="mt-3 leading-7 text-zinc-600">
            X / Twitter：<a className="text-blue-700 hover:text-blue-900" href="/x" target="_blank" rel="me noopener">@boshenzh</a>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">联系</h2>
          <p className="mt-4 leading-7 text-zinc-600">邮箱：<a className="text-blue-700" href="mailto:boshen233@gmail.com">boshen233@gmail.com</a></p>
          <a className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">预约 15 分钟咨询</a>
        </div>
      </section>
    </main>
  );
}
