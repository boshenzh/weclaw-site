import { getChineseBlogPage } from "@/lib/chinese-blog-pages";
import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = "喂龙虾文章";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getChineseBlogPage(slug);
  return createOgImage({ title: page?.title || "喂龙虾", kicker: page?.audience });
}
