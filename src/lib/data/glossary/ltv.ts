/**
 * Loan-to-Value (LTV)
 * Glossary term: /glossary/ltv
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "ltv",
  term: "Loan-to-Value (LTV)",
  shortDef: "Loan-to-value is the loan amount divided by the hotel's appraised value, as a percentage. A $6.5 million loan on a $10 million appraisal is 65 percent LTV.",
  fullDef: "LTV is the share of a hotel's value that the lender finances. Federal guidelines cap a bank's internal limit at 85 percent for improved property, but no hotel lender publishes its own ceiling, and it is set by the lender.[1][4] The denominator is the appraisal or the price, whichever is lower.",
  body: "The formula is loan amount divided by value. The argument is always about the value. Banks generally must order an appraisal on a commercial real estate loan above $500,000,[2] and a lender sizes to the lower of the appraised value and the contract price, so a low appraisal cuts proceeds even when the price is agreed.\n\nThe only published LTV numbers are supervisory, not market. The interagency real estate lending guidelines tell banks to set internal limits no higher than 85 percent on improved property and 80 percent on commercial construction, and say that loans at those levels are not automatically sound.[1] Hotel lenders set their own ceilings below that and do not publish them. Matthews Hotel Markets' September 2026 rate sheet marks every lender-set LTV cell as not yet published.[4] SBA 504 is the exception with a published structure: a hotel borrower contributes at least 15 percent of project cost.[3]\n\nLTV is one of three sizing tests. See [DSCR](/glossary/dscr) and [Debt Yield](/glossary/debt-yield). The smallest loan wins.",
  example: "Hypothetical. Contract price $9,400,000. Appraisal $9,000,000. The lender sizes to the lower figure. At a lender-set 65% LTV, the loan is 0.65 x $9,000,000 = $5,850,000. The buyer expected 0.65 x $9,400,000 = $6,110,000. The $400,000 appraisal gap costs $260,000 of proceeds, which the buyer covers with cash or a price cut. The 65% is an assumption for the arithmetic, not a quoted lender term.",
  misconceptions: [
    "LTV is not loan-to-cost. LTV divides by appraised value. Loan-to-cost divides by the total project budget, including a PIP. Construction and bridge lenders often quote loan-to-cost, and the two can differ by several points on the same deal.",
    "The 85 percent supervisory limit is not what a hotel borrower gets. It is a ceiling regulators place on a bank's own policy. The lender's actual hotel limit is set by the lender and is lower.",
    "Passing LTV does not mean the loan is approved at that size. DSCR or debt yield may produce a smaller loan."
  ],
  faq: [
    {
      q: "What does LTV mean on my hotel term sheet?",
      a: "It is the maximum loan as a percentage of the hotel's appraised value. If the term sheet says 65 percent LTV and the appraisal comes in at $9.0 million, the loan cannot exceed $5.85 million, whatever the purchase price is."
    },
    {
      q: "What is the maximum LTV on a hotel loan?",
      a: "No lender type publishes one. Federal guidelines cap a bank's internal limit at 85 percent for improved property,[1] but hotel limits are set by the lender, below that. Our rate sheet at /rates marks them not yet published.[4]"
    },
    {
      q: "My appraisal came in below the purchase price. What happens to my loan?",
      a: "The lender sizes to the lower number, so proceeds fall. You can bring more cash, renegotiate the price, dispute the appraisal with better comparable sales, or move to a lender whose binding test is DSCR rather than LTV."
    },
    {
      q: "How much do I have to put down on a hotel with an SBA 504 loan?",
      a: "At least 15 percent of project cost, because SBA treats a hotel as a limited or single purpose property. It is 20 percent if the business is also two years old or less.[3]"
    },
    {
      q: "Is LTV or DSCR more important to a hotel lender?",
      a: "Neither on its own. The lender runs LTV, DSCR and often debt yield, and the test that produces the smallest loan sets the proceeds. Use /tools/dscr-calculator to see which one binds on your numbers."
    }
  ],
  sources: [
    {
      label: "12 CFR Part 365, Appendix A: Interagency Guidelines for Real Estate Lending Policies",
      url: "https://www.law.cornell.edu/cfr/text/12/appendix-A_to_subpart_A_of_part_365",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "12 CFR 34.43, appraisals required; transactions requiring a state certified or licensed appraiser",
      url: "https://www.law.cornell.edu/cfr/text/12/34.43",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "13 CFR 120.910, How much must the Borrower contribute?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.910",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)"
    }
  ],
  relatedTerms: [
    "dscr",
    "debt-yield",
    "going-concern-value",
    "cap-rate"
  ],
  relatedAnswers: [
    "/hotel-financing/loan-requirements",
    "/tools/dscr-calculator",
    "/hotel-financing/sba-7a-vs-504"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
