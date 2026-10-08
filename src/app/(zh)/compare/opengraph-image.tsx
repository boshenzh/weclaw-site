import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = 'WeClawd comparisons';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: "对比", kicker: "WorkBuddy、聊天产品和私有运行时" });
}
