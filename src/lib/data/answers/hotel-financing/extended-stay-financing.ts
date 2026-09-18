/**
 * How is extended-stay hotel financing different?
 * Answer page: /hotel-financing/extended-stay-financing
 *
 * Every figure was read at its source on 2026-09-18. Brand figures come from public FDDs and a
 * public 10-K only. Worked-example arithmetic was recomputed by script before publishing.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "extended-stay-financing",
  cluster: "hotel-financing",
  isHub: false,
  title: "Extended-Stay Hotel Financing: What Is Different",
  h1: "How is extended-stay hotel financing different?",
  description: "What changes when a lender underwrites an extended-stay hotel: the SBA 30-day transient test, occupancy and rate profile, tax treatment and lender fit.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "How is extended-stay hotel financing different?",
    "Can I get an SBA loan for an extended-stay hotel?",
    "I'm buying a WoodSpring Suites. Will a bank finance it like a regular hotel?",
    "Do lenders like extended-stay hotels more than regular hotels?",
    "My extended-stay has a lot of weekly and monthly guests. Does that hurt my loan?",
    "Is an extended-stay hotel a hotel or an apartment building to a lender?",
    "Can I get an SBA loan to buy a hotel?",
    "Can a hotel with low occupancy still qualify for financing?"
  ],
  answer: "Lenders size an extended-stay hotel with the same DSCR, debt yield and LTV tests as any hotel, but length of stay changes eligibility and risk. SBA finances a hotel only if more than 50 percent of prior-year revenue came from guests staying 30 days or less.[1] Hilton's 2026 Home2 Suites disclosure shows 78.0 percent occupancy in 2025, with 42 percent of room nights from stays of five nights or more.[2]",
  takeaways: [
    "The sizing tests do not change. What changes is how a lender reads the guest mix, the expense model and whether the property is still a hotel.",
    "SBA's 30-day rule is the hard line. More than 50 percent of prior-year revenue has to come from stays of 30 days or less, or the property is an ineligible passive business.[1]",
    "Public brand data shows the occupancy advantage. Choice Hotels reported 69.1 percent occupancy for its extended-stay brands in 2025, against 54.9 percent for its midscale and upper midscale brands.[3]",
    "The rate is lower and the stay is longer. That trade supports a leaner staffing model, and it concentrates revenue in fewer guests and employers.",
    "A brand-standard extended-stay hotel is nowhere near the 30-day line. Home2 Suites stays of five nights or more averaged 11.9 nights in 2025.[2]"
  ],
  sections: [
    {
      h2: "Do lenders treat an extended-stay hotel differently from a regular hotel?",
      lead: "They run the same three sizing tests, then ask three extra questions: how long guests stay, who they are, and whether the property still operates as a hotel.",
      body: "An extended-stay loan is sized the way `/hotel-financing/loan-requirements` describes: DSCR, debt yield and loan-to-value against trailing twelve-month NOI, with the smallest result winning. No conventional lender publishes its thresholds for either product, so our rate sheet does not print them.[4]\n\nThe extra questions are about durability. Longer stays mean fewer check-ins per occupied room, less frequent housekeeping, and steadier midweek occupancy. They also mean a larger share of revenue can sit with a handful of accounts: a construction crew, a hospital's traveling nurses, an insurer housing displaced families. A lender will ask for the length-of-stay report and the top accounts, and will want to know what happens to occupancy when the largest project in town ends."
    },
    {
      h2: "Can I get an SBA loan for an extended-stay hotel?",
      lead: "Yes, if more than 50 percent of the business's prior-year revenue came from transients who stay 30 days or less at a time.",
      body: "SBA treats businesses that mainly rent real estate as passive and ineligible, and it says apartment buildings are not eligible. Its SOP then carves out hotels, motels, RV parks, marinas and campgrounds, on one condition: more than 50 percent of the business's revenue for the prior year is derived from transients who stay for 30 days or less at a time, and the business complies with zoning and other legal requirements. For a start-up, the projections have to show the same thing.[1]\n\nThat is a revenue test, not a room-count test and not a brand test. An economy extended-stay property that has drifted into monthly rentals can fail it while carrying a hotel flag and a hotel license. If the property passes, the ordinary program terms apply: a $5 million 7(a) cap, up to 25 years on real estate,[5] and the 504 structure described on `/hotel-financing/sba-7a-vs-504`. USDA's Business and Industry guarantee also lists hotels and motels as eligible tourist facilities in rural areas.[6]\n\nPull the length-of-stay revenue split before you apply. The lender will, and it is better to know on which side of the line the trailing year falls."
    },
    {
      h2: "What do the public numbers say about extended-stay performance?",
      lead: "Extended-stay brands run higher occupancy at a lower rate than their transient siblings, in both Hilton's and Choice's public filings.",
      body: "Hilton's 2026 franchise disclosure documents report 2025 results for comparable US hotels. Home2 Suites, across 561 comparable hotels, averaged 78.0 percent occupancy, a $144.47 room rate and $112.63 RevPAR.[2] Hampton, across 1,893 comparable hotels, averaged 71.0 percent occupancy, $149.08 and $105.90.[7] Seven points more occupancy at a slightly lower rate produced about 6 percent more RevPAR.\n\nChoice Hotels' 10-K for 2025 shows the same shape further down the chain scale. Its extended-stay brands, WoodSpring Suites, Everhome Suites, MainStay Suites and Suburban Studios, ran 69.1 percent occupancy at a $66.10 average daily rate, for RevPAR of $45.67. Its midscale and upper midscale brands ran 54.9 percent at $99.21, for $54.50.[3] Higher occupancy did not mean higher RevPAR there, which is why a lender looks at margin and not only at the top line.\n\nHilton defines an extended stay as five or more consecutive nights. By that definition Home2 Suites had about 7.1 million extended-stay nights in 2025, about 42 percent of all room nights, and those stays averaged 11.9 nights.[2] Franchisor figures are averages for hotels already in the system. They are not a projection for yours."
    },
    {
      h2: "Why is the expense model different?",
      lead: "Fewer arrivals and less frequent housekeeping lower the labor needed per occupied room, and that is the core of the extended-stay margin argument.",
      body: "The operating standards are public. Choice describes weekly housekeeping at Everhome Suites and MainStay Suites and bi-weekly housekeeping at WoodSpring Suites and Suburban Studios, alongside in-room kitchens and 24/7 guest laundry.[3] Hilton notes that a Home2 Suites hotel has limited meeting space and limited food and beverage.[2] Fees differ a little too: Hilton's 2026 documents put the monthly program fee at 3.5 percent of gross rooms revenue for Home2 Suites and 4 percent for Hampton, on top of a 6 percent royalty for both.[2][7]\n\nWe do not publish an expense ratio for the segment, because the public sources that would support one are subscriber data. A lender will build its own from your trailing P&L. It will also add back what long stays cost: kitchens and appliances wear faster, so expect the FF&E reserve and the property condition report to get a careful read."
    },
    {
      h2: "What happens to occupancy tax on long stays?",
      lead: "In many states a guest who stays 30 days or more stops being taxed as a hotel guest, which changes the tax line and signals how the state views the stay.",
      body: "Texas is a clear example. The state hotel tax rate is 6 percent, and guests who occupy a room for 30 or more consecutive days with no payment interruption are considered permanent residents and are exempt.[8] Rules differ by state and city, so check your own.\n\nThis matters to financing in two ways. First, the exemption report is an independent record of how much of your revenue comes from 30-day stays, and SBA's SOP lists transient occupancy tax records among the third-party records a lender may use to verify a seller's financial data in certain acquisitions.[1] Second, a property that has become mostly monthly housing can raise zoning and licensing questions that a lender's counsel will ask about."
    },
    {
      h2: "Which lenders fit an extended-stay hotel?",
      lead: "The same five lender types as any hotel, with the fit decided by flag, guest mix and size more than by the extended-stay label.",
      body: "A branded upper-midscale or midscale extended-stay hotel with a transient-heavy mix is ordinary bank, SBA and CMBS business. An unbranded or economy property with a high share of monthly guests narrows the field to local banks and credit unions that know the owner, and to bridge lenders if there is a repositioning plan. Compare the types on `/hotel-financing/hotel-lenders-by-type`.\n\nNew construction is an active part of this segment, because the prototypes are small and the staffing model is lean. Hilton's 2026 estimate for a new 107-suite Home2 Suites is $18,075,688 to $26,550,592 before land.[2] See `/hotel-financing/construction-loans` for how that gets financed."
    }
  ],
  table: {
    caption: "Extended-stay versus transient select-service hotels: public 2025 figures and what lenders do with them",
    columns: [
      "Item",
      "Extended-stay",
      "Transient",
      "What a lender does with it"
    ],
    rows: [
      [
        "Hilton, 2025 occupancy",
        "Home2 Suites 78.0%[2]",
        "Hampton 71.0%[7]",
        "Tests whether your hotel beats or trails its own flag's average"
      ],
      [
        "Hilton, 2025 room rate and RevPAR",
        "$144.47 and $112.63[2]",
        "$149.08 and $105.90[7]",
        "Underwrites your trailing numbers, not the brand's"
      ],
      [
        "Choice, 2025 occupancy, ADR, RevPAR",
        "69.1%, $66.10, $45.67[3]",
        "Midscale and upper midscale: 54.9%, $99.21, $54.50[3]",
        "Looks past occupancy to margin"
      ],
      [
        "Housekeeping standard",
        "Weekly or bi-weekly at Choice's extended-stay brands[3]",
        "Set by each brand's standards; not stated in the filings cited here",
        "Expects lower rooms labor per occupied room, and checks it in the P&L"
      ],
      [
        "SBA eligibility",
        "Only if more than 50% of prior-year revenue is from stays of 30 days or less[1]",
        "Same rule; rarely in question",
        "Asks for the length-of-stay revenue split"
      ],
      [
        "Expense ratio",
        "Not published here; subscriber data",
        "Not published here; subscriber data",
        "Builds it from your trailing twelve-month P&L"
      ],
      [
        "DSCR test, leverage and spread",
        "Set by the lender; not published[4]",
        "Set by the lender; not published[4]",
        "Same three sizing tests for both"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet does not carry a separate extended-stay row. It prices hotel debt by lender type, with the SBA 7(a) maximum at 10.00% on the 7.00% Prime in effect since September 17, 2026, and it marks conventional DSCR floors, leverage and spreads as not yet published for every hotel type, extended-stay included.[4]"
  },
  workedExample: {
    label: "Hypothetical: the SBA 30-day revenue test on two extended-stay hotels",
    body: "Hypothetical. Two 96-suite economy extended-stay hotels each earned $2,400,000 of revenue last year. The test is SBA's: more than 50 percent of prior-year revenue from transients who stay 30 days or less.[1]\n\nHotel A earned $1,300,000 from guests whose stays ran longer than 30 days. That is 54.2 percent of revenue, so the transient share is 45.8 percent. Hotel A fails. It is ineligible for SBA 7(a) and 504 no matter how strong its NOI is, and the buyer needs a conventional bank or credit union loan.\n\nHotel B earned $900,000 from stays longer than 30 days, or 37.5 percent. The transient share is 62.5 percent. Hotel B passes and can be financed under either SBA program if it meets the other rules.\n\nSame building, same revenue, different lender universe. For scale, a 45-night stay at $60 a night is $2,700 of revenue, and in Texas the 6 percent state hotel tax on it, $162, is not owed once the guest qualifies as a permanent resident.[8] The tax exemption report and the SBA test are measuring the same guests."
  },
  faq: [
    {
      q: "Can I get an SBA loan to buy an extended-stay hotel?",
      a: "Yes, if more than 50 percent of the hotel's revenue for the prior year came from guests who stayed 30 days or less at a time. If most revenue comes from longer stays, SBA treats the property as ineligible passive real estate."
    },
    {
      q: "I'm buying a WoodSpring Suites. Will a bank finance it like a regular hotel?",
      a: "It will use the same DSCR, debt yield and LTV tests. It will also ask for the length-of-stay mix and the largest accounts, because long stays concentrate revenue. A branded property with a mostly transient mix is ordinary hotel business for banks and SBA lenders."
    },
    {
      q: "Do lenders prefer extended-stay hotels?",
      a: "Many like the occupancy profile. Choice Hotels reported 69.1 percent occupancy for its extended-stay brands in 2025 against 54.9 percent for midscale and upper midscale. No lender publishes a separate extended-stay DSCR floor, leverage limit or spread, so the preference shows up in quotes, not in a posted number."
    },
    {
      q: "Is an extended-stay hotel a hotel or an apartment building to a lender?",
      a: "A hotel, as long as it operates like one: nightly or weekly rates, hotel licensing, occupancy tax collected on short stays. SBA draws its line at revenue from stays over 30 days. Past that line the property starts to look like housing, and the lender list changes."
    },
    {
      q: "My hotel has a lot of monthly guests. Does that hurt my refinance?",
      a: "It can narrow the lender list. It rules out SBA if long stays produce half or more of revenue, and it prompts zoning and licensing questions. It can help with coverage if those guests are stable. Bring the length-of-stay revenue report to the first conversation."
    },
    {
      q: "How long do extended-stay guests actually stay?",
      a: "At Hilton's Home2 Suites in 2025, stays of five nights or more averaged 11.9 nights and made up about 42 percent of room nights, according to the 2026 franchise disclosure document. Economy extended-stay properties can run much longer, which is where the 30-day questions begin."
    },
    {
      q: "Do guests who stay over 30 days pay hotel occupancy tax?",
      a: "It depends on the state. In Texas, a guest who stays 30 or more consecutive days with no payment interruption is a permanent resident and is exempt from the 6 percent state hotel tax. Check your state and city rules."
    },
    {
      q: "What does it cost to build an extended-stay hotel?",
      a: "Hilton's 2026 franchise disclosure document estimates $18,075,688 to $26,550,592 for a new 107-suite Home2 Suites, excluding land. That is about $168,900 to $248,100 per suite. It is a planning range from the franchisor, not a contractor's bid."
    }
  ],
  sources: [
    {
      n: 1,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section A, Ch. 1, passive businesses: hotels and the 30-day transient revenue test (pp. 19-20); third-party verification of seller financial data (p. 91)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "2026 US Home2 Suites Franchise Disclosure Document (issued March 30, 2026), Items 1, 6, 7 and 19",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Home2.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Choice Hotels International, Inc. Form 10-K for fiscal year 2025: brand descriptions and US operating statistics by chain scale",
      url: "https://www.sec.gov/Archives/edgar/data/1046311/000104631126000008/chh-20251231.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/sba-lenders/#7a-terms",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "7 CFR 5001.105, Eligible projects: tourist and recreation facilities, including hotels and motels",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.105",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "2026 US Hampton Franchise Disclosure Document (issued March 30, 2026), Items 6 and 19",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "Hotel Occupancy Tax Exemptions (Publication 96-224)",
      url: "https://comptroller.texas.gov/taxes/publications/96-224.php",
      publisher: "Texas Comptroller of Public Accounts",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/construction-loans",
      "/hotel-financing/hotel-loan-rates"
    ],
    glossary: [
      "/glossary/revpar",
      "/glossary/adr",
      "/glossary/dscr"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Ask which lenders fit your extended-stay hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets checks the length-of-stay revenue split before it builds a lender list, because that one report decides whether SBA is on it."
};

export default page;
