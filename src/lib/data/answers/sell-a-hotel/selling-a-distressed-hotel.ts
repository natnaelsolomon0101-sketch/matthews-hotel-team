/**
 * How do I sell a hotel that is losing money or in default?
 * Answer page: /sell-a-hotel/selling-a-distressed-hotel
 *
 * Written 2026-09-18. Covers the SALE side of distress: consensual short sale,
 * receivership sale, note sale, deed in lieu, bankruptcy sale. The workout
 * side lives at /hotel-financing/loan-workouts and is linked, not re-covered.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "selling-a-distressed-hotel",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "How to Sell a Hotel That Is Losing Money or in Default",
  h1: "How do I sell a hotel that is losing money or in default?",
  description: "How a distressed hotel changes hands: lender-approved sale, receivership sale, note sale, deed in lieu or bankruptcy sale. Who controls each, and the tax.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What happens if I can't refinance my hotel loan when it matures?",
    "What are lenders doing with distressed hotel loans instead of foreclosing?",
    "What happens after my hotel loan gets sent to special servicing?",
    "Is now a good time to buy a distressed hotel?",
    "How fast can I sell a hotel if I need to?",
    "My hotel is losing money and I'm behind on the loan. Can I still sell it?",
    "Should I give my hotel back to the bank or try to sell it first?"
  ],
  answer: "Yes, you can sell, and selling early keeps you in control. Once a loan defaults, the exits are a lender-approved sale, a receivership sale, a note sale, a deed in lieu or a bankruptcy sale, and the lender or a court controls most of them. Trepp put the lodging CMBS special servicing rate at 8.63 percent in July 2026.[1] Forgiven debt can be taxable, so model the tax before choosing.[2]",
  takeaways: [
    "The owner controls only one path: a marketed sale started before or early in default. Every later path is run by the lender, a receiver or a court.",
    "If the price will not clear the loan, the sale needs the lender's written consent to a short payoff. Ask for it before going to market, not after.",
    "A federal court receiver can sell privately only after three appraisals, and not below two-thirds of appraised value.[3] State receiverships follow state law.",
    "A receiver's appointment is a non-curable default under Hilton's 2025 Hampton franchise agreement, so the flag is part of the negotiation.[4]",
    "Handing back the keys is a sale for tax purposes. On a non-recourse loan the full debt counts as the amount realized.[2]"
  ],
  sections: [
    {
      h2: "Can I sell a hotel that is losing money?",
      lead: "Yes. Hotels with negative cash flow sell regularly, but buyers price them on what the hotel can earn after a fix, less the cost and risk of the fix.",
      body: "A hotel that loses money has no positive net operating income to put a cap rate on. Buyers instead underwrite a stabilized year, after a renovation, a new manager, a new flag or simply a lower debt load, and then deduct the capital and the time it takes to get there. The valuation math itself is walked through at `/hotel-valuation/how-to-value-a-hotel`.\n\nWhat matters for the seller is evidence. A buyer will pay for a turnaround it can see: a current STAR report showing the comp set is healthy while your hotel is not, a written PIP scope, and a trailing twelve-month P&L that reconciles to the bank statements even though the numbers are bad. Bad numbers presented cleanly sell. Unclear numbers do not. The document list is at `/sell-a-hotel/documents-needed`."
    },
    {
      h2: "Can I sell while the loan is in default or with the special servicer?",
      lead: "Yes, with the lender's cooperation. You still hold title until a foreclosure or deed in lieu, but the lender's lien has to be released at closing.",
      body: "If the sale price covers the loan balance, default interest, fees and closing costs, the lender is paid off at closing like any other sale. If it does not, the sale works only if the lender agrees in writing to release its lien for less than it is owed, often called a short sale or discounted payoff. A lender or special servicer weighs that offer against what it expects to net from its other remedies, so a marketed process with real bids is the owner's best evidence of value.\n\nStart that conversation early. Trepp reported that 8.63 percent of lodging CMBS loans were with the special servicer in July 2026, and that one large new transfer that month was a $280 million maturity default on two hotels.[1] Servicers are busy, and approvals take time. What a servicer can and cannot agree to, and what to do in the first 30 days, is covered at `/hotel-financing/loan-workouts`. This page picks up where a workout stops making sense."
    },
    {
      h2: "What is a receivership sale?",
      lead: "A court appoints a neutral receiver to run the hotel, and the receiver, not the owner, markets and sells it with court approval.",
      body: "Lenders ask for a receiver to take control of cash and operations while the default is resolved. In federal court, the sale rules are in the statute. Property in the hands of a receiver is sold at public sale unless the court orders otherwise. A private sale requires a hearing with notice, three disinterested appraisers, a price of at least two-thirds of the appraised value, newspaper publication at least ten days before confirmation, and it fails if a bona fide offer comes in at least 10 percent higher.[3] State court receiverships, which are more common for single hotels, follow each state's own rules.\n\nTwo hotel-specific points. Under Hilton's 2025 Hampton franchise agreement, an order appointing a receiver for the hotel lets the brand terminate immediately with no right to cure, and Hilton's lender comfort letter form says a receiver may be required to sign Hilton's receiver agreement.[4] So keeping the flag on is a three-way negotiation among the lender, the receiver and the brand. And the owner's equity is last in line: sale proceeds pay the receiver's costs and the lender first."
    },
    {
      h2: "What is a note sale, and what does it mean for me?",
      lead: "The lender sells your loan, not your hotel. You now owe the same debt to a new holder, often one that wants the property.",
      body: "A lender that does not want to foreclose can sell the promissory note and mortgage to an investor, usually at a discount to the balance. The owner is not a party to that sale and has no vote. The loan documents do not change, but the counterparty does. A bank may have preferred an extension. A note buyer that paid less than par may prefer a fast discounted payoff, or may intend to foreclose and own the hotel.\n\nFor an owner, a note sale is sometimes an opening. A new holder with a lower basis in the loan can accept a payoff the original lender could not. That is the moment a sale or recapitalization with fresh money can work. We do not publish note pricing, because no public source reports it for hotel loans."
    },
    {
      h2: "What is a deed in lieu of foreclosure?",
      lead: "You voluntarily deed the hotel to the lender in exchange for a release, skipping the foreclosure lawsuit. The lender has to agree to it.",
      body: "A deed in lieu is faster and quieter than foreclosure, and the main thing the owner negotiates is the release: of the loan, and of any guaranty. Lenders usually want clean title, so junior liens and unpaid taxes can block it. The brand matters here too. Hilton's comfort letter form gives a lender a cure period plus an additional 180 days to complete its acquisition of the hotel through foreclosure or other proceedings, and states that such an acquisition is not a prohibited transfer under the franchise agreement.[4]\n\nStaff are the other practical issue. Federal WARN rules apply to employers with 100 or more employees, and in a sale the seller is responsible for any required notice up to the closing date.[6] Get employment counsel involved before a transfer date is set."
    },
    {
      h2: "What is the tax on a short sale, deed in lieu or foreclosure?",
      lead: "The IRS treats each one as a sale of the hotel. Whether you also have canceled debt income depends on whether the loan is recourse.",
      body: "IRS Publication 4681 says a foreclosure is treated as a sale from which you may realize gain or loss, even if you voluntarily return the property to the lender, and that a voluntary conveyance in lieu of foreclosure is treated as an exchange of property to satisfy a debt.[2]\n\nOn a non-recourse loan, the entire unpaid debt is treated as the amount realized, and there is no canceled debt income. If the debt is more than your adjusted basis, you have a taxable gain even though you receive no cash. On a recourse loan, gain or loss is measured against the hotel's fair market value, and any forgiven debt above that value is ordinary income unless an exclusion applies.[2] The exclusions include bankruptcy, insolvency, and an election for qualified real property business indebtedness.[2]\n\nThis is where owners get surprised. A hotel that was depreciated for years and refinanced along the way can have debt well above basis. The layers of tax on the gain itself are explained at `/sell-a-hotel/taxes-when-selling-a-hotel`. Run the numbers with a CPA before choosing a path."
    },
    {
      h2: "When does a bankruptcy sale make sense?",
      lead: "When liens, judgments or disputes make a normal closing impossible, because a bankruptcy court can order a sale free and clear of them.",
      body: "Section 363 of the Bankruptcy Code lets the trustee sell property of the estate outside the ordinary course of business after notice and a hearing, and sell it free and clear of other parties' interests when the statute's conditions are met.[7] Buyers like the clean title. The cost is legal fees, time and loss of privacy. It also touches the franchise: under the 2025 Hampton agreement a bankruptcy filing that results in an order for relief is a ground for immediate termination.[4] A bankruptcy sale is a decision to make with restructuring counsel, not a marketing tactic."
    }
  ],
  table: {
    caption: "How a distressed hotel changes hands: six paths compared",
    columns: [
      "Path",
      "Who controls it",
      "What the owner can get",
      "Key constraint"
    ],
    rows: [
      [
        "Marketed sale, loan paid in full",
        "Owner",
        "Remaining equity",
        "Price must clear the loan and closing costs"
      ],
      [
        "Lender-approved short sale",
        "Owner runs it, lender approves it",
        "A release, if negotiated",
        "Written lender consent; forgiven recourse debt can be income[2]"
      ],
      [
        "Receivership sale",
        "Receiver and court",
        "Usually nothing until the lender is paid",
        "Federal private sales: three appraisals, two-thirds of value floor[3]"
      ],
      [
        "Note sale",
        "Lender",
        "Nothing directly; a new party to negotiate with",
        "Owner has no vote"
      ],
      [
        "Deed in lieu",
        "Lender must agree",
        "Release of the loan and, if negotiated, the guaranty",
        "Treated as a sale for tax; clean title needed[2]"
      ],
      [
        "Bankruptcy section 363 sale",
        "Bankruptcy court",
        "Whatever remains after creditors",
        "Notice and hearing; cost and publicity[7]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows what a buyer's new loan is priced from: the 10-year Treasury was 4.94% on September 17, 2026 and SOFR was 3.85%.[5] A distressed hotel sells to a buyer who has to finance it at today's index, which is why the price is set by today's debt cost and not by the old loan balance."
  },
  workedExample: {
    label: "Hypothetical: a sale that does not clear the loan, and the tax that follows",
    body: "Hypothetical. A 110-key hotel owes $12.0 million on a loan that matured. Marketed bids come in at $10.0 million. Closing costs are $300,000, so net proceeds are $9.7 million and the shortfall to the lender is $2.3 million. The owner's adjusted basis, after years of depreciation, is $9.0 million.\n\nIf the loan is recourse and the lender approves the sale and forgives the $2.3 million: the owner has a sale at $10.0 million against a $9.0 million basis, so $1.0 million of gain before closing costs, plus $2.3 million of canceled debt that is ordinary income unless the insolvency, bankruptcy or qualified real property business debt exclusion applies.[2]\n\nIf the loan is non-recourse and the owner instead deeds the hotel to the lender: the amount realized is the full $12.0 million of debt. Gain is $12.0 million minus $9.0 million, or $3.0 million, with no cash received and no canceled debt income.[2]\n\nSame hotel, same debt, two different tax bills, and in both cases the tax arrives in a year when the owner received little or no cash. That is why the tax model comes before the choice of path."
  },
  faq: [
    {
      q: "Can I sell my hotel if it is losing money?",
      a: "Yes. Buyers price a money-losing hotel on what it can earn after a renovation, new management or new flag, minus the cost and risk of getting there. Clean financials and a written PIP scope matter more than the current loss."
    },
    {
      q: "Can I sell my hotel if I am behind on the loan?",
      a: "Yes, but the lender's lien must be released at closing. If the price covers the debt, it is a normal payoff. If not, you need the lender's written agreement to accept less before you can close."
    },
    {
      q: "Should I give the hotel back to the bank or try to sell it first?",
      a: "Usually test the market first. Real bids tell you and the lender what the hotel is worth, and a sale you run keeps options open. A deed in lieu needs lender consent and is taxed as a sale anyway.[2]"
    },
    {
      q: "What is a receivership sale of a hotel?",
      a: "A court-appointed receiver runs the hotel and sells it with court approval. In federal court, a private sale needs three appraisals and cannot be confirmed below two-thirds of appraised value.[3] State rules vary."
    },
    {
      q: "My lender sold my hotel loan. What does that mean?",
      a: "You owe the same debt on the same terms to a new holder. A note buyer that paid a discount may accept a lower payoff than your old lender could, or may plan to foreclose. Open a conversation quickly."
    },
    {
      q: "Do I owe taxes if I lose my hotel to foreclosure?",
      a: "Possibly. The IRS treats foreclosure and deed in lieu as a sale. On non-recourse debt, the full loan balance is the amount realized. On recourse debt, forgiven amounts can be ordinary income unless an exclusion applies.[2]"
    },
    {
      q: "Will my hotel lose its flag if a receiver is appointed?",
      a: "It can. Under Hilton's 2025 Hampton agreement, a receiver's appointment allows immediate termination, and Hilton may require the receiver to sign a receiver agreement.[4] Keeping the flag becomes a negotiation among lender, receiver and brand."
    },
    {
      q: "How fast can a distressed hotel be sold?",
      a: "A full marketed sale runs about 24 weeks in our published playbook.[8] A sale to a known buyer can be shorter, but lender approval of a short payoff and the brand's review of the buyer still take weeks."
    }
  ],
  sources: [
    {
      n: 1,
      label: "CMBS Special Servicing Rate Falls as Office, Lodging Recover (July 2026 Trepp data)",
      url: "https://www.credaily.com/briefs/cmbs-special-servicing-rate-falls-as-office-lodging-recover/",
      publisher: "CRE Daily, citing Trepp",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Publication 4681 (2025), Canceled Debts, Foreclosures, Repossessions, and Abandonments",
      url: "https://www.irs.gov/publications/p4681",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "28 U.S. Code section 2001, Sale of realty generally",
      url: "https://www.law.cornell.edu/uscode/text/28/2001",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025): Item 17, Franchise Agreement section 13.2, and Exhibit K lender comfort letter form",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "20 CFR 639.3 (WARN Act employer definition) and 20 CFR 639.4(c) (sale of a business)",
      url: "https://www.law.cornell.edu/cfr/text/20/639.4",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "11 U.S. Code section 363, Use, sale, or lease of property",
      url: "https://www.law.cornell.edu/uscode/text/11/363",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/off-market-vs-marketed",
      "/sell-a-hotel/faq"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/dscr",
      "/glossary/pip"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk through your options confidentially",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells hotels and places hotel debt, so the same desk can price the sale and the refinance side by side."
};

export default page;
