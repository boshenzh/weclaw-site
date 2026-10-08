import { createOgImage } from "@/lib/og/render-og";

export const runtime = "nodejs";
export const alt = 'WeClawd solutions';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ title: 'Solutions', kicker: 'Private AI agents for teams' });
}
