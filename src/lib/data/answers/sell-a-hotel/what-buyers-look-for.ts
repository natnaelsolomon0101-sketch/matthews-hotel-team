/**
 * What do buyers look for when buying a hotel?
 * Answer page: /sell-a-hotel/what-buyers-look-for
 *
 * Written 2026-09-18. Seller's view of the buyer's underwriting. The buyer's
 * own checklist lives at /buy-a-hotel/due-diligence-checklist and the document
 * list at /sell-a-hotel/documents-needed; both are linked, not re-covered.
 * Sources fetched and read 2026-09-18. FDD and SOP page numbers are the
 * documents' own printed page numbers. Arithmetic checked by script.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "what-buyers-look-for",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "What Hotel Buyers Look For Before They Make an Offer",
  h1: "What do buyers look for when buying a hotel?",
  description: "What a hotel buyer and its lender check first: provable NOI, RevPAR index, PIP and transfer costs, franchise term, and whether the deal can be financed.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I sell my hotel?",
    "What documents do I need to sell my hotel?",
    "What's in a hotel CIM (confidential information memorandum)?",
    "What do buyers look for when buying a hotel?",
    "I want to sell my hotel next year. What should I fix first to get the best price?",
    "Why do hotel buyers keep retrading my price after due diligence?",
    "How will a buyer value my Hampton Inn?"
  ],
  answer: "Buyers look for income they can prove and finance. That means a trailing twelve-month NOI that ties to bank statements, a RevPAR index at or above the brand's norm (Hilton's 2026 Hampton FDD reports an average of 120.8 for 2025), a known PIP cost, enough franchise term, and debt coverage that works at September 2026 rates.[1][2] Each gap becomes a price deduction.",
  takeaways: [
    "A buyer's offer is NOI divided by a cap rate, minus what it will cost to keep the flag and fix the building. Sellers control the NOI evidence and can get the PIP number early.",
    "The buyer's lender is a second buyer. SBA requires operating cash flow of at least 1.15 times debt service and at least 10 percent equity on a purchase, with coverage rising to 1.25 on October 1, 2026, and other lenders set their own tests.[3][4]",
    "A change of ownership at a Hampton carries a listed $200,000 application fee, a $10,000 PIP fee, a new franchise agreement and the upgrades Hilton requests.[1] Buyers price all of it.",
    "RevPAR index tells a buyer whether the hotel wins its fair share. Below 100 reads as upside or as a problem, depending on whether the seller can explain it.",
    "Retrades come from surprises in diligence. A seller who finds the problems first gets to price them first."
  ],
  sections: [
    {
      h2: "What is the first thing a hotel buyer looks at?",
      lead: "The trailing twelve-month profit and loss statement, because the buyer's price is built on the NOI it can verify.",
      body: "A hotel buyer values income. The usual method is NOI divided by a cap rate, which is explained at `/hotel-valuation/how-to-value-a-hotel`. So the first request is the last three years of monthly profit and loss statements plus the trailing twelve months, in the industry's standard format. The 12th Revised Edition of the Uniform System of Accounts for the Lodging Industry took effect on January 1, 2026, and its sponsors describe it as the authoritative standard for lodging financial reporting.[5]\n\nThe buyer then rebuilds your NOI its own way. It adds a management fee even if you manage the hotel yourself, a reserve for replacing furniture and equipment, and property taxes at the value it expects after the sale, not your current bill. It removes owner expenses that will not continue. What is left is the number it capitalizes. Sellers who present NOI without those deductions see the gap show up as a lower offer.\n\nProof matters as much as the number. NOI that ties to tax returns and bank statements is financeable. NOI that depends on unreported cash or on add-backs nobody can document is discounted or ignored. The full document list is at `/sell-a-hotel/documents-needed`."
    },
    {
      h2: "How do buyers judge my hotel against its competitors?",
      lead: "With the STR report's RevPAR index, which compares your revenue per available room with a set of competing hotels.",
      body: "A RevPAR index of 100 means the hotel earns its fair share of the competitive set's revenue. Hilton's 2026 Hampton disclosure document defines it as hotel RevPAR divided by comp set RevPAR, times 100, and reports that comparable Hampton hotels averaged a 120.8 index in 2025, with a median of 122.5 and a range from 58.9 to 361.6 (p. 80).[1] Average RevPAR for those hotels was $105.90 on 71.0 percent occupancy and a $149.08 average rate (pp. 78-79).[1]\n\nA buyer reads your index two ways. An index well above the brand's norm says the income is real but may be hard to grow. An index below 100 says the hotel is losing share, and the buyer will want to know why: a tired product, weak revenue management, a new competitor, or a comp set that was chosen badly. If the cause is fixable, a buyer may pay for part of the upside. If the seller cannot explain it, the buyer assumes the worst case.\n\nThe terms are defined at [MPI, ARI and RGI](/glossary/mpi-ari-rgi) and [Competitive Set](/glossary/comp-set). Hilton's figures are for its system and are not a forecast for any hotel."
    },
    {
      h2: "How much do the PIP and the franchise matter to a buyer?",
      lead: "They set the largest deduction from price, because a buyer of a branded hotel has to be approved by the brand and do the work the brand requires.",
      body: "A sale is a change of ownership under the franchise agreement. Under Hilton's 2026 Hampton terms, the seller gives 60 days' written notice, and the buyer must meet Hilton's then-current requirements for new franchisees, submit a change of ownership application, pay the franchise application fee, sign the then-current franchise agreement and agree to Hilton's request for upgrades (p. 74).[1] The listed application fee for a change of ownership is $200,000, and Hilton reports that in 2025 franchisees paid between $25,000 and $200,000 (pp. 16-17).[1] The fee to prepare the PIP is $10,000 (p. 16).[1] The upgrades must be completed within the timeframes in the PIP (p. 59).[1]\n\nThe new agreement generally runs for the remaining term of the old one, or another term Hilton approves (p. 69).[1] A short remaining term worries the buyer's lender as much as the buyer. That case is covered at `/sell-a-hotel/franchise-agreement-expiration`.\n\nFor a seller, the practical step is to order the PIP before going to market. A buyer who does not know the PIP cost will assume a high one. How the PIP flows into price is worked through at `/hotel-valuation/pip-and-hotel-value`. Other brands publish their own transfer terms and fees in their own disclosure documents, compared at `/hotel-franchise-costs`."
    },
    {
      h2: "Why does the buyer's financing affect my price?",
      lead: "Because a buyer who borrows has its loan sized on your hotel's income. If the income cannot carry the debt, the buyer needs more cash or a lower price.",
      body: "No bank, CMBS lender or debt fund publishes its coverage or leverage limits. SBA does, and its programs are one route for buying a smaller hotel. SOP 50 10 8 requires operating cash flow of at least 1.15 times debt service on all business debt, and an equity injection of at least 10 percent of total project costs on a change of ownership (pp. 129-131).[3] SBA has posted SOP 50 10 8.1 with an October 1, 2026 effective date, and it raises the required coverage on an initial acquisition to 1.25, tested on historical or adjusted results.[4]\n\nRates set the other half of the test. On September 17, 2026 the 10-year Treasury was 4.94 percent and the SBA 7(a) maximum variable rate was 10.00 percent, with the 25-year SBA 504 debenture at 6.54 percent.[2] At higher rates the same NOI supports a smaller loan. You can see what your income supports at `/tools/hotel-loan-sizing-calculator`, and SBA's actual hotel lending is tracked at `/data/sba-hotel-lending`.\n\nSellers can help. A hotel with clean financials, a current STR report, a recent survey and environmental report, and a known PIP is faster to finance, and a faster closing is worth money to both sides. A seller note can also bridge a gap, within the limits explained at `/buy-a-hotel/seller-financing`."
    },
    {
      h2: "What physical and legal issues do buyers check?",
      lead: "The building's condition, environmental status, title and survey, licenses, contracts and staffing, each through a third-party report or a document review.",
      body: "The buyer's workstreams are listed in order at `/buy-a-hotel/due-diligence-checklist`: property condition assessment, Phase I environmental report, ALTA survey and title, the franchise application, the liquor license and the staffing plan. The seller's version of that list is simple. Anything those reports will find, you want to know first.\n\nRoofs, elevators, HVAC, the parking lot and life-safety systems are the items that turn into credits at the closing table. Open permits, unrecorded easements and a liquor license that cannot transfer on the buyer's timeline are the items that delay closings. If the hotel is on leased land, the ground lease is its own review, covered at `/sell-a-hotel/selling-a-hotel-on-a-ground-lease`.\n\nContracts matter too. Buyers ask which agreements they must assume: the management agreement, equipment leases, service contracts and union agreements. A management agreement that cannot be terminated on sale narrows the buyer pool."
    },
    {
      h2: "What can I do in the year before I sell?",
      lead: "Make the income provable, learn the PIP number, fix what is cheap to fix, and do not start capital projects a buyer will not pay for.",
      body: "Twelve months out: move the books to the standard format if they are not there, stop running personal expenses through the hotel, and keep monthly STR reports. A full year of clean numbers is what the buyer's lender will underwrite.\n\nSix months out: ask the brand for a PIP, get a contractor's price for it, and have your own roof, mechanical and environmental checks done. Decide with your broker which items to fix and which to disclose and price.\n\nAt listing: have the documents in a data room before the first call. Our published listing process runs about 24 weeks from engagement to closing, and the diligence period is where unprepared sellers lose time and price.[6]\n\nFor a starting estimate of what the income supports, use `/tools/hotel-value-estimator`. For a written opinion from a broker, see `/hotel-valuation/broker-opinion-of-value`."
    }
  ],
  table: {
    caption: "What a hotel buyer checks, the evidence it wants, and how a gap shows up in the offer",
    columns: [
      "What the buyer checks",
      "Evidence it asks for",
      "How a gap is priced"
    ],
    rows: [
      [
        "Provable NOI",
        "Three years and trailing twelve months of P&Ls in the uniform format, tax returns, bank statements[5]",
        "Unproven income is left out of the NOI that gets capitalized"
      ],
      [
        "Market position",
        "STR report with RevPAR index; Hampton's 2025 system average was 120.8 (p. 80)[1]",
        "Low index with no explanation is treated as risk, not upside"
      ],
      [
        "PIP and transfer costs",
        "Brand PIP and a contractor's price; Hampton lists a $200,000 change of ownership application fee and a $10,000 PIP fee (p. 16)[1]",
        "Deducted from price dollar for dollar, often with a contingency"
      ],
      [
        "Franchise term",
        "Franchise agreement; a Hampton buyer generally gets the remaining term (p. 69)[1]",
        "Short term narrows lenders and buyers"
      ],
      [
        "Financeability",
        "SBA: cash flow at least 1.15 times debt service and at least 10% equity (pp. 129-131)[3], 1.25 for an initial acquisition from October 1, 2026[4]; other lenders do not publish their tests",
        "Buyer needs more cash or a lower price"
      ],
      [
        "Building, title, licenses",
        "Property condition, Phase I, survey, title, liquor license, contracts",
        "Credits at closing, or delay"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026, published by Matthews Hotel Markets, puts select-service cap rates at 7.50 to 8.75 percent across 14 markets.[7] At those rates every $100,000 of NOI a buyer cannot verify takes roughly $1.14 million to $1.33 million off the value."
  },
  workedExample: {
    label: "Hypothetical: how a buyer gets from your NOI to its offer",
    body: "Hypothetical. A seller of a 100-key Hampton reports $900,000 of NOI after a management fee and a furniture reserve.\n\nStep 1, value before deductions. At an assumed 8.25 percent cap rate, inside the Matthews Hotel Index select-service band, $900,000 / 0.0825 = $10,909,091.[7]\n\nStep 2, brand and building. The buyer's contractor prices the PIP at $1,200,000, an assumed figure. Hilton's listed change of ownership application fee is $200,000 and the PIP fee is $10,000.[1] Deductions: $1,200,000 + $200,000 + $10,000 = $1,410,000. Offer: $10,909,091 - $1,410,000 = $9,499,091.\n\nStep 3, the lender's test. At SBA's 1.15 coverage ratio, $900,000 of cash flow supports debt service of $900,000 / 1.15 = $782,609 a year.[3] At the 1.25 ratio that applies to initial acquisitions from October 1, 2026, it supports $900,000 / 1.25 = $720,000.[4] Whether that carries the loan the buyer needs depends on the rate and the amortization, which is why the buyer runs this test before it bids.\n\nStep 4, the proof problem. If $100,000 of the NOI cannot be tied to the books, the buyer capitalizes $800,000 instead: $800,000 / 0.0825 = $9,696,970. That is $1,212,121 less value from $100,000 of unproven income.\n\nThe cap rate and PIP cost are assumptions for illustration. The order of the steps is the point."
  },
  faq: [
    {
      q: "What is the most important thing to a hotel buyer?",
      a: "NOI it can prove. The price is NOI divided by a cap rate, so income that ties to tax returns and bank statements is worth more than a higher number that does not."
    },
    {
      q: "How will a buyer value my Hampton Inn?",
      a: "On verified NOI and a cap rate, less the PIP and transfer costs. Hilton's 2026 FDD lists a $200,000 change of ownership application fee and a $10,000 PIP fee, and the buyer signs a new franchise agreement.[1]"
    },
    {
      q: "What RevPAR index do hotel buyers want to see?",
      a: "At or above 100, which is fair share of the comp set. For reference, Hilton reports comparable Hamptons averaged 120.8 in 2025, ranging from 58.9 to 361.6.[1] Below 100 is not fatal if you can show why and how it is fixed."
    },
    {
      q: "Should I do the PIP before I sell my hotel?",
      a: "Not automatically. Order the PIP and price it so buyers are not guessing. Whether to do the work depends on cost, timing and whether the next owner's brand plan would undo it. See /hotel-valuation/pip-and-hotel-value."
    },
    {
      q: "Why do hotel buyers retrade the price after due diligence?",
      a: "Because a report found something the offer did not assume: a roof, an environmental issue, a larger PIP, or NOI that did not tie out. Sellers who commission their own checks first reduce that risk."
    },
    {
      q: "Does the buyer's loan really affect what I get for my hotel?",
      a: "Yes. The loan is sized on your income. SBA, for example, requires cash flow of at least 1.15 times debt service and at least 10 percent equity on a purchase.[3] If the income will not carry the debt, the price or the buyer changes."
    },
    {
      q: "What should I fix before I put my hotel on the market?",
      a: "Fix the books first, then safety and licensing items, then cheap visible repairs. Get prices for big items such as roofs and the PIP and disclose them. Large capital projects may not return their cost right before a sale."
    },
    {
      q: "How long does a buyer's due diligence take on a hotel?",
      a: "It sits inside a sale that runs about 24 weeks from engagement to closing in our published process.[6] Brand approval adds its own clock: Hilton's Hampton agreement calls for 60 days' written notice of a change of ownership.[1]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "2026 Hampton Franchise Disclosure Document: Item 5 (pp. 16-17), Item 11 (p. 59), Item 17 (pp. 69-74) and Item 19 (pp. 78-80)",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section B, Ch. 1: debt service coverage of 1.15 (p. 129) and 10 percent equity injection on a change of ownership (p. 131)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "SOP 50 10 8.1 (effective October 1, 2026), Appendix 15: 7(a) Changes of Ownership, debt service coverage by transaction type",
      url: "https://legacy.sba.gov/sites/default/files/2026-08/SOP%2050%2010%208.1%20effective%2010.1.2026_0.docx",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "HFTP, AHLA and GFC unveil the 12th Revised Edition of the Uniform System of Accounts for the Lodging Industry (adoption date January 1, 2026)",
      url: "https://www.ahla.com/news/hftp-ahla-and-gfc-unveil-groundbreaking-12th-revised-edition-uniform-system-accounts-lodging",
      publisher: "American Hotel & Lodging Association",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/franchise-agreement-expiration",
      "/sell-a-hotel/selling-a-hotel-on-a-ground-lease",
      "/sell-a-hotel/how-long-it-takes"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/mpi-ari-rgi",
      "/glossary/pip",
      "/glossary/comp-set"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/rates",
      "/tools/hotel-value-estimator",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Ask how buyers will read your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells hotels and places the debt buyers use to purchase them, so the same desk sees both the offer and the loan behind it."
};

export default page;
