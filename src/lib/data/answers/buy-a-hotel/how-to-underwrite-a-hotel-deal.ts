/**
 * How do I underwrite a hotel acquisition?
 * Answer page: /buy-a-hotel/how-to-underwrite-a-hotel-deal
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-09-22): Apple Hospitality REIT's 2025 Form 10-K on EDGAR,
 * the 2026 US Hampton franchise disclosure document (Items 6 and 19), the
 * Interagency Guidelines for Real Estate Lending Policies, 13 CFR 120.910,
 * 16 CFR 436.5(s), SBA's published 7(a) terms and California Revenue and
 * Taxation Code section 110.1. The worked example was recomputed line by
 * line before saving. Do not hand-edit a number without re-reading its
 * source and bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "how-to-underwrite-a-hotel-deal",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "How to Underwrite a Hotel Acquisition",
  h1: "How do I underwrite a hotel acquisition?",
  description:
    "How a buyer turns a hotel's trailing twelve months into a defensible pro forma: the documents, the expense lines owners leave out, what debt constrains.",
  lastUpdated: "2026-09-22",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "How do you underwrite a hotel acquisition?",
    "What financials should I ask for before underwriting a hotel deal?",
    "What's a T-12 and why do hotel buyers ask for one?",
    "How do buyers verify a hotel's reported NOI before closing?",
    "What red flags should I look for in a hotel's financials before buying?",
    "What are red flags in a hotel offering memorandum?",
    "Why is a broker's OM always rosier than reality?"
  ],
  answer:
    "Underwriting a hotel means rebuilding the seller's trailing twelve months into the income the asset will produce under your ownership. Apple Hospitality REIT's 2025 Form 10-K, filed February 23, 2026, shows the shape of that at scale across 217 hotels: 60.0% of revenue went to hotel operating expense and 6.4% to property taxes, insurance and other.[1]",
  takeaways: [
    "Start from the trailing twelve months, never the offering memorandum's pro forma.",
    "Three lines go missing on an owner-operator's statement: a management fee, an FF&E reserve, and taxes and insurance at what they will cost you. Apple Hospitality paid management fees of 3.3% of revenue in 2025 and spent 6.2% of revenue on capital improvements.[1]",
    "The benchmarks are free. The 2026 US Hampton disclosure document puts 2025 average occupancy at 71.0% and average RevPAR at $105.90 across 1,893 comparable hotels.[2]",
    "Debt does not set the price. The only published leverage ceilings are the 85% supervisory loan-to-value limit on improved property and SBA's 15% minimum borrower contribution.[4][5] Coverage floors and spreads are lender-set and unpublished.",
    "A number you cannot trace to a third party is an assumption. Price the hotel on income an appraiser and a credit committee will accept."
  ],
  sections: [
    {
      h2: "What financials should I ask for before I underwrite?",
      lead: "A trailing twelve month operating statement, three full years behind it, the current budget, the STR benchmarking report, the franchise agreement and its latest quality inspection, two years of tax bills, the insurance loss runs and the capital spending history.",
      body: "Ask for all of it in one request and in native format. A PDF summary is a presentation; the monthly export is the record. If a seller will send only a one-page summary, you are being asked to underwrite a claim rather than a hotel.\n\nThe offering memorandum is not on that list on purpose. It is a marketing document written to a seller's brief, which is why its forward year is nearly always better than its trailing year. Read it for the market and the capital plan, then underwrite from the data room.\n\nTwo documents carry more than buyers expect. The franchise agreement says what the brand will charge the next owner, and the brand's disclosure document sets out the fee schedule and the system's reported performance in a form the Federal Trade Commission's Franchise Rule requires the franchisor to stand behind.[3] Both sides of that exchange are covered at [what a seller has to produce](/sell-a-hotel/documents-needed) and [what a buyer has to verify](/buy-a-hotel/due-diligence-checklist)."
    },
    {
      h2: "What is a T-12, and why does every buyer ask for one?",
      lead: "A T-12 is the hotel's profit and loss statement for the most recent twelve consecutive months, presented month by month, and it is the only view that captures one full season without waiting for a calendar year to close.",
      body: "Hotels are seasonal, and their cost structure does not flex as fast as revenue. A calendar year statement ending nine months ago describes a hotel that no longer exists. A T-12 ending last month describes this one.\n\nAsk for it month by month, never as one annual column. That view is where the useful questions live: which months carry the year, whether a rate increase held or was discounted back out, whether payroll moved with occupancy. Ask for the trailing three months too. When the T-3 annualised runs well below the T-12, the hotel is softening.\n\nThen run the cross-check most buyers skip. The franchisor bills its royalty on gross rooms revenue, so the brand's statements are a third party's record of the number the seller reports to you. Hilton's 2026 US Hampton document sets the monthly royalty at 6% of gross rooms revenue and the program fee at 4%.[2] Rooms revenue that will not reconcile to what the brand invoiced is the first thing to resolve."
    },
    {
      h2: "Which expense lines do owners leave out?",
      lead: "A management fee where the seller manages the hotel themselves, a reserve for furniture, fixtures and equipment, and property taxes and insurance at what they will cost you rather than what they cost the seller.",
      body: "None of these omissions is dishonest. An owner who runs their own hotel has no management fee line, and one who pays for a roof out of cash flow has no reserve line. They are still costs you will carry.\n\nThe public filings price the first two. Apple Hospitality REIT, which owned 217 hotels with 29,583 rooms at the end of 2025, reports management fees generally within 2.5% to 3.5% of gross revenues under its variable structure, and booked $47.1 million against $1.41 billion of revenue, or 3.3%.[1] Its capital improvements were $88.2 million, or 6.2% of revenue, with $80 million to $90 million guided for 2026.[1] A buyer underwriting a 4% reserve is underwriting less than a well-capitalised owner of the same kind of hotel actually spent. See [FF&E reserve](/glossary/ffe-reserve) and [NOI](/glossary/noi).\n\nFixed costs are the third trap, and they move on a sale. Apple Hospitality's property taxes, insurance and other expense was 6.4% of revenue in 2025 and rose 6.3% year over year while revenue fell 1.3%.[1] In California, a change in ownership resets the base year value to fair market value on the date of the change, so the buyer's tax bill is struck on the price just paid.[7] Other states reassess on their own cycles. Underwrite the bill you will receive."
    },
    {
      h2: "What can I check my assumptions against?",
      lead: "Two free public sources: the brand's own franchise disclosure document, and the annual filings of the public companies that own the same kind of hotel.",
      body: "Item 19 of a franchise disclosure document is the closest thing to published operating data the hotel business has. The Franchise Rule lets a franchisor make a financial performance representation only where there is a reasonable basis for it.[3]\n\nHilton's 2026 US Hampton document reports on 1,893 comparable hotels for 2025: average occupancy 71.0%, average room rate $149.08, average RevPAR $105.90, and an average RevPAR index of 120.8 against each hotel's competitive set.[2] When you are testing one asset the ranges matter more. RevPAR across that set ran from $34.81 to $300.28, occupancy from 30.7% to 98.2%, and the index from 58.9 to 361.6.[2] A pro forma that moves a hotel from the bottom of those ranges toward the top is not an assumption. It is a plan, and it needs capital and a timeline attached.\n\nThe public owners give you the direction of travel. Apple Hospitality's comparable hotels ran 74.1% occupancy, $159.09 ADR and $117.95 RevPAR in 2025, against 75.3%, $159.31 and $119.92 in 2024: rate held, occupancy gave way.[1] For the cap rate, the [Matthews Hotel Index](/research/mhi/q1-2026) publishes select-service bands by market each quarter, and [a good hotel cap rate in 2026](/hotel-valuation/hotel-cap-rates) explains what moves one hotel inside its band.[9]"
    },
    {
      h2: "What are the red flags in a hotel's financials and its offering memorandum?",
      lead: "Anything the seller cannot trace to a third party, and any improvement that has no capital, staffing or contract behind it.",
      body: "The ones worth stopping for: a forward year beside the T-12 with no stated reason for the gap; occupancy carried by house, complimentary or crew rooms that will not repeat; one group or government contract holding up ADR with no evidence it renews; repairs capitalised onto the balance sheet so the expense line looks light; payroll below market, which usually means understaffed rather than efficient; property taxes that predate the last reassessment; insurance at an expiring premium; and a short remaining franchise term with no property improvement plan estimate attached.\n\nNone of these makes a hotel a bad buy. Each changes the price. Turn every flag into a line in the model rather than a note in the margin, because a flag left in the margin becomes a re-trade three weeks before closing, when you have the least leverage.\n\nThe memorandum's optimism is structural rather than moral: a broker writes to the seller's instruction and presents the asset at its best. See [what an IOM is](/glossary/iom) and [what buyers look for](/sell-a-hotel/what-buyers-look-for)."
    },
    {
      h2: "How much debt will the deal support?",
      lead: "Less than the published ceilings suggest, because the tests that actually bind are set by each lender and none of them publish those tests.",
      body: "Three leverage numbers are genuinely published. Bank regulators set a supervisory loan-to-value limit of 85% on improved property and tell institutions their internal limits should not exceed it.[4] SBA requires a borrower contribution of at least 15% of project cost where the project involves a limited or single purpose building, which is how a hotel is treated, and 20% where the operating business has also traded for two years or less.[5] SBA's 7(a) program caps a loan at $5 million, with up to 25 years on real estate.[6]\n\nEverything else is unpublished. No bank, CMBS lender, life company or debt fund publishes its coverage floor, debt yield floor or spread, which is why our [rate sheet](/rates) marks maximum loan-to-value and coverage as not yet published for every lender type other than SBA.[8] Anyone quoting a market coverage floor is quoting a memory.\n\nSo size the debt the only honest way. Build the pro forma, take it to two or three lenders, and let their quotes say what the hotel finances at. [DSCR](/glossary/dscr) and [debt yield](/glossary/debt-yield) explain the tests they run."
    },
    {
      h2: "How do I get from the pro forma to an offer?",
      lead: "Divide the NOI you can defend by the cap rate the market is actually trading at, sanity-check the result per key, then test whether the equity left behind the debt earns what you need it to.",
      body: "The order matters. Value comes from income and the cap rate, not from the loan proceeds available. A buyer working backwards from the largest loan they can get has priced the debt market rather than the hotel.\n\nRun the per-key cross-check next, because it catches modelling errors a cap rate calculation hides. If your price implies a number per key well outside what the segment trades at, one assumption is doing too much work. [Price per key](/glossary/per-key) covers its limits.\n\nThen keep the exit honest. A forward year that only works at a lower exit cap rate than you paid is a bet on the rate market, not on the hotel. Write that down in your own memo, because the appraiser and the credit committee will find it anyway. [Walk through the valuation math](/hotel-valuation/how-to-value-a-hotel) sets out the calculation, and [how to make an offer on a hotel](/buy-a-hotel/how-to-make-an-offer) covers the terms that go around the number once you have one."
    }
  ],
  table: {
    caption:
      "Where the money went at Apple Hospitality REIT's 217 hotels, year ended December 31, 2025",
    columns: ["Line", "US$ thousands", "Percent of total revenue"],
    rows: [
      ["Room revenue", "1,278,423", "90.5%"],
      ["Food and beverage revenue", "65,676", "4.7%"],
      ["Other revenue", "68,287", "4.8%"],
      ["Total revenue", "1,412,386", "100.0%"],
      ["Hotel operating expense, including franchise and management fees", "847,322", "60.0%"],
      ["  of which franchise fees", "62,550", "4.4%"],
      ["  of which management fees", "47,057", "3.3%"],
      ["Property taxes, insurance and other", "89,732", "6.4%"],
      ["Revenue less those two expense lines", "475,332", "33.7%"],
      ["Capital improvements during 2025", "88,200", "6.2%"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' September 2026 rate sheet marks maximum loan-to-value and coverage as not yet published for every lender type except SBA, whose 504 structure caps at 85% of project cost. It puts the SBA 7(a) maximum allowable rate at 10.00% on the 7.00% Prime effective September 17, 2026.[8]"
  },
  workedExample: {
    label:
      "Hypothetical: a 100-key select-service hotel, using published 2025 benchmarks",
    body:
      "This hotel does not exist. Every input is a public figure, so the arithmetic can be checked line by line.\n\nStart with revenue. The 2026 US Hampton document reports 2025 average occupancy of 71.0% and an average room rate of $149.08 for its comparable hotels.[2] Multiplied, those give a RevPAR of $105.85. The same document separately reports an average RevPAR of $105.90, because each figure averages a different distribution: averages do not compose.[2] At $105.85 across 100 keys for 365 nights, rooms revenue is $3,863,000. Room revenue was 90.5% of Apple Hospitality's total revenue in 2025, so grossing up gives about $4,268,000.[1]\n\nNow the costs, at the rates a public owner of the same kind of hotel recorded in 2025. Hotel operating expense at 60.0% is $2,560,000 and property taxes, insurance and other at 6.4% is $271,000. That leaves $1,437,000, or 33.7% of revenue, matching the portfolio's own 33.7%.[1] A reserve at the 6.2% Apple Hospitality spent on capital improvements is $267,000, so underwritten NOI is $1,170,000.\n\nHere is why the missing lines matter. A seller who manages the hotel themselves and funds capital out of cash flow shows neither the fee nor the reserve, so their statement reports $1,437,000 plus the $142,000 management fee, or $1,579,000. Against a $14,500,000 asking price, which is $145,000 per key, the seller's number is a 10.89% cap rate and yours is 8.07%. The $409,000 between them is worth $5,112,500 at an 8.00% cap rate. That gap, not the negotiation, decides this deal.\n\nTest the debt third, never first. At the 85% supervisory loan-to-value limit the ceiling is $12,325,000, leaving $2,175,000 of equity, and the bank's internal limit sits below that and is published nowhere.[4] An SBA 504 structure needs at least 15% of project cost from the borrower, the same $2,175,000 here.[5] SBA's 7(a) maximum of $5,000,000, amortised over 25 years at the 10.00% maximum allowable rate, costs $545,000 a year, covered 2.15 times by the underwritten NOI.[6][8] Coverage is not the constraint. The $5,000,000 cap is, at 34.5% of the price, which is how a buyer learns early that this is a conventional financing rather than an SBA one."
  },
  faq: [
    {
      q: "What is a T-12 in a hotel deal?",
      a: "The hotel's profit and loss statement for the most recent twelve consecutive months, month by month. It carries a full season of the hotel as it actually traded, which a calendar year ending months ago no longer does."
    },
    {
      q: "How do buyers verify a hotel's reported NOI?",
      a: "By tying the T-12 to third-party records: the franchisor's royalty billings, the STR benchmarking report, bank statements, tax bills and insurance loss runs. A number with no third-party trail is an assumption."
    },
    {
      q: "Should I underwrite a management fee if I will run the hotel myself?",
      a: "Yes. Apple Hospitality REIT disclosed management fees generally within 2.5% to 3.5% of gross revenues in its 2025 Form 10-K and paid 3.3% of revenue.[1] Your buyer and your lender will underwrite that line anyway."
    },
    {
      q: "What FF&E reserve should a hotel buyer use?",
      a: "No public source sets a required number. Apple Hospitality spent $88.2 million on capital improvements in 2025, 6.2% of revenue.[1] The 4% common in models is below what that owner actually spent."
    },
    {
      q: "Why is an offering memorandum more optimistic than the T-12?",
      a: "Because it is a marketing document written to the seller's instruction, using the seller's numbers, to attract the widest field of credible buyers. Read it for the market and the capital plan, then underwrite from the data room."
    },
    {
      q: "What loan-to-value can I assume when underwriting a hotel?",
      a: "Do not assume one. Regulators set an 85% supervisory limit on improved property and expect internal limits below it.[4] No lender publishes its ceiling, coverage floor or spread, so get quotes first."
    },
    {
      q: "How much does a franchise brand take off the top?",
      a: "Each brand publishes it. Hilton's 2026 US Hampton document sets a monthly royalty of 6% of gross rooms revenue plus a 4% program fee.[2] Read your own brand's document rather than a rule of thumb."
    },
    {
      q: "Will my property taxes change after I buy a hotel?",
      a: "Often, and sometimes immediately. California resets a property's base year value to fair market value on a change in ownership.[7] Other states reassess on their own cycles. Underwrite the bill you will get."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "Apple Hospitality REIT, Inc., Form 10-K for the year ended December 31, 2025, filed February 23, 2026: consolidated statements of operations, hotel operating performance and capital improvements",
      url: "https://www.sec.gov/Archives/edgar/data/1418121/000119312526064008/aple-20251231.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-22"
    },
    {
      n: 2,
      label:
        "2026 US Hampton franchise disclosure document, Item 6 (other fees) and Item 19 (financial performance representations), issued March 30, 2026",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-22"
    },
    {
      n: 3,
      label: "16 CFR 436.5(s), Item 19: Financial Performance Representations",
      url: "https://www.law.cornell.edu/cfr/text/16/436.5",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-22"
    },
    {
      n: 4,
      label:
        "Interagency Guidelines for Real Estate Lending Policies, supervisory loan-to-value limits, appendix A to subpart D of 12 CFR part 34",
      url: "https://www.law.cornell.edu/cfr/text/12/appendix-A_to_subpart_D_of_part_34",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-22"
    },
    {
      n: 5,
      label: "13 CFR 120.910, Borrower contributions under the 504 program",
      url: "https://www.law.cornell.edu/cfr/text/13/120.910",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-22"
    },
    {
      n: 6,
      label: "7(a) loan terms: maximum loan amount, maximum interest rate and maturity",
      url: "https://www.sba.gov/sba-lenders/",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-22"
    },
    {
      n: 7,
      label:
        "California Revenue and Taxation Code section 110.1: base year value on purchase or change in ownership",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=110.1",
      publisher: "California Legislative Information",
      accessed: "2026-09-22"
    },
    {
      n: 8,
      label: "Hotel financing rate sheet, September 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-22"
    },
    {
      n: 9,
      label: "Matthews Hotel Index, Q1 2026: select-service cap-rate bands by market",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-22"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/due-diligence-checklist",
      "/buy-a-hotel/how-much-money-do-you-need",
      "/buy-a-hotel/branded-vs-independent",
      "/buy-a-hotel/first-hotel-no-experience"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/cap-rate",
      "/glossary/ffe-reserve",
      "/glossary/dscr",
      "/glossary/debt-yield",
      "/glossary/per-key",
      "/glossary/iom"
    ],
    data: ["/rates", "/research/mhi/q1-2026"]
  },
  cta: {
    label: "Talk to the hospitality team about a hotel you are underwriting",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets represents buyers on hotel acquisitions and arranges the debt behind them, so we read these statements from both sides of the deal."
};

export default page;
