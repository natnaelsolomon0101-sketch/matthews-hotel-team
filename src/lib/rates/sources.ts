import type { RateSource } from "./types";

/**
 * Every source the rate sheet cites, in one place, each with the date the
 * source itself carries and the date a person on this team last opened the
 * link. Cells reference these by id. A cell with no source id cannot be
 * marked `published`.
 *
 * All links were opened and read on 2026-09-17. The Treasury, SOFR, FRED,
 * FOMC, SBA 7(a) and prime-rate announcement sources were re-read on
 * 2026-09-18 for the September correction. The FRED and FOMC sources were
 * re-read again on 2026-09-21, when DPRIME had printed the post-hike value.
 *
 * For the October 2026 edition, every source below except the two bank
 * prime-rate announcements and the two September FOMC series was re-opened on
 * 2026-10-01. SOP 50 10 moved to its 8.1 edition that day, so the SOP entry
 * now points at the 8.1 document and the cells that cite it carry SBA's own
 * page numbers. The BNY and PNC announcements are left as they were: they are
 * what the September edition published, and an archived edition's sources do
 * not get re-dated.
 */
export const RATE_SOURCES: RateSource[] = [
  {
    id: "treasury-yield-curve",
    name: "Daily Treasury Par Yield Curve Rates",
    publisher: "U.S. Department of the Treasury",
    url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
    asOf: "2026-09-30",
    verified: "2026-10-01",
  },
  {
    id: "nyfed-sofr",
    name: "Secured Overnight Financing Rate (SOFR)",
    publisher: "Federal Reserve Bank of New York",
    url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
    asOf: "2026-09-30",
    verified: "2026-10-01",
  },
  {
    id: "fred-dprime",
    name: "Bank Prime Loan Rate (DPRIME)",
    publisher: "Federal Reserve Bank of St. Louis (FRED)",
    url: "https://fred.stlouisfed.org/series/DPRIME",
    asOf: "2026-09-28",
    verified: "2026-10-01",
  },
  {
    id: "fed-h15",
    name: "Selected Interest Rates (Daily), H.15, bank prime loan rate",
    publisher: "Board of Governors of the Federal Reserve System",
    url: "https://www.federalreserve.gov/releases/h15/",
    asOf: "2026-09-29",
    verified: "2026-10-01",
  },
  {
    id: "bny-prime-2026-09",
    name: "BNY Increases Prime Lending Rate to 7.00%, effective September 17, 2026",
    publisher: "The Bank of New York Mellon Corporation, via PR Newswire",
    url: "https://www.prnewswire.com/news-releases/bny-increases-prime-lending-rate-to-7-00-302881066.html",
    asOf: "2026-09-16",
    verified: "2026-09-18",
  },
  {
    id: "pnc-prime-2026-09",
    name: "PNC Bank, N.A. Changes Prime Rate to 7.00%, effective September 17, 2026",
    publisher: "PNC Bank, N.A., via PR Newswire",
    url: "https://www.prnewswire.com/news-releases/pnc-bank-na-changes-prime-rate-302881163.html",
    asOf: "2026-09-16",
    verified: "2026-09-18",
  },
  {
    id: "fred-dfedtaru",
    name: "Federal Funds Target Range, Upper Limit (DFEDTARU)",
    publisher: "Federal Reserve Bank of St. Louis (FRED)",
    url: "https://fred.stlouisfed.org/series/DFEDTARU",
    asOf: "2026-09-17",
    verified: "2026-09-21",
  },
  {
    id: "fomc-2026-09",
    name: "FOMC statement, September 16, 2026 (target range 3-3/4 to 4 percent)",
    publisher: "Board of Governors of the Federal Reserve System",
    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm",
    asOf: "2026-09-16",
    verified: "2026-09-21",
  },
  {
    id: "sba-7a-terms",
    name: "7(a) loan program: terms, conditions, and eligibility",
    publisher: "U.S. Small Business Administration",
    url: "https://www.sba.gov/sba-lenders/#7a-terms",
    asOf: "2026-10-01",
    verified: "2026-10-01",
  },
  {
    id: "sba-504-program",
    name: "504 loans",
    publisher: "U.S. Small Business Administration",
    url: "https://www.sba.gov/loans/504-loans/",
    asOf: "2026-10-01",
    verified: "2026-10-01",
  },
  {
    id: "cfr-120-910",
    name: "13 CFR 120.910, How much must the Borrower contribute?",
    publisher: "Code of Federal Regulations",
    url: "https://www.law.cornell.edu/cfr/text/13/120.910",
    asOf: "2026-10-01",
    verified: "2026-10-01",
  },
  {
    id: "nadco-504-debenture",
    name: "September 2026 SBA 504 debenture pricing, priced September 10, 2026",
    publisher: "SomerCor (Certified Development Company), republishing NADCO pricing",
    url: "https://somercor.com/september-2026-sba-504-interest-rates/",
    asOf: "2026-09-10",
    verified: "2026-10-01",
  },
  {
    id: "cdcloans-504-debenture",
    name: "SBA 504 rates and rate history, September 2026 funding",
    publisher: "CDC Small Business Finance",
    url: "https://cdcloans.com/sba-504-rates/",
    asOf: "2026-09-10",
    verified: "2026-10-01",
  },
  {
    id: "sba-sop-50-10",
    name: "SOP 50 10 8.1 with Technical Policy Updates, Lender and Development Company Loan Programs, published September 25, 2026 and effective October 1, 2026",
    publisher: "U.S. Small Business Administration, Office of Capital Access",
    url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
    asOf: "2026-10-01",
    verified: "2026-10-01",
  },
  {
    id: "cfr-120-160",
    name: "13 CFR 120.160, What are the requirements for a guaranty?",
    publisher: "Code of Federal Regulations",
    url: "https://www.law.cornell.edu/cfr/text/13/120.160",
    asOf: "2026-10-01",
    verified: "2026-10-01",
  },
  {
    id: "fomc-calendar-2026",
    name: "FOMC meeting calendar, 2026 (next meeting October 27 and 28, 2026)",
    publisher: "Board of Governors of the Federal Reserve System",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    asOf: "2026-10-01",
    verified: "2026-10-01",
  },
];

export function source(id: string): RateSource | undefined {
  return RATE_SOURCES.find((s) => s.id === id);
}

/** The sources actually referenced by a set of cells, in declaration order. */
export function sourcesFor(ids: string[]): RateSource[] {
  return RATE_SOURCES.filter((s) => ids.includes(s.id));
}
