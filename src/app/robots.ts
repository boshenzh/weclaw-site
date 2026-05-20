import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.weclawd.com";

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Baiduspider", allow: "/", crawlDelay: 1 },
      { userAgent: ["Sogou web spider", "Sogou inst spider", "Sogou spider2"], allow: "/" },
      { userAgent: "YisouSpider", allow: "/" },
      { userAgent: "360Spider", allow: "/" },
      { userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "YandexBot"], allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Bytespider",
          "ByteSpider",
          "Amazonbot",
          "Applebot",
          "Applebot-Extended",
          "FacebookBot",
          "DuckAssistBot",
          "cohere-ai",
          "Diffbot",
          "YouBot",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
