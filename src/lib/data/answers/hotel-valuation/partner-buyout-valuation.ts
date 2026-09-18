/**
 * How is a hotel valued when I buy out my partner?
 * Answer page: /hotel-valuation/partner-buyout-valuation
 *
 * Written 2026-09-18. Covers partnership and LLC buyouts only. Divorce
 * valuation is state family law and was not sourced, so it is named and left
 * to counsel. Sources fetched and read 2026-09-18. SOP page numbers are the
 * SOP's own printed page numbers. Arithmetic checked by script.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "partner-buyout-valuation",
  cluster: "hotel-valuation",
  isHub: false,
  title: "Valuing a Hotel for a Partner Buyout",
  h1: "How is a hotel valued when I buy out my partner?",
  description: "Buying out a hotel partner: what your agreement says, fair market value versus fair value, who appraises, how SBA finances a partner buyout, and the tax.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I value a hotel?",
    "How do I get a confidential valuation on my hotel before deciding to sell?",
    "How is a hotel valued when I buy out my partner?",
    "My partner and I own a hotel 60/40 and he wants out. How do we set the price?",
    "Can I get an SBA loan to buy out my partner in a hotel?",
    "Is a minority interest in a hotel worth less than its share of the hotel?",
    "What is the difference between fair market value and fair value in a buyout?"
  ],
  answer: "Start with your operating agreement. Its definition of value controls. Then value the whole hotel as a going concern, subtract the debt, and apply the agreement's rule to the departing partner's share. If an SBA 7(a) loan funds it, SOP 50 10 8, effective June 1, 2025, requires an independent valuation and tests a 9 to 1 debt-to-worth limit when the loan covers more than 90 percent of the price.[1][2]",
  takeaways: [
    "Two numbers get confused: the value of the hotel, and the value of a partner's interest in the entity that owns it. The second is the first minus debt, times the ownership share, and then whatever your agreement says about discounts.",
    "Fair market value is the willing buyer, willing seller price, with neither forced to act and both informed.[3] Applied to a minority interest it can support discounts. Fair value, as used in buyout statutes, is often read differently. Your agreement should say which one applies.",
    "Delaware's LLC Act, absent other agreement, gives a resigning member the fair value of the interest based on the right to share in distributions.[4]",
    "For an SBA-financed buyout of a hotel, the lender, not the partners, must order the valuation, from a Certified General appraiser with recent going-concern experience, and it must allocate value among land, building, equipment and intangibles.[1]",
    "The selling partner's gain is usually capital gain, but the share tied to depreciation recapture is ordinary income.[5]"
  ],
  sections: [
    {
      h2: "Where do I start when a hotel partner wants out?",
      lead: "Start with the partnership or operating agreement, because a buyout clause that defines the price or the method overrides everything else on this page.",
      body: "A buyout dispute often starts as a dispute over a definition. Read the agreement for four things: what triggers a buyout (a voluntary exit, death, default, deadlock), the standard of value (fair market value, fair value, book value, a formula), who picks the appraiser or appraisers and what happens if they disagree, and how the price is paid.\n\nIf the agreement is silent, state law fills the gap, and the default may not be what either partner expects. Under Delaware's LLC Act, for example, a resigning member is entitled to what the LLC agreement provides and, if it does not otherwise provide, to the fair value of the member's interest as of the date of resignation, based on the member's right to share in distributions.[4] Other states have their own rules. This is a question for a business attorney in the state where the entity was formed.\n\nThis page covers partner and member buyouts. Valuing a hotel interest in a divorce is governed by state family law, which differs by state and which we have not sourced, so take that question to a family law attorney and a valuation expert."
    },
    {
      h2: "How is the hotel itself valued for a buyout?",
      lead: "The same way it is valued for a sale or a loan: as a going concern, mainly by capitalizing its net operating income, checked against comparable sales.",
      body: "A buyout does not change how a hotel is appraised. The appraiser values the operating hotel using the income approach, tests it against sales of similar hotels, and considers cost. The method is walked through at `/hotel-valuation/how-to-value-a-hotel`, and the cap rates behind it at `/hotel-valuation/hotel-cap-rates`.\n\nFederal bank regulators define market value as the most probable price a property should bring in a competitive and open market under all conditions requisite to a fair sale, with buyer and seller each acting prudently and knowledgeably and the price not affected by undue stimulus.[6] That is the definition a bank appraisal uses.\n\nThree hotel-specific inputs move a buyout number the most: the NOI after a management fee and a furniture reserve, the cost of any open PIP, and the cap rate. Partners who agree on those three are most of the way to a price. A broker opinion of value is a fast way to frame them before paying for an appraisal. The difference between the two is explained at `/hotel-valuation/broker-opinion-of-value`. For a first pass, use `/tools/hotel-value-estimator`."
    },
    {
      h2: "What is the difference between fair market value and fair value?",
      lead: "Fair market value asks what a hypothetical outsider would pay for the interest. Fair value, in buyout statutes, asks what the departing owner's share is worth, and the two can differ by the size of the discounts.",
      body: "The tax definition of fair market value is the price at which property would change hands between a willing buyer and a willing seller, neither being under any compulsion to buy or to sell and both having reasonable knowledge of relevant facts.[3] IRS Revenue Ruling 59-60 applies that standard to closely held businesses and lists factors to weigh, including the nature and history of the business, the economic and industry outlook, book value and financial condition, earning capacity, goodwill, and the size of the block being valued.[7]\n\nThe size of the block is where discounts come from. A hypothetical buyer of a 40 percent interest in a hotel LLC cannot force a sale, set distributions or replace the manager, and cannot easily resell. Appraisers reflect that with discounts for lack of control and lack of marketability. An IRS job aid for its valuation analysts says minority and marketability discounts may or may not be appropriate, based on the specific facts and circumstances, and notes that the job aid is not an official IRS position.[7] We do not publish a typical discount, because it depends on the agreement and the facts.\n\nFair value is a legal term set by state statute and case law, and the agreement can define it too. Delaware's default for a resigning LLC member ties it to the member's right to share in distributions.[4] Whether discounts apply under your state's law is a legal question. The practical point is that the two partners should agree on the standard before anyone orders an appraisal, because the same hotel produces two different checks."
    },
    {
      h2: "Can I use an SBA loan to buy out my hotel partner?",
      lead: "Yes. SBA 7(a) loans can finance a change of ownership between existing owners, with extra tests when the loan covers more than 90 percent of the price.",
      body: "SOP 50 10 8 calls it a complete partner buyout. If the 7(a) loan will finance more than 90 percent of the purchase price, the remaining owner must certify active participation in the business and the same or increasing ownership for at least the past 24 months, and the business's balance sheets for the last fiscal year and current quarter must show debt-to-worth of no more than 9 to 1 before the change. If the lender cannot document both, the remaining owner must put in cash, either enough to reach 9 to 1 or 10 percent of the purchase price, whichever is less (pp. 131-132).[2]\n\nThe valuation rule is strict for hotels. Where there is a close relationship between buyer and seller, and SBA gives transactions between existing owners as its example, and the business operates from a special purpose property, the lender must obtain an independent business valuation from a Certified General Real Property Appraiser who has completed at least four going-concern appraisals of equivalent property in the last 36 months. The valuation must allocate separate values to land, building, equipment and intangible assets, must be ordered by the lender, and may not be one prepared for the applicant or the seller (pp. 139-140).[1] SBA's 504 chapter names hotels, motels and other lodging facilities as limited or special purpose property (p. 355).[1]\n\nRules change on October 1, 2026. SOP 50 10 8.1 renames this an owner buyout, requires at least one original owner to remain and guarantee the loan, and sets required debt service coverage for an owner buyout at 1.25.[8] Under the version in force on September 18, 2026 the ratio is 1.15 (p. 129).[2]\n\nConventional bank loans can fund a buyout too, and banks do not publish their terms. To see what the hotel's income supports, use `/tools/hotel-loan-sizing-calculator`. The SBA programs are compared at `/hotel-financing/sba-7a-vs-504`."
    },
    {
      h2: "How is the partner who sells taxed?",
      lead: "Generally as a capital gain on the sale of the partnership interest, except for the share tied to depreciation recapture, which is ordinary income.",
      body: "IRS Publication 541 says the sale or exchange of a partner's interest usually results in capital gain or loss, measured as the amount realized minus the partner's adjusted basis in the interest. If the selling partner is relieved of partnership liabilities, that relief is part of the amount realized.[5] For a hotel with a mortgage, that matters: the departing partner's share of the debt counts as proceeds even though no cash changes hands for it.\n\nThe exception is what the tax code calls unrealized receivables, which include property subject to depreciation recapture under sections 1245 and 1250. The gain attributable to those items is ordinary income, figured as if the partnership had sold all its property at fair market value just before the transfer.[5] Hotels hold a lot of depreciated furniture and equipment, so part of the gain in a hotel buyout can be ordinary income to the seller.\n\nPaying the price over time is an installment sale, with its own rules, covered at `/buy-a-hotel/seller-financing`. How a sale of the whole hotel is taxed is at `/sell-a-hotel/taxes-when-selling-a-hotel`. Use a CPA who works with partnerships."
    },
    {
      h2: "Should we just sell the hotel instead?",
      lead: "If the partners cannot agree on value, a marketed sale settles it, because the market sets the price and both partners are paid on the same terms.",
      body: "A buyout asks one partner to pay a price nobody has tested. A sale tests it. The tradeoffs are time, transaction costs, taxes on the whole gain instead of one partner's, and the remaining partner losing the hotel. Our published sale process runs about 24 weeks from engagement to closing.[9]\n\nA middle path is to get the market's view without selling: a broker opinion of value gives both partners the same evidence at the same time. If the numbers are close, the buyout proceeds. If they are not, the partners know what a sale would bring. The sale-or-hold decision with debt in the picture is modeled at `/tools/refinance-vs-sell`."
    }
  ],
  table: {
    caption: "Standards of value a hotel partner buyout can use",
    columns: [
      "Standard",
      "Where it comes from",
      "What it measures",
      "Discounts for a minority interest?"
    ],
    rows: [
      [
        "Fair market value",
        "Treasury regulation and Rev. Rul. 59-60[3][7]",
        "Price between a willing buyer and willing seller, neither compelled, both informed",
        "Can apply, because the size of the block is a listed factor[7]"
      ],
      [
        "Fair value",
        "State statute, case law or the agreement; Delaware's LLC default is one example[4]",
        "The owner's interest, in Delaware based on the right to share in distributions",
        "A state law question; ask counsel"
      ],
      [
        "Market value of the hotel",
        "12 CFR 34.42, used in bank appraisals[6]",
        "Most probable price of the property in an open market",
        "Not applicable; this values the asset, not an interest"
      ],
      [
        "Formula or book value",
        "Your agreement",
        "Whatever the formula says",
        "Whatever the agreement says"
      ],
      [
        "SBA business valuation",
        "SOP 50 10 8, for an SBA-financed buyout (pp. 139-140)[1]",
        "Going-concern value allocated to land, building, equipment and intangibles",
        "Not addressed; it supports the loan, not the split"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026, published by Matthews Hotel Markets, puts select-service cap rates at 7.50 to 8.75 percent across 14 markets.[10] On $800,000 of NOI that band is a range of about $9.1 million to $10.7 million, which is why partners should settle the cap rate before they argue about discounts."
  },
  workedExample: {
    label: "Hypothetical: a 40 percent partner exits, under two standards of value",
    body: "Hypothetical. Two partners own a hotel through an LLC, 60 percent and 40 percent. An appraisal puts the hotel's going-concern value at $8,000,000. The mortgage balance is $4,400,000, and the LLC has no other assets or debts.\n\nEquity: $8,000,000 - $4,400,000 = $3,600,000.\n\nPro rata share: $3,600,000 x 40 percent = $1,440,000. If the agreement says the departing member receives a pro rata share of equity with no discounts, this is the price.\n\nFair market value of the interest: if the agreement says fair market value of the interest, and the appraiser applies a combined 20 percent discount for lack of control and marketability, an assumed figure for illustration, the price is $1,440,000 x 0.80 = $1,152,000. The difference is $288,000 on the same hotel.\n\nFinancing. If the 60 percent partner borrows the full $1,440,000 with an SBA 7(a) loan, the loan covers more than 90 percent of the price, so the 24-month certification and the 9 to 1 debt-to-worth test apply. If they cannot both be documented, the remaining partner contributes the lesser of the cash needed to reach 9 to 1 or 10 percent of the price, which is $144,000.[2]\n\nTax. The seller's amount realized includes relief from 40 percent of the mortgage: $4,400,000 x 40 percent = $1,760,000, on top of the cash.[5]"
  },
  faq: [
    {
      q: "How do I value my partner's share of our hotel?",
      a: "Value the whole hotel as a going concern, subtract the debt, multiply by the ownership percentage, then apply whatever your agreement says about discounts or formulas. The agreement's definition of value controls."
    },
    {
      q: "Is a minority interest in a hotel worth less than its percentage of the hotel?",
      a: "Under a fair market value standard it can be, because a hypothetical buyer of a minority interest lacks control and an easy exit. Under a fair value standard or a pro rata clause it may not be. Read the agreement and ask counsel."
    },
    {
      q: "Can I get an SBA loan to buy out my hotel partner?",
      a: "Yes. If the 7(a) loan funds more than 90 percent of the price, SBA requires a 24-month active-owner certification and debt-to-worth of 9 to 1 or better, or a cash contribution.[2]"
    },
    {
      q: "Who orders the appraisal in an SBA partner buyout?",
      a: "The lender. SBA says the valuation must be requested by and prepared for the lender, and for a special purpose property between existing owners it must come from a Certified General appraiser with recent going-concern experience.[1]"
    },
    {
      q: "What is the difference between fair market value and fair value?",
      a: "Fair market value is the willing buyer, willing seller price with neither compelled and both informed.[3] Fair value is set by state statute, case law or your agreement. Delaware's LLC default ties it to the right to share in distributions.[4]"
    },
    {
      q: "How is the partner who is bought out taxed?",
      a: "Usually capital gain on the interest, including the partner's share of debt relief. The part of the gain tied to depreciation recapture is ordinary income.[5]"
    },
    {
      q: "Our agreement says nothing about a buyout. What happens?",
      a: "State law supplies the default. In Delaware, a resigning LLC member gets the fair value of the interest within a reasonable time if the agreement does not say otherwise.[4] See a business attorney in your entity's state."
    },
    {
      q: "How is a hotel valued in a divorce?",
      a: "The hotel itself is appraised the same way, as a going concern. How the owner's interest is valued and divided is state family law, which varies and which this page does not cover. Use a family law attorney and a valuation expert."
    }
  ],
  sources: [
    {
      n: 1,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025): business valuation requirements for a change of ownership (Section B, Ch. 1, pp. 139-140) and limited or special purpose property list (Section C, Ch. 1, p. 355)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "SOP 50 10 8, Section B, Ch. 1: debt service coverage (p. 129) and equity requirements for a complete partner buyout (pp. 131-132)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "26 CFR 20.2031-1(b), Valuation of property in general (fair market value)",
      url: "https://www.law.cornell.edu/cfr/text/26/20.2031-1",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Delaware Code Title 6, section 18-604, Distribution upon resignation",
      url: "https://delcode.delaware.gov/title6/c018/sc06/index.html",
      publisher: "State of Delaware",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Publication 541 (12/2025), Partnerships: Sale, Exchange, or Other Transfer; Payments for Unrealized Receivables and Inventory Items",
      url: "https://www.irs.gov/publications/p541",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "12 CFR 34.42, Definitions (market value)",
      url: "https://www.law.cornell.edu/cfr/text/12/34.42",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Valuation of Non-Controlling Interests in Business Entities Electing To Be Treated as S Corporations for Federal Tax Purposes: A Job Aid for IRS Valuation Analysts (October 29, 2014), quoting Rev. Rul. 59-60 sections 2 and 4 and reprinting the ruling as Appendix A",
      url: "https://www.irs.gov/pub/irs-lbi/S%20Corporation%20Valuation%20Job%20Aid%20for%20IRS%20Valuation%20Professionals.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "SOP 50 10 8.1 (effective October 1, 2026), Appendix 15: 7(a) Changes of Ownership, owner buyout definition and debt service coverage by transaction type",
      url: "https://legacy.sba.gov/sites/default/files/2026-08/SOP%2050%2010%208.1%20effective%2010.1.2026_0.docx",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
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
      "/hotel-valuation/broker-opinion-of-value",
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/property-tax-appeal"
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/bov",
      "/glossary/noi",
      "/glossary/sba-7a"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/tools/hotel-value-estimator",
      "/tools/hotel-loan-sizing-calculator",
      "/tools/refinance-vs-sell"
    ]
  },
  cta: {
    label: "Ask for a broker opinion of value",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets prepares broker opinions of value for hotel owners, which gives two partners the same market evidence before either one names a price."
};

export default page;
