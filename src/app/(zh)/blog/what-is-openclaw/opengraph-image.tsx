import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = '什么是 OpenClaw';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: '什么是 OpenClaw？自托管 AI 执行助手', kicker: '指南' });
}
