/**
 * Should I sell my hotel before the franchise agreement expires?
 * Answer page: /sell-a-hotel/franchise-agreement-expiration
 *
 * Written 2026-09-18. Every franchise term below is read from Hilton's public
 * 2025 Hampton Franchise Disclosure Document, used as one worked example of a
 * brand contract. Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "franchise-agreement-expiration",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Sell Before Your Hotel Franchise Agreement Expires?",
  h1: "Should I sell my hotel before the franchise agreement expires?",
  description: "What an expiring franchise agreement does to a hotel sale: no renewal right, re-licensing, the buyer's new agreement, PIPs, fees and liquidated damages.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What happens to my staff and franchise agreement when I sell my hotel?",
    "Can I take over an existing franchise agreement when I buy a branded hotel?",
    "How often do I have to do a PIP on a branded hotel?",
    "Does having an open PIP kill my deal if I'm trying to sell?",
    "How does a PIP affect the sale price of a hotel?",
    "My Hampton Inn franchise agreement expires in three years. Should I sell now or renew first?",
    "What happens when a hotel franchise agreement expires?"
  ],
  answer: "Usually decide two to three years out, not in the final months. Hilton's Hampton disclosure document, issued March 30, 2025, gives the owner no right to renew. Re-licensing is at the brand's sole discretion and carries a $100,000 application fee and a PIP.[1] A buyer signs a new agreement and gets a PIP too, so the real comparison is who funds the renovation and keeps the upside.",
  takeaways: [
    "A Hampton franchise agreement has no renewal right. At expiration the hotel is re-licensed on the brand's terms or it loses the flag.[1]",
    "Selling and re-licensing both trigger a PIP. You cannot avoid the renovation by choosing one over the other; you choose who pays for it.",
    "In a sale the buyer, not the seller, applies to the brand. Hampton's change of ownership application fee is $200,000, against $100,000 for re-licensing.[1]",
    "A short remaining term cuts both ways. It worries a buyer's lender, and it shrinks the liquidated damages a buyer would owe to change flags.[1]",
    "Allow about 24 weeks to sell in our playbook, including the brand's 60-day review, and count back from the expiration date.[2]"
  ],
  sections: [
    {
      h2: "What actually happens when a hotel franchise agreement expires?",
      lead: "The license ends. There is no automatic renewal, and the hotel must stop operating under the brand unless the franchisor agrees to a new license.",
      body: "Owners often assume a franchise agreement renews the way a lease option does. The Hampton disclosure document says otherwise in plain words: \"You do not have the right to renew or extend the Franchise Agreement.\" If Hilton agrees, in its sole discretion, to re-license the hotel, the owner may be asked to sign a contract with materially different terms and must comply with any PIP conditions Hilton specifies.[1]\n\nIf there is no new license, the obligations at expiration are the same as at termination. The owner must stop operating as a system hotel, stop using the marks, remove the signs and brand decor, return the manual, and hand over brand-related domain names and listings.[1] The hotel leaves the reservation system on that date.\n\nTerm lengths in the same document show how long the runway normally is: generally 22 years for new construction, and 10 to 20 years from opening for a conversion.[1] Other brands write different terms, and you can look them up. The FTC Franchise Rule requires every franchisor to disclose renewal, termination and transfer terms in Item 17 of its disclosure document, and fees in Items 5 and 6.[4] Then read the term and transfer sections of your own agreement, because that contract controls, not this example."
    },
    {
      h2: "What does re-licensing cost if I keep the hotel?",
      lead: "An application fee, a PIP fee, a new contract on current terms, and the renovation the PIP requires.",
      body: "Hampton's 2025 disclosure document lists a $100,000 franchise application fee for re-licensing and a $10,000 fee to prepare the PIP. It reports that franchisees actually paid between $50,000 and $100,000 in re-licensing application fees in 2024.[1] The new agreement is the then-current form, so fees can differ from the agreement signed years ago. The current Hampton form charges a monthly royalty of 6 percent of gross rooms revenue and a monthly program fee of 4 percent.[1]\n\nThe fee is the small number. The PIP is the large one, and the disclosure document does not price it because it is set hotel by hotel. How lenders fund that work is covered at `/hotel-financing/pip-and-renovation-loans`."
    },
    {
      h2: "What does the buyer face if I sell instead?",
      lead: "The buyer does not inherit your agreement. It applies as a new franchisee, signs the current form of agreement, and accepts its own PIP.",
      body: "Under the Hampton agreement, a sale is a change of ownership transfer. The seller gives 60 days' written notice and must not be in default. The buyer submits a change of ownership application, pays the application fee, meets Hilton's requirements for new franchisees, signs the then-current franchise agreement, and agrees to the upgrades Hilton requests. Hilton has 60 days from the completed application to consent, and consent may not be unreasonably withheld. At closing, the seller's agreement ends and the buyer's begins.[1]\n\nThe listed application fee for a change of ownership is $200,000, and the document reports that franchisees paid between $0 and $200,000 in 2024.[1] The term of the buyer's agreement is, in the document's words, generally the remaining term under the existing agreement or another term Hilton approves.[1] That last clause is why the expiration date matters in a sale. A buyer and its lender want to know before they bid whether the brand will grant a fresh, longer term. In our experience, getting the brand's PIP scope and an indication on term before going to market removes the biggest unknown a buyer would otherwise price in."
    },
    {
      h2: "Does a short remaining term lower my price?",
      lead: "It can, if the buyer cannot get comfort on a new term. It can also widen the buyer pool to groups that want a different flag.",
      body: "A buyer's lender sizes a loan on branded cash flow and wants the flag in place for the life of the loan. Hilton's lender comfort letter form states that nothing in it extends the franchise agreement beyond its stated expiration date.[1] So a hotel with four years of term and no indication from the brand on a new license is harder to finance than the same hotel with a new term in hand.\n\nThe other side: a hotel near expiration is cheaper to reflag. Under the Hampton agreement, liquidated damages for an early termination equal the hotel's average monthly royalty fees multiplied by 60, or by the number of months remaining when fewer than 60 remain.[1] A buyer who plans to convert to another brand, or to run the hotel as an independent, pays less to exit the closer the agreement is to its end. The worked example below shows the arithmetic."
    },
    {
      h2: "Do I owe liquidated damages if I sell?",
      lead: "The Hampton document ties liquidated damages to termination, by Hilton for cause or by an owner who walks away, not to an approved sale.",
      body: "Item 6 of the disclosure document describes liquidated damages as payable when Hilton terminates the franchise agreement, and Item 17 adds that an owner who terminates unilaterally without cause is in material breach and must pay them.[1] In an approved change of ownership, the seller's agreement ends at closing as a condition of Hilton's consent, and the buyer's new agreement starts the same day.[1] The seller does have to pay all amounts due to Hilton through closing, which the parties may escrow.[1]\n\nThat is one brand's form. Older agreements and other brands differ, and some sales close without brand consent, which changes everything. Have franchise counsel read your agreement before you sign a purchase contract."
    },
    {
      h2: "So when should I decide?",
      lead: "Early enough that a sale can close, and the buyer's PIP can be scoped, before the expiration date does the deciding for you.",
      body: "Work backward. Our published playbook runs about 24 weeks from engagement to close, and the brand's 60-day review sits inside that.[2] Add the months it takes to get a PIP scoped and to reconcile the financials, and an owner who might sell should start the conversation with the brand and a broker two to three years before expiration. That leaves time to sell with term still on the agreement, or to re-license and sell later on a fresh term with the renovation done.\n\nThe choice itself is a return calculation. If you re-license, you fund the PIP and keep the lift in revenue it produces. If you sell first, the buyer funds it and deducts its cost, plus a margin for risk, from the price. The PIP arithmetic is worked through at [What is involved in selling a hotel?](/sell-a-hotel), and the hold-or-sell comparison at `/hotel-financing/refinance-or-sell`."
    }
  ],
  table: {
    caption: "Hampton by Hilton, 2025 disclosure document: keep and re-license versus sell[1]",
    columns: [
      "Item",
      "Keep the hotel and re-license",
      "Sell (change of ownership)"
    ],
    rows: [
      [
        "Right to it",
        "None. Brand's sole discretion",
        "Brand consent required, not unreasonably withheld"
      ],
      [
        "Who applies",
        "Current owner",
        "Buyer, as a new franchisee"
      ],
      [
        "Listed application fee",
        "$100,000",
        "$200,000"
      ],
      [
        "Fees actually paid in 2024",
        "$50,000 to $100,000",
        "$0 to $200,000"
      ],
      [
        "PIP",
        "Yes, plus a $10,000 PIP fee",
        "Yes, plus a $10,000 PIP fee"
      ],
      [
        "Agreement signed",
        "Then-current form, terms may differ materially",
        "Then-current form"
      ],
      [
        "Term",
        "As the brand offers",
        "Generally the remaining term, or another term the brand approves"
      ],
      [
        "Brand timing",
        "Not stated",
        "60 days' notice; 60 days to consent from a completed application"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 gives the cap-rate band a buyer will apply to your branded cash flow, which is the number a missing or short franchise term puts at risk.[3]"
  },
  workedExample: {
    label: "Hypothetical: what it costs a buyer to change flags, by months remaining",
    body: "Hypothetical. A Hampton-branded hotel produces $3.0 million of gross rooms revenue a year. At the 6 percent royalty in the 2025 form, royalty fees are $180,000 a year, or $15,000 a month.[1] Case one: 84 months remain on the agreement. More than 60 months remain, so liquidated damages for an early termination are $15,000 times 60, or $900,000. Case two: 30 months remain. Fewer than 60 months remain, so the figure is $15,000 times 30, or $450,000. Case three: 12 months remain, so $15,000 times 12, or $180,000. A buyer who wants a different brand subtracts that exit cost from its bid. At 84 months it is a $900,000 deduction. At 12 months it is $180,000, and some buyers will simply wait out the term. The same clock that worries a lender makes the hotel more attractive to a conversion buyer. This uses the hotel's own average royalty, which the agreement measures over the prior 24 months.[1]"
  },
  faq: [
    {
      q: "Should I sell my hotel before the franchise agreement expires?",
      a: "Decide two to three years out. Hampton's 2025 disclosure document gives no renewal right, and both re-licensing and a sale trigger a PIP.[1] Selling with term left, or re-licensing first and selling later, both beat reaching expiration with no plan."
    },
    {
      q: "My franchise agreement has three years left. Will buyers care?",
      a: "Yes. The buyer signs a new agreement whose term is generally the remaining term or another term the brand approves.[1] Buyers and lenders want the brand's position on term and PIP scope before they bid."
    },
    {
      q: "Can I renew my Hampton Inn franchise agreement?",
      a: "Not as of right. The 2025 disclosure document says the franchisee has no right to renew or extend. Hilton may re-license at its sole discretion, on a new contract, with a $100,000 listed application fee and a PIP.[1]"
    },
    {
      q: "Does the buyer take over my franchise agreement when I sell?",
      a: "Not under the Hampton form. The buyer applies as a new franchisee, pays the change of ownership application fee, and signs the then-current agreement. The seller's agreement ends at closing.[1]"
    },
    {
      q: "How long does the brand take to approve a hotel sale?",
      a: "Hilton's 2025 Hampton agreement requires 60 days' written notice and gives the brand 60 days from a completed application to consent.[1] File at contract signing so the review runs alongside due diligence."
    },
    {
      q: "What are liquidated damages on a hotel franchise?",
      a: "A preset payment for ending the agreement early. Under the 2025 Hampton form it is generally the hotel's average monthly royalty times 60, or times the months remaining when fewer than 60 remain.[1]"
    },
    {
      q: "What happens if I let the franchise agreement expire?",
      a: "The hotel must stop operating under the brand: signs and marks come down, the manual goes back, and the hotel leaves the reservation system.[1] It then runs as an independent or under a new flag."
    },
    {
      q: "Is it better to do the PIP myself and then sell?",
      a: "Sometimes. If you fund it, you keep the revenue lift and sell on a fresh term. If the buyer funds it, the cost plus a risk margin comes off the price. Compare both in dollars before choosing."
    }
  ],
  sources: [
    {
      n: 1,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025): Items 5, 6 and 17; Franchise Agreement sections 12.2.2, 13.4 and 13.6; Exhibit K lender comfort letter form",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
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
      label: "16 CFR 436.5, Disclosure items (what a Franchise Disclosure Document must contain, including Items 5, 6 and 17)",
      url: "https://www.law.cornell.edu/cfr/text/16/436.5",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/off-market-vs-marketed",
      "/sell-a-hotel/faq"
    ],
    glossary: [
      "/glossary/pip",
      "/glossary/bov",
      "/glossary/cap-rate"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Map your franchise clock to a sale timeline",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets reads the franchise agreement before pricing a branded hotel, because the term and the PIP set the buyer pool."
};

export default page;
