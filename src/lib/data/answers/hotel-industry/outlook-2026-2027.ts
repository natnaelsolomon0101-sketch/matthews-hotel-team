/**
 * What is the outlook for hotels in 2026 and 2027?
 * /hotel-industry/outlook-2026-2027
 *
 * Written 2026-09-18. This page publishes other firms' PUBLIC forecasts side
 * by side, each with its date. It never averages or blends them and it
 * contains no forecast of our own. When a forecaster revises, add the new
 * vintage as a row and keep the old one, so the revision history stays visible.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "outlook-2026-2027",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel Industry Outlook 2026 and 2027: Forecasts Compared",
  h1: "What is the outlook for hotels in 2026 and 2027?",
  description: "The public US hotel forecasts for 2026 and 2027 from CoStar and Tourism Economics, CBRE and PwC, side by side with dates. No blended number.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "What is the outlook for hotels in 2026?",
    "What is the hotel industry forecast for 2027?",
    "What is the RevPAR forecast for 2026?",
    "Are hotels a good investment right now given the forecasts?",
    "How much did the World Cup help US hotels in 2026?",
    "Why do CBRE and CoStar disagree on the hotel forecast?",
    "Should I sell my hotel in 2026 or wait until 2027?"
  ],
  answer: "The public forecasts agree on direction and disagree on size. As of August 7, 2026, CoStar and Tourism Economics forecast U.S. RevPAR growth of 4.4 percent for 2026 and 2.1 percent for 2027.[1] CBRE's midyear 2026 review forecasts 2.5 percent and 2.1 percent.[2] PwC's May 2026 edition forecasts 2.9 percent for 2026.[3] We publish them side by side and do not blend them.",
  takeaways: [
    "2026 RevPAR growth: 4.4 percent per CoStar and Tourism Economics (August 7, 2026), 2.9 percent per PwC (May 2026 edition), 2.5 percent per CBRE (midyear 2026).[1][3][2]",
    "2027 RevPAR growth: 2.1 percent per CoStar and Tourism Economics, and 2.1 percent per CBRE.[1][2]",
    "Every forecaster raised its 2026 number during the year. CoStar and Tourism Economics went from 0.6 percent in February to 2.8 percent in June to 4.4 percent in August.[4][5][1]",
    "The World Cup is in the 2026 base. CoStar's August assumptions put 2027 ADR growth at 1.6 percent, or 2.1 percent excluding the June and July World Cup effect.[6]",
    "Revenue is not profit. STR's president said in August 2026 that expenses will rise faster than inflation in both years.[1]"
  ],
  sections: [
    {
      h2: "What do the public forecasts say about U.S. hotels in 2026?",
      lead: "The public forecasts for 2026 range from 2.5 to 4.4 percent RevPAR growth, with the most recent forecast the highest.",
      body: "CoStar and Tourism Economics, in a forecast reported on August 7, 2026, project 2026 RevPAR growth of 4.4 percent, ADR growth of 3.1 percent and occupancy of 63.1 percent.[1] CoStar's published assumptions for the same forecast put demand growth at 1.7 percent.[6] CBRE's midyear 2026 review projects RevPAR growth of 2.5 percent, ADR growth of 1.7 percent and occupancy of 62.8 percent.[2] PwC's Hospitality Directions for May 2026, published June 25, projects RevPAR growth of 2.9 percent.[3]\n\nThe starting point for all three is the same. CoStar reported 2025 occupancy of 62.3 percent, ADR of $160.54 and RevPAR of $100.02, with RevPAR down 0.3 percent on 2024.[7] We read the CoStar and PwC figures where trade publications carried them, and the source list says so."
    },
    {
      h2: "What do the public forecasts say about 2027?",
      lead: "For 2027, CoStar and Tourism Economics and CBRE both forecast RevPAR growth of 2.1 percent, about half the pace CoStar expects for 2026.",
      body: "CoStar and Tourism Economics project 2027 occupancy of 63.4 percent and ADR growth of 1.6 percent, with demand growth of 1.1 percent. Their assumptions include U.S. GDP growth of 2.6 percent in 2027 against 2.2 percent in 2026, and inflation of 2.3 percent.[1][6] CBRE projects 2027 occupancy of 63.0 percent and ADR growth of 1.7 percent.[2] The PwC summary we read does not state a 2027 figure, so the table leaves it blank.[3]\n\nThe two 2.1 percent figures were published weeks apart and rest on different 2026 bases, so they do not describe the same 2027 RevPAR in dollars. Agreement on a growth rate is not agreement on a level."
    },
    {
      h2: "Why did every hotel forecast go up during 2026?",
      lead: "Every hotel forecast went up during 2026 because actual results kept beating the prior forecast, from the first quarter through the World Cup in June and July.",
      body: "In February 2026, CoStar and Tourism Economics expected RevPAR to grow 0.6 percent, on ADR growth of 1.0 percent and demand growth of 0.4 percent.[4] CBRE started the year at 1.2 percent, and PwC's December 2025 outlook had 0.9 percent.[2][8] Then the data came in. CBRE says first-quarter RevPAR grew 3.8 percent, the best quarter since the first quarter of 2023.[2] By June 2, CoStar and Tourism Economics had moved to 2.8 percent, citing RevPAR up 4 percent in the first four months.[5] July RevPAR was up 8.2 percent on July 2025, to $119.77.[9]\n\nOn August 7 the forecast went to 4.4 percent. STR's president attributed the beat to stronger leisure and business travel, fueled in part by the World Cup and the America 250 celebrations, and the firms said the industry sold a record number of room nights in the first half, 11.4 million more than a year earlier.[1] The lesson for an owner is about forecasts as much as about hotels: the most cited number in the industry moved by 3.8 points in six months."
    },
    {
      h2: "Why do CBRE and CoStar disagree, and which forecast is right?",
      lead: "CBRE and CoStar disagree by 1.9 points on 2026 mainly because their forecasts were made at different times, and nobody can know yet which is right.",
      body: "CBRE's 2.5 percent is from its midyear review. CoStar's 4.4 percent was published on August 7, after a July in which 22 of the top 25 markets posted RevPAR growth.[2][1][9] A forecast that predates the World Cup months will be lower than one that includes them.\n\nWe do not pick a winner and we do not average them. An average of forecasts made on different dates is a number that no one actually forecast. If you are underwriting a purchase or a refinance, the honest approach is to run the income on more than one growth case, say which public forecast each case follows, and see whether the deal survives the lower one. Our [hotel financing statistics](/data/hotel-financing-statistics) page carries these forecasts with their dates for the same reason."
    },
    {
      h2: "How much of 2026 is the World Cup?",
      lead: "In February 2026, CoStar and Tourism Economics estimated that the World Cup would add 0.4 percent to full-year U.S. RevPAR, mostly through rate.[4]",
      body: "The effect in host cities was much larger than the national figure. In July 2026, New York City, which hosted the final, posted ADR up 24.0 percent to $351.18 and RevPAR up 27.1 percent to $305.74, according to CoStar's monthly release.[9] Events like this raise a problem for the following year, because 2027 will be measured against them. CoStar's August assumptions show the size of it: 2027 ADR growth of 1.6 percent as forecast, or 2.1 percent if the June and July World Cup effect is excluded.[6]\n\nFor a hotel in a host market, a trailing twelve months that includes June and July 2026 flatters the run rate. A buyer or lender will normalize it, so an owner preparing to sell or refinance should do the same before someone else does."
    },
    {
      h2: "Which hotel segments are expected to do best?",
      lead: "Luxury is expected to do best and economy worst: CBRE's midyear 2026 review forecasts luxury RevPAR up 5.2 percent, midscale up 0.7 percent and economy down 0.6 percent.[2]",
      body: "CoStar and Tourism Economics described the same split in February 2026, with upper-tier segments showing signs of demand recovery and select-service and economy hotels facing downward pressure on average daily rates.[4] For the owner of a midscale or economy hotel, the national headline overstates what CBRE expects for that hotel's tier. The tiers are explained at [What are hotel chain scales and classes?](/hotel-industry/chain-scales-and-classes)."
    },
    {
      h2: "Will hotel profits grow as fast as hotel revenue?",
      lead: "Probably not, according to the forecasters themselves: STR's president said in August 2026 that expenses will rise faster than inflation in both 2026 and 2027.[1]",
      body: "AHLA's 2026 State of the Industry release, dated January 27, 2026, said rising operating expenses had kept gross operating profit per available room at roughly 90 percent of 2019 levels.[10] A RevPAR forecast is a revenue forecast. Value and loan proceeds are sized on income, so a year of 2 percent RevPAR growth with 4 percent cost growth leaves an owner with less income, not more. How revenue turns into income is at [How do hotels make money?](/hotel-industry/how-hotels-make-money)."
    },
    {
      h2: "How much new hotel supply is coming?",
      lead: "New supply is forecast at between about 0.7 and 1.5 percent a year, depending on who is counting and how.",
      body: "CBRE projects U.S. hotel inventory growth of 0.7 percent a year over the next three years and says construction has declined for 15 consecutive months.[2] CoStar and Tourism Economics had 2026 supply growth at 0.7 percent in February.[4] Lodging Econometrics, which counts openings, forecasts 661 new hotels with 74,820 rooms in 2026, 738 hotels with 78,909 rooms in 2027 and 832 hotels with 88,321 rooms in 2028, which it puts at growth rates of 1.3, 1.4 and 1.5 percent.[11] The Lodging Econometrics release counts new openings and says nothing about hotels that close, which is one reason its rate can be higher than a net inventory figure. Either way, what matters to a single hotel is what opens within a few miles of it."
    },
    {
      h2: "What does the outlook mean if I am refinancing or selling?",
      lead: "A stronger revenue outlook helps income, but in September 2026 it arrives together with higher borrowing costs, and both go into a price or a loan.",
      body: "The Federal Reserve raised its target range by 25 basis points on September 16, 2026, and as of September 17 the 10-year Treasury is 4.94 percent and SOFR is 3.85 percent.[12][13] Lenders do not publish their spreads or coverage tests, so the only way to know what the outlook is worth to your hotel is a written quote on your own trailing income. Start with [How much hotel debt is maturing in 2026 and 2027?](/hotel-financing/loan-maturities-2026-2027) and [Should I refinance my hotel or sell it instead?](/hotel-financing/refinance-or-sell), or run the [refinance vs sell calculator](/tools/refinance-vs-sell). For pricing, see [What is a good cap rate for a hotel in 2026?](/hotel-valuation/hotel-cap-rates) and [What is involved in selling a hotel?](/sell-a-hotel)."
    }
  ],
  table: {
    caption: "Public U.S. hotel forecasts for 2026 and 2027, side by side, newest first. Not blended. Where a cell says not stated, the summary we read did not give the figure",
    columns: [
      "Forecaster",
      "Date",
      "2026 RevPAR",
      "2026 occupancy",
      "2026 ADR",
      "2027 RevPAR",
      "2027 occupancy",
      "2027 ADR"
    ],
    rows: [
      ["CoStar and Tourism Economics[1]", "August 7, 2026", "+4.4%", "63.1%", "+3.1%", "+2.1%", "63.4%", "+1.6%"],
      ["CBRE[2]", "Midyear 2026", "+2.5%", "62.8%", "+1.7%", "+2.1%", "63.0%", "+1.7%"],
      ["PwC, May 2026 edition[3]", "June 25, 2026", "+2.9%", "not stated", "not stated", "not stated", "not stated", "not stated"],
      ["CoStar and Tourism Economics, earlier[5]", "June 2, 2026", "+2.8%", "62.8%", "+2%", "not stated", "not stated", "not stated"],
      ["CoStar and Tourism Economics, earlier[4]", "February 10, 2026", "+0.6%", "not stated", "+1.0%", "+1.4%", "not stated", "not stated"],
      ["CBRE, earlier[2]", "Start of 2026", "+1.2%", "not stated", "not stated", "not stated", "not stated", "not stated"],
      ["PwC, earlier[8]", "December 2025 edition", "+0.9%", "not stated", "+1.1%", "not stated", "not stated", "not stated"],
      ["Actual, full-year 2025, per CoStar[7]", "January 22, 2026", "minus 0.3%, to $100.02", "62.3%", "+0.9% to $160.54", "n/a", "n/a", "n/a"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet is the other half of the outlook: the 10-year Treasury at 4.94% on September 17, 2026 and SOFR at 3.85%, the day after the Federal Reserve raised its target range by 25 basis points.[13][12]"
  },
  workedExample: {
    label: "Hypothetical: what the gap between two forecasts is worth at a 100-room hotel",
    body: "Hypothetical. The hotel is invented, and the flow-through and cap rate are assumptions chosen to show the arithmetic, not predictions.\n\nStart: a 100-room hotel with a 2025 RevPAR of $100.00, close to the national figure.[7] Rooms revenue is 100 times 365 times $100.00, or $3,650,000.\n\nCase A follows CoStar and Tourism Economics at 4.4 percent.[1] RevPAR becomes $104.40 and rooms revenue $3,810,600.\n\nCase B follows CBRE at 2.5 percent.[2] RevPAR becomes $102.50 and rooms revenue $3,741,250.\n\nThe gap is $69,350 of rooms revenue.\n\nAssume half of that gap reaches net operating income, which is $34,675. That share is our assumption for illustration. At an 8.0 percent cap rate, which sits inside the 7.5 to 8.25 percent range the Matthews Hotel Index shows for Austin select-service hotels,[14] $34,675 of income is worth about $433,000 of value.\n\nSo the choice of forecast moves this hotel's indicated value by roughly $433,000, before anyone has argued about the hotel itself. That is why we show the forecasts side by side and ask which one a given underwriting follows."
  },
  faq: [
    {
      q: "What is the RevPAR forecast for 2026?",
      a: "It depends on the forecaster and the date. CoStar and Tourism Economics: 4.4 percent, as of August 7, 2026.[1] PwC: 2.9 percent in its May 2026 edition.[3] CBRE: 2.5 percent in its midyear 2026 review.[2]"
    },
    {
      q: "What is the hotel forecast for 2027?",
      a: "RevPAR growth of 2.1 percent from both CoStar and Tourism Economics and CBRE, with occupancy of 63.4 percent and 63.0 percent respectively.[1][2]"
    },
    {
      q: "Did the World Cup help U.S. hotels?",
      a: "Yes. July 2026 U.S. RevPAR rose 8.2 percent on the year, and New York City, which hosted the final, posted RevPAR up 27.1 percent.[9] In February, CoStar and Tourism Economics had estimated a 0.4 percent lift to full-year national RevPAR.[4]"
    },
    {
      q: "Why did hotel forecasts change so much in 2026?",
      a: "Results beat expectations. CoStar and Tourism Economics forecast 0.6 percent RevPAR growth in February, 2.8 percent in June and 4.4 percent in August, citing stronger leisure and business travel.[4][5][1]"
    },
    {
      q: "Does Matthews Hotel Markets publish its own hotel forecast?",
      a: "No. We publish other firms' public forecasts with their dates and do not blend them. Our own published data are the rate sheet and the Matthews Hotel Index, which report current conditions.[13][14]"
    },
    {
      q: "Is 2026 or 2027 a better year to sell a hotel?",
      a: "The forecasts cannot answer that for one hotel. They show faster revenue growth in 2026 than 2027.[1] Your price also depends on your own trailing income, your brand's improvement plan and borrowing costs on the day a buyer closes."
    },
    {
      q: "Are hotel costs expected to keep rising?",
      a: "Yes. STR's president said in August 2026 that expenses will rise faster than inflation in both 2026 and 2027.[1] AHLA reported gross operating profit per available room at roughly 90 percent of 2019 levels in January 2026.[10]"
    }
  ],
  sources: cite(
    "forecastAug",
    "cbre",
    "pwc",
    "forecastFeb",
    "forecastJune",
    "assumptionsAug",
    "fy2025",
    "pwcDec",
    "july2026",
    "ahla",
    "le",
    "stats",
    "rates",
    "mhi"
  ),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/revpar-adr-occupancy",
      "/hotel-industry/chain-scales-and-classes",
      "/hotel-industry/industry-size-2026",
      "/hotel-industry/how-hotels-make-money"
    ],
    glossary: [
      "/glossary/revpar",
      "/glossary/adr",
      "/glossary/cap-rate",
      "/glossary/noi"
    ],
    data: [
      "/data/hotel-financing-statistics",
      "/rates",
      "/tools/refinance-vs-sell",
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Talk through what this means for your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets publishes other firms' forecasts with their dates and keeps its own published data to current rates and current market ranges."
};

export default page;
