/**
 * How do I make an offer on a hotel?
 * Answer page: /buy-a-hotel/how-to-make-an-offer
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-09-24): three hotel purchase and sale agreements filed as
 * exhibits to Form 8-K by Moody National REIT II on EDGAR (Residence Inn
 * Grapevine, December 13, 2024; Homewood Suites Houston-Woodlands, November
 * 17, 2025; Homewood Suites Austin/Airport Area South, November 24, 2025),
 * plus 16 CFR 436.5(q), 26 U.S.C. 1060 and 1445 on Cornell LII, and the
 * Texas Alcoholic Beverage Commission's page on reporting changes to a
 * licence. Every percentage and day count was recomputed with a script
 * before saving. Do not hand-edit a number without re-reading its source and
 * bumping `lastUpdated`.
 *
 * Deliberately not on this page: what a "typical" letter of intent contains.
 * Letters of intent are private documents, no public source describes one,
 * and geo/AGENTS.md rule 1 applies. The page says so and works from the
 * agreements the letters turn into.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "how-to-make-an-offer",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "How to Make an Offer on a Hotel",
  h1: "How do I make an offer on a hotel?",
  description:
    "What an offer on a hotel consists of, how much earnest money three SEC-filed hotel agreements took, and why the franchisor decides whether it can close.",
  lastUpdated: "2026-09-24",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What's the process for making an offer on a hotel?",
    "How much earnest money do I need to buy a hotel?",
    "What's in a hotel purchase and sale agreement?",
    "Is a letter of intent on a hotel binding?",
    "How long does a hotel buyer get for due diligence?",
    "Does the franchisor have to approve me before I can buy a branded hotel?",
    "What happens to my deposit if I walk away from a hotel deal?"
  ],
  answer:
    "An offer on a hotel starts as a letter of intent and becomes a purchase and sale agreement. Three hotel agreements filed with the SEC between December 2024 and November 2025 show the shape: prices of $8.4 million to $22.5 million, deposits of 1.06% to 3.57% of price, and 32 to 47 days from signature to the outside closing date.[1][2][3]",
  takeaways: [
    "An offer moves in two steps: a letter of intent sets price and the main terms, and a purchase and sale agreement makes them enforceable. Letters of intent are private, so use the terms a signed agreement carries as your checklist.",
    "Deposit size is negotiated, not standard. The three filed agreements put 2.22%, 3.57% and 1.06% of the purchase price into escrow.[1][2][3]",
    "A free look is not automatic. Two of the three made the deposit non-refundable the day it was delivered, and one of those two still gave the buyer a 30-day study period.[2][3]",
    "The franchisor sits inside your offer. All three agreements say the seller is not authorised to sell unless the buyer has been approved by the brand and has signed a new franchise agreement.[1][2][3]",
    "What the seller stands behind shrinks fast. In the Grapevine agreement the representations survive six months, claims under $25,000 are not actionable at all, and recovery is capped at $337,500, which is 1.50% of the $22,500,000 price.[1]"
  ],
  sections: [
    {
      h2: "What does an offer on a hotel actually consist of?",
      lead: "Two documents: a letter of intent that sets price and the main terms, and a purchase and sale agreement that turns them into obligations a court would enforce.",
      body: "Nobody files a letter of intent anywhere, so no public source describes what a typical one contains, and this page will not invent one. What does become public is the agreement the letter turns into, when a public company is on one side and attaches it to a Form 8-K.\n\nThree of those are the spine of this page, all Texas hotels sold by Moody National REIT II: the Residence Inn Grapevine, under contract on December 13, 2024 at $22,500,000 to MCR Hotel Acquisitions;[1] the Homewood Suites Houston-Woodlands in Spring, under contract on November 17, 2025 at $8,400,000 to Alay Investment Group;[2] and the Homewood Suites Austin/Airport Area South, under contract on November 24, 2025 at $9,400,000 to Farmington Hotel Partners I.[3]\n\nRead those agreements backwards and you get the only honest letter of intent checklist there is: deposit amount and when it hardens, how long you inspect, the outside closing date, who carries brand approval, and how long the seller stands behind what it told you. Each is cheap to agree before you sign and expensive to argue after. Price comes first, and [how to underwrite a hotel acquisition](/buy-a-hotel/how-to-underwrite-a-hotel-deal) covers how you reach a number worth putting in a letter."
    },
    {
      h2: "How much earnest money does a hotel deal take, and when does it go hard?",
      lead: "There is no standard number. The three filed agreements put 2.22%, 3.57% and 1.06% of the purchase price into escrow, and two of the three made it non-refundable on the day it was delivered.",
      body: "The Grapevine agreement is the familiar two-stage structure. The buyer wired $250,000 within two business days of the effective date, and on expiry of the inspection period, if it elected to proceed, wired another $250,000. That is $500,000, or 2.22% of the $22,500,000 price.[1]\n\nThe two 2025 agreements are harder and smaller at once. Houston-Woodlands took $300,000 within one business day, non-refundable on deposit except for a short list of named seller-side failures, which is 3.57% of $8,400,000.[2] Austin took $100,000 within one business day, non-refundable on deposit, which is 1.06% of $9,400,000.[3] A small deposit is not a soft deal, and a hard deposit is not always a large one. What matters is the combination, and you agree the combination in the letter of intent.\n\nOne line hides in all three. A slice of the deposit is independent consideration the seller keeps whatever happens: $100 in the Houston and Austin agreements, released to the seller on a buyer termination, and in Grapevine an amount fully earned on signature that is not applied against the purchase price.[1][3] It is what makes the agreement binding at all. It is small, and it is gone."
    },
    {
      h2: "How long do I get to inspect, and how fast does a hotel deal close?",
      lead: "Short, in all three: a 17-day inspection period on one, a 30-day study period on another, and 32 to 47 days from signature to the outside closing date.",
      body: "Grapevine gave the buyer until 5 p.m. Central on December 30, 2024, which is 17 days from the December 13 effective date. Inside that window the buyer could terminate in its sole and absolute discretion, on a written notice, and the escrow agent had to return the deposit.[1] Closing was due on or before 30 days after that window shut, so January 29, 2025, with an option to push to January 30 for a further $50,000 that joined the earnest money and was itself non-refundable.[1] Signature to outside closing: 47 days.\n\nHouston-Woodlands set closing on or before December 19, 2025 against a November 17 signature, which is 32 days, with no inspection period standing between the deposit and the risk.[2] Austin ran a 30-day study period from its November 24 effective date, ending December 24, 2025, against closing on or before December 29: 35 days in total, and five days between the end of study and the closing.[3]\n\nThat pace has one practical consequence: your property condition assessment, environmental site assessment, survey and title review have to be commissioned the week you sign. The Grapevine agreement also requires 24 hours notice before each site visit and bars Phase II environmental testing without the seller's approval, so an invasive test is a negotiation, not a right.[1] [The due diligence checklist](/buy-a-hotel/due-diligence-checklist) sets out what has to fit inside the window."
    },
    {
      h2: "Why does the franchisor decide whether my offer can close?",
      lead: "Because the brand licence does not travel with the building, and the franchise agreement forbids the seller from selling to a buyer the brand has not approved.",
      body: "All three agreements say it in nearly identical words. Grapevine, where the hotel ran under a Residence Inn by Marriott relicensing franchise agreement dated September 27, 2017: the seller \"is not authorized to sell the Property unless Purchaser has been approved by Licensor, and Purchaser and Licensor have entered into a new franchise agreement with Licensor with respect to the Property\".[1] Both Homewood Suites agreements carry the same sentence with Hilton Franchise Holding LLC as licensor.[2][3]\n\nThe buyer also has to get the seller, the manager and any guarantor released from the old agreement, in the form the brand customarily gives, and pays the franchise costs including the change of ownership application fee.[1][2] In Grapevine the seller agreed to pay the cost of ordering, but not completing, the property improvement plan scope, which was the one piece of brand cost the seller carried.[1]\n\nThe three diverge on what happens if approval does not land. Houston-Woodlands says plainly that the buyer's inability to enter a new franchise agreement or obtain approval by closing is not a default.[2] The other two do not say that, which leaves a buyer who cannot get approved facing its own default. Ask for that sentence in the letter of intent.\n\nYou can read the conditions before you offer. Item 17 of a franchise disclosure document has to set out, in tabular form, transfer by the franchisee, franchisor approval of a transfer, and the conditions for that approval.[4] See [franchise transfer when a hotel sells](/sell-a-hotel/franchise-transfer), [franchise agreement](/glossary/franchise-agreement) and [PIP](/glossary/pip)."
    },
    {
      h2: "What else has to say yes before closing?",
      lead: "Title, the liquor authority, your lender, the tax allocation you and the seller sign, and sometimes the seller's own board.",
      body: "Title runs on the same clock as inspection. Grapevine required the seller to order the title commitment within one business day of the effective date, and any objection the buyer did not raise before the inspection period expired became a permitted exception.[1] An objection you forget is an objection you have accepted.\n\nAlcohol is its own regulator. The Grapevine agreement makes the buyer \"fully responsible, at its sole cost and expense\" for applying for and obtaining transfer of the liquor licence held by a seller affiliate, and for paying the transfer and licence fees.[1] In Texas the state alcoholic beverage regulator has to be notified within 30 days of changes to ownership or principal parties.[7] Build that into the timeline rather than discovering it in the closing week, and see [the due diligence checklist](/buy-a-hotel/due-diligence-checklist) for how long the approval itself can run.\n\nThe price allocation is a joint decision with tax consequences. Grapevine required both sides to use commercially reasonable efforts to agree, before due diligence expired, an allocation of the price between real property, personal property and intangible assets.[1] Section 1060 allocates the consideration under the residual method, and a written agreement on allocation binds both parties unless the IRS determines it is not appropriate.[5] What that allocation is worth to you afterwards is at [hotel depreciation and cost segregation](/buy-a-hotel/depreciation-and-cost-segregation).\n\nTwo smaller gates. A seller affidavit giving a US taxpayer identification number and stating the seller is not a foreign person removes the 15% withholding section 1445 otherwise imposes.[6] And the Austin agreement conditions the seller's own authority on approval by the board and shareholders of Moody National REIT II, so ask who on the other side still has to vote.[3]"
    },
    {
      h2: "What happens if I walk away, or the seller does?",
      lead: "In the Grapevine agreement the seller's only remedy for a buyer default is the deposit, as liquidated damages, and nothing beyond it.",
      body: "The clause is explicit. On a buyer default the seller may terminate and take the earnest money and the extension deposit with accrued interest as liquidated damages, and that remedy \"shall be Seller's sole and exclusive remedy, at law or in equity\", because both sides acknowledge the seller's actual damages would be extremely difficult to ascertain.[1]\n\nRead that as pricing rather than as a penalty. Your deposit is what the seller collects if you do not close, so it is also what buys you credibility against a competing offer. Raising it is the cheapest way to win a deal you are certain about and the most expensive way to win one you are not.\n\nCasualty and condemnation sit alongside. Grapevine keeps risk of loss with the seller until closing and splits the outcome at a repair cost of $1,000,000, determined by a contractor or architect both sides accept: at or below that figure the parties may elect to have the seller repair, extending the closing if the work runs long.[1] On threatened or commenced condemnation the buyer may terminate outright.[1] Neither clause is boilerplate in a hurricane or wildfire market."
    },
    {
      h2: "What does the seller still stand behind after closing?",
      lead: "Less, and for less time, than most first-time buyers expect: six months, a $25,000 floor and a $337,500 ceiling on a $22,500,000 hotel.",
      body: "The Grapevine limitations clause is worth reading in full before you sign anything. The seller's representations survive closing and delivery of the deed for six months. No claim is actionable or payable unless valid claims collectively aggregate $25,000 or more. Above that floor, recovery is capped at $337,500, which is 1.50% of the purchase price, and outside fraud the seller's aggregate liability cannot exceed it.[1]\n\nA second limit costs buyers more often than the cap does. No claim is actionable if it rests on something the buyer actually knew, or on something disclosed in the due diligence items the seller delivered.[1] What you were shown, you cannot come back on. Seller knowledge itself is narrowed to the actual knowledge of one named individual after inquiry of the hotel's general manager, with nothing imputed from anyone else.[1]\n\nTwo hotel-specific lines are easy to miss. Grapevine has the seller terminate every hotel employee at closing, pay accrued compensation and unused paid time off through the day before, and pay severance to anyone the buyer does not rehire, with the buyer free to offer employment as it sees fit.[1] The federal notice obligations that can sit on top of that are at [the due diligence checklist](/buy-a-hotel/due-diligence-checklist). And the final night's room revenue, from rooms occupied at 12:01 a.m. on the closing date, was shared equally in Grapevine and retained by the seller in both 2025 agreements.[1][2][3] No other property type has that line."
    }
  ],
  table: {
    caption:
      "Terms in three hotel purchase and sale agreements filed with the SEC, December 2024 to November 2025",
    columns: [
      "Term",
      "Residence Inn Grapevine, TX",
      "Homewood Suites Houston-Woodlands, TX",
      "Homewood Suites Austin/Airport South, TX"
    ],
    rows: [
      ["Agreement dated", "December 13, 2024", "November 17, 2025", "November 24, 2025"],
      ["Purchase price", "$22,500,000", "$8,400,000", "$9,400,000"],
      [
        "Earnest money",
        "$250,000 at signing plus $250,000 at inspection expiry",
        "$300,000 at signing",
        "$100,000 at signing"
      ],
      ["Deposit as a share of price", "2.22%", "3.57%", "1.06%"],
      [
        "Refundable if the buyer walks on diligence",
        "Yes, buyer's sole discretion, until December 30, 2024",
        "No, non-refundable on deposit except for named seller failures",
        "No, non-refundable on deposit"
      ],
      ["Inspection or study period", "17 days", "None stated", "30 days"],
      [
        "Outside closing date",
        "January 29, 2025, extendable one day for $50,000",
        "December 19, 2025",
        "December 29, 2025"
      ],
      ["Days from signing to outside closing", "47", "32", "35"],
      [
        "Franchisor whose approval is required",
        "Marriott International, Inc.",
        "Hilton Franchise Holding LLC",
        "Hilton Franchise Holding LLC"
      ],
      [
        "No brand approval by closing is a buyer default",
        "Not excluded",
        "Expressly not a default",
        "Not excluded"
      ],
      [
        "Seller's broker named in the agreement",
        "Eastdil Secured",
        "CBRE Hotels",
        "JLL Hotels and Hospitality"
      ],
      [
        "Final night's room revenue",
        "Split equally",
        "Retained by seller",
        "Retained by seller"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' September 2026 rate sheet is the reason to be careful with a financing contingency in a letter of intent. It shows the 10-year Treasury at 4.94% and Prime at 7.00% as of September 17, 2026, and it marks maximum loan-to-value and the coverage floor as not yet published for every lender type except SBA, because no lender publishes them.[8] You can date the index in your letter. You cannot date proceeds nobody has quoted you yet.",
  },
  workedExample: {
    label:
      "Hypothetical: a 90-key select-service hotel at $11,250,000, on the Grapevine agreement's terms",
    body:
      "This hotel does not exist. The price is exactly half the Residence Inn Grapevine price, so every term in that agreement scales one for one and the arithmetic can be checked line by line.[1]\n\nPrice and unit price. $11,250,000 across 90 keys is $125,000 per key. See [price per key](/glossary/per-key) for what that number can and cannot tell you.\n\nThe deposit. Grapevine's $250,000 initial deposit is 1.11% of $22,500,000, so the same percentage here is $125,000, due within two business days of signing. The matching second deposit at inspection expiry is another $125,000. Total $250,000, which is 2.22% of the price, the same share the real deal carried.\n\nThe clock. Day 0 is signature. Day 17 is the end of inspection, matching Grapevine's December 13 to December 30 window. Until day 17 you can terminate for any reason and get the full $250,000 back. From day 18 the whole $250,000 is the seller's if you do not close. Closing is due 30 days after the window shuts, on day 47, and a one-day extension costs a further $25,000 on Grapevine's ratio, which does not come back either.\n\nWhat the seller still owes you afterwards. Grapevine's cap is 1.50% of price, so here it is $168,750, and the floor is $25,000, which at this smaller price is 0.22% rather than Grapevine's 0.11%. A defect worth $200,000 found in month four therefore pays you $168,750 and leaves $31,250 with you. The same defect found in month seven pays nothing, because the representations have expired. The same defect visible in the data room pays nothing at any point, because it was disclosed.\n\nThat is the argument for spending real money on third-party reports inside a 17-day window. The reports cost a fraction of $31,250, and the clause limiting your recovery is already written."
  },
  faq: [
    {
      q: "Is a letter of intent on a hotel binding?",
      a: "Parts of it usually are and parts are not, and only the document you sign decides which. No public source describes a typical hotel letter of intent. Treat every term as binding until your lawyer tells you it is not."
    },
    {
      q: "How much earnest money does a hotel purchase take?",
      a: "There is no standard. Three hotel agreements filed with the SEC between December 2024 and November 2025 took 2.22%, 3.57% and 1.06% of the purchase price.[1][2][3] Size and hardness are negotiated together."
    },
    {
      q: "How long is due diligence when you buy a hotel?",
      a: "Shorter than buyers expect. The Grapevine agreement gave 17 days of inspection, the Austin agreement a 30-day study period, and the Houston agreement none at all.[1][2][3] Order your reports the week you sign."
    },
    {
      q: "Does the hotel brand have to approve me before I can buy?",
      a: "Yes on a branded hotel. All three filed agreements say the seller is not authorised to sell unless the brand has approved the buyer and the buyer has signed a new franchise agreement.[1][2][3]"
    },
    {
      q: "Who pays the franchise application fee when a hotel changes hands?",
      a: "The buyer, in both Homewood Suites agreements and in Grapevine. Each makes the buyer responsible for the franchise costs, including the change of ownership application fee.[1][2]"
    },
    {
      q: "What happens to my deposit if I walk away from a hotel deal?",
      a: "After the inspection window, the seller keeps it. In the Grapevine agreement the earnest money as liquidated damages is the seller's sole and exclusive remedy, at law or in equity, for a buyer default.[1]"
    },
    {
      q: "How long does a hotel seller stand behind its representations?",
      a: "Briefly. In the Grapevine agreement they survive six months, claims under $25,000 are not actionable, and recovery is capped at $337,500 on a $22,500,000 price, which is 1.50%.[1]"
    },
    {
      q: "Why does the purchase price have to be allocated in the contract?",
      a: "Because section 1060 allocates the consideration by the residual method, and an allocation the parties agree in writing binds both of them unless the IRS decides it is not appropriate.[5] Agree it before diligence closes."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "Purchase and Sale Agreement dated December 13, 2024 (Residence Inn Grapevine, Texas; $22,500,000), Exhibit 10.1 to Moody National REIT II, Inc. Form 8-K filed December 19, 2024",
      url: "https://www.sec.gov/Archives/edgar/data/1615222/000199937124015575/ex10-1.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-24"
    },
    {
      n: 2,
      label:
        "Agreement of Purchase and Sale dated November 17, 2025 (Homewood Suites Houston-Woodlands, Spring, Texas; $8,400,000), Exhibit 10.1 to Moody National REIT II, Inc. Form 8-K filed November 21, 2025",
      url: "https://www.sec.gov/Archives/edgar/data/1615222/000199937125018380/ex10-1.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-24"
    },
    {
      n: 3,
      label:
        "Agreement of Purchase and Sale dated November 24, 2025 (Homewood Suites Austin/Airport Area South, Austin, Texas; $9,400,000), Exhibit 10.1 to Moody National REIT II, Inc. Form 8-K filed November 28, 2025",
      url: "https://www.sec.gov/Archives/edgar/data/1615222/000199937125018942/ex10-1.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-24"
    },
    {
      n: 4,
      label:
        "16 CFR 436.5(q), Item 17: Renewal, Termination, Transfer, and Dispute Resolution",
      url: "https://www.law.cornell.edu/cfr/text/16/436.5",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-24"
    },
    {
      n: 5,
      label:
        "26 U.S.C. 1060, Special allocation rules for certain asset acquisitions",
      url: "https://www.law.cornell.edu/uscode/text/26/1060",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-24"
    },
    {
      n: 6,
      label:
        "26 U.S.C. 1445, Withholding of tax on dispositions of United States real property interests",
      url: "https://www.law.cornell.edu/uscode/text/26/1445",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-24"
    },
    {
      n: 7,
      label: "Manage and report changes to an existing license",
      url: "https://www.tabc.texas.gov/services/tabc-licenses-permits/manage-report-changes-to-an-existing-license",
      publisher: "Texas Alcoholic Beverage Commission",
      accessed: "2026-09-24"
    },
    {
      n: 8,
      label: "Hotel financing rate sheet, September 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-24"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/how-to-underwrite-a-hotel-deal",
      "/buy-a-hotel/due-diligence-checklist",
      "/buy-a-hotel/how-much-money-do-you-need",
      "/buy-a-hotel/depreciation-and-cost-segregation",
      "/buy-a-hotel/seller-financing"
    ],
    glossary: [
      "/glossary/franchise-agreement",
      "/glossary/franchise-fdd",
      "/glossary/pip",
      "/glossary/comfort-letter",
      "/glossary/per-key",
      "/glossary/iom"
    ],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team before you sign a letter of intent",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets represents buyers on hotel acquisitions and arranges the debt behind them, so we negotiate these terms from both sides of the table."
};

export default page;
