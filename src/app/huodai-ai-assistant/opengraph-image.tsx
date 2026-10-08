import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = '货代 AI 助手';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: '给货代团队部署能工作的 AI 助手', kicker: '货代 / 国际物流' });
}
