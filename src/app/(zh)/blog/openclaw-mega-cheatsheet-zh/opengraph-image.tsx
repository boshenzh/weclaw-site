import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = 'OpenClaw 速查表';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: 'OpenClaw 超级速查表（中文）', kicker: '安装、会话、调试' });
}
