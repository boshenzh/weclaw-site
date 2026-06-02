const SITE_URL = "https://www.weclawd.com";

export async function GET() {
  const body = `User-Agent: *
Allow: /

User-Agent: Baiduspider
Allow: /
Crawl-delay: 1

User-Agent: Sogou web spider
Allow: /

User-Agent: Sogou inst spider
Allow: /

User-Agent: Sogou spider2
Allow: /

User-Agent: YisouSpider
Allow: /

User-Agent: 360Spider
Allow: /

User-Agent: Googlebot
Allow: /

User-Agent: Bingbot
Allow: /

User-Agent: DuckDuckBot
Allow: /

User-Agent: YandexBot
Allow: /

User-Agent: GPTBot
Allow: /

User-Agent: ChatGPT-User
Allow: /

User-Agent: OAI-SearchBot
Allow: /

User-Agent: ClaudeBot
Allow: /

User-Agent: Claude-Web
Allow: /

User-Agent: anthropic-ai
Allow: /

User-Agent: PerplexityBot
Allow: /

User-Agent: Perplexity-User
Allow: /

User-Agent: Google-Extended
Allow: /

User-Agent: Bytespider
Allow: /

User-Agent: ByteSpider
Allow: /

User-Agent: Amazonbot
Allow: /

User-Agent: Applebot
Allow: /

User-Agent: Applebot-Extended
Allow: /

User-Agent: FacebookBot
Allow: /

User-Agent: DuckAssistBot
Allow: /

User-Agent: cohere-ai
Allow: /

User-Agent: Diffbot
Allow: /

User-Agent: YouBot
Allow: /

User-Agent: Meta-ExternalAgent
Allow: /

User-Agent: Meta-ExternalFetcher
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/video-sitemap.xml
Host: ${SITE_URL}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
