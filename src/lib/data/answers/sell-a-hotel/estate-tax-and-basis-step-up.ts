/**
 * Should I sell my hotel or hold it for the step-up in basis?
 * Answer page: /sell-a-hotel/estate-tax-and-basis-step-up
 *
 * Written 2026-10-27 from a coverage scan: "step-up", "1014", "6166", "2032A"
 * and "estate tax" as a topic appeared in zero files under src/lib/data/.
 * Every figure is recomputed by scripts/check-estate-tax-math.mjs.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "estate-tax-and-basis-step-up",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Hotel Estate Tax and the Basis Step-Up",
  description: "The 2026 estate tax exclusion is $15,000,000. What the step-up under section 1014 is worth on a hotel, and when section 6166 defers the tax.",
  h1: "Should I sell my hotel or hold it for the step-up in basis?",
  lastUpdated: "2026-10-27",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Should I sell my hotel or leave it to my kids?",
    "What happens to the capital gains tax on my hotel if I die owning it?",
    "Do my heirs get a step-up in basis on a hotel?",
    "How much estate tax will my hotel trigger?",
    "Can my estate pay the estate tax on a hotel in installments?",
    "Is it better to gift my hotel or leave it in my will?",
    "What is the estate tax exemption in 2026?"
  ],
  answer: "Hold and your heirs take the hotel at its fair market value on the date of death, under section 1014, so the deferred gain and all the depreciation you took disappear.[1] Sell and you pay that tax now. For 2026 the estate tax exclusion is $15,000,000 per person at a 40 percent top rate, so most single-hotel estates owe no estate tax at all.[3][4][5]",
  takeaways: [
    "The step-up is worth the entire income tax you would have paid on a sale. In the example below, $2,874,358.98 on an $18,000,000 hotel bought for $11,000,000 in 2001.[1][6]",
    "The 2026 basic exclusion amount is $15,000,000, set by section 70106 of the July 4, 2025 reconciliation act, and it is not indexed until 2027.[3][4]",
    "Above the exclusion the rate is a flat 40 percent at the margin, so the estate tax question is a question about the size of the whole estate, not about the hotel.[5]",
    "If the hotel is more than 35 percent of the adjusted gross estate, section 6166 can stretch the tax over 14 years, with 2 percent interest on the first $776,000 of it in 2026.[9][11]",
    "That deferral dies if the heirs sell. A disposition of 50 percent or more of the business interest makes the whole unpaid balance due on demand.[9]"
  ],
  sections: [
    {
      h2: "What happens to the tax on my hotel if I hold it until I die?",
      lead: "Your heirs take the hotel at its fair market value on the date of death, and the gain you had built up is never taxed as income to anyone.[1]",
      body: "Section 1014(a)(1) sets the basis of property acquired from a decedent at the fair market value of the property at the date of death. IRS Publication 551 says the same thing in plain English, and lists the three alternatives: the date-of-death value, the value on the alternate valuation date if the executor elects it, and the special-use value under section 2032A.[1][2]\n\nTwo things vanish at once, and owners usually only count the first. The appreciation goes, which is the part everyone expects. The depreciation goes too. Every dollar of the 39-year straight-line deduction you have taken against the building since you bought the hotel would have come back as unrecaptured section 1250 gain at a maximum 25 percent rate on a sale.[6][8] On a death it does not come back at all.\n\nA third effect keeps paying after the estate closes: the heir's depreciation runs on the new basis, so a building written down to a stub restarts at its stepped-up value over a fresh 39 years.[2][8]\n\nOne trap. Section 1014(e) turns the rule off for appreciated property you or your spouse gave the decedent within one year before death, which is the obvious gambit and the statute closes it.[1]"
    },
    {
      h2: "How much estate tax would my hotel actually trigger?",
      lead: "For a 2026 death, none on the first $15,000,000 of taxable estate, then 40 percent at the margin.[3][4][5]",
      body: "Section 2010(c)(3)(A) sets the basic exclusion amount at $15,000,000. Section 70106 of Public Law 119-21, signed July 4, 2025, put that figure in place for estates of decedents dying and gifts made after December 31, 2025, and the inflation adjustment does not start until calendar year 2027.[3] Rev. Proc. 2025-32 confirms the $15,000,000 for 2026 and sets the generation-skipping transfer exemption at the same amount.[4]\n\nThe rate schedule in section 2001(c) is graduated only up to $1,000,000 of taxable transfers, where it reaches $345,800 plus 40 percent of the excess.[5] Because the exclusion is many times that, the arithmetic above the exclusion is a flat 40 percent. An estate $1,000,000 over the line owes $400,000.\n\nFor a married couple the number doubles, but only if the first estate files. Section 2010(c)(4) gives the survivor the deceased spousal unused exclusion, and section 2010(c)(5)(A) makes it available only if the executor of the first estate files a return and elects it.[3] A widowed hotel owner who skipped that filing because no tax was due may have thrown away $15,000,000 of exclusion.\n\nThe estate tax is not a hotel question. It is a question about every asset the owner holds, and because the mortgage is deductible under section 2053, an $18,000,000 hotel carrying $6,000,000 of debt contributes $12,000,000 of net value."
    },
    {
      h2: "Is the step-up worth more than the capital gains tax I would pay today?",
      lead: "Almost always, because the step-up erases the full tax rather than deferring it, and no exchange or installment structure does that.[1][6]",
      body: "A sale today is taxed in layers. Gain equal to the depreciation taken on the building is unrecaptured section 1250 gain at a maximum 25 percent. The rest of the long-term gain is taxed at up to 20 percent. A 3.8 percent net investment income tax can sit on top, and whether it reaches a hotel owner turns on whether that owner materially participates, which is a question of fact for a CPA.[6][7] The layer-by-layer mechanics are at [How is the sale of a hotel taxed?](/sell-a-hotel/taxes-when-selling-a-hotel).\n\nA 1031 exchange defers that tax into the replacement property and carries the old basis forward. Death ends the chain: the deferred gain in the replacement hotel gets the same step-up, which is why an owner who has exchanged more than once has the most to lose by selling for cash. The mechanics are at [Can I do a 1031 exchange on a hotel?](/hotel-financing/1031-exchange-hotels), and the alternatives at [Can I do a 1031 exchange without buying another hotel?](/sell-a-hotel/1031-without-buying-another-hotel).\n\nWhat the comparison cannot tell you is when. An owner who holds a declining asset for another decade to save a tax bill can lose more in value than the tax was worth. That is a valuation judgement, not a tax one."
    },
    {
      h2: "Does a hotel count as a closely held business for the 14-year deferral?",
      lead: "It depends on who runs it, and Rev. Rul. 2006-34 says that handing everything to an unrelated management company weighs against it.[13]",
      body: "Section 6166 lets an executor pay estate tax in up to 10 equal installments when an interest in a closely held business exceeds 35 percent of the adjusted gross estate, and the first installment can be deferred up to 5 years past the normal due date.[9] That is 14 years in total against the 9 months section 6075(a) otherwise allows.[10]\n\nThe catch is section 6166(b)(9): the value of the interest excludes any part attributable to passive assets, and a passive asset is anything other than an asset used in carrying on a trade or business.[9] Rev. Rul. 2006-34 applies that to real property with a six-factor test covering time devoted, whether an office was maintained, involvement in leasing, services beyond furnishing the premises, who supervised repairs and who handled complaints. It says plainly that if the owner \"uses an unrelated property management company to perform most of the activities associated with the real estate interests, that fact suggests that an active trade or business does not exist\", and it held that way on an office park. Where the owner held 20 percent of the management company, the same facts came out the other way.[13]\n\nA hotel sits far better under that test than a net-leased building, because it sells a service nightly and the staff are usually the owner's or its lessee's employees. But two otherwise identical hotels can get different answers on a 14-year deferral depending on who signs the management agreement and who owns the manager. How those structures differ is at [Who actually owns, brands and runs a hotel?](/hotel-industry/owner-franchisor-management-company)."
    },
    {
      h2: "What does the deferral cost, and what kills it?",
      lead: "Two percent on the first $776,000 of deferred tax in 2026, then 3.15 percent on the rest, and a sale of half the hotel ends it immediately.[9][11][12]",
      body: "Section 6601(j) charges 2 percent on the \"2-percent portion\" and 45 percent of the ordinary underpayment rate above it. The 2-percent portion is the tax on $1,940,000 plus the exclusion, less the credit, which for 2026 is exactly 40 percent of $1,940,000, or $776,000.[4][11] The underpayment rate for the quarter beginning October 1, 2026 is 7 percent, so the second leg is 3.15 percent.[12] Both sit below the 7.00 percent Prime rate on our October 2026 rate sheet, which makes the federal government the cheapest lender available to a hotel estate.[17]\n\nTwo conditions. The election has to be made on the return, no later than the extended due date under section 6075(a), so it is closed to an executor who files late and asks afterwards.[9][10] And section 6166(g)(1)(A) accelerates the whole unpaid balance, on notice and demand, once distributions, sales and withdrawals reach 50 percent of the value of the business interest. Transfers to the people who inherit under the will are carved out, so passing the hotel to the children is fine. Selling it is not.[9]\n\nThat is the decision the deferral forces. An estate that elects section 6166 has committed the family to keeping the hotel for up to 14 years, paying the installments out of hotel cash flow. If the heirs do not want to run a hotel, selling into the step-up is the cleaner answer."
    },
    {
      h2: "What about special-use valuation and the alternate valuation date?",
      lead: "A hotel can qualify for section 2032A, but the election takes at most $1,460,000 off the estate value in 2026 and locks the heir in for 10 years.[4][14]",
      body: "Section 2032A(b)(2)(B) defines qualified use to include use in a trade or business other than farming, so a hotel is not excluded on its face. Three things limit it. The method: the farm formula in section 2032A(e)(7) does not apply, so a hotel falls to the multi-factor method in section 2032A(e)(8), which capitalizes the income the property can be expected to yield in that business, close to how the asset is already valued.[14] The cap: section 2032A(a)(2), as indexed for 2026, limits the aggregate decrease to $1,460,000, or 9.73 percent of the exclusion.[4][14] The clawback: section 2032A(c)(1) adds estate tax if the heir disposes of the property within 10 years. And electing it sets the heir's basis at the special-use value rather than fair market value under section 1014(a)(3), so a lower estate value buys a lower basis.[1][14]\n\nThe alternate valuation date is simpler and sometimes free money. Section 2032 lets the executor value everything as of six months after death, and section 2032(c) allows the election only when it decreases both the gross estate and the tax.[15] For a hotel in a falling market that is worth running. It moves the step-up down by the same amount, which is the trade."
    },
    {
      h2: "Should I gift the hotel to my children during my lifetime instead?",
      lead: "A gift gives up the step-up entirely: section 1015 carries your basis to the donee, so the built-in gain survives.[16]",
      body: "Section 1015(a) sets the donee's basis at the donor's basis. Gift the hotel at $18,000,000 with a $5,102,564.10 basis and your children own an $18,000,000 asset with a $5,102,564.10 basis, and the whole built-in gain is still waiting. The annual exclusion does not change that: Rev. Proc. 2025-32 puts the 2026 figure at $19,000 per recipient, a rounding error against a hotel.[4][16]\n\nGifting can still win where 40 percent estate tax on future appreciation is the binding problem rather than capital gains, because a gift freezes the value at today's number. That is a trade between two different taxes and it needs a lawyer, not a broker.\n\nOne case where geography does the work for free. In the nine community property states, Publication 551 says that when either spouse dies the total value of the community property, including the surviving spouse's half, generally becomes the basis of the whole property.[2] A hotel held as community property in California, Texas, Washington, Arizona, Nevada, Idaho, Louisiana, New Mexico or Wisconsin can get a full step-up on the first death rather than a half step-up, which is a material difference on an asset this size and nothing the owner has to do."
    },
    {
      h2: "What does my estate need in hand before any of this works?",
      lead: "A defensible value as of the date of death, a return inside nine months, and a basis figure that matches what the return reported.[1][10]",
      body: "Every number above runs off one input: what the hotel was worth on the day the owner died. Section 1014(f) caps the heir's basis at the value finally determined for estate tax purposes, and Publication 551 explains the Schedule A to Form 8971 the executor sends the beneficiaries to report it.[1][2] An estate that lowballs the hotel to cut estate tax has also lowballed the basis its heirs will sell against. Under the $15,000,000 exclusion, where no estate tax is due either way, a full documented value is worth money to the family.\n\nThe return is due nine months after death under section 6075(a), which is also the deadline for the section 6166 election and the portability election.[3][9][10] That is less time than it sounds like for an estate deciding whether to keep running a hotel.\n\nWhat the file needs is a hotel appraisal from a qualified appraiser. Matthews Hotel Markets sells hotels and arranges hotel debt, and does not appraise hotels, give tax advice or write estate plans: the free broker opinion of value we do provide is a market read for the hold-or-sell decision, not a Form 706 valuation. Get the appraisal from an appraiser and the plan from counsel, and use the value opinion for the one question that is ours, which is what the hotel would bring if the family sold it."
    }
  ],
  table: {
    caption: "Three routes for a hotel owner, under the 2026 federal rules",
    columns: [
      "Route",
      "Basis to the next owner",
      "Income tax on the built-in gain",
      "Estate tax exposure",
      "Deferral available"
    ],
    rows: [
      [
        "Sell now",
        "Buyer's basis is the price paid",
        "Paid in the year of sale: up to 25% on depreciation, up to 20% on the rest[6]",
        "Only on the after-tax cash left in the estate",
        "Installment sale spreads gain, not recapture"
      ],
      [
        "Hold until death",
        "Fair market value at the date of death, section 1014(a)(1)[1]",
        "None. The gain and the depreciation are both erased[1]",
        "Full date-of-death value, less the mortgage under section 2053",
        "Section 6166: up to 14 years if the hotel is over 35% of the adjusted gross estate[9]"
      ],
      [
        "Gift during life",
        "Carryover: the donor's adjusted basis, section 1015(a)[16]",
        "Survives in the donee's hands, payable when the donee sells[16]",
        "Value frozen at the gift date; $19,000 annual exclusion per recipient in 2026[4]",
        "None for the donee's income tax"
      ],
      [
        "Hold, with a section 2032A election",
        "The special-use value, not fair market value, section 1014(a)(3)[1]",
        "Larger than under a full step-up, because the basis is lower[1][14]",
        "Reduced by at most $1,460,000 in 2026[4][14]",
        "Additional estate tax if the heir disposes within 10 years[14]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet puts Prime at 7.00% as of September 30, 2026, which is the number to hold the section 6166 deferral against: 2 percent on the first $776,000 of deferred estate tax and 3.15 percent above it both sit below the Prime rate on the same sheet.[17]"
  },
  workedExample: {
    label: "Worked example (hypothetical): 112-key select-service hotel, $18,000,000, owner dies in 2026",
    body: "Hypothetical, not a transaction, and every input is an assumption rather than a market figure. A single owner, unmarried, no charitable bequest. A 112-key select-service hotel is worth $18,000,000 on the date of death, or $160,714 a key. Bought in January 2001 for $11,000,000, allocated $1,800,000 to land and $9,200,000 to the building, depreciated straight-line over the 39-year period Publication 946 sets for nonresidential real property.[8] A $6,000,000 mortgage is outstanding, other assets are $2,000,000, administration is $400,000, and FF&E is left out.\n\nBasis. $9,200,000 over 39 years is $235,897.44 a year, so 25 full years from 2001 through 2025 is $5,897,435.90 of depreciation. Adjusted basis is $5,102,564.10.\n\nRoute A, sell in 2026. Gain is $12,897,435.90. The $5,897,435.90 of depreciation is unrecaptured section 1250 gain at 25 percent, or $1,474,358.98; the remaining $7,000,000 is capital gain at 20 percent, or $1,400,000. Federal income tax is $2,874,358.98, assuming the owner materially participates so no net investment income tax applies.[6][7] After the loan and the tax, $9,125,641.02 of cash is left; add the $2,000,000 and deduct the $400,000 and the taxable estate is $10,725,641.02, under the exclusion, so no estate tax.[3]\n\nRoute B, hold. The gross estate is $20,000,000, less the $6,000,000 mortgage and $400,000 of administration, for a $13,600,000 taxable estate, also under the exclusion.[3][5] The heirs take the hotel at $18,000,000 under section 1014(a)(1) and sell at that price, so the gain is zero.[1] The family nets $13,600,000 against $10,725,641.02, a difference of $2,874,358.98, the income tax, to the dollar. If they keep it instead, a hypothetical allocation of $13,500,000 to the building gives $346,153.85 a year of depreciation against the $235,897.44 the owner was deducting.[8]\n\nNow make the estate big enough for estate tax. Three hotels worth $30,000,000 and $12,000,000 of other assets give a $42,000,000 gross estate; $8,000,000 of mortgages and administration is deductible under section 2053, leaving a $34,000,000 adjusted gross estate and the same taxable estate.[9] Estate tax is $345,800 plus 40 percent of $33,000,000, less the $5,945,800 credit, or $7,600,000, the same as a flat 40 percent of the $19,000,000 above the exclusion.[3][5]\n\nSection 6166. The hotels are 88.24 percent of the adjusted gross estate, past the 35 percent test, so $7,600,000 times 30 over 34, or $6,705,882.35, can go on installments, leaving $894,117.65 due with the return and ten installments of $670,588.24 from year five to year fourteen.[9] First-year interest, before any principal: 2 percent on the $776,000 two-percent portion is $15,520, and 3.15 percent on the remaining $5,929,882.35 is $186,791.29, for $202,311.29.[11][12] The same balance at the 7.00 percent Prime rate on our October 2026 rate sheet would cost $469,411.76, so the deferral saves $267,100.47 in year one, and commits the family to holding.[17][9]\n\nEvery figure above was recomputed by scripts/check-estate-tax-math.mjs."
  },
  faq: [
    {
      q: "What is the estate tax exemption in 2026?",
      a: "$15,000,000 per person. Section 2010(c)(3)(A) sets the basic exclusion amount at that figure for deaths after December 31, 2025, and it is not indexed for inflation until 2027.[3][4]"
    },
    {
      q: "Do my heirs get a step-up in basis on a hotel?",
      a: "Yes. Section 1014(a)(1) gives them the fair market value at the date of death, so both the appreciation and the depreciation you took are erased rather than deferred.[1][2]"
    },
    {
      q: "Will my hotel trigger estate tax?",
      a: "Only if the whole taxable estate exceeds $15,000,000 for a 2026 death. The mortgage is deductible under section 2053, so a hotel carrying debt contributes its net value, not its price.[3]"
    },
    {
      q: "Can my estate pay the estate tax in installments?",
      a: "Section 6166 allows up to 10 installments, with the first deferred up to 5 years, if a closely held business interest exceeds 35 percent of the adjusted gross estate. The election is due with the return.[9][10]"
    },
    {
      q: "What interest does the IRS charge on deferred estate tax?",
      a: "Two percent on the 2-percent portion, which is $776,000 for 2026, and 45 percent of the underpayment rate above that. At the 7 percent rate for the quarter beginning October 1, 2026, that second leg is 3.15 percent.[4][11][12]"
    },
    {
      q: "Does selling the hotel end the installment deferral?",
      a: "Yes. Once sales, distributions and withdrawals reach 50 percent of the value of the business interest, section 6166(g) makes the unpaid balance due on notice and demand. Transfers to heirs under the will are carved out.[9]"
    },
    {
      q: "Is it better to gift my hotel or leave it in my will?",
      a: "On income tax, the will. Section 1015 carries your basis to the donee, so a gift keeps the built-in gain alive, while a bequest erases it under section 1014.[1][16]"
    },
    {
      q: "Can a hotel use special-use valuation under section 2032A?",
      a: "Potentially, since qualified use includes a non-farming trade or business, but the 2026 reduction is capped at $1,460,000, the heir's basis drops with it, and a disposition within 10 years triggers additional tax.[4][14]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S. Code section 1014, Basis of property acquired from a decedent (subsections (a), (e) and (f))",
      url: "https://www.law.cornell.edu/uscode/text/26/1014",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-27"
    },
    {
      n: 2,
      label: "Publication 551 (Basis of Assets): Inherited Property, Community Property and the Schedule A to Form 8971 (page last reviewed April 30, 2026)",
      url: "https://www.irs.gov/publications/p551",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-27"
    },
    {
      n: 3,
      label: "26 U.S. Code section 2010, Unified credit against estate tax (basic exclusion amount; portability; as amended by Pub. L. 119-21 section 70106, July 4, 2025)",
      url: "https://www.law.cornell.edu/uscode/text/26/2010",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-27"
    },
    {
      n: 4,
      label: "Rev. Proc. 2025-32, sections 3.14, 3.41, 3.42 and 3.51 (2026 inflation-adjusted amounts), I.R.B. 2025-45, November 3, 2025",
      url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-27"
    },
    {
      n: 5,
      label: "26 U.S. Code section 2001, Imposition and rate of tax (subsection (c), rate schedule)",
      url: "https://www.law.cornell.edu/uscode/text/26/2001",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-27"
    },
    {
      n: 6,
      label: "Topic no. 409, Capital gains and losses (20% top rate; 25% maximum on unrecaptured section 1250 gain; page last reviewed September 24, 2026)",
      url: "https://www.irs.gov/taxtopics/tc409",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-27"
    },
    {
      n: 7,
      label: "Topic no. 559, Net investment income tax (3.8% rate; $250,000 and $200,000 thresholds; page last reviewed September 24, 2026)",
      url: "https://www.irs.gov/taxtopics/tc559",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-27"
    },
    {
      n: 8,
      label: "Publication 946 (How To Depreciate Property): 39-year recovery period for nonresidential real property under the general depreciation system",
      url: "https://www.irs.gov/publications/p946",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-27"
    },
    {
      n: 9,
      label: "26 U.S. Code section 6166, Extension of time for payment of estate tax where estate consists largely of interest in closely held business (subsections (a), (b)(6), (b)(9), (d) and (g))",
      url: "https://www.law.cornell.edu/uscode/text/26/6166",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-27"
    },
    {
      n: 10,
      label: "26 U.S. Code section 6075, Time for filing estate and gift tax returns (subsection (a), nine months)",
      url: "https://www.law.cornell.edu/uscode/text/26/6075",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-27"
    },
    {
      n: 11,
      label: "26 U.S. Code section 6601, Interest on underpayment, nonpayment, or extensions of time for payment of tax (subsection (j), the 2-percent portion)",
      url: "https://www.law.cornell.edu/uscode/text/26/6601",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-27"
    },
    {
      n: 12,
      label: "Interest rates remain the same for the fourth quarter of 2026 (IR-2026-98, August 21, 2026; 7% underpayment rate for the quarter beginning October 1, 2026; Rev. Rul. 2026-15)",
      url: "https://www.irs.gov/newsroom/interest-rates-remain-the-same-for-the-fourth-quarter-of-2026",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-27"
    },
    {
      n: 13,
      label: "Rev. Rul. 2006-34, real property interests and closely held businesses under section 6166 (six-factor test; Situations 2 and 3 on management companies), I.R.B. 2006-26",
      url: "https://www.irs.gov/irb/2006-26_IRB",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-27"
    },
    {
      n: 14,
      label: "26 U.S. Code section 2032A, Valuation of certain farm, etc., real property (subsections (a)(2), (b)(2), (c)(1) and (e)(8))",
      url: "https://www.law.cornell.edu/uscode/text/26/2032A",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-27"
    },
    {
      n: 15,
      label: "26 U.S. Code section 2032, Alternate valuation (six-month date; subsection (c), the election must decrease both the gross estate and the tax)",
      url: "https://www.law.cornell.edu/uscode/text/26/2032",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-27"
    },
    {
      n: 16,
      label: "26 U.S. Code section 1015, Basis of property acquired by gifts and transfers in trust (subsection (a), carryover basis)",
      url: "https://www.law.cornell.edu/uscode/text/26/1015",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-27"
    },
    {
      n: 17,
      label: "Hotel loan rates, October 2026 edition (Prime 7.00% as of September 30, 2026)",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-10-27"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/1031-without-buying-another-hotel",
      "/sell-a-hotel/tax-clearance-and-withholding",
      "/sell-a-hotel/how-to-sell-a-hotel"
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/bov",
      "/glossary/per-key"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Get a broker opinion of value",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells hotels and arranges hotel debt, and does not appraise hotels or write estate plans: what we can tell a family deciding whether to hold or sell is what the hotel would bring today."
};

export default page;
