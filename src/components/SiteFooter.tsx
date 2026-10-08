"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const hubs = [
  { href: "/zh", label: "中文场景" },
  { href: "/compare", label: "对比" },
  { href: "/solutions", label: "方案" },
  { href: "/industries", label: "行业" },
  { href: "/integrations", label: "集成" },
  { href: "/use-cases", label: "使用场景" },
  { href: "/en", label: "English" },
  { href: "/blog", label: "博客" },
];

export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="栏目">
          {hubs.map((hub) => (
            <Link key={hub.href} href={hub.href} className="text-sm text-zinc-600 hover:text-zinc-950">
              {hub.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} 喂龙虾</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/blog/openclaw-mega-cheatsheet-zh" className="text-sm text-zinc-600 hover:text-zinc-950">
              OpenClaw 速查表
            </Link>
            <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-950">
              关于
            </Link>
            <Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-950">
              隐私政策
            </Link>
            <Link href="/terms" className="text-sm text-zinc-600 hover:text-zinc-950">
              使用条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
