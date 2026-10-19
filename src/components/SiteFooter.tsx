"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isEnglishPath } from "@/lib/locale-path";

const zhHubs = [
  { href: "/zh", label: "中文场景" },
  { href: "/compare", label: "对比" },
  { href: "/solutions", label: "方案" },
  { href: "/industries", label: "行业" },
  { href: "/integrations", label: "集成" },
  { href: "/use-cases", label: "使用场景" },
  { href: "/pricing", label: "价格" },
  { href: "/en", label: "English" },
  { href: "/blog", label: "博客" },
];

const enHubs = [
  { href: "/zh", label: "中文" },
  { href: "/compare", label: "Compare" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/integrations", label: "Integrations" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/en", label: "English" },
  { href: "/blog", label: "Blog" },
];

export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const english = isEnglishPath(pathname || "/");
  const hubs = english ? enHubs : zhHubs;

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label={english ? "Sections" : "栏目"}>
          {hubs.map((hub) => (
            <Link key={hub.href} href={hub.href} className="text-sm text-zinc-600 hover:text-zinc-950">
              {hub.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} {english ? "WeClawd" : "喂龙虾"}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/blog/openclaw-mega-cheatsheet-zh" className="text-sm text-zinc-600 hover:text-zinc-950">
              {english ? "OpenClaw cheatsheet" : "OpenClaw 速查表"}
            </Link>
            <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-950">
              {english ? "About" : "关于"}
            </Link>
            <Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-950">
              {english ? "Privacy" : "隐私政策"}
            </Link>
            <Link href="/terms" className="text-sm text-zinc-600 hover:text-zinc-950">
              {english ? "Terms" : "使用条款"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
