import Link from "next/link";

type Variant = "article" | "compact";

export default function AuthorBio({ variant = "article" }: { variant?: Variant }) {
  if (variant === "compact") {
    return (
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-600">
        <span>
          维护人{" "}
          <Link href="/about" className="font-semibold text-zinc-950 hover:text-blue-700">
            Boshen
          </Link>
        </span>
        <span className="text-zinc-300">·</span>
        <a
          href="/x"
          target="_blank"
          rel="me noopener"
          className="font-medium text-blue-700 hover:text-blue-900"
        >
          @boshenzh
        </a>
        <span className="text-zinc-300">·</span>
        <span>OpenClaw 维护者 · 深圳</span>
      </div>
    );
  }

  return (
    <aside className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
      <div className="flex flex-wrap items-start gap-4">
        <div
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-base font-semibold text-white"
        >
          B
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-base font-semibold text-zinc-950">
              by{" "}
              <Link href="/about" className="hover:text-blue-700">
                Boshen
              </Link>
            </span>
            <a
              href="/x"
              target="_blank"
              rel="me noopener"
              className="text-sm font-medium text-blue-700 hover:text-blue-900"
            >
              @boshenzh ↗
            </a>
          </div>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            OpenClaw 维护者，长期写企业 AI 助手、企业微信工作流、货代和国际物流的落地实践。喂龙虾
            WeClawd 是面向中国团队的 OpenClaw 部署和托管服务。
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link href="/about" className="font-medium text-blue-700 hover:text-blue-900">
              关于喂龙虾
            </Link>
            <a
              href="https://h91srrlmnb.feishu.cn/scheduler/4280da450911da25"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 hover:text-blue-900"
            >
              预约 15 分钟咨询
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
