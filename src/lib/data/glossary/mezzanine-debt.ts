/**
 * Mezzanine Debt
 * Glossary term: /glossary/mezzanine-debt
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "mezzanine-debt",
  term: "Mezzanine Debt",
  shortDef: "Mezzanine debt is a loan that sits between the first mortgage and the owner's equity. It is secured by the ownership interests in the borrower, not the hotel. In the example below it lifts total debt from 60 to 75 percent of value.",
  fullDef: "A mezzanine lender takes a pledge of the equity in the company that owns the hotel. If the loan defaults, it forecloses on that pledge under UCC Article 9 and becomes the owner, subject to the first mortgage.[1] Rates and proceeds are set by the lender and are not published.[3]",
  body: "Mezzanine debt fills the gap when the senior loan stops short of what the sponsor needs. Because it is behind the mortgage and has no lien on the real estate, it costs more than senior debt and less than equity.\n\nThe remedy is what makes it different. UCC 9-610 lets a secured party sell or otherwise dispose of collateral after default, if every aspect of the disposition is commercially reasonable.[1] That process is usually much faster than a mortgage foreclosure. The winner of the sale owns the borrower and still owes the senior loan.\n\nTwo documents control the relationship. The intercreditor agreement between senior and mezzanine lenders sets cure rights and transfer rules. On a flagged hotel, the brand's consent matters too. Hilton's 2025 Hampton disclosure document includes a separate mezzanine lender comfort letter form.[2] Senior lenders often test DSCR on the combined debt. See [DSCR](/glossary/dscr) and [Comfort Letter](/glossary/comfort-letter).",
  example: "Hypothetical. Hotel value $20,000,000. Senior loan $12,000,000: $12,000,000 / $20,000,000 = 60% LTV. Mezzanine loan $3,000,000. Combined debt $15,000,000: $15,000,000 / $20,000,000 = 75%. Equity $5,000,000 instead of $8,000,000. If value falls 25% to $15,000,000, the equity is gone and the mezzanine lender is the first capital at risk. All figures are assumptions. Lenders set their own limits.",
  misconceptions: [
    "Mezzanine debt is not a second mortgage. It has no lien on the hotel. Its collateral is the ownership interest in the borrower.",
    "Adding mezzanine debt is not only between you and the mezzanine lender. The senior loan documents usually prohibit it without consent.",
    "It is not preferred equity. Preferred equity is an ownership stake with priority distributions. Mezzanine debt is a loan with foreclosure rights under the UCC.[1]"
  ],
  faq: [
    {
      q: "What is mezzanine debt in a hotel deal?",
      a: "A loan behind the first mortgage, secured by a pledge of the ownership interests in the borrowing entity rather than by the hotel itself."
    },
    {
      q: "What happens if I default on a mezzanine loan?",
      a: "The lender can sell the pledged ownership interests under UCC Article 9, in a commercially reasonable sale, and the buyer takes control of the company that owns the hotel.[1]"
    },
    {
      q: "What interest rate does mezzanine debt carry?",
      a: "Higher than the senior loan. Rates are set by the lender and are not published. Our rate sheet at /rates marks them not yet published.[3]"
    },
    {
      q: "Will my senior lender allow mezzanine debt?",
      a: "Only if the loan documents permit it or the lender consents, and it will require an intercreditor agreement. Raise it before the senior term sheet is signed."
    },
    {
      q: "Does the hotel brand need to approve a mezzanine loan?",
      a: "Often, yes. A mezzanine foreclosure changes control of the franchisee. Hilton publishes a separate mezzanine lender comfort letter form in its 2025 Hampton disclosure document.[2]"
    }
  ],
  sources: [
    {
      label: "UCC 9-610, Disposition of collateral after default",
      url: "https://www.law.cornell.edu/ucc/9/9-610",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "2025 Hampton Inn and Hampton Inn & Suites Franchise Disclosure Document, issued March 30, 2025",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC"
    },
    {
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)"
    }
  ],
  relatedTerms: [
    "ltv",
    "dscr",
    "comfort-letter",
    "non-recourse-carve-outs"
  ],
  relatedAnswers: [
    "/hotel-financing/hotel-lenders-by-type",
    "/hotel-financing/how-debt-placement-works",
    "/hotel-financing/loan-workouts"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
