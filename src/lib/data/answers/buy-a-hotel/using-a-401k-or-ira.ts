/**
 * Can I use my 401(k) or IRA to buy a hotel?
 * Answer page: /buy-a-hotel/using-a-401k-or-ira
 *
 * Written 2026-11-25 from 26 U.S.C. 408, 511, 512, 514 and 4975 and
 * 26 CFR 1.512(b)-1 read on Cornell LII; IRS Publication 590-B (2025); the
 * Instructions for Form 990-T (2025); Rev. Proc. 2025-32 (2026 inflation
 * adjustments); the IRS Rollovers as Business Start-Ups compliance project
 * page and the October 1, 2008 ROBS memorandum; SOP 50 10 8.1 effective
 * October 1, 2026; and 13 CFR 120.910. All fetched and read that day. Every
 * figure in the worked example is recomputed by
 * scripts/check-retirement-funds-math.mjs.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "using-a-401k-or-ira",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "Buying a Hotel With a 401(k) or IRA",
  description: "What a self-directed IRA and a 401(k) rollover can and cannot do when you buy a hotel: the guaranty problem, the UBIT bill and SBA's ROBS conditions.",
  h1: "Can I use my 401(k) or IRA to buy a hotel?",
  lastUpdated: "2026-11-25",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can I use my 401(k) or IRA to buy a hotel?",
    "Can a self-directed IRA own a hotel?",
    "Can I use retirement funds for an SBA loan down payment on a hotel?",
    "What is a ROBS and can I use one to buy a hotel?",
    "Is hotel income taxable inside an IRA?",
    "Can I manage a hotel my IRA owns?",
    "Can I guarantee a loan to a company my IRA owns?"
  ],
  answer: "Two different answers. A self-directed IRA may hold a hotel, but you cannot guarantee its loan or work there, and room revenue is unrelated business taxable income taxed at trust rates that reach 37 percent above $16,000 of taxable income in 2026.[1][2] A 401(k) rollover into a C corporation is the route SBA recognizes, on conditions effective October 1, 2026.[3]",
  takeaways: [
    "Nothing in the tax code stops an IRA from holding hotel real estate. Section 4975 and the unrelated business income tax are what make it impractical.[4]",
    "SBA requires an unlimited full guaranty from every 20 percent owner.[3] Guaranteeing a loan to a company your IRA owns is an indirect extension of credit between a plan and a disqualified person.[4]",
    "If that happens the account stops being an IRA on the first day of that year and is treated as distributing everything at fair market value.[5][6]",
    "Hotel room revenue is not rent from real property, so the rents exclusion does not cover it.[7][8] The trustee files Form 990-T once gross unrelated business income reaches $1,000.[9]",
    "SOP 50 10 8.1 sets conditions for 401(k) and ROBS-owned borrowers and says nothing at all about IRAs.[3]"
  ],
  sections: [
    {
      h2: "Can a self-directed IRA own a hotel?",
      lead: "It can hold the asset. The code keeps life insurance and collectibles out of an IRA, not real estate, and SBA says the 504 contribution may come from any source except an SBA business loan program.[5][10]",
      body: "Three rule sets apply at once. Section 4975 says who may deal with the account and on what terms. Sections 511 to 514 tax what a trade or business inside it earns. The lender's own requirements, published for SBA loans, decide whether the deal can be financed. A hotel fails more of these than a strip center does, because a hotel is an operating business with staff, a brand and nightly pricing, not a lease: [how do I underwrite a hotel deal?](/buy-a-hotel/how-to-underwrite-a-hotel-deal)."
    },
    {
      h2: "Why can I not guarantee the hotel loan, and what happens if I do?",
      lead: "Section 4975 reaches any direct or indirect lending of money or other extension of credit between a plan and a disqualified person, and you are one with respect to your own account.[4]",
      body: "A plan here includes an individual retirement account described in section 408(a), and a disqualified person includes a fiduciary: anyone exercising authority or control over the account's assets, which in a self-directed account is the holder. It also reaches close family and any entity in which disqualified persons own 50 percent or more, so the company the IRA capitalizes is itself a disqualified person once the account owns half of it. Prohibited transactions include a sale, exchange or lease between the plan and a disqualified person, lending or any other extension of credit, furnishing goods, services or facilities, and a fiduciary dealing with plan assets in his own interest.[4] A guaranty is credit support the holder supplies to a loan the plan's company owes, and no published exemption covers it.\n\nSOP 50 10 8.1 requires an unlimited full guaranty from any individual owning 20 percent or more of the applicant, directly or indirectly, and where an entity owning part of the applicant is a trust, the trust must guarantee the loan and the trustor must guarantee it personally as well.[3] An IRA is a trust, so the guaranty an SBA lender has to collect is the transaction section 4975 prohibits. Non-recourse debt is the exception outside CMBS: [are hotel loans non-recourse?](/hotel-financing/non-recourse-loans)\n\nThe penalty is the account. Section 408(e)(2) says it stops being an IRA as of the first day of that taxable year, and Publication 590-B adds that it is then treated as distributing all its assets at fair market value on that day.[5][6] Under 59 and a half, the 10 percent additional tax on early distributions lands on top.[6]"
    },
    {
      h2: "Can I manage the hotel my IRA owns?",
      lead: "No, and that is usually the rule that ends the conversation, because the owner who wants to run a hotel is the owner asking the question.",
      body: "Furnishing goods, services or facilities between a plan and a disqualified person is prohibited, as is the use of plan assets by or for the benefit of a disqualified person.[4] Working at the hotel, for a salary or for nothing, is furnishing services. Staying in a room is use of plan assets. So is putting a family member on the payroll, since the family definition reaches a spouse, ancestors, lineal descendants and their spouses.[4] So it needs a third-party operator: [buying a first hotel with no experience](/buy-a-hotel/first-hotel-no-experience) and [hotel management agreements](/hotel-industry/hotel-management-agreements)."
    },
    {
      h2: "How is hotel income taxed inside an IRA?",
      lead: "As unrelated business taxable income, at trust rates, because hotel room revenue is not rent from real property.[7][8][1]",
      body: "An IRA is exempt from tax under subtitle A with one stated exception: the taxes section 511 imposes on unrelated business income.[5] Section 512 defines that income as gross income from an unrelated trade or business regularly carried on, less directly connected deductions, and section 511(b)(1) taxes a trust as provided in section 1(e), the estate and trust schedule.[7][1]\n\nSection 512(b)(3) does exclude all rents from real property.[7] But the regulation says payments for rooms where services are also rendered to the occupant, naming hotels, motels, tourist camps and tourist homes, do not constitute rent from real property, and it gives maid service as the example.[8] Dividends and interest are excluded, so the same account earning the same dollars from securities owes nothing.[7] An LLC does not change it: the organization includes its share of a partnership's unrelated trade or business income, distributed or not.[7]\n\nAfter a $1,000 specific deduction the 2026 trust schedule runs 10 percent to $3,300, 24 percent to $11,700, 35 percent to $16,000 and 37 percent above that, so a trust reaches the top federal rate at 2.08 percent of the taxable income a joint return needs.[7][2] The trustee, not the owner, files Form 990-T once gross unrelated business income reaches $1,000.[9]"
    },
    {
      h2: "What if the account borrows to buy the hotel?",
      lead: "Debt inside a retirement account creates debt-financed income under section 514, and the relief written for leveraged real estate reaches qualified plans but not IRAs.[11]",
      body: "Section 514 includes, as unrelated trade or business income, the same percentage of a property's gross income as the average acquisition indebtedness bears to the average adjusted basis.[11] Section 512(b)(4) then overrides the rents exclusion for it, so even a net-leased building with a mortgage produces taxable income inside the account.[7]\n\nThe exception is where the two account types part company. Section 514(c)(9) says acquisition indebtedness does not include debt a qualified organization incurs acquiring or improving real property, and it defines qualified organization as certain educational organizations, any trust which constitutes a qualified trust under section 401, section 501(c)(25) organizations and section 403(b)(9) retirement income accounts.[11] An IRA is described in section 408(a) and is not on that list. A solo 401(k) is a section 401 trust and is.\n\nTwo cautions. The exception is lost if the price is not fixed at acquisition, if any payment depends on revenue or profits from the property, or if the property is leased back to the person who sold it.[11] And it only removes the debt-financed overlay: room revenue is already an unrelated trade or business, so a leveraged 401(k) that operates a hotel still pays tax on the operation.[7][8]"
    },
    {
      h2: "What is a ROBS, and does it work for a hotel?",
      lead: "A Rollover as Business Start-Up moves retirement money into a new C corporation's stock, and the IRS says the arrangement is not an abusive tax avoidance transaction but is questionable.[12]",
      body: "The individual forms a C corporation, the corporation sponsors a 401(k) plan, the individual rolls a former employer's account into that plan, and the plan buys the corporation's stock, so the cash sits inside the operating company without a taxable distribution.[13][12]\n\nThe IRS has examined these. Its compliance project found that although there were some success stories, most ROBS businesses either failed or were on the road to failure, with high rates of business and personal bankruptcy, liens and corporate dissolutions, and that some individuals lost both the retirement assets they had accumulated and the business.[12] The 2008 memorandum that opened the project lists what examiners found: employees not notified of the plan's existence and not receiving contributions or stock, plan assets not valued or valued with threadbare appraisals, and required annual reports not filed.[13] Its two live issues are discrimination, where only the principal gets employer stock, and prohibited transactions from deficient valuations.[13]\n\nOne filing trap is specific. Promoters say the one-participant exception applies, but in a ROBS the plan owns the trade or business through its stock rather than the individual owning it, so the exception does not apply and the annual Form 5500 is still required.[12]"
    },
    {
      h2: "Will an SBA lender accept retirement money as the equity injection?",
      lead: "For a 401(k) or ROBS-owned borrower, yes, on conditions SOP 50 10 8.1 publishes. For an IRA, the SOP provides no path.[3]",
      body: "SBA's rule sits in Section A, Chapter 2, Paragraph D. A business owned in whole or in part by a 401(k) plan, including a ROBS plan, may be eligible provided the lender complies with that section and the plan complies with all applicable IRS, Treasury and Labor requirements.\n\nThe conditions are specific. The lender names the plan type in its credit memorandum and states whether a ROBS plan funds the equity contribution. It obtains the full unconditional guaranty of the plan sponsors regardless of their ownership in the applicant. It collects a favorable IRS determination letter, the plan's annual return, and for a ROBS the corporation formation, plan adoption and stock purchase documents. Loan proceeds may not pay plan formation costs. The application cannot be structured as an Eligible Passive Company and Operating Company, and the SOP states that under IRS regulations the 401(k) cannot guaranty the loan.[3]\n\nThe design is clear: the guaranty comes from the human sponsor, never from the plan. That is why the IRA version has no route, since the guaranties an IRA-owned applicant would produce are the ones section 4975 prohibits.[3][4] Which program fits which purchase is at [SBA 7(a) vs 504 for a hotel](/hotel-financing/sba-7a-vs-504)."
    },
    {
      h2: "What are the alternatives if I want to use retirement money?",
      lead: "A plan loan, a C corporation blocker, a passive minority interest, or taking the distribution and paying the tax with your eyes open.",
      body: "A participant loan is the smallest. The IRS states the maximum as 50 percent of the vested account balance or $50,000, whichever is less, repayable within five years with payments at least quarterly.[14] On the hypothetical below that is 0.83 percent of the price: closing-cost money, not equity.\n\nA C corporation blocker is the ROBS idea without the plan owning an operating business: the account holds stock, the corporation owns and operates the hotel and pays corporate tax, and dividends to the account are excluded from unrelated business taxable income.[7] A distribution is not irrational once the alternative is a prohibited transaction, because it carries the same ordinary income tax without the deemed-distribution surprise. Price the deal first, then ask a plan administrator and a CPA which vehicle survives: [how much money do I need to buy a hotel?](/buy-a-hotel/how-much-money-do-you-need) and [depreciation and cost segregation](/buy-a-hotel/depreciation-and-cost-segregation)."
    }
  ],
  table: {
    caption: "Retirement money and a hotel purchase: what each vehicle can do, and where the rule is written",
    columns: [
      "Question",
      "Self-directed IRA",
      "Solo 401(k)",
      "ROBS C corporation",
      "Where it is written"
    ],
    rows: [
      [
        "May it hold hotel real estate at all",
        "Yes",
        "Yes",
        "Yes, through the corporation's stock",
        "26 U.S.C. 408(a)(3), (m); 13 CFR 120.910(b)[5][10]"
      ],
      [
        "May the owner personally guarantee the acquisition loan",
        "No: an indirect extension of credit between a plan and a disqualified person",
        "No, where the plan itself owns the borrower",
        "Yes, and SBA requires it from the plan sponsor",
        "26 U.S.C. 4975(c)(1)(B), (e)(2); SOP 50 10 8.1 Sec. A, Ch. 2, Para. D[4][3]"
      ],
      [
        "May the owner manage the hotel or draw a salary",
        "No: furnishing services and use of plan assets",
        "No, on the same rules",
        "Yes: the owner is an employee of the C corporation",
        "26 U.S.C. 4975(c)(1)(C), (c)(1)(D), (c)(1)(E)[4]"
      ],
      [
        "Is room revenue unrelated business taxable income",
        "Yes: hotel rooms are not rent from real property",
        "Yes, on the same regulation",
        "No: the corporation pays corporate tax and the plan receives dividends",
        "26 U.S.C. 512(a)(1), (b)(1), (b)(3); 26 CFR 1.512(b)-1(c)(5)[7][8]"
      ],
      [
        "Is mortgage debt outside the debt-financed income rules",
        "No: an IRA is not a qualified organization",
        "Yes: a section 401 trust is, on conditions",
        "Not applicable: the corporation borrows",
        "26 U.S.C. 514(a)(1), (b)(1), (c)(9)(A) to (c)(9)(C)[11]"
      ],
      [
        "Rate on the first dollar of taxable hotel income",
        "Trust rates, 37 percent above $16,000 of taxable income in 2026",
        "Trust rates, the same schedule",
        "The corporate rate, then deferral inside the plan",
        "26 U.S.C. 511(b)(1); Rev. Proc. 2025-32, Table 5[1][2]"
      ],
      [
        "Annual federal filing the structure adds",
        "Form 990-T by the trustee at $1,000 of gross unrelated income",
        "Form 990-T on the same threshold, plus the plan's own return",
        "Form 5500: the one-participant exception does not apply",
        "Instructions for Form 990-T (2025); IRS ROBS project page[9][12]"
      ],
      [
        "Consequence of getting it wrong",
        "The account stops being an IRA on day one of that year and is treated as distributing everything",
        "Plan disqualification",
        "Plan disqualification, with adverse tax consequences to the sponsor and participants",
        "26 U.S.C. 408(e)(2); Pub. 590-B; SOP 50 10 8.1[5][6][3]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet records the one hotel equity requirement that is actually published: a hotel is a Limited or Special Purpose Property in SOP 50 10 8.1, so under 13 CFR 120.910 the borrower contributes at least 15 percent of project cost, and 20 percent if the operating business is two years old or less.[10][3] That contribution is the figure the retirement money has to cover. The sheet marks maximum leverage as not yet published for every other lender type."
  },
  workedExample: {
    label: "Worked example (hypothetical): $1,500,000 of rollover money against a 60-key hotel",
    body: "Hypothetical. A 60-key limited-service hotel at $6,000,000, which is $100,000 a key, with assumed net operating income of $480,000, an 8.0 percent cap rate. The buyer has $1,500,000 in a former employer's plan and no other liquid capital.\n\nStep one, the equity the deal needs. A hotel is a Limited or Special Purpose Property, so a 504 structure needs a borrower contribution of at least 15 percent, $900,000, with the debenture at no more than 35 percent, $2,100,000, and a bank first mortgage at 50 percent, $3,000,000.[10][3] If the operating business is two years old or less the contribution rises to 20 percent, $1,200,000, and the debenture falls to 30 percent, $1,800,000.[10] The rollover covers the injection with $600,000 to spare as an established operator, or $300,000 as a new one: 60.0 percent and 80.0 percent of the account.\n\nStep two, what one signature costs if the vehicle is a self-directed IRA. The lender needs an unlimited full guaranty from every 20 percent owner, and from the trustor where a trust owns part of the applicant.[3] Signing is an indirect extension of credit between the plan and a disqualified person, so the account stops being an IRA on the first day of that year and is treated as distributing all $1,500,000 at fair market value.[4][5][6] Assume $150,000 of other joint taxable income. Tax on $1,650,000 under the 2026 joint schedule is $206,583.50 plus 37 percent of $881,300, which is $532,664.50, against $22,424 on the $150,000 alone, so the distribution adds $510,240.50.[2] Under 59 and a half the 10 percent additional tax adds $150,000, for $660,240.50, or 44.02 percent of the account.[6]\n\nStep three, a passive interest with no debt and no guaranty. Say the IRA takes 25 percent alongside unrelated sponsors who buy the hotel for cash, and assume its share of unrelated business taxable income is 25 percent of $480,000, being $120,000. Less the $1,000 specific deduction leaves $119,000.[7] The 2026 trust schedule gives $3,851 plus 37 percent of $103,000, which is $41,961: an effective 34.97 percent.[2] The same $120,000 earned as interest or dividends in the same account owes nothing, so the hotel costs the account $41,961 a year that a bond fund would not, and the trustee files Form 990-T.[7][9]\n\nFor scale, the participant loan alternative is $50,000: 0.83 percent of the price and 5.56 percent of the 15 percent injection.[14] Every figure is recomputed by scripts/check-retirement-funds-math.mjs, and this illustrates mechanics, not tax advice."
  },
  faq: [
    {
      q: "Can a self-directed IRA buy a hotel?",
      a: "It can hold the asset. The problem is the deal around it: you cannot guarantee the loan or work at the hotel, and room revenue is taxed as unrelated business income at trust rates, which reach 37 percent above $16,000 of taxable income in 2026."
    },
    {
      q: "Can I guarantee a loan to a company my IRA owns?",
      a: "No. Section 4975 prohibits any direct or indirect lending of money or other extension of credit between a plan and a disqualified person, and you are one with respect to your own account. No published exemption covers a guaranty."
    },
    {
      q: "What happens to my IRA if I sign the guaranty anyway?",
      a: "It stops being an IRA as of the first day of that taxable year and is treated as distributing all its assets at fair market value on that day. Under age 59 and a half, the 10 percent additional tax on early distributions applies too."
    },
    {
      q: "Is hotel income inside an IRA taxable?",
      a: "Yes. The rents exclusion does not cover payments for rooms where services are rendered to the occupant, and the regulation names hotels and motels. The trustee files Form 990-T once gross unrelated business income reaches $1,000."
    },
    {
      q: "Can I use a ROBS to buy a hotel?",
      a: "It is the structure SBA's SOP 50 10 8.1 recognizes, on published conditions. The IRS calls ROBS questionable rather than abusive, and its compliance project found most ROBS businesses failed or were heading that way."
    },
    {
      q: "Will an SBA lender take my 401(k) money as the down payment?",
      a: "The SOP allows a borrower owned in whole or in part by a 401(k) or ROBS plan, with the plan sponsor's full unconditional guaranty and a list of plan documents. It states that the 401(k) itself cannot guaranty the loan."
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S.C. 511, imposition of tax on unrelated business income: subsections (a)(2) and (b)(1), which computes the tax on a trust as provided in section 1(e)",
      url: "https://www.law.cornell.edu/uscode/text/26/511",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-25"
    },
    {
      n: 2,
      label: "Rev. Proc. 2025-32, inflation-adjusted items for taxable years beginning in 2026: Table 1, married individuals filing joint returns, and Table 5, estates and trusts",
      url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-25"
    },
    {
      n: 3,
      label: "SOP 50 10 8.1, Lender and Development Company Loan Programs, effective October 1, 2026: Section A, Ch. 2, Para. D, 401(k) Plans Including Rollovers as Business Start-ups (ROBS) Plans, and Section A, Ch. 5, Para. A, guaranty requirements",
      url: "https://legacy.sba.gov/sites/default/files/2026-08/SOP%2050%2010%208.1%20effective%2010.1.2026_0.docx",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-11-25"
    },
    {
      n: 4,
      label: "26 U.S.C. 4975, tax on prohibited transactions: subsections (a), (b), (c)(1)(A) to (c)(1)(F), (c)(3), (e)(1), (e)(2), (e)(3) and (e)(6)",
      url: "https://www.law.cornell.edu/uscode/text/26/4975",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-25"
    },
    {
      n: 5,
      label: "26 U.S.C. 408, individual retirement accounts: subsections (a)(3), (e)(1), (e)(2)(A), (e)(2)(B) and (m)",
      url: "https://www.law.cornell.edu/uscode/text/26/408",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-25"
    },
    {
      n: 6,
      label: "Publication 590-B (2025), Distributions from Individual Retirement Arrangements: Prohibited Transactions, Effect on an IRA account, Effect on you or your beneficiary, Pledging an account as security, and Early Distributions",
      url: "https://www.irs.gov/pub/irs-pdf/p590b.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-25"
    },
    {
      n: 7,
      label: "26 U.S.C. 512, unrelated business taxable income: subsections (a)(1), (b)(1), (b)(3), (b)(4), (b)(12) and (c)(1)",
      url: "https://www.law.cornell.edu/uscode/text/26/512",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-25"
    },
    {
      n: 8,
      label: "26 CFR 1.512(b)-1(c)(5), rendering of services: payments for rooms in hotels, motels, tourist camps and tourist homes do not constitute rent from real property",
      url: "https://www.law.cornell.edu/cfr/text/26/1.512(b)-1",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-25"
    },
    {
      n: 9,
      label: "Instructions for Form 990-T (2025), Who Must File: trustees of individual retirement accounts with $1,000 or more of unrelated trade or business gross income, each account treated as a separate trust",
      url: "https://www.irs.gov/pub/irs-pdf/i990t.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-25"
    },
    {
      n: 10,
      label: "13 CFR 120.910, Borrower contributions, paragraphs (a)(1) to (a)(3) and (b)",
      url: "https://www.law.cornell.edu/cfr/text/13/120.910",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-25"
    },
    {
      n: 11,
      label: "26 U.S.C. 514, unrelated debt-financed income: subsections (a)(1) to (a)(3), (b)(1), (c)(1), (c)(9)(A), (c)(9)(B)(i) to (c)(9)(B)(iii) and (c)(9)(C)",
      url: "https://www.law.cornell.edu/uscode/text/26/514",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-25"
    },
    {
      n: 12,
      label: "Rollovers as Business Start-Ups Compliance Project, page last reviewed or updated November 17, 2026: what a ROBS is, the project findings and the Form 5500 filing requirement",
      url: "https://www.irs.gov/retirement-plans/rollovers-as-business-start-ups-compliance-project",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-25"
    },
    {
      n: 13,
      label: "Guidelines regarding rollovers as business start-ups, memorandum from Michael Julianelle, Director, Employee Plans Rulings and Agreements, October 1, 2008",
      url: "https://www.irs.gov/pub/irs-tege/robs_guidelines.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-25"
    },
    {
      n: 14,
      label: "Retirement topics: plan loans, page last reviewed or updated February 26, 2026: the maximum loan amount and the repayment terms",
      url: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-loans",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-25"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/how-much-money-do-you-need",
      "/buy-a-hotel/first-hotel-no-experience",
      "/buy-a-hotel/how-to-underwrite-a-hotel-deal",
      "/buy-a-hotel/depreciation-and-cost-segregation",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/non-recourse-loans"
    ],
    glossary: [
      "/glossary/sba-7a",
      "/glossary/sba-504",
      "/glossary/noi",
      "/glossary/cap-rate"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Price a hotel purchase before you move retirement money",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets represents hotel buyers, including 1031 buyers, and arranges hotel financing from $5 million, so a buyer can see the real equity requirement before a plan administrator is engaged; we do not administer retirement plans and we do not give tax advice."
};

export default page;
