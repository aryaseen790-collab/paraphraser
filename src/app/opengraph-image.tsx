import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name}: free AI paraphrasing tool`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #2433d6 0%, #4a3cf0 60%, #7a3ff2 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 40, fontWeight: 700 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#ffffff",
              color: "#2433d6",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            OG
          </div>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 40, fontSize: 76, fontWeight: 800, lineHeight: 1.05, display: "flex", flexWrap: "wrap" }}>
          Make AI text sound like&nbsp;<span style={{ background: "#ffe45c", color: "#0e1330", padding: "0 12px", borderRadius: 8 }}>you</span>.
        </div>
        <div style={{ marginTop: 24, fontSize: 34, color: "rgba(255,255,255,0.85)" }}>
          Free AI humanizer · 12 languages · No sign-up
        </div>
      </div>
    ),
    size,
  );
}
