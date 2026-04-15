import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0f1c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #2563eb, #22d3ee)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            lineHeight: 1,
          }}
        >
          OM
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}

