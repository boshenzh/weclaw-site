import { getEnPage } from "@/lib/en-pages";
import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = "WeClawd";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getEnPage(slug);
  return createOgImage({ title: page?.title || "WeClawd", kicker: page?.audience });
}
