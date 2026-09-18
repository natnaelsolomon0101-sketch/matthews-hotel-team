/**
 * How much is my branded select-service hotel worth?
 * Answer page: /hotel-valuation/branded-select-service-hotel-value
 *
 * Written 2026-09-18. Worked-example arithmetic recomputed by script.
 * Brand fee facts are read from the brands' own 2025 Franchise Disclosure
 * Documents. No comparable sales are cited, because none are public at the
 * level of detail a comp needs.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "branded-select-service-hotel-value",
  cluster: "hotel-valuation",
  isHub: false,
  title: "How Much Is My Branded Select-Service Hotel Worth?",
  h1: "How much is my branded select-service hotel worth?",
  description: "A method for valuing a Hampton, Home2 or similar flagged hotel in 2026: brand fees from the FDD, NOI, the cap-rate band, and the change-of-ownership PIP.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I figure out what my hotel is actually worth?",
    "Get me a broker opinion of value on my 92-room Holiday Inn Express.",
    "How do I get a confidential valuation on my hotel before deciding to sell?",
    "Can I take over an existing franchise agreement when I buy a branded hotel?",
    "What are Hampton Inn's PIP requirements typically like?",
    "What cap rate should I use to value my hotel?"
  ],
  answer: "Nobody can price a specific Hampton Inn or Holiday Inn Express from its flag and key count. The method is the same for every branded select-service hotel: buyer-ready NOI divided by a cap rate, less any change-of-ownership PIP. The Matthews Hotel Index for Q1 2026 puts select-service cap rates at 7.50 to 8.75 percent across 14 markets.[1]",
  takeaways: [
    "The flag does not set the value. NOI, the cap rate and the capital a buyer must spend after closing do.",
    "Brand fees are public. Hilton's 2025 Hampton FDD lists a 6 percent royalty and a 4 percent program fee, both on gross rooms revenue.[2]",
    "A sale is a change of ownership. Under the Hampton FDD the buyer applies for a new franchise, pays a $200,000 application fee and agrees to the brand's upgrade requests.[2]",
    "In the hypothetical below, a 110-key hotel is worth $11.29 million to $13.17 million across the index band, before any PIP deduction.",
    "We do not publish comparable sales by brand. Real comps need NOI and PIP status, which public records do not show."
  ],
  sections: [
    {
      h2: "Why can't anyone tell me what a Hampton Inn is worth?",
      lead: "Because two hotels under the same flag with the same room count can differ by millions in NOI and in required capital.",
      body: "A brand tells a buyer which reservation system fills the hotel and which standards it must meet. It does not tell the buyer the occupancy, the rate, the labor cost, the tax bill or the age of the rooms. Those set value. Any page or tool that quotes a price for your brand without your trailing twelve months is quoting an average of other people's hotels. The honest answer is a method and a range, then a number once the financials are on the table. The same point in per-key terms is at [What is my hotel worth per key?](/hotel-valuation/revpar-multiples-and-per-key)"
    },
    {
      h2: "What NOI will a buyer use for my hotel?",
      lead: "Your trailing twelve months, restated to include a management fee and an FF&E reserve whether or not you pay them today.",
      body: "A buyer rebuilds the income statement the way its lender will. That means a management fee even if you run the hotel yourself, and a reserve for furniture, fixtures and equipment even if you have not been funding one. It also means property tax at the buyer's likely assessed value where the state reassesses on sale. The line-by-line build is at [Walk me through the math on valuing a select-service hotel](/hotel-valuation/how-to-value-a-hotel). The worked example below uses expense ratios that are assumptions for illustration, not benchmarks. Replace every one with your own figures."
    },
    {
      h2: "How much do brand fees take out of my NOI?",
      lead: "Read your own franchise agreement. For new Hilton select-service agreements in 2025, the royalty and program fee together run 9.5 to 10 percent of gross rooms revenue.",
      body: "Franchise Disclosure Documents are public, and Item 6 lists the fees. Hilton's 2025 Hampton FDD, issued March 30, 2025, lists a monthly royalty of 6 percent of gross rooms revenue and a monthly program fee of 4 percent.[2] The 2025 Hilton Garden Inn FDD lists 5.5 percent and 4 percent.[3] The 2025 Home2 Suites FDD lists 6 percent and 3.5 percent.[4] Hilton reserves the right to change the program fee, and says the Hampton rate will not rise by more than 1 percent of gross rooms revenue over the term.[2] Those two lines are not the full cost of the flag. Item 6 also lists loyalty program, distribution, technology and training charges that vary with how guests book. An older agreement may carry different rates than the current FDD, so a buyer will underwrite the agreement it will sign, not the one you have."
    },
    {
      h2: "What cap rate applies to a branded select-service hotel?",
      lead: "Start with the select-service band for your market in the Matthews Hotel Index, then move within it for franchise term, PIP status and supply.",
      body: "Across the 14 markets in the index, select-service spans 7.50 to 8.75 percent for stabilized, PIP-current product.[1] HVS wrote in April 2026 that a normal cap rate for a stabilized or near-stabilized hotel remains near 8.0 to 8.5 percent, and that older limited-service, select-service and full-service hotels facing a big renovation will likely trend above that mark.[5] A long remaining franchise term, a recent renovation and limited new supply push toward the tight end. A short term, an open PIP or a new competitor under construction push toward the wide end. What moves the band itself is covered at [What is a good cap rate for a hotel in 2026?](/hotel-valuation/hotel-cap-rates)"
    },
    {
      h2: "What happens to my franchise when I sell?",
      lead: "The buyer does not inherit your agreement. It applies for its own, and the brand can attach a property improvement plan to the approval.",
      body: "Under the 2025 Hampton FDD, a sale is a Change of Ownership Transfer. The proposed buyer must submit a change of ownership application, pay the franchise application fee, sign the then-current form of franchise agreement and agree to Hilton's request for upgrades to the hotel.[2] The application fee for a change of ownership is $200,000, and the fee to prepare a PIP is $10,000, which Hilton may waive or credit.[2] A buyer treats the application fee and the PIP as part of its total cost, so both come out of what it can pay you. Other brands write their own terms. Read the FDD for your flag. How the PIP itself is priced is at [How does a PIP affect my hotel's value?](/hotel-valuation/pip-and-hotel-value)"
    },
    {
      h2: "Why don't you publish comps for my brand?",
      lead: "Because a real comp needs the NOI, the PIP status and the franchise term behind the price, and public records carry none of them.",
      body: "A deed or a press release shows a price and a key count. It does not show whether the buyer also took on a $2 million renovation, or whether the hotel was earning half of what yours earns. Subscriber databases fill some of that gap, and their licenses do not allow republication. So this page gives the method, the public fee facts and our own index band. A [broker opinion of value](/hotel-valuation/broker-opinion-of-value) applies real comparable trades to your hotel under a confidentiality agreement, which is the only setting where they are useful."
    }
  ],
  table: {
    caption: "Franchise fees on gross rooms revenue, Hilton select-service brands, 2025 Franchise Disclosure Documents",
    columns: [
      "Brand",
      "Monthly royalty fee",
      "Monthly program fee",
      "Change of ownership application fee"
    ],
    rows: [
      [
        "Hampton by Hilton",
        "6%[2]",
        "4%[2]",
        "$200,000[2]"
      ],
      [
        "Hilton Garden Inn",
        "5.5%[3]",
        "4%[3]",
        "$200,000[3]"
      ],
      [
        "Home2 Suites by Hilton",
        "6%[4]",
        "3.5%[4]",
        "$200,000[4]"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026, published by Matthews Hotel Markets, puts select-service cap rates at 7.50 to 8.75 percent across the 14 markets we cover, for stabilized, PIP-current hotels.[1]"
  },
  workedExample: {
    label: "Hypothetical: a 110-key branded select-service hotel",
    body: "Hypothetical. Every operating ratio here is an assumption for illustration. The two brand fee rates come from the 2025 Hampton FDD.[2]\n\n110 keys, 72 percent occupancy, $135 ADR. RevPAR equals 0.72 times $135, or $97.20. Rooms revenue equals $97.20 times 110 times 365, or $3,902,580. Other revenue at 3 percent of rooms is $117,077. Total revenue is $4,019,657.\n\nDepartmental expenses at 27 percent of revenue are $1,085,307. Undistributed expenses at 24 percent are $964,718. Royalty at 6 percent of rooms revenue is $234,155 and program fee at 4 percent is $156,103, together $390,258. Management fee at 3 percent of revenue is $120,590. Property tax and insurance are $310,000. FF&E reserve at 4 percent of revenue is $160,786. Total expenses are $3,031,659. NOI is $987,998, a 24.6 percent margin.\n\nAt 7.50 percent, value is $13.17 million, about $119,800 per key. At 8.25 percent, $11.98 million, about $108,900 per key. At 8.75 percent, $11.29 million, about $102,600 per key.\n\nNow add a change-of-ownership PIP at a hypothetical $15,000 per key, or $1,650,000. At 8.25 percent the buyer's number falls to $10.33 million, about $93,900 per key. One point of program fee on this hotel is $39,026 a year, which is about $473,000 of value at 8.25 percent. Small lines matter at a cap rate."
  },
  faq: [
    {
      q: "How much is my Hampton Inn worth?",
      a: "Its buyer-ready NOI divided by a cap rate, less any PIP the brand attaches to the sale. The Matthews Hotel Index shows select-service at 7.50 to 8.75 percent for Q1 2026.[1] Without your financials, any single figure is a guess."
    },
    {
      q: "Do Hampton Inns sell for more than other select-service brands?",
      a: "We do not publish brand rankings or brand-level comps. A stronger reservation system shows up in your RevPAR and NOI, and that is where a buyer pays for it."
    },
    {
      q: "What franchise fees does a Hampton pay?",
      a: "Hilton's 2025 Hampton FDD lists a 6 percent royalty and a 4 percent program fee on gross rooms revenue, plus other program and technology charges in Item 6.[2] Your own agreement controls."
    },
    {
      q: "Will the buyer take over my franchise agreement?",
      a: "Under the 2025 Hampton FDD, no. The buyer applies as a new franchisee, pays a $200,000 application fee, signs the then-current agreement and agrees to requested upgrades.[2] Other brands set their own terms."
    },
    {
      q: "What cap rate should I use for a select-service hotel?",
      a: "The band for your market in the Matthews Hotel Index, 7.50 to 8.75 percent across 14 markets in Q1 2026,[1] adjusted for franchise term, PIP status and supply. HVS puts a normal stabilized hotel near 8.0 to 8.5 percent.[5]"
    },
    {
      q: "Does a management fee count if I manage the hotel myself?",
      a: "Yes. Buyers and appraisers add a market management fee and an FF&E reserve, because the next owner's lender will. Leaving them out overstates value."
    },
    {
      q: "How do I get a real number for my hotel?",
      a: "Send trailing twelve month financials, the STR report if you have one, and the franchise agreement date. A broker opinion of value turns those into a range with stated comps and a stated cap rate. See /hotel-valuation/broker-opinion-of-value."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6 and 17",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "2025 Hilton Garden Inn Franchise Disclosure Document (issued March 30, 2025), Items 5 and 6",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hilton-Garden-Inn.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "2025 Home2 Suites Franchise Disclosure Document (issued March 30, 2025), Items 5 and 6",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Home2.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 5,
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
      "/hotel-valuation/pip-and-hotel-value",
      "/hotel-valuation/revpar-multiples-and-per-key",
      "/hotel-valuation/select-service-vs-full-service"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/cap-rate",
      "/glossary/pip",
      "/glossary/revpar"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Request a confidential value range for your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets values branded select-service hotels from the owner's own financials and the Matthews Hotel Index band, not from the name on the sign."
};

export default page;
