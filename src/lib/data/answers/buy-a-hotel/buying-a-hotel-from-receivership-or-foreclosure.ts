/**
 * How do I buy a hotel out of receivership or foreclosure?
 * Answer page: /buy-a-hotel/buying-a-hotel-from-receivership-or-foreclosure
 *
 * Written 2026-09-18. Buyer's side of distress. The owner's side lives at
 * /sell-a-hotel/selling-a-distressed-hotel and is linked, not re-covered.
 * Sources fetched and read 2026-09-18. FDD page numbers are the 2026 Hampton
 * FDD's own printed page numbers. Worked example arithmetic checked by script.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "buying-a-hotel-from-receivership-or-foreclosure",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "How to Buy a Hotel From a Receiver or at Foreclosure",
  h1: "How do I buy a hotel out of receivership or foreclosure?",
  description: "Buying a hotel from a receiver, at a foreclosure sale, from a lender or in bankruptcy: the federal sale rules, credit bids, title, and keeping the flag.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Is now a good time to buy a distressed hotel?",
    "What are lenders doing with distressed hotel loans instead of foreclosing?",
    "What happens after my hotel loan gets sent to special servicing?",
    "How do I find off-market hotel deals?",
    "How do I buy a hotel out of receivership or foreclosure?",
    "A hotel near me is in receivership. Can I make an offer to the receiver, and will the brand let me keep the flag?",
    "What is a credit bid and can I outbid the lender at a hotel foreclosure auction?"
  ],
  answer: "You buy from whoever controls the sale: a receiver, the foreclosing lender, or a bankruptcy trustee. In federal court, a receiver's private sale needs three appraisals and cannot be confirmed below two-thirds of appraised value.[1] In a bankruptcy sale the lender can bid its debt instead of cash.[2] Trepp put the lodging CMBS special servicing rate at 8.63 percent in July 2026.[3] The franchise does not transfer on its own.",
  takeaways: [
    "There are four doors: a receiver's sale, the foreclosure auction, a purchase from the lender after it takes title, and a bankruptcy section 363 sale. Each has a different seller and different rules.",
    "A federal receiver's private sale is public in practice. The terms are published at least ten days before confirmation, and a bona fide offer at least 10 percent higher stops it.[1]",
    "At a bankruptcy sale the secured lender may credit bid, offsetting its claim against the price.[2] You are bidding against someone who does not need cash.",
    "Court sales are sold as-is. Your protection is title insurance, your own inspections before you bid, and the sale order.",
    "The flag is a separate approval. Hilton's 2026 Hampton FDD lists a $200,000 change of ownership application fee and a $10,000 PIP fee, and the buyer signs a new franchise agreement.[4]"
  ],
  sections: [
    {
      h2: "What are the ways to buy a distressed hotel?",
      lead: "A distressed hotel can be bought from the owner with lender consent, from a receiver, at the foreclosure sale, from the lender after foreclosure, or from a bankruptcy estate.",
      body: "Which door is open depends on how far the default has gone. Early on, the owner still controls the sale and needs the lender to accept the payoff. That path, and the owner's other exits, are explained from the seller's side at `/sell-a-hotel/selling-a-distressed-hotel`.\n\nOnce a court appoints a receiver, the receiver runs the hotel and can be authorized to sell it. If the lender forecloses, there is an auction, and if nobody outbids the lender, the lender takes title and later sells the hotel as owned real estate. If the owner files bankruptcy, the sale runs through the bankruptcy court.\n\nDistress is not rare in 2026. Trepp reported that the lodging CMBS special servicing rate was 8.63 percent in July 2026, down 26 basis points on the month.[3] A loan in special servicing can end in an extension, a modification, a payoff or a sale, so the hotels that reach a court sale are a subset of that figure. We do not publish a discount to expect, because no public source measures one for hotels."
    },
    {
      h2: "How does a receivership sale work?",
      lead: "The receiver markets the hotel, picks a buyer, and asks the court to approve the sale. In federal court, the statute sets the steps.",
      body: "Under 28 U.S.C. 2001, real property in a federal receiver's hands is sold at public sale unless the court orders otherwise. The court may order a private sale after a hearing with notice to interested parties, if it finds the estate's best interests are served. Before confirming a private sale, the court appoints three disinterested appraisers, and no private sale is confirmed below two-thirds of the appraised value. The terms must be published in a newspaper of general circulation at least ten days before confirmation, and the sale is not confirmed if a bona fide offer guarantees at least a 10 percent increase over the price.[1] A public sale of real estate under a federal court order requires notice published once a week for at least four weeks.[5] Personal property, which in a hotel means furniture, fixtures and equipment, is sold under the same rules unless the court orders otherwise.[6]\n\nTwo cautions. First, a hotel receivership can also be in state court, and each state has its own receivership law. Read the appointing order and ask local counsel what it lets the receiver do. Second, the statute lets the court direct the terms and conditions of a sale, so read the sale order in your case.\n\nFor a buyer, the 10 percent overbid rule means your signed contract is a floor price for someone else until the court confirms. Ask for a breakup fee or expense reimbursement in the contract if the court will allow one."
    },
    {
      h2: "What is a credit bid, and can I outbid the lender?",
      lead: "A credit bid lets the secured lender bid the debt it is owed instead of cash. You can outbid it, but only by paying more cash than the lender values the hotel at.",
      body: "In a bankruptcy sale, section 363(k) of the Bankruptcy Code says that unless the court orders otherwise for cause, the holder of a lien securing an allowed claim may bid at the sale and offset its claim against the purchase price.[2] A foreclosure auction outside bankruptcy is run under state law, which sets who may bid and on what terms. Ask local counsel how the foreclosing lender's bid works in that state.\n\nThat changes the auction math. A lender owed $10 million can bid up to $10 million without writing a check. It will stop bidding where it would prefer your cash to owning the hotel. So the useful work is done before the auction: talk to the lender or special servicer about the number at which it would rather be paid. Some lenders would rather sell the note or agree to a sale by the receiver than take title.\n\nBankruptcy sales add one protection that buyers value. A sale order can transfer the hotel free and clear of other interests when the statute's conditions are met, and a good-faith purchaser is protected even if the sale order is later reversed on appeal, unless the sale was stayed.[2]"
    },
    {
      h2: "What should I check on title before I bid?",
      lead: "Check which liens the sale wipes out, which survive, and whether anyone has a right to redeem the hotel after you buy it.",
      body: "A foreclosure generally clears liens junior to the foreclosing mortgage and leaves senior ones, such as unpaid property taxes, in place. A title company will tell you which is which, and you should have its commitment before you bid, not after.\n\nFederal liens have their own rule. When real estate is sold to satisfy a lien that is senior to a lien held by the United States, the United States has one year from the sale to redeem the property. For a federal tax lien the period is 120 days or the state redemption period, whichever is longer.[7] Hotels that fell behind on payroll taxes can carry a federal tax lien, so ask for a lien search in the entity's name as well as the property's.\n\nSome states also give the former owner a statutory right to redeem after foreclosure. Whether that applies is a state law question for local counsel.\n\nOn the physical side, court sales are as-is, with few or no seller warranties. Do the inspections you would do in any purchase, on a shorter clock. The full list is at `/buy-a-hotel/due-diligence-checklist`. A hotel that has been short of cash may have deferred maintenance, so the property condition report and the brand's PIP matter more here than in a normal deal."
    },
    {
      h2: "Will the hotel keep its flag?",
      lead: "Only if the franchisor approves you. A franchise agreement does not pass to the buyer at a receiver's or foreclosure sale.",
      body: "Hilton's 2026 Hampton franchise disclosure document shows how one large franchisor handles it. An order appointing a receiver for the hotel is a ground for termination of the franchise agreement without an opportunity to cure (p. 71).[4] If the receiver was appointed at the lender's request, Hilton's comfort letter form says Hilton may require the receiver to sign its receiver agreement, which is how the flag stays on during the receivership.[4]\n\nA buyer goes through a change of ownership. The transferee must submit a change of ownership application, pay the franchise application fee, sign Hilton's then-current franchise agreement and agree to the upgrades Hilton requests (p. 74).[4] The listed application fee for a change of ownership is $200,000, and in 2025 franchisees paid between $25,000 and $200,000 (pp. 16-17).[4] The PIP fee is $10,000 (p. 16).[4] The new term is generally the remaining term of the old agreement or another term Hilton approves (p. 69).[4]\n\nIf the lender takes title first, Hilton's comfort letter form gives the lender 15 days beyond the franchisee's cure period, plus an additional 180 days to complete its acquisition through foreclosure, and says that acquisition is not a transfer that violates the franchise agreement.[4] Your own lender will want a new comfort letter, which Hilton currently processes for $3,500 (p. 26).[4] Other brands have their own forms and fees. Read the brand's current FDD, and see the [Franchise Comfort Letter](/glossary/comfort-letter) entry.\n\nStart the brand conversation before you bid. A hotel bought without the flag is a different asset with a different value, as `/buy-a-hotel/branded-vs-independent` explains."
    },
    {
      h2: "Can I finance a purchase from a receiver or at auction?",
      lead: "A receiver's sale or a purchase from the lender can be financed like any acquisition if the timeline allows. A cash auction usually cannot.",
      body: "Foreclosure auctions are cash sales on terms set by state law and the notice of sale, and a new lender is unlikely to complete an appraisal, an environmental report and a franchise approval in that window. Buyers at auction use cash or a line they already have, then put permanent debt on the hotel afterward.\n\nA negotiated purchase from a receiver or from a lender that has taken title gives more time. The lender will underwrite trailing income that is weak by definition, so expect the loan to be sized on what the hotel earns now, not on your plan. No lender publishes the coverage or leverage it requires. For a first look at what the current income supports, use `/tools/hotel-loan-sizing-calculator`, and for value use `/tools/hotel-value-estimator`. Short-term options are compared at `/hotel-financing/bridge-loans`.\n\nSome selling lenders will finance the buyer themselves. It is worth asking."
    }
  ],
  table: {
    caption: "Four ways to buy a distressed hotel, from the buyer's side",
    columns: [
      "Path",
      "Who you buy from",
      "Rules that set the process",
      "What to watch"
    ],
    rows: [
      [
        "Receiver's sale",
        "Court-appointed receiver, with court approval",
        "Federal court: three appraisals, two-thirds floor, 10 days' published notice, 10% overbid[1]. State court: state law",
        "Your contract can be overbid until confirmation"
      ],
      [
        "Foreclosure auction",
        "Trustee, sheriff or referee under state law",
        "Federal court public sale: notice weekly for at least four weeks[5]. State sales: state law",
        "Bidding and cash terms set by state law; redemption rights[7]"
      ],
      [
        "Purchase from the lender after it takes title",
        "The lender, as owner",
        "An ordinary contract",
        "As-is terms; the flag may be running on a lender's comfort letter period[4]"
      ],
      [
        "Bankruptcy section 363 sale",
        "Trustee or debtor in possession, with court approval",
        "Notice and hearing; credit bidding allowed; free and clear if conditions are met[2]",
        "Auction against a credit bid; good-faith purchaser protection[2]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows what acquisition debt is priced from: the 10-year Treasury was 4.94 percent on September 17, 2026, SOFR was 3.85 percent, and the SBA 7(a) maximum variable rate was 10.00 percent.[8] A distressed price only helps if the hotel's current income can carry debt at those levels."
  },
  workedExample: {
    label: "Hypothetical: a private sale by a federal receiver, with the brand costs added",
    body: "Hypothetical. A federal court receiver holds a 96-key branded hotel. The court's three appraisers value it at $8,400,000, $9,000,000 and $9,600,000. The statute does not say how three opinions are combined, so assume the court uses the average: $9,000,000.\n\nFloor. No private sale can be confirmed below two-thirds of appraised value: $9,000,000 x 2/3 = $6,000,000.[1]\n\nYour offer. You sign a contract with the receiver at $6,500,000, above the floor. The terms are published at least ten days before the confirmation hearing.[1]\n\nOverbid. Another buyer can stop your sale with a bona fide offer that guarantees at least 10 percent more: $6,500,000 x 1.10 = $7,150,000.[1] Below that, your contract stands.\n\nBrand costs on top of price, using the 2026 Hampton FDD's listed amounts: $200,000 change of ownership application fee + $10,000 PIP fee + $3,500 comfort letter fee = $213,500, before the cost of the PIP itself.[4]\n\nThe PIP is the larger number and it is specific to the building. Get the brand's PIP before the confirmation hearing if the receiver will allow the inspection, because after confirmation the price is fixed."
  },
  faq: [
    {
      q: "Can I make an offer directly to a receiver on a hotel?",
      a: "Yes. The receiver, or the broker the receiver hired, takes offers. The receiver then asks the court to approve the sale. In federal court a private sale needs three appraisals and a price of at least two-thirds of appraised value.[1]"
    },
    {
      q: "What is a credit bid at a hotel foreclosure or bankruptcy sale?",
      a: "The lender bids the debt it is owed instead of cash. Section 363(k) of the Bankruptcy Code lets a lienholder offset its claim against the purchase price.[2] To win, you must offer more cash than the lender thinks the hotel is worth to it."
    },
    {
      q: "Is a hotel in receivership cheaper?",
      a: "Not automatically. The federal statute sets a floor of two-thirds of appraised value for a private sale and lets a 10 percent higher offer displace yours.[1] No public source measures a typical discount for hotels, so we do not publish one."
    },
    {
      q: "Does the franchise transfer when I buy a hotel at foreclosure?",
      a: "No. You apply to the brand as a new owner. Hilton's 2026 Hampton FDD lists a $200,000 change of ownership application fee, a $10,000 PIP fee, a new franchise agreement and the upgrades Hilton requests.[4]"
    },
    {
      q: "Can I get a loan to buy a hotel at a foreclosure auction?",
      a: "Rarely in time. Auction terms call for cash on a short clock, and a hotel loan needs an appraisal, reports and brand approval. Buyers use cash, then finance afterward. A receiver's sale or a purchase from the lender allows normal financing."
    },
    {
      q: "What liens survive when I buy a hotel at foreclosure?",
      a: "Generally liens senior to the foreclosing mortgage, such as property taxes. The United States can redeem within one year if it held a junior lien, or 120 days for a federal tax lien, or the state period if longer.[7] Get a title commitment first."
    },
    {
      q: "How long does it take to buy a hotel from a receiver?",
      a: "Longer than the contract suggests, because a court must approve. In federal court the terms of a private sale are published at least ten days before confirmation, and a public sale needs four weeks of published notice.[1][5] Brand approval runs alongside."
    },
    {
      q: "I own the hotel that is in receivership. Where do I start?",
      a: "With the seller's version of this page: /sell-a-hotel/selling-a-distressed-hotel covers a lender-approved sale, a deed in lieu, the tax on forgiven debt, and what a receiver's appointment does to your franchise."
    }
  ],
  sources: [
    {
      n: 1,
      label: "28 U.S. Code section 2001, Sale of realty generally",
      url: "https://www.law.cornell.edu/uscode/text/28/2001",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "11 U.S. Code section 363, Use, sale, or lease of property: subsections (f), (k) and (m)",
      url: "https://www.law.cornell.edu/uscode/text/11/363",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "CMBS Special Servicing Rate Falls as Office, Lodging Recover (July 2026 Trepp data)",
      url: "https://www.credaily.com/briefs/cmbs-special-servicing-rate-falls-as-office-lodging-recover/",
      publisher: "CRE Daily, citing Trepp",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "2026 Hampton Franchise Disclosure Document: Item 5 (pp. 16-17), Item 6 (p. 26), Item 17 (pp. 69-75) and Exhibit K lender comfort letter form",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "28 U.S. Code section 2002, Notice of sale of realty",
      url: "https://www.law.cornell.edu/uscode/text/28/2002",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "28 U.S. Code section 2004, Sale of personalty generally",
      url: "https://www.law.cornell.edu/uscode/text/28/2004",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "28 U.S. Code section 2410(c), redemption by the United States; see also 26 U.S. Code section 7425(d)",
      url: "https://www.law.cornell.edu/uscode/text/28/2410",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/due-diligence-checklist",
      "/buy-a-hotel/how-much-money-do-you-need",
      "/buy-a-hotel/branded-vs-independent",
      "/buy-a-hotel/seller-financing"
    ],
    glossary: [
      "/glossary/comfort-letter",
      "/glossary/pip",
      "/glossary/franchise-agreement"
    ],
    data: [
      "/rates",
      "/tools/hotel-value-estimator",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Talk through a distressed hotel purchase",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells hotels and places hotel debt, so the same desk can price the purchase and the loan that has to follow it."
};

export default page;
