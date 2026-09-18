/**
 * How do I finance converting my hotel to a new brand?
 * Answer page: /hotel-financing/brand-conversion-financing
 *
 * Brand figures come only from Hilton's public 2026 franchise disclosure documents, read on
 * 2026-09-18. Worked-example arithmetic was recomputed by script before publishing.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "brand-conversion-financing",
  cluster: "hotel-financing",
  isHub: false,
  title: "Financing a Hotel Brand Conversion or Reflag (2026)",
  h1: "How do I finance converting my hotel to a new brand?",
  description: "How owners pay for a hotel reflag in 2026: conversion budgets from public FDDs, exit damages, key money, and the bank, bridge and SBA loans that fund it.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What's it cost to convert a hotel from one brand to another?",
    "How do I finance converting my hotel to a new brand?",
    "My franchise agreement is ending and I want to reflag. How do I pay for the conversion?",
    "Is it worth converting my hotel to a different brand?",
    "How fast can I convert my hotel to a new brand versus building new?",
    "What is key money and do I have to pay it back?",
    "Will my lender let me change my hotel's flag?",
    "I'm buying an independent hotel and want to put a brand on it. Can I finance the PIP with the purchase?"
  ],
  answer: "Most owners fund a conversion with a renovation or bridge loan plus cash, sometimes offset by franchisor key money that arrives after opening. Hilton's disclosure document for Spark, a conversion-only brand, issued March 30, 2026, estimates $3,251,531 to $5,906,193 to convert a 100-room hotel, before real estate.[1] Leaving the old flag early can cost 60 months of royalties on top.[2]",
  takeaways: [
    "A conversion budget has four parts: the new brand's fees, the renovation and FF&E, the cost of leaving the old flag, and cash to carry the hotel through the disruption.",
    "Hilton's 2026 Spark FDD puts a 100-room conversion at about $32,500 to $59,100 per room before real estate, and tells owners to assume a contingency of at least 10 percent of renovation cost.[1]",
    "Exit damages are a formula, not a negotiation starting point. Hilton's 2026 Hampton agreement sets them at the hotel's average monthly royalty times 60 for most of the term.[2]",
    "Key money is not a loan and not free. Hilton calls its incentive a contingent liability that burns off evenly over the franchise term and becomes repayable on termination or transfer.[2]",
    "Your existing lender has to approve the flag change, and the new lender will want a comfort letter from the new franchisor. Start both conversations before you sign the franchise application."
  ],
  sections: [
    {
      h2: "What does a brand conversion actually cost?",
      lead: "The only honest public numbers are the franchisors' own, and Hilton's 2026 estimate for converting a 100-room hotel to Spark is $3.25 million to $5.91 million before real estate.",
      body: "Spark by Hilton is offered for conversion projects only, so its Item 7 table is a pure conversion budget. For a 100-room hotel in good condition, Hilton estimates $1,300,000 to $2,800,000 for construction and renovation, $900,000 to $1,200,000 for furniture, fixtures and equipment, $36,000 to $60,000 for signage, a $75,000 franchise application fee and a $10,000 fee to prepare the property improvement plan. The total is $3,251,531 to $5,906,193, which is about $32,500 to $59,100 per room. It excludes real estate, market studies, insurance and interest.[1]\n\nThree lines in that table matter to a lender. Contingency is $130,000 to $280,000, and Hilton tells owners to assume at least 10 percent of renovation cost. Additional funds for the first three months of operation are $300,000 to $500,000. And Hilton says it cannot estimate pre-conversion costs for any specific existing hotel, because there are too many variables.[1]\n\nOther brands cost more to enter. Hilton's 2026 Hampton document sets the application fee for a new development or conversion at $100,000 plus $400 for each room over 150, with the same $10,000 PIP fee.[2] Hampton's Item 7 estimates new construction, not conversion, so the scope of a Hampton conversion comes from the PIP itself. For how PIP scopes and per-room budgets work, see `/hotel-financing/pip-and-renovation-loans` and `/glossary/pip`."
    },
    {
      h2: "What does it cost to leave my current flag?",
      lead: "If you terminate early, the franchise agreement's liquidated damages clause sets the price, and under Hilton's 2026 Hampton agreement that is usually 60 months of royalties.",
      body: "Hilton's 2026 Hampton FDD lays the formula out by period. If the agreement ends after the second anniversary of opening and before the final 60 months of the term, damages are the hotel's average monthly royalty fees multiplied by 60. In the final 60 months, the multiplier is the number of months remaining. The average is taken over the 24 months before termination, and the royalty is 6 percent of gross rooms revenue.[2]\n\nThat makes timing the biggest variable in a conversion budget. A reflag at natural expiration owes nothing under this formula. A reflag five years early owes five years of royalties. Every franchisor's agreement is different, so read your own, and ask whether the damages are owed if you convert to another brand in the same family.\n\nLenders care because liquidated damages are a use of funds with no collateral value. A bank will usually want that line covered by equity."
    },
    {
      h2: "What loans pay for a conversion?",
      lead: "A bank renovation loan, a bridge loan that also refinances the existing mortgage, or an SBA loan, depending on size, the hotel's current cash flow and how much the conversion disrupts it.",
      body: "A bank loan fits when the hotel already covers its debt and the conversion is a moderate renovation. The capital rules help here: improvements to an existing income-producing property are excluded from the high volatility commercial real estate category when the property's cash flow supports its debt service and expenses under the bank's permanent-loan criteria.[3] Banks do not publish their terms, and our rate sheet marks them not yet published.[4]\n\nA bridge loan fits when the conversion is deep enough to interrupt cash flow, or when the existing loan has to be paid off to allow it. The bridge lender underwrites the stabilized NOI under the new flag, holds back the renovation budget and funds it in draws, and expects to be refinanced once the hotel has a trailing record. Bridge debt floats over SOFR, which was 3.85 percent for September 17, 2026.[4] See `/hotel-financing/bridge-loans`.\n\nSBA works for smaller projects. A 7(a) loan caps at $5 million, and the portion that improves real property can run 25 years plus the period needed to complete the improvements.[5] A 504 project can include the renovation of existing buildings, with a fixed-rate debenture that priced at 6.54 percent for 25 years on September 10, 2026.[6][4] If the new brand meets the FTC definition of a franchise, it must be on the SBA Franchise Directory for the loan to be eligible.[7]\n\nBuying a hotel and converting it in one transaction uses the same three tools, with the purchase price and the conversion budget in one sources-and-uses table. Lenders size that loan to total cost, not to the purchase price alone."
    },
    {
      h2: "What is key money, and does it reduce what I need to borrow?",
      lead: "Key money is a franchisor incentive paid after the hotel opens under the new flag, so it repays debt or equity afterward; it does not fund the renovation.",
      body: "Hilton's 2026 Hampton FDD describes its version precisely. An incentive is a financial contribution to assist with the development or conversion of the hotel, offered at Hilton's sole discretion. The owner and its principals sign a development incentive note. The money is disbursed within 30 days after the hotel opens with Hilton's consent, provided the PIP is complete and the application fee is paid.[2]\n\nThe FDD says an incentive is not a loan, it is a contingent liability. It does not have to be repaid unless the franchise terminates before the end of the term or a transfer occurs. The repayable amount falls by an equal share each year, one twentieth a year on a 20-year term, and bears no interest unless it comes due and is not paid, when it accrues at 1.5 percent per month or the highest rate allowed by law.[2] Hilton adds that it generally does not offer other financing, though in rare cases it may offer a mezzanine loan or a guaranty.[2]\n\nTwo financing consequences follow. Your lender will treat the note as an obligation of the principals and will want it disclosed. And a buyer of the hotel either assumes the note with the franchisor's consent or you repay the unamortized balance at closing, so key money taken today is a deduction from sale proceeds for years."
    },
    {
      h2: "Will my lender let me change the flag?",
      lead: "Almost every hotel loan requires lender consent to terminate or replace the franchise agreement, so the lender is a party to the decision whether or not it funds the work.",
      body: "A branded hotel loan is underwritten to the flag. Changing it without consent is typically a default, and under a non-recourse loan an unpermitted franchise change can sit close to the carve-out list; see `/hotel-financing/non-recourse-loans`. A CMBS servicer will process the request under the loan documents, which takes time and fees; `/hotel-financing/cmbs-loans` explains who decides.\n\nThe new lender, or the existing one, will also want a comfort letter from the new franchisor, which lets the lender step into the franchise agreement after a foreclosure. Hilton's 2026 Hampton FDD lists a $3,500 processing fee for a lender comfort letter.[2] Order it when you apply for the franchise, not the week before closing."
    },
    {
      h2: "How long does a conversion take, and what should I line up first?",
      lead: "Hilton tells Spark applicants to expect about 6 to 18 months for conversion work, depending on the condition of the hotel, with deadlines written into the franchise agreement.",
      body: "That is the franchisor's own estimate, for its own conversion brand, so treat it as a planning range.[1] The start and completion dates are set project by project in the PIP and the franchise agreement, and Hilton charges a $10,000 fee for an extension.[2] A loan that funds in draws has to be closed before the first deadline, which means the loan process and the franchise application run in parallel.\n\nThe order that works: get the PIP scope and a contractor's price, confirm the exit cost and date under the old agreement, ask the current lender what it will consent to, then take the full sources-and-uses budget to lenders. Whether the conversion is worth doing is a valuation question, not a financing one. The test is whether the NOI gain under the new flag, capitalized, exceeds the all-in cost; `/hotel-financing/refinance-or-sell` walks through the same comparison for an owner deciding whether to invest or exit."
    }
  ],
  table: {
    caption: "What a hotel brand conversion budget contains, and what usually funds each line",
    columns: [
      "Budget line",
      "Public figure",
      "What usually funds it"
    ],
    rows: [
      [
        "New franchise application fee",
        "Spark $75,000; Hampton $100,000 plus $400 per room over 150[1][2]",
        "Equity, due with the application"
      ],
      [
        "PIP preparation fee",
        "$10,000 at both brands[1][2]",
        "Equity"
      ],
      [
        "Renovation and leasehold improvements",
        "Spark, 100 rooms: $1,300,000 to $2,800,000[1]",
        "Loan proceeds, funded in draws"
      ],
      [
        "Furniture, fixtures and equipment",
        "Spark, 100 rooms: $900,000 to $1,200,000[1]",
        "Loan proceeds or FF&E reserve"
      ],
      [
        "Signage and systems",
        "Spark signage $36,000 to $60,000; computer systems $38,595 to $92,895[1]",
        "Loan proceeds"
      ],
      [
        "Contingency",
        "At least 10% of renovation cost[1]",
        "Loan holdback plus equity"
      ],
      [
        "Operating funds, first three months",
        "Spark: $300,000 to $500,000[1]",
        "Equity or working-capital portion of an SBA 7(a) loan"
      ],
      [
        "Liquidated damages to the old franchisor",
        "Hampton formula: average monthly royalty times 60 for most of the term[2]",
        "Equity; lenders rarely fund it"
      ],
      [
        "Franchisor incentive (key money)",
        "Paid within 30 days after opening; repayable balance falls evenly over the term[2]",
        "Arrives after the work; pays down debt or returns equity"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet indexes its Bridge and debt fund row, the row most conversions are financed from, to SOFR at 3.85% for September 17, 2026, and notes that a bridge loan almost always requires a purchased rate cap. The spread is marked not yet published.[4]"
  },
  workedExample: {
    label: "Hypothetical: reflagging a 100-room hotel five years before the old agreement expires",
    body: "Hypothetical. A 100-room hotel earns $3,200,000 a year in rooms revenue under a franchise agreement that uses the liquidated damages formula in Hilton's 2026 Hampton FDD, with more than 60 months left on the term. The owner plans a conversion with a $4,500,000 budget, inside the $3,251,531 to $5,906,193 range Hilton publishes for a 100-room Spark conversion.[1] The budget, the revenue and the incentive below are assumptions for the arithmetic.\n\nExit cost. The royalty is 6 percent of rooms revenue: $3,200,000 times 0.06 divided by 12 equals $16,000 a month. Multiplied by 60, liquidated damages are $960,000.[2]\n\nAll-in cost. $4,500,000 plus $960,000 equals $5,460,000, or $54,600 per room. The exit cost is 17.6 percent of the total, and it buys nothing a lender can take as collateral.\n\nFinancing. The conversion budget alone would fit under the $5,000,000 SBA 7(a) cap with $500,000 of room.[5] Any existing mortgage to refinance would not, so this owner is looking at a bank or bridge loan for the $4,500,000 and equity for the $960,000.\n\nKey money. Suppose the new franchisor offers a $500,000 incentive on a 20-year term. It arrives within 30 days after opening, so it repays part of the loan; it cannot fund the work. The repayable amount falls by $25,000 a year. If the owner sells after 6 years and the buyer does not assume the note, $500,000 times 14 divided by 20, or $350,000, comes out of sale proceeds.[2]\n\nWaiting until the last 60 months of the old agreement shrinks the $960,000 by $16,000 for every month closer to expiration."
  },
  faq: [
    {
      q: "What's it cost to convert a hotel from one brand to another?",
      a: "Hilton's 2026 FDD for Spark, a conversion-only brand, estimates $3,251,531 to $5,906,193 for a 100-room hotel, about $32,500 to $59,100 per room, before real estate. Add any liquidated damages owed to the old franchisor. Other brands publish their own figures."
    },
    {
      q: "My franchise agreement is ending and I want to reflag. How do I pay for the conversion?",
      a: "At expiration there are usually no exit damages, so the budget is fees, renovation, FF&E and carry. A bank renovation loan works if the hotel covers its debt today. A bridge loan works if the conversion interrupts cash flow. SBA 7(a) or 504 works on smaller projects."
    },
    {
      q: "What is key money, and do I have to pay it back?",
      a: "It is a franchisor incentive paid after the hotel opens under the new flag. Hilton's 2026 Hampton FDD calls it a contingent liability, not a loan. The repayable amount falls evenly each year and comes due if the franchise terminates early or the hotel is transferred."
    },
    {
      q: "Will my lender let me change my hotel's flag?",
      a: "You need its consent under almost every hotel loan. Bring the new franchise approval, the PIP budget and the funding plan. A bank decides case by case. A CMBS servicer follows the loan documents. Changing flags without consent is typically a default."
    },
    {
      q: "Can I finance the PIP together with the purchase when I buy a hotel to convert?",
      a: "Yes. Lenders size an acquisition with a conversion to total cost, meaning price plus the conversion budget, and fund the renovation in draws. Bridge lenders and SBA lenders both do this. Permanent lenders such as CMBS generally want the work finished first."
    },
    {
      q: "How long does a hotel conversion take?",
      a: "Hilton's 2026 Spark FDD says it generally anticipates conversion projects to take about 6 to 18 months, depending on the condition of the existing hotel. That is the franchisor's estimate. Your deadlines are written into the franchise agreement and the PIP."
    },
    {
      q: "What are liquidated damages on a hotel franchise agreement?",
      a: "A formula payment for ending the agreement early. Under Hilton's 2026 Hampton agreement it is the hotel's average monthly royalty times 60 for most of the term, and the months remaining in the last 60. Read your own agreement, because formulas differ."
    },
    {
      q: "Is it worth converting my hotel to a different brand?",
      a: "Only if the NOI gain under the new flag, capitalized at a realistic cap rate, exceeds the all-in cost including exit damages and lost revenue during the work. We do not publish a typical RevPAR lift, because no public primary source supports one."
    }
  ],
  sources: [
    {
      n: 1,
      label: "2026 US Spark by Hilton Franchise Disclosure Document (issued March 30, 2026): Item 1, Item 7 (100-room conversion, pp. 33-34) and Item 11 (conversion timing, p. 60)",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Spark.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "2026 US Hampton Franchise Disclosure Document (issued March 30, 2026): Item 5 initial fees (pp. 15-16), Item 6 comfort letter fee and liquidated damages (pp. 25-26, 31), Item 10 financing and incentives (pp. 44-45)",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "12 CFR 217.2, Definitions: HVCRE exposure, exclusion for improvements to existing income-producing property",
      url: "https://www.law.cornell.edu/cfr/text/12/217.2",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/partners/lenders/7a-loan-program/terms-conditions-eligibility",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "504 loans",
      url: "https://www.sba.gov/funding-programs/loans/504-loans",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section A, Ch. 1: the SBA Franchise Directory (pp. 31-32)",
      url: "https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/pip-and-renovation-loans",
      "/hotel-financing/bridge-loans",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/non-recourse-loans",
      "/hotel-financing/refinance-or-sell"
    ],
    glossary: [
      "/glossary/pip",
      "/glossary/noi",
      "/glossary/revpar"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk through a conversion budget with the capital markets desk",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets builds the sources-and-uses table for a conversion before it approaches lenders, exit damages and key money included."
};

export default page;
