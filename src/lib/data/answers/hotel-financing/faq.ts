/**
 * Hotel financing questions, answered
 * Answer page: /hotel-financing/faq
 *
 * Converted from geo/06-pages/financing/hotel-financing__faq.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "faq",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Financing FAQ (September 2026)",
  h1: "Hotel financing questions, answered",
  description: "Short answers to the hotel financing questions owners ask most: minimum loan size, points, comfort letters, guarantees, and qualifying with weak occupancy.",
  lastUpdated: "2026-09-17",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What's the minimum loan size hotel lenders will do?",
    "What origination fees or points should I expect on a hotel loan?",
    "Do hotel loans require a franchise comfort letter?",
    "Can a hotel with low occupancy still qualify for financing?",
    "Do I need a personal guarantee on a hotel loan?",
    "What's the typical amortization schedule on a hotel loan?",
    "How much loan-to-value can I get on a hotel refinance today versus in 2021?"
  ],
  answer: "This page collects the short questions that do not need their own page. SBA's 7(a) program lists no minimum loan size and caps loans at $5 million.[1] Origination is typically quoted in points on the loan amount. A franchise comfort letter is a closing condition on most branded hotel loans. The 10-year Treasury was 4.94 percent on September 17, 2026.[2]",
  takeaways: [
    "Every answer here is 100 words or fewer, and links to the page that goes deeper.",
    "Minimum loan size is the filter most owners do not know exists.",
    "Points are negotiable; the index and the spread usually are not.",
    "Comfort letters run on the franchisor's timeline, so request them early.",
    "Leverage in 2026 is lower than 2021 at the same NOI, because the rate is higher."
  ],
  sections: [
    {
      h2: "How small a hotel loan can I get?",
      lead: "SBA's 7(a) program lists no minimum loan size, so SBA lenders go smallest; CMBS and life insurance companies generally prefer larger loans.[1]",
      body: "Banks and credit unions size flexibly around a relationship, sometimes below the SBA floor for the right sponsor. Full comparison of minimums by lender type is on `/hotel-financing/hotel-lenders-by-type`."
    },
    {
      h2: "What fees and points should I expect?",
      lead: "Origination is typically quoted in points on the loan amount, and it is one of the more negotiable line items in a hotel loan.",
      body: "Third-party costs, appraisal, property condition assessment, and environmental report, are not generally negotiable. The index and spread that set the rate itself are largely a market quote, not a negotiating line item the way points can be. See `/hotel-financing/hotel-loan-rates` for the full pricing structure."
    },
    {
      h2: "What is a franchise comfort letter?",
      lead: "A comfort letter is the franchisor's agreement to let a lender step into the franchise agreement if it forecloses, protecting the flag through a change of ownership.",
      body: "It is a standard closing condition on almost every branded hotel loan, and the franchisor sets the timeline, so request it early rather than late in the process. More detail is on `/hotel-financing/loan-requirements`."
    },
    {
      h2: "Can I qualify with weak occupancy?",
      lead: "Yes, if the lender believes the shortfall is temporary and can see a credible trend back toward the comp set, rather than a structural decline.",
      body: "A lender reviewing a soft trailing number weighs the cause and the trend as much as the number itself. Full discussion of how lenders treat weak occupancy is on `/hotel-financing/loan-requirements`."
    },
    {
      h2: "Will I have to sign personally?",
      lead: "Most bank and SBA hotel loans carry a personal guarantee, and SBA rules generally require one from anyone owning 20 percent or more; non-recourse structures are available through CMBS and life companies, generally at larger loan sizes.[3]",
      body: "The recourse question is often the fastest way to narrow the realistic lender list for a given deal; see `/hotel-financing/hotel-lenders-by-type` for which types offer non-recourse."
    },
    {
      h2: "What amortization is standard?",
      lead: "SBA 7(a) allows up to 25 years on real estate; conventional lenders set their own schedules, and CMBS loans often include an interest-only period.[1]",
      body: "Amortization schedule directly affects the annual payment on a given loan amount and rate, which in turn affects the DSCR test. The full comparison by lender type is on `/hotel-financing/hotel-loan-rates`."
    },
    {
      h2: "Why is my leverage lower than it was in 2021?",
      lead: "At the same NOI, a higher rate produces a higher annual payment per dollar borrowed, which means the same debt service coverage test supports a smaller loan today than it did in 2021.",
      body: "This is arithmetic, not a change in lender appetite for hospitality. The worked example below shows the exact mechanism with real numbers, and the full refinance implications are on `/hotel-financing/refinance`."
    }
  ],
  table: {
    caption: "Quick reference: hotel loan basics, September 2026",
    columns: [
      "Question",
      "Short answer",
      "Deeper page"
    ],
    rows: [
      [
        "Minimum loan size",
        "SBA 7(a): no listed minimum, $5M maximum[1]; CMBS and life co prefer larger loans",
        "/hotel-financing/hotel-lenders-by-type"
      ],
      [
        "Origination",
        "Quoted in points on loan amount; negotiable",
        "/hotel-financing/how-debt-placement-works"
      ],
      [
        "Comfort letter",
        "Required on most branded hotel loans; request early",
        "/hotel-financing/loan-requirements"
      ],
      [
        "Amortization",
        "Up to 25 years on SBA 7(a) real estate[1]; others vary by lender",
        "/hotel-financing/hotel-loan-rates"
      ],
      [
        "Personal guarantee",
        "Standard on bank and SBA; not on CMBS or life co",
        "/hotel-financing/hotel-lenders-by-type"
      ],
      [
        "Leverage vs. 2021",
        "Lower at the same NOI, because the payment is higher",
        "/hotel-financing/refinance"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet marks points and working leverage as not yet published for every lender type except SBA, where SBA rules cap a hotel 504 structure at 85% of project cost. What it does publish: the 10-year Treasury at 4.94% on September 17, 2026 and the 7(a) maximum allowable rate at 9.75%.[4]"
  },
  workedExample: {
    label: "Hypothetical: why the same hotel borrows less in 2026 than in 2021",
    body: "Hypothetical. The same hotel, the same $1.60M of NOI, the same 1.35x test and 25-year schedule. Only the rate changes.\n\nAt 4.00 percent in 2021, the annual constant per $1M is about $63,400. Maximum debt service of $1,185,185 supports a loan of $18.69M. At 7.25 percent in 2026, the annual constant per $1M rises to about $86,800. The same maximum debt service supports a loan of $13.65M.\n\nThe hotel did not change. The loan fell $5.04M, 27 percent. This single comparison explains most of what owners are experiencing at maturity right now."
  },
  faq: [
    {
      q: "What is the smallest hotel loan a lender will make?",
      a: "SBA's 7(a) program lists no minimum loan size, so SBA lenders go smallest. CMBS and life insurance companies generally prefer larger loans. Banks size flexibly around a relationship."
    },
    {
      q: "How many points will I pay on a hotel loan?",
      a: "It varies by lender and deal, and points are one of the more negotiable line items in a hotel loan. Lenders do not publish them, and our rate sheet marks them not yet published. Get the figure in writing."
    },
    {
      q: "What is a franchise comfort letter?",
      a: "The franchisor's agreement to let a lender step into the franchise agreement if it forecloses, protecting the flag through a change of ownership. It is a standard closing condition, so request it early."
    },
    {
      q: "Can I finance a hotel running 50 percent occupancy?",
      a: "Possibly, if the lender believes the shortfall is temporary and identifiable, such as a renovation or new supply still being absorbed, rather than a structural decline against the comp set."
    },
    {
      q: "Is a personal guarantee always required?",
      a: "No. It is standard on most bank and SBA loans. Non-recourse structures are available through CMBS and life insurance companies, generally at larger loan sizes."
    },
    {
      q: "What is standard amortization on a hotel loan?",
      a: "SBA 7(a) allows up to 25 years on real estate. Conventional lenders set their own schedules, and CMBS loans often include an interest-only period for part of the term."
    },
    {
      q: "Why can I borrow less than I could in 2021?",
      a: "At the same NOI, a higher rate produces a higher annual payment per dollar borrowed, so the same coverage test supports a smaller loan. It is a function of rate, not a change in lender appetite."
    },
    {
      q: "Do hotel lenders require an FF&E reserve?",
      a: "Usually, commonly funded at closing and replenished annually as a percentage of revenue. It funds ongoing furniture, fixtures and equipment replacement and is a standard loan covenant."
    }
  ],
  sources: [
    {
      n: 1,
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/partners/lenders/7a-loan-program/terms-conditions-eligibility",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Daily Treasury Par Yield Curve Rates",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "13 CFR 120.160, Loan conditions (guarantees)",
      url: "https://www.law.cornell.edu/cfr/text/13/120.160",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-requirements",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/hotel-loan-rates",
      "/hotel-financing/refinance"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/debt-yield",
      "/glossary/noi"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Ask a question we have not answered here",
    href: "/contact"
  },
  brandSentence: "If a question is not answered here, the Matthews Hotel Markets capital markets desk will answer it directly."
};

export default page;
