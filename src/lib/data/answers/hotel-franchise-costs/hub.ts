/**
 * How much does a hotel franchise cost?
 * Cluster hub: /hotel-franchise-costs
 *
 * Written 2026-09-18. Every figure was read in its source on that date.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "index",
  cluster: "hotel-franchise-costs",
  isHub: true,
  title: "How Much Does a Hotel Franchise Cost? (2026 FDDs)",
  h1: "How much does a hotel franchise cost?",
  description: "What a hotel franchise costs in 2026, read from the brands' public Franchise Disclosure Documents: application fees, royalties, program fees and Item 7.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a hotel franchise cost?",
    "How much does a Hampton Inn franchise cost?",
    "What are hotel franchise fees as a percent of revenue?",
    "What is in a hotel Franchise Disclosure Document?"
  ],
  answer: "A hotel franchise costs an application fee up front, a percentage of rooms revenue every month, and the cost of building or renovating to the brand's standard. Hilton's Hampton disclosure document issued March 30, 2026 lists a $100,000 application fee, a 6 percent royalty, a 4 percent program fee, and an estimated initial investment of $17,043,739 to $24,732,532 for an 89-room hotel, before land.[1]",
  takeaways: [
    "The numbers live in the brand's Franchise Disclosure Document (FDD). Items 5 and 6 list fees, Item 7 estimates the initial investment, Item 17 covers term and transfer, and Item 19 holds any performance figures.[1]",
    "Hampton's 2026 FDD charges a 6 percent monthly royalty and a 4 percent monthly program fee, both on gross rooms revenue.[1]",
    "Buying an existing Hampton costs more to apply for than building one: the change of ownership application fee is $200,000, against $100,000 for new development or conversion.[1]",
    "Item 7 totals exclude real estate, market studies, insurance and interest, and they do not separately price a conversion or change of ownership.[1]",
    "The FDD is the franchisor's document and fees change every year. Get the current FDD from the franchisor before you rely on any figure here."
  ],
  sections: [
    {
      h2: "Where do hotel franchise costs come from?",
      lead: "From the Franchise Disclosure Document, which a franchisor gives a prospective franchisee before a sale.",
      body: "The FDD has 23 numbered items. Hilton's own guide at the front of the 2026 Hampton FDD points a reader to four of them: Items 5 and 6 list the fees paid to the franchisor or at its direction, Item 7 lists the initial investment to open, Item 8 describes required suppliers, and Item 19 may give information about sales, costs, profits or losses.[1] Term, renewal, termination and transfer sit in Item 17. The term is defined at [franchise disclosure document](/glossary/franchise-fdd).\n\nThe FDD is written by the franchisor. It is a disclosure, not an offer, and it is reissued every year. Every figure on this page is quoted from the document named in the sources, with the item and the page. Ask the franchisor for the current FDD before you sign anything."
    },
    {
      h2: "What are the initial fees?",
      lead: "An application fee, a property improvement plan fee on an existing hotel, and technology, training and opening charges.",
      body: "Hampton's 2026 Item 5 lists a franchise application fee of $100,000 plus $400 for each guest room over 150 for new development or conversion, $200,000 for a change of ownership and $100,000 for re-licensing. The property improvement plan (PIP) fee is $10,000. Computer system hardware, software and installation runs $27,590 to $83,959, training program fees run $5,000 to $17,500, and the opening process services fee is $6,000.[1] Hilton states that in 2025 franchisees paid application fees from $0 to $100,000 for new development or conversion and $25,000 to $200,000 for a change of ownership.[1] The PIP itself is defined at [PIP](/glossary/pip)."
    },
    {
      h2: "What are the ongoing fees?",
      lead: "A royalty and a program fee on gross rooms revenue, plus loyalty, technology and distribution charges.",
      body: "Hampton's 2026 Item 6 lists a monthly royalty fee of 6 percent of gross rooms revenue and a monthly program fee of 4 percent of gross rooms revenue, and Hilton may change the program fee.[1] The Hilton Honors charge is 4.6 percent of total eligible guest folio, waived for stays where the guest enrolls at the property. The Hilton Advance fee is 1.35 percent of eligible digital direct revenue, capped at $30 per stay.[1] These percentages apply to different bases, so they cannot be added into one rate."
    },
    {
      h2: "How do I pay for it?",
      lead: "With equity and a loan sized to the hotel's income. The franchise costs sit inside the project budget your lender underwrites.",
      body: "As of September 17, 2026, Prime is 7.00 percent and the SBA 7(a) maximum allowable rate is 10.00 percent.[2] Lenders do not publish their spreads or leverage limits. Start with [brand conversion financing](/hotel-financing/brand-conversion-financing) and [PIP and renovation loans](/hotel-financing/pip-and-renovation-loans). The trade between a flag and independence is at [Should I buy a branded or independent hotel?](/buy-a-hotel/branded-vs-independent), and brand contributions are defined at [key money](/glossary/key-money). Flagged hotels on the market are listed at [Hampton Inn hotels for sale](/hotels-for-sale/hampton-inn) and [Hilton hotels for sale](/hotels-for-sale/hilton)."
    }
  ],
  table: {
    caption: "Hampton by Hilton franchise fees, 2026 FDD issued March 30, 2026 (Items 5, 6 and 7)",
    columns: [
      "Fee",
      "Amount",
      "Where in the FDD"
    ],
    rows: [
      ["Application fee, new development or conversion", "$100,000 plus $400 per room over 150[1]", "Item 5, p. 15"],
      ["Application fee, change of ownership", "$200,000[1]", "Item 5, p. 16"],
      ["PIP fee", "$10,000[1]", "Item 5, p. 16"],
      ["Monthly royalty fee", "6% of gross rooms revenue[1]", "Item 6, p. 20"],
      ["Monthly program fee", "4% of gross rooms revenue[1]", "Item 6, p. 20"],
      ["Hilton Honors", "4.6% of total eligible guest folio[1]", "Item 6, p. 23"],
      ["Estimated initial investment, 89-room Hampton Inn", "$17,043,739 to $24,732,532, excluding real estate[1]", "Item 7, p. 35"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet records Prime at 7.00% effective September 17, 2026 and the SBA 7(a) maximum allowable rate at 10.00%, the indexes a loan for a franchise fee, a PIP or a conversion is priced against.[2]"
  },
  workedExample: {
    label: "Hypothetical: a year of royalty and program fees on assumed rooms revenue",
    body: "Hypothetical. Assume a Hampton Inn earns $3,000,000 of gross rooms revenue in a year. The revenue figure is an assumption for arithmetic, not a forecast and not a figure from the FDD.\n\nMonthly royalty fee at 6 percent: $3,000,000 x 0.06 = $180,000.[1]\n\nMonthly program fee at 4 percent: $3,000,000 x 0.04 = $120,000.[1]\n\nTogether: $300,000, or 10 percent of rooms revenue. Hilton Honors charges, technology fees, distribution charges and training come on top and depend on the hotel's guest mix and booking channels, so they are not estimated here."
  },
  faq: [
    {
      q: "How much does a Hampton Inn franchise cost?",
      a: "Hilton's 2026 Hampton FDD, issued March 30, 2026, lists a $100,000 application fee, a 6 percent royalty, a 4 percent program fee, and an estimated initial investment of $17,043,739 to $24,732,532 for an 89-room hotel, excluding real estate.[1]"
    },
    {
      q: "What percent of revenue goes to the brand?",
      a: "On Hampton's 2026 schedule, 6 percent of gross rooms revenue as royalty and 4 percent as program fee. Loyalty, technology and distribution charges are billed on other bases on top of that.[1]"
    },
    {
      q: "Does the Item 7 figure include the land?",
      a: "No. Hampton's 2026 Item 7 states the totals do not include real estate costs, market studies, insurance or interest.[1]"
    },
    {
      q: "Does a buyer pay a franchise fee when buying an existing branded hotel?",
      a: "Yes. Hampton's 2026 FDD lists a $200,000 change of ownership application fee and a $10,000 PIP fee. If the change of ownership does not occur, the application fee is refunded less a $7,500 processing fee.[1]"
    },
    {
      q: "Do franchise fees change?",
      a: "Yes. The FDD is reissued every year, and Hampton's 2026 document says Hilton may change the monthly program fee rate. Get the current FDD from the franchisor.[1]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "2026 Hampton Franchise Disclosure Document (issued March 30, 2026): How to Use This FDD; Item 5, pp. 15-17; Item 6, pp. 20-23; Item 7, pp. 33-36",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
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
      "/hotel-financing/brand-conversion-financing",
      "/hotel-financing/pip-and-renovation-loans",
      "/buy-a-hotel/branded-vs-independent"
    ],
    glossary: [
      "/glossary/franchise-fdd",
      "/glossary/key-money",
      "/glossary/pip"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk through a flag change or a branded purchase",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances franchised hotels, so we read these disclosure documents alongside owners and buyers."
};

export default page;
