import { getGeoPage } from "@/lib/geo-pages";
import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = "WeClawd comparison";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const page = getGeoPage("compare", "weclawd-vs-manual-operations");
  return createOgImage({ title: page?.h1 || "WeClawd", kicker: page?.audience });
}
