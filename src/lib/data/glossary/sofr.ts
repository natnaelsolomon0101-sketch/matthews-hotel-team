/**
 * SOFR (Secured Overnight Financing Rate)
 * Glossary term: /glossary/sofr
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "sofr",
  term: "SOFR (Secured Overnight Financing Rate)",
  shortDef: "SOFR is the benchmark rate for most floating-rate commercial loans. It measures the cost of borrowing cash overnight against Treasury securities. It was 3.85 percent on September 17, 2026.",
  fullDef: "The New York Fed publishes SOFR each business day at about 8:00 a.m. Eastern. It is a volume-weighted median of overnight Treasury repo transactions.[1] A floating-rate hotel loan is quoted as SOFR plus a spread. SOFR was 3.85 percent on September 17, 2026; the spread is set by the lender.[2]",
  body: "The New York Fed defines SOFR as a broad measure of the cost of borrowing cash overnight collateralized by Treasury securities. It is calculated from tri-party repo data, GCF Repo transactions and bilateral Treasury repo cleared through FICC.[1] Because it is built from real trades, it replaced LIBOR as the base rate for U.S. floating-rate debt.\n\nOn a hotel loan, SOFR shows up in bridge loans, construction loans and many debt fund and bank floaters. The note usually uses Term SOFR, a forward-looking one-month version, or a 30-day average, rather than the overnight print. The all-in rate is SOFR plus the lender's spread. Matthews Hotel Markets' September 2026 rate sheet publishes the index, 3.85 percent on September 17, and marks the spreads as not yet published because no lender publishes them.[2]\n\nFloating-rate lenders usually require an interest rate cap, and many set a SOFR floor. Both are set by the lender. Compare with [Prime Rate](/glossary/prime-rate).",
  example: "Hypothetical. An $8,000,000 interest-only bridge loan at SOFR plus an assumed 3.50% spread. With SOFR at 3.85%,[2] the rate is 3.85% + 3.50% = 7.35%, and annual interest is 0.0735 x $8,000,000 = $588,000. If SOFR rises 0.25%, interest rises 0.0025 x $8,000,000 = $20,000 a year. The 3.50% spread is an assumption for the arithmetic, not a quoted lender term.",
  misconceptions: [
    "SOFR is not set by the Federal Reserve's rate decision. It is measured from repo trades. It tends to track the federal funds target range, but it is a market rate.",
    "SOFR is not your interest rate. Your rate is SOFR plus a spread, subject to any floor in the note.",
    "Overnight SOFR and Term SOFR are different numbers. Check which one your note names."
  ],
  faq: [
    {
      q: "What does SOFR plus 350 mean on my term sheet?",
      a: "Your interest rate floats at the SOFR index plus 3.50 percentage points. With SOFR at 3.85 percent on September 17, 2026, that is 7.35 percent.[2] The rate resets, usually monthly."
    },
    {
      q: "What is SOFR today?",
      a: "The New York Fed publishes it each business day at about 8:00 a.m. Eastern.[1] Our rate sheet at /rates shows 3.85 percent for September 17, 2026.[2]"
    },
    {
      q: "Is a SOFR loan or a fixed-rate loan better for my hotel?",
      a: "A SOFR floater suits a short hold or a renovation, because it usually prepays cheaply. A fixed rate suits a stabilized hotel held for years. See /hotel-financing/bridge-loans and /hotel-financing/hotel-loan-rates."
    },
    {
      q: "Do I need a rate cap on a SOFR loan?",
      a: "Most floating-rate lenders require one. The strike and term are set by the lender, and the cap's price moves with the market."
    },
    {
      q: "What replaced LIBOR on hotel loans?",
      a: "SOFR. It is calculated from actual overnight Treasury repo transactions rather than bank estimates.[1]"
    }
  ],
  sources: [
    {
      label: "Secured Overnight Financing Rate (SOFR)",
      url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      publisher: "Federal Reserve Bank of New York"
    },
    {
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)"
    }
  ],
  relatedTerms: [
    "prime-rate",
    "dscr",
    "yield-maintenance"
  ],
  relatedAnswers: [
    "/hotel-financing/hotel-loan-rates",
    "/hotel-financing/bridge-loans",
    "/hotel-financing/refinance"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
