/**
 * SBA 504 Loan
 * Glossary term: /glossary/sba-504
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "sba-504",
  term: "SBA 504 Loan",
  shortDef: "An SBA 504 loan is a two-part financing: a bank first mortgage plus a fixed-rate second funded by an SBA-backed debenture. A hotel buyer puts in at least 15 percent. The 25-year debenture priced at 6.54 percent in September 2026.",
  fullDef: "504 loans fund buildings, land and long-life equipment, not working capital, and come only through Certified Development Companies.[1] On a hotel, the bank lends at least 50 percent of project cost,[3] the borrower contributes at least 15 percent,[2] and the CDC debenture fills the rest at a fixed rate.",
  body: "The structure is set by regulation. Because SBA treats a hotel as a limited or single purpose property, the third-party lender must provide at least 50 percent of project cost,[3] and the borrower at least 15 percent, or 20 percent if the business is also two years old or less.[2] That leaves up to 35 percent for the CDC second lien.\n\nSBA's program page lists a $5.5 million maximum 504 loan, maturities of 10, 20 and 25 years, and rates pegged to an increment above 10-year Treasury issues.[1] Our comparison page works through the $5 million debenture cap that applies to a hotel under SOP 50 10 8.[4] The September 2026 25-year debenture priced at 6.54 percent, fees included, on September 10.[5]\n\nThe bank's first lien prices separately, and its rate and terms are set by the lender. 504 proceeds cannot fund working capital or inventory.[1] Owner-operators choose 504 for the long fixed rate on the second. See [SBA 7(a)](/glossary/sba-7a).",
  example: "Hypothetical. $6,000,000 hotel project, established operator. Bank first lien at 50%: 0.50 x $6,000,000 = $3,000,000.[3] Borrower equity at 15%: 0.15 x $6,000,000 = $900,000.[2] CDC debenture at the remaining 35%: 0.35 x $6,000,000 = $2,100,000, fixed for 25 years. Check: $3,000,000 + $2,100,000 + $900,000 = $6,000,000. A start-up operator would need 20%, or $1,200,000, and the debenture would shrink to $1,800,000.",
  misconceptions: [
    "A 504 loan is not one loan. It is a bank first mortgage and a separate CDC second, with two sets of documents and two payments.",
    "The published debenture rate is not the rate on the whole financing. The bank's first lien, at least half the project on a hotel, prices separately.[3]",
    "504 money cannot cover working capital or inventory.[1] Opening cash has to come from elsewhere."
  ],
  faq: [
    {
      q: "How does an SBA 504 loan work for a hotel?",
      a: "A bank lends at least 50 percent in first position, a Certified Development Company lends up to 35 percent in second position from an SBA-backed debenture, and you contribute at least 15 percent.[2][3]"
    },
    {
      q: "What is the SBA 504 rate right now?",
      a: "The 25-year debenture priced at 6.54 percent on September 10, 2026, fees included. See /rates.[5] The bank's first-lien rate is set by the lender."
    },
    {
      q: "How much down payment does a 504 hotel loan need?",
      a: "At least 15 percent of project cost, because a hotel is a limited or single purpose property. 20 percent if the business is also two years old or less.[2]"
    },
    {
      q: "What is the biggest hotel I can finance with SBA 504?",
      a: "The debenture is capped, not the project. SBA's page lists a $5.5 million maximum,[1] and /hotel-financing/sba-7a-vs-504 explains the $5 million cap that applies to a hotel.[4] The bank's first lien sits on top of that."
    },
    {
      q: "Should I use 504 or 7(a) for my hotel?",
      a: "504 gives a long fixed rate on the second lien and needs 15 percent down. 7(a) is one loan, can include working capital, and usually floats. See /hotel-financing/sba-7a-vs-504."
    }
  ],
  sources: [
    {
      label: "504 loans",
      url: "https://www.sba.gov/funding-programs/loans/504-loans",
      publisher: "U.S. Small Business Administration"
    },
    {
      label: "13 CFR 120.910, How much must the Borrower contribute?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.910",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "13 CFR 120.920, Required participation by Third Party Lenders",
      url: "https://www.law.cornell.edu/cfr/text/13/120.920",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: debenture limits (p. 350) and Limited or Special Purpose Property, which lists hotels (pp. 354-355)",
      url: "https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration"
    },
    {
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)"
    }
  ],
  relatedTerms: [
    "sba-7a",
    "ltv",
    "ground-lease",
    "dscr"
  ],
  relatedAnswers: [
    "/hotel-financing/sba-7a-vs-504",
    "/hotel-financing/hotel-loan-rates",
    "/hotel-financing/hotel-lenders-by-type"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
