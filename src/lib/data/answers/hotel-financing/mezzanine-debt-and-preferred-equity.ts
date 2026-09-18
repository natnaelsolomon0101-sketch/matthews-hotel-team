/**
 * How do mezzanine debt and preferred equity work on a hotel deal?
 * Answer page: /hotel-financing/mezzanine-debt-and-preferred-equity
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "mezzanine-debt-and-preferred-equity",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Mezzanine Debt vs Preferred Equity (2026)",
  h1: "How do mezzanine debt and preferred equity work on a hotel deal?",
  description: "Where mezzanine debt and preferred equity sit in a hotel deal, what the intercreditor agreement does, what each costs you in control, and a worked example.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "How do mezzanine debt and preferred equity work on a hotel deal?",
    "My bank will only lend 60 percent on my hotel purchase. Can mezzanine debt cover the gap?",
    "What is the difference between mezzanine debt and preferred equity on a hotel?",
    "What is an intercreditor agreement and why does my senior lender care about my mezz loan?",
    "Can a mezzanine lender take my hotel if I miss a payment?",
    "Does my CMBS loan allow me to add mezzanine debt later?",
    "How much does mezzanine debt cost on a hotel deal?",
    "Is preferred equity safer for me than a mezzanine loan?"
  ],
  answer: "Both fill the gap between the first mortgage and your own cash. Mezzanine debt is a loan secured by a pledge of the company that owns the hotel, not by the hotel. Preferred equity is an ownership stake with a priority return. In one CMBS pool dated August 4, 2026, a $3.8 million mezzanine loan carried 11.00 percent behind a senior loan at 7.43 percent.[1]",
  takeaways: [
    "Mezzanine debt is a loan to the borrower's parent company, secured by the ownership interests. The mezzanine lender has no lien on the hotel itself.[2]",
    "Preferred equity is not a loan. The investor becomes a member of the ownership entity and is paid a preferred return before the common owners.[2]",
    "The senior lender controls whether either one is allowed. In one 2026 CMBS pool, a hotel loan prohibited future mezzanine debt outright and another loan permitted it only if combined tests were met.[1]",
    "If a mezzanine loan defaults, the lender can sell the pledged ownership interests under UCC Article 9 and take control of the borrower, with the first mortgage still in place.[3][2]",
    "No lender publishes mezzanine or preferred equity pricing. Public loan disclosures are the only dated evidence, and they are single examples, not a market rate.[4]"
  ],
  sections: [
    {
      h2: "Where do mezzanine debt and preferred equity sit in a hotel deal?",
      lead: "Mezzanine debt and preferred equity both sit behind the first mortgage and ahead of the owner's common equity.",
      body: "The first mortgage is secured by the hotel. Everything behind it is secured by, or invested in, the company that owns the hotel. A CMBS prospectus filed with the SEC in February 2026 puts it plainly: a mezzanine lender has no security interest in the mortgaged property, but a default under the mezzanine loan could cause a change in control of the borrower.[2]\n\nPreferred equity goes one step further from debt. The same prospectus describes it as a structure where one or more special limited partners or members receive a preferred return in exchange for an infusion of capital, and notes that because preferred equity often pays a higher rate of return, it in some respects functions like mezzanine debt.[2]\n\nThe order of payment follows the order of risk. Hotel cash flow pays operating costs, then the first mortgage, then the mezzanine loan or the preferred return, then the common owners. `/hotel-financing/capital-stack` shows all the layers together, including C-PACE and key money, and `/glossary/mezzanine-debt` has the short definition."
    },
    {
      h2: "What is an intercreditor agreement, and what does it let each lender do?",
      lead: "An intercreditor agreement is the contract between the senior lender and the mezzanine lender that sets who gets paid first and who can act after a default.",
      body: "The February 2026 prospectus describes the usual terms. The mezzanine lender's rights, including the right to payment, are subordinate to the mortgage lender's rights, and the mezzanine lender may not take enforcement action against the mortgage borrower or the property.[2] In exchange, the mezzanine lender generally gets two protections: a right to cure certain defaults on the senior loan, and in certain default scenarios a right to purchase the senior loan. So long as its cure right has not expired, it may also hold approval rights over certain modifications of the senior loan.[2]\n\nFor a hotel owner, the practical point is that the two lenders negotiate this document with each other, not with you, and it can slow a closing. In securitized loans, a future mezzanine loan usually also needs an intercreditor agreement acceptable to the senior lender and a rating agency confirmation.[1][2] Bring the mezzanine lender into the process early. `/hotel-financing/how-debt-placement-works` explains the closing sequence."
    },
    {
      h2: "What happens if I default on a hotel mezzanine loan?",
      lead: "A mezzanine lender forecloses on the ownership interests, not on the hotel, and the process runs under the Uniform Commercial Code instead of state mortgage law.",
      body: "UCC section 9-610 lets a secured party sell or otherwise dispose of collateral after default, and requires every aspect of the sale, including the method, manner, time, place and other terms, to be commercially reasonable.[3] There is no judicial mortgage foreclosure, because the collateral is a membership interest, not real estate.\n\nThe result is that the mezzanine lender, or whoever buys at the sale, becomes the owner of the company that owns the hotel. The first mortgage stays in place. The prospectus notes that this transfer of equity may not trigger the due-on-sale clause under the mortgage, but it could cause a change in control of the borrower.[2] The franchise agreement is a separate question. A change of control is usually a transfer under the franchise agreement, so check the brand's consent requirements before assuming the flag stays. `/hotel-financing/loan-workouts` covers the options before a default gets that far."
    },
    {
      h2: "How is preferred equity different for a hotel owner?",
      lead: "Preferred equity gives the investor ownership rights instead of a lender's foreclosure right, so the remedy for a missed payment is written into the operating agreement.",
      body: "A preferred equity investor is a member of your ownership entity. The investor is owed a specified return, or a share of excess cash flow, before the common owners receive anything. The prospectus lists what that means for the owner: dilution of the borrower's equity in the property, stress on cash flow from the preferred return, and potential changes in the management of the property if the preferred return is not satisfied.[2]\n\nThat last item is the remedy. Instead of a UCC sale, the operating agreement usually gives the preferred investor the right to take over decision-making when a payment or a deadline is missed. The terms are negotiated deal by deal and are not published anywhere.\n\nSenior lenders care about the difference. Some loan documents that prohibit mezzanine debt still allow preferred equity, and some treat preferred equity with debt-like features as the same thing. Whether a preferred investment is treated as debt or equity for tax purposes depends on its terms, which is a question for your tax adviser. Matthews Hotel Markets does not give legal or tax advice."
    },
    {
      h2: "Will my senior lender allow mezzanine debt or preferred equity?",
      lead: "Only if the senior loan documents say so, and many hotel loans say no.",
      body: "Public CMBS disclosures show the range. A $76.5 million loan on a 226-room Manhattan hotel, dated June 5, 2026, lists permitted future subordinate or mezzanine debt as not permitted, and makes any period during which a mezzanine loan is outstanding a trigger for lender-controlled cash management.[1] Another loan in the same pool, on a non-hotel property, gives the borrower a one-time right to add a mezzanine loan if the combined loan-to-value is no greater than 41.7 percent, the combined DSCR is at least 2.88 times, the combined debt yield is at least 20.5 percent, and an intercreditor agreement is signed.[1] Those thresholds belong to that loan. They are not a market standard.\n\nThe lesson is to settle the whole structure before the senior loan closes. Adding a layer afterward needs the senior lender's consent, and a lender with no reason to say yes usually says no. Bank loans follow the same logic. The OCC's examiner handbook lists limits on additional debts, guarantees and liens among the covenants a bank may require.[5] `/hotel-financing/covenants-and-cash-management` covers those covenants."
    },
    {
      h2: "What does mezzanine debt or preferred equity cost?",
      lead: "More than the first mortgage, because the capital is repaid second and has no lien on the building, but no lender publishes a rate.",
      body: "Our rate sheet prints public indexes and published program rules. It prints no mezzanine or preferred equity pricing, because none is published.[4] What exists publicly is individual loan disclosure. In the BMO 2026-5C16 term sheet dated August 4, 2026, a student housing property in the pool carried a $39.0 million senior loan at 7.43333 percent and a $3.8 million mezzanine loan at 11.00 percent, interest-only for a five-year term, for a weighted average of about 7.75 percent on the total debt.[1] That property is not a hotel, and one loan is not a market.\n\nThe same disclosure shows what the extra layer does to the tests. The senior loan alone was 61.4 percent of value with a 1.26 times DSCR and a 9.7 percent debt yield. With the mezzanine loan, total debt was 67.3 percent of value with a 1.10 times DSCR and an 8.8 percent debt yield.[1]\n\nBeyond the rate, expect an origination fee, the mezzanine lender's legal costs, and often an exit fee or a minimum return. Ask for every one of them in writing and compare offers on total dollars over your hold period. `/tools/dscr-calculator` lets you test the combined payment against your NOI."
    },
    {
      h2: "When does this kind of capital make sense on a hotel?",
      lead: "When the gap is temporary and the hotel's income after the business plan can refinance both layers out.",
      body: "Three situations come up most. An acquisition where the senior lender sizes to trailing cash flow and the buyer has a funded renovation plan; see `/hotel-financing/pip-and-renovation-loans`. A recapitalization, where an owner needs to pay off a maturing loan that a new first mortgage alone will not cover; see `/hotel-financing/loan-maturities-2026-2027`. And a partner buyout.\n\nIt fits poorly when the hotel's income is already thin. The worked example below shows why: every layer added above the first mortgage shrinks the drop in NOI the deal can absorb. If the gap is permanent, not temporary, the fix is usually more common equity or a lower price, not more expensive capital."
    }
  ],
  table: {
    caption: "Mezzanine debt and preferred equity compared with the first mortgage, September 2026",
    columns: [
      "Feature",
      "First mortgage",
      "Mezzanine debt",
      "Preferred equity"
    ],
    rows: [
      [
        "Legal form",
        "Loan to the hotel-owning borrower",
        "Loan to the borrower's parent company[2]",
        "Membership or partnership interest in the ownership entity[2]"
      ],
      [
        "Collateral",
        "Mortgage or deed of trust on the hotel",
        "Pledge of the ownership interests in the borrower; no lien on the hotel[2]",
        "None; rights come from the operating agreement"
      ],
      [
        "Remedy after default",
        "Mortgage foreclosure under state law",
        "Sale of the pledged interests under UCC 9-610, which must be commercially reasonable[3]",
        "Control rights, such as replacing the manager of the entity[2]"
      ],
      [
        "Agreement with the senior lender",
        "Not applicable",
        "Intercreditor agreement: subordination, cure rights, purchase option[2]",
        "Set by the senior loan documents; often needs consent"
      ],
      [
        "Paid from",
        "Hotel cash flow, first",
        "Cash flow after senior debt service",
        "Cash flow after all debt service"
      ],
      [
        "Published pricing",
        "Indexes only; spreads are not published[4]",
        "Not published; one public 2026 example at 11.00%[1]",
        "Not published"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% and SOFR at 3.85% as of September 17, 2026. It prints no mezzanine or preferred equity pricing, because no lender publishes any and we do not print a number without a public source.[4]"
  },
  workedExample: {
    label: "Hypothetical: a $3.0M mezzanine loan behind a $12.0M first mortgage on a $20.0M hotel",
    body: "Hypothetical. Hotel value $20,000,000, NOI $1,900,000. The first mortgage is $12,000,000 at an assumed 7.00 percent, interest-only. The mezzanine loan is $3,000,000 at an assumed 11.00 percent, interest-only. Both rates are assumptions for the arithmetic, not quotes.\n\nPayments. Senior interest is $12,000,000 times 7.00 percent, or $840,000 a year. Mezzanine interest is $3,000,000 times 11.00 percent, or $330,000 a year. Total debt service is $1,170,000. The blended rate is $1,170,000 divided by $15,000,000, or 7.80 percent.\n\nTests. On the first mortgage alone, loan-to-value is 60 percent, DSCR is $1,900,000 divided by $840,000, or 2.26 times, and debt yield is 15.8 percent. On total debt, loan-to-value is 75 percent, DSCR is $1,900,000 divided by $1,170,000, or 1.62 times, and debt yield is 12.7 percent.\n\nCushion. Cash left for the owners falls from $1,060,000 to $730,000 a year. With the first mortgage alone, NOI could fall about 56 percent before it no longer covered interest. With both loans, that cushion is about 38 percent.\n\nPreferred equity instead. The same $3,000,000 as preferred equity at an assumed 12.00 percent return costs $360,000 a year and leaves $700,000 for the common owners. The senior lender's tests are unchanged, but the owner has a new partner with control rights if the return is missed."
  },
  faq: [
    {
      q: "My bank will only lend 60 percent on my hotel purchase. Can mezzanine debt cover the gap?",
      a: "Possibly, if the bank's loan documents allow it and the hotel's income covers both payments. Many senior lenders prohibit subordinate financing or require their consent. Raise it before the bank issues its commitment, because adding a mezzanine loan after closing needs the bank's approval."
    },
    {
      q: "Can a mezzanine lender take my hotel if I miss a payment?",
      a: "It can take the company that owns the hotel. After default, the lender can sell the pledged ownership interests under UCC 9-610 in a commercially reasonable sale. The buyer controls the borrower, and the first mortgage stays in place."
    },
    {
      q: "Is preferred equity safer for me than a mezzanine loan?",
      a: "Not automatically. There is no UCC foreclosure, but the operating agreement usually lets the preferred investor take control if its return is not paid. A CMBS prospectus lists dilution, cash flow stress and changes in management as the risks. Read the control provisions closely."
    },
    {
      q: "Does my CMBS loan allow me to add mezzanine debt later?",
      a: "Check the permitted future mezzanine debt section of your loan agreement. In a 2026 pool, one hotel loan listed it as not permitted, while another loan allowed it only if combined loan-to-value, DSCR and debt yield tests were met and an intercreditor agreement was signed."
    },
    {
      q: "How much does mezzanine debt cost on a hotel deal?",
      a: "No lender publishes a rate. One public 2026 example, on a student housing property, shows a $3.8 million mezzanine loan at 11.00 percent behind a senior loan at 7.43 percent. Expect origination, legal and often exit fees on top of the rate."
    },
    {
      q: "What is the difference between mezzanine debt and a second mortgage?",
      a: "A second mortgage is a lien on the hotel itself. Mezzanine debt is secured only by ownership interests in the borrower. CMBS loans generally carry a due-on-encumbrance clause that lets the lender accelerate if the property is encumbered without consent, so gap capital is usually mezzanine debt or preferred equity."
    },
    {
      q: "Do I need a lawyer for a mezzanine or preferred equity deal?",
      a: "Yes. The intercreditor agreement, the pledge and the operating agreement decide who controls your hotel after a missed payment. Matthews Hotel Markets arranges the capital and does not give legal or tax advice."
    }
  ],
  sources: [
    {
      n: 1,
      label: "BMO 2026-5C16 Mortgage Trust, free writing prospectus: structural and collateral term sheet dated August 4, 2026 (Loan No. 7 mezzanine loan terms; Loan No. 8 permitted future mezzanine debt; Loan No. 10 Holiday Inn Hotel Chelsea, pp. 135-140)",
      url: "https://www.sec.gov/Archives/edgar/data/2136643/000153949726002077/n6057_x4-ts.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Benchmark 2026-B42 Mortgage Trust, prospectus (Form 424B2, filed February 25, 2026): mezzanine financing and preferred equity risk factors (p. 115), mezzanine lender cure and purchase rights (p. 148), due-on-encumbrance clauses (p. 221), Mezzanine Indebtedness and Preferred Equity (pp. 231-232)",
      url: "https://www.sec.gov/Archives/edgar/data/2110410/000153949726000776/n5676_x16-424b2.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "UCC 9-610, Disposition of collateral after default",
      url: "https://www.law.cornell.edu/ucc/9/9-610",
      publisher: "Uniform Commercial Code, via Legal Information Institute",
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
      label: "Comptroller's Handbook: Commercial Real Estate Lending, Version 2.0 (March 2022, updated March 20, 2025), covenants (pp. 24, 41)",
      url: "https://www.occ.treas.gov/publications-and-resources/publications/comptrollers-handbook/files/commercial-real-estate-lending/pub-ch-commercial-real-estate.pdf",
      publisher: "Office of the Comptroller of the Currency",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/capital-stack",
      "/hotel-financing/covenants-and-cash-management",
      "/hotel-financing/bridge-loans",
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/c-pace-financing"
    ],
    glossary: [
      "/glossary/mezzanine-debt",
      "/glossary/ltv",
      "/glossary/dscr",
      "/glossary/debt-yield"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Ask whether mezzanine debt or preferred equity fits your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges hotel financing from $5 million, including mezzanine debt and preferred equity placed behind a senior loan."
};

export default page;
