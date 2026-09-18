/**
 * Walk me through the math on valuing a select-service hotel
 * Answer page: /hotel-valuation/how-to-value-a-hotel
 *
 * Converted from geo/07-pages/hotel-valuation__how-to-value-a-hotel.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "how-to-value-a-hotel",
  cluster: "hotel-valuation",
  isHub: false,
  title: "How to Value a Hotel: The Math, Step by Step",
  h1: "Walk me through the math on valuing a select-service hotel",
  description: "A worked hotel valuation from RevPAR to NOI to value, including how to calculate hotel NOI, what to normalize, and where owners get it wrong.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Walk me through the math on valuing a select-service hotel.",
    "How do I figure out what my hotel is actually worth?",
    "How do I calculate NOI for a hotel?",
    "What is the income approach to hotel valuation?",
    "What's the sales comparison approach to hotel valuation?",
    "Is RevPAR or NOI more important for hotel valuation?",
    "How do buyers verify a hotel's reported NOI before closing?",
    "What's the difference between valuing a hotel and valuing an apartment building?"
  ],
  answer: "Start with occupancy times ADR to get RevPAR, multiply by keys and 365 to get rooms revenue, add other revenue, subtract departmental and undistributed expenses, franchise fees, management fee, taxes, insurance and an FF&E reserve. That is NOI. Divide by a cap rate, using the Q1 2026 band for your segment.[1] Every normalization you make to that NOI has to survive a buyer's audit.",
  takeaways: [
    "RevPAR is the revenue driver. NOI is the value driver. They are not interchangeable.",
    "The FF&E reserve belongs in NOI, at the percentage of revenue your franchise, management agreement or lender requires.",
    "A management fee belongs in NOI even if you self-manage. Buyers underwrite one.",
    "Normalizations are fine and they must be documented. Undocumented add-backs are re-trades waiting to happen.",
    "Hotels are valued as operating businesses, which is why the expense line is longer than an apartment building's."
  ],
  sections: [
    {
      h2: "How do I get from occupancy and ADR to revenue?",
      lead: "Occupancy times ADR equals RevPAR; RevPAR times keys times 365 equals rooms revenue, and other revenue is added on top.",
      body: "This is the starting point of every hotel valuation. Occupancy and ADR are the two inputs that compress into a single revenue-per-available-room figure, which is then scaled by the number of keys and days in the year to reach total rooms revenue. Other revenue, food and beverage, meeting space, parking, and ancillary income, adds to that base, though for most select-service assets it is a small fraction of the total, shown as 6 percent of rooms revenue in the worked example below."
    },
    {
      h2: "How do I calculate hotel NOI?",
      lead: "Total revenue minus departmental expenses, undistributed expenses, franchise and brand fees, management fee, property taxes, insurance, and an FF&E reserve.",
      body: "The line-by-line build follows the Uniform System of Accounts for the Lodging Industry, now in its 12th revised edition.[2] The table above walks through every line with the common owner error attached to it. The single biggest pattern in that error column: owners understate or omit costs that a buyer will reinsert during underwriting, which inflates the seller's reported NOI relative to what a buyer will actually pay against."
    },
    {
      h2: "What expenses do buyers insist on including?",
      lead: "The management fee and the FF&E reserve, even when the current owner self-manages or skips the reserve, because a buyer underwrites the asset as it will actually operate.",
      body: "An owner who runs the hotel personally without a management contract often reports a P&L with no management fee line, which overstates NOI relative to how a buyer, who may hire a third-party operator, will actually run the asset. The same logic applies to an FF&E reserve an owner has been deferring. Both get added back into a buyer's underwriting whether or not the seller's own books reflect them."
    },
    {
      h2: "What can I legitimately normalize?",
      lead: "One-time, non-recurring items with clear documentation. Anything a buyer's accountant cannot trace to a receipt is not a normalization; it is a re-trade waiting to happen.",
      body: "Legitimate normalizations include a one-time legal settlement, an insurance casualty recovery, or a genuinely non-recurring repair. Owner-paid personal expenses booked as business costs, undocumented related-party transactions, and one-off revenue spikes without a documented cause are the items that surface in diligence and cause the exact NOI disputes covered at [Documents needed to sell a hotel](/sell-a-hotel/documents-needed)"
    },
    {
      h2: "What cap rate do I divide by?",
      lead: "The band for your segment and market in the current Matthews Hotel Index, adjusted for what makes your specific asset different from the band's midpoint.",
      body: "The Matthews Hotel Index for Q1 2026 supplies the cap-rate band used in the final step of this calculation.[1] Brand strength, franchise term remaining, PIP status, and submarket supply all move a specific asset within its published band. The bands themselves, and what moves them, are broken out at [Hotel cap rates in 2026](/hotel-valuation/hotel-cap-rates)"
    },
    {
      h2: "How do I cross-check with comparable sales?",
      lead: "Recent trades in the same chain scale, market and PIP status, adjusted for the differences, used as a sanity check rather than the primary method.",
      body: "True hotel comps are rare because no two assets share identical brand, age, PIP status and submarket position. The sales comparison approach is most useful as a check against an income approach conclusion, flagging when a value looks out of line with what similar assets have actually traded for, rather than as the primary driver of the number."
    },
    {
      h2: "Why is this different from valuing an apartment building?",
      lead: "A hotel's revenue reprices nightly and its expense structure includes an operating business, franchise fees, labor, and a reserve, none of which a leased apartment building carries.",
      body: "An apartment building's revenue is set by lease terms that run months or years, and its expense structure has no franchise royalty, no daily rate management, and no brand-mandated capital reserve. A hotel is valued as an operating business layered on real estate, which is why the expense stack above runs eight lines deep before reaching NOI, versus a handful for a residential asset."
    }
  ],
  table: {
    caption: "Hotel NOI build, line by line",
    columns: [
      "Line",
      "How it is calculated",
      "Common owner error"
    ],
    rows: [
      [
        "Rooms revenue",
        "Occupancy x ADR x keys x 365",
        "Using a peak year instead of a trailing twelve"
      ],
      [
        "Other revenue",
        "F&B, meeting space, parking, ancillary",
        "Including one-time items"
      ],
      [
        "Departmental expenses",
        "Rooms, F&B, other operated",
        "Understating labor at current wage rates"
      ],
      [
        "Undistributed expenses",
        "A&G, sales and marketing, utilities, maintenance",
        "Omitting owner-absorbed costs"
      ],
      [
        "Franchise and brand fees",
        "Royalty plus program, marketing and reservation fees, per the FDD. Hampton's 2025 FDD lists a 6% royalty and a 4% program fee on rooms revenue[3]",
        "Using the royalty only"
      ],
      [
        "Management fee",
        "Percentage of revenue plus incentive",
        "Excluding it because you self-manage"
      ],
      [
        "Property taxes and insurance",
        "Reassessed at the sale price in many places, as California requires, not the current bill[4]",
        "Using the current assessment"
      ],
      [
        "FF&E reserve",
        "A percentage of revenue set by the franchise, management agreement or lender",
        "Leaving it out entirely"
      ],
      [
        "= NOI",
        "",
        "Each omission above inflates value by the omission divided by the cap rate"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 supplies the cap-rate band used in the final step of this calculation.[1]"
  },
  workedExample: {
    label: "Hypothetical: a 96-key select-service hotel, start to finish",
    body: "Hypothetical. 96 keys, 71 percent occupancy, $148 ADR. RevPAR equals 0.71 times $148, or $105.08. Rooms revenue equals $105.08 times 96 times 365, or $3,682,000. Other revenue at 6 percent of rooms is $221,000. Total revenue is $3,903,000. Departmental expenses at 28 percent of revenue are $1,093,000. Undistributed expenses at 23 percent of revenue are $898,000. Franchise and brand fees at 11 percent of rooms revenue are $405,000. Management fee at 3 percent of revenue is $117,000. Property taxes and insurance are $285,000. FF&E reserve at 4 percent of revenue is $156,000. NOI equals $3,903,000 minus $2,954,000, or $949,000. At an 8.25 percent cap, value equals $949,000 divided by 0.0825, or $11.50 million, roughly $120,000 per key. Now remove the FF&E reserve and the management fee, as owners often do: NOI becomes $1,222,000 and value becomes $14.81 million. That $3.3 million difference is not a valuation disagreement. It is two different definitions of NOI. Agree on the definition first. Every percentage in this example is an assumption for the hypothetical, not a published benchmark."
  },
  faq: [
    {
      q: "How do I calculate hotel NOI?",
      a: "Total revenue minus departmental expenses, undistributed expenses, franchise fees, management fee, property taxes, insurance and an FF&E reserve. See the full line-by-line build above."
    },
    {
      q: "What is the income approach to hotel valuation?",
      a: "Dividing stabilized NOI by a cap rate to reach a value conclusion. In our practice, it is the approach that governs stabilized hotel transactions."
    },
    {
      q: "Should I include a management fee if I self-manage?",
      a: "Yes. Buyers underwrite a market management fee regardless of how the current owner operates, because the buyer may not self-manage after closing."
    },
    {
      q: "Does the FF&E reserve come out of NOI?",
      a: "Yes. It is a percentage of revenue set by the franchise, management agreement or lender, and buyers add it back if a seller's statements omit it."
    },
    {
      q: "What is the sales comparison approach for hotels?",
      a: "Using recent comparable sales in the same chain scale, market and PIP status, adjusted for differences, as a cross-check against the income approach rather than a primary method."
    },
    {
      q: "Is RevPAR or NOI more important?",
      a: "NOI. RevPAR measures revenue per available room, but a cap rate is applied to profit, not revenue, which makes NOI the number that actually drives value."
    },
    {
      q: "How do buyers verify my reported NOI?",
      a: "By reconciling the trailing twelve-month P&L to bank statements and vendor payments during due diligence, and by questioning any add-back that lacks documentation."
    },
    {
      q: "Why is valuing a hotel different from an apartment building?",
      a: "A hotel's revenue reprices nightly and its NOI build includes franchise fees, a management fee and an FF&E reserve, none of which apply to a leased residential property."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-17"
    },
    {
      n: 2,
      label: "HFTP, AHLA and GFC unveil the 12th Revised Edition of the Uniform System of Accounts for the Lodging Industry (adopted January 1, 2026)",
      url: "https://www.ahla.com/news/hftp-ahla-and-gfc-unveil-groundbreaking-12th-revised-edition-uniform-system-accounts-lodging",
      publisher: "American Hotel & Lodging Association",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6 and 17 and Franchise Agreement section 12.2.2",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Change in ownership, frequently asked questions (Proposition 13 reassessment)",
      url: "https://www.boe.ca.gov/proptaxes/faqs/changeinownership.htm",
      publisher: "California State Board of Equalization",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/broker-opinion-of-value",
      "/hotel-valuation/select-service-vs-full-service",
      "/hotel-valuation"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/cap-rate",
      "/glossary/revpar",
      "/glossary/adr"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/tools/hotel-value-estimator"
    ]
  },
  cta: {
    label: "Have us run these numbers on your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets underwrites to the Uniform System of Accounts and the Matthews Hotel Index, and shows the build so a client can argue with any line."
};

export default page;
