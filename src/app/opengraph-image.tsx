import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matthews Hotel Markets | National Hotel Investment Sales & Brokerage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a1226 0%, #1a3a6b 60%, #0066cc 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.7,
            fontWeight: 500,
          }}
        >
          Matthews Hotel Markets
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 980,
              // Satori (next/og) rejects a <div> with more than one child
              // unless it is display:flex, and the unfixed version of this
              // image returned an empty response. One flex item per word
              // keeps the natural line wrapping of the two-tone headline.
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {["Hospitality", "finance", "and", "sales."].map((w) => (
              <span key={w} style={{ marginRight: "0.25em" }}>
                {w}
              </span>
            ))}
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Nationwide.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 900,
            }}
          >
            Loans from $5M, dispositions from $2M, every chain scale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>matthewshotelmarkets.com</div>
          {/* Was "$3.5B closed · 670+ hotels". Neither figure could be
              sourced to anything in this repo or on matthews.com; closed.ts
              publishes 38 hospitality transactions. Replaced with the
              boilerplate, which is fully backed. */}
          <div>Hotel investment sales &amp; capital markets</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
