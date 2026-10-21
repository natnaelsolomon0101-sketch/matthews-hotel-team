/**
 * Why does my bank say it is full on hotel loans?
 * Answer page: /hotel-financing/bank-cre-concentration-limits
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-21):
 *   - Concentrations in Commercial Real Estate Lending, Sound Risk Management
 *     Practices, 71 FR 74580 (December 12, 2006), read as the govinfo HTML,
 *     for the two supervisory criteria (construction at 100 percent of total
 *     capital; total CRE at 300 percent with 50 percent growth over the prior
 *     36 months), footnotes 4, 5 and 6 naming the Call Report lines, the
 *     scope paragraphs defining which loans count, the sentence that the
 *     criteria do not constitute limits, the no-safe-harbor sentence, and the
 *     preamble passage where commenters asked about motels and hotels;
 *   - the FFIEC 031 and 041 Call Report instructions for Schedule RC-C, the
 *     September 2026 edition on fdic.gov, for item 1.e.(1) and item 1.e.(2),
 *     the sentence that puts loans secured by hotels and motels in 1.e.(2),
 *     the nursing home and assisted-living exception that hotels do not get,
 *     and the rule that the owner-occupied determination is made at
 *     acquisition and need not be reviewed afterwards. The text is word for
 *     word identical to the September 2023 edition, checked by diff;
 *   - FDIC Risk Review 2026 (published April 22, 2026, data through the
 *     fourth quarter of 2025), for the 200 percent industry median CRE
 *     concentration ratio, the 311 percent median at banks with $1 billion to
 *     $10 billion of assets, the 289 percent median at banks with $10 billion
 *     to $100 billion, the 214 percent year-end 2008 peak, the 3.1 percent
 *     CRE loan growth in 2025 and footnote 10's tier 1 plus allowance
 *     denominator;
 *   - FDIC Risk Review 2025, footnote 12, for the 31 percent of all banks
 *     (1,374 banks) that were CRE-concentrated at year-end 2024;
 *   - the Interagency Guidelines for Real Estate Lending Policies, appendix A
 *     to subpart A of 12 CFR part 365 on Cornell LII, for the supervisory
 *     loan-to-value table, the 100 percent of total capital aggregate on
 *     loans above those limits, the 30 percent sub-limit, the instruction to
 *     include all loans secured by the same property, and footnote 4's
 *     definition of total capital as tier 1 plus the allowance;
 *   - FDIC FIL-64-2023, Managing Commercial Real Estate Concentrations in a
 *     Challenging Economic Environment (December 18, 2023), and its
 *     attachment, which reaffirms the 2006 guidance and tells institutions to
 *     keep making CRE credit available;
 *   - the Statement on Prudent Risk Management for CRE Lending, FIL-62-2015
 *     (December 18, 2015), for what the agencies may ask a bank to do;
 *   - the July 2026 Senior Loan Officer Opinion Survey, table 1 question 8,
 *     for the 13.2 / 84.9 / 1.9 split on nonfarm nonresidential standards in
 *     the second quarter of 2026 and the special question on where the level
 *     of standards sits against its post-2005 midpoint;
 *   - 12 U.S.C. 1757a on Cornell LII, for the credit union member business
 *     loan cap.
 *
 * The worked example was recomputed line by line with
 * scripts/check-cre-concentration-math.mjs before saving: 57 assertions
 * covering both concentration ratios on both denominators, the 36-month
 * growth test before and after each loan, the headroom to the 300 percent
 * line, the supervisory loan-to-value test, the 30 percent bucket and the
 * template's own answer, takeaway, FAQ, source and body-length limits.
 *
 * Deliberately absent: the bank's own internal limit on hotel exposure, the
 * share of hotel loan applications declined on concentration grounds, and any
 * ratio at a named bank. No lender publishes the first, no agency publishes
 * the second, and naming a bank would turn public data into a claim about a
 * third party. The page tells the owner where to read the public numbers
 * instead.
 *
 * One thing to re-read before changing a number. The 2006 guidance measures
 * total capital as total risk-based capital, Call Report schedule RC-R line
 * 21, while the real estate lending guidelines and the FDIC's own published
 * ratio both use tier 1 capital plus the allowance. The same bank reads
 * differently under the two. Do not merge them into one figure.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "bank-cre-concentration-limits",
  cluster: "hotel-financing",
  isHub: false,
  title: "Bank CRE Limits and Hotel Loans",
  description:
    "What a bank means when it says it is full on hotel loans: the 100 and 300 percent supervisory screens, why a hotel loan always counts, and what to do.",
  h1: "Why does my bank say it is full on hotel loans?",
  lastUpdated: "2026-10-21",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Why does my bank say it is full on hotel loans?",
    "What is the 300 percent CRE concentration rule?",
    "Do hotel loans count as commercial real estate for a bank?",
    "Why did my bank decline my hotel loan when the deal was fine?",
    "How do I find out if a bank is over its CRE concentration limit?",
    "Is there a legal limit on how much a bank can lend on hotels?",
    "What is an owner-occupied commercial real estate loan?",
    "Which lenders are not subject to bank CRE concentration rules?"
  ],
  answer:
    "It is a balance sheet answer, not a verdict on your hotel. Bank examiners take a closer look at an institution whose construction and land loans reach 100 percent of total capital, or whose total commercial real estate loans reach 300 percent of capital after growing 50 percent in three years. Those criteria were set on December 12, 2006.[1] A hotel loan always counts toward that total.[2]",
  takeaways: [
    "The two numbers are screens, not caps. The guidance says in its own words that the criteria do not constitute limits on an institution's lending activity, and that meeting them is not a safe harbor either.[1]",
    "A hotel loan gets no owner-occupied exclusion. The Call Report instructions in force in September 2026 tell a bank to report loans secured by hotels and motels on the other nonfarm nonresidential line, the non-owner-occupied one, even when the borrower runs the hotel itself.[2]",
    "The industry's median commercial real estate concentration was 200 percent of tier 1 capital and reserves at the end of 2025. At banks with $1 billion to $10 billion of assets, the size that writes most hotel loans under $15 million, the median was 311 percent.[3]",
    "What a bank will do about hotels specifically is never published. What is published is the 85 percent supervisory loan-to-value limit on a completed property and the 30 percent of capital bucket that holds every loan above it.[4]"
  ],
  sections: [
    {
      h2: "What does a bank mean when it says it is full?",
      lead:
        "It means the bank's own concentration numbers have reached a level where more of the same lending buys it supervisory attention and a capital conversation, whatever your hotel looks like.",
      body:
        "Three federal banking agencies published Concentrations in Commercial Real Estate Lending, Sound Risk Management Practices on December 12, 2006. It names two measurements an examiner uses to pick institutions out for a closer look. The first is construction, land development and other land loans at 100 percent or more of total capital. The second is total commercial real estate loans at 300 percent or more of total capital, together with growth of 50 percent or more in that portfolio over the prior 36 months. Both legs of the second one have to be true.[1]\n\nNeither number is a cap. The guidance says the criteria do not constitute limits on an institution's lending activity, and that an institution should not read them as a safe harbor if other risk indicators are present.[1] What follows from crossing them is attention, not a prohibition. The agencies reminded banks of all this on December 18, 2015, and said they may ask an institution with weak practices to develop a plan, reduce the risk tolerances in its underwriting standards, or raise more capital.[5] The FDIC said it again on December 18, 2023, and in the same advisory encouraged institutions to keep making construction and commercial real estate credit available in their communities using prudent lending standards.[6]\n\nSo the honest translation of \"we are full\" is this: the next hotel loan is more expensive for the bank than it was two quarters ago, and the bank has chosen to spend its room elsewhere."
    },
    {
      h2: "Does my hotel loan count toward the bank's commercial real estate total?",
      lead:
        "Yes, and it counts in the bucket that draws the most attention, because the Call Report instructions name hotels and put them on the non-owner-occupied line.",
      body:
        "A bank sorts loans secured by nonfarm nonresidential property into two items. Item 1.e.(1) is owner-occupied: the loans whose primary source of repayment is the cash flow from the operations conducted by the party, or an affiliate, who owns the property. Item 1.e.(2) is everything else, where repayment comes from third party rental income or from sale or refinancing proceeds.[2]\n\nA hotel owner reading that would reasonably put a hotel in the first item. The operator owns the building and the room revenue is the operations. The instructions say otherwise and say it by name: include loans secured by hotels, motels, dormitories, nursing homes, assisted-living facilities, mini-storage warehouse facilities and similar properties in item 1.e.(2) as loans secured by other nonfarm nonresidential properties.[2] Nursing homes and assisted-living facilities then get an exception back, on a 50 percent test about the services their owner provides. Hotels are not given that exception.[2]\n\nTwo consequences follow. The concentration measurement reads Call Report items 1.a, 1.d, 1.e and memorandum item 3, so your loan is inside the number no matter how the file reads.[1] And the classification is made once, when the loan is originated or purchased, and need not be revisited afterwards.[2] Refinancing the hotel somewhere else is what moves it off a bank's line, not improving how it performs. The agencies knew they were sweeping hotels in. Commenters in 2006 asked for clarification about loans secured by motels and hotels, and the agencies answered that because the guidance imposes no lending limits, its scope is purposely broad.[1]"
    },
    {
      h2: "Is every bank full, or is it just this one?",
      lead:
        "Concentration is uneven, and it is highest in exactly the size of bank that writes most hotel loans.",
      body:
        "The FDIC publishes the distribution once a year. In the Risk Review published April 22, 2026, the banking industry's median commercial real estate concentration ratio was 200 percent of tier 1 capital and the allowance for credit losses at the end of 2025, below the 214 percent peak reached at year-end 2008 but above the pre-pandemic average. Banks with $10 billion to $100 billion of assets ran a median of 289 percent. Banks with $1 billion to $10 billion ran 311 percent. The largest and smallest banks were much less concentrated. Commercial real estate loans at banks grew 3.1 percent over 2025.[3] A year earlier the FDIC counted roughly 31 percent of all banks, 1,374 of them, as CRE-concentrated under its own definition.[7]\n\nThat is the context for a decline that has nothing to do with your [debt service coverage](/glossary/dscr). A bank at 311 percent is not a troubled bank. It is a bank whose next hotel loan has to be worth more to it than the capital conversation it brings.\n\nAppetite and concentration are also different things. In the July 2026 Senior Loan Officer Opinion Survey, covering the second quarter of 2026, 7 of 53 banks had eased standards on loans secured by nonfarm nonresidential property, 45 had left them unchanged, and 1 had tightened. Asked where the level of their standards sits against the midpoint of the range since 2005, 35.9 percent put themselves tighter than that midpoint and 18.9 percent easier.[8] Standards are not what is moving. Balance sheets are."
    },
    {
      h2: "Can I check a bank's numbers before I apply?",
      lead:
        "Yes. Every input is filed quarterly and published, and you can compute the ratio yourself before you spend three weeks on an application.",
      body:
        "The two screens are built from the Call Report. Construction, land development and other land is item 1.a of schedule RC-C. Total commercial real estate adds items 1.d and 1.e and memorandum item 3 to it. The guidance's own footnotes point at those lines, and define total capital as total risk-based capital, schedule RC-R line 21.[1] The FDIC publishes every bank's filings through BankFind Suite, and the FFIEC publishes them through the Central Data Repository.[9]\n\nOne trap is worth the paragraph. There are two denominators in use. The 2006 guidance measures against total risk-based capital.[1] The real estate lending guidelines, and the ratio the FDIC prints in its own Risk Review, measure against tier 1 capital plus the allowance for credit losses.[4][3] The same bank can read below 300 percent on one and above it on the other. When a banker quotes you a ratio, ask which denominator it uses.\n\nThe second trap is timing. These are quarter-end figures filed about 30 days after the quarter closes, so the number you read is history. A payoff in January frees room that no public file will show until spring. That is why asking a lender where it is against its own internal limit is a better question than computing the public ratio, and why the answer to \"not this quarter\" is often \"ask again after the next one.\""
    },
    {
      h2: "What else caps what this bank can lend on my hotel?",
      lead:
        "A second rule limits how much of a bank's capital can sit in loans above the supervisory loan-to-value limits, and a hotel above 85 percent lands in the smallest bucket of all.",
      body:
        "The Interagency Guidelines for Real Estate Lending Policies set supervisory loan-to-value limits that an institution's internal limits should not exceed: 65 percent on raw land, 75 percent on land development, 80 percent on commercial, multifamily and other nonresidential construction, and 85 percent on improved property, which is what a completed, operating hotel is.[4]\n\nA bank may still write above those limits when other credit factors support it. What it may not do is write many of them. The aggregate of all loans above the supervisory limits should not exceed 100 percent of total capital, and inside that, loans on commercial, agricultural, multifamily or other non-1-to-4 family residential property should not exceed 30 percent of total capital. Total capital here is tier 1 plus the allowance.[4] Those loans are recorded and reported to the board at least quarterly, and the text aggregates loans rather than the slice above the line: institutions are told to include all loans secured by the same property if any one of them exceeds the limits.[4]\n\nSo a request at 88 percent of value does not cost the bank 3 points of exposure. It puts the whole loan into a bucket that is a fraction the size of the concentration number, alongside every other exception the bank has written. That is the arithmetic behind a counteroffer that keeps the rate and cuts the proceeds."
    },
    {
      h2: "What do I do when a bank is full?",
      lead:
        "Take the file to balance sheets with different numbers, change the structure so less of the loan sits on a bank's books, or wait for the quarter to turn.",
      body:
        "Every bank reads its own ratio, and the spread between a bank at 160 percent and one at 311 percent is the whole conversation.[3] A hotel file that was declined without a pricing discussion has usually not been shopped, it has been asked once. The [lenders by type](/hotel-financing/hotel-lenders-by-type) page sets out who holds hotel paper and on whose balance sheet.\n\nThree structures sidestep the problem rather than argue with it. An [SBA 7(a) or 504 loan](/hotel-financing/sba-7a-vs-504) puts a government guaranty or a debenture behind part of the capital stack, which changes what the bank keeps. A credit union runs under a published statutory cap instead of an internal one: no insured credit union may hold member business loans above the lesser of 1.75 times its actual net worth or 1.75 times the net worth it needs to be well capitalized, which is why a credit union says no for a different reason and at a different moment.[10] And [CMBS](/hotel-financing/cmbs-loans), life company and debt fund money is not deposit funded at all, so none of these measurements reaches it. The trade is prepayment, not price.\n\nThe last option is the calendar. Concentration ratios move with payoffs, capital raises and the denominator itself. A bank that is full in the fourth quarter is often open in the second. Ask the banker to tell you when, and ask for the answer in writing before you pay for a third-party report."
    }
  ],
  table: {
    caption: "Published numbers that sit between a bank and a hotel loan, October 2026",
    columns: ["Measure", "What it covers", "The number", "What it is"],
    rows: [
      [
        "Concentration screen 1",
        "Construction, land development and other land loans",
        "100 percent of total capital",
        "A screen for supervisory review, not a limit[1]"
      ],
      [
        "Concentration screen 2",
        "Total commercial real estate loans, plus 50 percent growth over 36 months",
        "300 percent of total capital",
        "A screen, and both legs must be true[1]"
      ],
      [
        "Where a hotel loan is reported",
        "Loans secured by hotels and motels",
        "Schedule RC-C item 1.e.(2)",
        "Non-owner-occupied, named in the instructions[2]"
      ],
      [
        "Supervisory loan-to-value, improved property",
        "A completed, operating hotel",
        "85 percent",
        "Internal limits should not exceed it[4]"
      ],
      [
        "Supervisory loan-to-value, commercial construction",
        "A hotel under construction",
        "80 percent",
        "Internal limits should not exceed it[4]"
      ],
      [
        "Loans above the supervisory limits, all property",
        "Every exception the bank has written",
        "100 percent of total capital",
        "A supervisory ceiling on the aggregate[4]"
      ],
      [
        "Loans above the limits, commercial property",
        "The bucket a high-leverage hotel loan lands in",
        "30 percent of total capital",
        "A sub-limit inside the 100 percent[4]"
      ],
      [
        "Credit union member business loans",
        "All business lending at that credit union",
        "1.75 times actual net worth",
        "A statutory cap, not a guideline[10]"
      ],
      [
        "This bank's limit on hotels",
        "Hotel exposure as the bank defines it",
        "Not published",
        "Board policy, disclosed only if the banker tells you"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Our October 2026 rate sheet marks every cell on the bank and credit union row as not yet published, because no balance sheet lender publishes its spread, its maximum loan-to-value or its coverage floor.[11] Its concentration ratio is the one number in that row you can read for yourself, in a public quarterly filing, before you apply."
  },
  workedExample: {
    label: "Hypothetical: a $900 million community bank, and a $7,000,000 hotel loan",
    body:
      "This bank does not exist, and neither does the hotel. Every rule applied to them is public, so the arithmetic can be checked line by line.\n\nThe bank has $900,000,000 of assets, $104,000,000 of total risk-based capital, and $97,000,000 of tier 1 capital plus its allowance for credit losses. Its construction, land development and other land loans are $85,000,000, which is 81.7 percent of total capital, under the first screen's 100 percent. Its total commercial real estate book is $300,000,000, which is 288.5 percent of total capital under the 2006 guidance's denominator and 309.3 percent under the tier 1 plus allowance denominator the FDIC uses.[1][3] Three years ago that book was $205,000,000, so it has grown 46.3 percent, just under the 50 percent leg of the second screen.\n\nYou ask for $7,000,000 against a 100-key limited-service hotel valued at $10,000,000, which is $100,000 per key and 70 percent loan-to-value, inside the 85 percent supervisory limit on improved property.[4] Fund it and the bank's commercial real estate book is $307,000,000, or 295.2 percent of total capital, with 36-month growth of 49.8 percent. Both legs stay under, by 4.8 points and by 0.2 points. The room left below 300 percent is 3.00 times $104,000,000 less $307,000,000, which is $5,000,000: not another loan this size.\n\nNow change one input. Ask for $8,800,000 on the same $10,000,000 value and the loan is at 88 percent, above the supervisory limit. It does not consume 3 points of anything. The whole $8,800,000 enters the bucket capped at 30 percent of tier 1 plus allowance, which is $29,100,000, and takes 30.2 percent of it on its own.[4] That is why the counteroffer comes back at proceeds rather than at price. Every figure here was recomputed by scripts/check-cre-concentration-math.mjs."
  },
  faq: [
    {
      q: "What is the 300 percent CRE concentration rule?",
      a: "It is a supervisory screen, not a rule. Examiners look harder at a bank whose commercial real estate loans reach 300 percent of total capital and have grown 50 percent in 36 months. The guidance states that it sets no limit on lending.[1]"
    },
    {
      q: "Do hotel loans count as commercial real estate for a bank?",
      a: "Yes. The Call Report instructions tell banks to report loans secured by hotels and motels as other nonfarm nonresidential property, the non-owner-occupied line that feeds the concentration measurement.[2] Hotels are named in the text."
    },
    {
      q: "Why did my restaurant loan not count the same way?",
      a: "A property whose repayment comes from the operations of the owner occupying it is reported as owner-occupied.[2] The instructions carve hotels out of that treatment by name, and give the exception back only to nursing homes and assisted-living facilities."
    },
    {
      q: "Can I look up a bank's concentration ratio?",
      a: "Yes. The inputs are Call Report schedule RC-C items 1.a, 1.d and 1.e plus memorandum item 3, over capital from schedule RC-R.[1] The FDIC and the FFIEC both publish the filings.[9] Figures lag the quarter by about a month."
    },
    {
      q: "Is there a legal limit on how much a bank can lend on hotels?",
      a: "No published limit exists for hotels specifically. Banks set internal limits and do not publish them. The published ceilings are the supervisory loan-to-value limits and the 100 and 30 percent of capital buckets for loans that exceed them.[4]"
    },
    {
      q: "Do credit unions have the same problem?",
      a: "They have a different one. A statute caps member business loans at an insured credit union at the lesser of 1.75 times actual net worth or 1.75 times the net worth required to be well capitalized.[10] That cap is published; a bank's internal limit is not."
    },
    {
      q: "Have regulators told banks to stop commercial real estate lending?",
      a: "No. The FDIC's advisory of December 18, 2023 encourages institutions to keep making construction and commercial real estate credit available in their communities using prudent lending standards and strong underwriting.[6]"
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "Concentrations in Commercial Real Estate Lending, Sound Risk Management Practices, 71 FR 74580 (December 12, 2006), at 74582 to 74583 for the scope and the comments on hotels and motels, and at 74587 for the two supervisory criteria and footnotes 4, 5 and 6 naming the Call Report lines",
      url: "https://www.govinfo.gov/content/pkg/FR-2006-12-12/html/06-9630.htm",
      publisher:
        "Office of the Comptroller of the Currency, Federal Reserve Board and FDIC, via govinfo",
      accessed: "2026-10-21"
    },
    {
      n: 2,
      label:
        "FFIEC 031 and 041 Call Report instructions, Schedule RC-C, Loans and Lease Financing Receivables, September 2026 edition, items 1.e, 1.e.(1) and 1.e.(2), pages RC-C-6b to RC-C-6d",
      url: "https://www.fdic.gov/bank-financial-reports/ffiec-031-and-041-schedule-rc-c-loans-and-lease-financing-receivables",
      publisher: "Federal Financial Institutions Examination Council, via the FDIC",
      accessed: "2026-10-21"
    },
    {
      n: 3,
      label:
        "Risk Review 2026, section 4.1, Commercial Real Estate, pages 16 and 17, for the median concentration ratios at year-end 2025 and footnote 10's definition",
      url: "https://www.fdic.gov/analysis/2026-risk-review-full.pdf",
      publisher: "Federal Deposit Insurance Corporation",
      accessed: "2026-10-21"
    },
    {
      n: 4,
      label:
        "Interagency Guidelines for Real Estate Lending Policies, appendix A to subpart A of 12 CFR part 365: the supervisory loan-to-value limits, loans in excess of those limits, and footnote 4 on total capital",
      url: "https://www.law.cornell.edu/cfr/text/12/appendix-A_to_subpart_A_of_part_365",
      publisher: "Federal Deposit Insurance Corporation, via Legal Information Institute",
      accessed: "2026-10-21"
    },
    {
      n: 5,
      label:
        "Statement on Prudent Risk Management for Commercial Real Estate Lending, FIL-62-2015 (December 18, 2015), and the interagency statement attached to it",
      url: "https://www.fdic.gov/news/financial-institution-letters/2015/fil15062.html",
      publisher:
        "Federal Reserve Board, FDIC and Office of the Comptroller of the Currency, via the FDIC",
      accessed: "2026-10-21"
    },
    {
      n: 6,
      label:
        "Advisory: Managing Commercial Real Estate Concentrations in a Challenging Economic Environment, FIL-64-2023 (December 18, 2023)",
      url: "https://www.fdic.gov/news/financial-institution-letters/2023/fil23064.html",
      publisher: "Federal Deposit Insurance Corporation",
      accessed: "2026-10-21"
    },
    {
      n: 7,
      label:
        "Risk Review 2025, section on commercial real estate, footnote 12, for the share of banks that were CRE-concentrated at year-end 2024",
      url: "https://www.fdic.gov/analysis/2025-risk-review.pdf",
      publisher: "Federal Deposit Insurance Corporation",
      accessed: "2026-10-21"
    },
    {
      n: 8,
      label:
        "July 2026 Senior Loan Officer Opinion Survey on Bank Lending Practices, table 1, question 8 on standards for loans secured by nonfarm nonresidential properties and the special question on the level of those standards since 2005",
      url: "https://www.federalreserve.gov/data/sloos/sloos-202607-table-1.htm",
      publisher: "Board of Governors of the Federal Reserve System",
      accessed: "2026-10-21"
    },
    {
      n: 9,
      label: "BankFind Suite, the public search of every insured institution's Call Report filings",
      url: "https://banks.data.fdic.gov/bankfind-suite/",
      publisher: "Federal Deposit Insurance Corporation",
      accessed: "2026-10-21"
    },
    {
      n: 10,
      label: "12 U.S.C. 1757a, Limitation on member business loans",
      url: "https://www.law.cornell.edu/uscode/text/12/1757a",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-21"
    },
    {
      n: 11,
      label: "Matthews Hotel Markets October 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-21"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/lenders-under-5-million",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/how-debt-placement-works"
    ],
    glossary: ["/glossary/ltv", "/glossary/dscr", "/glossary/debt-yield", "/glossary/sba-504"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the capital markets desk",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets places hotel debt from $5 million and takes a file to several balance sheets at once, which is the only reliable answer to a lender whose concentration numbers moved after your last conversation."
};
