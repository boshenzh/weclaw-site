import Link from "next/link";

const hubs = [
  { href: "/zh", zh: "中文场景", en: "Chinese pages" },
  { href: "/compare", zh: "对比", en: "Compare" },
  { href: "/solutions", zh: "方案", en: "Solutions" },
  { href: "/industries", zh: "行业", en: "Industries" },
  { href: "/integrations", zh: "集成", en: "Integrations" },
  { href: "/use-cases", zh: "使用场景", en: "Use cases" },
  { href: "/en", zh: "English", en: "English overview" },
  { href: "/enterprise", zh: "企业陪跑", en: "Enterprise coaching" },
];

export default function SeoHubLinks({ current, locale = "en" }: { current?: string; locale?: "zh" | "en" }) {
  return (
    <nav className="mt-8 flex flex-wrap gap-2" aria-label={locale === "zh" ? "栏目" : "Sections"}>
      {hubs
        .filter((hub) => hub.href !== current)
        .map((hub) => (
          <Link
            key={hub.href}
            href={hub.href}
            className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
          >
            {locale === "zh" ? hub.zh : hub.en}
          </Link>
        ))}
    </nav>
  );
}
