import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = '关于喂龙虾';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: '关于喂龙虾 WeClawd', kicker: '企业助手陪跑' });
}
