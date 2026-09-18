/**
 * Debt Service Coverage Ratio (DSCR)
 * Glossary term: /glossary/dscr
 *
 * Converted from geo/07-pages/glossary__dscr.md (Wave 1 draft).
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "dscr",
  term: "Debt Service Coverage Ratio (DSCR)",
  shortDef: "Debt service coverage ratio is net operating income divided by annual debt service. A 1.35x DSCR means a hotel produces 35 percent more cash than the loan needs.",
  fullDef: "DSCR is the cash-flow cushion a lender requires between a hotel's net operating income and its annual principal and interest payment. No hotel lender type publishes its minimum, so get your lender's test in writing.[1] Because DSCR is computed against the payment rather than the price, a rate increase reduces the loan a given NOI can support.",
  body: "The formula is fixed: NOI divided by annual debt service, both measured over the same twelve-month period. Debt service means principal and interest on the senior loan. Whether mezzanine debt and ground rent count depends on the lender: most senior lenders test DSCR against the senior loan alone, but some structures require a combined test across the full capital stack, so ask which one a specific term sheet is using before comparing quotes.\n\nIn our experience, hotel lenders ask for more cushion than apartment or office lenders do. The reason is structural: a hotel's room revenue reprices nightly and carries no lease term, which means income can move faster in a downturn than a leased asset's income can. A higher required cushion compensates for that volatility. No lender type publishes its exact threshold. Matthews Hotel Markets' September 2026 rate sheet marks the DSCR floor as not yet published for all seven lender types it covers, and says so rather than printing a range nobody stands behind.[1] SBA's 7(a) terms page publishes rate caps, maturities and guaranty levels, not a coverage floor,[2] and the FDIC's examination manual covers loans in general without a hotel coverage minimum that we could find.[3] Ask a specific lender for its test in writing.\n\nWhich NOI a lender uses matters as much as the ratio itself. A bridge lender financing a transitional or PIP-affected asset often sizes to a pro forma, stabilized NOI, betting on the business plan to get there. A permanent lender on a stabilized asset more often sizes to trailing twelve-month NOI, sometimes discounted for seasonality or a one-time revenue event. The same hotel can show two different DSCRs depending on which NOI definition a lender applies, which is why the NOI number itself needs to be agreed on before the ratio means anything. See [Net Operating Income](/glossary/noi) for how that number is built.\n\nDSCR is also the mechanism through which a rate change becomes a proceeds change. Hold NOI constant and raise the interest rate: the same loan amount now requires a larger annual payment, which lowers DSCR. A lender testing to a fixed minimum has to shrink the loan to bring the ratio back into range. This is the practical reason DSCR matters to a borrower beyond satisfying a covenant: it is the lever that converts market rate movement directly into how much a hotel can borrow, worked through with real numbers in the example above.\n\nWhen DSCR binds, a borrower has three levers: bring more equity to shrink the loan, extend the amortization period to lower the payment, or improve NOI. Each has a real cost. More equity means a lower return on the capital deployed. Longer amortization lowers the payment but slows principal paydown and can be capped by the lender or the franchise term remaining. Improving NOI takes time and is not something a borrower can do before a closing date.\n\nDSCR does not act alone. Loan-to-value, which rests on an appraisal that federal banking rules generally require on commercial real estate loans above $500,000,[4] and, for CMBS structures, debt yield are tested alongside it, and whichever of the three produces the smallest loan amount is the one that actually sets the terms. See [Debt Yield](/glossary/debt-yield) for how that test differs and why some lenders prefer it.",
  example: "Hypothetical. NOI $1,600,000. Loan $12,000,000 at 7.25%, 25-year amortization. Monthly payment $86,737, annual debt service $1,040,842. DSCR = $1,600,000 / $1,040,842 = 1.54x. Against a 1.35x test, it clears. Now hold NOI and move the rate to 8.50%: annual debt service rises to about $1,159,000 and DSCR falls to 1.38x. Still clears, barely. At 9.25% it is 1.30x and the loan resizes.",
  misconceptions: [
    "DSCR is not LTV. DSCR is tested against the payment; LTV is tested against value. A hotel can pass one and fail the other, and frequently does.",
    "A higher DSCR is not automatically a better deal for the borrower. It usually means a smaller loan and more equity in the deal."
  ],
  faq: [
    {
      q: "What is a good DSCR for a hotel loan?",
      a: "There is no published answer. No hotel lender type publishes a DSCR floor, and our rate sheet at /rates marks it not yet published.[1] Clear your own lender's stated test with room for a soft quarter."
    },
    {
      q: "How do I calculate DSCR?",
      a: "Divide annual net operating income by annual principal and interest payments on the senior loan. Both figures must cover the same twelve-month period."
    },
    {
      q: "Do lenders use trailing or projected NOI for DSCR?",
      a: "Bridge lenders often size to a pro forma, stabilized NOI; permanent lenders more often size to trailing twelve-month NOI, sometimes with a haircut for stabilization risk."
    },
    {
      q: "What happens if my hotel's DSCR is below the lender's test?",
      a: "The loan amount is reduced until the ratio clears, or the borrower brings more equity, extends amortization, or improves NOI before closing."
    },
    {
      q: "Is DSCR or debt yield the harder test?",
      a: "It depends on the loan's rate, amortization and the appraisal. Whichever of DSCR, debt yield, and loan-to-value produces the smallest loan amount is the one that actually binds."
    }
  ],
  sources: [
    {
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)"
    },
    {
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/partners/lenders/7a-loan-program/terms-conditions-eligibility",
      publisher: "U.S. Small Business Administration"
    },
    {
      label: "Risk Management Manual of Examination Policies",
      url: "https://www.fdic.gov/risk-management-manual-examination-policies",
      publisher: "Federal Deposit Insurance Corporation"
    },
    {
      label: "12 CFR 34.43, appraisals required; transactions requiring a state certified or licensed appraiser",
      url: "https://www.law.cornell.edu/cfr/text/12/34.43",
      publisher: "Legal Information Institute, Cornell Law School"
    }
  ],
  relatedTerms: [
    "cap-rate",
    "revpar",
    "debt-yield",
    "noi"
  ],
  relatedAnswers: [
    "/hotel-financing/loan-requirements",
    "/hotel-financing/hotel-loan-rates",
    "/tools/dscr-calculator"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
