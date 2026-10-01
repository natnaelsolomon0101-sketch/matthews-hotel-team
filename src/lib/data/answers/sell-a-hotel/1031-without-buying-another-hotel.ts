/**
 * Can I do a 1031 exchange without buying another hotel?
 * Answer page: /sell-a-hotel/1031-without-buying-another-hotel
 *
 * Sources fetched and read 2026-09-28. Worked example arithmetic checked by script.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "1031-without-buying-another-hotel",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "1031 Exchange Without Buying Another Hotel",
  h1: "Can I do a 1031 exchange without buying another hotel?",
  description: "Section 1031 requires like-kind real property, not another hotel. What a Delaware statutory trust is, why it qualifies, and what an owner gives up.",
  lastUpdated: "2026-10-01",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can I do a 1031 exchange without buying another hotel?",
    "Do I need a 1031 exchange lined up before I sell my hotel?",
    "What property types qualify for a 1031 exchange into a hotel?",
    "Can I 1031 exchange out of a hotel into something passive?",
    "What is a DST and can I 1031 into one?",
    "Can I 1031 exchange out of an apartment building into a hotel?",
    "How do I defer tax on a hotel sale without becoming an operator again?"
  ],
  answer: "Yes. Section 1031 requires like-kind real property, not another hotel.[1] Revenue Ruling 2004-86, published August 16, 2004, holds that an interest in a properly structured Delaware statutory trust is treated as an interest in the trust's real property, so it qualifies.[2] The price is control: that trust's trustee may not refinance, re-lease or sell the building.",
  takeaways: [
    "All real property held for investment or business use is like kind to all other such real property, so a hotel seller may exchange into retail, industrial or a qualifying trust interest.[1]",
    "Revenue Ruling 2004-86 works because the trust is a grantor trust: each owner is treated as owning an undivided fractional interest in the building, not a certificate.[2]",
    "Five trustee powers break it. Sell and reinvest, re-lease, refinance, trade cash for profit, or make more than minor structural changes, and the trust becomes a business entity.[2]",
    "The ruling's fact pattern is a net lease at fixed rent not contingent on gross sales or net profits.[2] A hotel does not pay rent like that, so one held this way sits under a master lease.",
    "These interests are securities sold under Rule 506(c), so only verified accredited investors may buy.[5][6] Matthews Hotel Markets is a brokerage, not a broker-dealer, and does not sell them."
  ],
  sections: [
    {
      h2: "Does a 1031 exchange require me to buy another hotel?",
      lead: "No. The statute asks for real property of like kind held for productive use in a trade or business or for investment, and every category of real property held that way is like kind to every other.[1]",
      body: "Section 1031(a)(1) suspends gain when real property held for productive use in a trade or business or for investment is exchanged solely for real property of like kind to be held the same way.[1] Nothing in it mentions asset class. A seller leaving a 120-key select-service hotel may exchange into a shopping center, a warehouse, raw land held for investment, or a fractional interest in a single larger building.\n\nTwo limits matter more than the like-kind test. Section 1031 now reaches real property only, so the furniture, fixtures and equipment sold with a hotel, and the [going-concern value](/glossary/going-concern-value) element of the price, fall outside it. That split is covered at [1031 exchanges into and out of hotels](/hotel-financing/1031-exchange-hotels) and [What taxes do I pay when I sell my hotel?](/sell-a-hotel/taxes-when-selling-a-hotel). And section 1031(a)(2) excludes real property held primarily for sale, so a developer's inventory does not qualify.[1]"
    },
    {
      h2: "What is a Delaware statutory trust and why does an interest in one qualify?",
      lead: "It is an unincorporated entity formed under Delaware law that holds property for investment, and it qualifies because the Internal Revenue Service treats a properly limited one as a trust rather than a business entity.[2][8]",
      body: "The Delaware Statutory Trust Act, at title 12, chapter 38 of the Delaware Code, recognises the trust as an entity separate from its owners and gives beneficial owners the same limitation on personal liability Delaware extends to corporate stockholders.[8]\n\nFederal tax law then asks a narrower question. Under 26 CFR 301.7701-4(c)(1), an investment trust with a single class of interests representing undivided beneficial interests in its assets is classified as a trust only if there is no power to vary the investment of the certificate holders. A power to vary exists where a managerial power lets the trust take advantage of market variations to improve the investment.[3]\n\nRevenue Ruling 2004-86 applied that test to a trust holding one net-leased building subject to one nonrecourse loan, and held two things. The trust is an investment trust classified as a trust. And a taxpayer may exchange real property for an interest in it without recognising gain or loss under section 1031, if the other requirements of section 1031 are met.[2]\n\nThe reasoning is what makes it work. Because the trust is a grantor trust, each beneficial owner is treated as owning an undivided fractional interest in the building itself. So the exchange is an exchange of real property for an interest in real property, not for a certificate of beneficial interest.[2]"
    },
    {
      h2: "What is the trustee forbidden to do?",
      lead: "Five things. Revenue Ruling 2004-86 says that if the trustee holds any one of them, the trust is a business entity, which for two or more owners means a partnership, and the exchange no longer qualifies.[2]",
      body: "The ruling lists them plainly. The trustee may not dispose of the property and acquire new property. It may not renegotiate the lease or enter into leases with other tenants. It may not renegotiate or refinance the debt used to buy the property. It may not invest cash received to profit from market fluctuations. And it may not make more than minor non-structural modifications that are not required by law.[2]\n\nIn the ruling's own facts the trustee's activities are limited to collecting and distributing income, it must distribute available cash less reserves quarterly, and between distributions it may hold cash only in short-term government obligations or bank certificates of deposit held to maturity.[2] The trust terminates on the earlier of ten years or the sale of the property.\n\nFrom an owner's chair that list says something blunt. The lease is fixed, the loan is fixed, the exit is fixed, and the owner has no vote. The powers that would make the trust a business are the same powers that would make it fail the test."
    },
    {
      h2: "Can one of these trusts hold a hotel?",
      lead: "Hotel offerings exist and are filed with the Securities and Exchange Commission, but a hotel does not throw off the fixed rent the ruling's fact pattern assumes, so the operating business has to sit outside the trust under a master lease.[2][5]",
      body: "In the ruling, the property is leased to a single tenant at a fixed rent, adjustable only by a formula tied to a fixed rate or an objective index outside the parties' control, and expressly not contingent on the tenant's gross sales or net profits.[2] A hotel's income is operating income. It moves nightly with rate and occupancy, and a trustee forbidden to renegotiate a lease cannot manage that.\n\nSo a hotel held this way puts the trust in as landlord and an operating lessee in as tenant under a master lease, which keeps the trust passive and moves the operating risk to the lessee. Revenue Ruling 2004-86 does not address that structure, and no public source publishes what master-lease rent a sponsor sets or how a deal splits the economics. Those terms live in a private placement memorandum that only a prospective investor sees.\n\nThe offerings themselves are public record. Driftwood Hotel Income I, DST, a Delaware entity based in Coral Gables, Florida, filed a Form D with the Securities and Exchange Commission on June 25, 2026 reporting a first sale on April 15, 2026, a total offering of $23,975,543, $4,862,787 sold, $19,112,756 remaining and a minimum investment of $25,000.[5] That is one filing, not a market, but it is evidence the structure is being used for hotels."
    },
    {
      h2: "How do the 45-day and 180-day clocks work if I go this route?",
      lead: "They are unchanged. Replacement property must be identified within 45 days of transferring the hotel and received within 180 days, or by the return due date for that tax year if that is earlier.[1]",
      body: "Section 1031(a)(3) sets both deadlines and they are not extended because the replacement is a trust interest.[1] The identification rules in 26 CFR 1.1031(k)-1(c) set what may go on the list. A taxpayer may identify three properties without regard to value under the 3-property rule, or any number of properties whose aggregate fair market value at the end of the identification period does not exceed 200 percent of the value of everything relinquished, under the 200-percent rule.[4]\n\nIdentify more than either rule allows and the taxpayer is treated as if nothing had been identified at all, subject to a narrow saving rule: an identification still counts for replacement property received before the identification period ends, and for property received before the exchange period ends if what is received is worth at least 95 percent of everything identified.[4] The description has to be unambiguous, by legal description, street address or distinguishable name.[4] This is where these interests get used defensively: an owner whose main target is another hotel can name a trust interest as a backup on the same list, because it is subscribed for a stated dollar amount rather than negotiated."
    },
    {
      h2: "Who is actually allowed to buy one?",
      lead: "Verified accredited investors, in the offerings sold under Rule 506(c), which is the exemption the Driftwood filing claims.[5][6]",
      body: "An interest in one of these trusts is a security. The Driftwood Form D claims the exemption at 17 CFR 230.506(c).[5] Under that rule the issuer must take reasonable steps to verify that every purchaser is an accredited investor. The rule lists methods that satisfy it: reviewing two years of income tax forms, reviewing asset and liability documentation dated within the prior three months, or obtaining written confirmation from a registered broker-dealer, a registered investment adviser, a licensed attorney or a certified public accountant who verified the purchaser within the prior three months.[6]\n\nThe threshold itself is at 17 CFR 230.501(a). A natural person qualifies on individual or joint net worth above $1,000,000, excluding the primary residence, or on individual income above $200,000 in each of the two most recent years, or joint income with a spouse above $300,000 in each of those years, with a reasonable expectation of the same in the current year.[7]\n\nTwo things follow. Verification is documentary, not a checkbox, so it takes time a 45-day clock does not give back. And the interest is sold through securities professionals. Matthews Hotel Markets sells hotels and represents buyers on hotel acquisitions. It is a real estate brokerage, not a broker-dealer, and does not sell, recommend or take compensation on these interests. An owner considering one needs a CPA and a securities-licensed adviser engaged before the hotel closes, not after."
    },
    {
      h2: "What are the alternatives if this does not fit?",
      lead: "Buying another hotel, buying a single-tenant net-leased property outright, taking a tenancy-in-common interest, or paying the tax and keeping the cash.",
      body: "Buying another hotel keeps control and keeps the depreciation running. The buy side is at [How do I make an offer on a hotel?](/buy-a-hotel/how-to-make-an-offer) and [How do I underwrite a hotel acquisition?](/buy-a-hotel/how-to-underwrite-a-hotel-deal).\n\nBuying a net-leased building outright gets most of the passivity without the securities wrapper, at the cost of needing enough proceeds for a whole asset and of concentrating the risk in one tenant. It is priced off a [cap rate](/glossary/cap-rate) on contractual rent rather than on operating income, which is a different risk to underwrite than a hotel's. A tenancy-in-common interest is direct co-ownership rather than a trust interest, so it reaches section 1031 on different reasoning and gives co-owners votes a trust beneficiary does not have. It also requires those co-owners to agree.\n\nPaying the tax deserves saying out loud. An exchange defers tax; it does not forgive it. Sizing the bill starts with knowing what the hotel is worth, which is what a [broker opinion of value](/glossary/bov) is for. An owner who takes a structure they do not understand, cannot exit, and would not have bought on its merits has paid more than the tax bill to avoid the tax bill. A 45-day deadline is exactly the condition under which that decision gets made badly."
    }
  ],
  table: {
    caption: "Where hotel sale proceeds can go under section 1031, September 2026",
    columns: [
      "Option",
      "What the seller owns",
      "Who runs the asset",
      "Basis for 1031 treatment",
      "Main constraint"
    ],
    rows: [
      [
        "Another hotel",
        "The real property, plus FF&E and the business outside the exchange",
        "The seller, or their manager",
        "Real property of like kind, 26 U.S.C. 1031(a)(1)[1]",
        "Back in the operating business; FF&E and going-concern value fall outside it[1]"
      ],
      [
        "Single-tenant net-leased property, bought outright",
        "The whole building",
        "The tenant, under its lease",
        "Real property of like kind, 26 U.S.C. 1031(a)(1)[1]",
        "Needs enough proceeds to buy a whole asset; risk sits in one tenant"
      ],
      [
        "Delaware statutory trust interest",
        "An undivided fractional interest in the trust's real property[2]",
        "Nobody, by design; the trustee only collects and distributes income[2]",
        "Rev. Rul. 2004-86, on 26 CFR 301.7701-4(c)(1)[2][3]",
        "Five trustee powers are forbidden;[2] a security under Rule 506(c), so accredited investors only[5][6][7]"
      ],
      [
        "Tenancy-in-common interest",
        "A direct undivided interest in the real property",
        "The co-owners, through their agreement",
        "Direct co-ownership of real property, 26 U.S.C. 1031(a)(1)[1]",
        "Co-owners must agree; lenders and buyers price that friction"
      ],
      [
        "Pay the tax",
        "Cash",
        "Not applicable",
        "Not applicable",
        "Federal and state tax on gain and recapture, due in the year of sale"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "The choice is partly a debt question, because a replacement hotel's return depends on what the loan costs. Matthews Hotel Markets' October 2026 rate sheet prints the 10-year Treasury at 5.29% on September 30, 2026 and Prime at 7.00%, unchanged since September 17, and marks every lender-set spread, leverage ceiling and coverage floor not yet published, because lenders do not publish them.[9]"
  },
  workedExample: {
    label: "Hypothetical: a four-property identification list on a $9,000,000 hotel sale",
    body: "Hypothetical. Every figure is an assumption for the arithmetic.\n\nAn owner sells a hotel for $9,000,000 with a $3,600,000 mortgage and pays selling costs of 3.5 percent, or $9,000,000 x 0.035 = $315,000. Cash to the seller is $9,000,000 - $3,600,000 - $315,000 = $5,085,000. To defer the whole gain the replacement side has to absorb the cash and the debt: $5,085,000 + $3,600,000 = $8,685,000.\n\nNow the 45-day list. Two hundred percent of the $9,000,000 relinquished is $18,000,000.[4] The owner identifies four properties: a hotel at $6,000,000, a second hotel at $4,000,000, a net-leased building at $3,000,000 and a trust interest at $2,500,000. That is $6,000,000 + $4,000,000 + $3,000,000 + $2,500,000 = $15,500,000. Four properties fails the 3-property rule, but $15,500,000 is below the $18,000,000 cap, so the 200-percent rule carries the list.[4]\n\nChange one entry and it breaks. Identify $6,000,000, $5,000,000, $4,500,000 and $3,000,000 and the total is $18,500,000, which is $500,000 over the cap. With four properties and no rule satisfied, the taxpayer is treated as having identified no replacement property at all, and the exchange fails unless the narrow saving rule in 26 CFR 1.1031(k)-1(c)(4)(ii) applies.[4] The margin is arithmetic, and it is checked on day 45, not on day 180."
  },
  faq: [
    {
      q: "Can I 1031 out of a hotel into something other than a hotel?",
      a: "Yes. Section 1031 asks for real property of like kind held for productive use or investment, not for the same asset class.[1] Retail, industrial, land held for investment and qualifying fractional interests all reach it."
    },
    {
      q: "What is a DST in a 1031 exchange?",
      a: "A Delaware statutory trust holding real property for investment. Revenue Ruling 2004-86 holds that an interest in a properly limited one is treated as an interest in the underlying real property, so it qualifies under section 1031.[2]"
    },
    {
      q: "Why can't the trustee refinance or re-lease the property?",
      a: "Because those powers would let the trust vary the investment, making it a business entity rather than a trust under 26 CFR 301.7701-4(c)(1). Revenue Ruling 2004-86 lists five such powers, any one of which breaks the exchange.[2][3]"
    },
    {
      q: "Can a Delaware statutory trust own a hotel?",
      a: "Hotel offerings are filed with the SEC.[5] A hotel does not pay fixed rent, so the operating business sits outside the trust under a master lease. Revenue Ruling 2004-86 does not address that structure.[2]"
    },
    {
      q: "Do I still get 45 and 180 days?",
      a: "Yes, unchanged.[1] Identify within 45 days under the 3-property rule or the 200-percent rule, and close within 180 days or by your return due date for that year, whichever comes first.[1][4]"
    },
    {
      q: "Do I have to be an accredited investor?",
      a: "For offerings sold under Rule 506(c), yes, and the issuer must verify it.[6] The thresholds are net worth above $1,000,000 excluding your home, or income above $200,000 individually or $300,000 jointly for two years.[7]"
    },
    {
      q: "Does Matthews Hotel Markets sell these interests?",
      a: "No. Matthews Hotel Markets sells hotels and represents hotel buyers. It is a real estate brokerage, not a broker-dealer, so it does not sell or recommend trust interests. Use a CPA and a securities-licensed adviser."
    },
    {
      q: "Should I line this up before I sell?",
      a: "Yes. Verification of accredited status is documentary and takes time, and the 45-day identification clock starts when the hotel transfers.[1][6] Engage a qualified intermediary and a CPA before closing, not after."
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S.C. 1031, Exchange of real property held for productive use or investment (subsections (a)(1), (a)(2) and (a)(3))",
      url: "https://www.law.cornell.edu/uscode/text/26/1031",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-28"
    },
    {
      n: 2,
      label: "Rev. Rul. 2004-86, Internal Revenue Bulletin 2004-33, August 16, 2004 (classification of a Delaware statutory trust and section 1031 treatment)",
      url: "https://www.irs.gov/irb/2004-33_IRB",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-28"
    },
    {
      n: 3,
      label: "26 CFR 301.7701-4, Trusts (paragraph (c), investment trusts)",
      url: "https://www.law.cornell.edu/cfr/text/26/301.7701-4",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-28"
    },
    {
      n: 4,
      label: "26 CFR 1.1031(k)-1, Treatment of deferred exchanges (paragraph (c), identification: the 3-property rule, the 200-percent rule and the 95-percent rule)",
      url: "https://www.law.cornell.edu/cfr/text/26/1.1031(k)-1",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-28"
    },
    {
      n: 5,
      label: "Form D, Driftwood Hotel Income I, DST (CIK 0002142222), filed June 25, 2026: first sale April 15, 2026; total offering $23,975,543; sold $4,862,787; remaining $19,112,756; minimum investment $25,000; exemption claimed 06c",
      url: "https://www.sec.gov/Archives/edgar/data/2142222/000214222226000001/primary_doc.xml",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-28"
    },
    {
      n: 6,
      label: "17 CFR 230.506, Exemption for limited offers and sales without regard to dollar amount of offering (paragraph (c), verification of accredited investor status)",
      url: "https://www.law.cornell.edu/cfr/text/17/230.506",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-28"
    },
    {
      n: 7,
      label: "17 CFR 230.501, Definitions (paragraph (a)(5) and (a)(6), accredited investor net worth and income tests)",
      url: "https://www.law.cornell.edu/cfr/text/17/230.501",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-28"
    },
    {
      n: 8,
      label: "Delaware Statutory Trust Act, title 12, chapter 38 of the Delaware Code",
      url: "https://delcode.delaware.gov/title12/c038/index.html",
      publisher: "State of Delaware",
      accessed: "2026-09-28"
    },
    {
      n: 9,
      label: "Hotel loan rate sheet, September 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-28"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/what-buyers-look-for"
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/cap-rate",
      "/glossary/bov"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk to the hospitality desk about your sale",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells hotels from $2 million and represents buyers on hotel acquisitions, including 1031 buyers. It is a real estate brokerage, not a broker-dealer, so it does not sell or recommend Delaware statutory trust interests."
};

export default page;
