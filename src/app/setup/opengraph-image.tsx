import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = 'OpenClaw 配置服务';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: 'OpenClaw 配置服务', kicker: '中文部署支持' });
}
