import type { Metadata } from "next";

export const SITE_URL = "https://www.weclawd.com";

type HreflangPair = {
  zhCN: string;
  en: string;
  xDefault: string;
  zhTitle: string;
  enTitle: string;
};

/**
 * Only live pages that are the same document in two languages.
 * Redirects are not pairs. The homepage and /en are not translations.
 *
 * Freight: /zh/huodai-ai-zhushou is the Chinese page the English article
 * already names. /huodai-ai-assistant is a separate landing.
 * /freight-ai-assistant and /solutions/freight-forwarder-ai-assistant 301
 * to the English article.
 *
 * ChatGPT: /compare/weclawd-vs-chatgpt 301s to /en/weclawd-vs-chatgpt.
 * The Chinese comparison lives at /zh/weclawd-vs-chatgpt-zh.
 */
const HREFLANG_PAIRS: HreflangPair[] = [
  {
    zhCN: "/zh/huodai-ai-zhushou",
    en: "/en/freight-forwarder-ai-assistant",
    xDefault: "/zh/huodai-ai-zhushou",
    zhTitle: "货代 AI 助手",
    enTitle: "Freight forwarder AI assistant",
  },
  {
    zhCN: "/zh/weclawd-vs-chatgpt-zh",
    en: "/en/weclawd-vs-chatgpt",
    xDefault: "/zh/weclawd-vs-chatgpt-zh",
    zhTitle: "WeClawd 和 ChatGPT 的区别",
    enTitle: "WeClawd vs ChatGPT",
  },
];

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function hreflangPairFor(path: string) {
  return HREFLANG_PAIRS.find((pair) => pair.zhCN === path || pair.en === path);
}

export function alternatesFor(path: string): Metadata["alternates"] {
  const canonical = absoluteUrl(path);
  const pair = hreflangPairFor(path);
  if (!pair) return { canonical };
  return {
    canonical,
    languages: {
      "zh-CN": absoluteUrl(pair.zhCN),
      en: absoluteUrl(pair.en),
      "x-default": absoluteUrl(pair.xDefault),
    },
  };
}

export function languageCounterpart(path: string): { href: string; title: string; kicker: string; description: string } | null {
  const pair = hreflangPairFor(path);
  if (!pair) return null;
  if (path === pair.zhCN) {
    return {
      href: pair.en,
      title: pair.enTitle,
      kicker: "English",
      description: "Same topic in English.",
    };
  }
  return {
    href: pair.zhCN,
    title: pair.zhTitle,
    kicker: "中文",
    description: "同一主题的中文页。",
  };
}
