import { ImageResponse } from "next/og";

export const alt = "Cantracare - Intelligent Contractor Care & Warranty SaaS";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0b0f19 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Subtle border outline */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: "24px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #3b82f6, #6366f1, #a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            🛡️
          </div>
          <span style={{ fontSize: "42px", fontWeight: "800", letterSpacing: "-1px" }}>
            Cantracare
          </span>
          <span
            style={{
              background: "rgba(16, 185, 129, 0.2)",
              color: "#34d399",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              borderRadius: "9999px",
              padding: "4px 16px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            SaaS
          </span>
        </div>

        <h1
          style={{
            fontSize: "52px",
            fontWeight: "900",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.2,
            marginBottom: "20px",
            background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Autonomous Contractor Care & Warranty Management
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          Empowering homebuilders & contractors with intelligent dispatch, warranty rule automation, and live SLA telemetry.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
