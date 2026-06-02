import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/contact";

const PAGE_URL = "https://www.weclawd.com/case/freight-auto-outreach";
const SITE_URL = "https://www.weclawd.com";
const UPDATED_AT = "2026-06-01";

const VIDEO_SRC = "/videos/freight-auto-outreach.mp4";
const VIDEO_POSTER = "/videos/freight-auto-outreach-poster.jpg";

export const metadata: Metadata = {
  title: "场景演示 · 一行公司名 → 客户画像 + 自动开发信 | 喂龙虾 WeClawd",
  description:
    "演示视频：把一行公司名丢给 AI 员工，它自动调研公司主营、客户结构、出口流向，匹配我司航线与货类，生成个性化中文开发信草稿并发送。货代/外贸/跨境团队拓客提速场景。",
  keywords: [
    "AI 拓客",
    "AI 开发信",
    "自动开发信",
    "货代拓客",
    "外贸拓客自动化",
    "AI 客户画像",
    "speed-to-prospect",
    "OpenClaw 货代",
    "WeClawd 案例",
    "海运货代 AI 员工",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "一行公司名 → 客户画像 + 自动开发信（视频演示）",
    description:
      "把公司名丢给 AI 员工，它自动调研、画像、起草个性化开发信。货代拓客提速演示。",
    url: PAGE_URL,
    type: "article",
    locale: "zh_CN",
    siteName: "喂龙虾 WeClawd",
    images: [{ url: `${SITE_URL}${VIDEO_POSTER}`, width: 1280, height: 720 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "一行公司名 → 客户画像 + 自动开发信",
    description: "货代/外贸拓客 AI 员工演示视频。",
    site: "@boshenzh",
    creator: "@boshenzh",
    images: [`${SITE_URL}${VIDEO_POSTER}`],
  },
};

const whatYouSee = [
  {
    title: "1 · 输入只是一行公司名",
    body: "演示里给的是马来西亚 Klang 一家做精密注塑模具的工厂。除了公司名，AI 员工没有任何其他先验信息。",
  },
  {
    title: "2 · 自动调研公司公开信息",
    body: "搜索公司官网与公开商业数据库，提取主营业务、产品线、目标客户、距港距离、已知海外品牌客户名单，作为开发信的钩子。",
  },
  {
    title: "3 · 对照我司运价表判断匹配度",
    body: "读我司运价表（航线、POL、POD、船公司），与客户的可能进出口需求做匹配，输出「匹配度 + 推测的薄入口角度」，不夸大。",
  },
  {
    title: "4 · 起草中文开发信",
    body: "按 high-reply playbook（90–140 字、单一钩子、单一 CTA、不假装回信、不堆数据）生成一版中文开发信草稿。",
  },
  {
    title: "5 · 一键发送（带人工 review）",
    body: "走 SMTP 发出，发件箱、抄送、签名都按你的销售身份配置。默认人工审一道再发，避免错发。",
  },
];

const honest = [
  "演示里使用的公司是真实存在的马来西亚企业，但没有真实成交。这是能力演示，不是付费客户案例",
  "AI 不会编造对方采购联系人或电话；如果公开渠道找不到，会标「待确认」而不是猜",
  "起草版本仍建议销售或老板人工 review 后再发，特别是首封冷邮件",
  "匹配度判断依赖我司当前运价表。航线没覆盖的，AI 会如实标「业务不匹配」并建议归档，不会硬卖",
  "目前演示走 SMTP 邮件；微信好友 / 企业微信外联 / LinkedIn 等通道需另接",
];

const fitFor = [
  { who: "海运 / 空运货代", why: "把展会名单、客户线索表、行业数据库里的公司名批量过一遍画像 + 起草开发信，销售只做最后一步审核。" },
  { who: "外贸工厂 / 跨境电商", why: "对一份目标客户清单做画像与个性化开发信，比模板群发回复率高。" },
  { who: "B2B 销售 / 商务拓展", why: "客户名→画像→个性化邮件的速度从「半天一家」压到「分钟级一家」。" },
];

export default function CaseFreightAutoOutreachPage() {
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "一行公司名 → 客户画像 + 自动开发信",
    description:
      "WeClawd / OpenClaw 货代拓客场景演示：输入一行公司名，AI 员工自动调研公司、对照我司运价表判断匹配度、起草个性化中文开发信、走 SMTP 发送。",
    thumbnailUrl: [`${SITE_URL}${VIDEO_POSTER}`],
    uploadDate: UPDATED_AT,
    contentUrl: `${SITE_URL}${VIDEO_SRC}`,
    duration: "PT2M45S",
    publisher: {
      "@type": "Organization",
      name: "WeClawd / 喂龙虾",
      url: SITE_URL,
    },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "客户案例", item: `${SITE_URL}/case` },
      { "@type": "ListItem", position: 3, name: "货代 · 自动开发信", item: PAGE_URL },
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
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/" className="font-medium text-blue-700 hover:text-blue-900">喂龙虾</Link>
            <span className="text-zinc-400">/</span>
            <span className="font-medium text-zinc-600">客户案例</span>
            <span className="text-zinc-400">/</span>
            <span className="font-medium text-zinc-900">货代 · 自动开发信</span>
          </div>
          <span className="mt-6 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
            场景演示 · 货代拓客 · 视频
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            一行公司名 →<br className="hidden sm:block" />
            <span className="text-blue-700">客户画像</span> + <span className="text-green-600">自动开发信</span>
          </h1>
          <p className="mt-2 text-xs text-zinc-500">货代 / 外贸 / 跨境团队拓客场景 · 演示视频 · 更新日期：{UPDATED_AT}</p>
          <p className="mt-6 max-w-3xl text-lg text-zinc-600">
            销售把一行公司名丢给 AI 员工，它就自己去查公司官网、判断主营和出口流向、对照你司运价表算匹配度，最后起草一份个性化中文开发信、走 SMTP 发出。整个流程默认带人工 review，不替你乱发。
          </p>
        </div>
      </section>

      {/* Video player */}
      <section className="border-b border-zinc-200 bg-zinc-100">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-black shadow-lg">
            <video
              className="aspect-video w-full"
              controls
              preload="metadata"
              poster={VIDEO_POSTER}
              playsInline
            >
              <source src={VIDEO_SRC} type="video/mp4" />
              你的浏览器不支持 HTML5 视频。<a href={VIDEO_SRC}>直接下载视频</a>
            </video>
          </div>
          <p className="mt-4 text-center text-xs text-zinc-500">
            演示视频约 2 分 45 秒 · 建议带声音观看 · 视频内出现的公司为公开真实企业，但未实际成交，仅作能力演示
          </p>
        </div>
      </section>

      {/* 视频里发生了什么 */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">视频里发生了什么</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            从用户输入到邮件送达，整个流程的 5 个关键步骤。除了第一步输入公司名，其他都是 AI 员工自动完成的。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatYouSee.map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 适合谁 */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">这个场景适合谁</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {fitFor.map((f) => (
              <div key={f.who} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-lg font-bold text-zinc-900">{f.who}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{f.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 诚实部分 */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">我们不夸的部分</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">
            这是能力演示，不是付费交付案例。下面这些边界，我们提前说在前面。
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
              本页是喂龙虾（WeClawd）/ OpenClaw 货代拓客 AI 员工的能力演示：输入一行公司名，AI 自动完成公司调研、客户画像、运价匹配、个性化中文开发信起草与 SMTP 发送。演示中的目标公司为公开真实企业（马来西亚精密注塑模具厂），但未实际成交，仅作能力展示。
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
            <Link href="/case/huodai-baojia-speed-to-lead" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">付费客户案例：货代报价 90h → 15min</div>
              <div className="mt-1 text-sm text-zinc-600">深圳货代真实付费交付案例</div>
            </Link>
            <Link href="/huodai-ai-assistant" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">货代 AI 助手 · 场景页</div>
              <div className="mt-1 text-sm text-zinc-600">为货代团队设计的 AI 员工方案</div>
            </Link>
            <Link href="/enterprise" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">企业陪跑计划</div>
              <div className="mt-1 text-sm text-zinc-600">3 天线下深度调优 · 一次性付费</div>
            </Link>
            <Link href="/blog/freight-ai-assistant-guide" className="rounded-2xl border border-zinc-200 bg-white p-5 hover:border-blue-300">
              <div className="font-semibold text-zinc-900">货代 AI 助手怎么落地</div>
              <div className="mt-1 text-sm text-zinc-600">完整落地指南文章</div>
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">想为你公司接入这条拓客流程？</h2>
          <p className="mt-6 text-lg text-zinc-300">
            如果你是货代 / 外贸 / 跨境电商 / B2B 销售负责人，先来一场 30 分钟需求摸底，看看 AI 员工能不能跑进你现有的销售流程。免费、不绑、聊完不合适也直说。
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
