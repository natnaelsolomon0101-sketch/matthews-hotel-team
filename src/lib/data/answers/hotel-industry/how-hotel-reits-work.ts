/**
 * How do hotel REITs work, and what do their filings tell a private owner?
 * /hotel-industry/how-hotel-reits-work
 *
 * Written 2026-09-18. A how-to-read-the-filing page. Every figure is from a
 * fiscal 2025 Form 10-K or a results release filed with or furnished to the
 * SEC, read that day. Per-room and percent-of-revenue capex figures are our
 * arithmetic. This is not investment advice and says so on the page.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "how-hotel-reits-work",
  cluster: "hotel-industry",
  isHub: false,
  title: "How Hotel REITs Work, and What Their Filings Tell You",
  h1: "How do hotel REITs work, and what do their filings tell a private owner?",
  description: "How a lodging REIT is structured, how to find its 10-K on EDGAR, and how to read it for RevPAR, margins, capital spending and cap rates on hotels sold.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "How do hotel REITs work?",
    "What can I learn from a hotel REIT's 10-K?",
    "Where can I find real hotel cap rates for free?",
    "How do I look up a hotel REIT's filings on EDGAR?",
    "Why do hotel REITs lease their hotels to a subsidiary?",
    "How much do hotel REITs spend on capex per room?",
    "I own two Hampton Inns, how do my margins compare with the public companies?"
  ],
  answer: "A hotel REIT owns hotels, leases them to its own taxable subsidiary, hires outside managers and pays out at least 90 percent of its taxable income. Its filings are free benchmarks. Apple Hospitality REIT's 10-K, filed February 23, 2026, reports 2025 occupancy of 74.1 percent, a $159.09 average rate and RevPAR of $117.95 across its comparable hotels.[2]",
  takeaways: [
    "The structure is set by the tax code. A REIT may lease a hotel to its taxable subsidiary only if an eligible independent contractor operates it, which is why every hotel REIT pays a management company.[1]",
    "Filings are free on the SEC's EDGAR system: search by company name or ticker, or search the full text of more than 20 years of filings.[6]",
    "Margins to compare with: comparable hotel EBITDA margins of 34.3 percent at Apple Hospitality, 33.4 percent at Summit and 28.9 percent at Host for 2025.[3][5][4]",
    "Cap rates do appear in filings. Summit said it sold a 122-room Hilton Garden Inn in February 2026 at a 6.7 percent capitalization rate after counting about $2.6 million of foregone capital needs.[5]",
    "Capital spending is disclosed too. Apple Hospitality invested approximately $88 million in its 217 hotels in 2025, about $2,975 per room by our arithmetic.[3]"
  ],
  sections: [
    {
      h2: "How is a hotel REIT structured?",
      lead: "A hotel REIT owns the real estate, leases each hotel to a taxable subsidiary it owns, and that subsidiary hires an independent management company to run the hotel.",
      body: "The structure exists because of what the tax code lets a real estate investment trust earn. Section 856 of the Internal Revenue Code requires that at least 75 percent of a REIT's gross income come from real estate sources such as rents, and at least 75 percent of its assets be real estate, cash and government securities. Running a hotel is an operating business, not rent. The code solves this by letting a REIT lease a qualified lodging facility to its taxable REIT subsidiary and treat the rent as good income, but only if an eligible independent contractor operates the hotel.[1]\n\nApple Hospitality REIT's 10-K shows the structure in practice. The company leases all of its 217 hotels to a wholly owned taxable REIT subsidiary under master hotel lease agreements. The subsidiary is subject to federal and state income taxes. Each hotel is run by one of 16 management companies, none affiliated with the company.[2]\n\nThe payoff is at the REIT level. Apple Hospitality says it is generally not subject to federal corporate income tax on the taxable income it distributes, and that it must distribute at least 90 percent of its REIT taxable income each year. It paid approximately $240.4 million of distributions in 2025.[2] The management side of the structure is covered at [How do hotel management agreements work, and what do they cost?](/hotel-industry/hotel-management-agreements)."
    },
    {
      h2: "How do I find a hotel REIT's filings on EDGAR?",
      lead: "Go to the SEC's Search Filings page, type the company's name or ticker symbol, and open its most recent Form 10-K, the annual report.",
      body: "The SEC describes EDGAR as free public access to millions of documents filed by publicly traded companies. Its Search Filings page offers a company search by name or ticker, a full text search that finds keywords and phrases in more than 20 years of filings with filters for date, company and filing category, and tutorials on locating filings.[6]\n\nThree forms matter. The 10-K is the annual report, filed in February for calendar-year companies: Apple Hospitality filed on February 23, 2026, Host Hotels & Resorts and Summit Hotel Properties on February 25, 2026, and RLJ Lodging Trust on February 27, 2026.[2][4][7] The 10-Q is the quarterly version. The 8-K carries the quarterly results release as an exhibit, and that release is often more useful than the 10-K for operating statistics. Summit's fourth-quarter 2025 release, Exhibit 99.1 to an 8-K dated February 25, 2026, is where its cap rates appear.[5]\n\nFull text search is the shortcut. Searching a phrase such as capitalization rate or base management fee across lodging companies' filings takes you straight to the paragraphs this page quotes."
    },
    {
      h2: "Where in a 10-K are RevPAR, ADR and occupancy?",
      lead: "RevPAR, ADR and occupancy are in Item 7 of the 10-K, Management's Discussion and Analysis, usually in the first few pages under results of operations.",
      body: "Apple Hospitality's Item 7 reports that its comparable hotels achieved combined average occupancy of 74.1 percent in 2025 against 75.3 percent in 2024, ADR of $159.09 against $159.31, and RevPAR of $117.95 against $119.92. It defines the terms in the same paragraph: ADR is room revenue divided by rooms sold, and RevPAR is occupancy multiplied by ADR.[2] It also explains the decline, citing weather, reduced government travel, macroeconomic uncertainty, the absence of the leap day and the sale of seven hotels. That commentary, market by market, is free research on what moved select-service demand.\n\nHost's Item 7 reports comparable hotel RevPAR of $229.24, up 3.8 percent, and comparable hotel Total RevPAR of $382.83, up 4.2 percent. Host defines Total RevPAR as rooms, food and beverage and other revenues divided by available room nights.[4] Summit reports same-store RevPAR of $121.73 for 2025, down 1.8 percent, on 73.7 percent occupancy and a $165.22 ADR.[5]\n\nFor scale, HVS's July 13, 2026 survey cites CoStar's national figures for 2025: 62.3 percent occupancy and a $160.54 ADR, which multiplies to RevPAR of about $100.[8] REIT portfolios run well above the national average, which is the first caution in using them as a benchmark. Definitions are at [What are RevPAR, ADR and occupancy, and what is a good number?](/hotel-industry/revpar-adr-occupancy)."
    },
    {
      h2: "What margins do hotel REITs report, and how should a private owner compare?",
      lead: "For 2025, Apple Hospitality reported a comparable hotels adjusted hotel EBITDA margin of 34.3 percent, Summit a pro forma hotel EBITDA margin of 33.4 percent, and Host a comparable hotel EBITDA margin of 28.9 percent.[3][5][4]",
      body: "All three fell from 2024: Apple Hospitality's by 190 basis points, Summit's from 35.7 percent, and Host's by 40 basis points from 29.3 percent.[3][5][4] Host blames the increase in wages expense and lower insurance gains. It says wages and benefits are approximately 58 percent of its departmental and support expenses.[4]\n\nThree adjustments make the comparison fair. First, these are non-GAAP, hotel-level measures that each company defines for itself, and they leave out corporate overhead. Second, they are before any reserve for replacing furniture and equipment, and before debt service. Third, a REIT's hotels carry a full management fee and full brand fees. An owner-operator who pays no management fee should add one before comparing. Apple Hospitality's management fees were $47.1 million in 2025, 3.3 percent of its revenue by our arithmetic, and its franchise royalty fees were $62.6 million.[2]\n\nIf your select-service hotel's margin is far below a third after those adjustments, the filings tell you which lines to look at: Apple Hospitality reports hotel operating expense at 60.0 percent of revenue and property taxes, insurance and other at 6.4 percent.[2] The cost side is at [What does it cost to operate a hotel?](/hotel-industry/hotel-operating-costs)."
    },
    {
      h2: "Do REIT filings disclose cap rates?",
      lead: "Sometimes. A 10-K rarely states a cap rate, but results releases do when a company wants to show investors what it sold a hotel for.",
      body: "None of the six fiscal 2025 10-Ks we searched states the capitalization rate of a purchase or sale. The phrase appears only in accounting language about impairment testing. Summit's results release of February 25, 2026 does state them. It sold the 122-guestroom Hilton Garden Inn Longview, Texas for $12.3 million at a 6.7 percent capitalization rate on trailing net operating income, after consideration of approximately $2.6 million of foregone near-term capital expenditures. It sold two Courtyards in October 2025 for $39.0 million at a blended 4.3 percent after approximately $10.2 million of foregone capital needs. Since 2023 it has sold 13 hotels for about $200 million at a blended rate of approximately 4.6 percent, inclusive of an estimated $59.9 million of foregone capital needs.[5]\n\nRead the method before you borrow the number. Summit's rates count the renovation the buyer inherits, as we read its wording, so they describe what Summit gave up and not the yield the buyer earned on the price alone. A private seller quoting a 4.6 percent cap rate from this release to a buyer would be misreading it.\n\nPrices per key are disclosed more often. Apple Hospitality states that it bought the 126-room Homewood Suites Tampa-Brandon for $18.8 million, approximately $149,000 per key, and the new 260-room Motto by Hilton Nashville Downtown for approximately $98.2 million, or $378,000 per key.[3] Our own market ranges are in the [Matthews Hotel Index, Q1 2026](/research/mhi/q1-2026), and the method is at [What is a good cap rate for a hotel in 2026?](/hotel-valuation/hotel-cap-rates)."
    },
    {
      h2: "How much do hotel REITs spend on capital improvements?",
      lead: "Apple Hospitality invested approximately $88 million in capital expenditures in 2025 across 217 hotels, and Host spent approximately $644 million across 76.[3][4]",
      body: "Apple Hospitality expects to invest $80 million to $90 million in 2026, including comprehensive renovations at approximately 21 hotels.[3] Against 29,583 guest rooms, $88 million is about $2,975 per room, and against $1,412.4 million of revenue it is about 6.2 percent. Both are our arithmetic. Twenty-one of 217 hotels is roughly one in ten. If that pace held, each hotel would see a comprehensive renovation about once a decade, which is our inference and not the company's statement.\n\nHost breaks its spending down: of approximately $644 million in 2025, $282 million was return-on-investment projects, $287 million was renewal and replacement, and $75 million was hurricane and other restoration.[4] Renewal and replacement alone is about $6,900 per room on approximately 41,700 rooms and about 4.7 percent of total revenues, again by our arithmetic. Host's management agreements typically require 4 to 5 percent of gross revenues to be deposited in a furniture, fixtures and equipment reserve.[4]\n\nThe lesson for a private owner is that the reserve is real money. A buyer or lender will deduct one whether or not you have been funding it. See [FF&E reserve](/glossary/ffe-reserve) and [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans)."
    },
    {
      h2: "What else in a REIT 10-K is useful to a private hotel owner?",
      lead: "A lodging REIT's 10-K also discloses management and franchise fee terms, debt terms, ground leases and the risks management worries about, all of which a private owner can use as a checklist.",
      body: "Fee terms are in Item 1 or Item 2. RLJ Lodging Trust discloses base management fees of 1.5 to 3.5 percent of hotel revenues and franchise royalties of 2.0 to 6.0 percent of room revenue plus 1.0 to 4.3 percent for marketing and reservations.[7] Host discloses base fees of generally 2 to 3 percent and incentive fees of generally 10 to 20 percent of profit above the owner's priority.[4]\n\nRisk factors, Item 1A, read like an owner's worry list: Host and Apple Hospitality both warn that wages, property taxes, insurance and utilities are relatively fixed and do not fall with revenue.[4][2] The notes to the financial statements list ground leases and their remaining terms. Apple Hospitality had 14 hotels on ground leases with 13 to 93 years remaining.[2]\n\nTwo limits. A REIT borrows mostly at the corporate level with unsecured notes and credit facilities, so its interest cost says little about a mortgage on one hotel. As of September 17, 2026, the 10-year Treasury is 4.94 percent and SOFR is 3.85 percent, and lenders do not publish the spreads they add for a single-asset hotel loan.[9] And nothing here is advice to buy or sell a REIT's shares. We read these filings for what they say about hotels. For your own hotel, start at [What is my hotel worth, and who decides?](/hotel-valuation), [How does hotel financing work, and what does it cost right now?](/hotel-financing) or [What is involved in selling a hotel?](/sell-a-hotel)."
    }
  ],
  table: {
    caption: "What three lodging REITs' fiscal 2025 filings disclose, and where to find each item (read September 18, 2026). Per-room and percent-of-revenue capital spending figures are our arithmetic.",
    columns: [
      "Item",
      "Apple Hospitality REIT (select-service)",
      "Summit Hotel Properties (select-service, upscale)",
      "Host Hotels & Resorts (luxury and upper-upscale)",
      "Where it is in the filing"
    ],
    rows: [
      ["Portfolio", "217 hotels, 29,583 guest rooms[3]", "94 assets, 14,226 guestrooms as of February 25, 2026[5]", "76 hotels, approximately 41,700 rooms[4]", "10-K Item 1 and Item 2, or the release's first page"],
      ["2025 occupancy", "74.1%[2]", "73.7%, same store[5]", "Reported by market in the 10-K", "10-K Item 7, or the results release"],
      ["2025 ADR", "$159.09[2]", "$165.22, same store[5]", "Reported by market in the 10-K", "10-K Item 7, or the results release"],
      ["2025 RevPAR", "$117.95, down 1.6%[2]", "$121.73, down 1.8%, same store[5]", "$229.24, up 3.8%. Total RevPAR $382.83[4]", "10-K Item 7, or the results release"],
      ["2025 hotel EBITDA margin", "34.3%, comparable hotels adjusted[3]", "33.4%, pro forma[5]", "28.9%, comparable hotels[4]", "Non-GAAP tables in the release or Item 7"],
      ["2025 capital expenditures", "Approximately $88 million, about $2,975 per room and 6.2% of revenue[3]", "Not read in this run", "Approximately $644 million, of which $287 million renewal and replacement[4]", "Release, or Item 7 liquidity section"],
      ["Cap rates on sales", "Not stated. Prices per key are[3]", "6.7%, 4.3% and a 4.6% blend since 2023, each after foregone capital needs[5]", "Not stated", "Results release, transactions section"],
      ["Management fee terms", "Variable fee generally 2.5% to 3.5% of gross revenues at about 81% of hotels[2]", "Base fee generally a percentage of total revenues, plus an incentive fee on hotel-level EBITDA above a return hurdle[11]", "Base generally 2% to 3%, incentive generally 10% to 20% of profit above the owner's priority[4]", "10-K Item 1 or Item 2, and the notes"]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 publishes cap rate and RevPAR ranges by market and segment, which is the local view a national REIT filing cannot give: Apple Hospitality's 74.1 percent occupancy and $117.95 RevPAR describe 217 hotels in 84 markets, not yours.[10][2][3]"
  },
  workedExample: {
    label: "How to read Apple Hospitality REIT's fiscal 2025 10-K in six steps, as the owner of a select-service hotel",
    body: "This walk-through uses the real filing. Figures marked as arithmetic are ours.\n\nStep 1, open the filing. On the SEC's Search Filings page, search Apple Hospitality REIT and open the 10-K filed February 23, 2026.[6][2]\n\nStep 2, Item 1, Business. Read how the hotels are managed. Approximately 81 percent operate under a variable management fee generally within 2.5 to 3.5 percent of gross revenues, with an average initial term of one to two years, and the agreements are terminable on sale of the property.[2] If your contract is longer or costlier, you now have a public reference point.\n\nStep 3, Item 7, revenues. Comparable hotels: 74.1 percent occupancy, $159.09 ADR, $117.95 RevPAR, down 1.6 percent.[2] Put your own three numbers beside them, then remember these are 217 hotels the company chose to own.\n\nStep 4, Item 7, expenses. Hotel operating expense was $847.3 million, 60.0 percent of revenue, up from 58.5 percent. Property taxes, insurance and other was $89.7 million, 6.4 percent, up from 5.9 percent.[2] Together that is 66.4 percent by our arithmetic. Compute the same two percentages from your own statement, adding a management fee if you do not pay one.\n\nStep 5, the results release of the same date. It gives the margin, 34.3 percent, the capital spending, approximately $88 million, and every purchase and sale with its price.[3] Seven sales totaling approximately $73.3 million across 779 rooms is about $94,000 per key by our arithmetic. Two purchases averaged far more, because one was a new 260-room downtown hotel.\n\nStep 6, the notes. Management fees of $47.1 million and franchise royalty fees of $62.6 million are stated to the dollar, as are the ground leases.[2]\n\nWhat you cannot get from the filing is a value for your hotel. That takes your trailing twelve months, your market and your capital needs. You can rough it out with the [hotel value estimator](/tools/hotel-value-estimator), and a broker opinion of value from us is free."
  },
  faq: [
    {
      q: "What is a hotel REIT?",
      a: "A real estate investment trust that owns hotels. To keep its tax status it must earn at least 75 percent of its gross income from real estate sources, so it leases its hotels to a taxable subsidiary and hires independent managers to run them.[1]"
    },
    {
      q: "Why can't a hotel REIT manage its own hotels?",
      a: "Because the tax code treats rent from its taxable subsidiary as qualifying income only if an eligible independent contractor operates the hotel.[1] Apple Hospitality, for example, uses 16 outside management companies for its 217 hotels.[2]"
    },
    {
      q: "Where can I find hotel cap rates for free?",
      a: "In some REIT results releases on EDGAR. Summit Hotel Properties' release of February 25, 2026 states 6.7 percent on one 2026 sale and 4.3 percent on two 2025 sales, each after counting the buyer's near-term capital needs.[5] Read the method before using the number."
    },
    {
      q: "How much do hotel REITs pay out in dividends?",
      a: "A REIT must generally distribute at least 90 percent of its REIT taxable income each year. Apple Hospitality paid $1.01 per common share in 2025, approximately $240.4 million in total.[2] This page is not investment advice."
    },
    {
      q: "What is the difference between a 10-K, a 10-Q and an 8-K?",
      a: "The 10-K is the annual report, the 10-Q the quarterly report, and the 8-K reports events, including the quarterly results release as an exhibit. All are free through the SEC's EDGAR company search and full text search.[6]"
    },
    {
      q: "How much do hotel REITs spend on renovations?",
      a: "Apple Hospitality invested approximately $88 million in 2025, about $2,975 per room by our arithmetic, and plans comprehensive renovations at approximately 21 of its 217 hotels in 2026.[3] Host spent approximately $287 million on renewal and replacement.[4]"
    },
    {
      q: "Are REIT hotel margins a fair benchmark for my hotel?",
      a: "A useful one, with adjustments. The 34.3 percent and 33.4 percent margins at Apple Hospitality and Summit are hotel-level, before reserves and debt service, and include full management and brand fees.[3][5] Their hotels also run about 74 percent occupancy.[2][5]"
    },
    {
      q: "Do hotel REITs buy hotels from private owners?",
      a: "Yes, selectively. Apple Hospitality bought two hotels in 2025 for approximately $117.0 million, both newer Hilton-branded properties, and sold seven older ones.[3] More on who buys what is on our page about hotel buyers."
    }
  ],
  sources: cite("usc856", "appleK", "apple", "hostK", "summitPR", "edgar", "rljK", "hvsCost", "rates", "mhi", "summitK"),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/who-buys-hotels",
      "/hotel-industry/hotel-management-agreements",
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/who-owns-hotels"
    ],
    glossary: [
      "/glossary/cap-rate",
      "/glossary/revpar",
      "/glossary/ffe-reserve",
      "/glossary/noi"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/rates",
      "/tools/hotel-value-estimator"
    ]
  },
  cta: {
    label: "Request a free broker opinion of value for your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances hotels and provides free broker opinions of value, which answer the question a REIT filing cannot: what your hotel is worth."
};

export default page;
