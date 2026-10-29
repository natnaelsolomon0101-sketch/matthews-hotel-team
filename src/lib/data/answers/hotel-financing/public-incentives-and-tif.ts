/**
 * Can a hotel project get a TIF or another public subsidy?
 * Answer page: /hotel-financing/public-incentives-and-tif
 *
 * Written 2026-10-29 from 26 U.S.C. 141, 142, 144 and 147 on Cornell LII;
 * 26 CFR 1.141-3 on Cornell LII; Rev. Proc. 2017-13 read as the IRS PDF;
 * IRS Publication 4078 (Rev. 1-2026); RSMo 99.805, 99.810 and 99.845 and
 * section 137.115 from the Missouri Revisor; Minn. Stat. 469.174 and 469.176
 * from the Minnesota Revisor; and the Missouri Department of Revenue's 2025
 * annual report on local tax increment financing, dated January 30, 2026,
 * whose 354 project pages were parsed in this run. All read that day.
 * Not tax, legal or municipal advice.
 *
 * Every figure recomputed by scripts/check-tif-math.mjs.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "public-incentives-and-tif",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel TIF and Public Incentives: What Cities Fund",
  h1: "Can a hotel project get a TIF or another public subsidy?",
  description:
    "Why tax-exempt bonds shut lodging out, the one bond that can reach a hotel, what two state TIF statutes say, and 8 Missouri hotel TIFs with real numbers.",
  lastUpdated: "2026-10-29",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can a hotel project get tax increment financing?",
    "Can a hotel be financed with tax-exempt bonds?",
    "How much of a hotel project will a TIF pay for?",
    "What public incentives are available for a hotel development?",
    "Does a city-owned convention hotel affect the management agreement?",
    "Does hotel occupancy tax feed a TIF district?",
    "Can a hotel get a TIF in Minnesota?",
    "What is a qualified redevelopment bond?"
  ],
  answer:
    "Sometimes, but almost never with tax-exempt bonds. A privately owned hotel's bonds are private activity bonds and cannot be qualified bonds, because the exempt facility list in section 142(a) runs to 17 categories and lodging is not one.[1][2] Tax increment financing is the usual route, and state law sets it. Missouri's report of January 30, 2026 shows 8 of 354 TIF project pages named for a hotel.[3]",
  takeaways: [
    "A private hotel fails the private business tests on the first dollar, and no qualified bond category covers lodging, so its municipal debt is taxable.[1][2]",
    "One tax-exempt bond can reach a hotel: a qualified redevelopment bond, secured by the property tax increment in a designated blighted area. It cannot pay for new construction.[4]",
    "If the city owns the hotel, the management agreement becomes a bond document. A fee taking account of both revenues and expenses is a share of net profits and fails the safe harbor.[5]",
    "State law decides it. Missouri allows a hotel TIF but excludes the hotel's own sleeping-room tax from the capture; Minnesota allows one only in a city of 20,000 people or fewer.[6][7][8][9]",
    "Published Missouri figures put the TIF-reimbursable share of total project cost on the 8 hotel-named plans between 6.2 percent and 79.8 percent, so there is no typical subsidy to quote.[3]"
  ],
  sections: [
    {
      h2: "Why can't a hotel be financed with tax-exempt bonds?",
      lead:
        "Because lodging is not on the list. A privately owned hotel fails the private business tests immediately, and no category of qualified bond describes a hotel.",
      body:
        "An issue is a private activity bond when more than 10 percent of the proceeds go to private business use and more than 10 percent of the debt service is secured by or paid from that use.[1] Private business use means use in a trade or business carried on by anyone other than a governmental unit, and the thresholds fall to 5 percent, with a $15,000,000 ceiling on certain output facilities, where the private use is unrelated to the government use.[1] A privately owned hotel meets all of that on the first dollar.\n\nThat leaves the qualified bond categories. The statute names seven, and only two could describe a commercial building: the exempt facility bond and the qualified redevelopment bond.[1] The exempt facility route is a closed list: section 142(a) names 17 categories, from airports and docks through water, sewage, solid waste and rail to broadband and carbon dioxide capture. Qualified residential rental projects are the only one that houses anyone; lodging is absent, and the IRS's own 2026 publication on qualified private activity bonds prints the same list.[10]"
    },
    {
      h2: "Is there any tax-exempt bond a hotel can use?",
      lead:
        "One: a qualified redevelopment bond, which is tax increment financing written into the Internal Revenue Code. It cannot pay for new construction.",
      body:
        "A qualified redevelopment bond is an issue 95 percent or more of whose net proceeds go to redevelopment purposes in a designated blighted area.[4] Four limits decide whether a hotel fits.\n\nThe area. A local governing body designates it blighted on factors such as vacant land, abandoned buildings and delinquent taxes. It must be contiguous and compact and at least 100 acres, or 10 acres where no more than 25 percent of the financed area goes to one person, and all such designations together cannot exceed 20 percent of the assessed value of real property in the jurisdiction.[4]\n\nThe security. Debt service must be primarily secured by taxes of general applicability, or by the increase in real property tax revenue reserved exclusively for it, which is a tax increment written into the Code.[4]\n\nThe work. Redevelopment purposes means acquiring real property through a governmental unit with eminent domain power, clearing and preparing the land it acquired, rehabilitating real property it acquired, and relocating occupants.[4] Then the sentence that ends most hotel projects: redevelopment purposes does not include the construction, other than the rehabilitation, of any property or the enlargement of an existing building.[4] A ground-up hotel is out; a conversion of a vacant downtown building is the fact pattern the section is written for.\n\nThe uses. No portion of the proceeds may provide a golf course, country club, massage parlor, hot tub or suntan facility, racetrack or other gambling facility, or a store whose principal business is off-premises alcohol sales.[4] A resort that will run its own golf course is operating one of those; a hotel bar is not. No more than 25 percent of net proceeds may go to a facility described in section 147(e), which covers a health club, so a fitness room sits well inside it.[4][11] And property the government buys with proceeds and sells on has to go at fair market value.[4]"
    },
    {
      h2: "What changes if the city owns the hotel?",
      lead:
        "The management agreement becomes a bond document. A fee that takes account of both revenues and expenses is a share of net profits, and that is private business use.",
      body:
        "A government can own a hotel and still issue ordinary tax-exempt governmental bonds, as long as private business use stays under the 10 percent line.[1] A management contract is one of the arrangements that creates it, judged on all the facts and circumstances, with one clear trigger: compensation based in whole or in part on a share of net profits from the operation of the facility.[12] Since January 17, 2017, Rev. Proc. 2017-13 has set the safe harbor that keeps a contract out of that.[5]\n\nIts conditions run together. Compensation must be reasonable, and no element of the fee, meaning eligibility, amount or timing, may take into account net profits or both revenues and expenses, apart from reimbursed direct expenses paid to unrelated parties. The provider must not bear net losses, claim depreciation or rent, or hold more than 20 percent of the voting power of the government's governing body. The term, renewal options included, cannot exceed the lesser of 30 years or 80 percent of the property's weighted average economic life. The government must approve the annual budget, capital expenditures, each disposition, the rates charged and the type of use, and must bear the risk of loss.[5]\n\nTwo of those bite on a hotel. A base fee set as a percentage of gross revenues takes revenue into account and not expenses, so it stays outside the net profits definition. An incentive fee measured on gross operating profit, or on net operating income after a priority return, takes both into account, which is what the safe harbor forbids unless it is rebuilt as incentive compensation whose eligibility turns on a standard measuring quality of service, performance or productivity.[5] The measure is at [gross operating profit](/glossary/gop), the fee structures at [How do hotel management agreements work?](/hotel-industry/hotel-management-agreements).\n\nThe other is rate approval. The revenue procedure's own illustration of acceptable approval is a government approving a methodology, such as one that establishes hotel room rates using specified revenue goals based on comparable properties.[5] The IRS wrote that example about hotel room rates, so revenue management at a publicly owned hotel runs inside an approved method, against a [comp set](/glossary/comp-set)."
    },
    {
      h2: "Does state law let a city put a TIF on a hotel?",
      lead:
        "Sometimes, and the answer sits in the state's own statute. Missouri allows it and keeps the hotel's room tax out of the capture. Minnesota allows it only outside its larger cities.",
      body:
        "Missouri's act divides the taxes on a redevelopment project. Tax on the certified initial assessed value keeps flowing to the taxing districts. Payments in lieu of taxes attributable to the increase above that value go to the municipal treasurer and into a Special Allocation Fund that pays redevelopment costs, and for projects approved by ordinance after August 31, 1991, 50 percent of the additional revenue from taxes generated by economic activity in the area goes into the same fund.[6] The plan has to state dates for completion and for retirement of the obligations, and they cannot be more than 23 years from the ordinance approving the project.[13]\n\nNow the part written for hotels. Both the definition of economic activity taxes and the 50 percent provision exclude taxes imposed on sales or charges for sleeping rooms paid by transient guests of hotels and motels.[6][7] A hotel in a Missouri TIF contributes its property tax increment in full and contributes nothing from the tax on the thing it mostly sells. For a limited-service hotel, the economic activity half is close to nothing, and the arithmetic below sizes that gap.\n\nMinnesota answers by geography. In an economic development district, tax increment may not assist a development if more than 15 percent of the buildings and facilities, by square footage, are used for anything outside a short permitted list, and tourism facilities is the fifth item on it.[8] A hotel is a tourism facility only if it is in a county whose median income is no more than 85 percent of the state median, in development region 1, 2, 3, 4, 5 or 7E, and not in a city with a population over 20,000.[9] All of those must hold at once, so the first thing to ask a development authority is which section of the state code it is working from."
    },
    {
      h2: "How much of a hotel project does a TIF actually pay for?",
      lead:
        "On published Missouri figures, between 6.2 percent and 79.8 percent of total project cost, with a median of 26.7 percent across eight plans.",
      body:
        "Missouri requires every municipality to report on each live plan by November 15, and the Department of Revenue publishes the file.[14] The 2025 edition, dated January 30, 2026, reports 355 projects in its summary, from 84 municipalities, with $3,694,284,956 of payments in lieu of taxes and economic activity taxes received since inception. Its project pages carry 354 blocks, counted four independent ways, so summary and detail disagree by one project; the table works from the 354 present.[3]\n\nEight of those plans carry a hotel or a lodging brand in the name. The report has no use or industry field, so a hotel inside a larger mixed-use plan appears in no count, and eight is a floor.[3] Anticipated TIF-reimbursable costs run from $424,000 on the Holiday Inn Express plan in Sikeston to $197,642,748 on the Kansas City Convention Headquarters Hotel. Across the eight, $231,561,577 of TIF-reimbursable cost sits against $439,844,982 of anticipated total project cost, which is 52.6 percent in aggregate and is dominated by that one project.[3]\n\nTwo details matter more than the range. Six of the eight are pay as you go, reimbursing eligible costs out of the fund as increment arrives rather than paying at closing; one uses TIF notes and one another bond.[3] And the Sikeston plan, the only one named for a limited-service brand, reports $425,879.83 of payments in lieu of taxes since inception and $0.00 of economic activity taxes, while the downtown Kansas City and Columbia plans report millions of each.[3] The report explains no single figure, and a plan can also simply not capture economic activity taxes. But a rooms-only hotel is the shape the sleeping-room exclusion hits hardest."
    },
    {
      h2: "What does nobody publish?",
      lead:
        "Whether a city will say yes, what it will give, and how many hotels have used any of this nationally.",
      body:
        "No award size is published before a plan is adopted. A TIF is negotiated against a redevelopment plan and a cost-benefit analysis, so the number is an output of that negotiation, not of a schedule. Anyone quoting a typical hotel TIF percentage is quoting nothing: the eight Missouri plans above run from 6.2 percent to 79.8 percent of total project cost.[3] There is no national count of hotel TIFs either: reporting is state by state, and Missouri's file carries no industry field at all.[3]\n\nTwo things are published and worth reading. The state statute, because it can decide the question outright, as Minnesota's does.[8][9] And the municipality's own annual report on each existing plan, which Missouri requires to carry the revenue in the fund, the expenditures from it, the original and added assessed value, and the payments in lieu of taxes received and expended.[14] An owner can read what the last developer got.\n\nThis page explains rules. It is not tax, legal or municipal advice, and a project depending on public money needs bond counsel from the first budget."
    }
  ],
  table: {
    caption:
      "Hotel-named tax increment financing plans in Missouri's 2025 annual report, dated January 30, 2026",
    columns: [
      "Plan, municipality",
      "Anticipated TIF-reimbursable cost",
      "Anticipated total project cost",
      "TIF share of total"
    ],
    rows: [
      ["Holiday Inn Express, Sikeston", "$424,000", "$6,800,000", "6.2%"],
      ["12th and Wyandotte TIF/Aladdin Hotel, Kansas City", "$4,733,900", "$34,043,780", "13.9%"],
      ["Regency Hotel Redevelopment Plan and Project TIF, Columbia", "$3,200,000", "$20,300,000", "15.8%"],
      ["TIGER Hotel Redevelopment TIF, Columbia", "$1,785,000", "$8,925,000", "20.0%"],
      ["1200 Main/South Loop-President Hotel/Project 03a, Kansas City", "$15,233,400", "$45,589,563", "33.4%"],
      ["Third Street Hotel Development, St. Joseph", "$2,700,000", "$6,025,000", "44.8%"],
      ["Kansas City Convention Headquarters Hotel", "$197,642,748", "$310,843,132", "63.6%"],
      ["Hotel Phillips, Project B and C TIF Plan, Kansas City", "$5,842,529", "$7,318,507", "79.8%"],
      ["All eight plans", "$231,561,577", "$439,844,982", "52.6%"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet puts the 10-year Treasury at 5.29% and Prime at 7.00% as of September 30, 2026, and carries no public-incentive row, because what a city will contribute to a hotel project is negotiated against a redevelopment plan and is not published anywhere before it is approved.[15]"
  },
  workedExample: {
    label:
      "Hypothetical: a 110-key hotel in a Missouri redevelopment area, 23-year capture",
    body:
      "This hotel does not exist. The $18,000,000 project cost, the 110 keys, the $15,000,000 true value after completion, the $600,000 value of the vacant site, the $6.50 per $100 levy, the $900,000 of food, beverage and parking sales at 3.0 percent, the $2,600,000 of room revenue and the 7 percent room tax are assumptions. The statutory rules applied to them are not.\n\nThe assessed values. Missouri assesses commercial real property, subclass (3), at 32 percent of true value.[16] $15,000,000 times 0.32 is $4,800,000 after completion, and $600,000 times 0.32 is $192,000 before, so the increase in assessed value is $4,608,000.\n\nThe payments in lieu of taxes. $4,608,000 of increment at $6.50 per $100 is $299,520 a year into the Special Allocation Fund.[6]\n\nThe economic activity taxes. Room charges are excluded by statute, so only the other taxable sales count.[6][7] $900,000 at 3.0 percent is $27,000 of local tax, and the fund gets 50 percent, which is $13,500 a year.[6]\n\nThe total. $299,520 plus $13,500 is $313,020 a year. Held for the statutory maximum of 23 years, undiscounted, that is $7,199,460, or 40.0 percent of the $18,000,000 project cost.[13] Discount it and it is less, and on a pay as you go plan it arrives only as increment is collected.\n\nThe size of the carve-out. $2,600,000 of room revenue at a 7 percent local room tax is $182,000 a year, and half of that would be $91,000, which is 6.7 times the $13,500 the fund actually receives from economic activity. The hotel's largest local tax contribution is the one the statute keeps out of the fund.[6][7]"
  },
  faq: [
    {
      q: "Can a privately owned hotel be financed with tax-exempt bonds?",
      a: "No. Its bonds are private activity bonds, and no qualified bond category covers lodging. The exempt facility list in section 142(a) has 17 entries and a hotel is not one of them.[1][2][10]"
    },
    {
      q: "What is a qualified redevelopment bond?",
      a: "A tax-exempt bond for redevelopment in a designated blighted area, secured by general taxes or by the real property tax increment. It can acquire, clear and rehabilitate property, but not build.[4]"
    },
    {
      q: "Does a TIF hand me money at closing?",
      a: "Usually not. Six of the eight hotel-named Missouri plans in the 2025 report are pay as you go, reimbursing eligible costs as increment arrives. One uses TIF notes and one another bond.[3]"
    },
    {
      q: "Does the hotel tax my guests pay feed the TIF?",
      a: "Not in Missouri. Taxes on sales or charges for sleeping rooms paid by transient guests of hotels and motels are excluded from economic activity taxes, so none of it reaches the Special Allocation Fund.[6][7]"
    },
    {
      q: "Can a hotel get tax increment financing in Minnesota?",
      a: "In an economic development district, only as a tourism facility: a county at 85 percent or less of state median income, development region 1 to 5 or 7E, and a city of 20,000 people or fewer.[8][9]"
    },
    {
      q: "If a city owns the hotel, can the brand still earn an incentive fee?",
      a: "Only if it is not a share of net profits. A fee taking account of both revenues and expenses fails the safe harbor. One whose eligibility turns on a performance standard can qualify.[5]"
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "26 U.S.C. 141, Private activity bond; qualified bond: the private business use test and private security or payment test at more than 10 percent of proceeds (subsection (b)(1) and (b)(2)), the 5 percent test and the $15,000,000 output facility ceiling (subsection (b)(3) and (b)(4)), the definition of private business use as use in a trade or business carried on by a person other than a governmental unit (subsection (b)(6)), and the seven qualified bond categories (subsection (e)(1))",
      url: "https://www.law.cornell.edu/uscode/text/26/141",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-29"
    },
    {
      n: 2,
      label:
        "26 U.S.C. 142, Exempt facility bond: subsection (a), the closed list of 17 categories of facility an exempt facility bond may finance, which does not include lodging, and subsection (b)(1), the governmental ownership requirement for airports, docks and wharves, mass commuting facilities and hydroelectric enhancements",
      url: "https://www.law.cornell.edu/uscode/text/26/142",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-29"
    },
    {
      n: 3,
      label:
        "Tax Increment Financing in Missouri: Local TIF Project Information and Financial Data, 2025 Annual Report Summary, dated January 30, 2026: 355 projects reporting and 84 municipalities in the summary, $3,694,284,956 of payments in lieu of taxes and economic activity taxes received since inception, and the project pages, of which 354 are present and 8 carry a hotel or lodging brand in the plan name, with their anticipated TIF-reimbursable and total project costs, financing methods and amounts received since inception recomputed from the file in this run",
      url: "https://dor.mo.gov/taxation/business/tax-types/sales-use/local-increment-financing/documents/2025-Local-Tax-Increment-Financing.pdf",
      publisher: "Missouri Department of Revenue",
      accessed: "2026-10-29"
    },
    {
      n: 4,
      label:
        "26 U.S.C. 144(c), Qualified redevelopment bond: the 95 percent net proceeds test (paragraph (1)), the state law, redevelopment plan, tax security and fair market value transfer requirements (paragraph (2)), the definition of redevelopment purposes and the exclusion of construction other than rehabilitation and of enlargement of an existing building (paragraph (3)), the designated blighted area, 20 percent of assessed value and 100-acre or 10-acre tests (paragraph (4)), and the use of proceeds requirements including the 25 percent limit on section 147(e) facilities and the absolute exclusion of golf courses, country clubs, massage parlors, hot tub and suntan facilities, racetracks and gambling facilities and off-premises liquor stores (paragraph (6))",
      url: "https://www.law.cornell.edu/uscode/text/26/144",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-29"
    },
    {
      n: 5,
      label:
        "Rev. Proc. 2017-13, 2017-6 I.R.B. 787: the safe harbor conditions under which a management contract does not result in private business use, namely reasonable compensation, no net profits arrangement and the rule that no element of compensation may take into account net profits or both revenues and expenses (section 5.02), no bearing of net losses (section 5.02(3)), the lesser of 30 years or 80 percent of economic life (section 5.03), the control requirement including approval of the annual budget, capital expenditures, dispositions and rates, with the illustration of a method establishing hotel room rates using specified revenue goals based on comparable properties (section 5.04), risk of loss (section 5.05), no inconsistent tax position (section 5.06), the 20 percent governing body and shared chief executive limits (section 5.07), and the January 17, 2017 date of applicability (section 7)",
      url: "https://www.irs.gov/pub/irs-drop/rp-17-13.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-29"
    },
    {
      n: 6,
      label:
        "RSMo 99.845, Tax increment financing adoption: the division of ad valorem taxes, with the portion attributable to the certified initial equalized assessed value going to the taxing districts and payments in lieu of taxes attributable to the increase going to the Special Allocation Fund (subsection 1(1) and 1(2)(a)), and 50 percent of the additional revenue from taxes generated by economic activity for projects approved by ordinance after August 31, 1991, excluding personal property taxes and taxes imposed on sales or charges for sleeping rooms paid by transient guests of hotels and motels (subsection 3)",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=99.845",
      publisher: "Missouri Revisor of Statutes",
      accessed: "2026-10-29"
    },
    {
      n: 7,
      label:
        "RSMo 99.805(4), the definition of economic activity taxes for the Real Property Tax Increment Allocation Redevelopment Act, which excludes personal property taxes and taxes imposed on sales or charges for sleeping rooms paid by transient guests of hotels and motels",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=99.805",
      publisher: "Missouri Revisor of Statutes",
      accessed: "2026-10-29"
    },
    {
      n: 8,
      label:
        "Minn. Stat. 469.176, subdivision 4c(a): revenue from tax increment in an economic development district may not assist developments if more than 15 percent of the buildings and facilities, determined on the basis of square footage, are used for a purpose other than the listed ones, which are manufacturing or production, warehousing and distribution excluding retail sales, related research and development, exclusive telemarketing, tourism facilities, related space and qualifying workforce housing",
      url: "https://www.revisor.mn.gov/statutes/cite/469.176",
      publisher: "Minnesota Office of the Revisor of Statutes",
      accessed: "2026-10-29"
    },
    {
      n: 9,
      label:
        "Minn. Stat. 469.174, subdivision 22, the definition of tourism facility: property in a county whose median income is no more than 85 percent of the state median income, in a county in development region 1, 2, 3, 4, 5 or 7E as defined in section 462.385, not in a city with a population in excess of 20,000, and acquired, constructed or rehabilitated for use as a privately owned convention and meeting facility, marina, hotel, motel, lodging facility or nonhomestead dwelling unit intended to serve primarily individuals from outside the county",
      url: "https://www.revisor.mn.gov/statutes/cite/469.174",
      publisher: "Minnesota Office of the Revisor of Statutes",
      accessed: "2026-10-29"
    },
    {
      n: 10,
      label:
        "IRS Publication 4078, Tax-Exempt Private Activity Bonds (Rev. 1-2026): the overview of the qualified private activity bond rules and the chart of exempt facility categories under section 142, which lists no lodging category",
      url: "https://www.irs.gov/pub/irs-pdf/p4078.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-29"
    },
    {
      n: 11,
      label:
        "26 U.S.C. 147(e): a private activity bond is not a qualified bond if any portion of the proceeds provides an airplane, a skybox or other private luxury box, a health club facility, a facility primarily used for gambling, or a store whose principal business is the sale of alcoholic beverages for consumption off premises",
      url: "https://www.law.cornell.edu/uscode/text/26/147",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-29"
    },
    {
      n: 12,
      label:
        "26 CFR 1.141-3(b)(4): a management contract with respect to financed property may result in private business use based on all the facts and circumstances, and generally does where compensation for services is based in whole or in part on a share of net profits from the operation of the facility; paragraph (b)(4)(ii) defines a management contract and (b)(4)(iii) lists arrangements not treated as one",
      url: "https://www.law.cornell.edu/cfr/text/26/1.141-3",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-29"
    },
    {
      n: 13,
      label:
        "RSMo 99.810.1(3): a redevelopment plan must state estimated dates of completion of any redevelopment project and retirement of obligations incurred to finance redevelopment project costs, which shall not be more than 23 years from the adoption of the ordinance approving a redevelopment project within a redevelopment area",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=99.810",
      publisher: "Missouri Revisor of Statutes",
      accessed: "2026-10-29"
    },
    {
      n: 14,
      label:
        "RSMo 99.865, Report by municipalities: no later than November 15 of each year the governing body of the municipality, or its designee, prepares a report on the status of each redevelopment plan and project existing as of December 31 of the preceding year and submits it to the director of the Department of Revenue, including the amount and source of revenue in the special allocation fund, the amount and purpose of expenditures from it, pledged revenues, the original assessed value, the assessed valuation added, and payments in lieu of taxes received and expended",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=99.865",
      publisher: "Missouri Revisor of Statutes",
      accessed: "2026-10-29"
    },
    {
      n: 15,
      label: "Matthews Hotel Markets October 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-29"
    },
    {
      n: 16,
      label:
        "RSMo 137.115.5(1)(c): real property in subclass (3), which is commercial real property, is assessed at 32 percent of true value, against 19 percent for subclass (1) and 12 percent for subclass (2)",
      url: "https://revisor.mo.gov/main/OneSection.aspx?section=137.115",
      publisher: "Missouri Revisor of Statutes",
      accessed: "2026-10-29"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/historic-tax-credits",
      "/hotel-financing/new-markets-tax-credits",
      "/hotel-financing/opportunity-zones",
      "/hotel-financing/c-pace-financing",
      "/hotel-financing/construction-loans",
      "/hotel-financing/capital-stack",
      "/hotel-financing/brand-conversion-financing"
    ],
    glossary: [
      "/glossary/gop",
      "/glossary/comp-set",
      "/glossary/noi"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk to the capital markets desk",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets reads the statute and the city's own annual report before anyone budgets a public contribution, because a hotel that needs a subsidy to pencil is a hotel whose value depends on a vote."
};

export default page;
