/**
 * One catalog of the public sources behind the /hotel-industry cluster, so a
 * URL or a label is typed once and every page cites it the same way.
 *
 * Every entry was opened and read on 2026-09-18. Where the reading was taken
 * from a trade publication republishing a research house, the publisher field
 * says so: CoStar's own press-release pages refuse scripted readers, so the
 * STR / CoStar figures here are the ones those firms put in public releases,
 * read where a trade publication carried them.
 */
import type { AnswerSource } from "../types";

const ACCESSED = "2026-09-18";

const CATALOG = {
  fy2025: {
    label: "Key full-year US hotel metrics fall for first time since 2020 (January 22, 2026): full-year 2025 occupancy, ADR and RevPAR",
    url: "https://www.hoteldive.com/news/hotel-occupancy-revpar-decline-2025/810212/",
    publisher: "Hotel Dive, citing CoStar",
  },
  july2026: {
    label: "U.S. Hotels Post Strong July Gains as Occupancy, Rates and RevPAR Rise (August 26, 2026)",
    url: "https://www.hotel-online.com/news/us-hotels-post-strong-july-gains-as-occupancy-rates-and-revpar-rise",
    publisher: "Hotel Online, citing CoStar",
  },
  forecastAug: {
    label: "CoStar, Tourism Economics 'significantly' boost US hotel outlook (August 7, 2026)",
    url: "https://www.hoteldive.com/news/costar-tourism-economics-raise-us-hotel-performance-outlook-2026/827318/",
    publisher: "Hotel Dive, citing CoStar and Tourism Economics",
  },
  assumptionsAug: {
    label: "U.S. Hotel Forecast Assumptions, August 2026 (August 11, 2026)",
    url: "https://www.hospitalitynet.org/news/4133888/us-hotel-forecast-assumptions-august-2026",
    publisher: "CoStar, republished by Hospitality Net",
  },
  forecastJune: {
    label: "CoStar, Tourism Economics upgrade US RevPAR forecast for 2026 (June 2, 2026)",
    url: "https://www.hoteldive.com/news/costar-tourism-economics-hotel-revpar-forecast-2026/821683/",
    publisher: "Hotel Dive, citing CoStar and Tourism Economics",
  },
  forecastFeb: {
    label: "2026 forecast shows modest RevPAR growth amid lingering industry headwinds (February 10, 2026)",
    url: "https://www.hotel-online.com/news/2026-forecast-shows-modest-revpar-growth-amid-lingering-industry-headwinds",
    publisher: "Hotel Online, citing STR and Tourism Economics (CoStar Group)",
  },
  cbre: {
    label: "U.S. Real Estate Market Outlook Midyear Review 2026, Hotels",
    url: "https://www.cbre.com/insights/books/us-real-estate-market-outlook-midyear-review-2026/hotels",
    publisher: "CBRE",
  },
  pwc: {
    label: "US Hospitality Directions: May 2026 (published June 25, 2026)",
    url: "https://www.hotelnewsresource.com/article141835.html",
    publisher: "Hotel News Resource, republishing PwC",
  },
  pwcDec: {
    label: "US lodging industry to see slow, stable growth in 2026: report (January 9, 2026)",
    url: "https://www.hoteldive.com/news/PwC-hospitality-directions-outlook-lodging-2026/809205/",
    publisher: "Hotel Dive, citing PwC",
  },
  ahla: {
    label: "AHLA releases 2026 State of the Industry (January 27, 2026)",
    url: "https://www.ahla.com/news/ahla-releases-2026-state-industry",
    publisher: "American Hotel & Lodging Association",
  },
  ahlaFranchising: {
    label: "Franchising: hotel franchising facts",
    url: "https://www.ahla.com/issue/franchising",
    publisher: "American Hotel & Lodging Association",
  },
  ahlaFranchiseAct: {
    label: "AHLA Statement on House Committee Passage of American Franchise Act (July 21, 2026)",
    url: "https://www.ahla.com/news/ahla-statement-house-committee-passage-american-franchise-act",
    publisher: "American Hotel & Lodging Association",
  },
  usali: {
    label: "HFTP, AHLA and GFC unveil the 12th Revised Edition of the Uniform System of Accounts for the Lodging Industry (July 11, 2024)",
    url: "https://www.ahla.com/news/hftp-ahla-and-gfc-unveil-groundbreaking-12th-revised-edition-uniform-system-accounts-lodging",
    publisher: "American Hotel & Lodging Association",
  },
  usaliGuide: {
    label: "USALI P&L structure (Summary Operating Statement): a practical guide (February 23, 2026)",
    url: "https://hospitalityfinancenetwork.com/usali-pl-structure-summary-operating-statement-a-practical-guide/",
    publisher: "Hospitality Finance Network",
  },
  host: {
    label: "Host Hotels & Resorts, Inc. Reports Results for 2025 (February 18, 2026), consolidated statements of operations and comparable hotel results",
    url: "https://www.globenewswire.com/news-release/2026/02/18/3240651/0/en/host-hotels-resorts-inc-reports-results-for-2025.html",
    publisher: "Host Hotels & Resorts, Inc., via GlobeNewswire",
  },
  apple: {
    label: "Apple Hospitality REIT Reports Results of Operations for Fourth Quarter and Full Year 2025 (February 23, 2026)",
    url: "https://ir.applehospitalityreit.com/News/news-details/2026/Apple-Hospitality-REIT-Reports-Results-of-Operations-for-Fourth-Quarter-and-Full-Year-2025/default.aspx",
    publisher: "Apple Hospitality REIT, Inc.",
  },
  marriott: {
    label: "Marriott International, Inc. Form 10-K for fiscal year 2025 (filed February 10, 2026), Item 1, Business",
    url: "https://www.sec.gov/Archives/edgar/data/1048286/000104828626000007/mar-20251231.htm",
    publisher: "U.S. Securities and Exchange Commission, EDGAR",
  },
  hilton: {
    label: "Hilton Worldwide Holdings Inc. Form 10-K for fiscal year 2025 (filed February 11, 2026), Item 1, Business",
    url: "https://www.sec.gov/Archives/edgar/data/1585689/000158568926000007/hlt-20251231.htm",
    publisher: "U.S. Securities and Exchange Commission, EDGAR",
  },
  choice: {
    label: "Choice Hotels International, Inc. Form 10-K for fiscal year 2025, Item 1, Business: The Lodging Industry",
    url: "https://www.sec.gov/Archives/edgar/data/1046311/000104631126000008/chh-20251231.htm",
    publisher: "U.S. Securities and Exchange Commission, EDGAR",
  },
  wyndham: {
    label: "Wyndham Hotels & Resorts, Inc. Form 10-K for fiscal year 2025, Item 1, Business",
    url: "https://www.sec.gov/Archives/edgar/data/1722684/000172268426000007/wh-20251231.htm",
    publisher: "U.S. Securities and Exchange Commission, EDGAR",
  },
  hampton: {
    label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6, 15, 17 and 19",
    url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
    publisher: "Hilton Franchise Holding LLC",
  },
  aahoa: {
    label: "Oxford Economics Study: the economic impact of AAHOA Member-owned hotels",
    url: "https://www.aahoa.com/resources/oxford-study",
    publisher: "Asian American Hotel Owners Association (AAHOA)",
  },
  aahoa2021: {
    label: "New AAHOA/Oxford Economics Study Details Extent of AAHOA Members' Economic Impact and Industry Influence (August 5, 2021)",
    url: "https://www.hospitalitynet.org/news/4105842/new-aahoaoxford-economics-study-details-extent-of-aahoa-members-economic-impact-and-industry-influence",
    publisher: "AAHOA, republished by Hospitality Net",
  },
  bls: {
    label: "Industries at a Glance: Accommodation, NAICS 721 (data extracted September 18, 2026)",
    url: "https://www.bls.gov/iag/tgs/iag721.htm",
    publisher: "U.S. Bureau of Labor Statistics",
  },
  le: {
    label: "U.S. hotel construction pipeline, second quarter 2026 (July 23, 2026)",
    url: "https://lodgingeconometrics.com/us-hotel-construction-pipeline-q2-2026/",
    publisher: "Lodging Econometrics",
  },
  usc856: {
    label: "26 U.S.C. Section 856(d)(8) and (d)(9): qualified lodging facilities and eligible independent contractors",
    url: "https://www.law.cornell.edu/uscode/text/26/856",
    publisher: "Legal Information Institute, Cornell Law School",
  },
  strScales: {
    label: "Luxury chain scale shows pricing disparity (June 19, 2009), which states how STR assigns chain scales",
    url: "https://www.hospitalitynet.org/report/4042052/luxury-chain-scale-shows-pricing-disparity-str",
    publisher: "STR, republished by Hospitality Net",
  },
  strStar: {
    label: "How to use the STAR report (PDF dated December 1, 2008): definitions of class, market scale and competitive set",
    url: "https://higherlogicdownload.s3.amazonaws.com/HSMAI/1e8cd6e8-21bf-476f-bc30-b600b33c652d/UploadedFiles/7pER55exS7zc1Qx5iSaK_HowTo%20Use%20the%20STAR%20Report%20-%20STR.pdf",
    publisher: "STR, hosted by HSMAI",
  },
  jllQ1: {
    label: "Luxury trades drove US hotel transaction uptick in Q1: JLL (May 14, 2026)",
    url: "https://www.hoteldive.com/news/luxury-trades-drove-us-hotel-transaction-uptick-q1-jll/820221/",
    publisher: "Hotel Dive, citing JLL",
  },
  rates: {
    label: "Matthews Hotel Markets September 2026 rate sheet",
    url: "/rates",
    publisher: "Matthews Hotel Markets",
  },
  mhi: {
    label: "Matthews Hotel Index, Q1 2026",
    url: "/research/mhi/q1-2026",
    publisher: "Matthews Hotel Markets (first-party)",
  },
  stats: {
    label: "Hotel financing statistics: every figure with its source and two dates",
    url: "/data/hotel-financing-statistics",
    publisher: "Matthews Hotel Markets (first-party)",
  },
} as const;

export type SourceKey = keyof typeof CATALOG;

/** Number the given sources 1..n in the order listed. */
export function cite(...keys: SourceKey[]): AnswerSource[] {
  return keys.map((k, i) => ({ n: i + 1, ...CATALOG[k], accessed: ACCESSED }));
}
