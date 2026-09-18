/**
 * Who buys hotels in the United States?
 * /hotel-industry/who-buys-hotels
 *
 * Written 2026-09-18. Complements /hotel-industry/who-owns-hotels (the stock
 * of ownership) with the flow: who is buying, from whom, and at what size.
 * Transaction volumes are from dated public releases by JLL and LW Hospitality
 * Advisors. Named transactions are ones those releases or the sellers' own
 * SEC-filed earnings releases made public. No public source we read breaks
 * U.S. hotel buyers into shares by type for a full year, so the page does not
 * print such a breakdown.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "who-buys-hotels",
  cluster: "hotel-industry",
  isHub: false,
  title: "Who Buys Hotels in the United States? Buyer Types",
  h1: "Who buys hotels in the United States?",
  description: "The five kinds of hotel buyer, what each one looks for, and public 2025 and 2026 transaction figures from JLL, LW Hospitality Advisors and REIT filings.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "Who buys hotels in the United States?",
    "Who is buying hotels right now?",
    "Who would buy my 80 room hotel?",
    "Do private equity firms buy small hotels?",
    "Are REITs buying or selling hotels in 2026?",
    "Can I buy a hotel with a 1031 exchange?",
    "How much hotel transaction volume was there in 2025?"
  ],
  answer: "Five kinds of buyer: owner-operators, private equity funds, REITs, family offices and wealthy individuals, and 1031 exchange buyers. JLL reported on January 30, 2026 that U.S. hotel transaction volume rose 17.5 percent to $24 billion in 2025, and its first-quarter 2026 report put private equity at 34 percent of transactions.[1][2]",
  takeaways: [
    "U.S. hotel transaction volume was $24 billion in 2025, up 17.5 percent, and $5.6 billion in the first quarter of 2026, up 14.4 percent, across 227 transactions, according to JLL.[1][2]",
    "Private equity made up 34 percent of first-quarter 2026 transactions. JLL also said high-net-worth individuals and foreign capital became increasingly active in 2025.[2][1]",
    "Public REITs have been net sellers of smaller hotels. Apple Hospitality sold seven hotels for about $73.3 million in 2025 and bought two. Summit Hotel Properties has sold 13 hotels for about $200 million since 2023.[4][5]",
    "Owner-operators dominate the small end. SBA approved 686 7(a) loans and 365 504 loans to hotels and motels in fiscal 2025, with a median 7(a) loan of about $2.7 million.[6]",
    "Large single-asset deals are a minority of the market by count: LW Hospitality Advisors counted 107 sales above $10 million in the second quarter of 2026, averaging roughly $35.3 million.[3]"
  ],
  sections: [
    {
      h2: "What kinds of buyers purchase hotels?",
      lead: "Hotel buyers fall into five groups: owner-operators, private equity funds, public and private REITs, family offices and high-net-worth individuals, and 1031 exchange buyers, who can belong to any of the first four.",
      body: "The groups overlap, but they behave differently enough that a seller should know which one is across the table. Wyndham's fiscal 2025 10-K describes the spread among its own franchisees: more than 6,200 of them, ranging from sole proprietors to institutional investors such as public real estate investment trusts.[8]\n\nJLL's 2025 U.S. Hotel Investment Trends release, dated January 30, 2026, describes the mix at the institutional end. It attributes the year's growth to strong private equity activity and strengthening debt markets, and says high-net-worth individuals and foreign capital became increasingly active participants while private equity continued to be active.[1] Its first-quarter 2026 report, as Hotel Dive summarized it on May 14, 2026, put private equity at 34 percent of the quarter's transactions.[2] That is the only buyer-type share in the public summaries we read, and it covers one quarter. Who holds hotels today, as opposed to who is buying, is covered at [Who owns hotels in the United States?](/hotel-industry/who-owns-hotels)."
    },
    {
      h2: "Who buys small and mid-size hotels?",
      lead: "Owner-operators buy most small and mid-size hotels: individuals, families and small partnerships who run the hotel themselves or through their own management company.",
      body: "The best public window on this buyer is the Small Business Administration's loan data, because SBA loans go to operating businesses. Our tracker of SBA's public loan file shows 686 7(a) loans to hotels and motels in fiscal 2025 for about $1.9 billion, with a median loan of $2,681,500, plus 365 504 loans for about $990 million of SBA-backed debentures. The data is as of June 30, 2026. SBA loans finance purchases, construction and refinancing, so not every one is an acquisition.[6] The full tables are at [SBA loans to hotels: who lends, how much, and where](/data/sba-hotel-lending).\n\nThe hotels public REITs sell show who is on the other side at this size. Apple Hospitality REIT's 2025 dispositions included a 76-room Homewood Suites in Chattanooga for approximately $8.3 million, a 130-room SpringHill Suites near Indianapolis for $12.7 million, and a Hampton Inn & Suites and Homewood Suites pair in Cedar Rapids for $16.1 million.[4] Summit Hotel Properties sold the 122-room Hilton Garden Inn in Longview, Texas for $12.3 million in February 2026.[5] Neither company names its buyers. Hotels of that size and price are the ones a regional owner-operator can finance with a bank or SBA loan, which is covered at [What is the difference between an SBA 7(a) loan and an SBA 504 loan for a hotel?](/hotel-financing/sba-7a-vs-504) and [How much money do I need to buy a hotel?](/buy-a-hotel/how-much-money-do-you-need)."
    },
    {
      h2: "What do private equity funds buy?",
      lead: "Private equity funds buy larger hotels and portfolios where they can change something, such as the manager, the brand, the capital structure or the building, and sell within a fund's life.",
      body: "JLL's first-quarter 2026 report credits private equity with 34 percent of transactions in a quarter when volume rose 14.4 percent to $5.6 billion, with 227 transactions in total and five single assets trading above $100 million. JLL predicted that private equity would be back on the offense in 2026, and said investors were zeroing in on luxury assets as well as premium select-service and extended-stay hotels.[2]\n\nLW Hospitality Advisors' second-quarter 2026 survey, published August 5, 2026, gives a named example: Blackstone acquired the 821-room Hyatt Regency San Francisco from Sunstone Hotel Investors, a public REIT, for $279 million, or $340,000 per unit.[3] In that trade a private fund bought from a public company.\n\nA fund's minimum investment size generally rules out a single 80-room hotel. The same hotels grouped into a portfolio can attract a fund, which is one reason a portfolio can draw a different buyer from the same hotels sold one at a time."
    },
    {
      h2: "Are REITs buying or selling hotels?",
      lead: "In the filings we read, the select-service REITs sold more hotels than they bought in 2025, and they sold their smaller, older, lower-RevPAR hotels.",
      body: "Apple Hospitality REIT acquired two hotels in 2025 for a combined purchase price of approximately $117.0 million and sold seven for approximately $73.3 million. What it bought was newer and larger: the newly constructed 260-room Motto by Hilton Nashville Downtown for approximately $98.2 million, or $378,000 per key, and the 126-room Homewood Suites Tampa-Brandon for $18.8 million. It also spent approximately $58.3 million buying back its own shares.[4]\n\nSummit Hotel Properties is explicit about why it sells. It says it has sold 13 hotels since 2023 for a combined price of about $200 million at a blended capitalization rate of approximately 4.6 percent, inclusive of an estimated $59.9 million of foregone capital needs, and that the sold hotels' RevPAR of $86 was about 30 percent below the rest of its portfolio.[5] In plain terms, Summit sold hotels that needed renovation money it preferred not to spend, to buyers willing to spend it.\n\nA REIT must distribute at least 90 percent of its taxable income to shareholders, so it cannot fund acquisitions from retained earnings the way a private owner can.[9] When a REIT's shares trade cheaply, buying back stock can beat buying hotels. LW Hospitality Advisors notes another REIT, Ashford Hospitality Trust, made seven major hotel sales in the second quarter of 2026 to pay down debt.[3] How to read these filings is at [How do hotel REITs work, and what do their filings tell a private owner?](/hotel-industry/how-hotel-reits-work)."
    },
    {
      h2: "Do family offices, wealthy individuals and foreign buyers purchase hotels?",
      lead: "Yes. JLL said high-net-worth individuals and foreign capital became increasingly active hotel buyers in 2025.[1]",
      body: "JLL ties that interest to what it calls hotels' discount to replacement cost and favorable yields compared with other property sectors.[1] LW Hospitality Advisors' second-quarter 2026 survey shows how varied this group is. Bass Pro Shops bought the 254-key Cheeca Lodge & Spa in Islamorada, Florida from Northwood Investors for nearly $306 million, and Meliá Hotels International bought the 313-key New York hotel it had operated under a lease since 2016 for $203 million.[3] Neither is a fund or a REIT. One is a retailer with a store nearby and the other is an operator buying its own building.\n\nBuyers like these often have no fund clock and no quarterly earnings call, so they can hold longer and sometimes pay more for a hotel they want. They are also hard to find, because they do not publish acquisition criteria. No public source we read measures their share of the market, so we do not state one."
    },
    {
      h2: "How do 1031 exchange buyers fit in?",
      lead: "A 1031 exchange buyer is any owner who has sold investment real estate and must identify a replacement within 45 days and close within 180 days to defer the gain.",
      body: "Section 1031 of the Internal Revenue Code provides that no gain or loss is recognized when real property held for business or investment is exchanged for like-kind real property, and it sets the two deadlines: replacement property must be identified within 45 days after the sale and received within 180 days.[7] The seller of an apartment building or a shopping center can exchange into a hotel's real estate.\n\nPublic companies use it too. Apple Hospitality says it used part of the proceeds from selling its Indianapolis-area SpringHill Suites to complete a 1031 exchange into the Homewood Suites Tampa-Brandon, deferring approximately $2.4 million of taxable gain, and did the same with its Clovis, California hotels and the Nashville acquisition, deferring approximately $4.0 million.[4]\n\nFor a seller, an exchange buyer is attractive because the deadline is real: a buyer with 45 days to identify and a tax bill waiting has a reason to close. The rules, including how furniture and equipment are treated, are at [Can I use a 1031 exchange to buy or sell a hotel?](/hotel-financing/1031-exchange-hotels). This page is not tax advice, and an exchange needs a qualified intermediary and your own tax adviser. Matthews Hotel Markets represents buyers, including 1031 buyers looking for a hotel inside their deadline."
    },
    {
      h2: "How much hotel transaction volume is there?",
      lead: "JLL counted $24 billion of U.S. hotel transaction volume in 2025, up 17.5 percent from 2024, and $5.6 billion in the first quarter of 2026.[1][2]",
      body: "JLL's 2025 release lists the largest markets: New York at $3.7 billion across 29 trades, Phoenix at $1.5 billion across 22 and Washington, D.C. at $1.2 billion across 22, with urban markets at 43 percent of volume.[1] Its first-quarter 2026 figure of $5.6 billion was still 47 percent below the cyclical peak in 2022.[2]\n\nLW Hospitality Advisors counts a narrower set, single-asset sales above $10 million. Its second-quarter 2026 survey found 107 such sales totaling approximately $3.8 billion and 17,300 rooms, an average of roughly $35.3 million per deal and $218,000 per room. The first quarter had 110 sales totaling approximately $4.6 billion at roughly $263,000 per room. Against the first half of 2025, the first half of 2026 showed 26 percent more transactions and 38 percent more dollar volume. California, Florida and New York accounted for 41 percent of second-quarter trades and 50 percent of dollars.[3]\n\nBoth series leave out most of the market by count. A $6 million sale of a 70-room hotel does not appear in a survey with a $10 million floor. That is the part of the market where owner-operators and SBA lenders are most active.[6]"
    },
    {
      h2: "Which buyer is right for my hotel, and how do I reach them?",
      lead: "The right buyer for a hotel depends on its size, its brand, its capital needs and its debt, and the way to find out is to put the hotel in front of more than one type of buyer.",
      body: "An owner-operator with an SBA lender will pay for stable income it can finance. A fund will pay for a problem it knows how to fix. An exchange buyer will pay for certainty of closing. A hotel facing a large improvement plan may be worth more to a buyer who renovates for a living than to the current owner, which is the trade Summit describes in its own sales.[5]\n\nFinancing sets the ceiling for all of them. As of September 17, 2026, the 10-year Treasury is 4.94 percent, SOFR is 3.85 percent and the maximum SBA 7(a) rate is 10.00 percent, and no lender publishes its coverage floor or spread.[10] What each buyer type checks is at [What do buyers look for when buying a hotel?](/sell-a-hotel/what-buyers-look-for). The choice between a quiet sale and a marketed one is at [Should I sell my hotel off-market or list it publicly?](/sell-a-hotel/off-market-vs-marketed). Buyers can start at [How do I buy a hotel?](/buy-a-hotel), and sellers at [What is involved in selling a hotel?](/sell-a-hotel)."
    }
  ],
  table: {
    caption: "Hotel buyer types in the United States: what each buys, and the public data point behind the description (sources read September 18, 2026)",
    columns: [
      "Buyer type",
      "What it typically buys",
      "How it pays",
      "Public data point",
      "Source and date"
    ],
    rows: [
      [
        "Owner-operators",
        "Single hotels, often franchised",
        "Bank and SBA loans plus personal or partnership equity",
        "686 SBA 7(a) loans and 365 504 loans to hotels and motels in fiscal 2025. Median 7(a) loan $2,681,500",
        "SBA public loan data as of June 30, 2026, via our tracker[6]"
      ],
      [
        "Private equity funds",
        "Larger hotels and portfolios with something to change",
        "Fund equity with bank, CMBS or debt fund loans",
        "34% of U.S. hotel transactions in Q1 2026. Blackstone bought the 821-room Hyatt Regency San Francisco for $279 million",
        "JLL via Hotel Dive, May 14, 2026.[2] LW Hospitality Advisors, August 5, 2026[3]"
      ],
      [
        "Public REITs",
        "Newer, larger, higher-RevPAR hotels. Net sellers of older ones in 2025",
        "Cash, credit facilities and share issuance when the stock price allows",
        "Apple Hospitality bought 2 hotels for about $117.0 million and sold 7 for about $73.3 million in 2025",
        "Apple Hospitality results release, February 23, 2026[4]"
      ],
      [
        "Family offices, high-net-worth and foreign buyers",
        "Often resorts, city hotels and hotels with a personal or strategic fit",
        "Often more equity and longer holds",
        "JLL: increasingly active in 2025. Bass Pro Shops bought Cheeca Lodge & Spa for nearly $306 million",
        "JLL, January 30, 2026.[1] LW Hospitality Advisors, August 5, 2026[3]"
      ],
      [
        "1031 exchange buyers",
        "Any hotel real estate that fits a 45-day identification window",
        "Sale proceeds held by a qualified intermediary, plus new debt",
        "Apple Hospitality deferred about $2.4 million and $4.0 million of gains through two 2025 exchanges",
        "26 U.S.C. 1031.[7] Apple Hospitality, February 23, 2026[4]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows the borrowing costs every buyer type on this page is underwriting: the 10-year Treasury at 4.94%, SOFR at 3.85% and the SBA 7(a) maximum at 10.00% on September 17, 2026, with no lender type publishing its spread.[10]"
  },
  workedExample: {
    label: "How to read a REIT's disposition disclosure for what buyers paid, using Summit Hotel Properties' February 25, 2026 results release",
    body: "This walk-through uses real figures from a release filed with the SEC. The per-key figure is our arithmetic.\n\nStep 1, find the sale. Summit reports that in February 2026 it completed the sale of the 122-guestroom Hilton Garden Inn Longview, Texas, owned in its joint venture with GIC, for $12.3 million.[5]\n\nStep 2, compute the price per key. $12,300,000 divided by 122 rooms is about $100,800 per key.\n\nStep 3, read the cap rate and how it was calculated. Summit says the price represented a 6.7 percent capitalization rate based on estimated net operating income for the twelve months ended December 31, 2025, after consideration of approximately $2.6 million of foregone near-term required capital expenditures.[5] That last clause matters. We read it to mean Summit counts the renovation the buyer now has to pay for alongside the price, so the cap rate on the $12.3 million alone would be higher.\n\nStep 4, back into the income. On that reading, 6.7 percent of $14.9 million, which is the $12.3 million price plus the $2.6 million of capital needs, is about $1.0 million of net operating income. That is our arithmetic and our reading of Summit's method, not a number Summit reports.\n\nStep 5, read the quality signal. Summit says the hotel's 2025 RevPAR was $88, about 28 percent below its portfolio.[5] A buyer paid roughly $100,800 a key for an older, below-average hotel that needs about $2.6 million of work.\n\nStep 6, compare. Its October 2025 sales of two Courtyards for $39.0 million were at a blended 4.3 percent on the same basis, with approximately $10.2 million of foregone capital needs.[5] The more renovation a hotel needs, the more the stated cap rate depends on how the renovation is counted. When you see a hotel cap rate quoted anywhere, ask which income and which price it uses. The definitions are at [What is a good cap rate for a hotel in 2026?](/hotel-valuation/hotel-cap-rates)."
  },
  faq: [
    {
      q: "Who would buy my small hotel?",
      a: "Most likely an owner-operator using a bank or SBA loan. SBA approved 686 7(a) loans to hotels and motels in fiscal 2025, with a median of about $2.7 million.[6] Hotels of 76 to 130 rooms that REITs sold in 2025 went for roughly $8 million to $13 million.[4]"
    },
    {
      q: "How much of the hotel market is private equity?",
      a: "JLL put private equity at 34 percent of U.S. hotel transactions in the first quarter of 2026, as Hotel Dive reported on May 14, 2026.[2] We have not found a public full-year breakdown of buyers by type, so we do not publish one."
    },
    {
      q: "Are hotel REITs buying hotels in 2026?",
      a: "Selectively. Apple Hospitality bought two hotels and sold seven in 2025, and has two forward purchases under contract.[4] Summit has been a net seller since 2023.[5] Ashford Hospitality Trust made seven major sales in the second quarter of 2026 to reduce debt.[3]"
    },
    {
      q: "What was U.S. hotel transaction volume in 2025?",
      a: "$24 billion, up 17.5 percent from 2024, according to JLL's release of January 30, 2026. New York led with $3.7 billion, followed by Phoenix at $1.5 billion and Washington, D.C. at $1.2 billion.[1]"
    },
    {
      q: "What is the average price per room for a hotel sale?",
      a: "For single-asset sales above $10 million, LW Hospitality Advisors reported roughly $218,000 per room in the second quarter of 2026 and roughly $263,000 in the first.[3] Smaller hotels trade for far less: Apple Hospitality's 2025 sales work out to about $94,000 per key by our arithmetic.[4]"
    },
    {
      q: "Can I buy a hotel with 1031 exchange money?",
      a: "Yes, for the real property. Section 1031 requires you to identify replacement property within 45 days of your sale and close within 180 days.[7] Apple Hospitality completed two such exchanges in 2025.[4] Use a qualified intermediary and your own tax adviser."
    },
    {
      q: "Do foreign investors buy U.S. hotels?",
      a: "Yes. JLL said foreign capital became an increasingly active participant in 2025.[1] In the second quarter of 2026, Spain-based Meliá Hotels International bought the 313-key New York hotel it had been leasing for $203 million, according to LW Hospitality Advisors.[3]"
    },
    {
      q: "Does Matthews Hotel Markets represent hotel buyers?",
      a: "Yes. Matthews Hotel Markets represents buyers, including 1031 exchange buyers, sells hotels from $2 million through marketed and off-market processes, and arranges acquisition financing from $5 million. Current benchmark rates are on our rate sheet.[10]"
    }
  ],
  sources: cite("jll2025", "jllQ1", "lwhaQ2", "apple", "summitPR", "sbaTracker", "usc1031", "wyndham", "appleK", "rates"),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/who-owns-hotels",
      "/hotel-industry/how-hotel-reits-work",
      "/hotel-industry/cost-to-build-a-hotel",
      "/hotel-industry/outlook-2026-2027"
    ],
    glossary: [
      "/glossary/cap-rate",
      "/glossary/per-key",
      "/glossary/sba-7a",
      "/glossary/bov"
    ],
    data: [
      "/rates",
      "/data/sba-hotel-lending",
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Find out which buyers fit your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells hotels through marketed and off-market processes and represents buyers, including 1031 exchange buyers."
};

export default page;
