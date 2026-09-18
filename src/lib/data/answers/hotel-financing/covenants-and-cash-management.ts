/**
 * What covenants and cash management will my hotel lender require?
 * Answer page: /hotel-financing/covenants-and-cash-management
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "covenants-and-cash-management",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Loan Covenants and Cash Management (2026)",
  h1: "What covenants and cash management will my hotel lender require?",
  description: "Lockboxes, cash sweep triggers, DSCR tests, FF&E and seasonality reserves, and guaranties on hotel loans, with terms quoted from 2026 public loan filings.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What covenants and cash management will my hotel lender require?",
    "My hotel term sheet says hard lockbox with springing cash management. What does that mean?",
    "What triggers a cash sweep on a hotel loan?",
    "How much FF&E reserve will my hotel lender require?",
    "What is a seasonality reserve on a hotel loan?",
    "My hotel's DSCR dropped below the covenant. What happens now?",
    "What is a completion guaranty on a hotel construction loan?",
    "Do bank hotel loans have DSCR covenants?"
  ],
  answer: "Expect a lockbox for hotel revenue, a cash sweep that starts if coverage falls, an FF&E reserve and often a seasonality reserve. Thresholds are set loan by loan. One 310-room Marriott loan dated May 28, 2026 traps cash if DSCR falls below 1.25 times and reserves at least 4.0 percent of revenue for FF&E.[1] Bank loans add guarantor net worth and liquidity covenants.[2]",
  takeaways: [
    "A hard lockbox means credit card receipts go straight to a lender-controlled account. Springing cash management means the lender only keeps the cash after a trigger.[1][3]",
    "The trigger is usually a DSCR test. Two hotel loans securitized in 2026 used 1.25 times and 1.30 times. Those are two loans, not a standard.[1][3]",
    "FF&E reserves in both loans were the greater of 4.0 percent of revenue and the amount the franchise agreement requires.[1][3]",
    "A seasonality reserve collects cash in strong months to cover debt service in weak ones. One 2026 loan took $595,000 up front.[1]",
    "A tripped covenant is not a payment default, but it moves control of the hotel's cash to the lender. At December 31, 2025, one public hotel REIT had 43 hotels in cash traps.[4]"
  ],
  sections: [
    {
      h2: "What is a lockbox, and what does springing cash management mean?",
      lead: "A lockbox is a lender-controlled bank account that receives the hotel's revenue, and springing cash management means the lender starts holding that cash only after a trigger event.",
      body: "Public CMBS term sheets spell the mechanics out. On a $46.5 million loan secured by the 310-room Marriott Tampa Westshore, dated May 28, 2026, the borrower had to deliver direction letters at closing telling its credit card banks and processors to send all receipts to the lender-controlled lockbox account, and must deposit all other revenue within three business days of receipt. Funds in the lockbox are transferred to the borrower each business day unless a cash trap event period exists. During one, all funds are swept daily to a cash management account under the lender's control, applied under the loan documents, and any excess cash flow may be held by the lender as additional collateral.[1]\n\nA $76.5 million loan on the 226-room Holiday Inn Hotel Chelsea in New York, dated June 5, 2026, uses the same structure: a hard lockbox with springing cash management.[3]\n\nA 2026 CMBS prospectus defines the two types for hotels. A hospitality property has a hard lockbox if credit card receivables must be deposited directly into the lender-controlled account, even though the manager deposits cash and checks. It has a soft lockbox if the borrower or property manager deposits the credit card receivables, cash and checks.[6] The direction letters to the card processors are what make a hotel lockbox hard."
    },
    {
      h2: "What triggers a cash sweep on a hotel loan?",
      lead: "A cash sweep on a hotel loan is usually triggered by an event of default or by DSCR falling below a stated level, and some loans add more triggers.",
      body: "The Marriott Tampa Westshore loan has two triggers: an event of default, or net cash flow DSCR falling below 1.25 times for any calendar quarter. The sweep ends when the default is cured or DSCR is at least 1.25 times for one calendar quarter.[1]\n\nThe Holiday Inn Hotel Chelsea loan has six: an event of default, DSCR below 1.30 times, any outstanding PIP requirement, a bankruptcy of the borrowers, the guarantor or an affiliated manager, any period in which a mezzanine loan is outstanding, and a breach of the guarantor's financial covenants or a failure to deliver the guarantor's financial reports. The DSCR trigger is cured only after DSCR stays at or above 1.30 times for two consecutive calendar quarters.[3]\n\nThose are two loans. No lender publishes its trigger levels, and our rate sheet does not print one.[5] The terms that matter as much as the number are how DSCR is defined, how many quarters it takes to cure, and whether trapped cash is released to pay operating expenses and the PIP."
    },
    {
      h2: "How much FF&E reserve will a hotel lender require?",
      lead: "In two hotel loans securitized in 2026, the FF&E reserve was the greater of 4.0 percent of revenue and whatever the franchise or management agreement requires.",
      body: "The Marriott Tampa Westshore loan requires monthly FF&E deposits, initially $65,645, equal to the greater of the existing deposit and the greater of 1/12th of 4.0 percent of underwritten revenue for the prior fiscal year and the amount the franchise agreement requires.[1] The Holiday Inn Hotel Chelsea loan requires the greater of 4.0 percent of projected gross revenue, the amount under the management agreement and the amount under the franchise agreement, initially about $68,494 a month.[3]\n\nPIPs get their own reserve. The Tampa loan took $4,414,900 at closing for an existing PIP, and requires cash or a letter of credit for 100 percent of the estimated cost of any new PIP within 15 days of notice, less amounts already reserved.[1] The Chelsea loan requires 110 percent of estimated PIP costs before work starts.[3]\n\nOne lender's underwriting guidelines in a 2026 prospectus add that on certain hotel loans the FF&E reserve may be held by the franchisor or the manager instead of the lender.[6] `/glossary/ffe-reserve` explains the reserve itself and `/hotel-financing/pip-and-renovation-loans` covers PIP funding."
    },
    {
      h2: "What is a seasonality reserve?",
      lead: "A seasonality reserve is cash the lender collects during a hotel's strong months and releases to pay debt service during its weak months.",
      body: "The Tampa loan took $595,000 up front. The funds may be used for debt service in January and June through November if operating cash flow is short. The borrower refills the reserve with four deposits of $148,750 in February through May, only if the balance is below the required amount. The lender may resize the reserve to cover projected shortfalls at a 1.30 times DSCR, based on the prior twelve months.[1]\n\nThe Chelsea loan works on the opposite calendar. The borrowers deposit $250,000 on each payment date in October through January to protect payments in February, March and April.[3]\n\nProspectus risk factors explain why lenders ask. The lodging industry is generally seasonal, and seasonality can be expected to cause periodic fluctuations in room revenue, occupancy, rates and operating expenses.[6] The OCC's examiner handbook lists revenue seasonality among the property-specific factors a bank should consider on a hotel loan.[2]"
    },
    {
      h2: "What financial covenants do bank hotel loans carry?",
      lead: "Bank hotel loans commonly carry DSCR, debt yield, loan-to-value and guarantor net worth or liquidity covenants, tested from financial statements the borrower must deliver.",
      body: "The OCC's Comptroller's Handbook on commercial real estate lending lists the most common financial covenants for income-producing property loans: debt yield, DSCR, loan-to-value, loan-to-cost, and borrower or guarantor minimum net worth or liquidity.[2] It says loan covenants should require periodic financial information on the project, the borrowing entities and the guarantors. It also says that properties with volatile cash flows, such as hotels, may warrant a higher DSCR.[2]\n\nTwo definitions deserve attention. The handbook notes that DSCR calculated for covenant compliance may differ from the DSCR used in underwriting, and that when loan documents contain coverage covenants, income and expenses should be clearly defined.[2] Ask whether the covenant DSCR deducts an FF&E reserve and a management fee, and whether it uses the actual payment or an assumed one.\n\nA bank covenant breach works differently from a CMBS trigger. It is typically a default under the loan agreement, which the bank may waive or use to renegotiate terms. `/hotel-financing/loan-workouts` covers that conversation."
    },
    {
      h2: "What are completion and carry guaranties?",
      lead: "A completion guaranty is the sponsor's promise to finish a construction or renovation project, and a carry guaranty is a promise to cover interest and operating shortfalls until the hotel supports itself.",
      body: "The OCC handbook recognizes both as limited guarantees: some guarantees may be limited in nature, such as interest only or construction completion only, reduced in amount, or released during the loan term as conditions are met.[2] On construction loans it also describes what happens when a budgeted interest reserve runs out before the project is complete: the bank generally requires the borrower or guarantor to provide additional cash to cover interest or replenish the reserve.[2]\n\nFor construction and development loans, the handbook lists covenants that include limits on additional debts, guarantees and liens, the borrower's or guarantor's minimum liquidity and net worth, and restrictions on distributions to owners before repayment.[2] `/hotel-financing/construction-loans` covers the loan itself.\n\nNon-recourse permanent loans still carry a guaranty of the carve-outs, and that guarantor may have its own financial covenants. In the Chelsea loan, a guarantor covenant breach is a cash management trigger.[3] `/hotel-financing/non-recourse-loans` and `/glossary/non-recourse-carve-outs` explain the carve-outs."
    },
    {
      h2: "What happens when a covenant or trigger is tripped?",
      lead: "When a cash management trigger is tripped, the hotel keeps operating, but the lender controls the cash left after debt service until the trigger is cured.",
      body: "Ashford Hospitality Trust, a public hotel owner, describes the effect in its annual report. When cash trap provisions are triggered, substantially all of the profit generated by the hotels is deposited into lockbox accounts and swept into cash management accounts for the benefit of the lenders, and certain disbursements require lender consent. At December 31, 2025, 43 of its hotels were in cash traps and approximately $4.5 million of its restricted cash was subject to them.[4]\n\nFor a private owner the consequences are practical. Distributions stop. Owner-funded projects need lender approval. And trapped cash is additional collateral, not a prepayment, so it does not reduce the loan. In the Chelsea loan, the lender must return the excess cash reserve to the borrowers once the trigger is cured and no other trigger exists.[3]\n\nThe best time to negotiate is before signing: the trigger level, the DSCR definition, the cure period, and the right to use trapped cash for operating expenses, taxes, insurance and PIP work."
    }
  ],
  table: {
    caption: "Cash management and reserve terms in two hotel loans securitized in 2026",
    columns: [
      "Term",
      "Marriott Tampa Westshore, 310 rooms[1]",
      "Holiday Inn Hotel Chelsea, 226 rooms[3]"
    ],
    rows: [
      [
        "Loan and note date",
        "$46,500,000; May 28, 2026",
        "$76,500,000 whole loan; June 5, 2026"
      ],
      [
        "Rate and amortization",
        "6.6130%; 300-month amortization",
        "7.43100%; interest-only for 60 months"
      ],
      [
        "Underwritten DSCR and debt yield",
        "1.84x NCF DSCR; 16.8% NOI debt yield",
        "1.40x NCF DSCR; 11.6% NOI debt yield"
      ],
      [
        "Lockbox and cash management",
        "Hard lockbox; springing cash management",
        "Hard lockbox; springing cash management"
      ],
      [
        "DSCR trigger",
        "Below 1.25x for any calendar quarter",
        "Below 1.30x; cured after two consecutive quarters"
      ],
      [
        "FF&E reserve",
        "Greater of 1/12th of 4.0% of prior-year revenue and the franchise requirement; initially $65,645 a month",
        "Greater of 4.0% of projected gross revenue and the management or franchise requirement; about $68,494 a month"
      ],
      [
        "Seasonality reserve",
        "$595,000 up front; $148,750 deposits February to May if below the required balance",
        "$250,000 on each payment date October to January"
      ],
      [
        "PIP reserve",
        "$4,414,900 up front; 100% of any new PIP within 15 days of notice",
        "110% of estimated PIP costs before work starts"
      ],
      [
        "Future mezzanine debt",
        "Not permitted",
        "Not permitted"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% and SOFR at 3.85% as of September 17, 2026. It marks conventional DSCR and debt yield thresholds as not yet published, because no lender publishes them. The covenant levels on this page come from individual public loan filings.[5]"
  },
  workedExample: {
    label: "Hypothetical: how far NOI can fall before a 1.25x cash sweep trigger on a $10.0M hotel loan",
    body: "Hypothetical. Loan $10,000,000 at an assumed 7.00 percent with 25-year amortization. Hotel revenue $4,200,000. Net cash flow after the FF&E reserve $1,450,000. The 1.25 times trigger is an assumption borrowed from one public loan, not a standard.\n\nDebt service. The payment is $70,678 a month, or $848,135 a year. DSCR today is $1,450,000 divided by $848,135, or 1.71 times.\n\nTrigger level. Cash management springs when net cash flow falls below 1.25 times $848,135, or $1,060,169. That is a decline of $389,831, or 26.9 percent, from today's level.\n\nAfter the trigger. Suppose net cash flow falls to $1,000,000. DSCR is 1.18 times. The hotel still covers its payment with $151,865 to spare, so there is no payment default. But that $151,865 is held by the lender as additional collateral instead of being distributed, until DSCR recovers to the cure level for the number of quarters the documents require.\n\nFF&E reserve. At 4.0 percent of $4,200,000 revenue, the reserve is $168,000 a year, or $14,000 a month. It is deducted before net cash flow, so a lender that tests DSCR on net cash flow has already counted it."
  },
  faq: [
    {
      q: "My hotel term sheet says hard lockbox with springing cash management. What does that mean?",
      a: "Your credit card processors will send receipts directly to a lender-controlled account. In normal times that cash is passed to you each business day. If a trigger is tripped, such as DSCR falling below the stated level, the lender keeps the cash and pays expenses under a waterfall."
    },
    {
      q: "What triggers a cash sweep on a hotel loan?",
      a: "An event of default and a DSCR test are the usual triggers. In two 2026 securitized hotel loans the DSCR levels were 1.25 and 1.30 times. One also listed an open PIP, a bankruptcy, a mezzanine loan and a guarantor covenant breach."
    },
    {
      q: "How much FF&E reserve will my hotel lender require?",
      a: "Two hotel loans securitized in 2026 both required the greater of 4.0 percent of revenue and the amount the franchise or management agreement requires. Your lender sets its own figure, so check the term sheet and your franchise agreement together."
    },
    {
      q: "My hotel's DSCR dropped below the covenant. What happens now?",
      a: "On a securitized loan, cash management usually springs and excess cash is held until DSCR recovers for the required number of quarters. On a bank loan it is usually a covenant default the bank can waive or use to renegotiate. Call the lender or servicer before the test date."
    },
    {
      q: "Do bank hotel loans have DSCR covenants?",
      a: "Commonly, yes. The OCC's examiner handbook lists DSCR, debt yield, loan-to-value, loan-to-cost and borrower or guarantor net worth or liquidity as the most common financial covenants on income-producing property loans, and says volatile properties such as hotels may warrant a higher ratio."
    },
    {
      q: "Is trapped cash applied to my loan balance?",
      a: "Usually not. In the public examples, excess cash is held as additional collateral and returned once the trigger is cured and no other trigger exists. After an event of default, the lender may apply the funds to the debt in whatever order it chooses."
    },
    {
      q: "What is a completion guaranty on a hotel construction loan?",
      a: "It is the sponsor's personal or corporate promise to finish the project and pay cost overruns. The OCC handbook describes construction completion guarantees as a limited form of guarantee that may be released as conditions are met. A carry guaranty covers interest and shortfalls until stabilization."
    },
    {
      q: "Can I negotiate hotel loan covenants?",
      a: "Yes, before you sign. The points worth negotiating are the trigger level, how DSCR is defined, how many quarters it takes to cure, and whether trapped cash can pay operating expenses and PIP costs. After closing, changes need lender or servicer consent."
    }
  ],
  sources: [
    {
      n: 1,
      label: "BANK5 2026-5YR23, free writing prospectus: structural and collateral term sheet dated June 22, 2026 (Loan No. 9, Marriott Tampa Westshore: reserves, lockbox and cash management, pp. T-104 to T-108)",
      url: "https://www.sec.gov/Archives/edgar/data/2140978/000153949726001820/n5964_x2-ts.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Comptroller's Handbook: Commercial Real Estate Lending, Version 2.0 (March 2022, updated March 20, 2025): interest reserves (p. 8), construction covenants (p. 24), guarantees (p. 30), financial covenants (p. 41), DSCR and hotels (p. 43), reporting covenants (p. 49), hospitality (p. 124)",
      url: "https://www.occ.treas.gov/publications-and-resources/publications/comptrollers-handbook/files/commercial-real-estate-lending/pub-ch-commercial-real-estate.pdf",
      publisher: "Office of the Comptroller of the Currency",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "BMO 2026-5C16 Mortgage Trust, free writing prospectus: structural and collateral term sheet dated August 4, 2026 (Loan No. 10, Holiday Inn Hotel Chelsea: reserves, lockbox and trigger period, pp. 135-140)",
      url: "https://www.sec.gov/Archives/edgar/data/2136643/000153949726002077/n6057_x4-ts.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Ashford Hospitality Trust, Inc., Form 10-K for the year ended December 31, 2025 (filed March 23, 2026): cash trap provisions, risk factors and liquidity",
      url: "https://www.sec.gov/Archives/edgar/data/1232582/000123258226000067/aht-20251231.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Benchmark 2026-B42 Mortgage Trust, prospectus (Form 424B2, filed February 25, 2026): hospitality seasonality risk factor (p. 85); hard and soft lockbox definitions for hospitality properties (pp. 166, 168); escrow requirements, FF&E reserves held by franchisor or manager (p. 292)",
      url: "https://www.sec.gov/Archives/edgar/data/2110410/000153949726000776/n5676_x16-424b2.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/non-recourse-loans",
      "/hotel-financing/loan-workouts",
      "/hotel-financing/mezzanine-debt-and-preferred-equity"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/ffe-reserve",
      "/glossary/debt-yield",
      "/glossary/non-recourse-carve-outs"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Compare lender term sheets for your hotel loan",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges hotel financing from $5 million and compares lender term sheets on covenants, reserves and cash management as well as rate."
};

export default page;
