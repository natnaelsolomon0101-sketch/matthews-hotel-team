/**
 * Can I get a non-recourse loan on a hotel?
 * Answer page: /hotel-financing/non-recourse-loans
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "non-recourse-loans",
  cluster: "hotel-financing",
  isHub: false,
  title: "Non-Recourse Hotel Loans: Who Offers Them in 2026",
  h1: "Can I get a non-recourse loan on a hotel?",
  description: "Which hotel lenders lend non-recourse in 2026, what the carve-outs really cover, who signs the guaranty, and how recourse changes the tax result.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Which lenders do non-recourse hotel loans?",
    "Can I get a non-recourse loan on a hotel?",
    "I don't want to sign a personal guarantee on my hotel loan. What are my options?",
    "What are bad boy carve-outs on a hotel loan?",
    "Does an SBA hotel loan require a personal guarantee?",
    "If my hotel loan is non-recourse, can the lender come after me personally?",
    "What's the difference between recourse and non-recourse debt when a hotel is foreclosed?",
    "What credit score do I need to get a hotel loan?"
  ],
  answer: "Yes, on a stabilized hotel from the right lender. CMBS conduits, life companies and many debt funds lend non-recourse with carve-outs. Banks usually want a guaranty, and SBA rules generally require one from every owner of 20 percent or more.[1] The 10-year Treasury, the index for a fixed-rate non-recourse quote, was 4.94 percent on September 17, 2026.[2][3] Non-recourse is never unconditional.",
  takeaways: [
    "Non-recourse means the lender's remedy for an ordinary default is the hotel, not your other assets. It does not mean nobody signs anything.",
    "A person or entity with real net worth signs a carve-out guaranty. Public hotel borrowers list the usual triggers: fraud, misrepresentation, waste, misappropriated rents, voluntary bankruptcy, unpermitted transfers and environmental liabilities.[4]",
    "Some carve-outs only cover the lender's losses. Others make the whole loan recourse. The second kind is the one to negotiate.[4]",
    "SBA loans are recourse by rule: holders of at least 20 percent generally must guarantee the loan.[1] Bank regulators require every bank to set limits on non-recourse lending.[5]",
    "Recourse changes the tax result of a foreclosure. With non-recourse debt there is no cancellation of debt income, but the full loan balance counts as your sale price.[6]"
  ],
  sections: [
    {
      h2: "Which hotel lenders offer non-recourse loans?",
      lead: "CMBS conduits, life insurance companies and many debt funds lend non-recourse; banks and credit unions usually do not, and SBA lenders cannot.",
      body: "CMBS is the most common source of non-recourse debt for a stabilized select-service hotel. Our rate sheet describes the CMBS row as fixed-rate, non-recourse and securitized, priced as a spread over the matched-term Treasury.[2] Life companies lend non-recourse at lower leverage on the best assets. Debt funds and bridge lenders often lend non-recourse on transitional hotels, sometimes with a completion or carry guaranty attached. `/hotel-financing/hotel-lenders-by-type` compares all five types, and `/hotel-financing/cmbs-loans` covers the conduit execution in detail.\n\nBanks are a different business. The interagency real estate lending guidelines require each bank's loan policy to set limits on partial recourse or nonrecourse loans and requirements for guarantor support.[5] In practice a community or regional bank lending on a hotel asks for a full or partial personal guaranty, and trades a lower rate and more flexibility for it.\n\nSBA is recourse by design. The regulation says holders of at least a 20 percent ownership interest generally must guarantee the loan, and SBA or the lender may require guaranties from others regardless of ownership.[1]"
    },
    {
      h2: "What does non-recourse actually protect me from?",
      lead: "It protects your other assets from a deficiency claim if the hotel fails for ordinary business reasons and the collateral is worth less than the debt.",
      body: "If revenue falls, the loan defaults and the hotel sells for less than the balance, a non-recourse lender absorbs the shortfall. A recourse lender can pursue the guarantor for it. That is the whole value of the structure, and it matters most in the scenario owners least like to model.\n\nA public example shows how borrowers describe it. Ashford Hospitality Trust's 10-K for 2025 says its mortgage and mezzanine loans are non-recourse to the borrowers, except for customary exceptions or carve-outs that trigger recourse liability in certain limited instances, and that the assets of the borrowing subsidiaries are pledged to those loans and are not available to satisfy the parent's other debts.[4] That second half is the other feature of non-recourse lending: the hotel sits in a single-purpose entity, walled off from the rest of what you own."
    },
    {
      h2: "What are the carve-outs, and who signs for them?",
      lead: "Carve-outs are a list of acts that turn a non-recourse loan into a recourse one, and a creditworthy person or entity guarantees them in a separate document.",
      body: "Ashford's filing lists the typical triggers: fraud, misrepresentation, willful conduct resulting in waste, misappropriation of rents following an event of default, voluntary bankruptcy filings, unpermitted transfers of collateral and certain environmental liabilities. A second passage in the same filing adds delinquency of trade payables.[4]\n\nThe filing also draws the line that matters. Recourse obligations typically include only the costs and liabilities the lender suffers from the bad act, but in certain cases carve-outs can trigger recourse for all or a portion of the outstanding principal.[4] Lawyers call these loss carve-outs and full-recourse carve-outs. Misapplied insurance proceeds are usually a loss item. A voluntary bankruptcy filing or an unpermitted transfer is usually a full-recourse item.\n\nFor a private owner, the guarantor is usually the key principal, and the lender will test that person's net worth and liquidity. Read the full-recourse list line by line. Items such as trade payables, a failure to stay solvent, or any violation of the single-purpose covenants are where an honest operator can trip a guaranty in a bad year."
    },
    {
      h2: "Can a carve-out make me liable just because the hotel ran out of money?",
      lead: "It can if the documents make a solvency covenant a carve-out, which is why at least one state has banned the practice and why that language deserves a lawyer's attention.",
      body: "Loan documents often require the borrowing entity to remain solvent and adequately capitalized. If a breach of that covenant is also a full-recourse carve-out, then the ordinary failure of the hotel, the exact risk non-recourse is supposed to shift, triggers the guaranty.\n\nMichigan's Nonrecourse Mortgage Loan Act, effective March 29, 2012, addresses this directly. It says a post closing solvency covenant shall not be used, directly or indirectly, as a nonrecourse carveout, and that a loan provision that does so is invalid and unenforceable. The legislature's enacting section states that it is inherent in a nonrecourse loan that the lender takes the risk of a borrower's insolvency.[7] The act's definition of a solvency covenant leaves out a covenant not to file a voluntary bankruptcy, so that carve-out survives.[8]\n\nMost states have no such statute. Negotiate the language instead: limit solvency and capitalization covenants to the extent the property's own cash flow allows, and keep them out of the full-recourse list."
    },
    {
      h2: "What does non-recourse cost me?",
      lead: "You pay for it in leverage, flexibility and closing cost more than in headline rate.",
      body: "No conventional lender publishes its spread, DSCR floor or leverage ceiling, so we do not print a recourse premium.[2] The trade shows up in structure. Non-recourse lenders size to in-place cash flow, want a single-purpose borrower with separateness covenants, control cash through lockboxes when coverage falls, and restrict transfers and prepayment. A CMBS loan is serviced by the documents, not by a banker who knows you; `/hotel-financing/loan-workouts` explains what that means when something goes wrong.\n\nA bank loan with a guaranty is usually more flexible on prepayment, future funding and covenant relief. Some owners split the difference with partial recourse that burns off once the hotel reaches an agreed coverage level. If a PIP or a repositioning is ahead, see `/hotel-financing/bridge-loans` for how transitional lenders handle recourse."
    },
    {
      h2: "Does recourse change what happens at tax time if I lose the hotel?",
      lead: "Yes. The IRS treats a foreclosure differently depending on whether you were personally liable for the debt.",
      body: "IRS Publication 4681 sets out both cases. With recourse debt, the amount realized on a foreclosure is the property's fair market value, and any canceled debt above that is ordinary income from cancellation of debt unless an exclusion applies. With nonrecourse debt, the entire unpaid balance is treated as the amount realized, even if the property is worth less, and there is no cancellation of debt income.[6] The Treasury regulation says the same thing in one line: the disposition of property that secures a nonrecourse liability discharges the transferor from the liability.[9]\n\nSo a non-recourse owner who hands back an underwater hotel can owe tax on a gain without receiving any cash, because the full loan balance is the sale price. The worked example runs both cases. This page is not tax advice. Work through the numbers with your CPA before a workout, a deed in lieu or a foreclosure."
    }
  ],
  table: {
    caption: "Recourse by hotel lender type, September 2026",
    columns: [
      "Lender type",
      "Recourse position",
      "Who signs",
      "Source or note"
    ],
    rows: [
      [
        "SBA 7(a) and 504",
        "Recourse",
        "Holders of at least 20% generally must guarantee; others can be required",
        "13 CFR 120.160[1]"
      ],
      [
        "Bank and credit union",
        "Usually full or partial recourse",
        "Principals, under the bank's own policy",
        "Regulators require each bank to set limits on non-recourse loans[5]"
      ],
      [
        "CMBS conduit",
        "Non-recourse with carve-outs",
        "Carve-out guarantor, usually the key principal",
        "Described as non-recourse on our rate sheet[2]"
      ],
      [
        "Life company",
        "Non-recourse with carve-outs",
        "Carve-out guarantor",
        "Lower leverage, most selective on asset quality[2]"
      ],
      [
        "Debt fund or bridge",
        "Often non-recourse with carve-outs; sometimes partial recourse or a completion guaranty",
        "Carve-out guarantor; sponsor for any completion or carry guaranty",
        "Varies by lender and business plan"
      ],
      [
        "Construction",
        "Recourse during the build at banks",
        "Repayment and completion guarantors",
        "See the construction loans page"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet lists the SBA 7(a) and 504 rows as recourse and describes the CMBS row as fixed-rate, non-recourse and securitized, struck against a 10-year Treasury of 4.94% as of September 17, 2026. It marks the CMBS spread as not yet published, so it prints no recourse premium.[2]"
  },
  workedExample: {
    label: "Hypothetical: the same failed hotel under recourse and non-recourse debt",
    body: "Hypothetical. A hotel has a $9,000,000 loan balance. Its fair market value has fallen to $7,500,000. The owner's adjusted tax basis is $8,000,000. The lender forecloses. The tax treatment follows IRS Publication 4681.[6]\n\nRecourse loan. The amount realized is the fair market value, $7,500,000. Against an $8,000,000 basis, that is a $500,000 loss on the property. The shortfall is $9,000,000 minus $7,500,000, or $1,500,000. The lender can pursue the guarantor for that $1,500,000. If the lender forgives it instead, the $1,500,000 is ordinary income from cancellation of debt unless an exclusion such as insolvency applies.\n\nNon-recourse loan. The amount realized is the full $9,000,000 balance. Against an $8,000,000 basis, that is a $1,000,000 gain, with no cash received. There is no deficiency claim and no cancellation of debt income, as long as no carve-out was triggered.\n\nThe non-recourse owner keeps $1,500,000 of personal exposure off the table and takes a taxable gain in exchange. The recourse owner has a loss on the property and a $1,500,000 problem with the bank. Neither result is free, and the carve-out guaranty is what stands between the two."
  },
  faq: [
    {
      q: "Which lenders do non-recourse hotel loans?",
      a: "CMBS conduits, life insurance companies and many debt funds. All of them require a carve-out guaranty. Banks and credit unions usually want a personal guaranty, and SBA rules generally require one from every owner of 20 percent or more."
    },
    {
      q: "I don't want to sign a personal guarantee on my hotel loan. What are my options?",
      a: "A stabilized hotel can go to CMBS or a life company. A transitional hotel can go to a debt fund. Expect lower leverage than a recourse bank loan, a single-purpose borrowing entity, and a carve-out guaranty that still has your name on it."
    },
    {
      q: "What are bad boy carve-outs?",
      a: "They are the acts that make a non-recourse loan recourse. A public hotel borrower's 10-K lists fraud, misrepresentation, waste, misappropriation of rents after a default, voluntary bankruptcy filings, unpermitted transfers and certain environmental liabilities."
    },
    {
      q: "If my hotel loan is non-recourse, can the lender come after me personally?",
      a: "Not for an ordinary default where the hotel simply cannot pay. Yes if a carve-out is triggered. Some carve-outs cover only the lender's actual loss. Others, such as a voluntary bankruptcy or an unpermitted transfer, can make the whole balance recourse."
    },
    {
      q: "Is an SBA hotel loan non-recourse?",
      a: "No. Under 13 CFR 120.160, holders of at least a 20 percent ownership interest generally must guarantee the loan, and SBA or the lender can require guaranties from others. That applies to both 7(a) and 504."
    },
    {
      q: "Is a non-recourse hotel loan more expensive?",
      a: "Lenders do not publish spreads, so there is no honest single premium to quote. The cost usually shows up as lower leverage, prepayment restrictions, cash management triggers and higher legal costs at closing, not only in the rate."
    },
    {
      q: "Can I get a non-recourse loan under $5 million on a hotel?",
      a: "It is harder. Conduits and life companies generally prefer larger loans, so small hotel loans usually come from banks, credit unions and SBA lenders, which are recourse. See our page on lenders for hotels under $5 million."
    },
    {
      q: "Is it better for taxes to have recourse or non-recourse debt in a foreclosure?",
      a: "Neither is simply better. Recourse debt can produce cancellation of debt income. Non-recourse debt makes the full loan balance your amount realized, which can create a taxable gain without cash. IRS Publication 4681 explains both. Ask your CPA."
    }
  ],
  sources: [
    {
      n: 1,
      label: "13 CFR 120.160, Loan conditions (personal guarantees)",
      url: "https://www.law.cornell.edu/cfr/text/13/120.160",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Daily Treasury Par Yield Curve Rates",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Ashford Hospitality Trust, Inc. Form 10-K for fiscal year 2025: non-recourse indebtedness and carve-out guaranty disclosures",
      url: "https://www.sec.gov/Archives/edgar/data/1232582/000123258226000067/aht-20251231.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "12 CFR Part 34, Subpart D, Appendix A: Interagency Guidelines for Real Estate Lending Policies (loan policy must limit partial recourse or nonrecourse loans)",
      url: "https://www.law.cornell.edu/cfr/text/12/appendix-A_to_subpart_D_of_part_34",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Publication 4681, Canceled Debts, Foreclosures, Repossessions, and Abandonments",
      url: "https://www.irs.gov/publications/p4681",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Nonrecourse Mortgage Loan Act, Act 67 of 2012, MCL 445.1593 (post closing solvency covenant; prohibited use) and enacting section",
      url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-445-1593",
      publisher: "Michigan Legislature",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "Nonrecourse Mortgage Loan Act, MCL 445.1592 (definitions of nonrecourse loan, nonrecourse carveout and post closing solvency covenant)",
      url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-445-1592",
      publisher: "Michigan Legislature",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "26 CFR 1.1001-2, Discharge of liabilities",
      url: "https://www.law.cornell.edu/cfr/text/26/1.1001-2",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/loan-workouts",
      "/hotel-financing/lenders-under-5-million",
      "/hotel-financing/bridge-loans"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/debt-yield",
      "/glossary/noi"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Ask which lenders will go non-recourse on your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets compares recourse and non-recourse quotes side by side, including the carve-out list, because the guaranty is part of the price."
};

export default page;
