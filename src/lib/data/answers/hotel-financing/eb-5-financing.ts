/**
 * How does EB-5 financing work for a hotel?
 * Answer page: /hotel-financing/eb-5-financing
 *
 * Written 2026-09-18 from USCIS's EB-5 classification page (last reviewed
 * November 18, 2025), 8 U.S.C. 1153(b)(5) and the SEC/USCIS investor alert,
 * all read that day. Not immigration, securities or legal advice.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "eb-5-financing",
  cluster: "hotel-financing",
  isHub: false,
  title: "EB-5 Financing for Hotels: Rules After 2022",
  h1: "How does EB-5 financing work for a hotel?",
  description: "EB-5 capital in a hotel deal: $800,000 and $1,050,000 minimums, targeted employment areas, the 10-job rule, regional centers, key dates and the risks.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How does EB-5 financing work for a hotel?",
    "Can I raise EB-5 money to build a hotel?",
    "How many EB-5 investors do I need for a $12 million raise?",
    "What is a targeted employment area for EB-5?",
    "How many jobs does a hotel have to create per EB-5 investor?",
    "Is the EB-5 regional center program still authorized?",
    "What are the risks of using EB-5 capital in a hotel development?"
  ],
  answer: "EB-5 lets a foreign investor seek a green card by investing in a U.S. business that creates at least 10 full-time jobs. For petitions filed on or after March 15, 2022, the minimum is $1,050,000, or $800,000 in a targeted employment area.[1] Hotel developers usually pool investors through a USCIS-designated regional center, a program authorized through September 30, 2027.[1][2]",
  takeaways: [
    "Minimum investment: $1,050,000, or $800,000 in a targeted employment area or infrastructure project, for petitions filed on or after March 15, 2022. The first inflation adjustment applies to petitions filed on or after January 1, 2027.[1][2]",
    "Each investor must account for at least 10 full-time jobs. Through a regional center, up to 90 percent of those can be indirect jobs from an economic model, or up to 75 percent when construction lasts less than two years.[1][2]",
    "A targeted employment area is either rural or high-unemployment, and since 2022 only the Department of Homeland Security can designate a high-unemployment area.[1][2]",
    "The regional center program is authorized through September 30, 2027. The statute protects petitions filed on or before September 30, 2026 if the program lapses.[2]",
    "The investor's capital must stay at risk with no guaranteed return or repayment right. USCIS designation of a regional center is not an endorsement of any project.[1][3]"
  ],
  sections: [
    {
      h2: "What is EB-5, and why do hotel developers use it?",
      lead: "EB-5 is an immigrant visa category that Congress created in 1990 to bring in job-creating foreign capital, and hotel developers use it because building and staffing a hotel creates the jobs the program counts.",
      body: "USCIS administers the program. An investor puts the required capital into a new commercial enterprise, the enterprise creates at least 10 full-time jobs for qualifying U.S. workers, and the investor, spouse and children can obtain conditional permanent residence, then apply to remove the conditions after about two years.[1][3] The EB-5 Reform and Integrity Act, signed March 15, 2022 as part of Public Law 117-103, rewrote the rules for both the visa category and the regional center program.[1]\n\nFor a developer, EB-5 is a source of capital, not a lender. In a typical regional center structure the investors buy into a new commercial enterprise, often a fund, and the fund lends to or invests in the entity that builds the hotel. The SEC describes exactly that arrangement and warns investors that they may be investing in an enterprise with no assets that was set up to lend to a developer.[3] In the hotel's capital stack the EB-5 money usually sits behind the senior construction loan, in the position that [mezzanine debt](/glossary/mezzanine-debt) or preferred equity would otherwise fill. Senior lenders do not publish their terms for accepting it, so raise it with the construction lender early. See [How do I finance hotel construction in 2026?](/hotel-financing/construction-loans)"
    },
    {
      h2: "How much does each investor have to put in?",
      lead: "$1,050,000 as the standard minimum, or $800,000 when the project is in a targeted employment area or is an infrastructure project, for petitions filed on or after March 15, 2022.",
      body: "Before that date the minimums were $1,000,000 and $500,000.[1] The amounts are scheduled to change. USCIS says future adjustments are tied to the Consumer Price Index for All Urban Consumers measured from March 15, 2022, happen every five years, and first take effect for petitions filed on or after January 1, 2027.[1] The statute sets the reduced amount at 75 percent of the standard amount at each adjustment.[2] A raise that will still be open in 2027 should plan for a higher figure per investor. USCIS had not replaced the amounts on the page we read, which was last reviewed November 18, 2025.[1]\n\nCapital means cash and other tangible assets the investor owns and controls, valued at fair market value. It does not include money invested in exchange for a note, bond or other debt arrangement between the investor and the enterprise, and the investor cannot hold a contractual right to repayment.[1] The statute also expects the capital to stay invested for not less than two years.[2] Those rules are why EB-5 offerings are structured as equity in the fund, even when the fund then makes a loan to the hotel."
    },
    {
      h2: "What is a targeted employment area, and does my hotel site qualify?",
      lead: "A targeted employment area is, at the time of investment, either a rural area or an area with unemployment of at least 150 percent of the national average.",
      body: "Rural for EB-5 means outside any metropolitan statistical area and outside the outer boundary of any city or town with a population of 20,000 or more, based on the most recent decennial census.[1] That is a different and tighter test than the 50,000-person line USDA uses for its loan guarantees, covered in [Can I get a USDA B&I loan for a hotel?](/hotel-financing/usda-b-and-i-loans)\n\nA high-unemployment area is the census tract, or contiguous tracts, where the enterprise is principally doing business, optionally with directly adjacent tracts, if the weighted average unemployment rate is at least 150 percent of the national average.[1] Since the 2022 law, only the Secretary of Homeland Security or a DHS designee can make that designation. State and local officials cannot.[2]\n\nLocation also affects visa availability, which affects how fast investors commit. Each fiscal year 20 percent of EB-5 visas are reserved for rural investments, 10 percent for high-unemployment areas and 2 percent for infrastructure projects.[1][2] A rural hotel site therefore offers investors both the lower minimum and the largest reserved pool."
    },
    {
      h2: "How many jobs does the hotel have to create?",
      lead: "At least 10 full-time jobs per investor, so a raise from 15 investors has to support 150 jobs.",
      body: "Full-time means at least 35 working hours a week. Qualifying employees are U.S. citizens, permanent residents and other immigrants authorized to work, not the investor or the investor's family. Intermittent, temporary, seasonal and transient jobs do not count, though USCIS generally does not treat a job expected to last at least two years that way.[1]\n\nA stand-alone investor has to show direct jobs: the enterprise itself must be the employer.[1] A regional center project can count indirect jobs estimated with an economic model, and that is what makes a hotel raise workable. Up to 90 percent of the job requirement can be met with indirect jobs.[1][2] The statute tightens this for short construction periods: when the jobs come from construction activity lasting less than two years, only up to 75 percent of the requirement can be met with indirectly created jobs, and the construction jobs counted as direct are prorated by the fraction of two years the work lasts.[2]\n\nThe practical limit on an EB-5 raise is therefore the job count the economist can support, not the amount the developer wants. Size the raise from the jobs down."
    },
    {
      h2: "What does a regional center do, and what dates matter?",
      lead: "A regional center is an entity USCIS designates to pool EB-5 investors into projects, and the program behind it is authorized through September 30, 2027.",
      body: "USCIS defines a regional center as an economic unit, public or private, involved with promoting economic growth, and publishes lists of approved and terminated centers.[4] The 2022 law added oversight: USCIS must audit each designated center at least once every five years, including the flow of investor capital into projects, and centers pay an annual fee into an EB-5 Integrity Fund.[4]\n\nThree dates matter in late 2026. First, the statute makes regional center visas available through September 30, 2027.[2] Second, it protects investors if Congress lets the program lapse: DHS must keep processing petitions that were filed on or before September 30, 2026 and may not deny them because the authorization expired.[2] A petition filed after that date does not have that protection unless Congress acts. Third, the investment amounts adjust for petitions filed on or after January 1, 2027.[1]\n\nFor a developer, that means investor demand can bunch up ahead of these dates and thin out after them. Do not build a construction budget that depends on EB-5 subscriptions arriving on schedule."
    },
    {
      h2: "What are the risks, stated plainly?",
      lead: "The investors can lose their money and their immigration path, and the developer can be left with a funding gap, because nothing in the program guarantees either the capital or the visas.",
      body: "The SEC and USCIS issued a joint investor alert on October 9, 2013 that still describes the risks well. Designation as a regional center does not mean USCIS, the SEC or any other agency has approved the investments it offers. Most offerings are unregistered securities. Money invested through EB-5 must be at risk, so a promised return or a promised refund is a warning sign, and so is any guarantee of a visa or of its timing.[3] One case in the alert involved a hotel and conference center: the SEC alleged a $156 million fraud in which the promoters falsely claimed to have building permits and the backing of major hotel chains.[3]\n\nFor the developer the risks are different. The capital arrives investor by investor and depends on visa demand in the investors' home countries. The project has to hit the job count or the investors' petitions fail. USCIS audits and securities law both apply to the raise, so it needs securities counsel, immigration counsel and an economist, not only a lender. And the senior lender has to accept the structure.\n\nThis page explains the rules. It is not immigration, securities or legal advice."
    }
  ],
  table: {
    caption: "EB-5 rules that shape a hotel raise, for petitions filed on or after March 15, 2022",
    columns: [
      "Rule",
      "Standard project",
      "Targeted employment area project"
    ],
    rows: [
      [
        "Minimum investment per investor",
        "$1,050,000[1]",
        "$800,000, including infrastructure projects[1]"
      ],
      [
        "Next scheduled adjustment",
        "Petitions filed on or after January 1, 2027[1]",
        "Set at 75% of the standard amount at each adjustment[2]"
      ],
      [
        "Jobs required per investor",
        "10 full-time, at 35 or more hours a week[1]",
        "10 full-time, at 35 or more hours a week[1]"
      ],
      [
        "Indirect jobs allowed, regional center",
        "Up to 90%; up to 75% if construction lasts under 2 years[2]",
        "Up to 90%; up to 75% if construction lasts under 2 years[2]"
      ],
      [
        "Who qualifies the location",
        "Not applicable",
        "Rural by census definition; high unemployment designated only by DHS[1][2]"
      ],
      [
        "Reserved visas each fiscal year",
        "None; draws from the unreserved pool",
        "20% rural, 10% high unemployment, 2% infrastructure[1][2]"
      ],
      [
        "Regional center authorization",
        "Through September 30, 2027[2]",
        "Through September 30, 2027[2]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts SOFR at 3.85% and the 10-year Treasury at 4.94% as of September 17, 2026, and marks the construction loan spread as not yet published. EB-5 capital has no public rate index at all, which is why it is compared deal by deal against the senior loan it sits behind.[5]"
  },
  workedExample: {
    label: "Hypothetical: a $12.0M EB-5 tranche in a $40.0M hotel development",
    body: "Hypothetical. A developer plans a $40,000,000 select-service hotel on a site that qualifies as a targeted employment area. The capital stack is an assumption for the arithmetic: a $22,000,000 senior construction loan (55 percent), $12,000,000 of EB-5 capital (30 percent) and $6,000,000 of sponsor equity (15 percent). $22,000,000 plus $12,000,000 plus $6,000,000 equals $40,000,000.\n\nInvestors. At $800,000 each, $12,000,000 takes 15 investors.[1] If the site were not in a targeted employment area the minimum would be $1,050,000, and $12,000,000 would take 12 investors, since 11 would raise only $11,550,000.\n\nJobs. 15 investors times 10 jobs equals 150 full-time jobs.[1] Through a regional center, up to 90 percent can be indirect: 135 indirect and at least 15 direct.[2] If construction lasts less than two years, only 75 percent of the requirement can be met with indirect jobs. 75 percent of 150 is 112.5, so at most 112 indirect jobs and at least 38 that qualify as direct.[2]\n\nThe check that matters. If the economist's model supports only 120 qualifying jobs, the raise supports 12 investors, or $9,600,000, and the developer needs another $2,400,000 from somewhere else. Size the tranche from the job count.\n\nTiming. A petition filed on or before September 30, 2026 carries the statute's protection against a program lapse. One filed on or after January 1, 2027 is subject to the adjusted investment amounts.[1][2]"
  },
  faq: [
    {
      q: "What is the minimum EB-5 investment in 2026?",
      a: "$1,050,000, or $800,000 in a targeted employment area or infrastructure project, for petitions filed on or after March 15, 2022. USCIS says the first inflation adjustment applies to petitions filed on or after January 1, 2027."
    },
    {
      q: "Can EB-5 money be used to buy an existing hotel?",
      a: "The rules are built around job creation, so a plain purchase of a stable hotel rarely fits. USCIS allows job preservation only for a troubled business, one at least two years old with a net loss of at least 20 percent of its net worth."
    },
    {
      q: "Is the EB-5 regional center program still active?",
      a: "Yes. The statute authorizes regional center visas through September 30, 2027, and requires DHS to keep processing petitions filed on or before September 30, 2026 even if the authorization later expires."
    },
    {
      q: "Does USCIS approval of a regional center mean the hotel project is safe?",
      a: "No. The SEC and USCIS state that designation does not mean any agency has approved or endorsed the investments a regional center offers. Investors should get the offering memorandum, verify permits and brand commitments directly, and use independent counsel."
    },
    {
      q: "Can a developer guarantee EB-5 investors their money back?",
      a: "No. The capital must be at risk. USCIS excludes capital subject to a contractual right of repayment, and the SEC lists guaranteed returns or refunds as a warning sign of fraud."
    },
    {
      q: "How many EB-5 investors does a hotel project need?",
      a: "Divide the raise by the minimum investment, then check jobs. Each investor needs 10 full-time jobs, so 15 investors need 150. The job count the economic model supports is usually the binding limit."
    },
    {
      q: "Is a rural hotel site better for EB-5?",
      a: "It qualifies for the $800,000 minimum and the largest reserved visa pool, 20 percent of annual EB-5 visas. Rural for EB-5 means outside a metropolitan statistical area and outside any city or town of 20,000 or more."
    },
    {
      q: "Where does EB-5 sit in a hotel's capital stack?",
      a: "Usually behind the senior construction loan, in the position mezzanine debt or preferred equity would fill. The senior lender must accept the structure, and lenders do not publish their terms for doing so."
    }
  ],
  sources: [
    {
      n: 1,
      label: "About the EB-5 Visa Classification (last reviewed November 18, 2025): investment amounts, targeted employment areas, job creation, capital, visa set-asides",
      url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-fifth-preference-eb-5/about-the-eb-5-visa-classification",
      publisher: "U.S. Citizenship and Immigration Services",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "8 U.S.C. 1153(b)(5), Employment creation: capital amounts and adjustment, reserved visas, high unemployment designation, regional center program, indirect jobs, protection from expired legislation",
      url: "https://www.law.cornell.edu/uscode/text/8/1153",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Investor Alert: Investment Scams Exploit Immigrant Investor Program (October 9, 2013)",
      url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/investor-51",
      publisher: "U.S. Securities and Exchange Commission and U.S. Citizenship and Immigration Services",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "EB-5 Immigrant Investor Regional Centers (last reviewed October 11, 2024): definition, audits, Integrity Fund fee",
      url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-fifth-preference-eb-5/eb-5-immigrant-investor-regional-centers",
      publisher: "U.S. Citizenship and Immigration Services",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/construction-loans",
      "/hotel-financing/opportunity-zones",
      "/hotel-financing/historic-tax-credits",
      "/hotel-financing/usda-b-and-i-loans",
      "/hotel-financing/hotel-lenders-by-type"
    ],
    glossary: [
      "/glossary/mezzanine-debt",
      "/glossary/ltv",
      "/glossary/sofr"
    ],
    data: [
      "/rates",
      "/tools/hotel-loan-sizing-calculator",
      "/tools/dscr-calculator"
    ]
  },
  cta: {
    label: "Talk through your hotel's capital stack",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges the senior debt that EB-5 capital sits behind, so we plan for what happens to the construction loan if the EB-5 money arrives late."
};

export default page;
