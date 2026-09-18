/**
 * What is a bridge loan and when should a hotel owner use one?
 * Answer page: /hotel-financing/bridge-loans
 *
 * Converted from geo/06-pages/financing/hotel-financing__bridge-loans.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "bridge-loans",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Bridge Loans: When They Make Sense",
  h1: "What is a bridge loan and when should a hotel owner use one?",
  description: "How hotel bridge loans are priced and structured in 2026, what the rate cap costs, and the three situations where bridge debt is the right answer.",
  lastUpdated: "2026-09-17",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What's a bridge loan and when should a hotel owner use one?",
    "What do bridge loan rates look like for a hotel that needs to stabilize first?",
    "How do I bridge my hotel loan until permanent financing is available?",
    "What's a rate cap and do I need one to refinance my hotel?",
    "Can I get a bridge loan for a hotel PIP?",
    "How long does a hotel bridge loan last?",
    "What's the exit on a hotel bridge loan?"
  ],
  answer: "A bridge loan is short-term floating-rate debt, usually interest-only, used when the hotel is not yet financeable by a permanent lender. It buys time for a PIP, a ramp-up, or a repositioning. It floats over SOFR, which was 3.62 percent for September 16, 2026, and usually requires a purchased rate cap.[1] Identify the exit before you sign, not after.",
  takeaways: [
    "Bridge debt is priced over SOFR and floats, so lenders usually require a rate cap as a condition of closing.",
    "The three real use cases: an in-progress PIP, a ramp after a brand change, and a maturity you cannot refinance yet.",
    "Interest-only preserves cash flow during the transition, which is the point.",
    "Extension options are cheap to buy at closing and expensive to buy later.",
    "If you cannot name the takeout lender at closing, you do not have a bridge plan."
  ],
  sections: [
    {
      h2: "What makes a loan a bridge loan?",
      lead: "A bridge loan is short-term, floating-rate, interest-only debt that finances a hotel through a transition a permanent lender is not yet willing to underwrite.",
      body: "Where permanent debt underwrites the trailing twelve-month NOI as it stands today, a bridge lender is willing to underwrite a stabilized, forward-looking NOI, on the condition that the loan term is short enough, and the rate high enough, to compensate for that added risk. Bridge loans run for a short term, often with extension options, are priced over SOFR rather than the Treasury, and are usually interest-only so the borrower's cash flow is not squeezed while the property is mid-transition."
    },
    {
      h2: "When does a hotel actually need one?",
      lead: "Three situations call for a bridge loan: a PIP still in progress, a ramp-up after a brand conversion, and a maturity a permanent lender will not yet refinance.",
      body: "A hotel with an unfinished, brand-mandated renovation cannot show a permanent lender the stabilized NOI the renovation is expected to produce, so a bridge loan finances the gap between today's NOI and the pro forma. A hotel recently converted to a new flag has not yet built the trailing operating history a permanent lender wants, and a bridge loan carries it through that ramp. A hotel approaching maturity with NOI that does not yet support a permanent refinance, but is expected to recover, uses a bridge loan to buy the time for that recovery to show up in the numbers. Outside these three situations, permanent debt is almost always the better and cheaper choice."
    },
    {
      h2: "What does a hotel bridge loan cost?",
      lead: "Bridge debt costs more than permanent debt in both rate and required upfront purchases, and that premium is the price of the flexibility and the underwriting risk the lender is taking.",
      body: "Matthews Hotel Markets' September 2026 rate sheet puts SOFR, the index a hotel bridge loan floats over, at 3.62% for September 16, 2026.[1] It marks the bridge spread and the cap strike as not yet published: nobody publishes either one, and we do not print a number we have not seen quoted by three independent lenders in a month.[2] Ask a bridge lender for both in writing. Beyond the spread itself, bridge loans typically carry an origination fee, an exit fee if the loan is repaid before a set date, and the cost of the rate cap covered below. None of these are exotic; they are the standard cost structure of short-term floating debt, and they should be modeled into the total cost of the bridge period, not just the quoted spread."
    },
    {
      h2: "What is a rate cap and how much is it?",
      lead: "A rate cap is a purchased derivative that caps the borrower's floating rate at a set strike, and hotel bridge lenders usually require one as a closing condition.",
      body: "Because a bridge loan floats with SOFR, the lender requires the borrower to buy a rate cap so that a sharp rate increase does not push the loan's debt service above what the property can support during the bridge term. The cap's cost depends on the strike level, the notional amount, and the term, and it is a live, quoted cost, not a fixed percentage that holds across the market. Budget for it as a real, sometimes significant, line item at closing, and get a quote before you assume the bridge structure pencils."
    },
    {
      h2: "How do I get out of it?",
      lead: "The exit is a permanent take-out loan, a sale, or an extension, and the lender expects to see which one you are planning before the bridge closes, not after.",
      body: "A credible bridge plan names the intended exit at closing: a specific permanent lender type and rough terms once the PIP or ramp is complete, or a sale timeline if that is the plan instead. Lenders who write bridge loans without a clear exit path in view are taking on risk they generally price for, which shows up as a wider spread or a shorter term. The clearest, cheapest bridge loans are the ones where the takeout is essentially pre-underwritten before the bridge even funds."
    },
    {
      h2: "What happens if my business plan slips?",
      lead: "A slipping business plan is the central risk of bridge financing, and the honest response is to model the downside case before you close, not after the numbers come in short.",
      body: "If a renovation runs long, or the stabilized NOI comes in below the pro forma, the bridge loan's maturity can arrive before the permanent takeout is ready to fund at the size needed. Extension options, negotiated at closing, are the standard cushion for this risk, and they are meaningfully cheaper to buy up front than to negotiate under pressure near maturity. The worked example below shows exactly how much the bridge outcome depends on the stabilized number actually showing up."
    },
    {
      h2: "Bridge or an extension from my current lender?",
      lead: "An extension from your existing lender is usually simpler and often cheaper than a new bridge loan, when the current lender is willing to offer one at all.",
      body: "An extension avoids a new closing, new third-party reports, and a new lender relationship, and it fits well when the shortfall is a matter of months, not years. A bridge loan from a new lender makes more sense when the current lender is unwilling to extend, when future funding for a PIP is needed and the current lender cannot provide it, or when the timeline to stabilization is long enough that a purpose-built bridge structure is worth the added complexity of a new closing."
    }
  ],
  table: {
    caption: "Bridge debt versus permanent debt for a hotel",
    columns: [
      "Category",
      "Bridge",
      "Permanent"
    ],
    rows: [
      [
        "Rate",
        "SOFR plus a spread, floating",
        "Fixed"
      ],
      [
        "Term",
        "Short, often with extension options",
        "Longer, fixed for the term"
      ],
      [
        "Amortization",
        "Usually interest only",
        "Amortizing, sometimes with an interest-only period"
      ],
      [
        "Requires",
        "Usually a purchased rate cap",
        "No cap on a fixed rate"
      ],
      [
        "Funds capex",
        "Yes, usually a future-funding facility",
        "Rarely"
      ],
      [
        "Prepayment",
        "Usually lighter than permanent debt; watch the exit fee",
        "Step-down penalty, or defeasance or yield maintenance on CMBS"
      ],
      [
        "Underwritten to",
        "Stabilized pro forma NOI",
        "Trailing twelve-month NOI"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts SOFR, the index a hotel bridge loan floats over, at 3.62% for September 16, 2026. It marks the bridge spread and the cap strike as not yet published, because nobody publishes them and we will not print a number we have not seen quoted three times in a month.[2]"
  },
  workedExample: {
    label: "Hypothetical: bridging a $3.0M PIP",
    body: "Hypothetical. A 104-key hotel with a $3.0M brand-mandated PIP. Current NOI $1.35M. Stabilized pro forma NOI after the renovation is $1.95M.\n\nA permanent lender sizes against the trailing NOI of $1.35M at a 1.40x test: maximum debt service $964,286, supporting a loan of about $11.1M at a 25-year schedule and 7.25 percent. A bridge lender instead sizes against the stabilized $1.95M, funds the $3.0M PIP through a future-funding facility, and lends $16.5M total, interest only.\n\nThe bridge provides $5.4M more and funds the renovation. It also costs more every month and floats. The deal only works if the stabilized $1.95M shows up. Write down what happens if it comes in at $1.65M instead, before you close."
  },
  faq: [
    {
      q: "What is a typical hotel bridge loan rate?",
      a: "It is quoted as SOFR plus a spread, and both the spread and the cap cost move with the market. Our September 2026 rate sheet publishes SOFR but not a bridge spread, because nobody publishes one. Get both in writing."
    },
    {
      q: "How long is a hotel bridge loan?",
      a: "Short, and usually shorter than permanent debt, often with extension options negotiated at closing. The term should match how long the PIP, ramp, or maturity gap actually needs, not a default assumption."
    },
    {
      q: "Do I need a rate cap on a bridge loan?",
      a: "Usually. Because bridge debt floats with SOFR, lenders typically require a purchased rate cap as a closing condition, protecting the property's debt service against a sharp rate increase during the bridge term."
    },
    {
      q: "Can a bridge loan fund my PIP?",
      a: "Yes. A bridge loan with a future-funding facility is a common route for a large PIP. It draws capital as the renovation progresses rather than funding the full amount at closing."
    },
    {
      q: "Is a hotel bridge loan recourse?",
      a: "It varies by lender. Some bridge lenders require full or partial recourse; others offer non-recourse with standard carve-outs, generally at lower leverage or with a stronger sponsor."
    },
    {
      q: "What happens at the end of a bridge loan?",
      a: "The loan is repaid through a permanent refinance, a sale, or an extension. The exit should be identified before the bridge closes, not decided under pressure near maturity."
    },
    {
      q: "Can I extend a hotel bridge loan?",
      a: "Often, if extension options were negotiated at closing. Extensions bought up front are typically far cheaper than negotiating one after the business plan has already slipped."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Secured Overnight Financing Rate (SOFR)",
      url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      publisher: "Federal Reserve Bank of New York",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/pip-and-renovation-loans",
      "/hotel-financing/refinance",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/loan-workouts"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/noi",
      "/glossary/pip"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Price a bridge against a permanent quote",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets prices the bridge and the takeout at the same time, so the exit is underwritten before the bridge closes."
};

export default page;
