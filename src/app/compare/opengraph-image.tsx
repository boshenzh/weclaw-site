import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = 'WeClawd comparisons';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: 'Compare', kicker: 'WorkBuddy, chat products, and private runtimes' });
}
