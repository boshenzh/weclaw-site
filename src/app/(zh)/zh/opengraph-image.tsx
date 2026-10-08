import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = '喂龙虾中文导航';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: '中文客户导航中心', kicker: '货代、跨境、企业助手' });
}
