/**
 * My lender forgave part of my hotel loan. Do I owe tax on it?
 * Answer page: /hotel-financing/forgiven-debt-tax
 *
 * Written 2026-11-27 from 26 U.S.C. 61, 108, 168, 731, 752 and 1017 and
 * 26 CFR 1.1001-2 and 1.1017-1 read on Cornell LII, plus IRS Publication
 * 4681, Form 982, Rev. Proc. 2014-20 (2014-9 I.R.B. 614) and the 2026 rate
 * schedule in Rev. Proc. 2025-32. Every figure in the worked example is
 * recomputed by scripts/check-forgiven-debt-math.mjs.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "forgiven-debt-tax",
  cluster: "hotel-financing",
  isHub: false,
  title: "Tax on Forgiven Hotel Debt",
  description: "A lender write-down is income. Which exclusions reach a hotel, why your LLC's insolvency does not count, and what the exclusion costs you later.",
  h1: "My lender forgave part of my hotel loan. Do I owe tax on it?",
  lastUpdated: "2026-11-27",
  authorSlug: "miles-cortez",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "My lender forgave part of my hotel loan. Do I owe tax on it?",
    "Is forgiven hotel mortgage debt taxable income?",
    "My hotel LLC is insolvent. Can I exclude the cancelled debt?",
    "What is the qualified real property business indebtedness election?",
    "Do I owe tax if my lender writes down my hotel mortgage in a workout?",
    "I got a 1099-C for my hotel loan. What do I do with it?",
    "Can my partners stop me from excluding cancelled debt?"
  ],
  answer: "Usually yes. Section 61(a)(11) puts income from discharge of indebtedness in gross income, and the lender reports it on Form 1099-C.[1][2] Three exclusions can remove it: bankruptcy, insolvency, and an election for qualified real property business debt, which no C corporation may use.[3] In a hotel LLC all three are tested at the partner level, not the LLC's, and claimed on Form 982, revised March 2018.[3][4]",
  takeaways: [
    "Your LLC's insolvency is worth nothing to you. Section 108(d)(6) applies the exclusions at the partner level, and the IRS says owning part of an insolvent partnership does not qualify you.[3][2]",
    "The real property election is capped twice, both measured immediately before the discharge: debt over value, and the adjusted bases of depreciable real property you hold.[3]",
    "An exclusion is a deferral. The excluded amount comes back out of losses, credits and basis in the order section 108(b)(2) sets.[3]",
    "Your partners can block the election. The partnership grants or withholds consent in its sole discretion below 80 percent, and must grant it above.[5]",
    "A price cut from the seller is not forgiven debt. Section 108(e)(5) makes it a purchase price adjustment and drops your basis instead.[3][2]"
  ],
  sections: [
    {
      h2: "Is money my lender writes off actually income?",
      lead: "Yes. Section 61(a)(11) lists income from discharge of indebtedness as gross income, and the write-off arrives as a Form 1099-C with a number in box 2.",
      body: "The statute is one line in a list: gross income includes income from discharge of indebtedness.[1] Publication 4681 starts in the same place: a cancelled debt is income unless an exception or exclusion applies.[2]\n\nThis page is the case where you keep the hotel and the principal shrinks, a [workout](/hotel-financing/loan-workouts) in which the lender takes less than the note says, not the case where you lose it. That is a different calculation, because the disposition comes first: the regulation puts the discharged liabilities into the amount realized and takes recourse discharge income back out, so a foreclosure splits into gain on the property and, on recourse debt, cancellation income on the shortfall.[6] That split is worked through at [non-recourse loans](/hotel-financing/non-recourse-loans) and [selling a distressed hotel](/sell-a-hotel/selling-a-distressed-hotel).\n\nThe timing is what stings. The income arrives in a year when no cash did, usually the year the hotel stopped covering its [debt service](/glossary/dscr)."
    },
    {
      h2: "Which exclusions can keep it out of income?",
      lead: "Section 108(a)(1) lists five, and three of them can reach a hotel: a title 11 case, insolvency, and an election for qualified real property business debt.",
      body: "The first is a bankruptcy discharge, and it counts only if you are under the court's jurisdiction and the discharge is granted by the court or comes under a court-approved plan.[3] That is the [Chapter 11](/hotel-financing/chapter-11-bankruptcy) route, and the broadest of the three.\n\nThe second is insolvency, capped at the amount by which you are insolvent.[3]\n\nThe third is the election for qualified real property business debt, open only to a taxpayer other than a C corporation.[3] A hotel in an LLC, a partnership or an S corporation can elect. A hotel in a C corporation cannot.\n\nThe order is fixed, not a menu. A title 11 discharge displaces the other three, and insolvency applies before the real property election to the extent you are insolvent.[3] The election only ever reaches what insolvency did not."
    },
    {
      h2: "My hotel LLC is insolvent. Does that help me?",
      lead: "No. Section 108(d)(6) applies the exclusions at the partner level, so the balance sheet that matters is your own, not the hotel entity's.",
      body: "The code is eight words on it: in the case of a partnership, subsections (a), (b), (c) and (g) shall be applied at the partner level.[3] Publication 4681 says it plainly: you do not qualify for the insolvency exclusion by being an owner of, or a partner in a partnership that owns, a grantor trust or disregarded entity that is insolvent, and you must be insolvent yourself.[2]\n\nThis is what owners get wrong. The hotel LLC can be $3,000,000 underwater and every member still solvent, in which case the income is taxable to all of them.\n\nInsolvent means liabilities over the fair market value of assets, measured immediately before the discharge.[3] Publication 4681 counts all recourse debt, nonrecourse debt up to the value of the property securing it, and nonrecourse debt above that value only to the extent it is forgiven.[2] An underwater hotel adds less to your personal liability side than the loan balance suggests.\n\nAn S corporation is the exception that proves the rule: there the same subsections are applied at the corporate level.[3] Same hotel, same write-down, a different answer depending on which entity signed the note."
    },
    {
      h2: "What does the real property election cover, and what caps it?",
      lead: "It covers acquisition and improvement debt secured by the hotel, and two limits measured immediately before the discharge cut it down, the smaller one winning.",
      body: "The debt has to have been incurred in connection with real property used in a trade or business and be secured by that property, and, if taken on after 1992, it has to be qualified acquisition indebtedness: debt incurred to acquire, construct, reconstruct or substantially improve the property.[3] A refinancing carries the character of what it replaced, but only up to the amount refinanced.[3] So the acquisition loan and the [PIP money](/hotel-financing/pip-and-renovation-loans) qualify, and the slice of a [cash-out refinance](/hotel-financing/cash-out-refinance) above the old balance does not.\n\nThen the two limits. The first is the outstanding principal immediately before the discharge over the fair market value of the securing real property at that moment, less any other qualified real property business debt on it. The second is the aggregate adjusted bases of depreciable real property you hold immediately before the discharge.[3] A hotel depreciated for fifteen years has a thin basis, and the second limit is the one that usually binds.\n\nOne hotel structure has its own safe harbor. Where the loan is secured by 100 percent of the membership interest in a disregarded entity holding the real property rather than by a mortgage, Rev. Proc. 2014-20 treats it as secured by real property on five conditions, one being that at least 90 percent of the fair market value of the property owner's assets immediately before the discharge be real property used in a trade or business.[7] Compute that one on a hotel: a hotel carries more personal property than most real estate, and [furniture, fixtures and equipment](/glossary/ffe-reserve) above 10 percent of value fails it."
    },
    {
      h2: "If an exclusion applies, is the tax gone or only later?",
      lead: "Only later, in most cases. Section 108(b) takes the excluded amount back out of your tax attributes, and section 1017 takes it out of basis.",
      body: "The order is statutory: net operating loss for the year of the discharge and any carryover, then the general business credit, the minimum tax credit, capital losses, the basis of your property, passive activity carryovers, and foreign tax credit carryovers.[3] The reduction is one dollar for each dollar excluded, except that the credit carryovers come down 33 and one-third cents on the dollar.[3]\n\nTiming is the trap. Basis reduction applies to property you hold at the beginning of the taxable year following the discharge.[4] Lose the hotel in between and there may be nothing left to reduce. Under the real property election it reaches only depreciable real property, and where property was counted under the second limit the reduction comes immediately before a disposition if that is earlier.[4] In a title 11 case or an insolvency it cannot exceed the bases of your property over your liabilities immediately after the discharge.[4]\n\nThe bill arrives as depreciation you no longer get. A hotel building is nonresidential real property on a 39-year recovery period, so every $39,000 of basis given up costs $1,000 a year of deductions.[8] It is claimed on Form 982: box 1b for insolvency, box 1d for the election, the total on line 2, Part II for the reductions.[9]"
    },
    {
      h2: "Can my partners block the election?",
      lead: "Yes, below two thresholds. Your partnership interest only counts as depreciable real property if the partnership consents to a matching reduction of its own basis for you.",
      body: "Section 1017 treats a partner's interest as depreciable property to the extent of that partner's share of the partnership's depreciable property, and only if the partnership makes a corresponding reduction in its own basis for that partner.[4] The regulation turns that into a procedure: you must request consent before the due date, extensions included, of your own return for the year of the discharge, and the partnership may grant or withhold it in its sole discretion.[5]\n\nThe request is mandatory if you own more than 50 percent of capital and profits, or if the reductions are made against your distributive share of the partnership's cancellation income.[5] Consent is mandatory only when partners owning more than 80 percent of capital and profits request it, or five or fewer partners owning more than 50 percent.[5]\n\nRead the two thresholds together and the arithmetic is unforgiving for a minority member: a 40 percent member alone clears neither, so the election is theirs only if the majority cooperates. It is made on the return for the year of the discharge and revoked only with the consent of the Secretary.[3] Form 982 asks for the consent statements with Part II.[9] Settle this in the [operating agreement](/hotel-valuation/partner-buyout-valuation) before a workout, not during one."
    },
    {
      h2: "Does the debt coming off the books hit me a second time?",
      lead: "It can. A fall in your share of partnership liabilities is treated as a distribution of money to you, and money distributed above your basis is gain.",
      body: "Section 752(b) is blunt: any decrease in a partner's share of partnership liabilities is considered a distribution of money to that partner.[10] A $2,400,000 write-down cuts the members' shares by $2,400,000, and none of them receives a cent.\n\nSection 731(a)(1) then recognizes gain to the extent the money distributed exceeds the adjusted basis of the interest immediately before the distribution, and treats it as gain from the sale of the interest.[11] A member with a thin outside basis, normal after years of depreciation and refinancing, can have gain here even where an exclusion removed every dollar of cancellation income.\n\nTake this one to a CPA. Whether a member has enough basis to absorb the deemed distribution depends on their own basis computation, and the order in which the cancellation income and the deemed distribution are taken into account is a question for the return preparer. No public source resolves it in one line, so this page does not pretend to."
    },
    {
      h2: "What if the seller, not a bank, cuts the debt?",
      lead: "Then it is usually not cancellation income at all. Section 108(e)(5) treats a seller's reduction of purchase-money debt as a purchase price adjustment.",
      body: "Three conditions. The debt has to be a purchaser's debt to the seller, arising out of the purchase of the property. The reduction must not happen in a title 11 case or while the purchaser is insolvent. And it has to be something that would otherwise be cancellation income. Meet all three and it is a purchase price adjustment.[3]\n\nPublication 4681 states what comes with it: no cancellation income, and you must reduce your basis in the property by the amount of the reduction.[2] The tax does not disappear, it moves to the eventual sale, which beats ordinary income in a year with no cash.\n\nIt matters because [seller financing](/buy-a-hotel/seller-financing) is common on smaller hotels. A seller note renegotiated down is a price adjustment. A bank note renegotiated down is income."
    }
  ],
  table: {
    caption: "The three exclusions and the one exception, for a hotel owner, as the statute sets them",
    columns: [
      "Route",
      "Section",
      "Who may use it",
      "Limit on the amount",
      "What it costs you"
    ],
    rows: [
      [
        "Title 11 discharge",
        "108(a)(1)(A)",
        "A taxpayer under the court's jurisdiction, where the court grants the discharge or approves the plan",
        "No separate cap; it displaces the other three",
        "Tax attributes in the 108(b)(2) order; basis reduction capped by 1017(b)(2)"
      ],
      [
        "Insolvency",
        "108(a)(1)(B)",
        "A taxpayer whose liabilities exceed the fair market value of assets immediately before the discharge; tested at the partner level",
        "The amount of the insolvency",
        "Same attribute order; same 1017(b)(2) cap"
      ],
      [
        "Qualified real property business debt",
        "108(a)(1)(D)",
        "Any taxpayer other than a C corporation, by election on the return for the year of the discharge",
        "The lower of debt over value and the adjusted bases of depreciable real property held immediately before",
        "Basis of depreciable real property only, and the partnership has to consent"
      ],
      [
        "Seller reduces the price",
        "108(e)(5)",
        "A solvent purchaser outside a title 11 case, on debt owed to the seller of the property",
        "Not an exclusion: the whole reduction is a price adjustment",
        "Your basis in the hotel falls by the reduction"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet puts the 10-year Treasury at 5.29% as of September 30, 2026 and SOFR at 3.90%, the indexes a replacement loan is struck against; a lender writes principal down when the hotel cannot carry its debt at those indexes plus a spread the sheet marks not yet published.[12]"
  },
  workedExample: {
    label: "Hypothetical: 140-key hotel in an LLC, two members, $2,400,000 of principal written off",
    body: "Hypothetical, with labeled assumptions. A 140-key hotel carries a recourse loan with $12,000,000 outstanding. The real property is worth $9,000,000 and the property owner's other assets $1,000,000. Adjusted basis is $7,200,000: $1,350,000 of land and $5,850,000 of depreciable building. Member A holds 60 percent, member B 40 percent.\n\nIn a workout the lender cuts principal to $9,600,000. The discharge is $2,400,000, 20.0 percent of the principal and $17,142.86 a key. The hotel is still over-levered: $9,600,000 against $9,000,000 of value is 106.67 percent. The income is allocated $1,440,000 to A and $960,000 to B.\n\nA's own liabilities are $4,300,000 against $3,700,000 of assets at fair market value, so A is insolvent by $600,000 and excludes that, the statutory cap, leaving $840,000.[3] A elects for the rest. The first limit is $3,000,000, of which A's share is $1,800,000; the second is 60 percent of the $5,850,000 building basis, or $3,510,000. Neither binds, so A excludes all $1,440,000.[3] Over a 39-year life that basis reduction costs $36,923.08 a year of depreciation.[8]\n\nB is solvent, so the election is the only route, and B's 40 percent clears neither consent threshold, so the LLC may refuse.[5] Then B's $960,000 is ordinary income: on the 2026 joint schedule, $400,000 of other taxable income makes the tax $81,196 and $1,360,000 makes it $425,364.50, so the discharge costs B $344,168.50, an effective 35.85 percent on money never received.[13] Requesting together they hold 100 percent, above 80 percent, and the LLC must grant it.[5] Same write-down, $344,168.50 of difference, decided by a signature.\n\nThe $2,400,000 drop in liabilities is also a deemed distribution.[10] A's share of it is $1,440,000 against an assumed $900,000 of outside basis: $540,000 of gain, though every dollar of cancellation income was excluded.[11] Had the security been a pledge of the membership interest rather than a mortgage, the safe harbor's asset test is met here by exactly 90.0 percent, $9,000,000 of $10,000,000, and fails at $1,100,000 of other assets, 89.11 percent.[7] Every figure is recomputed by scripts/check-forgiven-debt-math.mjs."
  },
  faq: [
    {
      q: "Is forgiven hotel mortgage debt taxable?",
      a: "Normally yes. Section 61(a)(11) counts income from discharge of indebtedness as gross income, and the lender reports it on Form 1099-C. Bankruptcy, insolvency and the qualified real property business debt election are the three ways out."
    },
    {
      q: "My hotel LLC is insolvent. Can I exclude the cancelled debt?",
      a: "Not on the LLC's numbers. Section 108(d)(6) applies the exclusions at the partner level, and IRS Publication 4681 says owning part of an insolvent partnership or disregarded entity does not qualify you. You have to be insolvent yourself."
    },
    {
      q: "Can a C corporation use the real property election?",
      a: "No. Section 108(a)(1)(D) is open only to a taxpayer other than a C corporation. An LLC, a partnership or an S corporation that owns a hotel can elect. A C corporation has bankruptcy and insolvency only."
    },
    {
      q: "Does an exclusion wipe the tax out for good?",
      a: "Rarely. Section 108(b)(2) reduces losses, credits and basis in a set order, one dollar for each dollar excluded. The real property election reduces depreciable real property basis, so you pay later through smaller deductions."
    },
    {
      q: "What form do I file?",
      a: "Form 982, revised March 2018, attached to the return for the year of the discharge. Check box 1b for insolvency or 1d for the election, put the excluded amount on line 2, and complete Part II."
    },
    {
      q: "Can my partners stop me from making the election?",
      a: "Yes. Your interest counts as depreciable real property only if the partnership reduces its own basis for you, and under 26 CFR 1.1017-1 it may withhold consent at its discretion unless partners holding more than 80 percent request it."
    },
    {
      q: "The seller cut my note instead of a bank. Same answer?",
      a: "No. Section 108(e)(5) treats a seller's reduction of purchase-money debt as a purchase price adjustment when you are solvent and not in bankruptcy. No cancellation income, but your basis in the hotel drops by the same amount."
    }
  ],
  sources: [
    { n: 1, label: "26 U.S.C. 61(a)(11), gross income includes income from discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/61", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-27" },
    { n: 2, label: "Publication 4681, Canceled Debts, Foreclosures, Repossessions, and Abandonments (for use in preparing 2025 returns): Form 1099-C; Insolvency, including the rule that owning part of an insolvent partnership or disregarded entity does not qualify you and the treatment of recourse and nonrecourse debt in the test; Insolvency Worksheet; Qualified Real Property Business Indebtedness and its two limits; Price Reduced After Purchase", url: "https://www.irs.gov/pub/irs-pdf/p4681.pdf", publisher: "Internal Revenue Service", accessed: "2026-11-27" },
    { n: 3, label: "26 U.S.C. 108: the five exclusions and their order in (a)(1) and (a)(2); the insolvency cap in (a)(3); attribute reduction, amounts and the depreciable-property election in (b)(2), (b)(3) and (b)(5); the real property election, its two limits and qualified acquisition indebtedness in (c)(1) to (c)(4); insolvency defined in (d)(3); partner-level application in (d)(6) and corporate-level for an S corporation in (d)(7)(A); election timing and revocation in (d)(9); purchase-money debt reduction in (e)(5)", url: "https://www.law.cornell.edu/uscode/text/26/108", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-27" },
    { n: 4, label: "26 U.S.C. 1017: basis reduction applied to property held at the beginning of the following taxable year in (a); the bankruptcy and insolvency cap in (b)(2); depreciable property only, the partnership interest rule and the qualified real property business debt rules in (b)(3)(A), (b)(3)(C) and (b)(3)(F)", url: "https://www.law.cornell.edu/uscode/text/26/1017", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-27" },
    { n: 5, label: "26 CFR 1.1017-1(g)(2): a partnership interest counts as depreciable real property only with the partnership's consent to a matching inside basis reduction; consent granted or withheld in its sole discretion and the partner's request deadline in (g)(2)(ii)(A); when the request is required in (g)(2)(ii)(B); the more-than-80-percent and five-or-fewer-and-more-than-50-percent thresholds that make consent mandatory in (g)(2)(ii)(C); the partnership consent statement in (g)(2)(iii)(A)", url: "https://www.law.cornell.edu/cfr/text/26/1.1017-1", publisher: "Code of Federal Regulations, via Legal Information Institute", accessed: "2026-11-27" },
    { n: 6, label: "26 CFR 1.1001-2(a)(1) and (a)(2), liabilities discharged on a disposition are in the amount realized, and discharge of indebtedness income on a recourse liability is not", url: "https://www.law.cornell.edu/cfr/text/26/1.1001-2", publisher: "Code of Federal Regulations, via Legal Information Institute", accessed: "2026-11-27" },
    { n: 7, label: "Rev. Proc. 2014-20, 2014-9 I.R.B. 614 (February 24, 2014), safe harbor treating debt secured by 100 percent of the ownership interest in a disregarded entity holding real property as secured by real property: the five conditions in section 3.03, including the 90 percent asset test in 3.03(4), effective for elections made on or after February 5, 2014", url: "https://www.irs.gov/pub/irs-irbs/irb14-09.pdf", publisher: "Internal Revenue Service", accessed: "2026-11-27" },
    { n: 8, label: "26 U.S.C. 168(c), a 39-year recovery period for nonresidential real property", url: "https://www.law.cornell.edu/uscode/text/26/168", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-27" },
    { n: 9, label: "Form 982, Reduction of Tax Attributes Due to Discharge of Indebtedness (Rev. March 2018): boxes 1b and 1d, line 2, and Part II, which requires a description of the transactions and any partnership consent statements", url: "https://www.irs.gov/pub/irs-pdf/f982.pdf", publisher: "Internal Revenue Service", accessed: "2026-11-27" },
    { n: 10, label: "26 U.S.C. 752(b), a decrease in a partner's share of partnership liabilities is a distribution of money to the partner", url: "https://www.law.cornell.edu/uscode/text/26/752", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-27" },
    { n: 11, label: "26 U.S.C. 731(a)(1), gain to a partner where money distributed exceeds the adjusted basis of the interest immediately before the distribution", url: "https://www.law.cornell.edu/uscode/text/26/731", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-27" },
    { n: 12, label: "Matthews Hotel Markets hotel loan rate sheet, October 2026 edition", url: "/rates", publisher: "Matthews Hotel Markets", accessed: "2026-11-27" },
    { n: 13, label: "Rev. Proc. 2025-32, Section 4, Table 1, the 2026 rate schedule for married individuals filing joint returns and surviving spouses, with the top bracket at $206,583.50 plus 37 percent of the excess over $768,700", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf", publisher: "Internal Revenue Service", accessed: "2026-11-27" }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-workouts",
      "/hotel-financing/non-recourse-loans",
      "/hotel-financing/chapter-11-bankruptcy",
      "/hotel-financing/cash-out-refinance",
      "/hotel-financing/pip-and-renovation-loans",
      "/hotel-financing/interest-deduction-limits",
      "/hotel-financing/deduct-or-capitalize-a-renovation"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/ffe-reserve",
      "/glossary/non-recourse-carve-outs"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk to the capital markets desk",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges the replacement debt and recapitalizations that end a workout, from $5 million, and sells hotels and notes where a write-down is not on offer; it does not give tax advice, does not prepare returns and does not make this election for you."
};

export default page;
