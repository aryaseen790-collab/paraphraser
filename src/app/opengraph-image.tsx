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
          background: "linear-gradient(135deg, #eef0ff 0%, #ffffff 60%)",
          color: "#16171d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 40, fontWeight: 700 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#4f46e5",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            P
          </div>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 40, fontSize: 72, fontWeight: 800, lineHeight: 1.1 }}>Free Paraphrasing Tool</div>
        <div style={{ marginTop: 24, fontSize: 34, color: "#5b5e6b" }}>
          Seven styles · Many languages · No sign-up
        </div>
      </div>
    ),
    size,
  );
}
