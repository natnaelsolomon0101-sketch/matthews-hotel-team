/**
 * Debt Yield
 * Glossary term: /glossary/debt-yield
 *
 * Converted from geo/07-pages/glossary__debt-yield.md (Wave 1 draft).
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "debt-yield",
  term: "Debt Yield",
  shortDef: "Debt yield is a hotel's net operating income divided by the loan amount, expressed as a percentage. It measures the lender's return if it had to take the asset back.",
  fullDef: "Debt yield is NOI divided by loan amount. It is the one sizing test that does not depend on rate, amortization or an appraisal, which is why CMBS lenders lean on it. Lenders do not publish their hotel floors. At a hypothetical 10 percent test, $2.0 million of NOI supports a $20 million loan.",
  body: "The formula is simple: NOI divided by loan amount, as a percentage. What it actually measures is the lender's unlevered cash-on-cash return on the loan balance in the scenario the lender hopes never to face, foreclosing and taking the keys. A 10.5 percent debt yield means the lender would earn a 10.5 percent return on its own money, at the current NOI, if it owned the asset outright at the loan amount.\n\nDebt yield is rate-independent, which is what separates it from DSCR and makes it useful to a lender in a way the other two tests are not. DSCR moves with the interest rate and the amortization schedule; loan-to-value moves with the appraisal, which federal banking rules generally require on commercial real estate loans above $500,000.[1] Debt yield moves only when NOI or the loan amount changes, which means it cannot be flattered by a longer amortization schedule, an optimistic appraisal, or a temporarily low rate.\n\nThat immunity is exactly why CMBS lenders lean on debt yield as a primary sizing test. A CMBS loan is pooled and sold to bond investors who are not in the room during underwriting, and a test that cannot be gamed through amortization stretching or appraisal shopping gives those investors a cleaner floor on loan quality. We have not found a lender program that publishes its hotel debt yield floor, so ask for the test in writing. CMBS sizing is disclosed deal by deal in offering documents filed with the SEC, after the loan is written.[2]\n\nDebt yield and cap rate are related but not the same calculation, and confusing them is the most common error. Cap rate divides NOI by purchase price; debt yield divides the identical NOI by the loan amount instead. Because the loan amount is smaller than the purchase price whenever there is equity in the deal, debt yield is always a higher percentage than the cap rate on the same asset. The two numbers would only converge if the loan equaled the full price, which no lender offers.\n\nTo find which of the three sizing tests, debt yield, DSCR, or loan-to-value, actually binds on a specific deal, run all three and take the smallest resulting loan amount. The worked example below shows this directly: an appraisal change moves the LTV test and can shift which test binds, while the debt yield number does not move at all, because it never touched the appraisal in the first place.",
  example: "Hypothetical. NOI $2,100,000. Value $26,000,000. LTV test at 65%: loan = $16.90M. Debt yield floor at 10.5%: loan = $2.1M / 0.105 = $20.00M. DSCR test at 1.40x, 7.10%, 30-year schedule: loan = $18.60M. LTV binds at $16.90M. Now assume the appraisal comes back at $30.0M: the LTV test moves to $19.50M and the DSCR test at $18.60M becomes the constraint. Debt yield never moved, because it does not use the appraisal.",
  misconceptions: [
    "Debt yield is not cap rate. Cap rate divides NOI by price; debt yield divides NOI by the loan. They coincide only if the loan equals the full price, which no lender offers.",
    "A higher debt yield requirement is not a stricter lender in general. It is a stricter lender on loan size specifically, and it may be looser on rate or recourse."
  ],
  faq: [
    {
      q: "What is debt yield?",
      a: "Net operating income divided by loan amount, expressed as a percentage. It is the return a lender would earn on the loan balance if it took the property back at closing."
    },
    {
      q: "What debt yield do hotel lenders require?",
      a: "We have not found a lender type that publishes one, so ask your lender for its test in writing. In CMBS, sizing is disclosed deal by deal in offering documents filed with the SEC.[2]"
    },
    {
      q: "How is debt yield different from cap rate?",
      a: "Cap rate divides NOI by purchase price. Debt yield divides the same NOI by the loan amount, a smaller number, so debt yield is always higher than the cap rate on a levered deal."
    },
    {
      q: "Why do CMBS lenders use debt yield?",
      a: "It does not depend on an appraisal, an interest rate, or an amortization schedule, all of which can be flattered. It is the one test a borrower cannot improve by negotiating terms."
    },
    {
      q: "Which test usually binds on a hotel loan?",
      a: "Whichever of debt yield, DSCR and LTV produces the smallest loan amount for that specific deal. It varies by rate environment and by how the appraisal compares to the purchase price."
    }
  ],
  sources: [
    {
      label: "12 CFR 34.43, appraisals required; transactions requiring a state certified or licensed appraiser",
      url: "https://www.law.cornell.edu/cfr/text/12/34.43",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "EDGAR full-text search",
      url: "https://www.sec.gov/edgar/search/",
      publisher: "U.S. Securities and Exchange Commission"
    }
  ],
  relatedTerms: [
    "cap-rate",
    "dscr",
    "noi"
  ],
  relatedAnswers: [
    "/hotel-financing/loan-requirements",
    "/hotel-financing/cmbs-loans",
    "/hotel-financing/hotel-lenders-by-type"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
