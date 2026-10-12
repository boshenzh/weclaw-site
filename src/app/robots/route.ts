/**
 * Only robots policy for weclawd.com.
 * next.config.ts rewrites /robots.txt here. Do not add public/robots.txt.
 */
const SITE_URL = "https://www.weclawd.com";

export async function GET() {
  const body = `User-Agent: *
Allow: /
Disallow: /api/

User-Agent: Baiduspider
Allow: /
Disallow: /api/
Crawl-delay: 1

User-Agent: Sogou web spider
Allow: /
Disallow: /api/

User-Agent: Sogou inst spider
Allow: /
Disallow: /api/

User-Agent: Sogou spider2
Allow: /
Disallow: /api/

User-Agent: YisouSpider
Allow: /
Disallow: /api/

User-Agent: 360Spider
Allow: /
Disallow: /api/

User-Agent: Googlebot
Allow: /
Disallow: /api/

User-Agent: Bingbot
Allow: /
Disallow: /api/

User-Agent: DuckDuckBot
Allow: /
Disallow: /api/

User-Agent: YandexBot
Allow: /
Disallow: /api/

User-Agent: GPTBot
Allow: /
Disallow: /api/

User-Agent: ChatGPT-User
Allow: /
Disallow: /api/

User-Agent: OAI-SearchBot
Allow: /
Disallow: /api/

User-Agent: ClaudeBot
Allow: /
Disallow: /api/

User-Agent: Claude-Web
Allow: /
Disallow: /api/

User-Agent: anthropic-ai
Allow: /
Disallow: /api/

User-Agent: PerplexityBot
Allow: /
Disallow: /api/

User-Agent: Perplexity-User
Allow: /
Disallow: /api/

User-Agent: Google-Extended
Allow: /
Disallow: /api/

User-Agent: Bytespider
Allow: /
Disallow: /api/

User-Agent: ByteSpider
Allow: /
Disallow: /api/

User-Agent: Amazonbot
Allow: /
Disallow: /api/

User-Agent: Applebot
Allow: /
Disallow: /api/

User-Agent: Applebot-Extended
Allow: /
Disallow: /api/

User-Agent: FacebookBot
Allow: /
Disallow: /api/

User-Agent: DuckAssistBot
Allow: /
Disallow: /api/

User-Agent: cohere-ai
Allow: /
Disallow: /api/

User-Agent: Diffbot
Allow: /
Disallow: /api/

User-Agent: YouBot
Allow: /
Disallow: /api/

User-Agent: Meta-ExternalAgent
Allow: /
Disallow: /api/

User-Agent: Meta-ExternalFetcher
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/video-sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
