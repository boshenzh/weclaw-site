import Link from "next/link";

const features = [
  {
    title: "5 分钟搞定",
    desc: "把 OpenClaw 连上你的日历、消息、自动化流程。照着做就能跑起来。",
  },
  {
    title: "面向中文用户",
    desc: "更贴近国内常见使用习惯：明确步骤、少术语、可复制粘贴。",
  },
  {
    title: "可扩展",
    desc: "从基础配置到进阶工作流：会议纪要、合同审阅、客户跟进、投后节奏。",
  },
];

const steps = [
  {
    title: "1) 安装 / 启动 OpenClaw",
    desc: "确保你的 OpenClaw 已经在运行，并且能接收你的消息。",
  },
  {
    title: "2) 连接日历/消息",
    desc: "把 iCloud / CalDAV、Telegram 等渠道接入，打通输入输出。",
  },
  {
    title: "3) 跑通一个工作流",
    desc: "例如：创建会议 → 纪要 → action items → 日历提醒。",
  },
];

const faqs = [
  {
    q: "这是 OpenClaw 官方官网吗？",
    a: "不是。这里是一个面向中文用户的上手/配置站点模板，你可以按自己的品牌改。",
  },
  {
    q: "要不要绑定邮箱/Gmail API？",
    a: "不一定。你可以只让 OpenClaw 起草邮件；如果要自动发送，再选择 OAuth 或 App Password。",
  },
  {
    q: "我能部署到哪里？",
    a: "推荐 Vercel（绑定 GitHub 一键部署）。也可以自建部署。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            SetupClaw 中文版
          </Link>
          <nav className="flex items-center gap-4 text-sm text-zinc-700">
            <a href="#features" className="hover:text-zinc-950">功能</a>
            <a href="#steps" className="hover:text-zinc-950">上手流程</a>
            <a href="#faq" className="hover:text-zinc-950">FAQ</a>
            <a
              className="rounded-md bg-zinc-900 px-3 py-2 text-white hover:bg-zinc-800"
              href="#get-started"
            >
              开始
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs text-zinc-700">
                面向中文用户的 OpenClaw 上手站点模板
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                用 OpenClaw 把你的工作流自动化，
                <span className="text-zinc-500">从今天开始</span>
              </h1>
              <p className="mt-4 max-w-prose text-base leading-7 text-zinc-700">
                这是一个类似 setupclaw.com 的中文落地页/引导站代码库：
                你可以改成自己的品牌，接入你的指引文档、教程、案例和入口。
              </p>
              <div id="get-started" className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                  href="#steps"
                >
                  看上手步骤
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-md border px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                  href="#faq"
                >
                  先看 FAQ
                </a>
              </div>
              <p className="mt-4 text-xs text-zinc-500">
                你可以直接部署到 Vercel，并用 GitHub 自动发布。
              </p>
            </div>

            <div className="rounded-2xl border bg-gradient-to-br from-zinc-50 to-white p-6">
              <div className="text-sm font-medium text-zinc-900">推荐入口文案（可复制）</div>
              <pre className="mt-3 overflow-x-auto rounded-xl border bg-white p-4 text-xs leading-5 text-zinc-800">
{`想快速上手 OpenClaw？\n\n1）先连日历（iCloud/CalDAV）\n2）再连消息（Telegram/…）\n3）跑通一个闭环：会议 → 纪要 → action items → 提醒\n\n把你的目标直接发给你的 OpenClaw：\n“帮我把 X 自动化，输出模板 + 下一步行动项。”`}
              </pre>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">你能得到什么</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border p-6">
                <div className="text-base font-semibold">{f.title}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-700">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="steps" className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">最小上手流程</h2>
              <p className="mt-2 text-sm text-zinc-700">
                建议先跑通一个“闭环”，再逐步扩展。
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border p-6">
                <div className="text-base font-semibold">{s.title}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-700">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border p-6">
                <div className="text-base font-semibold">{item.q}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-700">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border bg-zinc-900 px-6 py-12 text-white md:px-10">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">下一步：接入你的内容</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-200">
              你可以把这里改成：教程目录、配置向导、案例库、付费入口、newsletter、社群链接等。
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
              >
                打开 /docs（占位）
              </Link>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10"
              >
                去 Vercel 部署
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-zinc-600">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} SetupClaw 中文版（模板）</div>
            <div className="flex gap-4">
              <a className="hover:text-zinc-950" href="/">首页</a>
              <a className="hover:text-zinc-950" href="/docs">Docs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
