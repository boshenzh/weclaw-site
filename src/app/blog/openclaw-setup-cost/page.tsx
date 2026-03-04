import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenClaw 部署成本详解 - 一次性费用、月度成本与 DIY 对比 | 喂龙虾",
  description: "详细了解 OpenClaw AI 助手的部署成本，包括一次性设置费用（¥3,800起）、月度运行成本（¥385-1,470/月），以及 DIY 与专业部署的对比分析。第一年总成本约 ¥8,420-21,440。",
  keywords: [
    "OpenClaw 成本",
    "OpenClaw 价格",
    "AI 助手部署费用",
    "OpenClaw 部署",
    "自托管 AI 成本",
    "企业 AI 预算",
    "OpenClaw DIY",
    "AI 助手托管",
    "OpenClaw 月费",
    "Anthropic API 费用",
  ],
  openGraph: {
    title: "OpenClaw 部署成本详解 - 喂龙虾",
    description: "详细分析 OpenClaw AI 助手的部署成本，包括一次性设置费用、月度运行成本，以及 DIY 与专业部署的对比。",
    url: "https://weclaw.com/blog/openclaw-setup-cost",
    type: "article",
    images: [
      {
        url: "/logos/weclaw-logo.png",
        width: 1200,
        height: 630,
        alt: "OpenClaw 部署成本详解",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw 部署成本详解",
    description: "详细分析 OpenClaw AI 助手的部署成本，包括一次性设置费用、月度运行成本。",
    images: ["/logos/weclaw-logo.png"],
  },
  alternates: {
    canonical: "https://weclaw.com/blog/openclaw-setup-cost",
  },
};

export default function OpenClawSetupCostPage() {
  return (
    <div className="min-h-screen bg-white">
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
              <Link
                href="/#pricing"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950"
              >
                价格
              </Link>
              <Link
                href="/#faq"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950"
              >
                FAQ
              </Link>
              <a
                href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
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

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-950 mb-6"
          >
            ← 返回首页
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-6">
            OpenClaw 部署成本详解
          </h1>
          <p className="text-xl text-zinc-600">
            OpenClaw 是一个开源 AI 助手，可以处理邮件分类、会议安排和工作流自动化。虽然软件本身免费，但部署和运行需要一定成本。本文详细分析各项费用。
          </p>
        </div>

        {/* One-time Setup Costs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">一次性设置费用</h2>

          <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200 mb-8">
            <div className="space-y-6">
              <div className="flex justify-between items-start pb-6 border-b border-zinc-200">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-zinc-950">托管部署</h3>
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      推荐
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 mb-3">
                    云端 VPS 部署和配置，适合大多数团队
                  </p>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• 云端 VPS 部署</li>
                    <li>• 14 天专属客服服务</li>
                    <li>• 当天完成部署</li>
                    <li>• 安全加固配置</li>
                  </ul>
                </div>
                <div className="text-right ml-6">
                  <div className="text-3xl font-bold text-zinc-950">¥3,800</div>
                  <div className="text-sm text-zinc-500 line-through">¥7,600</div>
                  <div className="text-xs text-emerald-600 font-semibold mt-1">限时 5 折</div>
                </div>
              </div>

              <div className="flex justify-between items-start pb-6 border-b border-zinc-200">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Mac Mini 远程部署</h3>
                  <p className="text-sm text-zinc-600 mb-3">
                    支持 iMessage 集成，适合需要 Apple 生态的团队
                  </p>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Mac Mini 远程部署</li>
                    <li>• 支持 iMessage</li>
                    <li>• 14 天专属客服服务</li>
                    <li>• 完整系统访问</li>
                  </ul>
                </div>
                <div className="text-right ml-6">
                  <div className="text-3xl font-bold text-zinc-950">¥7,900</div>
                  <div className="text-sm text-zinc-500 line-through">¥15,800</div>
                  <div className="text-xs text-emerald-600 font-semibold mt-1">限时 5 折</div>
                </div>
              </div>

              <div className="flex justify-between items-start pb-6 border-b border-zinc-200">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Mac Mini 上门部署</h3>
                  <p className="text-sm text-zinc-600 mb-3">
                    工程师上门服务，仅限深圳地区
                  </p>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• 工程师上门部署</li>
                    <li>• 支持 iMessage</li>
                    <li>• 现场培训指导</li>
                    <li>• 本地化支持</li>
                  </ul>
                </div>
                <div className="text-right ml-6">
                  <div className="text-3xl font-bold text-zinc-950">¥9,900</div>
                  <div className="text-sm text-zinc-500 line-through">¥19,800</div>
                  <div className="text-xs text-emerald-600 font-semibold mt-1">限时 5 折</div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">额外智能体</h3>
                  <p className="text-sm text-zinc-600 mb-3">
                    为团队成员添加独立的 AI 助手
                  </p>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• 独立的 AI 智能体</li>
                    <li>• 独立的邮箱和日历</li>
                    <li>• 统一管理后台</li>
                  </ul>
                </div>
                <div className="text-right ml-6">
                  <div className="text-3xl font-bold text-zinc-950">¥2,800</div>
                  <div className="text-sm text-zinc-500">每个</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-sm text-zinc-700">
              <strong>包含内容：</strong>VPS 或 Mac Mini 配置、安全加固（Docker 沙箱、防火墙、执行白名单）、Composio OAuth 中间件、邮件和日历集成、最多 3 个工作流配置、完整文档、以及 14 天专属支持。
            </p>
          </div>
        </section>

        {/* Monthly Ongoing Costs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">月度持续成本</h2>

          <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-6 border-b border-zinc-200">
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 mb-1">云 VPS 托管</h3>
                  <p className="text-sm text-zinc-600">
                    服务器运行费用（您自行承担）
                  </p>
                </div>
                <div className="text-2xl font-bold text-zinc-950">¥35-70/月</div>
              </div>

              <div className="flex justify-between items-center pb-6 border-b border-zinc-200">
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 mb-1">Anthropic API (Claude)</h3>
                  <p className="text-sm text-zinc-600">
                    AI 模型调用费用，根据使用量计费
                  </p>
                </div>
                <div className="text-2xl font-bold text-zinc-950">¥350-1,400/月</div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t-2 border-zinc-300">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950">月度总计</h3>
                </div>
                <div className="text-3xl font-bold text-blue-600">¥385-1,470/月</div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-zinc-50 rounded-xl p-6 border border-zinc-200">
            <p className="text-sm text-zinc-700">
              <strong>说明：</strong>实际 API 费用取决于使用频率。轻度使用（每天 10-20 次交互）约 ¥350/月，中度使用（每天 50-100 次交互）约 ¥700/月，重度使用可能达到 ¥1,400/月或更高。
            </p>
          </div>
        </section>

        {/* DIY vs Professional Setup */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">DIY vs 专业部署对比</h2>

          <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-2xl p-8 border-2 border-zinc-200 mb-8">
            <p className="text-lg text-zinc-700 mb-8">
              虽然 OpenClaw 是开源软件，但自助设置通常需要 <strong>10-20 小时工程时间</strong>。按创始人或技术负责人时薪 ¥1,400-3,500 计算，时间成本往往超过专业部署费用。
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* DIY Setup */}
              <div className="bg-white rounded-xl p-8 border-2 border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                    ⚠️
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950">DIY 自助部署</h3>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">¥14,000-70,000</div>
                  <div className="text-sm text-zinc-600">时间成本（10-20 小时 × ¥1,400-3,500/小时）</div>
                </div>

                <div className="space-y-3 text-sm text-zinc-700">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>需要深厚的技术背景</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>安全配置复杂且容易出错</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>无专业技术支持</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>调试时间不确定</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>可能需要多次尝试才能成功</span>
                  </div>
                </div>
              </div>

              {/* Professional Setup */}
              <div className="bg-white rounded-xl p-8 border-2 border-blue-300 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950">专业部署服务</h3>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">¥3,800</div>
                  <div className="text-sm text-zinc-600">一次性费用（限时 5 折优惠）</div>
                </div>

                <div className="space-y-3 text-sm text-zinc-700">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>当天完成部署，立即使用</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>企业级安全加固配置</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>14 天专属技术支持</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>100% 满意保证，不满意全额退款</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>节省 10-20 小时宝贵时间</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <p className="text-sm text-zinc-700">
              <strong>结论：</strong>对于创始人和高管来说，专业部署服务不仅节省时间，还能确保安全性和稳定性。¥3,800 的投资远低于自己摸索的时间成本。
            </p>
          </div>
        </section>

        {/* First Year Total Cost */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">第一年总成本估算</h2>

          <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-zinc-700">
                <span>一次性设置费用（托管部署）</span>
                <span className="font-semibold">¥3,800</span>
              </div>
              <div className="flex justify-between items-center text-zinc-700">
                <span>云 VPS 托管（12 个月 × ¥50）</span>
                <span className="font-semibold">¥600</span>
              </div>
              <div className="flex justify-between items-center text-zinc-700">
                <span>Anthropic API（12 个月 × ¥700）</span>
                <span className="font-semibold">¥8,400</span>
              </div>
              <div className="border-t-2 border-zinc-300 pt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-zinc-950">第一年总计</span>
                <span className="text-3xl font-bold text-blue-600">¥12,800</span>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-lg p-4">
              <p className="text-sm text-zinc-600">
                平均每月成本约 ¥1,067，包含所有设置、托管和 API 费用。第二年起仅需支付月度运行成本（¥385-1,470/月）。
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border-2 border-blue-200 text-center">
          <h2 className="text-3xl font-bold text-zinc-950 mb-4">
            准备好开始了吗？
          </h2>
          <p className="text-lg text-zinc-700 mb-8 max-w-2xl mx-auto">
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
          <p className="mt-6 text-sm text-zinc-600">
            100% 满意保证 · 当天部署 · 14 天专属支持
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
          <div className="text-center text-sm text-zinc-600">
            <p>© 2024 喂龙虾. 基于 OpenClaw 的专业部署和托管服务.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
