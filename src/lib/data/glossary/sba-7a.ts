/**
 * SBA 7(a) Loan
 * Glossary term: /glossary/sba-7a
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "sba-7a",
  term: "SBA 7(a) Loan",
  shortDef: "An SBA 7(a) loan is a bank loan of up to $5 million with a partial federal guaranty. Owner-operators use it to buy, refinance or renovate a hotel, with real estate terms up to 25 years.",
  fullDef: "The bank makes the loan and SBA guarantees 75 percent of any 7(a) loan over $150,000, which caps SBA's exposure at $3.75 million.[1] Real estate maturities run to 25 years. A variable rate on a loan over $350,000 cannot exceed the base rate plus 3.0 percent, which is 10.00 percent as of September 17, 2026.[1][3]",
  body: "SBA publishes the program's outer limits. The maximum loan is $5 million. The guaranty is 85 percent on loans up to $150,000 and 75 percent above that. Real estate can amortize over 25 years including extensions, and equipment generally over 10. Rate caps step down with size, from base plus 6.5 percent on loans of $50,000 or less to base plus 3.0 percent above $350,000.[1]\n\nPrepayment is also published. On a loan with a maturity of 15 years or more, the borrower pays 5 percent of the prepaid amount in year one, 3 percent in year two and 1 percent in year three, and nothing after.[1]\n\nWhat SBA does not publish is a DSCR floor or an LTV cap for 7(a). Those are set by the lender.[3] Holders of at least 20 percent of the business generally must guarantee the loan personally.[2] Unlike 504, a 7(a) loan can include working capital. See [SBA 504](/glossary/sba-504) and [Prime Rate](/glossary/prime-rate).",
  example: "A $5,000,000 7(a) loan carries a 75% guaranty: 0.75 x $5,000,000 = $3,750,000, which matches SBA's stated maximum exposure.[1] With prime at 7.00%, the maximum variable rate is 7.00% + 3.00% = 10.00%.[3] Hypothetical prepayment: an owner sells in year one and prepays $1,000,000. The fee is 0.05 x $1,000,000 = $50,000. In year two the same prepayment costs $30,000, in year three $10,000, and after that nothing.[1]",
  misconceptions: [
    "SBA does not lend the money. A bank does, and SBA guarantees part of it to the bank. The guaranty does not protect the borrower.",
    "The guaranty does not remove personal liability. Owners of 20 percent or more generally must guarantee the loan.[2]",
    "$5 million is a loan cap, not a project cap. A larger hotel can pair 7(a) with other capital, or use 504."
  ],
  faq: [
    {
      q: "Can I buy a hotel with an SBA 7(a) loan?",
      a: "Yes, if you will operate it and the business meets SBA's size and eligibility rules. The loan caps at $5 million and real estate can amortize over 25 years.[1] See /hotel-financing/sba-7a-vs-504."
    },
    {
      q: "What is the interest rate on an SBA 7(a) hotel loan?",
      a: "It is negotiated with the bank under SBA's cap. For a variable-rate loan over $350,000 the cap is the base rate plus 3.0 percent,[1] which is 10.00 percent with prime at 7.00 percent.[3]"
    },
    {
      q: "How much do I need to put down on an SBA 7(a) hotel loan?",
      a: "SBA does not publish a 7(a) equity percentage for this case. It is set by the lender.[3] SBA 504 does publish one: at least 15 percent for a hotel."
    },
    {
      q: "Is there a prepayment penalty on a 7(a) loan?",
      a: "On maturities of 15 years or more: 5 percent of the prepaid amount in year one, 3 percent in year two, 1 percent in year three, then none.[1]"
    },
    {
      q: "Do I have to personally guarantee an SBA loan?",
      a: "Generally yes, if you hold at least 20 percent of the business.[2]"
    }
  ],
  sources: [
    {
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/sba-lenders/#7a-terms",
      publisher: "U.S. Small Business Administration"
    },
    {
      label: "13 CFR 120.160, Loan conditions (guarantees)",
      url: "https://www.law.cornell.edu/cfr/text/13/120.160",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)"
    }
  ],
  relatedTerms: [
    "sba-504",
    "prime-rate",
    "ltv",
    "dscr"
  ],
  relatedAnswers: [
    "/hotel-financing/sba-7a-vs-504",
    "/hotel-financing/hotel-lenders-by-type",
    "/hotel-financing/loan-requirements"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
