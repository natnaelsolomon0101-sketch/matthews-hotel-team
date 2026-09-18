/**
 * Yield Maintenance
 * Glossary term: /glossary/yield-maintenance
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "yield-maintenance",
  term: "Yield Maintenance",
  shortDef: "Yield maintenance is a prepayment charge that pays the lender the interest it loses when a fixed-rate loan is repaid early. Agency loan documents set it at the greater of 1 percent of the balance or the calculated amount.",
  fullDef: "If a borrower repays a 6.50 percent loan when the lender can only reinvest at 4.50 percent, the lender loses the difference for the remaining term. Yield maintenance charges the present value of that lost interest. The formula, the reference Treasury and any minimum are set by the lender in the note.",
  body: "The charge rises when market rates have fallen since closing and with the time left on the loan. When Treasury yields are at or above the note rate, the calculated amount can fall to zero, and any minimum in the note takes over.\n\nNo hotel lender publishes its formula, so read the note. One public example of the structure is Fannie Mae's multifamily guide, which does not cover hotels. It says loan documents generally require a prepayment premium equal to the greater of 1 percent of the unpaid principal balance or yield maintenance.[1] Life companies and some banks and CMBS loans use similar language on hotel loans.\n\nSBA 7(a) takes a simpler, published approach on long loans: 5 percent of the prepaid amount in year one, 3 percent in year two and 1 percent in year three.[2] For reference, the 10-year Treasury was 4.94 percent on September 17, 2026.[3] Compare with [Defeasance](/glossary/defeasance).",
  example: "Hypothetical, using one common simplified form. Balance $8,000,000, note rate 6.50%, reference Treasury yield 4.50%, four years left. Rate difference: 6.50% - 4.50% = 2.00%. Present value factor for four annual periods at 4.50%: (1 - 1.045^-4) / 0.045 = 3.5875. Charge: $8,000,000 x 0.02 x 3.5875 = $574,000. A 1% minimum would be $80,000, so the calculated amount applies. If the Treasury yield were 6.50% or higher, the difference is zero and the $80,000 minimum applies. Your note's formula governs.",
  misconceptions: [
    "Yield maintenance is not a fixed percentage. It moves with Treasury yields and with time remaining, and can be many times the minimum.",
    "It is not the same as a step-down penalty like 5-4-3-2-1. A step-down is known at closing. Yield maintenance is not.",
    "Rising rates do not always make it disappear. Many notes set a minimum charge, such as the 1 percent in agency multifamily documents.[1]"
  ],
  faq: [
    {
      q: "What does yield maintenance mean on my loan documents?",
      a: "If you repay early, you owe the lender the present value of the interest it loses by reinvesting at a lower Treasury yield. The exact formula is in your note."
    },
    {
      q: "How do I calculate my yield maintenance penalty?",
      a: "Take the gap between your note rate and the reference Treasury yield, apply it to the balance, and discount over the remaining term. Then compare with any minimum. Ask your servicer for a payoff quote before relying on your own math."
    },
    {
      q: "Is there a way to avoid yield maintenance when I sell my hotel?",
      a: "A loan assumption by the buyer avoids it if the lender consents. Otherwise wait for the open window near maturity, which most notes include. See /hotel-financing/refinance-or-sell."
    },
    {
      q: "Why is my prepayment penalty so large?",
      a: "Rates fell since you closed, or many years remain, or both. Each makes the lender's lost interest larger."
    },
    {
      q: "Do SBA loans have yield maintenance?",
      a: "7(a) loans use a published step-down instead: 5, 3 and 1 percent of the prepaid amount in the first three years on maturities of 15 years or more.[2]"
    }
  ],
  sources: [
    {
      label: "Multifamily Selling and Servicing Guide, Part V, Section 213.02, Yield Maintenance Prepayment Premiums (effective September 14, 2026)",
      url: "https://mfguide.fanniemae.com/node/8236",
      publisher: "Fannie Mae"
    },
    {
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/sba-lenders/#7a-terms",
      publisher: "U.S. Small Business Administration"
    },
    {
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)"
    }
  ],
  relatedTerms: [
    "defeasance",
    "sofr",
    "sba-7a"
  ],
  relatedAnswers: [
    "/hotel-financing/refinance",
    "/hotel-financing/refinance-or-sell",
    "/hotel-financing/hotel-loan-rates"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
