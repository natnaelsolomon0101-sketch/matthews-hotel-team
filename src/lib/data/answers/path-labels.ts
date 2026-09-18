/**
 * Link text for site paths that are not answer pages or glossary terms. One
 * map, used by both the HTML template and the Markdown twins, so the two can
 * never label the same link differently (the gate's parity check enforces it).
 */
export const KNOWN_PATH_LABELS: Record<string, string> = {
  "/rates": "Matthews Hotel Markets rate sheet",
  "/rates/methodology": "How the rate sheet is built",
  "/research": "Hotel investment research",
  "/research/mhi": "The Matthews Hotel Index",
  "/research/mhi/q1-2026": "Matthews Hotel Index, Q1 2026",
  "/data/hotel-financing-statistics": "Hotel financing statistics",
  "/data/sba-hotel-lending": "SBA loans to hotels: who lends, how much, and where",
  "/process": "How a listing engagement runs",
  "/tools": "Hotel finance calculators",
  "/tools/dscr-calculator": "Hotel DSCR calculator",
  "/tools/refinance-vs-sell": "Refinance vs sell calculator",
  "/tools/debt-yield-calculator": "Hotel debt yield calculator",
  "/tools/cap-rate-calculator": "Hotel cap rate calculator",
  "/tools/hotel-value-estimator": "Hotel value estimator",
  "/tools/hotel-loan-sizing-calculator": "Hotel loan sizing calculator",
};
