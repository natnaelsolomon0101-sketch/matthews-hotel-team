/**
 * Does my hotel's insurance premium change what the hotel is worth?
 * Answer page: /hotel-valuation/insurance-costs-and-hotel-value
 *
 * A coverage gap before this file. Under src/lib/data/, "named storm",
 * "wind deductible", "total insured value", "self-insured retention" and
 * "probable maximum loss" each appeared in zero files, "property insurance"
 * in one and "business interruption" in seven, every time as a clause inside
 * a page about something else. The site had /hotel-financing/
 * flood-insurance-requirements (the federal flood mandate) and
 * /hotel-industry/hotel-operating-costs (which lists the taxes-and-insurance
 * line), and nothing on the question an owner asks when the renewal arrives:
 * what the premium does to the price and to the loan.
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-11-05):
 *
 *   - Marsh's Global Insurance Market Index release of October 21, 2026, for
 *     the Q3 2026 global composite (down 5%), global property (down 10%), the
 *     US property figure (down 10%, one of five double-digit regions), the
 *     two prior property quarters (down 12% and down 9%) and the benign US
 *     hurricane season the release credits. The release carries no methodology
 *     note, so the page calls the figures rate changes, which is the release's
 *     own word, and says they are not a premium for any one hotel;
 *   - Summit Hotel Properties' Form 10-Q for the quarter ended September 30,
 *     2026, for the "Property taxes, insurance and other" line ($13,638
 *     thousand for the quarter against $14,106 thousand a year earlier;
 *     $41,093 thousand against $41,123 thousand for the nine months) and
 *     total revenues ($185,706 and $177,117 thousand for the quarters,
 *     $569,778 and $554,512 thousand for the nine months);
 *   - Host Hotels & Resorts' Form 10-K for fiscal 2025, for the all-risk
 *     per-occurrence policy form, the rule that every claim from one
 *     occurrence is combined, the sub-limits that sit far below the overall
 *     limit, deductibles that are fixed or a percentage of total insured
 *     value, the affiliated captive, the six named locations, the sentence
 *     that insurance may exceed the rate of inflation, and other
 *     property-level expenses of $426 million in 2025 against $411 million in
 *     2024, which the MD&A attributes primarily to property taxes and
 *     insurance on the 2024 acquisitions;
 *   - RLJ Lodging Trust's Form 10-K for fiscal 2025, the one filing read this
 *     run that publishes its retentions: $250,000 per property claim, 5% of
 *     total insured value for a named storm at certain coastal hotels, up to
 *     5% of total insured value in earthquake-prone areas, and a $500,000
 *     general liability retention per claim at most hotels, with fire,
 *     terrorism and extended coverage carried and no cyber insurance;
 *   - SBA SOP 50 10 8.1 Technical Policy Updates, effective October 1, 2026,
 *     Section A, Chapter 5, Paragraph C.1, read as the Word document the
 *     agency publishes: hazard insurance on all pledged collateral for 7(a)
 *     loans and 504 projects over $50,000, the sentence that the loan cannot
 *     be approved if hazard insurance is not available, the separate policy
 *     where a state requires wind, hail or earthquake coverage, full
 *     replacement cost (or maximum insurable value), the mortgagee clause,
 *     the 10 days' notice of cancellation, and the optional tax and insurance
 *     escrow;
 *   - 13 CFR 120.160, for paragraph (c) verbatim, whose threshold is $500,000
 *     where the current SOP uses $50,000, and 13 CFR 120.170 for the flood
 *     requirement. Read twice, once through the eCFR versioner API against
 *     the 2026-10-01 issue of title 13 (the API needs --compressed or it
 *     answers 406) and once on Cornell LII. The two agreed word for word.
 *     Cornell is the cited URL because eCFR's own /current/ HTML pages
 *     redirect a scripted reader to unblock.federalregister.gov.
 *
 * Every figure in the worked example was recomputed by
 * scripts/check-insurance-value-math.mjs before saving, 93 assertions. Do not
 * hand-edit a number without re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent. Any premium per key, per room night or per dollar of
 * revenue: no public source read this run publishes one, and the REIT filings
 * report insurance combined with property taxes, so even their own line
 * cannot be split. Any conventional, CMBS, life company or bridge lender's
 * insurance requirement: lenders do not publish those, which is why the page
 * says so in those terms and cites the one requirement that is published,
 * SBA's. Any total insured value benchmark: the worked example labels its own
 * total insured value, occupancy, rate, premium and cap rate as assumptions.
 * And no claim that the team places insurance, which it does not.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "insurance-costs-and-hotel-value",
  cluster: "hotel-valuation",
  isHub: false,
  title: "Hotel Insurance Costs and Hotel Value",
  description:
    "Insurance is a fixed charge, so $100,000 of premium is $1,250,000 of value at an 8% cap rate. US property rates fell 10% in the third quarter of 2026.",
  h1: "Does my hotel's insurance premium change what the hotel is worth?",
  lastUpdated: "2026-11-05",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Does my hotel's insurance premium affect what the hotel is worth?",
    "How does insurance cost affect hotel value?",
    "Why did my hotel insurance premium go down in 2026?",
    "What is a named storm deductible on a hotel?",
    "Does a hotel lender require property insurance?",
    "How does a higher insurance premium affect the loan I can get on a hotel?",
    "Will a buyer use my insurance premium or its own when it underwrites my hotel?",
  ],
  answer:
    "Yes, close to dollar for dollar. Insurance is a fixed charge taken out before net operating income, so $100,000 of annual premium is $1,250,000 of value at an 8.00% cap rate. Marsh's October 21, 2026 index puts US commercial property insurance rates down 10% in the third quarter of 2026.[1]",
  takeaways: [
    "Marsh's index, released October 21, 2026, put US property insurance rates down 10% in the third quarter of 2026, after declines of 12% and 9%, and credited a benign US hurricane season.[1]",
    "A rate change is not a premium. Summit Hotel Properties reported property taxes, insurance and other of $13,638,000 for the quarter ended September 30, 2026, down 3.3% from $14,106,000, while revenue rose 4.8%.[2]",
    "Host Hotels' property policies are all-risk per occurrence, every claim from one occurrence is combined, and the sub-limits for earthquake, flood and hurricane sit far below the overall limit.[3]",
    "RLJ Lodging Trust publishes its retentions: $250,000 per property claim, and 5% of total insured value for a named storm at certain coastal hotels.[4]",
    "SBA is the one lender whose insurance requirement is published. SOP 50 10 8.1, effective October 1, 2026, says that if hazard insurance is not available the loan cannot be approved.[5][6]",
  ],
  sections: [
    {
      h2: "How does an insurance premium reach my hotel's value?",
      lead:
        "Through net operating income. Insurance is a fixed charge taken out before NOI, so a dollar of premium is a dollar of NOI, and a dollar of NOI is a dollar divided by the cap rate.",
      body:
        "Insurance is the plainest line on a hotel's profit and loss statement, because it does not move with occupancy. Rooms costs rise when the hotel fills and fall when it empties. The premium is the same number in a full February and an empty one, which is why it sits with property taxes in the fixed charges below gross operating profit. [Net operating income](/glossary/noi) is what is left after it.\n\nSo the arithmetic runs one way. Divide the change in premium by the [cap rate](/glossary/cap-rate) and that is the change in value. At 7.00%, $100,000 of annual premium carries $1,428,571 of value. At 8.00% it carries $1,250,000. At 8.50% it carries $1,176,471. The division runs in reverse too: a renewal that comes back $100,000 cheaper is worth those amounts to a seller, and nothing else about the hotel has to change.\n\nIt is also the one operating line an argument can be won on with paper, because a [RevPAR](/glossary/revpar) forecast is arguable for years while the binder says what the coverage costs. The method the number feeds is at [How do I value a hotel?](/hotel-valuation/how-to-value-a-hotel), and the line itself is one of the non-operating charges described at [What does it cost to run a hotel?](/hotel-industry/hotel-operating-costs).",
    },
    {
      h2: "What did hotel insurance cost do in 2026?",
      lead:
        "Rates fell hard and premiums fell a little, which are two different statements.",
      body:
        "Start with the market. Marsh's Global Insurance Market Index, released October 21, 2026, reported global commercial insurance rates down 5% in the third quarter of 2026 and property rates down 10%, with the US among five regions recording double-digit property decreases, at 10%.[1] Property had fallen 12% in the second quarter and 9% in the first.[1] Marsh credits ample capacity, insurer competition, lower reinsurance costs and a benign US hurricane season.[1]\n\nNow read the filings, because a rate change is not a premium. Summit Hotel Properties' quarterly report for the period ended September 30, 2026 shows property taxes, insurance and other of $13,638,000 against $14,106,000 a year earlier, a fall of 3.3%, while total revenues rose 4.8% from $177,117,000 to $185,706,000.[2] Across nine months the same line barely moved, $41,093,000 against $41,123,000.[2] As a share of revenue it went from 7.96% to 7.34% in the quarter, which is relief rather than a reversal.\n\nThe year before ran the other way. Host Hotels' other property-level expenses, which include property taxes, insurance, ground rent and equipment rent, were $426 million in 2025 against $411 million in 2024, up 3.6%, which Host attributes primarily to property taxes and insurance on the hotels it bought in 2024.[3] Host also tells investors that insurance may exceed the rate of inflation in any given period.[3] Read both owners with two cautions: each reports insurance bundled with property taxes, and a portfolio of 200 hotels buys on terms a single hotel does not.",
    },
    {
      h2: "Why is my premium so different from the hotel down the street?",
      lead:
        "Location, construction, total insured value and loss history, none of which any insurer publishes per hotel.",
      body:
        "The rating base is total insured value: the replacement cost of the building and its contents plus the income the policy would pay during a rebuild. Deductibles are written against it. Host says its deductibles are substantial and are either fixed or a percentage of total insured value, and that it also retains risk through a captive insurer affiliated with the company.[3] RLJ puts numbers on the same structure: a $250,000 self-insured retention per property claim, a retention of 5% of total insured value for a named storm at certain coastal hotels, retentions of up to 5% of total insured value at hotels in earthquake-prone areas, and a $500,000 general liability retention per claim at most of its hotels.[4]\n\nGeography does most of the rest. Host names California, Florida, Hawaii, Houston, New Orleans and Seattle as the places where its hotels are particularly susceptible to natural disasters.[3] Two identical hotels, one inland and one eight blocks from the Gulf, are not priced as one risk.\n\nThen read the limits, not just the premium. Host's property policies are all-risk on a per-occurrence basis, and every claim from one insurable occurrence must be combined, which matters to an owner of two hotels in the same storm track.[3] Sub-limits apply to particular claims, including earthquake, flood and hurricane, and Host states that their dollar amounts are significantly lower than the overall coverage limit.[3] A policy with a large headline limit and a small hurricane sub-limit is a hurricane policy with a small limit.\n\nNo source read this run gives a premium per key or per dollar of revenue for one hotel. Insurers do not publish their rating and the filings bundle insurance with property taxes, so only your own quote and your own loss runs answer it.",
    },
    {
      h2: "What does a retention of 5% of total insured value actually cost?",
      lead:
        "More than a year of premium movement, and on a coastal hotel it can approach a year of net operating income.",
      body:
        "A retention is money the owner pays before the policy pays anything. On a 120-key hotel carrying an assumed $19,200,000 of total insured value, the 5% named-storm retention RLJ publishes for certain coastal hotels is $960,000.[4] A 10% move in the premium on the same hotel is worth a few tens of thousands. The retention is the larger number by a wide margin, and it arrives in the one year the hotel can least afford it.\n\nSo a buyer who prices only the premium has priced the wrong thing. Two hotels with the same premium and retentions of $250,000 and 5% of total insured value are different assets, and the second carries a contingent liability that shows up in neither net operating income nor a cap rate.\n\nBusiness interruption is the other half. RLJ's program covers fire, terrorism and extended coverage.[4] Host carries property, business interruption and terrorism, and says coverage for war and infectious disease is extremely limited.[3] A hotel closed for nine months by a named storm loses nine months of room revenue, and whether that is insured, for how long and after what waiting period belongs in diligence alongside the items at [What do buyers look for in a hotel?](/sell-a-hotel/what-buyers-look-for).",
    },
    {
      h2: "Does my lender require insurance, and does it publish the requirement?",
      lead:
        "Every lender requires it and only one publishes the requirement, which is SBA.",
      body:
        "SBA writes it down. SOP 50 10 8.1, effective October 1, 2026, requires hazard insurance on all assets pledged as collateral for 7(a) loans over $50,000 and 504 projects over $50,000, and then says that if hazard insurance is not available, the loan cannot be approved.[5] The borrower must carry a separate policy where the state requires added coverage such as wind, hail or earthquake.[5] Real estate coverage must be for full replacement cost, or the maximum insurable value if that cannot be bought, under a mortgagee clause in favor of the lender or the CDC and SBA with at least 10 days' written notice before cancellation, and the two sides may agree to escrow taxes and insurance.[5]\n\nThe regulation behind it sets a higher floor. 13 CFR 120.160(c) reads: \"SBA requires hazard insurance for 7(a) loans greater than $500,000 and for 504 projects greater than $500,000, on all collateral.\"[6] The current SOP applies the duty from $50,000 up, so on any hotel loan the difference is academic and the SOP is the operative text.[5][6] Flood sits in its own section, where 13 CFR 120.170 applies the Flood Disaster Protection Act of 1973 to any building financed with SBA money in a special flood hazard area.[6] The wider federal flood mandate, which reaches every regulated lender, is at [Does my hotel need flood insurance to close a loan?](/hotel-financing/flood-insurance-requirements).\n\nEvery other lender keeps it in the loan documents. No bank, CMBS lender, life company or debt fund publishes the limits, the maximum deductible, the carrier rating or the business-interruption period it will accept on a hotel, any more than it publishes its [DSCR](/glossary/dscr) floor. Ask for the insurance requirements in writing with the term sheet, because a requirement discovered at closing is a requirement priced at closing.",
    },
    {
      h2: "Will a buyer underwrite my premium or its own?",
      lead:
        "Its own, nearly always, which is why a cheap legacy policy earns a seller no credit and a spiked renewal is worth arguing about.",
      body:
        "A buyer insures the hotel under its own program from the day it closes. If that buyer owns 40 hotels, the hotel joins a portfolio placement with its own retentions and its own carriers, and the seller's premium becomes a historical fact rather than a forecast. The number in the buyer's model is the quote its broker returns, and a seller cannot see it.\n\nOnly one direction of that asymmetry favors a seller. A premium held down by a legacy policy, a grandfathered rating or a captive the seller controls does not transfer, so the buyer underwrites a higher number and the price follows it. A premium pushed up by two open claims, an older roof or a missing wind mitigation report is arguable, because those are fixable facts with documents behind them. Loss runs, a current building valuation, a roof certificate and a wind mitigation inspection are cheap to produce and they move the quote the buyer gets.\n\nAn appraiser works the same way. An appraisal of a going concern reconstructs a market expense load rather than copying the owner's statement, so an unusual insurance line is normalized toward what a typical operator would pay and the actual premium becomes evidence rather than the answer. That is one common reason a number comes back below expectation: [Why did my hotel appraise below what I expected?](/hotel-valuation/appraisal-lower-than-expected). A [broker opinion of value](/hotel-valuation/broker-opinion-of-value) treats it the same way, and the same logic makes an over-assessed tax line worth challenging at [How do I appeal my hotel's property tax assessment?](/hotel-valuation/property-tax-appeal).",
    },
    {
      h2: "What does a lower premium do to the loan I can get?",
      lead:
        "It raises the loan a coverage test supports, by less than it raises the value.",
      body:
        "A lender sizes against net operating income, so a premium saving lifts the loan the same way it lifts the price, through a different divisor. Divide NOI by the coverage ratio to get the maximum annual debt service, then divide that by the annual debt constant to get the loan. Only the benchmark is published, not the quote: the October 2026 edition of this site's [rate sheet](/rates) prints the 10-year Treasury at 5.29% as of September 30, 2026 and marks every lender-quoted cell not yet published, because no lender publishes its spread.\n\nThe gap between the two effects is worth seeing. In the worked example below, $25,000 of annual premium saving is worth $303,030 of value at an 8.25% cap rate and about $208,827 of additional loan proceeds at 1.35x coverage on an assumed 7.50% coupon over 25 years. Value moves more than debt because a cap rate in the sevens and eights is a smaller divisor than a coverage ratio multiplied by a debt constant near 8.87%. Run your own version with the [hotel DSCR calculator](/tools/dscr-calculator).\n\nTiming decides whether any of it counts. A renewal that lands after a loan is underwritten does not resize that loan, and one that lands after a purchase contract is signed does not reprice the contract. The premium has to be in the file before the number is set, which is the same discipline behind [Should I refinance my hotel or sell it?](/hotel-financing/refinance-or-sell).",
    },
  ],
  table: {
    caption:
      "What three public hotel owners published about hotel property insurance, fiscal 2025 and the third quarter of 2026",
    columns: [
      "Owner and filing",
      "Published retention or deductible",
      "What the program covers",
      "What the expense line shows",
    ],
    rows: [
      [
        "RLJ Lodging Trust, Form 10-K for fiscal 2025",
        "$250,000 self-insured retention per property claim; 5% of total insured value for a named storm at certain coastal hotels; up to 5% of total insured value in earthquake-prone areas; $500,000 general liability retention per claim at most hotels[4]",
        "Comprehensive property on all hotels, including fire, terrorism and extended coverage; no cyber insurance[4]",
        "Not published as a separate insurance line[4]",
      ],
      [
        "Host Hotels & Resorts, Form 10-K for fiscal 2025",
        "Substantial deductibles, either fixed or a percentage of total insured value, plus retentions through an affiliated captive insurer; no amounts published[3]",
        "All-risk per occurrence, with every claim from one occurrence combined, and sub-limits for earthquake, flood and hurricane significantly below the overall limit[3]",
        "Other property-level expenses $426 million in 2025 against $411 million in 2024, up 3.6%, attributed primarily to property taxes and insurance on the 2024 acquisitions[3]",
      ],
      [
        "Summit Hotel Properties, Form 10-Q for the quarter ended September 30, 2026",
        "A per-claim retention under its general liability program, amount not published[2]",
        "Not described in the quarterly report[2]",
        "Property taxes, insurance and other $13,638,000 for the quarter against $14,106,000 a year earlier, down 3.3% while revenue rose 4.8%[2]",
      ],
    ],
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence:
      "Matthews Hotel Markets publishes the Matthews Hotel Index, and its Q1 2026 edition supplies the divisor that turns a premium into a price: Tampa select-service cap rates of 7.5% to 8.25%, full-service of 6.75% to 7.75%, with 71% occupancy and ADR of $135 to $215 in that market. The October 2026 edition of the rate sheet prints the 10-year Treasury at 5.29% as of September 30, 2026 and marks every lender-quoted cell not yet published. No lender publishes the insurance limits, deductible ceilings or carrier ratings it requires on a hotel, and no insurer publishes a premium per key.",
  },
  workedExample: {
    label:
      "Hypothetical: a 120-key select-service hotel in Tampa, premium falling 10% on renewal",
    body:
      "Hypothetical. The hotel, its occupancy, its rate, its premium, its total insured value, the coupon and the cap rate are assumptions. The 10% rate move, the retention percentage and the cap rate band are read from the sources.\n\nStart with the revenue. 120 keys for 365 nights is 43,800 available room nights. At 71% occupancy, the Q1 2026 Matthews Hotel Index reading for Tampa, that is 31,098 occupied nights, and at an assumed $175 average daily rate that is $5,442,150 of rooms revenue. Assume $5,600,000 of total revenue and $1,450,000 of net operating income, a 25.9% margin, with property insurance of $250,000 inside it: 4.5% of revenue and 17.2% of net operating income.\n\nApply the market move. A 10% decrease, the US property figure in Marsh's third-quarter 2026 index, takes the premium from $250,000 to $225,000 and saves $25,000.[1] Insurance is a fixed charge, so the whole saving lands in net operating income, which rises from $1,450,000 to $1,475,000.\n\nPrice it. At 8.25%, the top of the Q1 2026 index band for Tampa select-service, the hotel goes from $17,575,758 to $17,878,788. That is $303,030 of value, or $2,525 a key. At 7.5%, the bottom of the same band, the saving is worth $333,333, or $2,778 a key.\n\nSize the loan. At 1.35x coverage, the ratio this site's own debt index uses in its published loan definition, maximum annual debt service rises from $1,074,074 to $1,092,593. On an assumed 7.50% coupon amortizing over 25 years the annual debt constant is 8.8679%, so the loan rises from $12,111,941 to $12,320,767. That is $208,827 of additional proceeds, about 69% of the value effect at the same cap rate.\n\nNow the number that dwarfs both. Assume total insured value of $19,200,000, or $160,000 a key. The 5% named-storm retention RLJ publishes for certain coastal hotels is $960,000 on that total insured value.[4] That is 65.1% of the hotel's new net operating income and 38.4 times the annual premium saving. The premium is the number on the renewal; the retention decides what a bad year looks like.",
  },
  faq: [
    {
      q: "Does a lower insurance premium really raise my hotel's value?",
      a: "Yes. Insurance is a fixed charge taken out before net operating income, so the saving flows straight through. At an 8.00% cap rate, $100,000 of annual premium is worth $1,250,000 of value.",
    },
    {
      q: "Did hotel insurance get cheaper in 2026?",
      a: "Rates fell. Marsh's October 21, 2026 index put US property insurance rates down 10% in the third quarter, after 12% and 9% declines.[1] Summit's property taxes, insurance and other line fell 3.3% in the same quarter.[2]",
    },
    {
      q: "What is a named storm deductible on a hotel?",
      a: "A retention set as a percentage of total insured value rather than a flat amount. RLJ Lodging Trust publishes 5% of total insured value for a named storm at certain coastal hotels.[4]",
    },
    {
      q: "What does a hotel property insurance premium normally cost?",
      a: "No public source read this run publishes one. Insurers do not disclose their rating, and the filings report insurance bundled with property taxes, so even their own lines cannot be split.",
    },
    {
      q: "Does a hotel lender require property insurance?",
      a: "Always, and only SBA publishes the requirement. SOP 50 10 8.1, effective October 1, 2026, requires hazard insurance on all pledged collateral and says the loan cannot be approved if it is unavailable.[5]",
    },
    {
      q: "Will a buyer use my insurance premium in its underwriting?",
      a: "Rarely. A buyer insures under its own program from closing. Loss runs, a current building valuation and a wind mitigation report move the quote the buyer actually gets.",
    },
    {
      q: "How much more can I borrow if my premium falls $25,000?",
      a: "About $208,827 in the worked example, at 1.35x coverage on an assumed 7.50% coupon over 25 years. The same $25,000 is worth $303,030 of value at an 8.25% cap rate, so price moves more than debt.",
    },
    {
      q: "Is business interruption coverage part of this?",
      a: "Yes, and it is the half that protects net operating income. Host carries property, business interruption and terrorism, and says war and infectious disease coverage is extremely limited.[3] Check the waiting period.",
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "Global commercial insurance rates fall 5 percent in Q3 2026, press release of October 21, 2026, reporting the Global Insurance Market Index: the global composite down 5%, property down 10% globally and down 10% in the US as one of five double-digit regions, property declines of 12% in Q2 2026 and 9% in Q1 2026, and the ample capacity, insurer competition, lower reinsurance costs and benign US hurricane season the release credits",
      url: "https://www.marsh.com/en/corp/about/news/global-commercial-insurance-falls-5-percent-q3-2026.html",
      publisher: "Marsh",
      accessed: "2026-11-05",
    },
    {
      n: 2,
      label:
        "Summit Hotel Properties, Inc. Form 10-Q for the quarterly period ended September 30, 2026: condensed consolidated statements of operations, the property taxes, insurance and other line and total revenues for the three and nine months ended September 30, 2026 and 2025, and the general liability per-claim retention described in the significant accounting policies note",
      url: "https://www.sec.gov/Archives/edgar/data/1497645/000149764526000077/inn-20260930.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-11-05",
    },
    {
      n: 3,
      label:
        "Host Hotels & Resorts, Inc. Form 10-K for fiscal year 2025: the risk factors on insurance and on expenses that do not fall with revenue (all-risk per-occurrence policies, combining claims from one occurrence, sub-limits significantly below the overall limit, deductibles fixed or as a percentage of total insured value, the affiliated captive insurer, the six named locations, limited war and infectious disease coverage, and insurance possibly exceeding inflation), and the MD&A on other property-level expenses of $426 million in 2025 against $411 million in 2024 and total revenues of $6,114 million against $5,684 million",
      url: "https://www.sec.gov/Archives/edgar/data/1070750/000107075026000054/hst-20251231.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-11-05",
    },
    {
      n: 4,
      label:
        "RLJ Lodging Trust Form 10-K for fiscal year 2025: the Insurance discussion in Item 1 and the \"Uninsured and underinsured losses at our hotel properties\" risk factor, for the $250,000 property self-insured retention per claim, the 5% of total insured value named storm retention at certain coastal hotels, retentions of up to 5% of total insured value in earthquake-prone areas, the $500,000 general liability retention per claim, fire, terrorism and extended coverage, replacement cost basis, and the absence of cyber insurance",
      url: "https://www.sec.gov/Archives/edgar/data/1511337/000151133726000007/rlj-20251231.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-11-05",
    },
    {
      n: 5,
      label:
        "SOP 50 10 8.1, Lender and Development Company Loan Programs, Technical Policy Updates effective October 1, 2026: Insurance Requirements and Hazard Insurance at Section A, Chapter 5, Paragraph C.1, for hazard insurance on all pledged collateral above $50,000, the sentence that the loan cannot be approved where hazard insurance is not available, the separate state-required wind, hail or earthquake policy, full replacement cost or maximum insurable value, the mortgagee and lender's loss payable clauses, 10 days' notice of cancellation, and the optional tax and insurance escrow",
      url: "https://legacy.sba.gov/sites/default/files/2026-10/SOP%2050%2010%208.1%20Technical%20Policy%20Updates%20effective%20%2010.1.2026.docx",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-11-05",
    },
    {
      n: 6,
      label:
        "13 CFR 120.160, Loan conditions, paragraph (c) Hazard Insurance, with 13 CFR 120.170, Flood insurance, in the same subject group. Read twice: once through the eCFR versioner API against the October 1, 2026 issue of title 13, and once on Cornell's Legal Information Institute, which is the URL cited because eCFR's own HTML pages redirect a scripted reader. The two agreed word for word",
      url: "https://www.law.cornell.edu/cfr/text/13/120.160",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-05",
    },
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/property-tax-appeal",
      "/hotel-valuation/appraisal-lower-than-expected",
      "/hotel-valuation/broker-opinion-of-value",
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/cap-rate",
      "/glossary/dscr",
      "/glossary/gop",
    ],
    data: ["/research/mhi/q1-2026", "/rates"],
  },
  cta: { label: "Have us value your hotel", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets does not place insurance and does not advise on it, and the team reads the policy and the loss runs before it prices a hotel, because the premium and the retention both sit in the price; broker opinions of value are free on hotels from $2 million.",
};

export default page;
