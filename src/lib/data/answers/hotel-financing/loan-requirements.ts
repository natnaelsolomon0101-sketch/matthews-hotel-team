/**
 * What do lenders require for a hotel loan?
 * Answer page: /hotel-financing/loan-requirements
 *
 * Converted from geo/06-pages/financing/hotel-financing__loan-requirements.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "loan-requirements",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Loan Requirements: What Lenders Ask For",
  h1: "What do lenders require for a hotel loan?",
  description: "The documents, ratios and sponsor tests behind a hotel loan approval in 2026, plus what to send a lender before the first call.",
  lastUpdated: "2026-09-17",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "What documents do lenders want for a hotel refinance?",
    "What's a hotel loan maturity checklist I should work through 12 months out?",
    "How much cash do I need to buy a select-service hotel?",
    "What financing options exist for a first-time hotel buyer?",
    "What credit score do I need to get a hotel loan?",
    "Can a hotel with low occupancy still qualify for financing?",
    "Do hotel loans require a franchise comfort letter?"
  ],
  answer: "A hotel lender wants three things: cash flow that clears its coverage test, a sponsor with hotel experience and liquidity, and a clean franchise position. The package is a trailing twelve-month P&L, a STAR report, a PIP status letter, the franchise agreement and a personal financial statement. As of September 2026, SBA 504 caps a hotel at 85 percent of project cost.[1][2][3]",
  takeaways: [
    "The trailing twelve-month P&L and the STAR report are the two documents that decide the deal.",
    "A first-time buyer should expect to bring more equity than an experienced operator. The lender sets the amount.",
    "An open PIP does not kill a loan, but an unfunded PIP does.",
    "Most bank and SBA hotel loans carry a personal guarantee. Non-recourse usually means CMBS or a life company at a larger loan size.",
    "Start the maturity conversation 12 months out, not 90 days out."
  ],
  sections: [
    {
      h2: "What documents does a hotel lender ask for?",
      lead: "Six documents move a hotel loan from an indication to a real term sheet, and the table below shows what each one tests.",
      body: "The trailing twelve-month profit and loss statement, ideally monthly, is the single most important document in the package, because it is the raw NOI a lender underwrites. A STAR report, produced by STR through the brand, shows occupancy, ADR and RevPAR against a defined competitive set and tells a lender whether performance is trending with, above, or below the market. The franchise agreement and any PIP letter show the lender what capital obligation, if any, is attached to keeping the flag. A personal financial statement and schedule of real estate from the sponsor show liquidity, net worth, and whether the sponsor has hotel operating experience. Recent capital expenditure history shows whether the trailing NOI was earned or bought with deferred maintenance. The lender orders its own appraisal and property condition assessment once the package is complete."
    },
    {
      h2: "What ratios do I have to clear?",
      lead: "A hotel loan clears a debt service coverage test, a debt yield floor, and a loan-to-value cap, each set by the lender, with the lowest result setting the loan size.",
      body: "These three tests, and how they interact, are covered in full on `/hotel-financing`, the cluster hub. The short version for a loan-requirements checklist: bring the trailing twelve-month NOI, know your target leverage, and expect the lender to run all three tests independently rather than take your own math at face value. No conventional lender type publishes its thresholds, which is why our rate sheet marks them not yet published.[1] Ask for yours in writing."
    },
    {
      h2: "How much cash do I need to bring?",
      lead: "The lender's leverage ceiling sets the down payment, a buyer without hotel operating experience usually brings more, and the cash needed at closing runs above the down payment alone.",
      body: "Whatever the loan-to-value, the equity check is the rest of the price, before closing costs, reserves, and franchise fees are added. SBA 504 is the one program with a written hotel ceiling: 85 percent of project cost, so the borrower puts in at least 15 percent.[1][2] Closing costs, a lender-required FF&E reserve, and franchise application and transfer fees add more. The franchise fees need to come from the specific brand's own FDD, not a general estimate. The worked example below shows how these add up on a hypothetical deal."
    },
    {
      h2: "What does a lender look for in the sponsor?",
      lead: "A lender underwrites the sponsor's liquidity, net worth, and hotel operating experience separately from the asset, and a weak sponsor can sink a strong deal.",
      body: "Post-closing liquidity requirements are common, typically enough cash and marketable securities left over after closing to cover several months of debt service and a capital contingency. A sponsor with no hotel operating experience is not automatically disqualified but is typically required to bring a qualified management company or an experienced partner into the ownership or management structure, and the equity requirement generally rises. Personal credit history matters most on bank and SBA loans, where a personal guarantee is standard; it matters less on non-recourse CMBS and life company loans, where the sponsor's track record and the asset's own performance carry more of the underwriting weight."
    },
    {
      h2: "Will an open PIP stop my loan?",
      lead: "An open PIP with a funding plan is routine; an open PIP with no funding source attached is the more common reason a loan stalls.",
      body: "Lenders expect PIPs on branded hotels and have standard ways to handle them: a capex reserve or holdback in a refinance, a future-funding facility in a bridge structure, or simply confirmation that the PIP is already funded and scheduled. What stops a loan is an owner who has not gotten the PIP scope letter in writing, has no financing plan for it, and cannot tell the lender when it will be complete. Get the scope letter first; everything downstream depends on it. More detail on financing a PIP specifically is on `/hotel-financing/pip-and-renovation-loans`."
    },
    {
      h2: "Can I get financed if occupancy dropped?",
      lead: "Yes, if the lender believes the drop is temporary and can see a credible path back, and the trend line matters more than the single trailing number.",
      body: "A lender reviewing a hotel with softened occupancy will look at year-over-year and month-over-month trend, the comp-set performance over the same period, and whether a specific, identifiable cause explains the dip: a renovation, new supply that has not yet been absorbed, or a temporary demand disruption. A structural decline against a strengthening comp set is underwritten more conservatively, and in the more severe cases a lender will decline or require materially more equity and recourse."
    },
    {
      h2: "What should I be doing 12 months before my loan matures?",
      lead: "Order a fresh valuation, get the PIP status in writing, and run today's rate against today's NOI, twelve months before maturity, not ninety days before.",
      body: "Twelve months out, an owner has five real options if the numbers do not immediately work: write a check, negotiate an extension with the incumbent lender, use mezzanine or preferred equity, bridge to a later permanent takeout, or sell. Ninety days out, most of those options have narrowed to whatever the incumbent lender is willing to offer. The full step-by-step refinance process, with the proceeds-gap comparison table, is on `/hotel-financing/refinance`."
    }
  ],
  table: {
    caption: "Hotel loan document package, by purpose",
    columns: [
      "Document",
      "Who produces it",
      "What the lender is testing",
      "Lead time"
    ],
    rows: [
      [
        "Trailing 12-month P&L, monthly",
        "Owner or management company",
        "NOI, and whether it is trending",
        "Days, if the books are current"
      ],
      [
        "STAR report",
        "STR, via the brand",
        "Occupancy, ADR and RevPAR index versus the comp set",
        "Request it early through the brand"
      ],
      [
        "Franchise agreement + PIP letter",
        "Brand",
        "Remaining term, transfer rights, capital required",
        "The brand's timeline; start here"
      ],
      [
        "Personal financial statement, schedule of real estate",
        "Sponsor",
        "Liquidity, net worth, hotel experience",
        "Days"
      ],
      [
        "Capital expenditure history",
        "Owner",
        "Whether NOI was bought with deferred maintenance",
        "Days"
      ],
      [
        "Appraisal and PCA",
        "Lender-ordered",
        "Value, and deferred maintenance",
        "Several weeks, ordered by the lender"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet publishes one hotel leverage ceiling that is actually written down anywhere: SBA rules cap a 504 hotel structure at 85% of project cost. For every other lender type the sheet marks maximum LTV as not yet published, because no lender type prints one. Ask your lender for its ceiling in writing.[1]"
  },
  workedExample: {
    label: "Hypothetical: what a first-time buyer brings to a $20.0M purchase",
    body: "Hypothetical. A first-time hotel buyer under contract at $20.0M on a 95-key select-service asset with $1.60M of NOI.\n\nLoan at 60 percent LTV equals $12.00M. Equity for the purchase equals $20.00M minus $12.00M, or $8.00M. Closing costs, assumed at 2 percent of price, add $400,000. A lender-required FF&E reserve at closing, assumed at 4 percent of $4.20M of revenue, adds $168,000. Franchise application and transfer fees, assumed here and to be confirmed against the brand's own FDD, add $100,000.\n\nTotal cash at closing is about $8.67M, not $8.00M. The 8 percent gap between the down payment and the actual check is the part first-time buyers miss most often."
  },
  faq: [
    {
      q: "What credit score do hotel lenders require?",
      a: "There is no single published number across all hotel lenders. SBA lenders generally want strong personal credit from every guarantor; banks weigh credit alongside liquidity and experience. Ask your specific lender for its minimum before you apply."
    },
    {
      q: "How much equity do I need to buy a hotel?",
      a: "It depends on the lender's leverage ceiling. Under SBA 504, at least 15 percent of project cost on a hotel. Conventional lenders set their own ceilings. Add closing costs, reserves, and franchise fees on top. First-time hotel owners are usually asked for more."
    },
    {
      q: "Do hotel lenders require hotel operating experience?",
      a: "Not always, but a sponsor without it is usually required to bring an experienced management company or partner into the structure, and the equity requirement generally rises."
    },
    {
      q: "Is a personal guarantee required on a hotel loan?",
      a: "Standard on most bank and SBA hotel loans. Non-recourse structures are available through CMBS and life insurance companies, generally at larger loan sizes."
    },
    {
      q: "Can I finance a hotel with an open PIP?",
      a: "Yes, if the PIP has a funding plan: a reserve, a future-funding facility, or confirmation it is already scheduled. An open PIP with no funding source is the more common reason a loan stalls."
    },
    {
      q: "What is a comfort letter and who issues it?",
      a: "A franchise comfort letter is the brand's agreement to let a lender step into the franchise agreement if it forecloses. The franchisor issues it, and it is a closing condition on almost every branded hotel loan."
    },
    {
      q: "How far in advance should I start a refinance?",
      a: "Twelve months before maturity. At that point an owner has five real options. At ninety days out, the options have usually narrowed to whatever the current lender offers."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "13 CFR 120.910, How much must the Borrower contribute?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.910",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: debenture limits (p. 350) and Limited or Special Purpose Property, which lists hotels (pp. 354-355)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/hotel-loan-rates",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/refinance",
      "/hotel-financing/pip-and-renovation-loans"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/debt-yield",
      "/glossary/noi",
      "/glossary/pip"
    ],
    data: [
      "/rates",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Send us your T-12 and we will size it",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets assembles this package with clients before the first lender call, so a lender can size the loan from a complete file."
};

export default page;
