import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "什么是 OpenClaw？自托管 AI 执行助手完整指南 | 喂龙虾",
  description: "深入了解 OpenClaw - 一个开源、自托管的 AI 执行助手。了解它如何处理邮件分类、日历管理、工作流自动化，以及与 ChatGPT/Claude 的核心区别。适合创始人、高管和运营领导。",
  keywords: [
    "OpenClaw",
    "AI 执行助手",
    "自托管 AI",
    "开源 AI 助手",
    "邮件自动化",
    "日历管理",
    "AI 工作流",
    "企业 AI 助手",
    "OpenClaw 教程",
    "AI 智能体",
    "Claude AI",
    "AI 代理",
  ],
  openGraph: {
    title: "什么是 OpenClaw？自托管 AI 执行助手完整指南",
    description: "深入了解 OpenClaw - 一个开源、自托管的 AI 执行助手。了解核心功能、技术架构、安全考量和适用人群。",
    url: "https://weclaw.com/blog/what-is-openclaw",
    type: "article",
    images: [
      {
        url: "/logos/weclaw-logo.png",
        width: 1200,
        height: 630,
        alt: "什么是 OpenClaw？",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "什么是 OpenClaw？自托管 AI 执行助手",
    description: "深入了解 OpenClaw - 开源、自托管的 AI 执行助手。邮件分类、日历管理、工作流自动化。",
    images: ["/logos/weclaw-logo.png"],
  },
  alternates: {
    canonical: "https://weclaw.com/blog/what-is-openclaw",
  },
};

export default function WhatIsOpenClawPage() {
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
            什么是 OpenClaw？
          </h1>
          <p className="text-xl text-zinc-600">
            OpenClaw 是一个开源、自托管的 AI 执行助手，设计用来像全职助理一样工作。它能够进行邮件分类、管理日历、起草回复、发送消息和跨工具自动化工作流。
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-zinc-950 mb-4">核心特点</h2>
            <p className="text-zinc-700 mb-6">
              与 ChatGPT 或 Claude 不同，OpenClaw 不是一个你主动查询的聊天界面，而是一个始终在后台运行的智能代理，主动读取收件箱、监控日历并采取行动。所有数据都在你自己的硬件上运行，永远不会离开你的网络。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-zinc-200">
                <div className="font-semibold text-zinc-950 mb-2">✓ 自托管</div>
                <div className="text-sm text-zinc-600">数据完全掌控在你手中</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-zinc-200">
                <div className="font-semibold text-zinc-950 mb-2">✓ 主动工作</div>
                <div className="text-sm text-zinc-600">24/7 后台运行，无需手动触发</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-zinc-200">
                <div className="font-semibold text-zinc-950 mb-2">✓ 开源透明</div>
                <div className="text-sm text-zinc-600">代码完全开放，可自由定制</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-zinc-200">
                <div className="font-semibold text-zinc-950 mb-2">✓ 深度集成</div>
                <div className="text-sm text-zinc-600">直接连接邮件、日历、消息平台</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">核心功能</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200">
              <h3 className="text-xl font-bold text-zinc-950 mb-3">📧 邮件分类与管理</h3>
              <p className="text-zinc-700 mb-4">
                OpenClaw 可以读取、标记、优先级排序邮件，起草回复并可代表你发送。它能识别重要邮件、过滤垃圾信息，并根据你的偏好自动分类。
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• 自动标记和分类收件箱</li>
                <li>• 识别紧急邮件并优先处理</li>
                <li>• 起草回复草稿供你审核</li>
                <li>• 根据授权自动发送标准回复</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200">
              <h3 className="text-xl font-bold text-zinc-950 mb-3">📅 日历管理</h3>
              <p className="text-zinc-700 mb-4">
                智能管理你的日程安排，解决会议冲突，向外部联系人提议时间，并自动阻止专注工作时间。
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• 自动安排会议并避免冲突</li>
                <li>• 向参会者提议可用时间</li>
                <li>• 保护深度工作时间段</li>
                <li>• 发送会议提醒和准备材料</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200">
              <h3 className="text-xl font-bold text-zinc-950 mb-3">🔔 主动简报</h3>
              <p className="text-zinc-700 mb-4">
                每天早晨发送包含日程、标记邮件和需要关注事项的简报，让你快速了解一天的重点。
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• 每日日程概览</li>
                <li>• 重要邮件摘要</li>
                <li>• 待办事项提醒</li>
                <li>• 需要决策的事项汇总</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200">
              <h3 className="text-xl font-bold text-zinc-950 mb-3">💬 消息集成</h3>
              <p className="text-zinc-700 mb-4">
                与飞书、钉钉、企业微信、Slack、iMessage、WhatsApp 等平台深度集成，实现跨平台消息管理。
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• 支持国内外主流消息平台</li>
                <li>• 统一管理多平台消息</li>
                <li>• 自动回复常见问题</li>
                <li>• 智能消息路由和转发</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200">
              <h3 className="text-xl font-bold text-zinc-950 mb-3">⚙️ 自定义工作流</h3>
              <p className="text-zinc-700 mb-4">
                自动化重复性任务，如费用报告提醒、周总结、跟进提醒等，释放你的时间专注于更重要的工作。
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• 自动化费用报告和审批流程</li>
                <li>• 定期生成周报和月报</li>
                <li>• 智能跟进提醒</li>
                <li>• 自定义业务流程自动化</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">技术架构</h2>

          <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
            <p className="text-zinc-700 mb-6">
              OpenClaw 系统包含四个关键组件，协同工作以提供完整的 AI 助手体验：
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="text-lg font-bold text-zinc-950 mb-2">网关服务器</div>
                <div className="text-sm text-zinc-600">
                  管理所有外部连接和 API 调用，确保安全的数据传输
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="text-lg font-bold text-zinc-950 mb-2">代理运行器</div>
                <div className="text-sm text-zinc-600">
                  核心执行引擎，负责运行 AI 模型和执行任务
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="text-lg font-bold text-zinc-950 mb-2">技能模块</div>
                <div className="text-sm text-zinc-600">
                  定义 AI 助手的各项能力，可扩展和自定义
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="text-lg font-bold text-zinc-950 mb-2">记忆系统</div>
                <div className="text-sm text-zinc-600">
                  持久化知识库，存储上下文和学习内容
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-zinc-700">
                <strong>隐私保护：</strong>所有处理都在本地进行，仅向 Claude API 和已连接的服务发送必要的外部调用。你的数据始终在你的控制之下。
              </p>
            </div>
          </div>
        </section>

        {/* Hardware Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">硬件和软件需求</h2>

          <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-zinc-950 mb-3">推荐硬件</h3>
                <ul className="space-y-2 text-zinc-700">
                  <li>• <strong>Mac Mini M4 Pro</strong>（推荐）- 性能强劲，功耗低</li>
                  <li>• 任何配备 Apple Silicon 的 Mac 设备</li>
                  <li>• Linux 服务器或 VPS（需要足够的计算资源）</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-zinc-950 mb-3">软件要求</h3>
                <ul className="space-y-2 text-zinc-700">
                  <li>• 稳定的互联网连接</li>
                  <li>• Anthropic API 密钥（Claude AI）</li>
                  <li>• Google Workspace 或 Microsoft 365 账号</li>
                  <li>• 消息平台 API 凭证（可选）</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-zinc-950 mb-3">月度成本</h3>
                <ul className="space-y-2 text-zinc-700">
                  <li>• Anthropic API：¥350-1,400/月（取决于使用量）</li>
                  <li>• VPS 托管：¥35-70/月（如选择云端部署）</li>
                  <li>• 总计：约 ¥385-1,470/月</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with ChatGPT/Claude */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">与 ChatGPT/Claude 的区别</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-zinc-100">
                  <th className="border border-zinc-300 px-6 py-4 text-left font-bold text-zinc-950">特性</th>
                  <th className="border border-zinc-300 px-6 py-4 text-left font-bold text-zinc-950">OpenClaw</th>
                  <th className="border border-zinc-300 px-6 py-4 text-left font-bold text-zinc-950">ChatGPT/Claude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-zinc-300 px-6 py-4 font-semibold text-zinc-950">部署方式</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">自托管，数据本地存储</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">云端服务</td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="border border-zinc-300 px-6 py-4 font-semibold text-zinc-950">工作模式</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">主动运行，24/7 后台工作</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">被动响应，需要手动查询</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 px-6 py-4 font-semibold text-zinc-950">记忆能力</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">持久化记忆，长期学习</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">会话级记忆，有限上下文</td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="border border-zinc-300 px-6 py-4 font-semibold text-zinc-950">系统集成</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">直接访问邮件、日历、消息</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">需要手动复制粘贴</td>
                </tr>
                <tr>
                  <td className="border border-zinc-300 px-6 py-4 font-semibold text-zinc-950">自动化能力</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">可自动执行任务和工作流</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">仅提供建议，无法执行</td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="border border-zinc-300 px-6 py-4 font-semibold text-zinc-950">定制性</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">完全开源，可自由定制</td>
                  <td className="border border-zinc-300 px-6 py-4 text-zinc-700">功能固定，定制受限</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Security Considerations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">安全考量</h2>

          <div className="bg-red-50 rounded-2xl p-8 border border-red-200 mb-6">
            <h3 className="text-xl font-bold text-zinc-950 mb-4">⚠️ 重要提示</h3>
            <p className="text-zinc-700 mb-4">
              运行具有邮件和日历访问权限的 AI 代理存在固有风险。Cisco 研究团队发现 AI 代理容易受到提示注入攻击，恶意邮件可能试图操纵 AI 执行未授权操作。
            </p>
            <p className="text-zinc-700">
              因此，正确的安全配置至关重要。我们强烈建议使用专业部署服务，确保所有安全措施得到正确实施。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-zinc-200">
            <h3 className="text-xl font-bold text-zinc-950 mb-6">关键安全措施</h3>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                <div>
                  <div className="font-semibold text-zinc-950 mb-1">审计跟踪</div>
                  <div className="text-sm text-zinc-600">记录所有 AI 操作，便于事后审查和问题追溯</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                <div>
                  <div className="font-semibold text-zinc-950 mb-1">访问控制</div>
                  <div className="text-sm text-zinc-600">配置细粒度权限，限制 AI 可以访问的数据和执行的操作</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                <div>
                  <div className="font-semibold text-zinc-950 mb-1">网络隔离</div>
                  <div className="text-sm text-zinc-600">使用 Docker 沙箱和防火墙规则隔离 AI 代理</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">4</div>
                <div>
                  <div className="font-semibold text-zinc-950 mb-1">定期更新</div>
                  <div className="text-sm text-zinc-600">及时应用安全补丁和系统更新</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">5</div>
                <div>
                  <div className="font-semibold text-zinc-950 mb-1">OAuth 中间件</div>
                  <div className="text-sm text-zinc-600">使用 Composio 等工具管理 API 凭证，避免直接暴露</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-950 mb-8">适用人群</h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <p className="text-lg text-zinc-700 mb-6">
              OpenClaw 最适合处理大量邮件和复杂日程的专业人士：
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="text-lg font-bold text-zinc-950 mb-3">创始人和 CEO</div>
                <div className="text-sm text-zinc-600">
                  每天处理数百封邮件，需要快速响应投资人、客户和团队成员
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="text-lg font-bold text-zinc-950 mb-3">高管和领导</div>
                <div className="text-sm text-zinc-600">
                  管理复杂日程，协调多方会议，需要高效的时间管理
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="text-lg font-bold text-zinc-950 mb-3">首席参谋</div>
                <div className="text-sm text-zinc-600">
                  协助领导处理日常事务，需要自动化重复性工作
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-zinc-200">
                <div className="text-lg font-bold text-zinc-950 mb-3">运营负责人</div>
                <div className="text-sm text-zinc-600">
                  管理 4-50 人团队的运营，需要跨部门协调和流程自动化
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-zinc-700">
                <strong>专业建议：</strong>由于涉及敏感数据访问和复杂的安全配置，我们强烈建议使用专业部署服务，确保系统安全可靠地运行。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">准备好体验 OpenClaw 了吗？</h2>
          <p className="text-xl mb-8 text-blue-100">
            我们提供专业的部署和配置服务，确保你的 AI 助手安全、高效地运行
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-600 hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              预约免费咨询
            </a>
            <Link
              href="/blog/openclaw-setup-cost"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-8 py-4 text-base font-semibold text-white hover:bg-blue-800 transition-all border-2 border-white/20"
            >
              了解部署成本
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-100">
            限时 5 折优惠 · 当天完成部署 · 14 天专属支持
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
          <div className="text-center text-sm text-zinc-600">
            <p>© 2024 喂龙虾. 基于 OpenClaw 的专业部署和托管服务</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
