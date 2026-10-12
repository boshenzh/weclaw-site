import { allChineseGeoPages, allGeoPages, categoryTitle, chineseComparePages, type GeoPage } from "@/lib/geo-pages";

export const REDIRECT_PATHS = new Set([
  "/solutions/freight-forwarder-ai-assistant",
  "/compare/weclawd-vs-chatgpt",
  "/freight-ai-assistant",
]);

const STOP = new Set([
  "ai",
  "openclaw",
  "weclawd",
  "assistant",
  "workflow",
  "workflows",
  "deployment",
  "automation",
  "for",
  "and",
  "the",
  "with",
  "teams",
  "team",
  "private",
  "sales",
  "customer",
  "daily",
  "vs",
  "to",
  "of",
  "your",
  "our",
  "from",
  "into",
  "on",
  "in",
  "or",
  "an",
  "is",
  "it",
  "be",
  "by",
  "at",
  "as",
  "zh",
  "zhushou",
  "qiye",
  "助手",
  "企业",
  "部署",
  "私有",
  "整理",
  "自动化",
  "跟进",
  "区别",
  "术语",
  "工作流",
  "提醒",
  "草稿",
  "简报",
]);

/** Stems pulled out of longer compounds so「企业微信货代自动化」matches「货代」. */
const STEMS = [
  "企业微信",
  "国际物流",
  "海运运价",
  "客户开发",
  "智能办公",
  "跨境电商",
  "货代",
  "运价",
  "询盘",
  "飞书",
  "钉钉",
  "跨境",
  "客服",
  "报价",
  "workbuddy",
  "chatgpt",
  "deepseek",
  "wecom",
  "feishu",
  "freight",
  "logistics",
  "huodai",
];

type Card = { href: string; title: string; description: string; kicker?: string };

function pieces(text: string) {
  return text
    .toLowerCase()
    .split(/[\s,，、/|·:：;；+—_.\-–"'“”「」()（）【】[\]!?！？]+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 2 && !STOP.has(part));
}

function tokens(page: GeoPage) {
  const found = new Set<string>();
  for (const part of [...page.keywords, page.h1, page.slug.replace(/-/g, " ")]) {
    for (const piece of pieces(part)) {
      found.add(piece);
      for (const stem of STEMS) {
        if (piece.includes(stem) && piece !== stem) found.add(stem);
      }
    }
  }
  return [...found];
}

function overlap(left: string[], right: string[], df: Map<string, number>, n: number) {
  const rightSet = new Set(right);
  const weight = (token: string) => Math.log((n + 1) / (df.get(token) ?? 1)) * (1 + Math.log(token.length));
  let score = 0;
  for (const token of left) {
    if (rightSet.has(token)) {
      score += 8 * weight(token);
      continue;
    }
    for (const other of right) {
      const shorter = token.length <= other.length ? token : other;
      const longer = token.length <= other.length ? other : token;
      if (shorter.length >= 2 && longer.includes(shorter)) {
        score += 2 * weight(shorter);
        break;
      }
    }
  }
  return score;
}

function cjkCount(text: string) {
  return (text.match(/[\u4e00-\u9fff]/g) ?? []).length;
}

function isChinese(page: GeoPage, selfPath: string) {
  if (selfPath.startsWith("/zh/")) return true;
  if (/^\/(solutions|industries|integrations|use-cases|compare)\//.test(selfPath)) return false;
  return cjkCount(page.h1) >= 4;
}

export function fallbackRelated(page: GeoPage, selfPath: string): Card[] {
  const chinese = isChinese(page, selfPath);
  const pool: { page: GeoPage; href: string; kicker: string }[] = chinese
    ? [
        ...allChineseGeoPages.map((item) => ({ page: item, href: `/zh/${item.slug}`, kicker: "中文场景" })),
        ...chineseComparePages.map((item) => ({ page: item, href: `/compare/${item.slug}`, kicker: "对比" })),
      ]
    : allGeoPages
        .filter((item) => !REDIRECT_PATHS.has(`/${item.category}/${item.slug}`) && cjkCount(item.h1) < 4)
        .map((item) => ({ page: item, href: `/${item.category}/${item.slug}`, kicker: categoryTitle(item.category) }));

  const seen = new Set<string>();
  const unique = pool.filter((item) => {
    if (item.href === selfPath || seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });

  const mine = tokens(page);
  const docs = unique.map((item) => ({ ...item, tokens: tokens(item.page) }));
  const df = new Map<string, number>();
  for (const item of docs) {
    for (const token of new Set(item.tokens)) df.set(token, (df.get(token) ?? 0) + 1);
  }
  const ranked = docs
    .map((item) => ({
      ...item,
      score: overlap(mine, item.tokens, df, docs.length),
    }))
    .sort((a, b) => b.score - a.score || a.href.localeCompare(b.href));

  const topical = ranked.filter((item) => item.score >= 8);
  const sameCategory = ranked.filter((item) => item.score < 8 && item.page.category === page.category);
  const picked = (topical.length >= 3 ? topical : [...topical, ...sameCategory]).slice(0, 6);

  const cards: Card[] = picked.map((item) => ({
    href: item.href,
    title: item.page.h1,
    description: item.page.description,
    kicker: item.kicker,
  }));

  if (chinese && mine.includes("货代")) {
    const pins: Card[] = [
      {
        href: "/huodai-ai-assistant",
        title: "货代 AI 助手落地页",
        description: "货代场景的中文入口。",
        kicker: "落地页",
      },
      {
        href: "/case/huodai-baojia-speed-to-lead",
        title: "货代报价案例",
        description: "只说明那一个报价流程，不外推到其他行业。",
        kicker: "案例",
      },
    ];
    const pinned = pins.filter((pin) => pin.href !== selfPath && !cards.some((card) => card.href === pin.href));
    cards.unshift(...pinned);
  }

  return cards.slice(0, 6);
}
