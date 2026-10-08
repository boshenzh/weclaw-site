import { readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Subset of Noto Sans SC (weight 700), renamed to WeClawd Og.
 * Covers the characters used under src/ when this file was generated.
 * License: src/lib/og/OFL.txt
 */
let fontPromise: Promise<ArrayBuffer> | null = null;

function loadFont() {
  fontPromise ??= readFile(new URL("./og-font.ttf", import.meta.url)).then((buf) => {
    const copy = new Uint8Array(buf.byteLength);
    copy.set(buf);
    return copy.buffer;
  });
  return fontPromise;
}

function cleanTitle(title: string) {
  return title
    .replace(/\s*[|｜]\s*喂龙虾.*$/u, "")
    .replace(/\s*[|｜]\s*WeClawd.*$/iu, "")
    .trim();
}

export async function createOgImage({ title, kicker }: { title: string; kicker?: string }) {
  const font = await loadFont();
  const text = cleanTitle(title) || "喂龙虾 WeClawd";
  const label = (kicker || "").trim().slice(0, 72);
  const chinese = /[\u4e00-\u9fff]/.test(`${text}${label}`);
  const fontSize = text.length > 60 ? 40 : text.length > 42 ? 48 : text.length > 26 ? 56 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg, #eff6ff 0%, #ffffff 48%)",
          color: "#09090b",
          fontFamily: "WeClawd Og",
          fontWeight: 700,
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 16, height: 16, borderRadius: 4, background: "#2563eb", marginRight: 16 }} />
            <div style={{ fontSize: 28, color: "#1d4ed8" }}>喂龙虾 WeClawd</div>
          </div>
          <div style={{ fontSize: 22, color: "#71717a" }}>weclawd.com</div>
        </div>
        <div style={{ display: "flex", marginTop: 64, fontSize: 24, color: "#2563eb" }}>{label || (chinese ? "企业助手" : "AI agents for teams")}</div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            maxWidth: 1040,
          }}
        >
          {text}
        </div>
        <div style={{ display: "flex", marginTop: "auto", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, color: "#3f3f46" }}>
            {chinese ? "私有可控的 AI 智能体与企业助手陪跑" : "Private, controllable AI agents for teams"}
          </div>
          <div
            style={{
              display: "flex",
              background: "#2563eb",
              color: "#ffffff",
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 22,
            }}
          >
            {chinese ? "企业陪跑" : "Book a consult"}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [{ name: "WeClawd Og", data: font, weight: 700, style: "normal" }],
    },
  );
}
