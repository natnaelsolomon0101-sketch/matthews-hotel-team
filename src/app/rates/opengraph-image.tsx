import { ImageResponse } from "next/og";
import { BENCHMARKS, latestEdition } from "@/lib/rates/sheet";

export const runtime = "edge";
export const alt = "Matthews Hotel Markets Hotel Loan Rate Sheet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The headline numbers, so a share card carries the data rather than a logo.
 * Only public benchmarks go on the card: they are the cells that are real
 * every month regardless of what the team has published.
 */
export default async function Image() {
  const e = latestEdition();
  const shown = BENCHMARKS.filter((b) =>
    ["ust10", "ust5", "sofr", "prime", "sba504"].includes(b.key),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px",
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
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.7,
            fontWeight: 500,
          }}
        >
          Matthews Hotel Markets
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Hotel Loan Rate Sheet, {e.label}
          </div>

          <div style={{ display: "flex", gap: 40 }}>
            {shown.map((b) => (
              <div
                key={b.key}
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 16,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    opacity: 0.65,
                  }}
                >
                  {b.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 48,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {b.value.toFixed(2)}%
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            opacity: 0.7,
          }}
        >
          Public benchmarks with sources and dates &middot; matthewshotelmarkets.com/rates
        </div>
      </div>
    ),
    { ...size },
  );
}
