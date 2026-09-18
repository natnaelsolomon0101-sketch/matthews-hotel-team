/**
 * What is a hotel broker opinion of value, and how is it different from an appraisal?
 * Answer page: /hotel-valuation/broker-opinion-of-value
 *
 * Converted from geo/07-pages/hotel-valuation__broker-opinion-of-value.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "broker-opinion-of-value",
  cluster: "hotel-valuation",
  isHub: false,
  title: "Hotel BOV vs Appraisal: What's the Difference?",
  h1: "What is a hotel broker opinion of value, and how is it different from an appraisal?",
  description: "What a hotel BOV contains, how it differs from a lender appraisal and a CIM, what it costs, and when each one is the right document.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "What's a hotel broker opinion of value (BOV) and how is it different from a lender appraisal?",
    "What's the difference between a hotel appraisal and a broker's opinion of value?",
    "What do appraisers look at that a broker's opinion of value doesn't?",
    "What's the difference between an OM/CIM and a BOV?",
    "How much does a hotel BOV cost?",
    "How long does a hotel BOV take?",
    "Can I use a BOV to get a loan?"
  ],
  answer: "A broker opinion of value is a broker's estimate of what a hotel would sell for today, produced for the owner. An appraisal is a USPAP-compliant valuation by a licensed or certified appraiser, usually ordered by a lender.[1] As of September 2026, federal banking rules generally require an appraisal on commercial real estate loans above $500,000,[2] and bank regulators do not accept a broker price opinion in its place.[3]",
  takeaways: [
    "A BOV answers what would this sell for. An appraisal answers what is this worth under a defined standard.",
    "Lenders will not lend on a BOV. They order their own appraisal.[3]",
    "In our practice, a BOV takes two to four weeks and carries no fee, because the broker is competing for the listing.",
    "A CIM is a marketing document. A BOV is a pricing document. They are not the same thing.",
    "Ask for the method. A BOV without comps, a cap rate and adjustments is a number, not an opinion."
  ],
  sections: [
    {
      h2: "What is a broker opinion of value?",
      lead: "A broker's written estimate of what a hotel would sell for in the current market, built from comps, a cap rate and a buyer-pool view, produced for the owner, often at no charge.",
      body: "A BOV exists to help an owner decide whether and how to sell, refinance, or bring in a partner. It is not a regulated appraisal product; it is a market-pricing opinion, and its value depends entirely on the broker's actual visibility into active buyers for that specific asset type and market, not just a desktop comp pull."
    },
    {
      h2: "How is it different from an appraisal?",
      lead: "Governed by different rules entirely: a BOV follows state brokerage law, while an appraisal follows USPAP, the national standard that federal lending rules require.[4]",
      body: "This governance difference is the substantive one, more than the cost or turnaround differences in the table above. A BOV's content and the language a broker may use around it are constrained by state real estate license law, and those rules vary by state. Texas, for example, lets a licensed broker give a written price opinion only if it is not referred to as an appraisal.[5] An appraisal, by contrast, is governed by a single national standard, USPAP, regardless of which state the property sits in,[1] which is exactly why lenders can rely on it uniformly."
    },
    {
      h2: "What does an appraiser do that a broker does not?",
      lead: "An appraiser develops the value under a defined professional standard, considering the income, sales comparison and cost approaches, and issues a report a lender can rely on for a federally related transaction.[4]",
      body: "A USPAP appraisal typically walks through income capitalization, sales comparison and cost approaches, states a highest-and-best-use conclusion, and documents every assumption in a way that can withstand a regulatory or legal challenge. A broker producing a BOV is not bound to that same documentation standard and is instead optimizing for a defensible, market-tested number delivered quickly."
    },
    {
      h2: "What is in a good BOV?",
      lead: "Comparable sales with adjustments, a cap rate applied to stabilized NOI, a per-key cross-check, and a buyer-pool assessment specific to the asset.",
      body: "Every Matthews Hotel Markets BOV is built off the Matthews Hotel Index cap-rate band for the asset's segment and market, currently Q1 2026.[6] A BOV that hands an owner a single number with no comps and no stated cap rate is not an opinion an owner can evaluate; it is a guess dressed up as one."
    },
    {
      h2: "What does a BOV cost and how long does it take?",
      lead: "In our practice, a BOV carries no fee and takes two to four weeks. An appraisal is a paid engagement whose fee and timing depend on the property and the appraiser.",
      body: "Brokers typically absorb the underwriting time on a BOV because it is part of pursuing the eventual listing engagement, which is why BOVs often carry no fee. An appraisal, ordered independently of any listing relationship, costs more, reflecting the additional documentation and liability standard behind it. Ask the appraiser for a written quote and timeline."
    },
    {
      h2: "Can I use a BOV for financing?",
      lead: "No. Lenders order their own USPAP-compliant appraisal and will not accept a broker's opinion in its place.",
      body: "Federal banking rules generally require an appraisal by a state certified appraiser on commercial real estate loans above $500,000,[2] and the interagency guidelines say a broker price opinion is not acceptable even as the lighter evaluation used below that threshold.[3] A lender's collateral decision rests on that document, not on a document produced for the seller's own decision-making. An owner should never present a BOV to a lender expecting it to substitute for the required appraisal."
    },
    {
      h2: "BOV, appraisal or CIM: which do I need?",
      lead: "A BOV to decide whether and how to sell, an appraisal when a lender requires one, and a CIM once you are ready to market the asset to buyers.",
      body: "These three documents answer three different questions for three different audiences, laid out side by side in the table above. Confusing them, treating a CIM's pricing guidance as an appraisal, for example, is a common and avoidable mistake."
    }
  ],
  table: {
    caption: "BOV versus appraisal versus CIM",
    columns: [
      "",
      "Broker opinion of value",
      "Appraisal",
      "CIM"
    ],
    rows: [
      [
        "Who produces it",
        "Licensed broker",
        "Licensed or certified appraiser[2]",
        "Broker"
      ],
      [
        "Governed by",
        "State brokerage law and license rules",
        "USPAP[4]",
        "Nothing; it is marketing"
      ],
      [
        "Ordered by",
        "Owner",
        "Lender, usually",
        "Owner, through the broker"
      ],
      [
        "Purpose",
        "What would this sell for today",
        "Defined value under a defined standard",
        "Present the asset to buyers"
      ],
      [
        "Typical cost",
        "Often no charge",
        "Paid; quote varies by property",
        "Included in the brokerage engagement"
      ],
      [
        "Typical turnaround",
        "2 to 4 weeks in our practice",
        "Varies; ask the appraiser",
        "Weeks 1 to 2 in our playbook[7]"
      ],
      [
        "Accepted for a loan",
        "No[3]",
        "Yes",
        "No"
      ],
      [
        "Contains",
        "Comps, cap rate, adjustments, price conclusion",
        "Three approaches, highest and best use, full narrative",
        "Financials, market, photos, brand position"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "Every Matthews Hotel Markets BOV is built off the Matthews Hotel Index cap-rate band for the asset's segment and market, currently Q1 2026.[6]"
  },
  workedExample: {
    label: "Hypothetical: why a BOV and an appraisal can differ by 19 percent",
    body: "Hypothetical. A 96-key hotel, NOI $1.42 million, a $2.3 million PIP due in 18 months. The BOV prices to the live buyer pool: applies an 8.25 percent cap to reach $17.21 million, then deducts the PIP and a risk premium as buyers do, arriving at $14.30 million. The appraisal values the going concern under USPAP: it may reach a stabilized value that assumes the PIP is completed, then deducts the cost to complete. Stabilized NOI of $1.55 million at an 8.00 percent cap is $19.38 million, less the $2.3 million PIP, or $17.08 million. That is nineteen percent apart, and both are defensible, because they answer different questions. The BOV tells you what a check will be written for this quarter. The appraisal tells a lender what the collateral is worth. Do not treat one as a correction of the other."
  },
  faq: [
    {
      q: "What is a broker opinion of value?",
      a: "A broker's written estimate of what a hotel would sell for in the current market, built from comps, a cap rate and a buyer-pool view, produced for the owner, usually at no charge."
    },
    {
      q: "How is a BOV different from an appraisal?",
      a: "A BOV follows state brokerage rules and reflects the live buyer pool; an appraisal follows USPAP, the national standard federal lending rules require, and is what lenders use for financing.[4]"
    },
    {
      q: "Does a BOV cost anything?",
      a: "Often no. Brokers typically produce a BOV at no charge as part of pursuing the listing engagement."
    },
    {
      q: "How long does a hotel BOV take?",
      a: "In our practice, two to four weeks from the date the owner shares trailing financials, current STAR data and PIP status. Complex or portfolio BOVs can take longer."
    },
    {
      q: "Can I get a loan using a BOV?",
      a: "No. Lenders order their own USPAP-compliant appraisal, and bank regulators do not accept a broker price opinion in its place.[3]"
    },
    {
      q: "Is a BOV the same as a CIM?",
      a: "No. A BOV is a pricing document produced before you decide to sell. A CIM is a marketing document produced to present the asset to buyers once you are on the market."
    },
    {
      q: "Who can produce a BOV?",
      a: "A licensed real estate broker, subject to the pricing-opinion rules of the state where the property sits. Texas, for example, bars calling it an appraisal.[5]"
    },
    {
      q: "What should a hotel BOV include?",
      a: "Named comparable sales with adjustments, a cap rate applied to stabilized NOI, a per-key cross-check, and a specific buyer-pool assessment, not just a headline number."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Uniform Standards of Professional Appraisal Practice (USPAP)",
      url: "https://appraisalfoundation.org/products/uspap",
      publisher: "The Appraisal Foundation",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "12 CFR 34.43, appraisals required; transactions requiring a state certified or licensed appraiser",
      url: "https://www.law.cornell.edu/cfr/text/12/34.43",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Interagency Appraisal and Evaluation Guidelines (FIL-82-2010)",
      url: "https://www.fdic.gov/news/financial-institution-letters/2010/fil10082.html",
      publisher: "FDIC, OCC, Federal Reserve, OTS and NCUA",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "12 CFR 34.44, minimum appraisal standards",
      url: "https://www.law.cornell.edu/cfr/text/12/34.44",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Texas Occupations Code section 1101.002, definitions (broker price analysis not referred to as an appraisal)",
      url: "https://texas.public.law/statutes/tex._occ._code_section_1101.002",
      publisher: "State of Texas, via Texas Public Law",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-17"
    },
    {
      n: 7,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/select-service-vs-full-service",
      "/hotel-valuation"
    ],
    glossary: [
      "/glossary/bov",
      "/glossary/iom",
      "/glossary/cap-rate",
      "/glossary/noi"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Request a confidential broker opinion of value",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets produces broker opinions of value at no cost, built from the Matthews Hotel Index and named comparable sales."
};

export default page;
