import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = '货代报价案例';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: '货代报价从 90 小时压到 15 分钟', kicker: '客户案例 · 只这一条流程' });
}
