import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = '喂龙虾 WeClawd';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: '私有可控的 AI 智能体与企业助手陪跑', kicker: '企业陪跑' });
}
