/**
 * How much does it cost to build a hotel in 2026?
 * /hotel-industry/cost-to-build-a-hotel
 *
 * Written 2026-09-18. Matthews Hotel Markets does not develop hotels and has
 * no cost database of its own. Every dollar figure here is a published
 * estimate with its date: HVS's 2026 development cost survey (public article,
 * July 13, 2026) and Item 7 of seven Hilton 2026 franchise disclosure
 * documents (issued March 30, 2026), each re-read in this run. Per-room
 * figures derived from Item 7 totals are our arithmetic and say so. The HVS
 * category exhibit is an image and is not transcribed.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "cost-to-build-a-hotel",
  cluster: "hotel-industry",
  isHub: false,
  title: "How Much Does It Cost to Build a Hotel in 2026?",
  h1: "How much does it cost to build a hotel in 2026?",
  description: "Published 2026 estimates of hotel development cost per room from HVS and from the Item 7 tables of Hilton franchise disclosure documents, with dates.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "How much does it cost to build a hotel in 2026?",
    "What is the cost per room to build a hotel?",
    "How much does it cost to build a Hampton Inn?",
    "How much does it cost to build a 100 room hotel?",
    "Is it cheaper to buy an existing hotel or build a new one?",
    "What does a franchise disclosure document say about construction costs?",
    "I have land near the interstate, what would it cost to put a select-service hotel on it?"
  ],
  answer: "HVS's U.S. Hotel Development Cost Survey, published July 13, 2026, puts the median cost to develop a hotel at $213,000 per room across all the budgets it collected: $170,000 to $197,000 for limited-service and midscale extended-stay hotels, about $200,000 for select-service, $467,000 for full-service and more than $1,600,000 for luxury.[1]",
  takeaways: [
    "The HVS figures come from actual construction budgets for projects proposed or under construction during 2025. HVS says they should not be relied on to determine the cost of a specific project.[1]",
    "Hilton's 2026 Hampton disclosure, issued March 30, 2026, estimates $17,043,739 to $24,732,532 for an 89-room Hampton Inn, excluding real estate. That is about $191,500 to $277,900 per room by our arithmetic.[2]",
    "A conversion costs a fraction of a new build. Hilton estimates $3,251,531 to $5,906,193 to convert a 100-room hotel to Spark by Hilton.[7]",
    "Construction costs are still rising. HVS cites the Turner Building Cost Index up 4.1 percent in 2025 and 4.8 percent over the trailing twelve months in 2026.[1]",
    "Fewer hotels are being started than the pipeline suggests. Census put private lodging construction at a $23.3 billion annual rate in July 2026, down 9.9 percent from a year earlier.[9]"
  ],
  sections: [
    {
      h2: "What does it cost per room to build a hotel in 2026?",
      lead: "The median cost to develop a hotel was $213,000 per room in HVS's 2026 survey, with a range from about $170,000 for limited-service hotels to more than $1,600,000 for luxury.[1]",
      body: "HVS has tracked development costs for more than four decades from the budgets it sees on its consulting assignments. The 2026 survey reports per-room costs from projects proposed or under construction during the 2025 calendar year, in six product categories. Limited-service and midscale extended-stay hotels showed median per-room costs in the $170,000 to $197,000 range. Upscale extended-stay was around $265,000 and select-service around $200,000. Full-service hotels had a median of $467,000 per room, and luxury hotels more than $1,600,000.[1]\n\nHVS attaches three cautions. First, the overall median fell slightly from its 2025 survey, and HVS says that is because limited-service and extended-stay projects were more than half of this year's sample, not because building became cheaper. Second, the survey is not meant for measuring year-to-year change. Third, development costs depend on factors unique to each project and location, so the report should not be relied on to determine the cost of an actual project or for valuation.[1] We repeat the figures as HVS published them. They are not our estimates, and Matthews Hotel Markets does not develop hotels."
    },
    {
      h2: "What does a brand say it costs to build one of its hotels?",
      lead: "A franchisor has to estimate your initial investment in Item 7 of its franchise disclosure document, and Hilton's 2026 documents put a new select-service or extended-stay hotel at roughly $14 million to $37 million before land.",
      body: "Item 7 is a table of every cost from the application fee to opening day, each with a low and a high. Hilton's 2026 documents, all issued March 30, 2026, give these totals: $14,258,164 to $20,659,558 for a 98-room Tru by Hilton, $17,043,739 to $24,732,532 for an 89-room Hampton Inn, $19,964,850 to $29,121,080 for a 113-room Hampton Inn & Suites, $18,075,688 to $26,550,592 for a 107-suite Home2 Suites, $16,299,093 to $24,047,210 for a 121-room LivSmart Studios, $23,757,245 to $34,728,465 for a 131-suite Homewood Suites, and $25,499,320 to $37,352,033 for a 134-room Hilton Garden Inn.[5][2][3][8][4][6]\n\nDivide by the room count and the range is about $134,700 per room at the low end of LivSmart Studios to about $278,700 at the high end of Hilton Garden Inn. That division is our arithmetic, not Hilton's. Hilton does not publish a per-room figure, and its prototype sizes differ, which is why the table below shows both.\n\nThese per-room results fall in the same general range as HVS's medians for similar product types, though the two sources are not built the same way.[1] The other brands' Item 7 tables are summarized on our brand pages, starting from [How much does a hotel franchise cost?](/hotel-franchise-costs)."
    },
    {
      h2: "What is left out of a brand's Item 7 estimate?",
      lead: "Hilton's Item 7 totals leave out the land, and they also exclude market studies, insurance and interest.",
      body: "Every Hilton table carries the same note in capitals: the figures do not include real estate costs, market studies, insurance or interest.[2] The Hampton document explains that the estimates do not include the cost of real property because of wide variations among geographic areas and sites, that they do not take into account local requirements such as earthquake requirements or impact fees, and that building construction costs vary greatly from region to region depending on material and labor costs.[2]\n\nInterest is a large omission at current rates. A construction loan accrues interest for the whole build, and as of September 17, 2026 the prime rate is 7.00 percent and SOFR is 3.85 percent, with no lender publishing its construction spread.[11] A budget built from Item 7 needs land, carry and a lender's required reserves added before it is a real budget. How construction debt is sized is covered at [How do I finance hotel construction in 2026?](/hotel-financing/construction-loans).\n\nItem 7 does include a contingency. Hampton's is $1,247,837 to $1,802,432, which equals 10 percent of the construction line in both columns by our arithmetic. The document defines contingencies as unanticipated construction cost overruns and other unanticipated expenses.[2]"
    },
    {
      h2: "Where does the money go in a hotel construction budget?",
      lead: "Most of a hotel construction budget goes to the building itself, with furniture, fixtures and equipment a distant second.",
      body: "In Hilton's Hampton Inn estimate, construction and leasehold improvements are $12,478,374 to $18,024,318 of the $17,043,739 to $24,732,532 total, which is about 73 percent at both ends by our arithmetic. Furniture, fixtures and equipment are $1,254,480 to $1,782,681, about 7 percent. The franchise application fee, the item people ask about first, is a rounding error next to either.[2]\n\nThe Home2 Suites table has the same shape with more furniture, as you would expect from rooms with kitchens: $12,800,000 to $18,555,000 of construction, $1,910,000 to $2,770,000 of furniture, fixtures and equipment, $512,000 to $742,200 of design and engineering fees, $192,000 to $278,325 of permits and licenses, and $400,000 to $800,000 of additional funds for the opening period.[3]\n\nHVS sorts development budgets into six categories of its own and publishes per-room amounts by category in the full survey. The category exhibit in the public article is an image, so we do not transcribe it here. Read it at the source.[1]"
    },
    {
      h2: "Is it cheaper to convert or buy an existing hotel than to build one?",
      lead: "Yes, by the published numbers: Hilton estimates a 100-room conversion to Spark by Hilton at $3,251,531 to $5,906,193, about $32,500 to $59,100 per room by our arithmetic, against about $134,700 or more per room for the least expensive new-build prototype we read.[7][8]",
      body: "The Spark estimate covers renovating an existing hotel to the brand's standard and excludes the cost of buying the hotel.[7] Add a purchase price and the comparison becomes the one investors actually make: price per room for an existing hotel against cost per room to build.\n\nPublic filings give real prices. Apple Hospitality REIT bought the 126-room Homewood Suites Tampa-Brandon in June 2025 for $18.8 million, approximately $149,000 per key as the company states it, and the newly constructed 260-room Motto by Hilton Nashville Downtown in December 2025 for approximately $98.2 million, or $378,000 per key. The same release shows it selling older hotels for far less: the 76-room Homewood Suites Chattanooga for approximately $8.3 million, which is about $109,000 per key by our arithmetic.[13] JLL's first-quarter 2026 report, as Hotel Dive summarized it on May 14, 2026, says both full-service and select-service assets continue to trade at discounts to replacement cost.[12]\n\nThat gap is why so few projects start in some markets, and why an existing hotel's value is partly set by what it would cost to build a competitor next door. Per-room pricing is covered at [What is my hotel worth per key?](/hotel-valuation/revpar-multiples-and-per-key), and the buying process at [How do I buy a hotel?](/buy-a-hotel). An older hotel usually comes with a brand improvement plan, covered at [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans)."
    },
    {
      h2: "Are hotel construction costs still rising?",
      lead: "Yes. The two construction cost indexes HVS cites both rose more than 4 percent in 2025 and were rising at least as fast in 2026.",
      body: "HVS reports that the Turner Building Cost Index rose 8.0 percent in 2022 and 6.0 percent in 2023, slowed to 3.9 percent in 2024, and then rose 4.1 percent in 2025 and 4.8 percent over the trailing twelve months in 2026. Rider Levett Bucknall's index rose 4.4 percent for both periods. HVS names tariff policy as the primary catalyst, with duties on imported metals driving the steepest material cost increases, and adds that the typical hotel development process can last three to five years, so a budget should be adjusted for inflation over that timeline.[1]\n\nA cost figure therefore has a shelf life. An estimate dated March 2026 for a hotel that opens in 2029 is a starting point."
    },
    {
      h2: "How many hotels are actually being built?",
      lead: "Lodging Econometrics counted 1,081 hotel projects with 133,216 rooms under construction in the United States at the end of the second quarter of 2026, inside a total pipeline of 5,975 projects.[10]",
      body: "Most of the pipeline is not under construction. Lodging Econometrics' release of July 23, 2026 counts 2,147 projects scheduled to start in the next 12 months and 2,747 in early planning. Upper midscale and upscale brands lead, with 2,225 and 1,282 projects. It forecasts 661 new hotels with 74,820 rooms opening in 2026, a 1.3 percent growth rate, and 738 in 2027.[10]\n\nSpending tells a more cautious story. The Census Bureau's construction spending release of September 1, 2026 puts private lodging construction at a seasonally adjusted annual rate of $23,325 million in July 2026, down 9.9 percent from July 2025.[9] HVS says new supply grew 0.7 percent in 2025 against an average of 1.4 percent in the years immediately before 2020, and blames construction costs and the cost of debt.[1]\n\nFor an owner of an existing hotel, slow supply growth is good news. It is one reason buyers pay attention to replacement cost. If you own a hotel and want to know what it would sell for against today's build costs, start at [What is my hotel worth, and who decides?](/hotel-valuation) or [What is involved in selling a hotel?](/sell-a-hotel)."
    }
  ],
  table: {
    caption: "Published 2026 estimates of what it costs to build or convert a hotel. HVS figures are medians from its survey of 2025 construction budgets, published July 13, 2026. Hilton figures are Item 7 totals from franchise disclosure documents issued March 30, 2026, and exclude real estate, market studies, insurance and interest. Per-room figures in the Hilton rows are our arithmetic.",
    columns: [
      "Source and product",
      "Size in the estimate",
      "Published total",
      "Per room",
      "What it excludes"
    ],
    rows: [
      ["HVS: limited-service and midscale extended-stay", "Survey median", "n/a", "$170,000 to $197,000[1]", "See HVS's category definitions"],
      ["HVS: select-service", "Survey median", "n/a", "About $200,000[1]", "See HVS's category definitions"],
      ["HVS: upscale extended-stay", "Survey median", "n/a", "About $265,000[1]", "See HVS's category definitions"],
      ["HVS: full-service", "Survey median", "n/a", "$467,000[1]", "See HVS's category definitions"],
      ["HVS: luxury", "Survey median", "n/a", "More than $1,600,000[1]", "See HVS's category definitions"],
      ["HVS: all surveyed properties", "Survey median", "n/a", "$213,000[1]", "See HVS's category definitions"],
      ["Hilton: Tru by Hilton, new build", "98 rooms", "$14,258,164 to $20,659,558[5]", "About $145,500 to $210,800", "Real estate, market study, insurance, interest"],
      ["Hilton: LivSmart Studios, new build", "121 rooms", "$16,299,093 to $24,047,210[8]", "About $134,700 to $198,700", "Real estate, market study, insurance, interest"],
      ["Hilton: Hampton Inn, new build", "89 rooms", "$17,043,739 to $24,732,532[2]", "About $191,500 to $277,900", "Real estate, market study, insurance, interest"],
      ["Hilton: Hampton Inn & Suites, new build", "113 rooms", "$19,964,850 to $29,121,080[2]", "About $176,700 to $257,700", "Real estate, market study, insurance, interest"],
      ["Hilton: Home2 Suites, new build", "107 suites", "$18,075,688 to $26,550,592[3]", "About $168,900 to $248,100", "Real estate, market study, insurance, interest"],
      ["Hilton: Homewood Suites, new build", "131 suites", "$23,757,245 to $34,728,465[4]", "About $181,400 to $265,100", "Real estate, market study, insurance, interest"],
      ["Hilton: Hilton Garden Inn, new build", "134 rooms", "$25,499,320 to $37,352,033[6]", "About $190,300 to $278,700", "Real estate, market study, insurance, interest"],
      ["Hilton: Spark by Hilton, conversion of an existing hotel", "100 rooms", "$3,251,531 to $5,906,193[7]", "About $32,500 to $59,100", "The purchase of the hotel, plus the items above"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows what a construction budget has to carry that Item 7 leaves out: the prime rate at 7.00% and SOFR at 3.85% on September 17, 2026, the two benchmarks construction loans float over, with no lender publishing its spread.[11]"
  },
  workedExample: {
    label: "How to read an Item 7 table, using Hilton's 2026 Hampton franchise disclosure document",
    body: "This walk-through uses the real figures for an 89-room Hampton Inn. It is a reading guide, not a budget for your site.\n\nStep 1, find the prototype. The table header says Hampton Inn, 89 rooms. A second table covers a 113-room Hampton Inn & Suites with 81 rooms and 32 studio suites.[2] If your site fits 105 rooms, neither table is your hotel.\n\nStep 2, read the big line. Construction and leasehold improvements: $12,478,374 to $18,024,318. The high end is 44 percent above the low end by our arithmetic, and the document says construction costs vary greatly from region to region.[2] The spread is the message.\n\nStep 3, add the furnishings. Furniture, fixtures and equipment: $1,254,480 to $1,782,681.[2]\n\nStep 4, check the contingency. $1,247,837 to $1,802,432, which works out to 10 percent of the construction line.[2] If your contractor's bid already uses the contingency, you do not have one.\n\nStep 5, read the total and the capitals under it. $17,043,739 to $24,732,532, and the figures do not include real estate costs, market studies, insurance or interest.[2]\n\nStep 6, do the division yourself. $17,043,739 divided by 89 rooms is about $191,500 per room. $24,732,532 divided by 89 is about $277,900. Those are our arithmetic. HVS's median for limited-service hotels, which includes this kind of product, falls in its $170,000 to $197,000 range.[1]\n\nStep 7, add what is missing. Land, a market study, builder's risk insurance, and interest on the construction loan at a floating rate over a 7.00 percent prime or a 3.85 percent SOFR as of September 17, 2026.[11] Only then compare the total with what existing hotels in the market sell for per room. If building costs more than buying, the market is telling you something."
  },
  faq: [
    {
      q: "How much does it cost to build a 100-room hotel?",
      a: "At HVS's 2026 medians, about $17 million to $20 million for a limited-service or midscale extended-stay hotel and about $47 million for a full-service hotel. That is our multiplication of HVS's per-room medians, published July 13, 2026, by 100 rooms.[1] Every site differs."
    },
    {
      q: "How much does it cost to build a Hampton Inn?",
      a: "Hilton's 2026 franchise disclosure document, issued March 30, 2026, estimates $17,043,739 to $24,732,532 for an 89-room Hampton Inn and $19,964,850 to $29,121,080 for a 113-room Hampton Inn & Suites, excluding real estate, market studies, insurance and interest.[2]"
    },
    {
      q: "Does the cost to build a hotel include the land?",
      a: "Not in a franchise disclosure document. Hilton's Item 7 tables exclude real estate because land costs vary so widely by location.[2] Ask any other source whether its per-room figure includes land before you compare."
    },
    {
      q: "What is the cheapest hotel brand to build?",
      a: "Among the seven Hilton documents we read, Tru by Hilton has the lowest new-build total, $14,258,164 to $20,659,558 for 98 rooms, and LivSmart Studios has the lowest per-room figure by our arithmetic, about $134,700 to $198,700.[5][8] A conversion costs far less than either.[7]"
    },
    {
      q: "How much does it cost to convert a hotel to a new brand?",
      a: "Hilton estimates $3,251,531 to $5,906,193 to convert a 100-room hotel to Spark by Hilton, not counting the purchase of the hotel.[7] Conversion cost depends on the age and condition of the building, so a brand's improvement plan for your specific hotel is the real number."
    },
    {
      q: "Is it cheaper to buy a hotel than to build one?",
      a: "Often, per room. JLL's first-quarter 2026 report, as Hotel Dive summarized it, says full-service and select-service hotels continue to trade at discounts to replacement cost.[12] Apple Hospitality sold a 76-room Homewood Suites in 2025 for about $109,000 per key by our arithmetic.[13]"
    },
    {
      q: "How long does it take to develop a hotel?",
      a: "HVS says the typical hotel development process can last three to five years from concept to opening, and recommends adjusting any cost estimate for inflation over that period.[1]"
    },
    {
      q: "Does Matthews Hotel Markets build hotels?",
      a: "No. We arrange hotel financing, including construction loans, sell hotels, and represent buyers. The cost figures on this page are published estimates from HVS and from Hilton's franchise disclosure documents, with their dates, and none of them is ours.[1][2]"
    }
  ],
  sources: cite("hvsCost", "hampton26", "home226", "homewood26", "tru26", "hgi26", "spark26", "livsmart26", "censusC30", "le", "rates", "jllQ1", "apple"),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/extended-stay-hotels",
      "/hotel-industry/chain-scales-and-classes",
      "/hotel-industry/outlook-2026-2027",
      "/hotel-industry/who-buys-hotels"
    ],
    glossary: [
      "/glossary/per-key",
      "/glossary/franchise-fdd",
      "/glossary/pip",
      "/glossary/key-money"
    ],
    data: [
      "/rates",
      "/data/sba-hotel-lending",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Ask about construction financing or buying an existing hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges hotel construction financing and sells existing hotels, which are the two sides of the build-or-buy question. We do not develop hotels."
};

export default page;
