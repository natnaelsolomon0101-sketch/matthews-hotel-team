/**
 * Do opportunity zones still help hotel investors?
 * Answer page: /hotel-financing/opportunity-zones
 *
 * Written 2026-09-18 from 26 U.S.C. 1400Z-1 and 1400Z-2 as amended by Public
 * Law 119-21 (July 4, 2025), Rev. Proc. 2026-14 (I.R.B. 2026-20, May 11, 2026)
 * and the IRS opportunity zone pages, all read that day. The IRS FAQ page
 * still describes the pre-2027 rules; the statute and the revenue procedure
 * carry the new ones. Not tax advice.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "opportunity-zones",
  cluster: "hotel-financing",
  isHub: false,
  title: "Opportunity Zones and Hotels: The 2027 Rules",
  h1: "Do opportunity zones still help hotel investors?",
  description: "Opportunity zones after the 2025 law change: the December 31, 2026 deadline, new zones from January 1, 2027, rural bonuses, and how hotels meet the tests.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Do opportunity zones still help hotel investors?",
    "I am selling my hotel with a big capital gain. Can I roll it into an opportunity zone fund?",
    "Did the opportunity zone program get extended?",
    "What changes for opportunity zones on January 1, 2027?",
    "How much do I have to spend renovating a hotel in an opportunity zone?",
    "Is an opportunity zone better than a 1031 exchange for a hotel seller?",
    "What is a qualified rural opportunity fund?"
  ],
  answer: "Yes, and the rules change on January 1, 2027. Under the original law, tax deferred through a qualified opportunity fund comes due on December 31, 2026.[1] Public Law 119-21, enacted July 4, 2025, made the program permanent for money invested after that date: a 5-year deferral, a 10 percent basis increase, or 30 percent in a rural fund, and new zones running from January 1, 2027 through December 31, 2036.[1][2]",
  takeaways: [
    "Old rules, for money invested through December 31, 2026: the deferred gain is taxed on the earlier of the sale of the fund interest or December 31, 2026, so a new investment made now defers almost nothing.[1][3]",
    "New rules, for money invested after December 31, 2026: deferral lasts until the earlier of a sale or 5 years after the investment, with a 10 percent basis increase at 5 years, or 30 percent in a qualified rural opportunity fund.[1]",
    "The 10-year benefit survives in both versions: hold the fund interest at least 10 years and the basis steps up to fair market value, so the appreciation is not taxed.[1][3]",
    "The map is being redrawn. Governors nominate new tracts in a window that began July 1, 2026, and zones designated in that round run from January 1, 2027 through December 31, 2036. The 2018 zones expire December 31, 2028.[2]",
    "A purchased hotel has to be substantially improved: within 30 months the fund must add more than the building's adjusted basis, or more than 50 percent of it in an all-rural zone. The land under an operating hotel generally does not need separate improvement.[1][3]"
  ],
  sections: [
    {
      h2: "What is an opportunity zone investment, in one paragraph?",
      lead: "An opportunity zone investment is a capital gain reinvested, within 180 days of the sale, into a qualified opportunity fund that holds at least 90 percent of its assets in designated low-income census tracts.",
      body: "The program came in with the Tax Cuts and Jobs Act of 2017.[4] The taxpayer elects to leave out of income the part of a gain that is invested in a qualified opportunity fund during the 180-day period beginning on the date of the sale, and only gain from a sale to an unrelated person qualifies.[1] The fund is a corporation or partnership organized to invest in qualified opportunity zone property, and it must hold at least 90 percent of its assets in that property.[1] Note what is invested: the gain, not the whole sale price. That is one of the main differences from a like-kind exchange, covered in [Can I use a 1031 exchange to buy or sell a hotel?](/hotel-financing/1031-exchange-hotels)\n\nA hotel is an operating business in a fixed location, which suits the tests below. The IRS FAQ even uses a hotel purchase as its example for the land rule.[3]"
    },
    {
      h2: "What happens on December 31, 2026?",
      lead: "December 31, 2026 is the date every gain deferred under the original rules comes into income, unless the fund interest was sold earlier.",
      body: "The original section 1400Z-2(b) includes the deferred gain in income in the taxable year that includes the earlier of the date the investment is sold or exchanged, or December 31, 2026.[1] The IRS FAQ, last updated September 14, 2026, says the same, and adds that the gains eligible for deferral under those rules are gains that would be recognized before January 1, 2027.[3]\n\nTwo consequences for hotel owners. First, anyone who invested a gain in a fund in earlier years owes tax on that deferred gain for the tax year that includes December 31, 2026, whether or not the hotel the fund owns has been sold. Plan the cash. Second, the original basis increases, 10 percent after 5 years and another 5 percent after 7 years, reward holding periods that a new investment can no longer reach before the deadline.[1][3] A gain invested in a fund in late 2026 is deferred only until December 31, 2026.\n\nWhat the old rules still offer a late-2026 investor is the 10-year benefit: hold the fund interest for at least 10 years, elect, and the basis becomes fair market value on the date of sale, so the appreciation is never taxed.[3]"
    },
    {
      h2: "What changes for money invested after December 31, 2026?",
      lead: "For amounts invested in a qualified opportunity fund after December 31, 2026, the program no longer has an end date, and the deferral runs on a rolling 5-year clock.",
      body: "Section 70421 of Public Law 119-21, signed July 4, 2025 and commonly called the One, Big, Beautiful Bill Act, rewrote the deferral rules for amounts invested after December 31, 2026.[1][2] The old sentence that barred elections for sales after December 31, 2026 is removed. The deferred gain is included in income on the earlier of the date the investment is sold or the date 5 years after the investment was made. An investment held at least 5 years gets a basis increase equal to 10 percent of the deferred gain, which means 90 percent of the gain is taxed at year 5. In a qualified rural opportunity fund the increase is 30 percent. The 7-year increase is gone.[1]\n\nThe 10-year rule stays and gets a ceiling. For an investment held at least 10 years, the basis equals fair market value on the date of sale if the sale comes before the 30th anniversary of the investment, and fair market value on the 30th anniversary after that.[1]\n\nIf you are selling a hotel in late 2026, the 180-day window can straddle the change. The statute's effective date turns on when the money is invested in the fund, not when the hotel was sold.[1] Whether to invest before or after December 31, 2026 is a question for your tax advisor, with the statute in hand. Your other sale taxes are covered in [What taxes do I pay when I sell a hotel?](/sell-a-hotel/taxes-when-selling-a-hotel)"
    },
    {
      h2: "Which census tracts will be opportunity zones in 2027?",
      lead: "Nobody could say for certain on September 18, 2026, because governors were still nominating tracts and Treasury had not finished certifying them.",
      body: "Rev. Proc. 2026-14, published in Internal Revenue Bulletin 2026-20 on May 11, 2026, sets the process. The first decennial determination date is July 1, 2026. Each governor has 90 days from that date to nominate low-income census tracts, and a governor who asks for the 30-day extension has until October 28, 2026 at the latest. Treasury then has 30 days to certify, which with its own extension runs to December 28, 2026 at the latest. Zones designated in this round are in effect from January 1, 2027 through December 31, 2036, and the process repeats every 10 years.[1][2]\n\nFewer tracts will qualify. The 2025 law replaced the old cross-reference with a narrower test: a tract qualifies if its median family income does not exceed 70 percent of the area median, or if its poverty rate is at least 20 percent and its median family income does not exceed 125 percent of the area median. Tracts that merely border a low-income tract no longer qualify, and a state can designate no more than 25 percent of its low-income tracts.[2][5]\n\nThe zones designated in 2018 remain in effect until December 31, 2028, and Puerto Rico's until December 31, 2027.[2] A hotel in a 2018 zone is not automatically in a 2027 zone. Before you pay for a site because of its zone status, confirm the tract's designation for the period your fund will actually own the hotel. The IRS page we read listed the revenue procedure but no 2027 zone list yet.[4]"
    },
    {
      h2: "How does a hotel meet the opportunity zone tests?",
      lead: "A fund that buys an existing hotel has to substantially improve it within 30 months; a fund that builds a new hotel meets the original use test instead.",
      body: "Tangible property qualifies if the fund or its operating business bought it after December 31, 2017, and either its original use in the zone starts with the fund or the fund substantially improves it.[1] Substantial improvement means that during any 30-month period after the purchase, additions to basis exceed the property's adjusted basis at the start of the period. In a zone made up entirely of a rural area the threshold is 50 percent of that basis, a change that took effect July 4, 2025.[1] Rural here means outside any city or town of more than 50,000 people and outside the urbanized area next to one.[1]\n\nThe IRS FAQ answers the hotel question directly. If a fund buys a hotel in a zone, the land under the building generally does not need to be substantially improved, because the building is used in an active trade or business. Unimproved or minimally improved land is treated differently.[3] So the test runs against the building's basis, not the whole purchase price. A brand-mandated renovation can do double duty here: see [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans) A building that has been vacant can count as original use in some cases, which matters for conversions.[3]\n\nOne exclusion matters to resorts. A qualified opportunity zone business cannot be one of the businesses listed in section 144(c)(6)(B): a private or commercial golf course, country club, massage parlor, hot tub facility, suntan facility, racetrack or other gambling facility, or a store whose principal business is selling alcohol for consumption off premises.[1][6] A hotel with a golf course, casino or spa needs tax counsel on structure before it assumes it qualifies."
    },
    {
      h2: "Do opportunity zones change how a hotel gets financed?",
      lead: "No. The benefit belongs to the investors' tax returns, and the hotel still borrows on its own income and value.",
      body: "A lender sizes an opportunity zone hotel the way it sizes any other: see [What do lenders require for a hotel loan?](/hotel-financing/loan-requirements) What the program changes is the equity. Investors who expect tax-free appreciation after 10 years may accept a longer hold, and the fund has to keep 90 percent of its assets in qualifying property, which shapes how much cash it can hold and when it can refinance or sell.[1]\n\nThe substantial improvement clock also sets the project timeline. A fund that must add more than the building's basis within 30 months is committing to a heavy renovation or a conversion, which usually means a construction or bridge loan first and permanent debt after: see [How do I finance hotel construction in 2026?](/hotel-financing/construction-loans) and [What is a bridge loan and when should a hotel owner use one?](/hotel-financing/bridge-loans) Opportunity zone equity can sit in the same project as historic tax credits when the building qualifies for both: see [Can I use historic tax credits to renovate a hotel?](/hotel-financing/historic-tax-credits)\n\nThis page explains the rules. It is not tax advice, and the choice of investment date in particular needs a tax advisor."
    }
  ],
  table: {
    caption: "Opportunity zone rules by investment date, as the statute stood on September 18, 2026",
    columns: [
      "Rule",
      "Invested through December 31, 2026",
      "Invested after December 31, 2026"
    ],
    rows: [
      [
        "When the deferred gain is taxed",
        "Earlier of sale of the fund interest or December 31, 2026[1]",
        "Earlier of sale or 5 years after the investment[1]"
      ],
      [
        "Basis increase at 5 years",
        "10% of the deferred gain, if reached before the gain is taxed[1]",
        "10%; 30% in a qualified rural opportunity fund[1]"
      ],
      [
        "Basis increase at 7 years",
        "Additional 5%, if reached before the gain is taxed[1]",
        "None[1]"
      ],
      [
        "Hold 10 years or more",
        "Basis steps up to fair market value at sale[1][3]",
        "Same, with value frozen at the 30th anniversary[1]"
      ],
      [
        "Program end date",
        "No election for sales after December 31, 2026[1]",
        "None; that limit is repealed for these investments[1]"
      ],
      [
        "Zones in effect",
        "2018 designations, through December 31, 2028[2]",
        "New designations, January 1, 2027 through December 31, 2036, plus 2018 zones until they expire[2]"
      ],
      [
        "Substantial improvement of a purchased hotel",
        "More than 100% of the building's adjusted basis in 30 months; 50% in an all-rural zone since July 4, 2025[1]",
        "More than 100%; 50% in an all-rural zone[1]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% and SOFR at 3.85% as of September 17, 2026. An opportunity zone hotel borrows against those same indexes. The tax benefit changes the investors' return, not the lender's price.[7]"
  },
  workedExample: {
    label: "Hypothetical: a $3.0M gain from a hotel sale, under the old and new rules",
    body: "Hypothetical. An owner sells a hotel to an unrelated buyer and realizes a $3,000,000 capital gain. The owner is weighing a qualified opportunity fund that will buy a different hotel for $8,000,000, of which $1,500,000 is land and $6,500,000 is building. No tax rates are assumed. The figures show how much gain is taxed and when.\n\nInvested under the old rules, on or before December 31, 2026. The $3,000,000 gain is deferred only until December 31, 2026. The 5-year basis increase cannot be reached by then, so all $3,000,000 is taxed for the year that includes December 31, 2026.[1] The 10-year rule still applies to the fund interest.[3]\n\nInvested under the new rules, after December 31, 2026. The gain is deferred for 5 years from the investment date. At 5 years the basis increases by 10 percent of the deferred gain: 10 percent of $3,000,000 is $300,000, so $2,700,000 is taxed. In a qualified rural opportunity fund the increase is 30 percent: $900,000, so $2,100,000 is taxed.[1] If the fund interest is worth less than the deferred gain on that date, the lower value is used.[1]\n\nSubstantial improvement. The building's basis is $6,500,000. In a standard zone the fund must add more than $6,500,000 to the building's basis within 30 months. In an all-rural zone the threshold is 50 percent: more than $3,250,000.[1] The $1,500,000 of land under the operating hotel generally does not need to be improved.[3]\n\nTen years on. If the fund interest bought for $3,000,000 is worth $5,000,000 when it is sold after 10 years, an election sets the basis at $5,000,000 and the $2,000,000 of appreciation is not taxed.[1]"
  },
  faq: [
    {
      q: "Did Congress extend opportunity zones?",
      a: "Yes. Public Law 119-21, enacted July 4, 2025, removed the program's end date for amounts invested after December 31, 2026 and set up new zone designations every 10 years, the first in effect from January 1, 2027 through December 31, 2036."
    },
    {
      q: "I invested in an opportunity fund in 2020. When is my deferred gain taxed?",
      a: "On December 31, 2026, unless you sold the fund interest earlier. For a calendar-year taxpayer the gain goes on the 2026 return even if the fund still owns the hotel. Basis increases you earned by holding 5 or 7 years before that date reduce the amount."
    },
    {
      q: "Can I invest my whole hotel sale price in an opportunity fund?",
      a: "Only the gain qualifies for the deferral election, and it must be invested within 180 days of a sale to an unrelated person. Money beyond the gain can go in, but it does not receive the opportunity zone tax benefits."
    },
    {
      q: "Is an opportunity zone better than a 1031 exchange for a hotel seller?",
      a: "They solve different problems. A 1031 exchange defers the gain by reinvesting the proceeds in like-kind real estate. An opportunity fund takes only the gain, defers it for a limited time, and can eliminate tax on the new investment's appreciation after 10 years."
    },
    {
      q: "How much do I have to renovate a hotel I buy in an opportunity zone?",
      a: "Within 30 months, the fund must add more to the building's basis than its adjusted basis at the start, or more than 50 percent of it in a zone made up entirely of rural area. Land under an operating hotel generally is excluded."
    },
    {
      q: "What is a qualified rural opportunity fund?",
      a: "A fund holding at least 90 percent of its assets in zone property located in zones made up entirely of rural area, meaning outside any city or town of more than 50,000 people and adjacent urbanized areas. Its investors get a 30 percent basis increase at 5 years."
    },
    {
      q: "Will my hotel's census tract still be an opportunity zone in 2027?",
      a: "Not automatically. The 2018 zones run through December 31, 2028. New zones are being nominated under a narrower income test, with designations effective January 1, 2027. Check the Treasury list once it is published before relying on a tract."
    },
    {
      q: "Can a resort with a golf course or casino qualify?",
      a: "The statute excludes businesses listed in section 144(c)(6)(B), which include golf courses, country clubs, massage parlors, hot tub facilities and gambling facilities. A resort with those amenities needs tax counsel on how the business is structured."
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S.C. 1400Z-2, Special rules for capital gains invested in opportunity zones, with the Public Law 119-21 section 70421(c) amendments and effective dates",
      url: "https://www.law.cornell.edu/uscode/text/26/1400Z-2",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Rev. Proc. 2026-14, Internal Revenue Bulletin 2026-20 (May 11, 2026), p. 910: nominating census tracts as qualified opportunity zones effective January 1, 2027",
      url: "https://www.irs.gov/irb/2026-20_IRB",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Opportunity zones frequently asked questions (page last reviewed September 14, 2026): deferral, 10-year basis adjustment, original use, substantial improvement, hotel land example at Q51",
      url: "https://www.irs.gov/credits-deductions/opportunity-zones-frequently-asked-questions",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Opportunity zones (page last reviewed July 15, 2026)",
      url: "https://www.irs.gov/credits-deductions/businesses/opportunity-zones",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "26 U.S.C. 1400Z-1, Designation: low-income community definition, decennial determination date, 25 percent limit, designation period",
      url: "https://www.law.cornell.edu/uscode/text/26/1400Z-1",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "26 U.S.C. 144(c)(6)(B), businesses excluded by cross-reference from qualified opportunity zone businesses",
      url: "https://www.law.cornell.edu/uscode/text/26/144",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/1031-exchange-hotels",
      "/hotel-financing/historic-tax-credits",
      "/hotel-financing/eb-5-financing",
      "/hotel-financing/construction-loans",
      "/hotel-financing/refinance-or-sell"
    ],
    glossary: [
      "/glossary/cap-rate",
      "/glossary/pip",
      "/glossary/noi"
    ],
    data: [
      "/rates",
      "/tools/refinance-vs-sell",
      "/tools/hotel-value-estimator"
    ]
  },
  cta: {
    label: "Talk through selling or financing your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets does not run opportunity zone funds or give tax advice. It sells hotels, represents hotel buyers and arranges hotel financing, and your CPA decides how a gain is reinvested."
};

export default page;
