import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = 'OpenClaw 部署成本';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: 'OpenClaw 部署成本详解', kicker: '成本与维护' });
}
