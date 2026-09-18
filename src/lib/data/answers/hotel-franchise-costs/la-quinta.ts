/**
 * How much does a La Quinta franchise cost in 2026?
 * Answer page: /hotel-franchise-costs/la-quinta
 *
 * Written 2026-09-18 from the La Quinta FDD issued March 31, 2026, downloaded
 * from the Wisconsin DFI franchise registry and read on that date. Page numbers
 * are the FDD's printed page numbers.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "la-quinta",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "La Quinta Franchise Cost in 2026: Fees From the FDD",
  h1: "How much does a La Quinta franchise cost in 2026?",
  description: "La Quinta by Wyndham franchise fees from the 2026 FDD: $55,000 or $550 per room initial fee, 5.5% to 6% royalty, 3.5% system assessment, Item 7, Item 19.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a La Quinta franchise cost?",
    "What royalty does Wyndham charge on a La Quinta?",
    "I'm buying a La Quinta Inn and Suites, what is the relicense fee and will there be a PIP?",
    "Can I terminate a La Quinta franchise if occupancy is low?"
  ],
  answer: "Wyndham's La Quinta disclosure document, issued March 31, 2026, estimates $1,670,705 to $7,399,531 to convert a 100-room hotel the owner already holds, and $13,063,365 to $18,217,394 to build a 110-room La Quinta, before land. The initial fee is the greater of $55,000 or $550 per room. The royalty is 5.5 percent for the first 24 months and 6 percent after, plus a 3.5 percent system assessment fee.[1]",
  takeaways: [
    "Initial fee: the greater of $55,000 or $550 per guest room, with a $5,000 application fee credited toward it.[1]",
    "Royalty: 5.5 percent of gross room revenues through the 24th full month after opening, then 6.0 percent. System assessment fee: 3.5 percent.[1]",
    "Wyndham Rewards loyalty charge: 4.25 to 5.5 percent of the amounts on which members earn points.[1]",
    "Term: 20 years, with no renewal right. Liquidated damages run to 36 months of royalties and system assessment fees.[1]",
    "Fees change every year. Wyndham's current FDD and the signed franchise agreement govern, not this page."
  ],
  sections: [
    {
      h2: "What does Wyndham charge up front for a La Quinta franchise?",
      lead: "The 2026 La Quinta FDD lists an initial fee equal to the greater of $55,000 or $550 per guest room for a new construction or conversion hotel, with a non-refundable $5,000 application fee credited toward it.[1]",
      body: "The franchisor states that initial fees in 2025 ranged from $25,000 to $55,000, and that it may negotiate the amount and payment terms when business circumstances warrant. A dual-brand La Quinta and Hawthorn Suites project pays separate application and initial fees under each agreement (Item 5, pp. 25-26).[1]\n\nThe SynXis property management system carries a one-time $6,000 set-up and implementation fee. The OPERA alternative, with on-site deployment, runs $15,550 to $29,300 plus interfaces. The Wyndham Gateway internet portal equipment is $1,500, a custom interior design review is up to $6,000, and an extension of the opening deadline is $10,000. A new construction franchisee must attend a development open house within six months of signing, at $1,499 (Item 5, pp. 26-28).[1]"
    },
    {
      h2: "What are the ongoing La Quinta franchise fees?",
      lead: "The 2026 La Quinta Item 6 lists a royalty of 5.5 percent of gross room revenues from opening through the 24th full calendar month and 6.0 percent for the rest of the term, plus a 3.5 percent system assessment fee.[1]",
      body: "Once the royalty is at 6.0 percent, the FDD says a hotel that achieves superior results may be eligible for a 0.5 percent annual royalty credit. On a transfer, a hotel already at 6.0 percent stays there. La Quinta's gross room revenues definition includes revenue from the rental or use of meeting rooms. The system assessment fee can change on 30 days' notice, and the franchisor may raise any fixed-dollar fee by up to 10 percent a year, cumulatively (Item 6, pp. 28, 40-41).[1]\n\nThe Wyndham Rewards loyalty program charge is 4.25 to 5.5 percent of the amounts on which members earn points, varying with the hotel's enrollment results (Item 6, p. 35).[1]\n\nGlobal distribution system bookings are $7.85 per reservation, and third-party channel and internet booking fees are $2.60 each. The mandatory digital pay-for-performance commission is currently 7 percent, and can be up to 10 percent, of gross room revenues on qualifying reservations. The mandatory Wyndham Connect Plus service is 3.5 percent of gross room revenues on each reservation it books (Item 6, pp. 31-34).[1]\n\nLa Quinta requires more services than Wyndham's economy brands. Standard revenue management is required at a minimum, at 0.75 percent of gross room revenues with a $645 monthly minimum and a $1,395 maximum. The remote sales service is required at $1,500 per month. The FDD says either requirement can be met another way under criteria set in system standards. The mobile operations program is mandated at $0.60 per room per month, property management system support is $734 to $1,050 per month, and continuing education is $1,200 per year (Item 6, pp. 30, 34-35, 37).[1] These charges apply to different bases, so they cannot be added into one rate."
    },
    {
      h2: "How much does it cost to convert to or build a La Quinta?",
      lead: "The 2026 La Quinta Item 7 estimates $1,670,705 to $7,399,531 for a 100-room conversion, which the FDD states as $16,707 to $73,995 per room and which assumes the owner already owns the hotel.[1]",
      body: "Facility improvements are the largest conversion line at $375,000 to $4,535,000, with a conversion contingency of $18,750 to $226,750 (Item 7, pp. 46-47).[1] Unlike the Days Inn and Super 8 estimates, the low end is not zero.\n\nFor new construction, the FDD estimates $13,063,365 to $18,217,394 for a 110-room La Quinta, or $118,758 to $165,613 per room, excluding the cost of buying or leasing real estate. The initial fee line in that table is $60,500, which is $550 times 110 rooms. For a new dual-brand La Quinta and Hawthorn Suites on a 103-room prototype, the FDD estimates $14,445,089 to $19,896,600, or $140,244 to $193,171 per room (Item 7, pp. 42-46).[1] Financing for this work is covered at [brand conversion financing](/hotel-financing/brand-conversion-financing) and [PIP and renovation loans](/hotel-financing/pip-and-renovation-loans). The plan itself is defined at [PIP](/glossary/pip)."
    },
    {
      h2: "How long is a La Quinta franchise agreement, and can I terminate if occupancy is low?",
      lead: "The La Quinta term is 20 years from the first day of the month on or after the opening date, Item 17 states there are no renewal or extension rights, and the agreement carries an occupancy-based termination right.[1]",
      body: "If the franchisor grants a 25-year term, the franchisee can terminate without cause after 20 years. If both sides choose to renew, the franchisee signs the then current agreement and pays the then current relicense fee (Item 17, pp. 78-79).[1]\n\nThe occupancy right works on two consecutive measurement years after the second anniversary of opening, with written notice within 30 days after each year, and only for a franchisee in full compliance. Average monthly occupancy below 50 percent in both years allows termination with no termination fee. Between 50 and 60 percent, the fee equals the royalties that accrued over the preceding 12 months. Between 60 and 70 percent, it equals the royalties over the preceding 30 months. The franchisee must also have implemented the franchisor's marketing, sales and revenue management recommendations and must sign a general release (Item 6, pp. 41-42).[1] For a dual-brand operation this right is deleted (Item 17, p. 80).[1]"
    },
    {
      h2: "What does it cost to leave the La Quinta system early?",
      lead: "La Quinta liquidated damages are the greater of $3,000 per guest room or 36 times the monthly average of royalties and system assessment fees accrued over the preceding 12 full calendar months.[1]",
      body: "If fewer than 36 months remain in the term, the amount is that monthly average times the months remaining. For a termination before opening, or before the first anniversary of opening, the amount is the greater of $250,000 or $2,500 per authorized guest room. Payment is due within 10 days. An owner who does not de-identify the hotel afterward owes $2,000 per day, and reconnecting to the reservation system after a suspension is currently $5,000 (Item 6, pp. 38-40).[1]"
    },
    {
      h2: "What happens to the La Quinta franchise when I sell the hotel?",
      lead: "The buyer submits an application, pays the application fee and a relicense fee equal to the greater of $55,000 or $550 per room, signs the then current franchise agreement and improves the hotel as applicable.[1]",
      body: "The FDD reports that 2025 relicense fees on transfers ranged from $7,500 to $55,000, and on renewals from $10,000 to $55,000. An assignment to an affiliate of the franchisee is a flat $30,000, and an assignment to a lender or receiver is $7,500. The seller and its owners sign general releases unless the law restricts them, and the seller may have to repay a development incentive unless the buyer assumes it (Item 5, p. 26; Item 6, p. 29; Item 17, pp. 81-82).[1]\n\nA property improvement plan prepared after opening is currently $2,500 per request, a lender comfort letter is $1,000, and a failed-inspection reinspection is $3,000 to $5,500 plus travel (Item 6, pp. 29, 39).[1] Wyndham-flagged hotels on the market are listed at [Wyndham hotels for sale](/hotels-for-sale/wyndham), and the flag decision is weighed at [Should I buy a branded or independent hotel?](/buy-a-hotel/branded-vs-independent)."
    },
    {
      h2: "What does Item 19 say about La Quinta performance?",
      lead: "The 2026 La Quinta Item 19 reports that 435 qualified La Quinta hotels averaged a $112.75 average daily rate, 66.5 percent occupancy and $74.95 RevPAR in 2025.[1]",
      body: "There were 867 La Quinta hotels in the United States and Canada at December 31, 2025. The 435 qualified hotels are those that opened before January 1, 2024 and had at least ten guest reviews averaging 4.0 or better out of 5.0, a higher bar than the 3.0 used in the Days Inn and Super 8 documents. Hotels that left the system during 2025, 31 in all, are excluded. The median RevPAR was $73.13, and 201 of the 435, or 46.2 percent, met or exceeded the average (Item 19, pp. 84-85).[1]\n\nThe FDD reports an average competitive set RevPAR index of 100 percent for the qualified hotels, from Smith Travel Research data the franchisor says it has not audited or verified. For all 867 hotels it reports an average central reservation system contribution of 88.0 percent of gross room revenue, of which Wyndham Rewards members account for 56.6 percent. The central reservation figure includes third-party websites (Item 19, pp. 85-86).[1]\n\nItem 19 gives rate, occupancy and revenue measures only. It gives no expenses and no profit, and this page draws no profit conclusion from it. The measures are defined at [RevPAR](/glossary/revpar) and [ADR](/glossary/adr)."
    }
  ],
  table: {
    caption: "La Quinta by Wyndham franchise fees, 2026 FDD issued March 31, 2026",
    columns: [
      "Fee",
      "Amount",
      "Where in the FDD"
    ],
    rows: [
      ["Application fee", "$5,000, non-refundable, credited toward the initial fee[1]", "Item 5, pp. 25-26"],
      ["Initial fee, new construction or conversion", "Greater of $55,000 or $550 per guest room[1]", "Item 5, p. 26"],
      ["Relicense fee, transfer or renewal", "Greater of $55,000 or $550 per guest room[1]", "Item 5, p. 26; Item 6, p. 29"],
      ["Royalty", "5.5% of gross room revenues through the 24th full month, then 6.0%[1]", "Item 6, p. 28"],
      ["System assessment fee (marketing, advertising, reservations)", "3.5% of gross room revenues[1]", "Item 6, p. 28"],
      ["Wyndham Rewards loyalty program charge", "4.25% to 5.5% of amounts on which members earn points[1]", "Item 6, p. 35"],
      ["GDS fee; third-party channel and internet booking fees", "$7.85 per reservation; $2.60 per reservation[1]", "Item 6, pp. 31-32"],
      ["Digital pay-for-performance commission", "Currently 7%, up to 10%, of gross room revenues on qualifying reservations[1]", "Item 6, p. 33"],
      ["Wyndham Connect Plus", "3.5% of gross room revenues on each reservation booked through the service[1]", "Item 6, pp. 33-34"],
      ["Standard revenue management (required at a minimum)", "0.75% of gross room revenues; $645 to $1,395 per month[1]", "Item 6, p. 34"],
      ["Remote sales service (required)", "$1,500 per month[1]", "Item 6, pp. 34-35"],
      ["PIP preparation fee, after opening", "$2,500 per request[1]", "Item 6, p. 29"],
      ["Liquidated damages", "Greater of $3,000 per room or 36 times average monthly royalties and system assessment fees[1]", "Item 6, pp. 39-40"],
      ["Estimated initial investment, 100-room conversion", "$1,670,705 to $7,399,531; $16,707 to $73,995 per room; assumes the hotel is already owned[1]", "Item 7, p. 47"],
      ["Estimated initial investment, new 110-room hotel", "$13,063,365 to $18,217,394; $118,758 to $165,613 per room, excluding real estate[1]", "Item 7, p. 44"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet records Prime at 7.00% effective September 17, 2026 and the SBA 7(a) maximum allowable rate at 10.00%, the indexes a loan for a relicense fee, a PIP or a conversion is priced against.[2]"
  },
  workedExample: {
    label: "Hypothetical: a year of La Quinta brand fees on assumed room revenue",
    body: "Hypothetical. Assume a 100-room La Quinta earns $3,000,000 of gross room revenues in a year. The revenue figure and the member share below are assumptions for arithmetic. They are not forecasts and they are not figures from the FDD.\n\nRoyalty in the first 24 months at 5.5 percent: $3,000,000 x 0.055 = $165,000. After month 24 at 6.0 percent: $3,000,000 x 0.06 = $180,000.[1]\n\nSystem assessment fee at 3.5 percent: $3,000,000 x 0.035 = $105,000.[1]\n\nTogether: $270,000, or 9.0 percent of room revenue, in the first 24 months, and $285,000, or 9.5 percent, after.\n\nIf Wyndham Rewards members earn points on $1,000,000 of that revenue, the loyalty program charge at 4.25 to 5.5 percent is $42,500 to $55,000.[1] Revenue management, remote sales, per-reservation fees, commissions and technology support come on top and depend on the hotel, so they are not estimated here."
  },
  faq: [
    {
      q: "How much does a La Quinta franchise cost?",
      a: "The 2026 FDD lists an initial fee of the greater of $55,000 or $550 per room, a royalty of 5.5 percent rising to 6 percent after 24 months, and a 3.5 percent system assessment fee. Item 7 estimates $1,670,705 to $7,399,531 for a 100-room conversion.[1]"
    },
    {
      q: "What royalty does Wyndham charge on a La Quinta?",
      a: "5.5 percent of gross room revenues from opening through the 24th full calendar month, then 6.0 percent for the rest of the term. A hotel at 6.0 percent with superior results may be eligible for a 0.5 percent annual credit.[1]"
    },
    {
      q: "I'm buying a La Quinta. What is the relicense fee?",
      a: "The greater of $55,000 or $550 per room, plus the $5,000 application fee. The FDD says 2025 relicense fees on transfers ranged from $7,500 to $55,000. The buyer signs the then current agreement and improves the hotel as applicable.[1]"
    },
    {
      q: "Can I terminate a La Quinta franchise if occupancy is low?",
      a: "Yes, under conditions. Two consecutive measurement years below 50 percent average monthly occupancy allow termination with no fee. Between 50 and 70 percent, a fee of 12 or 30 months of royalties applies. Full compliance and timely notice are required.[1]"
    },
    {
      q: "How much does it cost to build a new La Quinta?",
      a: "The 2026 Item 7 estimates $13,063,365 to $18,217,394 for a 110-room hotel, or $118,758 to $165,613 per room, excluding the cost of buying or leasing real estate.[1]"
    },
    {
      q: "Does the La Quinta FDD say what a La Quinta earns?",
      a: "Item 19 reports 2025 average daily rate, occupancy, RevPAR, RevPAR index and reservation contribution for 435 qualified hotels. It gives no expenses and no profit.[1]"
    },
    {
      q: "Will these La Quinta fees be the same next year?",
      a: "Not necessarily. The FDD is reissued every year, and the franchisor may raise any fixed-dollar fee by up to 10 percent a year. The current FDD and the signed agreement govern.[1]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "La Quinta Franchise Disclosure Document (issued March 31, 2026): Item 5, pp. 25-28; Item 6, pp. 28-42; Item 7, pp. 42-50; Item 17, pp. 78-84; Item 19, pp. 84-87. Wisconsin DFI franchise registration file 640629",
      url: "https://apps.dfi.wi.gov/apps/FranchiseSearch/details.aspx?id=640629&hash=1899216290&search=external&type=GENERAL",
      publisher: "La Quinta Franchising LLC, filed with the Wisconsin Department of Financial Institutions",
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
      "/hotel-franchise-costs/super-8",
      "/hotel-franchise-costs/hyatt-place",
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
    label: "Talk through a La Quinta purchase or conversion",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances franchised hotels, so we read these disclosure documents alongside owners and buyers."
};

export default page;
