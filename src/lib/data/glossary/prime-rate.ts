/**
 * Prime Rate
 * Glossary term: /glossary/prime-rate
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "prime-rate",
  term: "Prime Rate",
  shortDef: "The prime rate is the base rate banks use to price many business loans, including SBA 7(a) loans. Major banks moved it to 7.00 percent effective September 17, 2026.",
  fullDef: "The Federal Reserve says the prime rate is determined by individual banks, many of which set it partly on the federal funds target.[1] Its H.15 release reports the rate posted by a majority of the top 25 U.S. banks.[2] BNY raised its prime rate from 6.75 to 7.00 percent effective September 17, 2026.[3]",
  body: "Prime is a posted rate, not a traded one. The Fed does not set it, but banks move it in step with Fed decisions. On September 16, 2026 the FOMC raised the target range by a quarter point to 3-3/4 to 4 percent,[4] and BNY announced a 7.00 percent prime rate the same day, effective September 17.[3] The Fed's H.15 release, which reports the rate posted by a majority of the top 25 insured U.S. commercial banks, still showed 6.75 percent through September 16.[2]\n\nFor hotel owners, prime matters most on SBA 7(a) loans and local bank loans. SBA caps a variable-rate 7(a) loan over $350,000 at the base rate plus 3.0 percent.[5] With prime at 7.00 percent, that ceiling is 10.00 percent, as Matthews Hotel Markets' September 2026 rate sheet shows.[6] The ceiling is not a quote. Banks price inside it, and their spreads are set by the lender.\n\nSee [SOFR](/glossary/sofr) for the other common floating index and [SBA 7(a)](/glossary/sba-7a).",
  example: "Prime moved from 6.75% to 7.00% effective September 17, 2026.[3] SBA's maximum rate on a variable 7(a) loan over $350,000 is prime plus 3.0%,[5] so the cap moved from 6.75% + 3.00% = 9.75% to 7.00% + 3.00% = 10.00%. Hypothetical: on a $4,000,000 prime-based balance, the 0.25% move adds 0.0025 x $4,000,000 = $10,000 of interest a year, whatever the spread is.",
  misconceptions: [
    "The Fed does not set the prime rate. Individual banks do, and many follow the federal funds target.[1]",
    "Prime plus 3 percent is SBA's ceiling on larger 7(a) loans, not the rate you will be quoted.[5]",
    "Prime and SOFR are not interchangeable. Prime was 7.00 percent and SOFR 3.85 percent on September 17, 2026, so the spreads quoted over each are very different.[6]"
  ],
  faq: [
    {
      q: "What is the prime rate right now?",
      a: "7.00 percent at major banks, effective September 17, 2026, up from 6.75 percent.[3] Our rate sheet at /rates tracks it.[6]"
    },
    {
      q: "My SBA loan is prime plus 2.75. What is my rate?",
      a: "Add the spread to the current prime rate. At 7.00 percent prime, prime plus 2.75 is 9.75 percent. It resets when prime moves, on the schedule in your note."
    },
    {
      q: "Who decides the prime rate?",
      a: "Each bank sets its own. The Federal Reserve reports the rate posted by a majority of the top 25 U.S. banks, and says many banks base it partly on the federal funds target.[1][2]"
    },
    {
      q: "What is the highest rate a bank can charge on an SBA 7(a) hotel loan?",
      a: "For a variable-rate loan over $350,000, the base rate plus 3.0 percent.[5] With prime at 7.00 percent that is 10.00 percent.[6]"
    },
    {
      q: "Will my payment drop if the Fed cuts rates?",
      a: "If your loan floats over prime, yes, after banks lower prime and your note's reset date arrives. A fixed-rate loan does not change. See /hotel-financing/hotel-loan-rates."
    }
  ],
  sources: [
    {
      label: "What is the prime rate, and does the Federal Reserve set the prime rate?",
      url: "https://www.federalreserve.gov/faqs/credit_12846.htm",
      publisher: "Board of Governors of the Federal Reserve System"
    },
    {
      label: "Selected Interest Rates (Daily), H.15",
      url: "https://www.federalreserve.gov/releases/h15/",
      publisher: "Board of Governors of the Federal Reserve System"
    },
    {
      label: "BNY increases prime lending rate to 7.00%, September 16, 2026",
      url: "https://www.prnewswire.com/news-releases/bny-increases-prime-lending-rate-to-7-00-302881066.html",
      publisher: "BNY via PR Newswire"
    },
    {
      label: "Federal Reserve issues FOMC statement, September 16, 2026",
      url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm",
      publisher: "Board of Governors of the Federal Reserve System"
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
    "sofr",
    "sba-7a",
    "dscr"
  ],
  relatedAnswers: [
    "/hotel-financing/hotel-loan-rates",
    "/hotel-financing/sba-7a-vs-504",
    "/hotel-financing/refinance"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
