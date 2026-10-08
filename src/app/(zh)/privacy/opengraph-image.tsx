import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = '隐私政策';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: '隐私政策', kicker: '喂龙虾 WeClawd' });
}
