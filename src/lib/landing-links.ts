import type { GeoPage } from "@/lib/geo-pages";

export type TextLink = { href: string; label: string };

const QUOTE_CASE = {
  href: "/case/huodai-baojia-speed-to-lead",
  label: "货代案例：报价从 90 小时到 15 分钟",
};

const OUTREACH_CASE = {
  href: "/case/freight-auto-outreach",
  label: "场景演示：一行公司名到开发信草稿",
};

function focus(page: GeoPage) {
  return `${page.slug} ${page.h1} ${page.title}`.toLowerCase();
}

export function topicSecondaryCta(page: GeoPage, chinese: boolean): TextLink {
  if (page.secondaryCta) return page.secondaryCta;
  const text = focus(page);
  if (/huodai|freight|货代|运价|询盘|报价/.test(text)) {
    return chinese
      ? { href: "/huodai-ai-assistant", label: "货代 AI 助手" }
      : { href: "/en/freight-forwarder-ai-assistant", label: "Freight AI assistant" };
  }
  if (/outreach|开发信|客户画像|客户开发|profiling/.test(text)) {
    return chinese
      ? { href: "/case/freight-auto-outreach", label: "开发信案例" }
      : { href: "/case/freight-auto-outreach", label: "Outreach case" };
  }
  if (/kuajing|跨境/.test(text)) {
    return { href: "/zh/kuajing-qiye-zhushou", label: chinese ? "跨境企业助手" : "Cross-border assistant" };
  }
  return { href: "/pricing", label: chinese ? "看价格" : "See pricing" };
}

/** Existing case pages only, and only when the landing itself is about that work. */
export function relevantCaseLinks(page: GeoPage): TextLink[] {
  const text = focus(page);
  const links: TextLink[] = [];
  if (/huodai|freight|货代|运价|询盘|报价/.test(text)) links.push(QUOTE_CASE);
  if (/outreach|开发信|客户画像|客户开发|profiling/.test(text)) links.push(OUTREACH_CASE);
  return links.filter((link, index) => links.findIndex((item) => item.href === link.href) === index);
}
