/**
 * Does my hotel brand have to be on the SBA Franchise Directory?
 * Answer page: /hotel-financing/sba-franchise-directory
 *
 * Written 2026-10-14 from the October 9, 2026 edition of the SBA Franchise
 * Directory, SOP 50 10 8.1 (effective October 1, 2026), the two prior SOP
 * editions that removed and restored the Directory, and the FTC franchise
 * rule. Every figure in the worked example is recomputed by
 * scripts/check-franchise-directory-math.mjs.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "sba-franchise-directory",
  cluster: "hotel-financing",
  isHub: false,
  title: "SBA Franchise Directory: Hotel Brands",
  h1: "Does my hotel brand have to be on the SBA Franchise Directory?",
  description: "Yes, if the brand meets the FTC definition of a franchise. What the October 9, 2026 Directory lists for hotel flags, and the conditions it attaches.",
  lastUpdated: "2026-10-14",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Can I get an SBA loan to buy a hotel?",
    "How does franchise approval factor into a hotel purchase timeline?",
    "Do hotel loans require a franchise comfort letter?",
    "What's the actual difference between a hotel brand and a hotel franchise?",
    "Can I take over an existing franchise agreement when I buy a branded hotel?",
    "Is my hotel brand on the SBA Franchise Directory?",
    "Can I use a third-party management company on an SBA hotel loan?"
  ],
  answer: "Yes, if the brand meets the FTC definition of a franchise. SBA's rule is flat: a brand that meets the definition must be on the SBA Franchise Directory to obtain SBA financing.[2] The October 9, 2026 edition lists 3,461 brands, 2,438 of them as franchises, including all 24 hotel brands this site covers.[1]",
  takeaways: [
    "If the brand meets the FTC definition of a franchise, it must be on the Directory before a lender can submit the application to SBA or approve it under delegated authority.[2]",
    "The October 9, 2026 edition carries 3,461 brands: 2,438 marked as meeting the FTC definition, 1,009 marked as not meeting it, and 14 eligible only for SBA disaster loans.[1]",
    "A listing is not just a yes. Every hotel listing read for this page carries a condition, and the sharpest says the applicant is not eligible if the management company is, or is affiliated with, the franchisor.[1]",
    "SBA ran 22 months without a Directory. SOP 50 10 7, effective August 1, 2023, dropped the franchise review; SOP 50 10 8 restored it on June 1, 2025.[5][6]"
  ],
  sections: [
    {
      h2: "What is the SBA Franchise Directory?",
      lead: "It is SBA's published list of the franchise and other brands it has reviewed and found eligible for SBA financing, kept as a dated spreadsheet on SBA's own site.",
      body: "SOP 50 10 8.1 describes it plainly: SBA has created the Directory of all franchise and other brands it has reviewed that are eligible for SBA financial assistance.[2] The file published on October 9, 2026 is named Franchise Directory Oct 9 2026_REM01.xlsx, is 280 KB, and carries 3,461 brand rows.[1]\n\nEach row answers three questions: whether SBA determined that the brand meets the Federal Trade Commission definition of a franchise; the SBA Franchise Identifier Code, which SBA issues only when it does; and whether there are additional issues the lender must consider.[2] On this edition 2,438 rows are marked as meeting the definition and 2,437 of those carry a code. Another 1,009 are marked as not meeting it, and 14 are eligible only for SBA disaster assistance loans. Those three groups add to the 3,461 total. A fourth column records whether the franchisor certification has been received, and 281 rows carry a recertified date.[1]\n\nThe definition doing the work is not SBA's. 16 CFR 436.1(h) makes a relationship a franchise when the franchisee gets the right to operate under the franchisor's trademark, the franchisor has or can exert significant control over the method of operation, and the franchisee makes a required payment.[3] A hotel franchise agreement satisfies all three. The SOP widens the net: a licence or dealer agreement counts if SBA determines it meets the definition, and agreements exempt from FTC disclosure are still inside it.[2] The FTC rule drops its disclosure requirements once the franchisee's initial investment reaches $1,469,600, which a hotel purchase clears easily.[4] Not owing a disclosure document is not the same as not being a franchise."
    },
    {
      h2: "Is my hotel brand on it?",
      lead: "Every hotel brand with a franchise-cost page on this site, all 24 of them, is on the October 9, 2026 edition with an identifier code.[1]",
      body: "The table below carries twelve listings as the Directory prints them, with the code a lender keys into the SBA Loan System and the conditions SBA attaches.[1][2] Two things in it are worth reading twice.\n\nThe first is the brand name. The lender must ensure that the brand, and where applicable the agreement type, the applicant will operate under matches what the Directory lists.[2] Best Western appears as a membership agreement and several extended-stay brands carry an ES suffix, so the agreement and the row have to be the same thing, not the same logo.\n\nThe second is the last row. Fairbridge Inn Express and Fairbridge Inn & Suites sit on the Directory marked as not meeting the FTC definition, with no identifier code.[1] That is not a rejection: SBA adds such brands at their request to reduce confusion over relationships that look like franchises but are not.[2] It changes the procedure, not the answer. Where a brand is uncoded and the lender concludes the agreement does not meet the definition, the lender documents its own determination and bears the risk of getting it wrong on a delegated 7(a) loan. On a delegated 504 loan the documents go to SBA for a final determination before approval.[2]"
    },
    {
      h2: "Why does SBA care who manages my hotel?",
      lead: "Because a hotel whose operations are handed to someone else is a passive business, and passive businesses are ineligible.[7]",
      body: "13 CFR 120.110(c) makes passive businesses owned by developers and landlords that do not actively use or occupy the assets acquired or improved with the loan proceeds ineligible for SBA business loans.[7] SOP 50 10 8.1 turns that into a test a hotel can fail: a business whose management agreement gives the management company sole discretion over operations is an ineligible passive business. The applicant stays eligible where the manager lacks sole discretion and the owner exercises meaningful oversight, which the SOP defines as an agreement letting the applicant approve the annual operating budget, approve expenditures over a significant threshold, control the bank accounts, and oversee the staff, who must be the applicant's employees.[2]\n\nThen the Directory adds a harder line. The note on every hotel listing read for this page says that if the applicant also operates under a third-party management agreement, the lender must review it for affiliation, and that the applicant is not eligible if the management company is, or is affiliated with, the franchisor.[1] A brand-managed hotel and an SBA loan do not go together, whatever the economics look like.\n\nOne exception saves paperwork rather than deals. Unless the management agreement sits inside the franchise disclosure documents for a listed brand, lenders must review it on every loan, delegated or not.[2] The manager inside the brand's FDD is covered by the listing; the manager hired separately is not."
    },
    {
      h2: "What else does the listing make the lender check?",
      lead: "The notes column adds brand-specific conditions, and on hotel brands they cluster around length of stay, the comfort letter and lien position.",
      body: "Length of stay comes first. The SOP makes hotels, motels, recreational vehicle parks, marinas and campgrounds eligible only where more than 50 percent of the business's prior-year revenue came from transients who stay 30 days or less at a time, with projections standing in for a start-up.[2] Twenty-two listings on this edition repeat that test in their notes, and they are the extended-stay and apartment-branded ones: Residence Inn by Marriott, Extended Stay America, ECHO Suites and StudioRes among them.[1] The test applies to any hotel under the SOP, so a note repeating it flags the asset type rather than a rule unique to that flag. [Is extended-stay hotel financing different?](/hotel-financing/extended-stay-financing) works the revenue test through in detail.\n\nThe comfort letter comes second. Nineteen listings mention one, and they split two ways. The eight Hyatt brands, Hyatt Place and Hyatt House included, carry a note that the Hyatt comfort letter has been approved by SBA. The extended-stay listings carrying the 30-day test say the opposite: the comfort letter may not be used with SBA transactions.[1] A [franchise comfort letter](/glossary/comfort-letter) is routine on a conventional hotel loan, so learning at closing that the brand's version is barred is an avoidable surprise.\n\nLien position comes third. Many listings tell the lender to secure the appropriate lien position on all collateral, and others bar a lease addendum, a collateral assignment of lease or a franchisor purchase option where the real estate secures the SBA loan.[1] That is SBA naming the franchise documents the borrower may sign."
    },
    {
      h2: "Did SBA not get rid of the Franchise Directory?",
      lead: "It did, for 22 months, and that is why a stale answer to this question is still in wide circulation.",
      body: "SOP 50 10 7, effective August 1, 2023, contains no mention of a Franchise Directory and none of the FTC definition of a franchise.[5] The franchise review was gone. Behind it was the final rule on Affiliation and Lending Criteria for the SBA Business Loan Programs, published April 10, 2023 at 88 FR 21074 and effective May 11, 2023, which removed the principle of control as establishing affiliation between entities.[2] The current affiliation regulation, 13 CFR 121.301(f), reads on ownership and says nothing about franchise or licence agreements.[8]\n\nSOP 50 10 8, effective June 1, 2025, brought the Directory back with the listing requirement intact, and 8.1 carried it into the edition effective October 1, 2026.[6][2] What did not come back is the document a franchisee used to sign. Neither edition mentions an addendum to the franchise agreement; SBA now sends a Franchisor or Distributor Certification to the franchisor and lists the brand once the signed certification is returned.[2] The Directory's fourth column is the record of that certification.[1]\n\nBoth halves of the stale answer are wrong in 2026. The Directory exists, the brand has to be on it, and what changed is who signs: the franchisor certifies once for the whole system instead of each franchisee signing an addendum."
    },
    {
      h2: "What happens if the brand is not on the Directory?",
      lead: "The loan stops. For a non-delegated loan the lender cannot submit the application to SBA, and for a delegated loan the lender cannot approve it.[2]",
      body: "That is the SOP's own wording, and it applies before processing, not at closing.[2] The lender's instruction is to tell the applicant or franchisor how to get the brand added. The franchisor submits the agreement, the disclosure document where there is one, and every other document a franchisee must sign, to franchise@sba.gov. New brands are reviewed in the order received, and SBA lists the brand and issues the code once the signed certification is back.[2]\n\nSBA publishes no turnaround time for that review, and this page is not going to invent one. The only clock written down runs the other way: before removing a brand, SBA gives the franchisor notice and 30 days to respond.[2] A buyer on a financing contingency is holding the risk of a review with no published duration, which is the argument for checking the current edition before signing.\n\nTwo structures catch hotel buyers. Where an applicant operates under several qualifying agreements, all must be listed or the application cannot proceed, so a hotel with a branded restaurant has more than one row to check. And a franchise development agreement, or master franchise agreement, has been determined to be passive, which makes an applicant operating under one ineligible outright.[2]"
    },
    {
      h2: "What should a buyer do before signing the franchise agreement?",
      lead: "Pull the current edition, find the exact row, read the notes column against the management plan, and do it before the franchise application goes in.",
      body: "Download the dated file rather than a summary of it, because each edition replaces the last.[1] Match the row to the agreement type, not to the logo. Then read the notes column as a condition list: a third-party manager, a long-stay revenue mix and a comfort letter can each end the SBA path on a deal that prices well.\n\nThe Directory question only binds SBA loans. A bank, a credit union, a debt fund or a CMBS lender runs its own franchise review and its own comfort letter negotiation, and none of them publishes the terms of either. [What do lenders require for a hotel loan?](/hotel-financing/loan-requirements) covers that side, and [SBA 7(a) versus 504](/hotel-financing/sba-7a-vs-504) covers which program fits once the brand clears."
    }
  ],
  table: {
    caption: "Hotel brands on the SBA Franchise Directory, October 9, 2026 edition",
    columns: [
      "Brand, as the Directory lists it",
      "SBA Franchise Identifier Code",
      "Listed since",
      "Conditions in the Directory's notes column"
    ],
    rows: [
      [
        "Hampton Inn by Hilton",
        "S0781",
        "October 1, 2017",
        "Third-party management agreement reviewed; ineligible if the manager is or is affiliated with the franchisor"
      ],
      [
        "Hilton Garden Inn",
        "S0802",
        "October 1, 2017",
        "Third-party management agreement reviewed; ineligible if the manager is or is affiliated with the franchisor"
      ],
      [
        "Home 2 Suites by Hilton",
        "S0812",
        "October 1, 2017",
        "Third-party management agreement reviewed; ineligible if the manager is or is affiliated with the franchisor"
      ],
      [
        "Tru by Hilton",
        "S1816",
        "October 1, 2017",
        "Third-party management agreement reviewed; ineligible if the manager is or is affiliated with the franchisor"
      ],
      [
        "Holiday Inn Express / Holiday Inn Express & Suites",
        "S2794",
        "March 22, 2018",
        "Third-party management agreement reviewed; ineligible if the manager is or is affiliated with the franchisor"
      ],
      [
        "Staybridge Suites",
        "S8889",
        "August 4, 2026",
        "Third-party management agreement reviewed; ineligible if the manager is or is affiliated with the franchisor"
      ],
      [
        "Hyatt Place",
        "S2805",
        "March 22, 2018",
        "Management review, plus a note that the Hyatt comfort letter has been approved by SBA"
      ],
      [
        "Courtyard by Marriott",
        "S0433",
        "October 1, 2017",
        "Third-party management agreement reviewed; ineligible if the manager is or is affiliated with the franchisor"
      ],
      [
        "Residence Inn by Marriott",
        "S1425",
        "October 1, 2017",
        "Management review, plus the 30-day transient revenue test repeated in the note"
      ],
      [
        "Best Western, membership agreement (with Plus, Premier, Executive Residency, GLo and Aiden)",
        "S2125",
        "October 1, 2017",
        "Management review, plus the 30-day transient revenue test repeated in the note"
      ],
      [
        "WoodSpring Suites ES",
        "S1944",
        "October 1, 2017",
        "Third-party management agreement reviewed; ineligible if the manager is or is affiliated with the franchisor"
      ],
      [
        "Fairbridge Inn Express / Fairbridge Inn & Suites",
        "None issued",
        "October 1, 2017",
        "Marked as not meeting the FTC definition of a franchise, so SBA issues no code and the lender makes its own determination"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet prices both SBA paths a listed brand opens: the 7(a) ceiling at 10.00%, which is the 7.00% Prime of September 29, 2026 plus SBA's 3.00% maximum spread above $350,000, and the 25-year 504 debenture at 6.54% as priced on September 10, 2026.[9]"
  },
  workedExample: {
    label: "Hypothetical: what the management condition costs on a 92-key select-service hotel",
    body: "Hypothetical, and the coverage test is this example's own assumption, because no lender publishes its DSCR floor.\n\nA buyer is under contract on a 92-key branded select-service hotel doing $2,400,000 of revenue, and plans to hire the brand's management affiliate at 3.0 percent, or $72,000 a year. At that fee the NOI is $720,000, 30.0 percent of revenue.\n\nThe Directory note on the flag makes that plan ineligible: the applicant is not eligible if the management company is, or is affiliated with, the franchisor.[1] So the comparison is not cheap manager against expensive. It is SBA against no SBA.\n\nSwitch to an independent manager at 3.5 percent and the fee is $84,000, or $12,000 more. NOI falls to $708,000. At an assumed 1.35x coverage test, $720,000 of NOI supports $533,333 of annual debt service and $708,000 supports $524,444, a difference of $8,889.\n\nPrice that at the 7(a) ceiling of 10.00 percent over a 25-year amortization and the monthly payment factor is 0.00908701 per dollar borrowed, or 0.10904409 a year. The higher NOI supports a $4,890,988 loan and the lower one $4,809,472: $81,516 less. Both sit under the $5,000,000 7(a) cap, so the coverage test binds rather than the cap.\n\nThe condition costs $12,000 a year of fee and about $81,500 of loan capacity. The alternative is a conventional loan whose terms no lender publishes."
  },
  faq: [
    {
      q: "Does my hotel brand have to be on the SBA Franchise Directory?",
      a: "Yes, if the brand meets the FTC definition of a franchise. SOP 50 10 8.1 says such a brand must be on the Directory to obtain SBA financing. All 24 hotel brands covered here are on the October 9, 2026 edition."
    },
    {
      q: "What is an SBA Franchise Identifier Code?",
      a: "A code SBA assigns to a listed brand, issued only where the agreement meets the FTC definition of a franchise. The lender keys it into the SBA Loan System. Hilton Garden Inn is S0802 on the October 9, 2026 edition."
    },
    {
      q: "Did SBA eliminate the Franchise Directory?",
      a: "It did for 22 months. SOP 50 10 7, effective August 1, 2023, dropped the franchise review. SOP 50 10 8 restored the Directory on June 1, 2025, and 8.1 kept it from October 1, 2026."
    },
    {
      q: "Can I use a management company on an SBA hotel loan?",
      a: "Only one that is not the franchisor or a franchisor affiliate, and only where the agreement leaves the owner meaningful oversight: the budget, large expenditures, the bank accounts and the staff, who must be the borrower's employees."
    },
    {
      q: "Is being on the Directory the same as SBA approving my loan?",
      a: "No. SBA says placement is not an endorsement or a guaranty of the brand's success. The hotel still has to pass every other test, including the rule that more than half of prior-year revenue comes from stays of 30 days or less."
    },
    {
      q: "How does a hotel brand get added to the Directory?",
      a: "The franchisor sends the agreement, the disclosure document and every document a franchisee must sign to franchise@sba.gov. SBA reviews new brands in the order received, then sends a certification to sign before listing it. SBA publishes no turnaround time."
    }
  ],
  sources: [
    {
      n: 1,
      label: "SBA Franchise Directory, October 9, 2026 edition (Franchise Directory Oct 9 2026_REM01.xlsx): 3,461 brand rows, identifier codes, FTC determination, certification status and the per-brand notes column",
      url: "https://legacy.sba.gov/document/support-sba-franchise-directory",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-14"
    },
    {
      n: 2,
      label: "SOP 50 10 8.1, Lender and Development Company Loan Programs (effective October 1, 2026), Section A, Ch. 1: the Franchises paragraphs on the Directory, the FTC definition, lender use, the procedure to add a brand and the 30-day removal notice; the passive-business and meaningful-oversight tests; the hotel transient-revenue rule; and the statement of the April 10, 2023 affiliation final rule at 88 FR 21074",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-14"
    },
    {
      n: 3,
      label: "16 CFR 436.1(h), definition of franchise",
      url: "https://www.law.cornell.edu/cfr/text/16/436.1",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-14"
    },
    {
      n: 4,
      label: "16 CFR 436.8, exemptions from the FTC franchise rule, including the $1,469,600 large-investment exemption",
      url: "https://www.law.cornell.edu/cfr/text/16/436.8",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-14"
    },
    {
      n: 5,
      label: "SOP 50 10 7 (effective August 1, 2023), the edition with no Franchise Directory and no FTC franchise definition",
      url: "https://legacy.sba.gov/sites/default/files/2023-05/SOP%2050%2010%207%20effective%2008.01.2023_0.docx",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-14"
    },
    {
      n: 6,
      label: "SOP 50 10 8 (effective June 1, 2025), the edition that restored the Franchise Directory",
      url: "https://legacy.sba.gov/sites/default/files/2025-05/SOP%2050%2010%208%20Technical%20Updates%20effective%206.1.2025.docx",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-14"
    },
    {
      n: 7,
      label: "13 CFR 120.110(c), passive businesses owned by developers and landlords are ineligible",
      url: "https://www.law.cornell.edu/cfr/text/13/120.110",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-14"
    },
    {
      n: 8,
      label: "13 CFR 121.301(f), affiliation for applicants in SBA's business loan programs, which now turns on ownership",
      url: "https://www.law.cornell.edu/cfr/text/13/121.301",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-14"
    },
    {
      n: 9,
      label: "Matthews Hotel Markets October 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-14"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/extended-stay-financing",
      "/hotel-financing/brand-conversion-financing",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/lenders-under-5-million",
      "/hotel-financing/pip-and-renovation-loans"
    ],
    glossary: [
      "/glossary/franchise-agreement",
      "/glossary/franchise-fdd",
      "/glossary/comfort-letter",
      "/glossary/sba-7a",
      "/glossary/sba-504"
    ],
    data: [
      "/rates",
      "/data/sba-hotel-lending"
    ]
  },
  cta: {
    label: "Check your brand before you sign",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges SBA 7(a) and 504 debt, and the franchise row and the notes column get read before a deal is quoted, not after the franchise application goes in."
};

export default page;
