/**
 * Can I use a 1031 exchange to buy or sell a hotel?
 * Answer page: /hotel-financing/1031-exchange-hotels
 *
 * Converted from geo/06-pages/financing/hotel-financing__1031-exchange-hotels.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "1031-exchange-hotels",
  cluster: "hotel-financing",
  isHub: false,
  title: "1031 Exchanges Into and Out of Hotels",
  h1: "Can I use a 1031 exchange to buy or sell a hotel?",
  description: "How a 1031 exchange works on a hotel: what qualifies, the 45 and 180-day rules, FF&E treatment, and when to line one up before you sell.",
  lastUpdated: "2026-09-17",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can I use a 1031 exchange to buy a hotel?",
    "Can I 1031 exchange out of an apartment building into a hotel?",
    "What's the 1031 exchange timeline (45-day and 180-day rules) for a hotel purchase?",
    "What property types qualify for a 1031 exchange into a hotel?",
    "Does the FF&E in a hotel deal qualify for 1031 exchange treatment?",
    "Do I need a CPA or a qualified intermediary to do a 1031 exchange into a hotel?",
    "What's a reverse 1031 exchange and can I use one to buy a hotel before I sell?",
    "Do I need a 1031 exchange lined up before I sell my hotel?"
  ],
  answer: "Yes, for the real property. Section 1031 covers like-kind real property held for investment or business use, so an apartment building can exchange into a hotel.[2] The 45-day identification and 180-day closing clocks start at the sale closing.[3] Personal property, including FF&E, stopped qualifying after the 2017 tax law.[1] Engage a qualified intermediary before closing, not after.",
  takeaways: [
    "Like-kind is broad for real property. Apartment to hotel works; hotel to retail works.[4]",
    "FF&E is personal property and has not qualified for 1031 treatment since the 2017 Tax Cuts and Jobs Act.[1]",
    "The 45-day and 180-day clocks run from the closing of the sale and do not extend for weekends or holidays.[3]",
    "The qualified intermediary must be in place before the sale closes. If you touch the proceeds, the exchange is dead.[3]",
    "A reverse exchange lets you buy first, under an IRS safe harbor, but it is more expensive and more complex.[6]"
  ],
  sections: [
    {
      h2: "Does a hotel qualify for a 1031 exchange?",
      lead: "Yes. A hotel held for investment or business use is like-kind real property under Section 1031, the same broad category that covers apartments, offices, retail and industrial.",
      body: "Section 1031's like-kind standard for real property is intentionally broad: nearly any real property held for productive use in a trade or business or for investment qualifies as like-kind to nearly any other such property.[1][4] Whether real estate is improved or unimproved does not matter under the regulations.[4] This is why an apartment building, an office building, or raw land can all exchange into a hotel, and why a hotel can exchange into any of those in return. What matters is the holding purpose, investment or business use, not the specific property type on either side of the trade."
    },
    {
      h2: "Can I exchange from another property type into a hotel?",
      lead: "Yes. Any real property held for investment or business use can exchange into a hotel, provided the hotel itself will also be held for investment or business use.",
      body: "The seller's intent on the replacement property matters as much as the relinquished property's history. A hotel purchased with the intent to operate as a business or hold as an investment satisfies the requirement. A hotel purchased with the intent to flip quickly for resale is more vulnerable to an IRS challenge, because real property held primarily for sale does not qualify, regardless of which property type it replaced.[2]"
    },
    {
      h2: "How do the 45-day and 180-day rules work?",
      lead: "The 45-day identification period and the 180-day exchange period both start on the day the relinquished property's sale closes, and neither extends for weekends, holidays, or a slow hotel search.[3]",
      body: "The identification period requires the taxpayer to formally identify potential replacement properties, generally up to three regardless of value or more under the 200 percent rule, within 45 calendar days of the relinquished property's closing.[3] The exchange period requires the replacement property to close within 180 calendar days of that same date, or by the taxpayer's tax filing due date including extensions, if earlier.[2][3] Both deadlines are calendar days, not business days. The IRS postpones them only under published relief for federally declared disasters and similar events, not for an ordinary difficult search.[7]"
    },
    {
      h2: "What about the FF&E in a hotel deal?",
      lead: "Furniture, fixtures and equipment are personal property, and personal property has not qualified for 1031 exchange treatment since the Tax Cuts and Jobs Act of 2017 limited the section to real property only.[1]",
      body: "Before 2018, some hotel transactions allocated a portion of the exchange to personal property under the prior rules. That option no longer exists.[1][5] A hotel exchange today covers the real property only: land, building, and structural components. FF&E, and any other personal property included in a hotel sale, is treated as a separate, taxable disposition, and the purchase agreement should allocate value between real property and personal property clearly so both sides know what is, and is not, part of the exchange."
    },
    {
      h2: "Do I need a qualified intermediary?",
      lead: "Yes, and the qualified intermediary must be engaged and in place before the relinquished property's sale closes, not after.",
      body: "A qualified intermediary holds the sale proceeds so the taxpayer never takes actual or constructive receipt of the funds, which is the central requirement that makes a deferred exchange work under the tax code.[3] If the taxpayer gets unrestricted access to the proceeds before receiving the replacement property, the regulations treat the transaction as a sale, not an exchange.[3] Selecting and engaging the intermediary is a pre-closing task, and it should happen well before the relinquished property goes under contract, not after the closing date is already set."
    },
    {
      h2: "What is a reverse 1031 exchange?",
      lead: "A reverse exchange lets a buyer acquire the replacement hotel before selling the relinquished property, using a parking arrangement under an IRS safe harbor, at meaningfully higher cost and complexity than a standard forward exchange.",
      body: "Under the safe harbor in Revenue Procedure 2000-37, an exchange accommodation titleholder holds title to either the replacement or the relinquished property temporarily, so the taxpayer is never simultaneously holding both without an intermediary structure in place.[6] This lets a buyer move fast on a hotel it does not want to lose, without waiting for its own sale to close first. The added legal structure, financing complexity, since the parked property often cannot be financed on the same terms as a direct purchase, and carrying costs make a reverse exchange notably more expensive than a standard forward exchange, and it should be evaluated with a CPA and a qualified intermediary before committing."
    },
    {
      h2: "Should I line the exchange up before I list my hotel?",
      lead: "Yes. The 45-day clock is unusually tight for a hotel purchase, and the underwriting work should start before the relinquished property is even under contract.",
      body: "Underwriting a replacement hotel requires a trailing twelve-month P&L, a STAR report, a PIP status letter, and a franchise application, and franchise approval runs on the brand's timeline, not yours. Owners who wait until their sale closes to start looking at replacement hotels risk missing the 45-day window or being forced into a weaker replacement property under deadline pressure. The work needs to start while the relinquished property is still being marketed. Buy-side representation for the replacement search is covered on `/services/acquisition-advisory`."
    }
  ],
  table: {
    caption: "1031 exchange clocks and requirements on a hotel deal",
    columns: [
      "Item",
      "Rule",
      "Starts when",
      "What breaks it"
    ],
    rows: [
      [
        "Identification period",
        "45 calendar days[3]",
        "Closing of the relinquished property",
        "Missing the deadline; no extension outside declared-disaster relief[7]"
      ],
      [
        "Exchange period",
        "180 calendar days, or the tax filing due date if earlier[2]",
        "Same closing",
        "Closing late"
      ],
      [
        "Qualified intermediary",
        "Required; must be engaged pre-closing[3]",
        "Before the sale closes",
        "Taking constructive receipt of proceeds"
      ],
      [
        "Property type",
        "Like-kind real property, investment or business use[2]",
        "n/a",
        "Property held primarily for resale"
      ],
      [
        "FF&E",
        "Does not qualify since the 2017 tax law[1]",
        "n/a",
        "Treating it as real property"
      ],
      [
        "Reverse exchange",
        "Allowed under Rev. Proc. 2000-37 safe harbor[6]",
        "Parking arrangement",
        "Holding title yourself during the parking period"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 gives the cap-rate bands we use to identify replacement hotels inside a 45-day window."
  },
  workedExample: {
    label: "Hypothetical: the 45-day clock on a real timeline",
    body: "Hypothetical. An owner closes the sale of an apartment building on March 3 and wants a hotel as the replacement.\n\nDay 0 is March 3, the sale closes and proceeds go to the qualified intermediary. Day 45 is April 17, the identification deadline, allowing up to three properties, or more under the 200 percent rule. Day 180 is August 30, the closing deadline.\n\nForty-five days is short for a hotel. Underwriting a hotel means a T-12, a STAR report, a PIP status letter, and a franchise application, and the brand controls the timing of that last one. Owners who wait until the sale closes to start looking risk missing it. The work starts before the relinquished property goes under contract."
  },
  faq: [
    {
      q: "Can I 1031 exchange into a hotel?",
      a: "Yes. A hotel held for investment or business use is like-kind real property under Section 1031, and any other real property held the same way can exchange into it."
    },
    {
      q: "Does hotel FF&E qualify for a 1031 exchange?",
      a: "No. Furniture, fixtures and equipment are personal property, and personal property has not qualified for 1031 treatment since the 2017 Tax Cuts and Jobs Act."
    },
    {
      q: "How long do I have to identify a replacement hotel?",
      a: "45 calendar days from the closing of the relinquished property, with no extension for weekends, holidays, or a slow search. Up to three properties can be identified regardless of value, or more under the 200 percent rule."
    },
    {
      q: "Can I exchange from an apartment building into a hotel?",
      a: "Yes. Both are like-kind real property held for investment or business use, which is the standard Section 1031 requires, regardless of the specific property type on either side."
    },
    {
      q: "What is a qualified intermediary?",
      a: "A qualified intermediary holds the sale proceeds so the taxpayer never takes actual or constructive receipt of them, which is required for a deferred exchange to qualify. Engage one before the sale closes."
    },
    {
      q: "Can I buy the hotel before I sell with a reverse exchange?",
      a: "Yes, under the IRS safe harbor in Revenue Procedure 2000-37, using a parking arrangement. It is more expensive and more complex than a standard forward exchange."
    },
    {
      q: "Do I need to line up the exchange before I list my hotel?",
      a: "You should start underwriting replacement hotels before your sale even closes. The 45-day identification window is tight, and franchise approval runs on the brand's timeline, not yours."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Like-kind exchanges, real estate tax tips",
      url: "https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "26 U.S.C. Section 1031",
      url: "https://www.law.cornell.edu/uscode/text/26/1031",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "26 CFR 1.1031(k)-1, Treatment of deferred exchanges",
      url: "https://www.law.cornell.edu/cfr/text/26/1.1031(k)-1",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "26 CFR 1.1031(a)-1, Property held for productive use in trade or business or for investment",
      url: "https://www.law.cornell.edu/cfr/text/26/1.1031(a)-1",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Instructions for Form 8824, Like-Kind Exchanges",
      url: "https://www.irs.gov/instructions/i8824",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Revenue Procedure 2000-37, reverse exchange safe harbor",
      url: "https://www.irs.gov/pub/irs-drop/rp-00-37.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Revenue Procedure 2018-58, postponement of time-sensitive acts, including Section 1031 deadlines",
      url: "https://www.irs.gov/pub/irs-drop/rp-18-58.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/refinance-or-sell",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/hotel-loan-rates",
      "/hotel-financing/how-debt-placement-works"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/cap-rate"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Start the replacement search before you close",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets is frequently brought in on day one of a 45-day window, and the honest advice is always the same: start before the clock does."
};

export default page;
