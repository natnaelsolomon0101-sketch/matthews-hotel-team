/**
 * How do I appeal my hotel's property tax assessment?
 * Answer page: /hotel-valuation/property-tax-appeal
 *
 * Written 2026-09-18. State primary sources fetched and read that day: Texas
 * Comptroller, Florida Department of Revenue and Florida Statutes, California
 * State Board of Equalization and Revenue and Taxation Code, and the California
 * Supreme Court's 2025 hotel assessment opinion. Worked example arithmetic
 * checked by script. Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "property-tax-appeal",
  cluster: "hotel-valuation",
  isHub: false,
  title: "How to Appeal a Hotel Property Tax Assessment",
  h1: "How do I appeal my hotel's property tax assessment?",
  description: "Hotel property tax appeals in Texas, Florida and California: deadlines, where to file, and how to separate the taxable real estate from the business.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I value a hotel?",
    "What is going-concern value for a hotel?",
    "How do I appeal my hotel's property tax assessment?",
    "My hotel's assessed value jumped after I bought it. Can I protest it?",
    "Is my hotel's franchise and business value subject to property tax?",
    "What is the deadline to protest commercial property taxes in Texas?",
    "I own a hotel in Florida and my TRIM notice value is too high. What do I do?"
  ],
  answer: "File with the local review board before the deadline, then prove a lower value for the real estate alone. Texas protests are due by May 15 or 30 days after the notice is mailed, whichever is later.[1] Florida petitions are due within 25 days of the TRIM notice mailing.[2] California's 2026 filing window runs July 2 to September 15 or November 30, depending on the county.[3]",
  takeaways: [
    "The deadline is short and it is set by statute. Miss it and you may lose the right to protest that year's value.[1] Calendar the notice date, not the tax bill date.",
    "A hotel sells as a going concern: real estate, furniture and equipment, and a business. Property tax reaches the real estate and, where the state taxes it, the tangible personal property. How the business is removed differs by state.",
    "California law says intangible assets and rights relating to going-concern value shall not enhance the value of taxable property.[4] In August 2025 the California Supreme Court held that deducting the management fee does not by itself prove those intangibles were removed.[5]",
    "Florida requires the appraiser to exclude the part of a sale price paid for personal property when a sale is used to value the realty.[6]",
    "Your best evidence is the hotel's own trailing income and expenses. A lower assessment is recurring, so the saving is worth a multiple of one year's tax."
  ],
  sections: [
    {
      h2: "When is the deadline to protest my hotel's assessment?",
      lead: "The deadline runs from the date the assessor mails the value notice, and it is weeks, not months.",
      body: "Texas. The appraisal district sends a notice of appraised value, by May 1 or as soon as practical after. The usual protest deadline is May 15 or 30 days after the appraisal district mails the notice, whichever is later. The Comptroller's guidance stresses that the 30 days run from mailing, not from delivery. You file Form 50-132 with the appraisal review board (ARB).[1]\n\nFlorida. A petition on value goes to the county value adjustment board (VAB) within 25 days after the property appraiser mails the Notice of Proposed Property Taxes, called the TRIM notice, usually in mid-August.[2] The statute says the same: on or before the 25th day following the mailing of the notice.[7] The VAB may charge up to $50 to file.[2]\n\nCalifornia. For a regular appeal of the January 1 value, the 2026 filing period began July 2 and ends September 15 in counties where the assessor mailed value notices to all secured-roll owners by August 1, and November 30 in the others. The Board of Equalization publishes the list by county.[3] If the value came from a supplemental or escape assessment, such as the reassessment after you bought the hotel, you have 60 days from the mailing of that notice.[8]\n\nOther states have their own calendars. The first step anywhere is to read the notice and find the date."
    },
    {
      h2: "What is the process once I file?",
      lead: "An informal meeting with the assessor's staff comes first, then a hearing before a local board, then a further appeal to a court or an arbitrator if you still disagree.",
      body: "Texas. You can ask for an informal conference with the appraisal district before the ARB hearing. The ARB must give at least 15 days' notice of the hearing. After the ARB's written order you have 60 days to file in state district court, and the Tax Code requires a partial payment, usually the taxes not in dispute, before the delinquency date. If the ARB value is over $1 million, you may instead appeal to the State Office of Administrative Hearings by filing notice within 30 days and a $1,500 deposit within 90 days. Regular binding arbitration is available only for property valued at $5 million or less. Commercial property appraised at $62,883,169 or more in 2026 can ask for a special ARB panel.[1]\n\nFlorida. You may request an informal conference with the property appraiser and file a VAB petition at the same time. The VAB notifies you of the hearing 25 days ahead, and you give your evidence to the appraiser 15 days before the hearing. You must still pay all non-ad valorem assessments and at least 75 percent of the ad valorem taxes before they become delinquent, or the VAB must deny the petition. After the VAB decision you can sue in circuit court.[2]\n\nCalifornia. The Board of Equalization tells owners to talk to the assessor's staff first, then file an Assessment Appeal Application with the county clerk of the board. The law allows up to two years for the appeal to be resolved, notice of the hearing is mailed at least 45 days ahead, and you must keep paying the tax bills on time while you wait. A reduction comes back as a refund with interest. For a commercial property the applicant generally carries the burden of proof and presents first, except in listed situations such as when the assessor did not enroll a purchase price.[8]"
    },
    {
      h2: "Is the whole value of my hotel taxable?",
      lead: "No. Property tax is a tax on property, and a hotel's price also includes a business. How much of the business comes out of the assessment depends on the state.",
      body: "Appraisers call the total value of an operating hotel its going-concern value. It bundles real property, tangible personal property such as furniture and equipment, and intangibles such as the franchise, the workforce and goodwill. The term is defined at [Going-Concern Value](/glossary/going-concern-value).\n\nCalifornia is the most explicit. The Revenue and Taxation Code says the value of intangible assets and rights relating to the going-concern value of a business using taxable property shall not enhance or be reflected in the value of the taxable property, although property may be valued by assuming the presence of intangibles necessary to put it to productive use.[4]\n\nThe California Supreme Court applied that to a hotel on August 28, 2025, in Olympic and Georgia Partners v. County of Los Angeles. The opinion notes that hotels are typically assessed by capitalizing income. It held that the assessor could include two income items, a city occupancy tax rebate and the key money the management company paid the owner, because both were income from the use of the property itself. But the county did not dispute that the brand's customer goodwill, the food and beverage operation and the assembled workforce were nontaxable, and the court affirmed that the county had not shown that deducting the management fee captured their full value. That issue went back to the assessment appeals board.[5] For an owner, the lesson is that a management or franchise fee deduction is an argument the assessor must support with evidence, and so is your claim for a larger deduction.\n\nFlorida's statute lists eight factors the appraiser must consider, including the income from the property. When a sale price is used to value realty, the appraiser must exclude any portion of the net proceeds attributable to personal property.[6]\n\nTexas requires appraisal at market value as of January 1, and the Comptroller describes the income approach as suited to property bought and held to produce income.[9] Separating hotel business value in Texas is argued case by case, so use a Texas property tax consultant or attorney."
    },
    {
      h2: "What evidence wins a hotel property tax appeal?",
      lead: "The hotel's own income and expense history, presented as a real estate income approach, with the business and the personal property taken out where state law allows.",
      body: "Boards see residential comparables all day. A hotel case is different because the assessor usually values a hotel on income. Bring the last three years of profit and loss statements in the industry's uniform format, the trailing twelve months, the STR report showing how the hotel performs against its competitive set, and the capital plan or PIP that shows what the building needs.\n\nThen show the math. Start with stabilized net operating income after a management fee, franchise fees and a reserve for replacing furniture and equipment. Capitalize it. Deduct the personal property if it is assessed separately. In a state that excludes business intangibles, make and support that deduction too. The income approach is walked through at `/hotel-valuation/how-to-value-a-hotel`, and you can test cap rate assumptions with `/tools/hotel-value-estimator`.\n\nA recent appraisal helps, but check its premise of value. A lender's hotel appraisal may report going-concern value and allocate it among real property, personal property and intangibles. The allocation is the part a tax board cares about.\n\nIn California, comparable sales can be from any time before the valuation date, but an appeals board may not consider sales more than 90 days after it.[8]"
    },
    {
      h2: "I just bought the hotel. Will the purchase price become my assessment?",
      lead: "In California, generally yes for the real property. In other states the price is strong evidence. In both cases the purchase price allocation matters.",
      body: "California presumes that the purchase price in an arm's-length deal is the fair market value of the real property. The same statute says that when a transaction includes property other than real property, the change in ownership statement must disclose the portion of the price allocable to each element, and that the presumption does not apply if the buyer fails to provide the required information.[4] A hotel purchase always includes property other than real estate, so a documented allocation among real estate, furniture and equipment, and intangibles should be done at closing, not at the appeal.\n\nThe same allocation drives the buyer's depreciation and the seller's tax, so the parties already have a reason to agree on it. See `/sell-a-hotel/taxes-when-selling-a-hotel`.\n\nIn Texas, smaller properties get some protection from jumps. The Comptroller describes a circuit breaker that limits annual appraised value increases to 20 percent for real property that is not a homestead and is valued at $5,320,000 or less.[9]\n\nBuyers should also underwrite the reassessment before they bid. A hotel priced on the seller's old tax bill will miss its first-year budget. That check belongs in the list at `/buy-a-hotel/due-diligence-checklist`."
    },
    {
      h2: "Is a property tax appeal worth the cost?",
      lead: "Usually yes when the evidence supports a lower value, because the saving repeats every year and raises the hotel's value.",
      body: "Property tax is an operating expense above net operating income. Every dollar saved falls to NOI, and NOI is what buyers and lenders capitalize. The Matthews Hotel Index for Q1 2026 puts select-service cap rates at 7.50 to 8.75 percent across 14 markets.[10] At those rates a recurring $10,000 tax saving is worth roughly $114,000 to $133,000 of value.\n\nThe costs are the filing fee, your time, and a consultant or attorney if you use one. Some property tax consultants work for a share of the saving. Ask how the fee is calculated and whether it applies to later years.\n\nTwo cautions. An appeal opens the file. In California an appeals board can leave the value the same, decrease it or increase it, and it is not bound by either side's number.[8] And a lower assessment today does not bind a future buyer's assessment in a state that reassesses on sale."
    }
  ],
  table: {
    caption: "Hotel property tax appeals in three states, as of September 18, 2026",
    columns: [
      "",
      "Texas",
      "Florida",
      "California"
    ],
    rows: [
      [
        "Where you file",
        "Appraisal review board (ARB), Form 50-132[1]",
        "County value adjustment board (VAB)[2]",
        "County assessment appeals board, via the clerk of the board[8]"
      ],
      [
        "Deadline on value",
        "May 15 or 30 days after the notice is mailed, whichever is later[1]",
        "25 days after the TRIM notice is mailed, usually mid-August[2]",
        "July 2 to September 15 or November 30, 2026, by county; 60 days for supplemental or escape assessments[3][8]"
      ],
      [
        "Pay while you appeal?",
        "For a court appeal, a partial payment, usually the undisputed tax, before the delinquency date[1]",
        "All non-ad valorem assessments plus at least 75% of ad valorem taxes[2]",
        "Yes, on time; a reduction is refunded with interest[8]"
      ],
      [
        "Next step after the board",
        "District court within 60 days; SOAH over $1 million; binding arbitration at $5 million or less[1]",
        "Circuit court[2]",
        "County superior court[8]"
      ],
      [
        "Business value rule",
        "Market value as of January 1; income approach recognized[9]",
        "Eight statutory factors; personal property excluded from a sale price used to value realty[6]",
        "Intangible assets and rights shall not enhance taxable value[4]"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026, published by Matthews Hotel Markets, puts select-service cap rates at 7.50 to 8.75 percent across 14 markets.[10] That band is how a recurring tax saving converts into hotel value."
  },
  workedExample: {
    label: "Hypothetical: what a 12 percent assessment cut is worth",
    body: "Hypothetical. A 90-key hotel is assessed at $9,000,000. The combined local tax rate is assumed to be 2.30 percent, so the bill is $9,000,000 x 0.023 = $207,000.\n\nThe owner shows the board three years of financials and an income approach that supports $7,900,000 for the real estate. The board agrees. The cut is $1,100,000, or 12.2 percent.\n\nNew bill: $7,900,000 x 0.023 = $181,700. Annual saving: $207,000 - $181,700 = $25,300.\n\nValue of the saving. The $25,300 drops to NOI every year the lower value holds. Capitalized at an assumed 8.25 percent, inside the Matthews Hotel Index select-service band, it adds $25,300 / 0.0825 = $306,667 to what the hotel is worth.[10]\n\nThe tax rate, the values and the cap rate are assumptions for illustration. Your rate is on your tax bill, and the result depends on the evidence."
  },
  faq: [
    {
      q: "What is the deadline to protest my hotel's property taxes in Texas?",
      a: "Usually May 15, or 30 days after the appraisal district mails your notice of appraised value, whichever is later. The 30 days run from mailing, not delivery. File Form 50-132 with the appraisal review board.[1]"
    },
    {
      q: "How long do I have to appeal my hotel's TRIM notice value in Florida?",
      a: "25 days after the property appraiser mails the TRIM notice, which usually goes out in mid-August. File the petition with the county value adjustment board clerk. The board may charge up to $50.[2][7]"
    },
    {
      q: "When can I file an assessment appeal on a hotel in California?",
      a: "For 2026, from July 2 through September 15 or November 30, depending on your county.[3] If you are appealing a supplemental or escape assessment, such as the one after a purchase, you have 60 days from the notice.[8]"
    },
    {
      q: "Is my hotel's franchise or brand value subject to property tax?",
      a: "In California, no: intangible assets and rights relating to going-concern value shall not enhance taxable value.[4] The 2025 Olympic and Georgia Partners decision shows the fight is over how to measure them.[5] Other states differ, so ask local counsel."
    },
    {
      q: "My hotel's assessment jumped after I bought it. Can I fight it?",
      a: "Yes, within the deadline on the notice. Your strongest tool is a documented allocation of the purchase price among real estate, furniture and equipment, and intangibles. California's statute asks for that allocation on the change in ownership statement.[4]"
    },
    {
      q: "Do I still have to pay my property taxes during the appeal?",
      a: "Plan to. California says pay on time and a reduction is refunded with interest.[8] Florida requires all non-ad valorem assessments and at least 75 percent of ad valorem taxes before delinquency.[2] A Texas court appeal requires a partial payment.[1]"
    },
    {
      q: "Does a lower property tax assessment raise my hotel's value?",
      a: "Yes. Property tax is an operating expense, so a recurring saving raises NOI. At the 7.50 to 8.75 percent select-service cap rates in the Matthews Hotel Index, $10,000 a year is worth roughly $114,000 to $133,000.[10]"
    },
    {
      q: "Can I use my bank appraisal to appeal my hotel's assessment?",
      a: "It helps, but check what it values. A lender's hotel appraisal may report going-concern value, which includes furniture and the business. The board is valuing taxable property, so the allocation inside the appraisal matters more than the headline number."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Property Tax Protests and Appeals: ARB protests, deadlines, special panels, district court, SOAH and binding arbitration",
      url: "https://comptroller.texas.gov/taxes/property-tax/protests/",
      publisher: "Texas Comptroller of Public Accounts",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Petitions to the Value Adjustment Board (PT-101, revised August 2025)",
      url: "https://floridarevenue.com/property/Documents/pt101.pdf",
      publisher: "Florida Department of Revenue",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Letter to Assessors 2026/023, County Assessment Appeals Filing Period for 2026 (June 2, 2026)",
      url: "https://www.boe.ca.gov/proptaxes/pdf/lta26023.pdf",
      publisher: "California State Board of Equalization",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "California Revenue and Taxation Code section 110: fair market value, purchase price presumption and intangible assets",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=110.",
      publisher: "California Legislative Information",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Olympic and Georgia Partners, LLC v. County of Los Angeles, S280000 (Cal. Aug. 28, 2025)",
      url: "https://www.courts.ca.gov/opinions/archive/S280000.PDF",
      publisher: "Supreme Court of California",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Florida Statutes section 193.011, Factors to consider in deriving just valuation",
      url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0193/Sections/0193.011.html",
      publisher: "The Florida Legislature, Online Sunshine",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Florida Statutes section 194.011, Assessment notice; objections to assessments",
      url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0194/Sections/0194.011.html",
      publisher: "The Florida Legislature, Online Sunshine",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "Assessment Appeals Frequently Asked Questions",
      url: "https://www.boe.ca.gov/proptaxes/faqs/assessappeals.htm",
      publisher: "California State Board of Equalization",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "Valuing Property: market value, appraisal approaches and the circuit breaker limitation",
      url: "https://comptroller.texas.gov/taxes/property-tax/valuing-property.php",
      publisher: "Texas Comptroller of Public Accounts",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/appraisal-lower-than-expected",
      "/hotel-valuation/broker-opinion-of-value"
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/noi",
      "/glossary/cap-rate",
      "/glossary/key-money"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/tools/hotel-value-estimator",
      "/rates"
    ]
  },
  cta: {
    label: "Ask for a broker opinion of value",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets values hotels for owners who are deciding whether to sell, refinance or hold, and the same income analysis is the starting point for a tax appeal."
};

export default page;
