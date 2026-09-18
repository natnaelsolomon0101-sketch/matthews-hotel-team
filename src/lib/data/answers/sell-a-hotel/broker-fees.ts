/**
 * How much does it cost to sell a hotel through a broker?
 * Answer page: /sell-a-hotel/broker-fees
 *
 * Converted from geo/07-pages/sell-a-hotel__broker-fees.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "broker-fees",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Hotel Broker Fees: What Selling Costs",
  h1: "How much does it cost to sell a hotel through a broker?",
  description: "How hotel brokerage fees are structured in 2026, what is negotiable, whether retainers are normal, and the full cost of selling beyond the commission.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does it cost to sell a hotel through a broker?",
    "What's a typical hotel broker commission?",
    "Do hotel brokers charge a retainer or only a success fee?",
    "What's the typical hotel broker fee?",
    "Who pays the hotel broker, the buyer or the seller?",
    "Is a hotel broker fee negotiable?",
    "What are the total closing costs when selling a hotel?"
  ],
  answer: "Hotel brokerage is usually paid as a success fee at closing, quoted as a percentage of the sale price. Broker pay is not set by law and is negotiable.[1] It is not the whole cost. Title, legal, transfer taxes and loan payoff costs add up. A brand transfer adds an application fee, $0 to $200,000 on Hampton deals in 2024, which the buyer pays.[2]",
  takeaways: [
    "The fee is a percentage of price, paid at closing. In our experience the percentage falls as deal size rises.",
    "The seller pays it, and it covers the buy-side broker when there is one.",
    "It is negotiable, because broker pay is not set by law.[1] So is what you get for it, which matters more.",
    "Retainers are uncommon on marketed dispositions and more common on complex or confidential assignments.",
    "Commission is only one line. Budget title, transfer tax, legal and any loan payoff cost separately."
  ],
  sections: [
    {
      h2: "How is a hotel broker paid?",
      lead: "A success fee at closing, calculated as a percentage of the sale price, with no fee owed if the deal does not close.",
      body: "That structure aligns the broker's incentive with the seller's: the broker is paid for a closed transaction at the price and terms achieved, not for hours logged. Some engagements also include reimbursable, out-of-pocket marketing costs (photography, a data room platform, travel for tours), agreed in writing up front and typically small relative to the commission."
    },
    {
      h2: "What percentage is typical, and how does it scale?",
      lead: "There is no single published industry rate. Broker pay is not set by law, and any specific percentage should be stated in writing before engagement, not assumed.[1]",
      body: "Owners sometimes hear a number from a prior deal, a friend, or a general commercial real estate convention and assume it applies. Hotel brokerage fee schedules vary by brokerage, by deal complexity, and by price, and the National Association of REALTORS Code of Ethics requires members to tell sellers that broker compensation is not set by law and is fully negotiable.[1] The honest answer is to ask for the fee in writing before signing an engagement letter, and to ask what services sit behind it, covered in the last section below."
    },
    {
      h2: "Who pays it, buyer or seller?",
      lead: "The seller pays the commission at closing, and that fee typically covers a cooperating buyer's broker when one is involved.",
      body: "This is standard practice in hotel investment sales: the listing broker's agreement with the seller sets the total fee, and when a buyer arrives with their own broker, the listing broker splits a cooperating commission out of that same fee rather than charging the seller twice. A buyer who is unrepresented does not reduce the seller's fee automatically; that is itself a negotiation point."
    },
    {
      h2: "Is it negotiable?",
      lead: "Yes, and so is the scope of work behind it, which is the part owners negotiate too rarely.",
      body: "Negotiating the percentage down without asking what marketing, underwriting depth, and reporting cadence come with it can cost more than it saves. A broker who cuts the fee by discounting the story, fewer buyer conversations, a thinner CIM, less reporting, is not actually cheaper. The nine questions worth asking before signing, including this one, are at [How do I choose a hotel broker?](/sell-a-hotel/how-to-choose-a-hotel-broker)"
    },
    {
      h2: "Do brokers charge retainers?",
      lead: "Not commonly on a standard marketed sale; retainers show up more often on confidential, complex or distressed assignments where the broker's time commitment is heavier upfront.",
      body: "An owner asked for a retainer on a routine marketed disposition should ask why: it can be a legitimate reflection of unusual complexity, or it can be a sign the broker is not confident enough in the assignment to work purely on success."
    },
    {
      h2: "What else do I pay at closing?",
      lead: "Title insurance and escrow, transfer taxes, seller's legal fees, prorations, and, on a CMBS loan, defeasance.",
      body: "The table above lays these out with who typically pays and how negotiable each one is. Transfer taxes vary by state and can stack a local rate on a state rate. Washington, for example, charges a graduated state rate by sale price and adds a local rate on top.[3] Check the specific jurisdiction rather than assuming a percentage. Defeasance, the usual way to retire a CMBS loan before maturity, costs whatever a bond portfolio big enough to cover the remaining loan payments costs, plus fees, and its terms can only be negotiated before the loan is made.[4] On a loan with years left to run it can be a large line, shown in the worked example below. For federal income tax purposes, selling expenses reduce the gain on the sale.[5]"
    },
    {
      h2: "What should the fee actually buy me?",
      lead: "Underwriting, a buyer list, negotiating power from a call-for-offers process, and a document package that survives due diligence.",
      body: "A fee is worth paying when it buys real underwriting work (the person doing it, by name, not a template), a buyer list specific to the asset's chain scale and price band, and a marketing and call-for-offers process that creates competitive tension. A cheap fee attached to none of that usually costs more in a lower sale price than it saves in commission."
    }
  ],
  table: {
    caption: "Selling costs on a hotel, beyond the brokerage fee",
    columns: [
      "Cost",
      "Who pays",
      "Typical size",
      "Negotiable?"
    ],
    rows: [
      [
        "Brokerage fee",
        "Seller",
        "Percentage of price",
        "Yes, not set by law[1]"
      ],
      [
        "Title insurance and escrow",
        "Varies by state and custom",
        "Basis points on price",
        "Somewhat"
      ],
      [
        "Transfer tax or documentary stamps",
        "Varies by state",
        "State and local specific[3]",
        "No"
      ],
      [
        "Seller legal",
        "Seller",
        "Hourly, deal-size dependent",
        "By scope"
      ],
      [
        "Franchise transfer and application fees",
        "Buyer applies and pays the brand[2]",
        "Per the brand's FDD; Hampton reported $0 to $200,000 in 2024[2]",
        "Sometimes"
      ],
      [
        "Prorations and FF&E / inventory settlement",
        "Split at closing",
        "Deal specific",
        "By contract"
      ],
      [
        "Loan prepayment or defeasance",
        "Seller",
        "Set by bond prices at payoff, plus fees[4]",
        "No"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 gives the cap-rate bands that drive price, and price drives where a fee lands.[6]"
  },
  workedExample: {
    label: "Hypothetical: total cost of sale on a $17.0 million hotel",
    body: "Hypothetical, with each line labeled as an assumption rather than a market rate. Sale price: $17.00 million. Brokerage fee at an assumed 2.0 percent: $340,000. Title, escrow and survey, assumed at 0.3 percent: $51,000. Transfer tax, assumed at 0.2 percent, which varies enormously by state and should be checked locally: $34,000. Seller legal, assumed: $45,000. Defeasance on a CMBS loan, assumed: $260,000. Total costs: $730,000, or 4.3 percent of price. The brokerage fee is 47 percent of that total. Owners who negotiate the fee hard and ignore the defeasance number are optimizing the smaller line."
  },
  faq: [
    {
      q: "What is a typical hotel broker commission?",
      a: "There is no single published industry rate. Broker pay is not set by law, so the fee is a negotiated percentage of price.[1] Ask any broker to quote their fee in writing before you engage."
    },
    {
      q: "Who pays the hotel broker fee?",
      a: "The seller, at closing, out of sale proceeds. That fee typically covers a cooperating buyer's broker when one represents the purchaser."
    },
    {
      q: "Is a hotel broker fee negotiable?",
      a: "Yes. So is the scope behind it: what marketing, underwriting and reporting the fee actually buys. Negotiate both together, not the percentage alone."
    },
    {
      q: "Do hotel brokers charge a retainer?",
      a: "Not commonly on a standard marketed sale, where the fee is success-based. Retainers appear more often on confidential, complex or distressed assignments."
    },
    {
      q: "When is the broker fee paid?",
      a: "At closing, out of sale proceeds, as a success fee. No fee is owed if the transaction does not close."
    },
    {
      q: "Does the fee cover the buyer's broker too?",
      a: "Typically yes, when a buyer's broker is involved. The listing broker's fee usually includes a cooperating commission split with the buy-side broker."
    },
    {
      q: "What are total closing costs on a hotel sale?",
      a: "Commission plus title, escrow, transfer tax, seller legal, prorations and, on a CMBS loan, defeasance. Budget each line separately; the worked example above shows how they add up."
    }
  ],
  sources: [
    {
      n: 1,
      label: "2026 Code of Ethics and Standards of Practice (Article 1; Standards of Practice 1-3 and 1-12)",
      url: "https://www.nar.realtor/sites/default/files/2025-12/2026-COE-Standards-of-Practice-2026-01-01.pdf",
      publisher: "National Association of REALTORS",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6 and 17 and Franchise Agreement section 12.2.2",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Real estate excise tax",
      url: "https://dor.wa.gov/taxes-rates/other-taxes/real-estate-excise-tax",
      publisher: "Washington State Department of Revenue",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Defeasance FAQs",
      url: "https://cf.com/insights/defeasance-frequently-asked-questions",
      publisher: "Chatham Financial",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Publication 544, Sales and Other Dispositions of Assets",
      url: "https://www.irs.gov/publications/p544",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-17"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/how-to-choose-a-hotel-broker",
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/documents-needed"
    ],
    glossary: [
      "/glossary/bov",
      "/glossary/cap-rate"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Ask us what we charge and what it buys",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets quotes its fee in writing before engagement, alongside what the fee covers."
};

export default page;
