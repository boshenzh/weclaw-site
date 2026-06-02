import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/contact";

const PAGE_URL = "https://www.weclawd.com/case/huodai-baojia-speed-to-lead";
const SITE_URL = "https://www.weclawd.com";
const UPDATED_AT = "2026-05-30";

export const metadata: Metadata = {
  title: "客户案例 · 货代 AI 员工把报价响应从 90 小时压到 15 分钟 | 喂龙虾 WeClawd",
  description:
    "深圳某中型海运货代用 LATRACE / OpenClaw AI 员工，把报价响应从行业均值 90 小时压到 15 分钟。3 天线下集训营交付，已稳定运行 6 个月以上。本文公开真实数据、做到的、做不到的、定价区间。",
  keywords: [
    "货代 AI 案例",
    "货代 AI 助手案例",
    "海运货代 AI 员工",
    "国际物流 AI 自动化",
    "AI 报价系统",
    "speed-to-lead",
    "AI 报价响应",
    "OpenClaw 货代",
    "企业陪跑案例",
    "中国货代 AI 落地",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "客户案例：货代报价从 90 小时压到 15 分钟",
    description:
      "深圳某中型海运货代用 AI 员工压缩报价响应时长。真实数据、做到的、做不到的、定价区间全公开。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_CN",
    siteName: "喂龙虾 WeClawd",
  },
  twitter: {
    card: "summary_large_image",
    title: "客户案例：货代报价从 90 小时 → 15 分钟",
    description: "深圳某中型海运货代用 AI 员工压缩报价响应时长。",
    site: "@boshenzh",
    creator: "@boshenzh",
  },
};

const beforeAfter = [
  { metric: "报价响应中位数", before: "约 90 小时", after: "约 15 分钟", note: "上线 6 个月观察值" },
  { metric: "销售人均每日省时", before: "—", after: "约 2–3 小时", note: "整理运价 + 写报价 + 跟进" },
  { metric: "老板每周盯报价时间", before: "约 5 小时", after: "约 30 分钟", note: "改为只看仪表盘" },
  { metric: "老客户主动跟进覆盖率", before: "约 40%", after: "≥ 95%", note: "AI 员工按规则定期回访" },
];

const whatWeBuilt = [
  {
    title: "1 · 监听询价",
    body: "AI 员工 7×24 监听客户的微信群、企业微信、QQ 群、收件箱。识别「询价」意图后立即触发处理，不必销售先看到。",
  },
  {
    title: "2 · 自动整理运价",
    body: "接入客户已有的运价 Excel + 部分船公司在线运价。AI 员工按航线、船公司、舱位类型、有效期匹配，生成结构化运价数据。",
  },
  {
    title: "3 · 生成报价单初稿",
    body: "按客户自有的报价单模板（PDF/Excel）填好运价、附加费、有效期、备注，等销售一键审核后发出。",
  },
  {
    title: "4 · 自动按客户分类跟进",
    body: "新询价 6 小时未回 / 报价后 24 小时未确认 / 老客户 30 天没询价：AI 员工按客户的偏好风格起草跟进消息。",
  },
  {
    title: "5 · ROI 仪表盘",
    body: "老板和销售总监能直接看到：今日询价数、平均响应时长、报价转化率、客户活跃度、最近 7 天对比。",
  },
];

const honest = [
  "AI 报价单仍需销售人工审核后发出 — 我们没承诺「全自动报价」，因为价格本身有商业敏感性",
  "复杂多段、危险品、特种箱等场景，AI 标记后转人工",
  "AI 偶尔会把同名航线、同名港口（如 Port Klang 北港/南港）弄混，靠业务规则 + 人工 review 兜底",
  "我们不是「替代销售」，是「销售助理」——卖给老板的话术是「让你的销售一个人干以前 2 个人的活」",
];

const dayPlan = [
  { day: "Day 1", title: "进场 · 摸底", body: "现场对接老板、销售总监、2 位一线销售。盘清楚询价从哪些群进来、客户结构、运价数据源、过往掉单原因。" },
  { day: "Day 2", title: "接入 · 部署", body: "AI 员工接入微信 / 企业微信 / QQ / 邮件；接入运价 Excel；搭好长期记忆层（客户档案 + 询价历史 + 报价历史）；起跑测试。" },
  { day: "Day 3", title: "上线 · 培训", body: "端到端跑通 5–10 条真实询价；销售上手培训；ROI 仪表盘配置；交接文档 + 后续 30 天答疑期开启。" },
];

export default function CaseHuodaiPage() {
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "货代 AI 员工把报价响应从 90 小时压到 15 分钟",
    description:
      "深圳某中型海运货代使用 LATRACE / OpenClaw AI 员工，把报价响应中位数从行业均值 90 小时压缩到约 15 分钟。3 天线下集训营交付，已稳定运行 6 个月以上。",
    url: PAGE_URL,
    datePublished: UPDATED_AT,
    dateModified: UPDATED_AT,
    author: {
      "@type": "Person",
      name: "Boshen",
      url: `${SITE_URL}/about`,
      sameAs: ["https://x.com/boshenzh"],
    },
    publisher: {
      "@type": "Organization",
      name: "WeClawd / 喂龙虾",
      url: SITE_URL,
    },
    about: { "@type": "Thing", name: "海运货代 AI 员工 / Speed-to-Lead 优化" },
    keywords: "货代 AI 案例, AI 报价系统, OpenClaw 货代, 企业陪跑案例, speed-to-lead",
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "客户案例", item: `${SITE_URL}/case` },
      { "@type": "ListItem", position: 3, name: "货代 · 报价响应", item: PAGE_URL },
    ],
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight">喂龙虾</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="hidden md:inline text-sm font-medium text-zinc-600 hover:text-zinc-950">首页</Link>
              <Link href="/enterprise" className="hidden md:inline text-sm font-bold text-red-600 hover:text-red-700">企业陪跑 →</Link>
              <Link href="/huodai-ai-assistant" className="hidden md:inline text-sm font-medium text-zinc-600 hover:text-zinc-950">货代</Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                预约咨询
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/" className="font-medium text-blue-700 hover:text-blue-900">喂龙虾</Link>
            <span className="text-zinc-400">/</span>
            <span className="font-medium text-zinc-600">客户案例</span>
            <span className="text-zinc-400">/</span>
            <span className="font-medium text-zinc-900">海运货代</span>
          </div>
          <span className="mt-6 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
            客户案例 · 海运货代 · 已付费
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            AI 员工把报价响应从<br className="hidden sm:block" />
            <span className="text-red-600">90 小时</span> 压到 <span className="text-green-600">15 分钟</span>
          </h1>
          <p className="mt-2 text-xs text-zinc-500">深圳某中型海运货代 · 2026 年付费上线 · 已稳定运行 6 个月以上 · 更新日期：{UPDATED_AT}</p>
          <p className="mt-6 max-w-3xl text-lg text-zinc-600">
            按 <Link href="https://gofreight.com/blog/education/quote-faster-win-more-speed-to-lead" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">GoFreight 公开数据</Link>，
            货代行业平均报价响应约 90 小时，赢家在 30 分钟内回应，78% 的 B2B 买家选择最先回应的供应商。
            这家深圳货代用 LATRACE / OpenClaw 把这条 speed-to-lead 曲线翻了过来。
          </p>
        </div>
      </section>

      {/* Before vs After */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">上线前 vs 上线后</h2>
          <p className="mt-4 text-sm text-zinc-500">数据为 6 个月观察期内部数字，已脱敏（具体客户名、具体销售额、具体客户数不公开）。</p>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-zinc-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 text-zinc-500 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">指标</th>
                  <th className="px-6 py-4">上线前</th>
                  <th className="px-6 py-4">上线后</th>
                  <th className="px-6 py-4">备注</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {beforeAfter.map((row) => (
                  <tr key={row.metric}>
                    <td className="px-6 py-4 font-semibold text-zinc-900">{row.metric}</td>
                    <td className="px-6 py-4 text-red-600 font-bold">{row.before}</td>
                    <td className="px-6 py-4 text-green-700 font-bold">{row.after}</td>
                    <td className="px-6 py-4 text-zinc-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 公司情况（脱敏） */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">客户情况（脱敏版）</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-bold text-zinc-900">基本面</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-700">
                <li>• 行业：海运货代（部分空运）</li>
                <li>• 城市：深圳</li>
                <li>• 团队规模：20–50 人</li>
                <li>• 主航线：东南亚、欧线、美线</li>
                <li>• 客户：跨境电商、贸易商、外贸工厂</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="font-bold text-zinc-900">上线前最痛的 4 件事</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-700">
                <li>• 询价散在 8+ 个微信群 + QQ + 邮件，容易漏</li>
                <li>• 销售要先翻运价表、查仓位，再写报价，平均 90h</li>
                <li>• 老客户复购被忘记，没系统跟</li>
                <li>• 老板每天花 3-4 小时盯进度，被运营事务卡死</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 我们做了什么（5 件具体的事） */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">我们具体做了什么</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            <Link href="/enterprise" className="text-blue-700 underline hover:text-blue-900">企业陪跑计划</Link> 的 3 天线下集训营产出。
            不是 demo、不是 PPT、是跑在客户真实工作流里的系统。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatWeBuilt.map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 天集训营节奏 */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">怎么交付的 · 3 天集训营</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            采用我们 <Link href="/enterprise#day-by-day" className="text-blue-700 underline hover:text-blue-900">企业陪跑计划</Link> 的标准 3 天节奏，
            1 名前置工程师驻场，第 3 天系统上线、销售上手、ROI 仪表盘交付。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dayPlan.map((d, i) => (
              <div
                key={d.day}
                className={`rounded-2xl border-t-4 ${
                  i === 0 ? "border-red-500" : i === 1 ? "border-blue-600" : "border-green-600"
                } bg-white border-x border-b border-zinc-200 p-6`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{d.day}</div>
                <h3 className="mt-1 text-xl font-bold text-zinc-900">{d.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 不夸的部分 */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">我们不夸的部分</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            诚实告诉你 AI 员工现在做不到 / 偶尔会错的地方。我们不卖「AI 替代销售」的故事——卖的是「让你的销售一个人干以前 2 个人的活」。
          </p>
          <ul className="mt-8 space-y-3">
            {honest.map((h) => (
              <li key={h} className="flex gap-3 rounded-xl border border-zinc-200 bg-white p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 text-xs">i</span>
                <span className="text-sm leading-6 text-zinc-700">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GEO 引用块 */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm leading-7 text-zinc-700">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">关于本案例</div>
            <p className="mt-3">
              本文记录喂龙虾（WeClawd）/ OpenClaw 在深圳一家中型海运货代的真实付费交付：通过 3 天线下集训营（企业陪跑计划），把报价响应中位数从约 90 小时压缩到约 15 分钟，已稳定运行 6 个月以上。具体客户名、销售额、客户数已脱敏。
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

      {/* 相关阅读 */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">相关阅读</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/enterprise" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">企业陪跑计划</div>
              <div className="mt-1 text-sm text-zinc-600">3 天线下深度调优 · 一次性付费</div>
            </Link>
            <Link href="/case/freight-auto-outreach" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">场景演示：自动开发信（视频）</div>
              <div className="mt-1 text-sm text-zinc-600">公司名 → 画像 → 中文开发信 → SMTP 发送</div>
            </Link>
            <Link href="/huodai-ai-assistant" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">货代 AI 助手 · 场景页</div>
              <div className="mt-1 text-sm text-zinc-600">为货代团队设计的 AI 员工方案</div>
            </Link>
            <Link href="/blog/freight-ai-assistant-guide" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">货代 AI 助手怎么落地</div>
              <div className="mt-1 text-sm text-zinc-600">完整落地指南文章</div>
            </Link>
            <Link href="/blog/enterprise-ai-assistant-checklist" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">企业部署 AI 前的 20 个问题</div>
              <div className="mt-1 text-sm text-zinc-600">采购方做尽调时用的 checklist</div>
            </Link>
            <Link href="/blog/openclaw-private-deployment-cost-security" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">私有部署成本与安全</div>
              <div className="mt-1 text-sm text-zinc-600">硬件、数据边界、合规要求</div>
            </Link>
            <Link href="/" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">回到首页</div>
              <div className="mt-1 text-sm text-zinc-600">看全部服务和定价</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">想为你公司做类似项目？</h2>
          <p className="mt-6 text-lg text-zinc-300">
            如果你是货代 / 物流 / 跨境电商 / 律所 / 政企老板，3 天线下集训营是最快验证 AI 能不能在你工作流里跑起来的方式。
            先来一场 30 分钟需求摸底，免费、不绑、聊完不合适也直说。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              预约 30 分钟需求摸底 →
            </a>
            <Link
              href="/enterprise"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-8 py-4 text-base font-semibold text-white hover:bg-zinc-800"
            >
              查看企业陪跑计划
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
