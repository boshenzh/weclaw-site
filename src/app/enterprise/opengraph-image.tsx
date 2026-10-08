import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = '企业陪跑计划';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: '企业陪跑计划', kicker: '3 天把约定的流程做完' });
}
