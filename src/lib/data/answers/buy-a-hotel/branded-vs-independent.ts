/**
 * Should I buy a branded or independent hotel?
 * Answer page: /buy-a-hotel/branded-vs-independent
 *
 * Written 2026-09-18. Every figure was read in its source on that date.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "branded-vs-independent",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "Branded vs Independent Hotel: Which to Buy?",
  h1: "Should I buy a branded or independent hotel?",
  description: "What a hotel brand costs, from public franchise disclosure documents, what it delivers, what it takes to leave, and how lenders treat each.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Should I buy an independent hotel or a branded hotel?",
    "Can I take over an existing franchise agreement when I buy a branded hotel?",
    "How do I buy my first hotel?",
    "Can I 1031 exchange into a hotel and then convert it to a different brand?",
    "What's it cost to convert a hotel from one brand to another?",
    "Do hotel loans require a franchise comfort letter?"
  ],
  answer: "A brand sells you demand and charges a share of rooms revenue for it. Hilton's 2025 Hampton disclosure lists a 6 percent royalty plus a 4 percent program fee, and reports an average RevPAR index of 121.0 for comparable Hamptons in 2024.[1] An independent keeps those fees and carries its own marketing. As of September 2026, no lender publishes different terms for either.[2]",
  takeaways: [
    "The fees are public. Hampton: 6 percent royalty plus 4 percent program fee on gross rooms revenue. Tapestry: 5 plus 4. Spark: 5.5 plus 3.0 to 3.5.[1][3][4]",
    "There is more than the headline. Hampton also charges 4.9 percent of the eligible folio on Hilton Honors stays, and Hilton may raise the program fee by up to 1 point over the term.[1]",
    "Hilton reports that comparable Hamptons averaged a RevPAR index of 121.0 in 2024, with a range from 39.5 to 334.4. A flag is not a guarantee.[1]",
    "Leaving early costs money. If Hilton terminates a Hampton agreement after year two, damages are the hotel's average monthly royalty times 60.[1]",
    "Lenders do not publish separate terms for branded and independent hotels.[2]"
  ],
  sections: [
    {
      h2: "What does a hotel brand actually cost?",
      lead: "On Hilton's 2025 Hampton schedule, 10 percent of gross rooms revenue before any other charge: a 6 percent monthly royalty and a 4 percent monthly program fee.[1]",
      body: "Item 6 of a Franchise Disclosure Document lists every recurring fee, and it is the first thing a buyer of a branded hotel should read. For Hampton, the royalty is 6 percent of gross rooms revenue and the program fee, which pays for the reservation system, marketing and related programs, is 4 percent.[1] Hilton may change the program fee, but not by more than 1 percent of gross rooms revenue above the current rate over the term of the agreement.[1]\n\nThe list goes on past those two lines. Hampton charges 4.9 percent of the total eligible guest folio on Hilton Honors stays, monthly technology fees, and other program charges.[1] The disclosure also says Hilton occasionally reduces the royalty for multi-unit or more experienced franchisees and for conversions, and that it agreed to modify the royalty in 66 instances in 2024. For some buyers the schedule is a starting point.[1]\n\nOther Hilton brands price differently. Tapestry Collection lists a 5 percent royalty and a 4 percent program fee.[3] Spark, which Hilton describes as competing in the economy segment, lists a 5.5 percent royalty and a program fee of 3.0 to 3.5 percent.[4] We cite Hilton's documents because Hilton posts them publicly. Other franchisors prepare a disclosure document in the same item-by-item format, so ask the brand's development team for the current one and compare Item 6 line by line."
    },
    {
      h2: "What do I get for the fees?",
      lead: "A reservation system, a loyalty program and a name travelers already know. Hilton's own disclosure puts a number on it for Hampton, with a wide range around it.[1]",
      body: "Item 19 of the Hampton disclosure reports results for comparable hotels. In 2024 the average occupancy index was 109.8 and the average RevPAR index was 121.0, where 100 means a hotel takes its fair share against its competitive set.[1] Average occupancy for comparable hotels was 71.7 percent.[1]\n\nRead the range as closely as the average. RevPAR index across comparable Hamptons ran from 39.5 to 334.4 in 2024, and occupancy ran from 30.5 percent to 96.6 percent.[1] Hilton states that individual results may differ and that there is no assurance a franchisee will reach those levels.[1] A flag raises the odds of a full house. It does not fix a bad location or a tired building.\n\nThe disclosure does not publish the share of room nights that comes from Hilton Honors members or from Hilton's reservation channels. If that number matters to your underwriting, ask the seller for the hotel's own channel mix report. The index terms are defined at [RevPAR](/glossary/revpar)."
    },
    {
      h2: "What does a brand require from a buyer?",
      lead: "A new application, a new franchise agreement, the upgrades the brand asks for, and management the brand approves.[1]",
      body: "A buyer does not inherit the seller's franchise. Under Hilton's 2025 Hampton agreement, the buyer submits a change of ownership application, pays the application fee, signs the current form of franchise agreement and agrees to the brand's request for upgrades, which arrive as a property improvement plan.[1] The schedule lists a $200,000 application fee for a change of ownership. Tapestry lists $150,000 and Spark lists $75,000.[1][3][4] In a change of ownership, the term is generally the remaining term of the existing agreement, or another term Hilton approves.[1]\n\nThe PIP is usually the biggest number on this list, and it is specific to the building. It is explained at [PIP](/glossary/pip), and paying for it is covered at [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans). An independent hotel has no PIP. It also has no one requiring the owner to reinvest, which is how independents fall behind."
    },
    {
      h2: "What does it cost to leave a brand?",
      lead: "Under Hilton's 2025 Hampton disclosure, liquidated damages after the second year equal the hotel's average monthly royalty fees multiplied by 60.[1]",
      body: "The formula matters to a buyer who plans to reflag. If Hilton terminates the agreement after the second anniversary of opening and before the last 60 months of the term, damages are the hotel's average monthly royalty multiplied by 60. Inside the last 60 months, the multiplier is the number of months remaining.[1] The worked example below puts dollars on it. If your plan is to buy a branded hotel and convert it, price the exit from the old flag, the application fee for the new one and the conversion PIP before you bid."
    },
    {
      h2: "What does an independent hotel have to do for itself?",
      lead: "Everything the program fee pays for: distribution, marketing, a booking engine, revenue management and guest loyalty.",
      body: "An independent keeps the royalty and the program fee, and it spends part of that money replacing what they bought. It pays commissions to online travel agencies on the bookings it cannot generate directly, and it builds its own reputation one review at a time. Independents tend to work where the location or the building is the draw: a resort town, a historic downtown, a destination a traveler searches for by name. They are hardest to run in highway and suburban markets, where travelers book by brand and by points. No public dataset reports what independents spend on distribution, so ask the seller for the actual channel mix and commission expense."
    },
    {
      h2: "Do lenders treat branded and independent hotels differently?",
      lead: "No lender publishes separate terms. Underwriting turns on the hotel's income history, its market and who operates it.[2]",
      body: "Our September 2026 rate sheet marks conventional spreads and leverage as not yet published for every hotel segment, because lenders do not print them.[2] In practice a brand helps the credit story in two ways: the lender can see index data against a competitive set, and the reservation system gives it some comfort about demand if the operator changes. A branded loan also brings the franchisor into the file. Hilton issues a lender comfort letter only on request and only if the request meets its qualifications, for a $3,500 processing fee.[1]\n\nAn independent with a long record of stable income and a proven operator can be financed. A first-time owner buying an independent with thin records should expect a harder conversation. SBA's procedures list hotels, motels and other lodging facilities as limited or special purpose property and draw no line between flagged and unflagged.[6] The options are compared at [Which lenders finance hotels?](/hotel-financing/hotel-lenders-by-type)."
    }
  ],
  table: {
    caption: "Branded versus independent hotel ownership, with published 2025 Hilton fee schedules",
    columns: [
      "Category",
      "Branded",
      "Independent"
    ],
    rows: [
      [
        "Royalty",
        "Hampton 6%, Tapestry 5%, Spark 5.5% of gross rooms revenue[1][3][4]",
        "None"
      ],
      [
        "Program or marketing fee",
        "Hampton 4%, Tapestry 4%, Spark 3.0% to 3.5% of gross rooms revenue[1][3][4]",
        "None. The owner funds its own marketing and distribution"
      ],
      [
        "Loyalty program charge",
        "Hampton: 4.9% of total eligible folio on Hilton Honors stays[1]",
        "None, and no loyalty program unless the owner builds one"
      ],
      [
        "Fee at purchase",
        "Change of ownership application: Hampton $200,000, Tapestry $150,000, Spark $75,000[1][3][4]",
        "None"
      ],
      [
        "Capital required by a third party",
        "A PIP on change of ownership, scope set by the brand[1]",
        "None required. Reinvestment is the owner's call"
      ],
      [
        "Published performance",
        "Hampton 2024 average RevPAR index 121.0, range 39.5 to 334.4[1]",
        "No public dataset"
      ],
      [
        "Who can operate it",
        "The owner or a management company the brand approves[1]",
        "Anyone the owner and lender accept"
      ],
      [
        "Cost to exit",
        "Hampton after year two: average monthly royalty times 60[1]",
        "None"
      ],
      [
        "Lender terms",
        "Not published[2]",
        "Not published[2]"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "Matthews Hotel Markets tracks pricing by segment, not by flag. The Matthews Hotel Index for Q1 2026 puts select-service cap rates in a 7.50 to 8.75 percent band across the 14 markets we cover.[5]"
  },
  workedExample: {
    label: "Hypothetical: what a Hampton flag costs on $3.0M of rooms revenue",
    body: "Hypothetical. An 80-key Hampton Inn with $3,000,000 of gross rooms revenue.\n\nRoyalty at 6 percent is $180,000. Program fee at 4 percent is $120,000. Together that is $300,000 a year, or 10 percent of rooms revenue, before the Hilton Honors charge, technology fees and other Item 6 lines.[1]\n\nNow the comparison. Suppose the same building as an independent would produce $2,600,000 of rooms revenue. That figure is an assumption for the arithmetic. The flag then adds $400,000 of revenue and costs $300,000 in the two main fees. Revenue is not profit: the extra room nights also carry housekeeping, supplies and credit card costs. On these assumptions the flag roughly pays for itself and no more. If the independent would do $2,200,000, the flag adds $800,000 for the same $300,000 and the answer is clear. The whole decision rests on that one estimate, which is why the competitive set in the STR report deserves more time than the fee table.\n\nThe exit. Average monthly royalty is $180,000 divided by 12, or $15,000. If Hilton terminated the agreement after year two, liquidated damages would be $15,000 times 60, or $900,000.[1]"
  },
  faq: [
    {
      q: "How much are hotel franchise fees?",
      a: "They vary by brand. Hilton's 2025 disclosures list a 6 percent royalty plus a 4 percent program fee for Hampton, 5 plus 4 for Tapestry Collection, and 5.5 plus 3.0 to 3.5 for Spark, all on gross rooms revenue.[1][3][4]"
    },
    {
      q: "Is a branded hotel easier to finance?",
      a: "No lender publishes separate terms.[2] A brand gives the lender index data and a reservation system behind the income. An independent with a long, stable record and a proven operator can also be financed."
    },
    {
      q: "Can I keep the seller's franchise agreement?",
      a: "Not under Hilton's 2025 Hampton agreement. The buyer applies, pays the application fee, signs the current form of agreement and agrees to requested upgrades. The term is generally the remaining term of the existing agreement.[1]"
    },
    {
      q: "Does a brand guarantee better performance?",
      a: "No. Hilton reports an average 2024 RevPAR index of 121.0 for comparable Hamptons, with individual hotels from 39.5 to 334.4, and states there is no assurance a franchisee will reach those levels.[1]"
    },
    {
      q: "What does it cost to drop a flag?",
      a: "Under the 2025 Hampton disclosure, if Hilton terminates after year two and before the last 60 months, damages are the hotel's average monthly royalty times 60. In the last 60 months, it is the months remaining.[1]"
    },
    {
      q: "Can I buy a branded hotel and convert it to a different brand?",
      a: "Yes, at a cost. Price the old brand's termination damages, the new brand's application fee and the conversion PIP before you bid. Each figure comes from the two brands' own disclosure documents."
    },
    {
      q: "When does an independent hotel make sense?",
      a: "When the location or the building is what guests search for, such as a resort town or a historic downtown, and the owner can run distribution and marketing well. It is harder in highway and suburban markets, where travelers book by brand."
    }
  ],
  sources: [
    {
      n: 1,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6, 15, 17 and 19",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "2025 Tapestry Collection by Hilton Franchise Disclosure Document (issued March 30, 2025), Items 5 and 6",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Tapestry.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "2025 Spark by Hilton Franchise Disclosure Document (issued March 30, 2025), Items 1, 5 and 6",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Spark.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: Limited or Special Purpose Property, which lists hotels (pp. 354-355)",
      url: "https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/how-much-money-do-you-need",
      "/buy-a-hotel/due-diligence-checklist",
      "/buy-a-hotel/first-hotel-no-experience"
    ],
    glossary: [
      "/glossary/revpar",
      "/glossary/pip",
      "/glossary/adr"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/rates"
    ]
  },
  cta: {
    label: "Ask us about a specific hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets has closed sales of both branded and independent hotels, so we have no stake in which one you buy."
};

export default page;
