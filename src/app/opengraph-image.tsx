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
          background: "#f7f4ee",
          color: "#1d1b18",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 40, fontWeight: 700 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#1d1b18",
              fontStyle: "italic",
              color: "#fff",
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
          Make AI text sound like&nbsp;<span style={{ color: "#c2410c", fontStyle: "italic" }}>you</span>.
        </div>
        <div style={{ marginTop: 24, fontSize: 34, color: "#6b655c" }}>
          Free AI humanizer · 12 languages · No sign-up
        </div>
      </div>
    ),
    size,
  );
}
