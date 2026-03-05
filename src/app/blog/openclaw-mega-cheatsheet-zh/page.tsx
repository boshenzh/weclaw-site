import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenClaw 超级速查表（中文）2026｜喂龙虾",
  description:
    "基于 OpenClaw Mega Cheatsheet 的中文整理版：安装、频道接入、记忆系统、会话、命令、浏览器自动化、Cron、调试与常见故障排查。",
  keywords: [
    "OpenClaw",
    "OpenClaw 教程",
    "OpenClaw 命令",
    "OpenClaw 速查表",
    "AI 助手",
    "自托管",
    "中文指南",
  ],
  openGraph: {
    title: "OpenClaw 超级速查表（中文）2026",
    description:
      "安装、模型、会话、记忆、技能、浏览器自动化、故障排查一页看懂。",
    url: "https://weclaw.com/blog/openclaw-mega-cheatsheet-zh",
    type: "article",
  },
  alternates: {
    canonical: "https://weclaw.com/blog/openclaw-mega-cheatsheet-zh",
  },
};

export default function OpenClawMegaCheatsheetZhPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight">喂龙虾</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/#faq"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950"
              >
                FAQ
              </Link>
              <a
                href="https://moltfounders.com/openclaw-mega-cheatsheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                原文
              </a>
            </div>
          </div>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-950 mb-6"
          >
            ← 返回首页
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">
            OpenClaw 超级速查表（中文）
          </h1>
          <p className="text-zinc-600 text-lg">
            本页是对《OpenClaw Mega Cheatsheet 2026》的中文整理版，适合创始人、运营和无编程背景用户快速上手。
          </p>
        </div>

        <section className="mb-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="text-2xl font-bold text-zinc-950 mb-4">1) 快速开始</h2>
          <div className="space-y-3 text-zinc-700">
            <p>
              <code>npm install -g openclaw@latest</code>
            </p>
            <p>
              <code>openclaw onboard --install-daemon</code>
            </p>
            <p>
              <code>openclaw channels login</code>
            </p>
            <p>
              <code>openclaw gateway --port 18789</code>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-950 mb-4">2) 常用命令（高频）</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>
              • 状态检查：<code>openclaw status</code>
            </li>
            <li>
              • 实时日志：<code>openclaw logs --follow</code>
            </li>
            <li>
              • 网关状态：<code>openclaw gateway status</code>
            </li>
            <li>
              • 模型列表：<code>openclaw models list --all</code>
            </li>
            <li>
              • 频道探测：<code>openclaw channels status --probe</code>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-950 mb-4">3) 工作区关键文件</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• AGENTS.md：代理操作规则</li>
            <li>• SOUL.md：人格、语气、边界</li>
            <li>• USER.md：用户偏好档案</li>
            <li>• IDENTITY.md：助手身份设定</li>
            <li>• MEMORY.md：长期记忆（建议仅在主私聊读取）</li>
            <li>• memory/YYYY-MM-DD.md：每日日志</li>
            <li>• TOOLS.md：本地环境速记</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-950 mb-4">4) 会话与命令</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• <code>/status</code>：查看当前会话状态</li>
            <li>• <code>/new</code> / <code>/reset</code>：新会话</li>
            <li>• <code>/model</code>：切换模型</li>
            <li>• <code>/compact</code>：压缩上下文</li>
            <li>• <code>/stop</code>：中断当前运行</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-950 mb-4">5) 浏览器自动化与定时任务</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>
              • 浏览器启动：<code>openclaw browser start</code>
            </li>
            <li>
              • 打开页面：<code>openclaw browser open &lt;url&gt;</code>
            </li>
            <li>
              • 截图：<code>openclaw browser screenshot</code>
            </li>
            <li>
              • Cron 列表：<code>openclaw cron list</code>
            </li>
            <li>
              • 手动触发：<code>openclaw cron run &lt;id&gt;</code>
            </li>
          </ul>
        </section>

        <section className="mb-12 rounded-2xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-bold text-zinc-950 mb-4">6) 安全与多用户建议</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• 群聊默认建议使用 allowlist，不要直接 open。</li>
            <li>• 多用户场景建议按账号隔离会话与权限。</li>
            <li>• 高风险工具（runtime/fs/elevated）尽量最小化暴露。</li>
            <li>• 定期执行 <code>openclaw doctor --deep</code> 体检。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-950 mb-4">7) 常见问题快速排查</h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• 不回复：检查配对、渠道登录、权限和提及规则。</li>
            <li>• 频道断连：<code>openclaw channels status --probe</code></li>
            <li>• 记忆异常：重建索引或检查 memory 文件是否存在。</li>
            <li>• 网关异常：<code>openclaw doctor --repair</code></li>
          </ul>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-sm text-zinc-600">
          <p>
            说明：本页为中文整理版本，便于快速参考；完整原文请见
            <a
              className="text-blue-600 hover:text-blue-700 ml-1"
              href="https://moltfounders.com/openclaw-mega-cheatsheet"
              target="_blank"
              rel="noopener noreferrer"
            >
              moltfounders.com/openclaw-mega-cheatsheet
            </a>
            。
          </p>
        </section>
      </article>
    </div>
  );
}
