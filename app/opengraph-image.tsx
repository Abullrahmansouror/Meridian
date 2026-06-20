import { ImageResponse } from "next/og";

export const alt = "Meridian Build Group — Built to the line.";
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
          justifyContent: "space-between",
          background: "#1a1c1e",
          padding: 64,
          fontFamily: "sans-serif",
          color: "#fbfaf7",
          backgroundImage:
            "linear-gradient(rgba(251,250,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(251,250,247,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#9b9c99",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 36, height: 2, background: "#d85b1c" }} />
            <span>Est. 1998 — Mountain West</span>
          </div>
          <span style={{ color: "#d85b1c" }}>N 39°44′ · W 104°59′</span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: -2,
            }}
          >
            We build the structures
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: -2,
            }}
          >
            that last<span style={{ color: "#d85b1c" }}>.</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(251,250,247,0.18)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                width: 40,
                height: 40,
                border: "2px solid #d85b1c",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: 14, height: 14, background: "#d85b1c" }} />
            </div>
            <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2 }}>
              MERIDIAN
            </span>
          </div>
          <span
            style={{
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#9b9c99",
            }}
          >
            Commercial · Civil · Industrial
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
