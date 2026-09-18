/**
 * What is my hotel worth per key?
 * Answer page: /hotel-valuation/revpar-multiples-and-per-key
 *
 * Written 2026-09-18. Worked-example arithmetic recomputed by script.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "revpar-multiples-and-per-key",
  cluster: "hotel-valuation",
  isHub: false,
  title: "What Is My Hotel Worth Per Key? (2026)",
  h1: "What is my hotel worth per key?",
  description: "Price per key and RevPAR multiples are sanity checks, not valuation methods. How to use them, where the public numbers come from, and what they miss.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I figure out what my hotel is actually worth?",
    "Is RevPAR or NOI more important for hotel valuation?",
    "What's the sales comparison approach to hotel valuation?",
    "How do you value a hotel?",
    "What cap rate should I use to value my hotel?"
  ],
  answer: "Price per key is sale price divided by room count. It is a check on a valuation, not a way to produce one, because it ignores NOI. LW Hospitality Advisors counted 107 U.S. hotel sales over $10 million in Q2 2026 at an average of about $218,000 per room.[1] That average says little about a 90-key select-service hotel. Your NOI and cap rate do.",
  takeaways: [
    "Per key equals price divided by keys. It describes a sale after the fact. It does not explain the price.",
    "Two hotels with the same key count and different NOI are not worth the same per key. The worked example below shows a $59,000 per key gap on identical room counts.",
    "Public per-key averages skew high. The LW Hospitality Advisors survey only counts sales above $10 million.[1]",
    "The best known shortcut is Stephen Rushmore's: value per room is roughly ADR times 1,000, for stabilized occupancy of 60 to 75 percent. He calls it no substitute for a real valuation.[2]",
    "The Matthews Hotel Index publishes cap-rate and RevPAR bands, not per-key prices, because per key is an output of NOI and cap rate.[3]"
  ],
  sections: [
    {
      h2: "How do I calculate price per key?",
      lead: "Divide the price by the number of guest rooms. A $12.0 million hotel with 100 keys is $120,000 per key.",
      body: "That is the whole formula, which is why brokers, lenders and buyers all use it as shorthand. It lets you compare a 78-key hotel and a 140-key hotel on one line. It is also why it misleads. The number carries no information about occupancy, rate, margin, franchise term, deferred capital or the land under the building. Per key is a description of a price somebody already reached another way. For the way they reached it, see [Walk me through the math on valuing a select-service hotel](/hotel-valuation/how-to-value-a-hotel)"
    },
    {
      h2: "Where does a per-key number actually come from?",
      lead: "From NOI per key divided by a cap rate. Per key is the income approach, restated per room.",
      body: "If value equals NOI divided by a cap rate, then value per key equals NOI per key divided by the same cap rate. The table below runs that arithmetic across the select-service band in the Matthews Hotel Index for Q1 2026, 7.50 to 8.75 percent across 14 markets.[3] A hotel that clears $10,000 of NOI per key is worth about $133,000 per key at the tight end of that band and about $114,000 at the wide end. A hotel that clears $15,000 per key is worth $171,000 to $200,000. The spread between those rows comes from operations, not from the building. That is the reason a per-key comp from down the street can be right for that hotel and wrong for yours."
    },
    {
      h2: "What do public per-key averages tell me?",
      lead: "The direction of the market, and not much about a single asset.",
      body: "LW Hospitality Advisors publishes a quarterly survey of major U.S. hotel sales. For Q2 2026 it counted 107 trades, about $3.8 billion and roughly 17,300 rooms, an average of about $218,000 per room, down about 17 percent from Q1 2026.[1] Two things limit how far an owner can take that figure. First, the survey only includes single-asset sales above $10 million, so smaller select-service and economy trades are left out by design.[1] Second, one quarter's average moves with the mix of what sold. A few resort or gateway trades move it more than any change in what a given hotel is worth. Use public averages to see whether pricing is rising or falling. Do not use them to price a specific hotel."
    },
    {
      h2: "What is a RevPAR multiple, and is ADR times 1,000 real?",
      lead: "A RevPAR multiple is value per key divided by RevPAR. The ADR rule is a published rule of thumb with stated limits.",
      body: "Stephen Rushmore, the founder of HVS, wrote in May 2024 that a hotel's total economic value per room can be estimated by multiplying its average daily rate by 1,000, and that the rule is fairly accurate for stabilized occupancy of 60 to 75 percent with a normal set of amenities.[2] In the same piece he says rules of thumb are no substitute for a market analysis, financial projections and a valuation by a skilled consultant.[2] A RevPAR multiple works the same way with occupancy folded in. We do not publish a RevPAR multiple, and we could not find a public primary source that does. Both shortcuts assume a normal margin. A hotel with heavy labor cost, a high property tax bill or a ground lease breaks the assumption, and the shortcut overstates value without showing why."
    },
    {
      h2: "When is per key the right tool?",
      lead: "As a cross-check on an income value, as a screen against replacement cost, and as shorthand between people who already know the NOI.",
      body: "A cross-check works like this. Run the income approach first. Convert the answer to per key. Then compare it with recent sales of the same chain scale in the same market. If your number sits far above every comparable sale, the NOI or the cap rate probably needs a second look. If it sits far below, the hotel may be under-managed, which is a finding in itself. Buyers also compare per-key price with what it would cost to build the same hotel new. HVS notes that a normal cap rate for a stabilized or near-stabilized hotel remains near 8.0 to 8.5 percent,[4] so a per-key figure that implies something far outside that range deserves a question."
    },
    {
      h2: "What does per key miss?",
      lead: "Everything that makes one room worth more than another: margin, brand, capital needs, land and lease terms.",
      body: "An open property improvement plan is a deduction from value that a per-key comp does not show. See [How does a PIP affect my hotel's value?](/hotel-valuation/pip-and-hotel-value) Food and beverage, meeting space and parking add revenue that a room count ignores. A ground lease or a property tax reassessment lowers NOI without touching the key count. A short remaining franchise term narrows the buyer pool. Each of these moves real value by more than the typical spread between two per-key comps. That is why a [broker opinion of value](/hotel-valuation/broker-opinion-of-value) states NOI, cap rate and per key together, and treats the third as the check on the first two."
    }
  ],
  table: {
    caption: "Value per key implied by NOI per key, at the Matthews Hotel Index select-service cap-rate band, Q1 2026",
    columns: [
      "NOI per key",
      "Value per key at 7.50%[3]",
      "Value per key at 8.75%[3]",
      "What the row does not tell you"
    ],
    rows: [
      [
        "$8,000",
        "$106,667",
        "$91,429",
        "Whether the low NOI is the market or the management"
      ],
      [
        "$10,000",
        "$133,333",
        "$114,286",
        "Whether NOI is after a management fee and an FF&E reserve"
      ],
      [
        "$12,000",
        "$160,000",
        "$137,143",
        "Whether an open PIP still has to be deducted"
      ],
      [
        "$15,000",
        "$200,000",
        "$171,429",
        "Whether the trailing year is repeatable"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026, published by Matthews Hotel Markets, puts select-service cap rates at 7.50 to 8.75 percent across 14 markets. At that band, each $1,000 of NOI per key is worth about $11,400 to $13,300 of value per key.[3]"
  },
  workedExample: {
    label: "Hypothetical: two 96-key hotels, one per-key comp",
    body: "Hypothetical. Two 96-key select-service hotels in the same market. A broker quotes a recent comparable sale at $150,000 per key, which would put both at $14.40 million.\n\nHotel A produces $1,420,000 of NOI, or $14,792 per key. At an 8.25 percent cap rate, value equals $1,420,000 divided by 0.0825, or $17.21 million, about $179,000 per key. Hotel B produces $949,000 of NOI, or $9,885 per key. At the same cap rate, value equals $11.50 million, about $120,000 per key.\n\nPricing both at the $150,000 comp would mean selling Hotel A at a 9.86 percent cap rate and Hotel B at a 6.59 percent cap rate. No informed buyer pays the second and no informed seller accepts the first. The per-key comp was not wrong. It belonged to a third hotel.\n\nThe ADR shortcut has the same problem. Hotel B runs a $148 ADR, so ADR times 1,000 gives $148,000 per key, or $14.21 million, about $2.7 million above what its NOI supports."
  },
  faq: [
    {
      q: "What is a hotel worth per key?",
      a: "Whatever its NOI per key divided by a market cap rate says. At the Q1 2026 Matthews Hotel Index select-service band of 7.50 to 8.75 percent, $10,000 of NOI per key implies about $114,000 to $133,000 per key.[3]"
    },
    {
      q: "What is the average hotel price per key in 2026?",
      a: "LW Hospitality Advisors reported about $218,000 per room across 107 U.S. sales above $10 million in Q2 2026.[1] The survey excludes smaller trades, so it overstates what a typical select-service hotel sells for."
    },
    {
      q: "Is ADR times 1,000 a good way to value a hotel?",
      a: "It is a rule of thumb. Stephen Rushmore says it is fairly accurate at 60 to 75 percent stabilized occupancy and no substitute for a full valuation.[2] It assumes a normal margin, which many hotels do not have."
    },
    {
      q: "What is a RevPAR multiple?",
      a: "Value per key divided by RevPAR. It is a shortcut like ADR times 1,000 with occupancy included. We do not publish one, because it hides the expense side, where hotels differ most."
    },
    {
      q: "Why did a similar hotel sell for more per key than mine is worth?",
      a: "Usually because it earns more NOI per key, has a longer franchise term, or has no open PIP. Per key reports the result of those differences without naming them."
    },
    {
      q: "Do lenders use price per key?",
      a: "As a reasonableness check. Loan sizing runs on NOI, through tests like DSCR and debt yield. Lenders do not publish their thresholds, so ask for them in writing. See /glossary/dscr and /glossary/debt-yield."
    },
    {
      q: "Does the Matthews Hotel Index publish price per key?",
      a: "No. It publishes cap-rate, ADR, RevPAR and occupancy bands for 14 markets.[3] Per key follows from NOI and cap rate, so we publish the inputs."
    }
  ],
  sources: [
    {
      n: 1,
      label: "LW Hospitality Advisors Q2/Midyear 2026 Major U.S. Hotel Sales Survey and Lodging Sector Overview (published August 5, 2026)",
      url: "https://www.hospitalitynet.org/report/4133813/lw-hospitality-advisors-lwha-q2midyear-2026-major-us-hotel-sales-survey-lodging-sector-overview",
      publisher: "LW Hospitality Advisors, via Hospitality Net",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "How to Determine a Hotel's Feasibility and Land Value in 60 Seconds, by Stephen Rushmore (May 30, 2024)",
      url: "https://www.hospitalitynet.org/opinion/4122159.html",
      publisher: "Stephen Rushmore, via Hospitality Net",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "HVS U.S. Market Pulse: April 2026",
      url: "https://www.hvs.com/article/10450-hvs-us-market-pulse-april-2026",
      publisher: "HVS",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/branded-select-service-hotel-value",
      "/hotel-valuation/broker-opinion-of-value"
    ],
    glossary: [
      "/glossary/revpar",
      "/glossary/adr",
      "/glossary/noi",
      "/glossary/cap-rate"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Get a per-key number backed by your NOI",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets prices hotels off NOI and the Matthews Hotel Index cap-rate band first, and uses price per key to check the answer."
};

export default page;
