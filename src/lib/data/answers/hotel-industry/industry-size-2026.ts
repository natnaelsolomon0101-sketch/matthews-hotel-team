/**
 * How big is the US hotel industry in 2026?
 * /hotel-industry/industry-size-2026
 *
 * Written 2026-09-18. The AHLA figures are the ones already carried on
 * /data/hotel-financing-statistics, re-read in AHLA's public release on this
 * date. The BLS figures are for NAICS 721 (accommodation), which is what the
 * public BLS industry page reports; it is wider than hotels and motels alone
 * and the page says so. No licensed room census appears here.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "industry-size-2026",
  cluster: "hotel-industry",
  isHub: false,
  title: "How Big Is the US Hotel Industry in 2026?",
  h1: "How big is the US hotel industry in 2026?",
  description: "US hotel industry size in 2026: guest spending, jobs, wages, taxes, hotel counts, rooms under construction. Every figure dated and attributed.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "How big is the US hotel industry?",
    "How many hotels are there in the United States?",
    "How many hotel rooms are there in the US?",
    "How many people work in the hotel industry?",
    "How much tax revenue do hotels generate?",
    "How many hotels are being built in the US right now?",
    "What is the size of the hotel market in 2026?"
  ],
  answer: "AHLA's State of the Industry release of January 27, 2026 forecasts nearly $805 billion of U.S. hotel guest spending in 2026, about 2.2 million direct hotel operations jobs, nearly $131 billion in wages and benefits, and nearly $87 billion in taxes.[1] The Bureau of Labor Statistics counts 1,926,600 accommodation employees in August 2026, a preliminary figure.[2]",
  takeaways: [
    "Guest spending: nearly $805 billion forecast for 2026, up 1.7 percent on 2025, per AHLA.[1]",
    "Jobs: AHLA projects about 2.2 million direct hotel operations jobs in 2026. BLS counts 1,926,600 employees in the accommodation subsector for August 2026, preliminary.[1][2]",
    "Taxes: hotels generated $85.1 billion in federal, state and local taxes in 2025, and AHLA projects nearly $87 billion in 2026.[1]",
    "Count: there is no free public hotel census. AAHOA's and AHLA's own figures imply a little over 60,000 hotels, by our arithmetic.[3][4]",
    "Pipeline: 5,975 projects with 703,001 rooms at the end of the second quarter of 2026, per Lodging Econometrics.[5]"
  ],
  sections: [
    {
      h2: "How big is the U.S. hotel industry in dollars?",
      lead: "AHLA forecasts nearly $805 billion of hotel guest spending in the United States in 2026, a 1.7 percent increase over 2025.[1]",
      body: "That is the headline figure in AHLA's 2026 State of the Industry release, dated January 27, 2026. It is a measure of what hotel guests spend, and the release does not break it down. It is much larger than what hotels themselves collect. CoStar reported 2025 RevPAR of $100.02, which is $36,507 of room revenue per available room per year.[6] Even at six million rooms, that comes to about $219 billion of room revenue, so most of the $805 billion has to be money guests spend outside the hotel bill. That inference is ours. The worked arithmetic is below.\n\nWe reuse AHLA's figures from our [hotel financing statistics](/data/hotel-financing-statistics) page, where each carries its source date and the date we last read it."
    },
    {
      h2: "How many people work in the U.S. hotel industry?",
      lead: "About 2.2 million people work directly in U.S. hotel operations, according to AHLA's projection for 2026, and the Bureau of Labor Statistics counts 1.93 million employees in the accommodation subsector.[1][2]",
      body: "AHLA projects the hotel workforce will grow by more than 30,000 jobs in 2026 to approximately 2.2 million, and says the industry paid nearly $128 billion in wages and benefits in 2025, a figure it expects to approach $131 billion in 2026.[1]\n\nThe BLS series is narrower in one way and wider in another. It counts payroll employees only, and it covers NAICS 721, accommodation, which is hotels and motels plus RV parks, recreational camps and rooming and boarding houses. On that basis, seasonally adjusted employment was 1,938,200 in May 2026, 1,916,100 in June, 1,918,000 in July and 1,926,600 in August, with the last two months preliminary.[2] Average hourly earnings for all employees were $24.74 in the latest preliminary reading. BLS's 2025 occupation data for the subsector lists 420,800 maids and housekeeping cleaners, 247,700 hotel desk clerks and 38,100 lodging managers.[2] We read the public BLS industry page for NAICS 721 and quote only what it shows for the subsector as a whole. We do not quote a separate figure for hotels and motels, NAICS 7211, because we did not read one."
    },
    {
      h2: "How much tax do hotels generate?",
      lead: "U.S. hotels generated $85.1 billion in local, state and federal taxes in 2025, up $1.7 billion from 2024, and AHLA projects nearly $87 billion for 2026.[1]",
      body: "The figure combines taxes at every level, which is why it is so large relative to hotel room revenue. Lodging taxes are a line on the guest's bill that the hotel collects and passes through. They never become hotel revenue, but they do raise the total price the guest compares when choosing where to stay. For an owner, the tax that matters to income is property tax, which sits below gross operating profit on the statement. See [How do hotels make money?](/hotel-industry/how-hotels-make-money)."
    },
    {
      h2: "How many hotels are there in the United States?",
      lead: "There is no free public census of U.S. hotels, and the public figures that exist point to a little over 60,000 hotels.",
      body: "AAHOA says its members own 36,807 hotels and that this is 60 percent of U.S. hotels, which implies about 61,300 in total.[3] AHLA says 57 percent of U.S. hotels are franchised and projected 36,173 franchised hotels for 2024, which implies about 63,500.[4] Both totals are our arithmetic on rounded percentages, so treat them as rough.\n\nBLS counts 78,789 private establishments in the accommodation subsector in the first quarter of 2026, a preliminary figure, up from 78,152 in the second quarter of 2025.[2] That count is higher because it includes RV parks, camps and rooming houses. The number most of the industry uses comes from STR's census, which is a licensed product and is not reproduced here. Who owns these hotels is covered at [Who owns hotels in the United States?](/hotel-industry/who-owns-hotels)."
    },
    {
      h2: "How many hotel rooms are there in the United States?",
      lead: "No public primary source we could open states a current U.S. room count, and the published pipeline figures imply something between 5.5 and 6.0 million rooms.",
      body: "Lodging Econometrics forecasts that 661 new hotels with 74,820 rooms will open in 2026 and calls that a 1.3 percent growth rate.[5] Dividing 74,820 by 0.013 gives about 5.8 million existing rooms. Because 1.3 percent is rounded, the true base could be anywhere from about 5.5 to 6.0 million. That is our arithmetic and not a figure Lodging Econometrics published. AAHOA separately says its members' hotels, which it puts at 60 percent of all hotels, hold 3.2 million guestrooms.[3]\n\nWe had one room-night figure on this site before and removed it because we could not find it in AHLA's public release. The note is on the [hotel financing statistics](/data/hotel-financing-statistics) page. The same rule applies here: if the count is not in a public document we read, it does not go on the page."
    },
    {
      h2: "How big are the largest hotel brand systems?",
      lead: "The largest brand companies each report between about 7,500 and 9,800 hotels in their worldwide systems, nearly all owned by someone else.",
      body: "Marriott reports 9,805 properties with 1,779,936 rooms at year-end 2025.[8] Hilton reports 9,158 properties with 1,351,351 rooms in 143 countries and territories at December 31, 2025.[7] Wyndham reports over 8,300 affiliated hotels with approximately 869,000 rooms in approximately 100 countries.[9] Choice Hotels reports 7,575 hotels with 656,825 rooms.[10] These are global system counts from each company's fiscal 2025 Form 10-K, so they cannot be added up to a U.S. total. The contracts behind them are explained at [What is the difference between a hotel owner, a franchisor and a management company?](/hotel-industry/owner-franchisor-management-company)."
    },
    {
      h2: "How many hotels are being built?",
      lead: "At the end of the second quarter of 2026 the U.S. pipeline held 5,975 projects with 703,001 rooms, of which 1,081 projects with 133,216 rooms were under construction, according to Lodging Econometrics.[5]",
      body: "Another 2,147 projects with 245,871 rooms were scheduled to start within twelve months, and 2,747 projects with 323,914 rooms were in early planning. Conversions, where an existing hotel changes flags, were 1,567 projects with 152,044 rooms, up 15 percent by projects on a year earlier. In the first half of 2026, 277 new hotels with 31,416 rooms opened. Lodging Econometrics forecasts 661 openings with 74,820 rooms for the full year, 738 hotels with 78,909 rooms in 2027, and 832 hotels with 88,321 rooms in 2028, which it puts at growth rates of 1.3, 1.4 and 1.5 percent.[5]\n\nOther forecasters count supply differently. CBRE's midyear 2026 outlook projects inventory growth of 0.7 percent a year over the next three years and says construction has declined for 15 consecutive months.[11] We set the forecasts side by side at [What is the outlook for hotels in 2026 and 2027?](/hotel-industry/outlook-2026-2027)."
    },
    {
      h2: "How much of that capacity is being used?",
      lead: "U.S. hotels sold 62.3 percent of their available room nights in 2025, at an average rate of $160.54, according to CoStar.[6]",
      body: "Demand has picked up since. CoStar and Tourism Economics said on August 7, 2026 that the industry sold a record number of room nights in the first half of 2026, 11.4 million more than in the first half of 2025, and that room revenue rose by $5.4 billion.[12] The metrics are defined at [What are RevPAR, ADR and occupancy, and what is a good number?](/hotel-industry/revpar-adr-occupancy). If you are sizing this market because you plan to enter it, the buyer's guide is at [How do I buy a hotel?](/buy-a-hotel), and current borrowing costs are on the rate sheet: the 10-year Treasury was 4.94 percent and SOFR 3.85 percent on September 17, 2026.[13]"
    }
  ],
  table: {
    caption: "The size of the U.S. hotel industry: every figure with who published it and when",
    columns: [
      "Measure",
      "Figure",
      "Source",
      "Date of source"
    ],
    rows: [
      ["Hotel guest spending, 2026 forecast", "Nearly $805 billion, up 1.7%", "AHLA[1]", "January 27, 2026"],
      ["Direct hotel operations jobs, 2026 projection", "About 2.2 million, up more than 30,000", "AHLA[1]", "January 27, 2026"],
      ["Wages and benefits", "Nearly $128 billion in 2025, approaching $131 billion in 2026", "AHLA[1]", "January 27, 2026"],
      ["Taxes generated", "$85.1 billion in 2025, nearly $87 billion in 2026", "AHLA[1]", "January 27, 2026"],
      ["Accommodation employment, NAICS 721", "1,926,600, preliminary, seasonally adjusted", "BLS[2]", "August 2026"],
      ["Accommodation establishments, NAICS 721", "78,789 private establishments, preliminary", "BLS[2]", "First quarter 2026"],
      ["Hotels owned by AAHOA members", "36,807, which AAHOA puts at 60% of U.S. hotels", "AAHOA, citing Oxford Economics[3]", "Undated page, read September 18, 2026"],
      ["Franchised hotels", "36,173 projected for 2024, 57% of U.S. hotels", "AHLA[4]", "2024 figures"],
      ["Construction pipeline", "5,975 projects, 703,001 rooms", "Lodging Econometrics[5]", "July 23, 2026"],
      ["Occupancy, ADR, RevPAR, full-year 2025", "62.3%, $160.54, $100.02", "CoStar, reported by Hotel Dive[6]", "January 22, 2026"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet prices the debt behind all of this: the 10-year Treasury at 4.94% on September 17, 2026, SOFR at 3.85%, and the 25-year SBA 504 debenture at 6.54%.[13]"
  },
  workedExample: {
    label: "Worked arithmetic: why $805 billion of guest spending is not hotel revenue",
    body: "This uses published figures only. The conclusion is our inference, and it is labeled as one.\n\nStep 1. Room revenue per room. CoStar's 2025 RevPAR was $100.02.[6] Times 365 nights, one available room produced $36,507 of room revenue in the year.\n\nStep 2. A room count. Lodging Econometrics says 74,820 rooms opening in 2026 is a 1.3 percent growth rate.[5] 74,820 divided by 0.013 is about 5.8 million rooms. Allowing for rounding in the 1.3 percent, call it 5.5 to 6.0 million.\n\nStep 3. Multiply. 5.5 million rooms times $36,507 is about $201 billion. 6.0 million rooms times $36,507 is about $219 billion.\n\nStep 4. Compare. AHLA's guest spending forecast for 2026 is nearly $805 billion.[1] Room revenue on this arithmetic is roughly a quarter of that.\n\nSo the AHLA figure is best read as the spending of people who stay in hotels, including what they spend elsewhere on the trip, and not as the revenue of the hotel industry. If you are sizing the market for a business plan or a lender presentation, use the right one and say which it is."
  },
  faq: [
    {
      q: "How much is the U.S. hotel industry worth?",
      a: "There is no single public valuation. AHLA forecasts nearly $805 billion of hotel guest spending for 2026.[1] By our arithmetic on public figures, hotel room revenue is roughly $200 billion to $220 billion a year.[5][6]"
    },
    {
      q: "How many hotels are in the United States?",
      a: "No free public census exists. AAHOA's and AHLA's published figures imply about 61,300 to 63,500 hotels, by our arithmetic.[3][4] BLS counts 78,789 accommodation establishments, a wider category that includes RV parks and rooming houses.[2]"
    },
    {
      q: "How many hotel rooms are in the United States?",
      a: "We found no public primary source that states it. Lodging Econometrics' statement that 74,820 new rooms equals 1.3 percent growth implies roughly 5.5 to 6.0 million existing rooms, by our arithmetic.[5]"
    },
    {
      q: "How many jobs does the hotel industry support?",
      a: "AHLA projects about 2.2 million direct hotel operations jobs in 2026.[1] BLS counted 1,926,600 payroll employees in the accommodation subsector in August 2026, a preliminary figure.[2]"
    },
    {
      q: "What is the most common job in a hotel?",
      a: "Housekeeping. BLS's 2025 occupation data for the accommodation subsector lists 420,800 maids and housekeeping cleaners, followed by 247,700 hotel desk clerks and 143,620 waiters and waitresses.[2]"
    },
    {
      q: "Is the U.S. hotel industry growing?",
      a: "Yes, slowly in rooms and faster in revenue. Lodging Econometrics forecasts 1.3 percent room growth in 2026.[5] CoStar and Tourism Economics reported a record first half for room nights sold, up 11.4 million on 2025.[12]"
    }
  ],
  sources: cite(
    "ahla",
    "bls",
    "aahoa",
    "ahlaFranchising",
    "le",
    "fy2025",
    "hilton",
    "marriott",
    "wyndham",
    "choice",
    "cbre",
    "forecastAug",
    "rates"
  ),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/who-owns-hotels",
      "/hotel-industry/outlook-2026-2027",
      "/hotel-industry/revpar-adr-occupancy",
      "/hotel-industry/how-hotels-make-money"
    ],
    glossary: [
      "/glossary/revpar",
      "/glossary/adr",
      "/glossary/per-key"
    ],
    data: [
      "/data/hotel-financing-statistics",
      "/rates",
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Ask us about your market",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets keeps a dated, sourced list of hotel finance figures and removes any figure it cannot trace to a public document."
};

export default page;
