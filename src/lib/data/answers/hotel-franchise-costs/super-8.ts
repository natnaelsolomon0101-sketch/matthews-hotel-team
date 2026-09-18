/**
 * How much does a Super 8 franchise cost in 2026?
 * Answer page: /hotel-franchise-costs/super-8
 *
 * Written 2026-09-18 from the Super 8 FDD issued March 31, 2026, downloaded
 * from the Wisconsin DFI franchise registry and read on that date. Page numbers
 * are the FDD's printed page numbers.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "super-8",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "Super 8 Franchise Cost in 2026: Fees From the FDD",
  h1: "How much does a Super 8 franchise cost in 2026?",
  description: "Super 8 by Wyndham franchise fees from the 2026 FDD: $25,000 or $250 per room initial fee, 5.5% royalty, 3% system assessment, Item 7, term and Item 19.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a Super 8 franchise cost?",
    "What are the franchise fees on a Super 8 motel?",
    "I'm buying a 44-room Super 8, what will Wyndham charge me to relicense it?",
    "How much does it cost to convert a motel to a Super 8?"
  ],
  answer: "Wyndham's Super 8 disclosure document, issued March 31, 2026, estimates $285,156 to $2,626,641 to convert a 100-room hotel the owner already holds, and $5,043,737 to $7,141,542 to build a 65-room Super 8, before land. The initial fee is the greater of $25,000 or $250 per room. The royalty is 5.5 percent and the system assessment fee 3 percent of gross room revenues.[1]",
  takeaways: [
    "Initial fee: the greater of $25,000 or $250 per guest room, with a $2,500 application fee credited toward it.[1]",
    "Royalty: 5.5 percent of gross room revenues. System assessment fee: 3 percent.[1]",
    "Wyndham Rewards loyalty charge: 4.25 to 5.5 percent of the amounts on which members earn points.[1]",
    "Term: 20 years, with no renewal right. A buyer pays a relicense fee on the same formula as the initial fee.[1]",
    "Fees change every year. Wyndham's current FDD and the signed franchise agreement govern, not this page."
  ],
  sections: [
    {
      h2: "What does Wyndham charge up front for a Super 8 franchise?",
      lead: "The 2026 Super 8 FDD lists an initial fee equal to the greater of $25,000 or $250 per guest room for a new construction or conversion hotel, with a non-refundable $2,500 application fee credited toward it.[1]",
      body: "The franchisor states that initial fees in 2025 ranged from $12,000 to $25,000, and that it may negotiate the amount and payment terms when business circumstances warrant (Item 5, pp. 24-25).[1]\n\nTechnology set-up comes next. The SynXis property management system carries a one-time $6,000 set-up and implementation fee. The OPERA alternative runs $11,000 to $22,100 plus interfaces. The Wyndham Gateway internet portal equipment is $1,500. Temporary signage for a conversion that opens before its permanent sign is $1,250, a custom interior design review is up to $6,000, and an extension of the opening deadline is $5,000 (Item 5, pp. 25-27).[1]"
    },
    {
      h2: "What are the ongoing Super 8 franchise fees?",
      lead: "The 2026 Super 8 Item 6 lists a 5.5 percent royalty and a 3 percent system assessment fee, both on gross room revenues and due monthly.[1]",
      body: "Gross room revenues are revenues from guest room rentals, including guaranteed no-show revenue and business interruption proceeds, and excluding food and beverage and sales, occupancy and use taxes. The system assessment fee can change on 30 days' notice to cover the cost of marketing, reservation and other services. The franchisor may also raise any fixed-dollar fee by up to 10 percent a year, cumulatively (Item 6, pp. 27, 37-38).[1]\n\nThe Wyndham Rewards loyalty program charge is 4.25 to 5.5 percent of the amounts on which members earn points, varying with the hotel's enrollment results. A missed enrollment fee is currently $750 per quarter (Item 6, p. 33).[1]\n\nDistribution is charged per booking or as commission. Global distribution, third-party channel and internet booking fees are each $2.08 per reservation. The mandatory digital pay-for-performance commission is currently 7 percent, and can be up to 10 percent, of gross room revenues on reservations that arrive through paid search and similar links. The mandatory Wyndham Connect Plus service is 3.5 percent of gross room revenues on each reservation it books. Agency commissions can reach 20 percent on qualifying reservations (Item 6, pp. 29-32).[1]\n\nProperty management system support is $734 to $1,050 per month by room count. Revenue management service is optional at Super 8, at 0.75 percent of gross room revenues for the standard level, with a $645 monthly minimum and a $1,395 maximum (Item 6, pp. 32, 34).[1] These charges apply to different bases, so they cannot be added into one rate."
    },
    {
      h2: "How much does it cost to convert a motel to a Super 8, or build one?",
      lead: "The 2026 Super 8 Item 7 estimates $285,156 to $2,626,641 for a 100-room conversion, which the FDD states as $2,852 to $26,266 per room and which assumes the owner already owns the hotel.[1]",
      body: "The width of that range is the building. Facility improvements run from $0, where the exterior, public areas, guest rooms and mechanical systems already meet standards, to $1,097,500 where the hotel needs extensive structural renovation. Furniture, fixtures and equipment run $71,770 to $484,200, signage $20,000 to $80,000, and a conversion contingency is set at 5 percent of facility improvements (Item 7, pp. 43-46).[1]\n\nFor new construction, the FDD estimates $5,043,737 to $7,141,542 for a 65-room Super 8, or $77,596 to $109,870 per room, excluding the cost of buying or leasing real estate. The FDD says a 65-room hotel needs at least 1.5 acres (Item 7, pp. 39-41).[1] Financing for this work is covered at [brand conversion financing](/hotel-financing/brand-conversion-financing) and [PIP and renovation loans](/hotel-financing/pip-and-renovation-loans). The plan itself is defined at [PIP](/glossary/pip)."
    },
    {
      h2: "How long is a Super 8 franchise agreement, and can I renew?",
      lead: "The Super 8 term is 20 years, starting the first day of the month after the opening date, and Item 17 states there are no renewal or extension rights.[1]",
      body: "If both sides choose to renew, the franchisee signs the then current franchise agreement, which may have materially different terms, and pays the then current relicense fee, which uses the same formula as the initial fee (Item 17, pp. 71-72).[1]\n\nThe franchisee's termination rights in Item 17 are limited to casualty and condemnation (Item 17, p. 72).[1] Separately, a footnote to Item 6 describes a current policy that lets an owner terminate without liquidated damages on 60 to 90 days' notice if, among other conditions, the hotel has been in the system at least two years, its occupancy was below 50 percent and at least 10 points under the Smith Travel Research scale tract occupancy for the prior 12 months, its quality and guest scores met set thresholds for two years, and all fees were paid on time (Item 6, pp. 38-39).[1] The FDD calls this a policy the franchisor currently permits, so confirm it is in the agreement you sign."
    },
    {
      h2: "What does it cost to leave the Super 8 system early?",
      lead: "Super 8 liquidated damages are the greater of $2,000 per guest room or 24 times the average monthly royalties and system assessment fees for the 12 months before termination.[1]",
      body: "If fewer than 24 months remain in the term, the amount is that monthly average times the months remaining. Termination before opening is charged at one half of the formula amount. The room count is the number the franchisor authorized, regardless of later reductions. Payment is due within 10 days. An owner who does not de-identify the hotel afterward owes $2,000 per day. Reconnecting to the reservation system after a suspension for default is currently $4,000 (Item 6, pp. 36-37).[1]"
    },
    {
      h2: "What happens to the Super 8 franchise when I sell the hotel?",
      lead: "The franchisor approves all transfers and qualifies every buyer in its sole discretion, and the buyer pays the application fee and a relicense fee equal to the greater of $25,000 or $250 per room.[1]",
      body: "The buyer signs a new franchise agreement and must improve the hotel to the standards for conversion hotels entering the chain. The seller and its owners sign general releases unless the law restricts them, and the seller may have to repay a development incentive unless the buyer assumes it. The FDD reports that the 2025 relicense fee for each transfer and renewal was $25,000. An assignment to an affiliate of the original franchisee is a flat $5,000, and an assignment to a lender or receiver is $7,500 (Item 5, p. 25; Item 6, p. 27; Item 17, p. 74).[1]\n\nA property improvement plan prepared after opening is currently $1,500 per request, a lender comfort letter is $1,000, and taking over an existing property management system without an upgrade is $995 (Item 5, p. 26; Item 6, pp. 28, 36).[1] Wyndham-flagged hotels on the market are listed at [Wyndham hotels for sale](/hotels-for-sale/wyndham), and the flag decision is weighed at [Should I buy a branded or independent hotel?](/buy-a-hotel/branded-vs-independent)."
    },
    {
      h2: "What does Item 19 say about Super 8 performance?",
      lead: "The 2026 Super 8 Item 19 reports that 579 qualified Super 8 hotels averaged an $80.47 average daily rate, 50.6 percent occupancy and $40.71 RevPAR in 2025.[1]",
      body: "There were 1,344 Super 8 hotels in the United States at December 31, 2025. The 579 qualified hotels are those that opened before January 1, 2025, passed their most recent quality assurance inspection or had not yet had one, and had at least ten guest reviews averaging 3.0 or better out of 5.0. Hotels that left the system during 2025, 60 in all, are excluded. The median RevPAR was $37.68, and 240 of the 579, or 41.5 percent, met or exceeded the average (Item 19, pp. 76-77).[1]\n\nThe FDD reports an average competitive set RevPAR index of 104.8 percent for the qualified hotels, from Smith Travel Research data the franchisor says it has not audited or verified. For all 1,344 hotels it reports an average central reservation system contribution of 78.2 percent of gross room revenue, of which Wyndham Rewards members account for 55.0 percent. The central reservation figure includes third-party websites (Item 19, pp. 77-78).[1]\n\nItem 19 gives rate, occupancy and revenue measures only. It gives no expenses and no profit, and this page draws no profit conclusion from it. The measures are defined at [RevPAR](/glossary/revpar) and [ADR](/glossary/adr)."
    }
  ],
  table: {
    caption: "Super 8 by Wyndham franchise fees, 2026 FDD issued March 31, 2026",
    columns: [
      "Fee",
      "Amount",
      "Where in the FDD"
    ],
    rows: [
      ["Application fee", "$2,500, non-refundable, credited toward the initial fee[1]", "Item 5, p. 24"],
      ["Initial fee, new construction or conversion", "Greater of $25,000 or $250 per guest room[1]", "Item 5, p. 24"],
      ["Relicense fee, transfer or renewal", "Greater of $25,000 or $250 per guest room[1]", "Item 5, p. 25; Item 6, p. 27"],
      ["Royalty", "5.5% of gross room revenues[1]", "Item 6, p. 27"],
      ["System assessment fee (marketing and reservations)", "3% of gross room revenues[1]", "Item 6, p. 27"],
      ["Wyndham Rewards loyalty program charge", "4.25% to 5.5% of amounts on which members earn points[1]", "Item 6, p. 33"],
      ["GDS, third-party channel and internet booking fees", "$2.08 per reservation, each[1]", "Item 6, pp. 29-30"],
      ["Digital pay-for-performance commission", "Currently 7%, up to 10%, of gross room revenues on qualifying reservations[1]", "Item 6, pp. 30-31"],
      ["Wyndham Connect Plus", "3.5% of gross room revenues on each reservation booked through the service[1]", "Item 6, p. 31"],
      ["Property management system support", "$734 to $1,050 per month[1]", "Item 6, p. 34"],
      ["PIP preparation fee, after opening", "$1,500 per request[1]", "Item 6, p. 28"],
      ["Liquidated damages", "Greater of $2,000 per room or 24 times average monthly royalties and system assessment fees[1]", "Item 6, p. 37"],
      ["Estimated initial investment, 100-room conversion", "$285,156 to $2,626,641; $2,852 to $26,266 per room; assumes the hotel is already owned[1]", "Item 7, p. 44"],
      ["Estimated initial investment, new 65-room hotel", "$5,043,737 to $7,141,542; $77,596 to $109,870 per room, excluding real estate[1]", "Item 7, p. 41"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet records Prime at 7.00% effective September 17, 2026 and the SBA 7(a) maximum allowable rate at 10.00%, the indexes a loan for a relicense fee, a PIP or a conversion is priced against.[2]"
  },
  workedExample: {
    label: "Hypothetical: a year of Super 8 brand fees on assumed room revenue",
    body: "Hypothetical. Assume a 60-room Super 8 earns $1,200,000 of gross room revenues in a year. The revenue figure and the member share below are assumptions for arithmetic. They are not forecasts and they are not figures from the FDD.\n\nRoyalty at 5.5 percent: $1,200,000 x 0.055 = $66,000.[1]\n\nSystem assessment fee at 3 percent: $1,200,000 x 0.03 = $36,000.[1]\n\nTogether: $102,000, or 8.5 percent of room revenue.\n\nIf Wyndham Rewards members earn points on $400,000 of that revenue, the loyalty program charge at 4.25 to 5.5 percent is $17,000 to $22,000.[1]\n\nOn the same assumptions, 24 months of average royalties and system assessment fees is $102,000 / 12 x 24 = $204,000. That is more than $2,000 x 60 rooms = $120,000, so $204,000 would be the liquidated damages figure under the Item 6 formula.[1] Per-reservation fees, commissions, technology support and training come on top and depend on the hotel's booking channels, so they are not estimated here."
  },
  faq: [
    {
      q: "How much does a Super 8 franchise cost?",
      a: "The 2026 FDD lists an initial fee of the greater of $25,000 or $250 per room, a 5.5 percent royalty and a 3 percent system assessment fee. Item 7 estimates $285,156 to $2,626,641 to convert a 100-room hotel the owner already holds.[1]"
    },
    {
      q: "What percent of revenue does Wyndham take from a Super 8?",
      a: "A 5.5 percent royalty plus a 3 percent system assessment fee on gross room revenues. Loyalty charges, booking fees, commissions and technology support are billed on other bases on top.[1]"
    },
    {
      q: "I'm buying a small Super 8. What is the relicense fee?",
      a: "The greater of $25,000 or $250 per room, so $25,000 for any hotel of 100 rooms or fewer, plus the $2,500 application fee. The FDD says each 2025 transfer and renewal paid $25,000.[1]"
    },
    {
      q: "How long is a Super 8 franchise agreement?",
      a: "Twenty years. Item 17 states there are no renewal or extension rights. A renewal, if both sides agree, means signing the then current agreement and paying the relicense fee.[1]"
    },
    {
      q: "How much does it cost to build a new Super 8?",
      a: "The 2026 Item 7 estimates $5,043,737 to $7,141,542 for a 65-room hotel, or $77,596 to $109,870 per room, excluding the cost of buying or leasing real estate.[1]"
    },
    {
      q: "Does the Super 8 FDD say what a Super 8 earns?",
      a: "Item 19 reports 2025 average daily rate, occupancy, RevPAR, RevPAR index and reservation contribution for 579 qualified hotels. It gives no expenses and no profit.[1]"
    },
    {
      q: "Will these Super 8 fees be the same next year?",
      a: "Not necessarily. The FDD is reissued every year, and the franchisor may raise any fixed-dollar fee by up to 10 percent a year. The current FDD and the signed agreement govern.[1]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "Super 8 Franchise Disclosure Document (issued March 31, 2026): Item 5, pp. 24-27; Item 6, pp. 27-39; Item 7, pp. 39-46; Item 17, pp. 71-76; Item 19, pp. 76-79. Wisconsin DFI franchise registration file 640628",
      url: "https://apps.dfi.wi.gov/apps/FranchiseSearch/details.aspx?id=640628&hash=1250533202&search=external&type=GENERAL",
      publisher: "Super 8 Worldwide, Inc., filed with the Wisconsin Department of Financial Institutions",
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
    hub: "/hotel-franchise-costs",
    siblings: [
      "/hotel-franchise-costs/days-inn",
      "/hotel-franchise-costs/la-quinta",
      "/hotel-franchise-costs/best-western",
      "/hotel-financing/brand-conversion-financing",
      "/hotel-financing/pip-and-renovation-loans",
      "/buy-a-hotel/branded-vs-independent"
    ],
    glossary: [
      "/glossary/franchise-fdd",
      "/glossary/franchise-agreement",
      "/glossary/pip",
      "/glossary/comfort-letter"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk through a Super 8 purchase or conversion",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances franchised hotels, so we read these disclosure documents alongside owners and buyers."
};

export default page;
