/**
 * Going-Concern Value
 * Glossary term: /glossary/going-concern-value
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "going-concern-value",
  term: "Going-Concern Value",
  shortDef: "Going-concern value is the value of a hotel as an operating business: real estate, furniture and equipment, and intangibles together. Federal appraisal guidelines dated December 2, 2010 say it may not stand in for market value of the real property.",
  fullDef: "A hotel sells as a running business, so its price covers three things: the real property, the FF&E, and intangibles such as the franchise, the workforce and the reservation flow. Going-concern value is the total. The 2010 interagency guidelines define it as the value of a business entity rather than of the real property.[1]",
  body: "The distinction matters most to a bank. Federal appraisal rules define market value as the most probable price a property should bring in a competitive and open market.[2] The Interagency Appraisal and Evaluation Guidelines add that going-concern value, value in use, or a special value to a specific user may not be used as market value for a federally related transaction, though an appraisal may report them separately if they are clearly identified.[1]\n\nIn practice a hotel appraisal for a bank often reports the going-concern total and then allocates it among real property, personal property and intangibles. The lender decides which figure its loan-to-value test runs against, and that choice is set by the lender. SBA treats hotels as limited or special purpose property, which is one reason a hotel 504 loan needs 15 percent down rather than 10.[3]\n\nThe allocation also drives property tax appeals, depreciation schedules and transfer taxes. See [LTV](/glossary/ltv) and [BOV](/glossary/bov).",
  example: "Hypothetical. A hotel appraises at $12,000,000 as a going concern. The appraiser allocates $900,000 to FF&E and $1,100,000 to intangibles, leaving $12,000,000 - $900,000 - $1,100,000 = $10,000,000 of real property. At an assumed 65% LTV, a lender sizing to the going-concern total would lend $7,800,000. A lender sizing to real property alone would lend $6,500,000. Same hotel, same appraisal, $1,300,000 apart. Every figure here is an assumption for the arithmetic.",
  misconceptions: [
    "Going-concern value is not an inflated number. It is the right number for what a hotel buyer actually buys. It is only the wrong number for the real-property line in a bank file.",
    "It is not the accounting term. Auditors use going concern to mean a business can keep operating. Appraisers use it to mean the value of the operating whole.",
    "The allocation is not a formula. Appraisers use different methods to separate intangibles, and the results differ."
  ],
  faq: [
    {
      q: "What does going-concern value mean in my hotel appraisal?",
      a: "It is the value of the hotel as an operating business, including real estate, FF&E and intangibles. The 2010 interagency guidelines define it as the value of a business entity rather than the real property.[1]"
    },
    {
      q: "Why did my appraiser split the value into real estate, FF&E and business value?",
      a: "Because federally regulated lenders cannot treat going-concern value as the market value of the real property.[1] The split lets the lender see what its mortgage actually secures."
    },
    {
      q: "Will my bank lend against the going-concern value or just the real estate?",
      a: "That is set by the lender. Ask before the appraisal is ordered, because the answer can move proceeds by more than a million dollars on a mid-size hotel."
    },
    {
      q: "Is a broker opinion of value a going-concern value?",
      a: "Yes. A BOV prices the hotel the way buyers do, as an operating business, from its NOI. See /hotel-valuation/broker-opinion-of-value."
    },
    {
      q: "Does going-concern value matter for property taxes?",
      a: "Yes. Property tax applies to real property, so owners often appeal assessments that capture business or franchise value. Rules vary by state, so use a local property tax adviser."
    }
  ],
  sources: [
    {
      label: "Interagency Appraisal and Evaluation Guidelines, December 2, 2010 (SR 10-16 attachment)",
      url: "https://www.federalreserve.gov/boarddocs/srletters/2010/sr1016a1.pdf",
      publisher: "Board of Governors of the Federal Reserve System, OCC, FDIC, OTS and NCUA"
    },
    {
      label: "12 CFR 34.42, definitions (market value, appraisal)",
      url: "https://www.law.cornell.edu/cfr/text/12/34.42",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: debenture limits (p. 350) and Limited or Special Purpose Property, which lists hotels (pp. 354-355)",
      url: "https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration"
    }
  ],
  relatedTerms: [
    "ltv",
    "bov",
    "noi",
    "cap-rate"
  ],
  relatedAnswers: [
    "/hotel-valuation/how-to-value-a-hotel",
    "/hotel-valuation/broker-opinion-of-value",
    "/hotel-financing/loan-requirements"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
