import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Cantra Care - Purpose-Built Care Management Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Reusable SVG checkmark icon
function CheckIcon({ color = "#107565", size = 12 }: { color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "flex" }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Reusable trust pill badge
function TrustBadge({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        padding: "6px 14px",
        borderRadius: "9999px",
        backgroundColor: "rgba(8, 59, 50, 0.75)",
        border: "1px solid rgba(239, 243, 243, 0.18)",
        fontSize: "12px",
        fontWeight: "600",
        color: "#EFF3F3",
      }}
    >
      <div style={{ width: "7px", height: "7px", borderRadius: "9999px", backgroundColor: "#34D399" }} />
      {text}
    </div>
  );
}

// Reusable stat metric box
function StatBox({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#EFF3F3",
        borderRadius: "14px",
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span style={{ fontSize: "11px", fontWeight: "600", color: "#465C59", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
        {label}
      </span>
      <span style={{ fontSize: "22px", fontWeight: "800", color: "#0B4F43", lineHeight: 1.1, marginBottom: "4px" }}>
        {value}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#107565", fontWeight: "600" }}>
        <CheckIcon size={11} color="#107565" />
        <span>{note}</span>
      </div>
    </div>
  );
}

// Right column human-centric live care preview card
function CarePreviewCard() {
  return (
    <div style={{ width: "470px", display: "flex", flexDirection: "column", position: "relative" }}>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "22px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.38)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Card Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "14px", borderBottom: "1px solid #E2ECEB", marginBottom: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#0B4F43" }}>
              Maple Court Care Home
            </span>
            <span style={{ fontSize: "12px", color: "#465C59" }}>
              Residential & Nursing Unit
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#EFF3F3", padding: "4px 10px", borderRadius: "9999px", fontSize: "11px", fontWeight: "600", color: "#0B4F43" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "9999px", backgroundColor: "#107565" }} />
            Live Care Loop
          </div>
        </div>

        {/* Dual Metric Tiles */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          <StatBox label="e-MAR Dispensed" value="100% Given" note="On schedule today" />
          <StatBox label="Shift Coverage" value="4/4 Active" note="Full team synced" />
        </div>

        {/* Frontline Care Log Thread */}
        <div style={{ backgroundColor: "#F8FAFA", border: "1px solid #E2ECEB", borderRadius: "14px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "9999px", backgroundColor: "#0B4F43", color: "#FFFFFF", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                SC
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#0B4F43", lineHeight: 1.1 }}>
                  Sarah C.
                </span>
                <span style={{ fontSize: "10px", color: "#465C59" }}>Senior Carer</span>
              </div>
            </div>
            <span style={{ fontSize: "10px", fontWeight: "600", color: "#107565", backgroundColor: "#E2ECEB", padding: "2px 8px", borderRadius: "6px" }}>
              Verified Log
            </span>
          </div>
          <p style={{ fontSize: "11px", lineHeight: 1.4, color: "#465C59", margin: 0 }}>
            &ldquo;Morning medication round completed without exceptions. Vitals verified and recorded in resident care plan.&rdquo;
          </p>
        </div>
      </div>

      {/* Satellite Pill Overlapping Bottom Right */}
      <div
        style={{
          position: "absolute",
          bottom: "-14px",
          right: "18px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#083B32",
          color: "#EFF3F3",
          border: "1px solid rgba(239, 243, 243, 0.25)",
          padding: "8px 18px",
          borderRadius: "9999px",
          boxShadow: "0 10px 24px -4px rgba(0, 0, 0, 0.45)",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#34D399" stroke="#34D399" strokeWidth="1" style={{ display: "flex" }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        CQC Evidence Audit Ready
      </div>
    </div>
  );
}

export default async function Image() {
  const logoPath = path.join(process.cwd(), "public", "logos", "logo-mark-primary.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #083B32 0%, #0B4F43 50%, #107565 100%)",
          padding: "48px 56px",
          color: "#EFF3F3",
          fontFamily: "system-ui, -apple-system, sans-serif",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative outer frame */}
        <div style={{ position: "absolute", inset: "20px", border: "1px solid rgba(239, 243, 243, 0.14)", borderRadius: "26px" }} />

        {/* Ambient background glow accents */}
        <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "500px", height: "500px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(19, 105, 90, 0.35) 0%, rgba(11, 79, 67, 0) 70%)" }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "420px", height: "420px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(8, 59, 50, 0.6) 0%, rgba(11, 79, 67, 0) 70%)" }} />

        {/* Main Content: Two-column layout matching home page hero */}
        <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
          {/* LEFT COLUMN: Brand, Eyebrow, H1, Subtitle, Trust Badges */}
          <div style={{ width: "570px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Brand identity lockup */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", padding: "5px" }}>
                <img src={logoBase64} width="34" height="34" style={{ objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: "28px", fontWeight: "700", color: "#FFFFFF", letterSpacing: "-0.5px" }}>
                Cantra Care
              </span>
              <span style={{ backgroundColor: "rgba(239, 243, 243, 0.15)", border: "1px solid rgba(239, 243, 243, 0.25)", borderRadius: "9999px", padding: "4px 12px", fontSize: "12px", fontWeight: "600", color: "#EFF3F3", letterSpacing: "0.06em" }}>
                UK CARE SAAS
              </span>
            </div>

            {/* Linear Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "24px", height: "2px", backgroundColor: "rgba(239, 243, 243, 0.7)" }} />
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.18em", color: "rgba(239, 243, 243, 0.9)" }}>
                ONE CONNECTED CARE LOOP
              </span>
            </div>

            {/* Editorial Headline matching Homepage H1 */}
            <h1 style={{ fontSize: "44px", fontWeight: "700", fontFamily: "Georgia, 'Playfair Display', serif", lineHeight: 1.15, color: "#FFFFFF", letterSpacing: "-0.02em", margin: "0 0 16px 0" }}>
              Turn everyday care into evidence of quality.
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: "16px", lineHeight: 1.45, color: "rgba(239, 243, 243, 0.82)", margin: "0 0 24px 0", maxWidth: "530px" }}>
              Live or on your terms – connecting care routines, medication records (e-MAR), and team collaboration for frontline care homes.
            </p>

            {/* Bottom Trust Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <TrustBadge text="CQC & Care Ready" />
              <TrustBadge text="Live e-MAR Sync" />
              <TrustBadge text="Safe & Secure" />
            </div>
          </div>

          {/* RIGHT COLUMN: Elevated Human-Centric UI Card */}
          <CarePreviewCard />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
