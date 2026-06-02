const SITE_URL = "https://www.weclawd.com";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const title = "一行公司名 → 客户画像 + 自动开发信";
  const description =
    "喂龙虾 WeClawd / OpenClaw 货代拓客场景演示：输入一行公司名，OpenClaw 助手自动调研公司、对照运价表判断匹配度、起草个性化中文开发信，并通过 SMTP 发送。";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${SITE_URL}/case/freight-auto-outreach</loc>
    <video:video>
      <video:thumbnail_loc>${SITE_URL}/videos/freight-auto-outreach-poster.jpg</video:thumbnail_loc>
      <video:title>${escapeXml(title)}</video:title>
      <video:description>${escapeXml(description)}</video:description>
      <video:content_loc>${SITE_URL}/videos/freight-auto-outreach.mp4</video:content_loc>
      <video:player_loc>${SITE_URL}/case/freight-auto-outreach</video:player_loc>
      <video:duration>165</video:duration>
      <video:publication_date>2026-06-01T10:00:00+08:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
