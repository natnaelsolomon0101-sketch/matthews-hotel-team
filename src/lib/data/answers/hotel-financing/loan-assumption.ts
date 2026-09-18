/**
 * Can I assume the existing loan when I buy a hotel?
 * Answer page: /hotel-financing/loan-assumption
 *
 * Written 2026-09-18 from a 2026 CMBS prospectus on EDGAR, 12 U.S.C. 1701j-3,
 * SBA SOP 50 10 8 and SOP 50 57 4, and 7 CFR 5001.506 and 5001.509, all read
 * that day. Fees and timing appear only where one of those sources states them.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "loan-assumption",
  cluster: "hotel-financing",
  isHub: false,
  title: "Assuming a Hotel Loan: CMBS, SBA and Bank",
  h1: "Can I assume the existing loan when I buy a hotel?",
  description: "How hotel loan assumptions work for CMBS, SBA 7(a), SBA 504, USDA and bank loans: who approves, what the rules say about fees, and when it pays.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Can I assume the existing loan when I buy a hotel?",
    "The hotel I want to buy has a 4.6 percent CMBS loan. Can I take it over?",
    "Can a buyer assume my SBA loan when I sell my hotel?",
    "How much is a loan assumption fee on a hotel loan?",
    "Who approves a CMBS loan assumption?",
    "Is it better to assume the seller's hotel loan or get a new one?",
    "Will I be released from my guarantee if the buyer assumes my hotel loan?"
  ],
  answer: "Sometimes. Most hotel loans carry a due-on-sale clause, so an assumption needs the lender's consent. CMBS loans often permit one if the buyer qualifies and pays an assumption fee.[1] SBA lets a 7(a) lender charge up to 1 percent of the balance and says the buyer of a business should be offered the chance to assume the SBA debt, under SOP 50 10 8, effective June 1, 2025.[3]",
  takeaways: [
    "Start from the due-on-sale clause. Federal law lets a lender enforce it, so without consent a sale makes the loan callable.[1][2]",
    "CMBS: loan documents often allow a transfer if there is no default, the buyer is creditworthy and experienced, the buyer signs an assumption agreement, and the assumption fee is paid. The servicer decides, and large loans also need rating agency confirmation.[1]",
    "SBA 7(a): the lender may charge an assumption fee of no more than 1 percent of the outstanding principal, the buyer must meet current 7(a) eligibility rules, and the assumption agreement must bar any future assumption.[3][4]",
    "SBA 504 and USDA B&I: a 504 assumption fee cannot exceed 1 percent of the balance and needs SBA's written approval. USDA charges an eligible buyer a one-time $1,500 transfer fee and must approve in writing first.[3][5]",
    "An assumed loan keeps its rate, its remaining term and its balance. The buyer has to cover the gap between that balance and the price with cash or approved subordinate capital."
  ],
  sections: [
    {
      h2: "What does it mean to assume a hotel loan?",
      lead: "Assuming a loan means the buyer takes over the seller's existing mortgage, with its rate, balance, remaining term and covenants, instead of paying it off and borrowing new money.",
      body: "SBA's servicing manual defines it plainly: another person takes over the borrower's legal obligations and benefits under the loan documents.[4] Nothing about the loan resets. If the seller's loan has six years left at a fixed rate, the buyer gets six years at that rate.\n\nThat is attractive when the existing rate is below today's market. The 10-year Treasury, the index behind most fixed-rate hotel quotes, was 4.94 percent on September 17, 2026.[6] A loan written when the index was much lower carries a coupon a new lender cannot match. For the seller, an assumption can also avoid a prepayment cost. On a CMBS loan that cost is [defeasance](/glossary/defeasance) or [yield maintenance](/glossary/yield-maintenance), which can be costly. See [What is a CMBS loan and how does it work for hotels?](/hotel-financing/cmbs-loans)\n\nThe catch is that the lender has to agree, and the loan was sized to the seller's purchase, not the buyer's."
    },
    {
      h2: "Why do I need the lender's permission?",
      lead: "Nearly every commercial mortgage has a due-on-sale clause that lets the lender demand full repayment if the property or control of the borrower changes hands without consent.",
      body: "A 2026 CMBS prospectus describes its pool this way: the mortgage loans generally contain due-on-sale and due-on-encumbrance clauses, which permit the holder to accelerate the loan if the borrower sells, transfers or encumbers the property, or a controlling interest in the borrower, without the lender's consent.[1] The clause reaches entity transfers, not only deeds. The same prospectus notes that loans usually permit some transfers without consent, such as estate planning and family transfers and transfers of non-controlling interests.[1]\n\nFederal law backs the clause. Under the Garn-St Germain Act, a lender may enforce a due-on-sale clause in a real property loan notwithstanding state law to the contrary.[2] The prospectus draws the practical conclusion: a lender can accelerate on a transfer without having to show that the sale harms its security.[1]\n\nSo a buyer cannot simply keep making the seller's payments. Buying the hotel subject to the loan without consent hands the lender a right to call it."
    },
    {
      h2: "How does a CMBS loan assumption work?",
      lead: "A CMBS assumption is a consent request to the loan's servicer, judged against conditions written in the loan documents and the pooling and servicing agreement.",
      body: "The prospectus lists the conditions that loans in its pool commonly set for a permitted transfer: no event of default; a proposed transferee that is creditworthy and has sufficient experience owning and managing similar properties, or a rating agency confirmation; an assumption agreement signed by the transferee, with legal opinions and title insurance endorsements; and receipt of the assumption fee. Some loans allow a limited number of transfers without a fee.[1]\n\nWho decides depends on the loan. The master servicer handles a performing loan unless the decision is classed as a major decision or a special servicer decision, in which case the special servicer handles it, and before certain trigger events the directing certificateholder must consent. For the largest loans in a pool, such as one over $35,000,000, or one of the 10 largest with a balance of at least $10,000,000, the servicer also needs written confirmation from the rating agencies. The servicer may not approve an assumption without requiring the borrower to pay the rating agencies' fees, where the loan documents allow that.[1]\n\nThe money goes to the servicers, not to the bondholders. Assumption fees are never paid to certificateholders, the special servicer keeps 100 percent of assumption fees on specially serviced loans, and it splits them 50 percent on other loans where it is involved. A separate assumption application fee goes to whichever servicer processes the request.[1] The prospectus does not publish the fee percentage, because each loan's documents set it. Read the transfer section of the loan agreement for the number, and budget for the lender's legal costs and yours.\n\nOne more limit: the assumption agreement may not change the loan's terms except through the servicer's separate modification process.[1] Do not expect to renegotiate the rate, extend the term or add proceeds on the way in. CMBS loans are typically [non-recourse with carve-outs](/glossary/non-recourse-carve-outs), so ask the servicer early what it will require from the buyer's guarantor: see [Can I get a non-recourse loan on a hotel?](/hotel-financing/non-recourse-loans)"
    },
    {
      h2: "Can a buyer assume an SBA 7(a) or 504 loan?",
      lead: "Yes, with the lender's approval and inside SBA's rules, and SBA's own manual says that in a complete change of ownership the buyer should be offered the option to assume the existing SBA debt.",
      body: "That sentence is in SOP 50 10 8, the SBA's lending manual effective June 1, 2025, in its discussion of debt refinancing: paying off debt as part of a change of ownership is not a refinance, and the option to assume the existing SBA debt should be offered to the buyer.[3] A revised manual, SOP 50 10 8.1, takes effect October 1, 2026. We read both, and the 7(a) assumption fee paragraph is the same in each.[3]\n\nOn fees, SBA does not require a new guaranty fee on an assumption, and lien positions are often kept, which avoids recording costs. A 7(a) lender may charge an assumption fee consistent with what it charges on its other loans. The fee must be reasonable and cannot exceed 1 percent of the principal balance outstanding at the time of assumption, and either the seller or the buyer may pay it. For 504 loans, the fee table caps the assumption fee at 1 percent of the outstanding principal balance of the loan being assumed, payable upon SBA's written approval.[3]\n\nThe procedure is in SOP 50 57 4, the 7(a) servicing manual effective November 1, 2025. Unless the assumption is part of a workout, the lender must ensure the buyer satisfies the 7(a) eligibility requirements in effect when the assumption is approved, will be the primary owner of the business, has a satisfactory credit history and can repay the loan in full. The lender should ensure the buyer's business experience and management skills equal or exceed the seller's, should not release collateral, and should ask for more collateral if what exists is inadequate. New obligors must meet SBA's citizenship requirements.[4]\n\nTwo terms surprise people. The assumption agreement must include a due on sale or death clause that prohibits any future assumption, so an SBA loan can be assumed once. And the seller may not keep title until the buyer pays an agreed amount, which rules out a contract-for-deed structure.[4] For how the two SBA programs differ, see [What is the difference between an SBA 7(a) loan and an SBA 504 loan for a hotel?](/hotel-financing/sba-7a-vs-504)."
    },
    {
      h2: "What about USDA and ordinary bank loans?",
      lead: "A USDA B&I loan can be assumed with the agency's prior written approval, and a conventional bank loan can be assumed only if the bank chooses to allow it.",
      body: "USDA's regulation is specific. The lender must get the agency's written approval before any transfer and assumption. The buyer assumes at least the outstanding balance or the present market value of the collateral, whichever is less, and the full debt if the seller is receiving a payment for its equity. The buyer signs an agency application and gives guarantees under the usual rule, and the lender completes a full credit evaluation. Loan terms can stay the same or change with the agency's consent. USDA charges a one-time, nonrefundable $1,500 transfer fee for an eligible borrower, or 1 percent of the guaranteed loan balance for an ineligible one. A significant change in control of the borrower counts as a transfer and assumption.[5] The program itself is covered in [Can I get a USDA B&I loan for a hotel?](/hotel-financing/usda-b-and-i-loans)\n\nA conventional bank or credit union loan has no public rulebook. The due-on-sale clause applies, the bank has no obligation to consent, and a bank that does consent is in effect underwriting a new borrower. Banks do not publish assumption policies or fees. Ask, in writing, before the purchase agreement assumes the answer. Nothing requires a bank to pass along an old rate, so expect it to weigh a new loan at today's rate against consenting."
    },
    {
      h2: "Is the seller released when the buyer assumes the loan?",
      lead: "Not automatically. A release of the seller and its guarantors is a separate decision, and each program has its own rule.",
      body: "Under USDA's regulation, the seller and any guarantor can be released from liability only with the agency's prior written approval, and only when the assumption is for the full outstanding balance.[5] Under SBA's servicing manual, a lender must not release existing obligors without SBA's prior written approval when the loan is in payment default or liquidation, and the manual handles guarantor substitution and release in its own chapter.[4] In a CMBS assumption, whether the original carve-out guarantor is released depends on the loan documents and the servicer's consent.\n\nSellers should make the release a condition of closing in the purchase agreement, not an expectation. A seller who stays liable on a loan to a hotel it no longer controls has kept the risk and sold the upside."
    },
    {
      h2: "When is assuming the loan worth it?",
      lead: "Assumption is worth pursuing when the rate savings over the remaining term outweigh the extra equity, the fees and the time, and when the loan's remaining term fits the buyer's plan.",
      body: "Work through four questions. How far below market is the rate, and for how many more years? How much more cash does the buyer need, given that the old balance is usually a smaller share of today's price than a new loan would be? Does the loan allow subordinate financing to fill the gap? The due-on-encumbrance clause applies, so a second lien needs the first lender's consent.[1] And what does the clock look like? None of the sources we read publishes a processing time for assumptions, so get the servicer's or lender's estimate before you set a closing date, and expect it to run alongside the franchise approval.\n\nThe franchise does not travel with the loan. A buyer applies to the brand for its own franchise agreement and usually receives a PIP, which the assumed loan will not fund: see [What documents do I need to sell my hotel?](/sell-a-hotel/documents-needed) and [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans)\n\nIf the loan matures soon, the low rate is worth less than it looks, because the buyer inherits the refinancing: see [How much hotel debt is maturing in 2026 and 2027?](/hotel-financing/loan-maturities-2026-2027) To compare the assumed payment with a new loan at current rates, use [the DSCR calculator](/tools/dscr-calculator)."
    }
  ],
  table: {
    caption: "Hotel loan assumption rules by loan type, from the public sources cited",
    columns: [
      "Loan type",
      "Who approves",
      "What the source says about fees",
      "Other stated conditions"
    ],
    rows: [
      [
        "CMBS",
        "Master or special servicer, with the directing certificateholder on major decisions; rating agency confirmation on the largest loans[1]",
        "Assumption fee and application fee set by the loan documents and paid to the servicers; borrower pays rating agency fees where the documents allow[1]",
        "No default; creditworthy, experienced buyer; assumption agreement, legal opinions, title endorsements; terms cannot change[1]"
      ],
      [
        "SBA 7(a)",
        "The 7(a) lender, under SBA's servicing manual[4]",
        "Not more than 1% of outstanding principal; no new SBA guaranty fee; seller or buyer may pay[3]",
        "Buyer meets current 7(a) eligibility; primary owner; no collateral release; no future assumption[4]"
      ],
      [
        "SBA 504",
        "The CDC, with SBA's written approval[3]",
        "Not more than 1% of the outstanding principal balance of the loan assumed[3]",
        "Set by SBA's 504 servicing rules; ask the CDC"
      ],
      [
        "USDA B&I",
        "The lender, with USDA's prior written approval[5]",
        "$1,500 one-time transfer fee for an eligible borrower; 1% of the guaranteed balance for an ineligible one[5]",
        "Full credit evaluation; new guarantees; release of seller only with agency approval[5]"
      ],
      [
        "Conventional bank",
        "The bank, at its discretion under the due-on-sale clause[2]",
        "Not published",
        "Not published; get the bank's answer in writing"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% as of September 17, 2026 and the SBA 7(a) maximum variable rate at 10.00%. An assumable fixed-rate loan is worth the most when its coupon sits well below what that index implies for new debt.[6]"
  },
  workedExample: {
    label: "Hypothetical: assuming a $4.2M loan on a $7.5M hotel purchase",
    body: "Hypothetical. A buyer agrees to pay $7,500,000 for a hotel. The seller's fixed-rate loan has a $4,200,000 balance at 4.60 percent. For comparison, assume a new loan at 65 percent of price and 7.25 percent. Both the leverage and the new rate are assumptions for the arithmetic, not quotes. Interest is compared on a simple annual basis to keep the amortization out of it.\n\nEquity with the assumption. $7,500,000 minus $4,200,000 equals $3,300,000 of cash, or 44 percent of the price. The assumed loan is 56 percent of price.\n\nEquity with a new loan. 65 percent of $7,500,000 is $4,875,000, so the buyer brings $2,625,000. The assumption takes $675,000 more cash.\n\nInterest. On the same $4,200,000, 4.60 percent is $193,200 a year and 7.25 percent is $304,500 a year. The old rate saves $111,300 a year for as long as the loan has left to run.\n\nFee. If this were an SBA 7(a) loan, the lender's assumption fee could not exceed 1 percent of the balance: $42,000.[3] If it were a USDA B&I loan and the buyer were eligible, the agency's transfer fee would be $1,500.[5] A CMBS loan's fee is whatever its documents say.[1]\n\nThe trade. The buyer puts in $675,000 more equity and pays an assumption fee to save $111,300 a year. With six years left on the loan that is $667,800 of interest saved before fees, which is roughly the extra equity and no more. With two years left it is $222,600, and the buyer also inherits a refinancing in two years. The remaining term decides it."
  },
  faq: [
    {
      q: "Are hotel loans assumable?",
      a: "Some are, with the lender's consent. CMBS loan documents often set out conditions for a permitted transfer. SBA and USDA loans can be assumed under written program rules. A conventional bank loan is assumable only if the bank agrees."
    },
    {
      q: "How much is a loan assumption fee?",
      a: "It depends on the loan. SBA caps a 7(a) or 504 assumption fee at 1 percent of the outstanding principal. USDA charges an eligible buyer $1,500. A CMBS loan's fee is set in its loan documents, and banks do not publish theirs."
    },
    {
      q: "Who approves a CMBS loan assumption?",
      a: "The master servicer or the special servicer, depending on the loan's status and how the pooling agreement classes the decision. The directing certificateholder may have to consent, and the largest loans in a pool also need rating agency confirmation."
    },
    {
      q: "Can I change the loan terms when I assume a CMBS loan?",
      a: "Generally no. The prospectus we read says an assumption agreement may not contain terms different from the mortgage or note, except through the servicer's separate modification provisions. Plan on the existing rate, maturity and covenants."
    },
    {
      q: "Can an SBA hotel loan be assumed more than once?",
      a: "No. SBA's servicing manual requires the assumption agreement to include a due on sale or death clause that prohibits any future assumption of the 7(a) loan."
    },
    {
      q: "Does the buyer have to qualify for an SBA loan to assume one?",
      a: "Yes. Unless the assumption is part of a workout, the lender must ensure the buyer meets the 7(a) eligibility requirements in effect when the assumption is approved, will be the primary owner, has satisfactory credit and can repay the loan."
    },
    {
      q: "If the buyer assumes my loan, am I off the hook?",
      a: "Only if the lender releases you in writing. USDA requires agency approval and a full-balance assumption for a release. SBA restricts releases on troubled loans. Make your release a closing condition in the purchase agreement."
    },
    {
      q: "Can I use a second loan to cover the gap between the old balance and the price?",
      a: "Only if the first lender allows it. Commercial mortgages generally carry a due-on-encumbrance clause, so subordinate debt on the property needs consent. Many buyers cover the gap with more equity instead."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Benchmark 2026-B42 Mortgage Trust, prospectus (Form 424B2, filed February 25, 2026): due-on-sale and due-on-encumbrance provisions (pp. 221-222), servicer compensation and assumption fees (pp. 408-409), servicer consent and rating agency confirmation (p. 430), Garn-St Germain discussion (p. 515)",
      url: "https://www.sec.gov/Archives/edgar/data/1013454/000153949726000776/n5676_x16-424b2.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "12 U.S.C. 1701j-3, Preemption of due-on-sale prohibitions",
      url: "https://www.law.cornell.edu/uscode/text/12/1701j-3",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025): 7(a) assumption fee (p. 67), 504 assumption fee (p. 79), option to assume existing SBA debt in a change of ownership (p. 112); SOP 50 10 8.1 (effective October 1, 2026) posted on the same page",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "SOP 50 57 4, 7(a) Loan Servicing and Liquidation (effective November 1, 2025), Chapter 11, Assumption, Assignment or Sale of Loan (pp. 76-77)",
      url: "https://legacy.sba.gov/document/sop-50-57-7a-loan-servicing-liquidation",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "7 CFR 5001.506, Loan transfers and assumptions, and 5001.509, Servicing fees",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.506",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/usda-b-and-i-loans",
      "/hotel-financing/non-recourse-loans",
      "/hotel-financing/loan-maturities-2026-2027"
    ],
    glossary: [
      "/glossary/defeasance",
      "/glossary/yield-maintenance",
      "/glossary/non-recourse-carve-outs",
      "/glossary/ltv"
    ],
    data: [
      "/rates",
      "/tools/dscr-calculator",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Ask whether the loan on your deal is worth assuming",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets prices an assumption against a new loan on the same page, because a low rate with two years left is a different asset from a low rate with seven."
};

export default page;
