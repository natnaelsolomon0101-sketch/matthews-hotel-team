/**
 * Hotel financing statistics, for /data/hotel-financing-statistics.
 *
 * RULE: one sentence, one number, one link, two dates. `asOf` is the date the
 * source itself carries. `verified` is the date a person on this team opened
 * the link and read the number off the page. If a number cannot get all five
 * of those, it does not go in this file.
 *
 * Every entry below was opened and read on 2026-09-17. The SOFR, Prime,
 * FOMC, target-range and SBA 7(a) entries were re-read on 2026-09-18 for the
 * correction that followed the September 16 FOMC decision. Where the reading was
 * taken from a trade publication quoting a primary research house rather than
 * from the research house directly, `note` says so, because a reader deserves
 * to know how many hands the number passed through.
 *
 * Three widely repeated figures are deliberately ABSENT and are listed in
 * REMOVED_FIGURES below, which renders on the page. They were carried on this
 * site before and could not be verified.
 */

export type StatGroup =
  | "rates-and-spreads"
  | "sba"
  | "lending-volume"
  | "maturities-and-distress"
  | "transactions-and-cap-rates"
  | "operating-fundamentals";

export type Stat = {
  id: string;
  group: StatGroup;
  text: string;
  sourceName: string;
  publisher: string;
  url: string;
  /** Date the source carries. */
  asOf: string;
  /** Date a person here last opened the link. */
  verified: string;
  note?: string;
};

export const STAT_GROUPS: { key: StatGroup; label: string; blurb: string }[] = [
  {
    key: "rates-and-spreads",
    label: "Rates and spreads",
    blurb:
      "The indexes every hotel loan is priced off. All read directly from the institution that publishes them.",
  },
  {
    key: "sba",
    label: "SBA",
    blurb:
      "SBA is the only lender type whose maximum rates and leverage rules are published in writing. This is the most checkable section on the page.",
  },
  {
    key: "lending-volume",
    label: "Lending volume",
    blurb: "How much commercial mortgage debt is being written.",
  },
  {
    key: "maturities-and-distress",
    label: "Maturities and distress",
    blurb:
      "What is coming due and what is not performing. Every figure here names the research house behind it.",
  },
  {
    key: "transactions-and-cap-rates",
    label: "Transaction volume and cap rates",
    blurb: "What hotels are trading and at what pricing.",
  },
  {
    key: "operating-fundamentals",
    label: "Operating fundamentals",
    blurb:
      "Demand, rate and profit. Two credible houses disagree about 2026, and both forecasts are below.",
  },
];

const V = "2026-09-17";
/** Re-verified for the September 18, 2026 correction. */
const V2 = "2026-09-18";

const TREASURY = {
  sourceName: "Daily Treasury Par Yield Curve Rates",
  publisher: "U.S. Department of the Treasury",
  url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
};

export const STATS: Stat[] = [
  /* ------------------------------------------------- rates and spreads */
  {
    id: "ust10",
    group: "rates-and-spreads",
    text: "The 10-year Treasury yield was 4.94% on September 17, 2026.",
    ...TREASURY,
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "ust7",
    group: "rates-and-spreads",
    text: "The 7-year Treasury yield was 4.86% on September 17, 2026.",
    ...TREASURY,
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "ust5",
    group: "rates-and-spreads",
    text: "The 5-year Treasury yield was 4.78% on September 17, 2026.",
    ...TREASURY,
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "ust2",
    group: "rates-and-spreads",
    text: "The 2-year Treasury yield was 4.67% on September 17, 2026.",
    ...TREASURY,
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "ust30",
    group: "rates-and-spreads",
    text: "The 30-year Treasury yield was 5.29% on September 17, 2026, and the 20-year was higher at 5.32%.",
    ...TREASURY,
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "curve-5s10s",
    group: "rates-and-spreads",
    text: "The gap between the 5-year and 10-year Treasury was 16 basis points on September 17, 2026, so a borrower choosing a 10-year fixed term over a 5-year paid about 16 basis points for the extra five years of certainty.",
    ...TREASURY,
    asOf: "2026-09-17",
    verified: V,
    note: "Arithmetic on the two published yields, 4.94% less 4.78%.",
  },
  {
    id: "ust10-month",
    group: "rates-and-spreads",
    text: "The 10-year Treasury rose 19 basis points between August 31 and September 17, 2026, from 4.75% to 4.94%.",
    ...TREASURY,
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "ust5-month",
    group: "rates-and-spreads",
    text: "The 5-year Treasury rose 29 basis points over the same stretch, from 4.49% to 4.78%, flattening the 5s10s curve by 10 basis points.",
    ...TREASURY,
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "sofr",
    group: "rates-and-spreads",
    text: "SOFR, the index under almost every floating-rate hotel bridge loan, was 3.85% for September 17, 2026, the first day under the Fed's new target range.",
    sourceName: "Secured Overnight Financing Rate",
    publisher: "Federal Reserve Bank of New York",
    url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
    asOf: "2026-09-17",
    verified: V2,
    note: "Corrected September 18, 2026. This entry first read 3.62% for September 16.",
  },
  {
    id: "sofr-month",
    group: "rates-and-spreads",
    text: "SOFR rose 17 basis points between August 31 and September 17, 2026, from 3.68% to 3.85%, most of it on September 17 after the Fed's September 16 increase. Fixed-rate term debt also got more expensive over the month.",
    sourceName: "Secured Overnight Financing Rate",
    publisher: "Federal Reserve Bank of New York",
    url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
    asOf: "2026-09-17",
    verified: V2,
    note: "Corrected September 18, 2026. This entry first read a 6 basis point fall to 3.62% for September 16.",
  },
  {
    id: "prime",
    group: "rates-and-spreads",
    text: "The prime rate moved from 6.75% to 7.00% effective September 17, 2026, as BNY and PNC announced after the Fed's September 16 increase.",
    sourceName: "BNY Increases Prime Lending Rate to 7.00%",
    publisher: "The Bank of New York Mellon Corporation, via PR Newswire",
    url: "https://www.prnewswire.com/news-releases/bny-increases-prime-lending-rate-to-7-00-302881066.html",
    asOf: "2026-09-16",
    verified: V2,
    note: "PNC announced the same 7.00% rate, also effective September 17. The Federal Reserve's DPRIME series on FRED had not yet printed a post-hike value on September 18, 2026; its last observation is 6.75% on September 15. Corrected September 18, 2026: this entry first read 6.75%.",
  },
  {
    id: "fomc",
    group: "rates-and-spreads",
    text: "The FOMC raised the target range for the federal funds rate by 25 basis points to 3-3/4 to 4 percent on September 16, 2026, on a 12 to 0 vote.",
    sourceName: "FOMC statement, September 16, 2026",
    publisher: "Board of Governors of the Federal Reserve System",
    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm",
    asOf: "2026-09-16",
    verified: V2,
  },
  {
    id: "fedtaru",
    group: "rates-and-spreads",
    text: "The upper limit of the federal funds target range moved to 4.00% effective September 17, 2026.",
    sourceName: "Federal Funds Target Range, Upper Limit (DFEDTARU)",
    publisher: "Federal Reserve Bank of St. Louis (FRED)",
    url: "https://fred.stlouisfed.org/series/DFEDTARU",
    asOf: "2026-09-17",
    verified: V2,
  },

  /* --------------------------------------------------------------- SBA */
  {
    id: "sba-7a-spread-large",
    group: "sba",
    text: "SBA caps the spread on a variable-rate 7(a) loan over $350,000 at the base rate plus 3.00%.",
    sourceName: "7(a) loan program: terms, conditions, and eligibility",
    publisher: "U.S. Small Business Administration",
    url: "https://www.sba.gov/sba-lenders/#7a-terms",
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "sba-7a-spread-tiers",
    group: "sba",
    text: "Below $350,000 the published caps step up: base plus 4.50% from $250,001 to $350,000, base plus 6.00% from $50,001 to $250,000, and base plus 6.50% at $50,000 or less.",
    sourceName: "7(a) loan program: terms, conditions, and eligibility",
    publisher: "U.S. Small Business Administration",
    url: "https://www.sba.gov/sba-lenders/#7a-terms",
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "sba-7a-max-today",
    group: "sba",
    text: "At Prime of 7.00%, effective September 17, 2026, the maximum allowable rate on a variable-rate 7(a) hotel loan over $350,000 is 10.00%.",
    sourceName: "7(a) loan program: terms, conditions, and eligibility",
    publisher: "U.S. Small Business Administration",
    url: "https://www.sba.gov/sba-lenders/#7a-terms",
    asOf: "2026-09-17",
    verified: V2,
    note: "Prime plus the 3.00% cap SBA publishes. The 7.00% Prime is from the BNY and PNC announcements listed above. Corrected September 18, 2026: this entry first read 9.75%, on the 6.75% Prime last printed by FRED on September 15.",
  },
  {
    id: "sba-7a-max-loan",
    group: "sba",
    text: "The maximum 7(a) loan is $5 million, which is the binding constraint on most hotel acquisitions.",
    sourceName: "7(a) loan program: terms, conditions, and eligibility",
    publisher: "U.S. Small Business Administration",
    url: "https://www.sba.gov/sba-lenders/#7a-terms",
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "sba-7a-maturity",
    group: "sba",
    text: "SBA's maximum 7(a) maturity for real estate is 25 years, plus any additional period needed to complete construction or improvements.",
    sourceName: "7(a) loan program: terms, conditions, and eligibility",
    publisher: "U.S. Small Business Administration",
    url: "https://www.sba.gov/sba-lenders/#7a-terms",
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "sba-7a-guaranty",
    group: "sba",
    text: "SBA guarantees up to 85% of a 7(a) loan of $150,000 or less and up to 75% above $150,000, which is why a lender's credit box on a hotel loosens above the guaranty and not below it.",
    sourceName: "7(a) loan program: terms, conditions, and eligibility",
    publisher: "U.S. Small Business Administration",
    url: "https://www.sba.gov/sba-lenders/#7a-terms",
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "sba-504-debenture-25",
    group: "sba",
    text: "The 25-year SBA 504 debenture priced at an all-in effective rate of 6.54% on September 10, 2026, including CDC, SBA and central servicing agent fees.",
    sourceName: "September 2026 SBA 504 debenture pricing",
    publisher: "SomerCor (Certified Development Company), republishing NADCO pricing",
    url: "https://somercor.com/september-2026-sba-504-interest-rates/",
    asOf: "2026-09-10",
    verified: V,
    note: "Corroborated independently by CDC Small Business Finance at 6.541% for the same September 10 funding.",
  },
  {
    id: "sba-504-debenture-others",
    group: "sba",
    text: "The 20-year debenture priced at 6.53% and the 10-year at 6.60% in the same September 10, 2026 sale.",
    sourceName: "September 2026 SBA 504 debenture pricing",
    publisher: "SomerCor (Certified Development Company), republishing NADCO pricing",
    url: "https://somercor.com/september-2026-sba-504-interest-rates/",
    asOf: "2026-09-10",
    verified: V,
  },
  {
    id: "sba-504-vs-ust",
    group: "sba",
    text: "At 6.54%, the September 2026 25-year 504 debenture priced 160 basis points inside the 10-year Treasury, which makes it the cheapest published fixed-rate money available to a qualifying hotel owner-operator.",
    sourceName: "September 2026 SBA 504 debenture pricing",
    publisher: "SomerCor (Certified Development Company), republishing NADCO pricing",
    url: "https://somercor.com/september-2026-sba-504-interest-rates/",
    asOf: "2026-09-10",
    verified: V,
    note: "Arithmetic on two published figures, the 6.54% debenture and the 4.94% 10-year Treasury.",
  },
  {
    id: "sba-504-hotel-equity",
    group: "sba",
    text: "A hotel is a Limited or Special Purpose Property in SBA's SOP 50 10 8, so under 13 CFR 120.910 the borrower must contribute at least 15% of project cost, capping a 504 structure at 85% of cost.",
    sourceName: "SOP 50 10 8, Section C, Ch. 1, Limited or Special Purpose Property (pp. 354-355), applying 13 CFR 120.910",
    publisher: "U.S. Small Business Administration",
    url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "sba-504-newbiz-equity",
    group: "sba",
    text: "If the hotel is also a new business, meaning in operation two years or less, the required contribution rises to 20% and the ceiling falls to 80% of cost.",
    sourceName: "13 CFR 120.910, How much must the Borrower contribute?",
    publisher: "Code of Federal Regulations",
    url: "https://www.law.cornell.edu/cfr/text/13/120.910",
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "sba-504-standard-equity",
    group: "sba",
    text: "For an ordinary, non-special-purpose property with an established operator, the 504 contribution requirement is only 10%, which is why the hotel-specific 15% surprises first-time hotel buyers.",
    sourceName: "13 CFR 120.910, How much must the Borrower contribute?",
    publisher: "Code of Federal Regulations",
    url: "https://www.law.cornell.edu/cfr/text/13/120.910",
    asOf: "2026-09-17",
    verified: V,
  },
  {
    id: "sba-504-max",
    group: "sba",
    text: "A 504 debenture on a hotel caps at $5 million (the $5.5 million limit applies only to small manufacturers and energy projects), and 10, 20 and 25 year maturities are available.",
    sourceName: "SOP 50 10 8, Section C, Ch. 1, debenture limits (p. 350)",
    publisher: "U.S. Small Business Administration",
    url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
    asOf: "2025-06-01",
    verified: V,
  },
  {
    id: "sba-504-manufacturing",
    group: "sba",
    text: "The 25-year manufacturing debenture priced 24 basis points lower at 6.30% on September 10, 2026, a spread hotels do not get because the annual service fee waiver does not apply to them.",
    sourceName: "SBA 504 rates and rate history",
    publisher: "CDC Small Business Finance",
    url: "https://cdcloans.com/sba-504-rates/",
    asOf: "2026-09-10",
    verified: V,
  },

  /* ---------------------------------------------------- lending volume */
  {
    id: "mba-2026-originations",
    group: "lending-volume",
    text: "The Mortgage Bankers Association forecasts total commercial mortgage originations of $805.5 billion in 2026, up 27% from the $633.7 billion expected for 2025.",
    sourceName:
      "MBA CREF Forecast: Total Commercial Mortgage Originations to Increase 27 Percent to $805 Billion in 2026",
    publisher: "Mortgage Bankers Association",
    url: "https://www.mba.org/news-and-research/newsroom/news/2026/02/09/mba-cref-forecast--total-commercial-mortgage-originations-to-increase-27-percent-to--805-billion-in-2026",
    asOf: "2026-02-09",
    verified: V,
  },
  {
    id: "mba-2026-multifamily",
    group: "lending-volume",
    text: "Multifamily accounts for $399.2 billion of that 2026 forecast, up from $330.6 billion expected in 2025, so roughly half of all commercial mortgage volume is apartments rather than the other property types.",
    sourceName:
      "MBA CREF Forecast: Total Commercial Mortgage Originations to Increase 27 Percent to $805 Billion in 2026",
    publisher: "Mortgage Bankers Association",
    url: "https://www.mba.org/news-and-research/newsroom/news/2026/02/09/mba-cref-forecast--total-commercial-mortgage-originations-to-increase-27-percent-to--805-billion-in-2026",
    asOf: "2026-02-09",
    verified: V,
  },
  {
    id: "mba-maturities-share",
    group: "lending-volume",
    text: "The MBA reports that 17% of outstanding commercial and multifamily mortgage balances mature in 2026.",
    sourceName:
      "MBA: 17% of Commercial and Multifamily Mortgage Balances to Mature in 2026",
    publisher: "Mortgage Bankers Association (via MBA Newslink)",
    url: "https://newslink.mba.org/cmf-newslinks/2026/february/mba-commercial-multifamily-newslink-thursday-feb-12-2026/mba-17-of-commercial-and-multifamily-mortgage-balances-to-mature-in-2026/",
    asOf: "2026-02-12",
    verified: V,
  },

  /* --------------------------------------------- maturities & distress */
  {
    id: "trepp-hotel-2026-maturities",
    group: "maturities-and-distress",
    text: "Trepp counts $18.7 billion of hotel CMBS debt maturing in 2026.",
    sourceName: "4 trends reshaping the 2026 hospitality investment market",
    publisher: "Hotel Dive, citing Trepp",
    url: "https://www.hoteldive.com/news/trends-reshaping-2026-hospitality-investment-market/826807/",
    asOf: "2026-08-03",
    verified: V,
    note: "Read from a trade publication quoting Trepp, not from Trepp directly. A larger 2026-plus-2027 figure circulates widely; we could not source it and do not publish it. See the removed figures below.",
  },
  {
    id: "trepp-hotel-floating",
    group: "maturities-and-distress",
    text: "Nearly 70% of that $18.7 billion of 2026 hotel CMBS maturities carries a floating rate, which is why SOFR rather than the 10-year Treasury is the number that decides whether those loans can extend.",
    sourceName: "4 trends reshaping the 2026 hospitality investment market",
    publisher: "Hotel Dive, citing Trepp",
    url: "https://www.hoteldive.com/news/trends-reshaping-2026-hospitality-investment-market/826807/",
    asOf: "2026-08-03",
    verified: V,
  },
  {
    id: "trepp-overall-delinquency",
    group: "maturities-and-distress",
    text: "The overall CMBS delinquency rate was 7.85% in August 2026, down 1 basis point from July.",
    sourceName:
      "Multifamily CMBS servicing rate declined, delinquencies stayed flat in August: Trepp",
    publisher: "Multifamily Dive, citing Trepp",
    url: "https://www.multifamilydive.com/news/bank-reo-cmbs-servicing-multifamily-deliquency/830531/",
    asOf: "2026-09-16",
    verified: V,
  },
  {
    id: "trepp-special-servicing",
    group: "maturities-and-distress",
    text: "The overall CMBS special servicing rate rose 33 basis points in August 2026 to 11.42%, its highest level since February 2013.",
    sourceName:
      "Multifamily CMBS servicing rate declined, delinquencies stayed flat in August: Trepp",
    publisher: "Multifamily Dive, citing Trepp",
    url: "https://www.multifamilydive.com/news/bank-reo-cmbs-servicing-multifamily-deliquency/830531/",
    asOf: "2026-09-16",
    verified: V,
    note: "Special servicing leads delinquency. A loan moves to special servicing before it misses a payment, so this is the forward-looking of the two rates.",
  },
  {
    id: "trepp-lodging-delinquency",
    group: "maturities-and-distress",
    text: "The lodging CMBS delinquency rate was 5.35% in July 2026, up 13 basis points on the month, and Trepp reported a further increase in August.",
    sourceName: "Trepp: CMBS Delinquency Rate Up 51 Basis Points in July",
    publisher: "MBA Newslink, citing Trepp",
    url: "https://newslink.mba.org/mba-newslinks/2026/august/mba-newslink-thursday-august-6-2026/trepp-cmbs-delinquency-rate-up-51-basis-points-in-july/",
    asOf: "2026-08-06",
    verified: V,
    note: "The August lodging rate itself was not stated in any public release we could open on 2026-09-17, only the direction. We publish July's number and the direction rather than an August number we cannot source.",
  },
  {
    id: "cmbs-late-balance",
    group: "maturities-and-distress",
    text: "Just over $47.42 billion of CMBS loans were more than 30 days late as of the August 2026 reading, with office accounting for just more than 42% of that balance.",
    sourceName: "CMBS Delinquency Rate Declines Slightly in August",
    publisher: "Connect CRE, citing Trepp",
    url: "https://www.connectcre.com/stories/cmbs-delinquency-rate-declines-slightly-in-august/",
    asOf: "2026-09-10",
    verified: V,
  },

  /* -------------------------------------- transactions and cap rates */
  {
    id: "jll-2025-volume",
    group: "transactions-and-cap-rates",
    text: "U.S. hotel transaction volume was $24 billion in 2025, up 17.5% year over year.",
    sourceName: "JLL releases 2025 US hotel investment trends report",
    publisher: "JLL",
    url: "https://www.jll.com/en-us/newsroom/jll-releases-2025-us-hotel-investment-trends-report",
    asOf: "2026-01-30",
    verified: V,
  },
  {
    id: "jll-q1-2026-volume",
    group: "transactions-and-cap-rates",
    text: "U.S. hotel transaction volume rose 14.4% year over year to $5.6 billion in the first quarter of 2026, across 227 transactions, up 35% by count.",
    sourceName: "Luxury trades drove US hotel transaction uptick in Q1: JLL",
    publisher: "Hotel Dive, citing JLL",
    url: "https://www.hoteldive.com/news/luxury-trades-drove-us-hotel-transaction-uptick-q1-jll/820221/",
    asOf: "2026-05-14",
    verified: V,
  },
  {
    id: "jll-q1-single-asset",
    group: "transactions-and-cap-rates",
    text: "Single-asset trades made up $5.4 billion of that first-quarter 2026 volume, up 33% year over year, with five single assets trading above $100 million.",
    sourceName: "Luxury trades drove US hotel transaction uptick in Q1: JLL",
    publisher: "Hotel Dive, citing JLL",
    url: "https://www.hoteldive.com/news/luxury-trades-drove-us-hotel-transaction-uptick-q1-jll/820221/",
    asOf: "2026-05-14",
    verified: V,
  },
  {
    id: "jll-q1-pe-share",
    group: "transactions-and-cap-rates",
    text: "Private equity accounted for 34% of first-quarter 2026 U.S. hotel transactions.",
    sourceName: "Luxury trades drove US hotel transaction uptick in Q1: JLL",
    publisher: "Hotel Dive, citing JLL",
    url: "https://www.hoteldive.com/news/luxury-trades-drove-us-hotel-transaction-uptick-q1-jll/820221/",
    asOf: "2026-05-14",
    verified: V,
  },
  {
    id: "jll-vs-peak",
    group: "transactions-and-cap-rates",
    text: "First-quarter 2026 U.S. hotel transaction volume remained 47% below the 2022 cyclical peak, which is the number that matters when someone calls the market recovered.",
    sourceName: "Luxury trades drove US hotel transaction uptick in Q1: JLL",
    publisher: "Hotel Dive, citing JLL",
    url: "https://www.hoteldive.com/news/luxury-trades-drove-us-hotel-transaction-uptick-q1-jll/820221/",
    asOf: "2026-05-14",
    verified: V,
  },
  {
    id: "jll-global-2025",
    group: "transactions-and-cap-rates",
    text: "Global hotel direct investment in 2025 was 22% above the 2023 trough, with the Americas up 27%, EMEA up 4%, and Asia Pacific down 20%.",
    sourceName: "2026 global hotel investment outlook report",
    publisher: "JLL",
    url: "https://www.jll.com/en-us/newsroom/2026-global-hotel-investment-outlook-report",
    asOf: "2026-02-10",
    verified: V,
  },
  {
    id: "mhi-select-service-cap",
    group: "transactions-and-cap-rates",
    text: "The Matthews Hotel Index puts stabilized, PIP-current select-service cap rates at 7.5% to 8.25% in Austin and 7.75% to 8.5% in Dallas for the first quarter of 2026.",
    sourceName: "Matthews Hotel Index, Q1 2026",
    publisher: "Matthews Hotel Markets",
    url: "https://matthewshotelmarkets.com/research/mhi/q1-2026",
    asOf: "2026-01-01",
    verified: V,
    note: "Our own dataset. The per-market table, the methodology and the public sources behind it are on that page.",
  },

  /* ---------------------------------------------- operating fundamentals */
  {
    id: "costar-2026-forecast",
    group: "operating-fundamentals",
    text: "CoStar and Tourism Economics forecast U.S. RevPAR growth of 0.6% for full-year 2026, on ADR growth of 1.0% and demand growth of 0.4%.",
    sourceName:
      "2026 forecast shows modest RevPAR growth amid lingering industry headwinds",
    publisher: "Hotel Online, citing STR and Tourism Economics (CoStar Group)",
    url: "https://www.hotel-online.com/news/2026-forecast-shows-modest-revpar-growth-amid-lingering-industry-headwinds",
    asOf: "2026-02-10",
    verified: V,
  },
  {
    id: "cbre-2026-forecast",
    group: "operating-fundamentals",
    text: "CBRE forecasts U.S. RevPAR growth of 2.5% in 2026 and 2.1% in 2027, having raised its 2026 number from 1.2% at the start of the year.",
    sourceName: "U.S. Real Estate Market Outlook Midyear Review 2026, Hotels",
    publisher: "CBRE",
    url: "https://www.cbre.com/insights/books/us-real-estate-market-outlook-midyear-review-2026/hotels",
    asOf: "2026-06-30",
    verified: V,
    note: "CBRE and CoStar are roughly 190 basis points apart on the same year. Anyone underwriting to a single RevPAR forecast should know that the two most-cited houses disagree by more than the forecast itself.",
  },
  {
    id: "cbre-occupancy",
    group: "operating-fundamentals",
    text: "CBRE forecasts U.S. occupancy of 62.8% in 2026 and 63.0% in 2027, with ADR growth of 1.7% in both years.",
    sourceName: "U.S. Real Estate Market Outlook Midyear Review 2026, Hotels",
    publisher: "CBRE",
    url: "https://www.cbre.com/insights/books/us-real-estate-market-outlook-midyear-review-2026/hotels",
    asOf: "2026-06-30",
    verified: V,
  },
  {
    id: "cbre-segments",
    group: "operating-fundamentals",
    text: "CBRE forecasts 2026 luxury RevPAR growth of 5.2%, roughly double the national pace, against 0.7% for midscale and minus 0.6% for economy.",
    sourceName: "U.S. Real Estate Market Outlook Midyear Review 2026, Hotels",
    publisher: "CBRE",
    url: "https://www.cbre.com/insights/books/us-real-estate-market-outlook-midyear-review-2026/hotels",
    asOf: "2026-06-30",
    verified: V,
    note: "The segments most select-service hotels sit in are the two that are flat to negative.",
  },
  {
    id: "cbre-supply",
    group: "operating-fundamentals",
    text: "Hotel construction has declined for 15 consecutive months and CBRE projects U.S. inventory growth of just 0.7% a year over the next three years.",
    sourceName: "U.S. Real Estate Market Outlook Midyear Review 2026, Hotels",
    publisher: "CBRE",
    url: "https://www.cbre.com/insights/books/us-real-estate-market-outlook-midyear-review-2026/hotels",
    asOf: "2026-06-30",
    verified: V,
  },
  {
    id: "costar-2025-revpar",
    group: "operating-fundamentals",
    text: "U.S. RevPAR fell 0.3% in 2025, the first non-recessionary annual RevPAR decline ever recorded in the U.S. hotel industry.",
    sourceName:
      "2026 forecast shows modest RevPAR growth amid lingering industry headwinds",
    publisher: "Hotel Online, citing STR and Tourism Economics (CoStar Group)",
    url: "https://www.hotel-online.com/news/2026-forecast-shows-modest-revpar-growth-amid-lingering-industry-headwinds",
    asOf: "2026-02-10",
    verified: V,
  },
  {
    id: "ahla-guest-spending",
    group: "operating-fundamentals",
    text: "AHLA forecasts U.S. hotel guest spending of nearly $805 billion in 2026, a 1.7% increase over 2025.",
    sourceName: "AHLA releases 2026 State of the Industry",
    publisher: "American Hotel & Lodging Association",
    url: "https://www.ahla.com/news/ahla-releases-2026-state-industry",
    asOf: "2026-01-27",
    verified: V,
  },
  {
    id: "ahla-taxes",
    group: "operating-fundamentals",
    text: "U.S. hotels generated $85.1 billion in local, state and federal taxes in 2025, and AHLA projects nearly $87 billion in 2026.",
    sourceName: "AHLA releases 2026 State of the Industry",
    publisher: "American Hotel & Lodging Association",
    url: "https://www.ahla.com/news/ahla-releases-2026-state-industry",
    asOf: "2026-01-27",
    verified: V,
  },
  {
    id: "ahla-wages",
    group: "operating-fundamentals",
    text: "The U.S. hotel industry paid nearly $128 billion in wages and benefits in 2025, projected to approach $131 billion in 2026.",
    sourceName: "AHLA releases 2026 State of the Industry",
    publisher: "American Hotel & Lodging Association",
    url: "https://www.ahla.com/news/ahla-releases-2026-state-industry",
    asOf: "2026-01-27",
    verified: V,
  },
  {
    id: "ahla-jobs",
    group: "operating-fundamentals",
    text: "AHLA projects the hotel workforce will grow by more than 30,000 jobs in 2026, bringing direct hotel operations employment to roughly 2.2 million.",
    sourceName: "AHLA releases 2026 State of the Industry",
    publisher: "American Hotel & Lodging Association",
    url: "https://www.ahla.com/news/ahla-releases-2026-state-industry",
    asOf: "2026-01-27",
    verified: V,
  },
  {
    id: "ahla-goppar",
    group: "operating-fundamentals",
    text: "Rising operating expenses kept gross operating profit per available room at roughly 90% of 2019 levels, which is the single most important number in any hotel underwriting argument that starts from RevPAR recovery.",
    sourceName: "AHLA releases 2026 State of the Industry",
    publisher: "American Hotel & Lodging Association",
    url: "https://www.ahla.com/news/ahla-releases-2026-state-industry",
    asOf: "2026-01-27",
    verified: V,
    note: "RevPAR back to 2019 and GOPPAR at 90% of 2019 is a margin story, and margin is what a DSCR test measures.",
  },
];

/**
 * Numbers that were on this site, or are widely repeated in hotel finance
 * commentary, that we could not verify. They render on the page, visibly,
 * with the reason. Publishing the audit is cheaper than defending the number.
 */
export const REMOVED_FIGURES: {
  claim: string;
  why: string;
  instead: string;
}[] = [
  {
    claim: "About $30 billion of U.S. hotel CMBS maturing through year-end 2027.",
    why: "We could not find a published source for it. Trepp's published figure is $18.7 billion maturing in 2026. Adding 2027 may well get above $30 billion, but adding two numbers together and attributing the total to a research house that did not publish it is not sourcing.",
    instead:
      "The Trepp 2026 figure of $18.7 billion is published above, with the share that floats.",
  },
  {
    claim: "Scottsdale March 2026 RevPAR of $339.",
    why: "The figure traces to a source that appears to report short-term rental performance rather than hotel data. A $339 RevPAR is far outside the range hotel benchmarking reports for that market, which is itself the tell.",
    instead:
      "Market-level hotel figures are in the Matthews Hotel Index, sourced and dated per quarter.",
  },
  {
    claim: "An AHLA forecast of 1.349 billion sold room nights.",
    why: "It is not in AHLA's public 2026 State of the Industry release, which we read on 2026-09-17. That release publishes guest spending, tax contribution, wages and employment, not room nights. The figure may exist in the paid full report, which we have not read and therefore cannot cite.",
    instead:
      "The AHLA figures that are in the public release are published above.",
  },
];

export function statsIn(group: StatGroup): Stat[] {
  return STATS.filter((s) => s.group === group);
}
