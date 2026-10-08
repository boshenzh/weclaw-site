import { getGeoPage } from "@/lib/geo-pages";
import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = 'WeClawd industries';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getGeoPage('industries', slug);
  return createOgImage({ title: page?.h1 || "WeClawd", kicker: page?.audience });
}
