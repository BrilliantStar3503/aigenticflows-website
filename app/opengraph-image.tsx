import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION } from "@/lib/seo/site";

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
          padding: "80px",
          background: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "#E60012" }} />
          <div style={{ fontSize: 40, fontWeight: 700, color: "#111111" }}>AIGENTIC Flows</div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#111111",
            maxWidth: 900,
          }}
        >
          Run your business. Smarter. Faster.
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#6B7280", maxWidth: 820 }}>
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size }
  );
}
