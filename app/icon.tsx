import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E60012",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 5,
            background: "#FFFFFF",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
