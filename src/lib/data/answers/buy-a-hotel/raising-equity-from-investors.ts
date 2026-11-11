/**
 * How do I raise money from investors to buy a hotel?
 * Answer page: /buy-a-hotel/raising-equity-from-investors
 *
 * Written 2026-11-11 from a coverage scan: "506(b)", "blue sky", "Form D" and
 * "sale leaseback" each appeared in zero or one file under src/lib/data/, so
 * the site explained every layer of hotel debt and nothing about the law that
 * governs the equity line.
 *
 * Every figure in the worked example is recomputed by
 * scripts/check-equity-raise-math.mjs. Do not hand-edit prose here without
 * bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "raising-equity-from-investors",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "Raising Equity From Investors to Buy a Hotel",
  h1: "How do I raise money from investors to buy a hotel?",
  description:
    "What securities law requires when you raise hotel equity: Rule 506(b) versus 506(c), who may invest, Form D in 15 days, and who may be paid a fee.",
  lastUpdated: "2026-11-11",
  authorSlug: "miles-cortez",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I raise money from investors to buy a hotel?",
    "Do I need to register with the SEC to raise equity for a hotel deal?",
    "What is the difference between Rule 506(b) and Rule 506(c) for a hotel syndication?",
    "Can I advertise a hotel investment opportunity?",
    "Who counts as an accredited investor?",
    "Can I pay someone a commission for finding investors for my hotel deal?",
    "Do I have to file anything with my state when I raise equity?",
    "How much cash do I need to buy a select-service hotel?"
  ],
  answer:
    "An interest in the LLC that buys the hotel is a security, so the raise runs under Rule 506 of Regulation D. Rule 506(b) bars advertising and allows up to 35 purchasers who are not accredited. Rule 506(c) allows advertising, and every purchaser must be verified. Form D is due 15 calendar days after the first sale. Rules read in the October 1, 2026 issue of title 17.[1][2][3]",
  takeaways: [
    "The test is SEC v. W. J. Howey Co., decided May 27, 1946, in a case where the buyers were guests of the promoter's own resort hotel. Money placed in a common enterprise with profits expected from someone else's work is an investment contract, and 15 U.S.C. 77b(a)(1) lists an investment contract as a security.[2][1]",
    "The 35-purchaser limit counts only purchasers who are not accredited, because 17 CFR 230.501(e)(1)(iv) leaves accredited investors out of the count.[4][5]",
    "Admitting one investor who is not accredited switches on 17 CFR 230.502(b), and above $20,000,000 of offering that means audited financial statements.[6][10]",
    "Nobody may be paid a percentage of what they raise without broker registration. The safe harbor for the issuer's own people is lost by any pay tied to securities transactions.[14][15]"
  ],
  sections: [
    {
      h2: "Is an interest in my hotel LLC really a security?",
      lead: "In nearly every case, yes. The test is SEC v. W. J. Howey Co., decided May 27, 1946, and it reads what the investor was promised rather than what the document was called.[2]",
      body: "Howey sold tracts of a Florida citrus grove with a service contract to farm it. The buyers could not farm and expected profits, and, as the Court recorded, \"many of these purchasers are patrons of a resort hotel owned and operated by the Howey Company\". The holding is the sentence to know: an investment contract is \"a contract, transaction or scheme whereby a person invests his money in a common enterprise and is led to expect profits solely from the efforts of the promoter or a third party, it being immaterial whether the shares in the enterprise are evidenced by formal certificates or by nominal interests in the physical assets\".[2]\n\nThat last clause closes the usual escape routes. A tenant-in-common deed, a membership interest, a \"partnership\" in the hotel: if the investor is passive and expects you to run the hotel, it is a security. 15 U.S.C. 77b(a)(1) lists an \"investment contract\" among securities,[1] 15 U.S.C. 77e makes it unlawful to sell one unless a registration statement is in effect,[3] 15 U.S.C. 77d(a)(2) exempts \"transactions by an issuer not involving any public offering\",[4] and 17 CFR 230.506(a) deems an offering that meets paragraph (b) or (c) to be exactly that.[5] So the question is which paragraph you are complying with, not whether securities law reaches the raise."
    },
    {
      h2: "Should I use Rule 506(b) or Rule 506(c)?",
      lead: "506(b) forbids advertising and asks little proof of who your investors are. 506(c) permits advertising and requires documented verification of every purchaser.[5]",
      body: "The ban is broad. 17 CFR 230.502(c) reaches any communication \"published in any newspaper, magazine, or similar media or broadcast over television or radio\", and any \"seminar or meeting whose attendees have been invited by any general solicitation\".[6] A public post about the deal, or an open webinar, ends a 506(b) offering. Filing the Form D does not: the same paragraph says so.[6]\n\nTo advertise, 17 CFR 230.506(c)(2)(ii) sets out methods that count as reasonable verification: two years of IRS income forms plus a written representation about the current year; asset documentation dated within the prior three months plus a consumer report for liabilities; or written confirmation from a registered broker-dealer, an SEC-registered investment adviser, a licensed attorney or a certified public accountant who verified the purchaser within the prior three months.[5]\n\nThose are examples, not a closed list. On March 12, 2025 the staff of the SEC's Division of Corporation Finance agreed that \"a high minimum investment amount is a relevant factor in verifying accredited investor status\", where the minimum comes with written representations that the purchaser is accredited and that the money is not financed by a third party for that purpose.[8] Note what the staff did not do: it named no figure. The $200,000 for a natural person and $1,000,000 for an entity now quoted as the rule came from the requester's own letter of March 6, 2025.[9]"
    },
    {
      h2: "Who counts as an accredited investor, and how many can I have?",
      lead: "Net worth above $1,000,000 excluding the primary residence, or individual income above $200,000, or joint income above $300,000, in each of the two most recent years.[4]",
      body: "17 CFR 230.501(a)(5) sets the net worth test and excludes the primary residence. Paragraph (a)(6) sets the income test and adds the condition people forget: a \"reasonable expectation of reaching the same income level in the current year\". Paragraph (a) also covers a person the issuer \"reasonably believes\" qualifies, which is the lighter standard a 506(b) offering relies on.[4]\n\nOn numbers, 230.506(b)(2)(i) allows \"no more than 35 purchasers of securities from the issuer ... in any 90-calendar-day period\", and 230.501(e)(1)(iv) excludes any accredited investor from the count.[5][4] Accredited investors are unlimited; the 35 is a ceiling on the others, and each of those must, alone or with a purchaser representative, have \"such knowledge and experience in financial and business matters\" to evaluate the investment.[5]\n\nOne trap is worth stating plainly. 230.501(e)(2) counts an entity as one purchaser, but if it was organized for the specific purpose of acquiring the securities and is not itself accredited, every beneficial owner counts separately.[4] Five friends who form an LLC to take one unit are five purchasers, not one."
    },
    {
      h2: "What changes if one investor is not accredited?",
      lead: "17 CFR 230.502(b) switches on, and you owe that investor a disclosure package built out of registration-statement content and financial statements.[6]",
      body: "The duty is narrow. 230.502(b)(1) requires the information only where a 506(b) offering sells to a purchaser who is not accredited: nothing is owed to accredited investors, and a 506(c) offering never reaches paragraph (b), because 230.506(c)(1) requires compliance with 230.501, 230.502(a) and 230.502(d) only.[6][5] What is owed is non-financial information of the kind Part II of Form 1-A requires, plus financial statements under Part F/S: paragraph (b) up to $20,000,000 of offering, paragraph (c) above that.[6]\n\nThat dollar line is the audit line. Part F/S paragraph (b)(2) says Tier 1 statements \"need not be audited\" and must be labeled \"unaudited\" when they are not; paragraph (c)(1)(ii) says \"Audited financial statements are required for Tier 2 offerings\".[10]\n\nThe hotel-specific part is easy to get backwards. Part F/S also calls for statements of the thing you are buying, and a hotel is not a \"real estate operation\": 17 CFR 210.3-14(a)(2)(i) defines that as a business generating \"substantially all of its revenues through the leasing of real property\", while a hotel sells nightly rooms and services. A hotel is a business under 17 CFR 210.11-01(d), whose test turns on attributes a hotel sale carries over: physical facilities, employee base, customer base, trade names.[12] Rule 8-04 therefore applies Rule 3-05: nothing below 20 percent significance, one fiscal year above 20 percent, and the two most recent fiscal years above 40 percent, audited under Regulation S-X.[11] A single-asset LLC buying one hotel is at 100 percent, so admitting one investor who is not accredited to a large raise means asking the seller for two years of auditable books, a conversation for the letter of intent."
    },
    {
      h2: "What do I have to file, and when?",
      lead: "Form D through EDGAR no later than 15 calendar days after the first sale, plus whatever each state where an investor lives requires.[7]",
      body: "230.503(a)(1) sets the federal deadline at 15 calendar days after the first sale, and 230.503(b)(1) requires the filing to go through EDGAR.[7] Amendments are due to correct a material mistake, to reflect a change in what was filed, and annually while the offering continues, with carve-outs including a change in the number of investors who are not accredited \"as long as the change does not increase the number to more than 35\".[7]\n\nStates cannot register a Rule 506 offering or review its merits, because it is a covered security under 15 U.S.C. 77r(b)(4)(F). What survives is 77r(c)(2)(A): a state may require documents filed with the Commission \"solely for notice purposes and the assessment of any fee, together with a consent to service of process and any required fee\".[13]\n\nTexas, this team's home state, is the concrete case. Its State Securities Board requires a copy of the Form D no later than 15 calendar days after the first sale in Texas, with a fee of 1/10 of 1 percent of the offering, \"but in no case more than $500\", filed through the Electronic Filing Depository.[16] Every state sets its own form, deadline and fee, so check each state where a purchaser lives before you take the money."
    },
    {
      h2: "Can I pay someone a fee for finding investors?",
      lead: "Not a percentage. 15 U.S.C. 78o(a)(1) makes it unlawful for an unregistered broker to use interstate commerce to induce the purchase of a security.[14]",
      body: "The only shelter most sponsors have is 17 CFR 240.3a4-1, under which an \"associated person of an issuer\", a partner, officer, director or employee of the issuer or of an affiliate under common control, is not a broker solely because he helps sell the issuer's securities.[15] The conditions matter more than the label: no statutory disqualification, no association with a broker or dealer, and no compensation \"based either directly or indirectly on transactions in securities\". One of three activity tests must also hold, usually that the person performs substantial non-securities duties for the issuer, was not a broker in the preceding 12 months, and sells no more than one offering every 12 months.[15]\n\nAn outside finder on a success fee fails the compensation condition on its face, and paragraph (b) says only that no presumption of violation arises outside the safe harbor, which is not permission.[15] The second cost is the exemption itself: 230.506(d)(1) runs the bad-actor check against \"any person that has been or will be paid (directly or indirectly) remuneration for solicitation of purchasers\", so a paid solicitor's record can disqualify the offering.[5]\n\nMatthews Hotel Markets arranges hotel debt from $5 million, sells hotels from $2 million and represents buyers, including 1031 buyers. It is a real estate brokerage, not a broker-dealer: it does not raise equity, place securities or take a fee on an investor's subscription. A raise needs securities counsel engaged before the first investor conversation."
    },
    {
      h2: "How much equity do I actually have to raise?",
      lead: "Purchase price plus the property improvement plan plus closing costs and reserves, minus the loan. One equity minimum is published, and it is SBA's.[17]",
      body: "SBA 504 requires a borrower contribution of at least 15 percent of project cost on a hotel, or 20 percent when the operating business has run two years or less, and the gross debenture on a hotel is capped at $5 million. Our October 2026 rate sheet records those figures from SOP 50 10 8.1, and records every other lender type's equity requirement as not yet published, because no bank, CMBS lender, life company or debt fund publishes one.[17] The size of the raise is arithmetic, not a market rule: get the debt in writing, add the brand's fees and the reserves, and the remainder is the raise.\n\nThe $5 million debenture cap bites on any 504 project above about $14.3 million of cost, and every dollar it cannot fund lands in the equity line. [How much money do I need to buy a hotel?](/buy-a-hotel/how-much-money-do-you-need) breaks out the cash stack, [How do I underwrite a hotel deal?](/buy-a-hotel/how-to-underwrite-a-hotel-deal) sets the income it rests on, and [What is a hotel capital stack?](/hotel-financing/capital-stack) covers the layers between the senior loan and your investors. Test a price against a loan with the [hotel DSCR calculator](/tools/dscr-calculator) before you promise anyone a return."
    }
  ],
  table: {
    caption: "Rule 506(b) and Rule 506(c) compared, title 17 as of October 1, 2026",
    columns: ["Test", "Rule 506(b)", "Rule 506(c)", "Where it is written"],
    rows: [
      [
        "Advertising and general solicitation",
        "Forbidden",
        "Permitted",
        "17 CFR 230.502(c), 230.506(c)(1)"
      ],
      [
        "Who may purchase",
        "Accredited investors, plus up to 35 purchasers who are not, each sophisticated or represented",
        "Accredited investors only",
        "17 CFR 230.506(b)(2), 230.506(c)(2)(i)"
      ],
      [
        "Proof of accredited status",
        "Reasonable belief",
        "Reasonable steps to verify, documented",
        "17 CFR 230.501(a), 230.506(c)(2)(ii)"
      ],
      [
        "Information you must furnish",
        "To a purchaser who is not accredited only: Form 1-A Part II content plus financial statements",
        "Nothing required by Regulation D",
        "17 CFR 230.502(b)(1), 230.506(c)(1)"
      ],
      [
        "Audited financial statements",
        "Only with a purchaser who is not accredited, and only above $20,000,000 of offering",
        "Not required by Regulation D",
        "17 CFR 230.502(b)(2)(i)(B), Form 1-A Part F/S"
      ],
      [
        "Form D",
        "Within 15 calendar days of the first sale",
        "Within 15 calendar days of the first sale",
        "17 CFR 230.503(a)(1)"
      ],
      [
        "Bad actor check on the issuer and paid solicitors",
        "Required",
        "Required",
        "17 CFR 230.506(d)"
      ],
      [
        "State registration",
        "Preempted; notice filing and fee survive",
        "Preempted; notice filing and fee survive",
        "15 U.S.C. 77r(b)(4)(F), 77r(c)(2)"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Our October 2026 rate sheet, published October 1, 2026, carries the only published equity minimum in hotel finance: SBA 504 requires a borrower contribution of at least 15 percent of project cost on a hotel, 20 percent if the business has operated two years or less, and the gross debenture on a hotel is capped at $5 million. Every other lender type's equity line is marked not yet published.[17]"
  },
  workedExample: {
    label: "Hypothetical: raising $2,500,000 of equity for a $14,000,000 hotel",
    body: "Hypothetical, not a transaction. A 95-key select-service hotel at a $14,000,000 price with a $2,100,000 property improvement plan, bought through a new single-asset LLC, with $700,000 of closing costs and reserves funded outside the SBA project.\n\nSizing the equity. Project cost is $14,000,000 plus $2,100,000, or $16,100,000, and the hotel debenture cap bites above $14,285,714 of it. The debenture is capped at 35 percent of project cost, which would be $5,635,000 here, but the gross debenture on a hotel is capped at $5,000,000, so $635,000 of it is unavailable.[17] The bank first lien funds 50 percent, or $8,050,000. The borrower therefore contributes $16,100,000 less $5,000,000 less $8,050,000, or $3,050,000, which is 18.9 percent of project cost rather than the 15 percent minimum of $2,415,000.[17] The $635,000 gap between the two is exactly the debenture lost to the cap. Add the $700,000 outside the project and the cash to close is $3,750,000. The sponsor puts in $1,250,000 and raises $2,500,000, which is 66.7 percent of the cash.\n\nStructuring the raise. Ten units of $250,000 each. Under Rule 506(b), if all ten purchasers are accredited, 230.501(e)(1)(iv) leaves every one of them out of the 35-purchaser count, so the count is zero and all 35 places remain: no verification, and no advertising.[4][5] Under Rule 506(c) the deal may be advertised and all ten must be verified, and the $250,000 unit clears the $200,000 minimum proposed in the March 6, 2025 request letter by $50,000, which is the route the staff's March 12, 2025 response addressed.[8][9]\n\nTwo lines decide the paperwork. The offering is $2,500,000, which sits $17,500,000 below the $20,000,000 point at which Part F/S of Form 1-A requires audited statements for a purchaser who is not accredited.[6][10] And the Texas notice filing: 1/10 of 1 percent of $2,500,000 is $2,500, but the fee is capped at $500, so the cap saves $2,000.[16]\n\nEvery figure above was recomputed by scripts/check-equity-raise-math.mjs."
  },
  faq: [
    {
      q: "Is bringing in partners to buy a hotel a securities offering?",
      a: "Usually yes. Under SEC v. W. J. Howey Co., an investor who puts money into a common enterprise and expects profits from someone else's efforts holds an investment contract, which 15 U.S.C. 77b(a)(1) lists as a security.[2][1] Calling it a partnership changes nothing."
    },
    {
      q: "What is the difference between Rule 506(b) and Rule 506(c)?",
      a: "506(b) forbids advertising and lets you rely on reasonable belief about who is accredited. 506(c) lets you advertise and requires documented verification of every purchaser.[5] Both need a Form D and the bad-actor check."
    },
    {
      q: "How many investors can I take?",
      a: "Unlimited accredited investors. 17 CFR 230.506(b)(2)(i) caps purchasers at 35 in any 90-calendar-day period, and 230.501(e)(1)(iv) excludes accredited investors from that count, so 35 is the ceiling on purchasers who are not accredited.[5][4]"
    },
    {
      q: "When is Form D due?",
      a: "No later than 15 calendar days after the first sale in the offering, filed electronically through EDGAR, with an amendment to correct a mistake, to reflect a change, and annually while the offering continues.[7]"
    },
    {
      q: "Can I pay a finder a percentage of what they raise?",
      a: "There is no safe way. 15 U.S.C. 78o(a)(1) requires broker registration, and the issuer safe harbor in 17 CFR 240.3a4-1 is lost by any pay based directly or indirectly on securities transactions.[14][15] Ask securities counsel before promising a success fee."
    },
    {
      q: "Does Matthews Hotel Markets raise equity for buyers?",
      a: "No. The team arranges hotel debt from $5 million, sells hotels from $2 million and represents buyers. It is a real estate brokerage, not a broker-dealer, so it does not place securities or take a fee on an investor's subscription."
    }
  ],
  sources: [
    {
      n: 1,
      label: "15 U.S.C. 77b(a)(1), definition of security (investment contract; certificate of interest or participation in any profit-sharing agreement)",
      url: "https://www.law.cornell.edu/uscode/text/15/77b",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-11"
    },
    {
      n: 2,
      label: "SEC v. W. J. Howey Co., 328 U.S. 293 (1946), decided May 27, 1946 (the investment-contract test; the purchasers were patrons of the promoter's resort hotel)",
      url: "https://www.law.cornell.edu/supremecourt/text/328/293",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-11"
    },
    {
      n: 3,
      label: "15 U.S.C. 77e, prohibition on selling an unregistered security",
      url: "https://www.law.cornell.edu/uscode/text/15/77e",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-11"
    },
    {
      n: 4,
      label: "17 CFR 230.501, Regulation D definitions (accredited investor at (a)(5) and (a)(6); purchaser count at (e)), and 15 U.S.C. 77d(a)(2), transactions not involving any public offering",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-17.xml?part=230&section=230.501",
      publisher: "Office of the Federal Register (eCFR)",
      accessed: "2026-11-11"
    },
    {
      n: 5,
      label: "17 CFR 230.506, exemption for limited offers and sales (506(b) conditions; 506(c) verification methods; 506(d) bad actor disqualification)",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-17.xml?part=230&section=230.506",
      publisher: "Office of the Federal Register (eCFR)",
      accessed: "2026-11-11"
    },
    {
      n: 6,
      label: "17 CFR 230.502, general conditions (information requirements at (b); limitation on manner of offering at (c); resale limits at (d))",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-17.xml?part=230&section=230.502",
      publisher: "Office of the Federal Register (eCFR)",
      accessed: "2026-11-11"
    },
    {
      n: 7,
      label: "17 CFR 230.503, filing of notice of sales on Form D (15 calendar days; EDGAR; amendments)",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-17.xml?part=230&section=230.503",
      publisher: "Office of the Federal Register (eCFR)",
      accessed: "2026-11-11"
    },
    {
      n: 8,
      label: "Latham & Watkins LLP, Rule 506(c) interpretive response, March 12, 2025 (a high minimum investment amount is a relevant factor; no dollar figure stated)",
      url: "https://www.sec.gov/rules-regulations/no-action-interpretive-exemptive-letters/division-corporation-finance-no-action/latham-watkins-503c-031225",
      publisher: "U.S. Securities and Exchange Commission, Division of Corporation Finance",
      accessed: "2026-11-11"
    },
    {
      n: 9,
      label: "Latham & Watkins LLP request for Rule 506(c) interpretive guidance, March 6, 2025 (proposes minimum investment amounts of at least $200,000 for natural persons and $1,000,000 for legal entities)",
      url: "https://www.sec.gov/files/corpfin/no-action/latham-watkins506c-031225-incoming.pdf",
      publisher: "U.S. Securities and Exchange Commission",
      accessed: "2026-11-11"
    },
    {
      n: 10,
      label: "Form 1-A, Regulation A offering statement, Part F/S (paragraph (b)(2): Tier 1 statements need not be audited; paragraph (c)(1)(ii): audited statements required for Tier 2)",
      url: "https://www.sec.gov/files/form1-a.pdf",
      publisher: "U.S. Securities and Exchange Commission",
      accessed: "2026-11-11"
    },
    {
      n: 11,
      label: "17 CFR 210.3-05, financial statements of businesses acquired or to be acquired (significance at (b)(2): none below 20 percent, one year above 20, two years above 40), applied to Regulation A filings by 17 CFR 210.8-04",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-17.xml?part=210&section=210.3-05",
      publisher: "Office of the Federal Register (eCFR)",
      accessed: "2026-11-11"
    },
    {
      n: 12,
      label: "17 CFR 210.3-14, real estate operations acquired or to be acquired (a real estate operation generates substantially all revenues through leasing real property), and 17 CFR 210.11-01(d), what counts as a business",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-17.xml?part=210&section=210.3-14",
      publisher: "Office of the Federal Register (eCFR)",
      accessed: "2026-11-11"
    },
    {
      n: 13,
      label: "15 U.S.C. 77r, exemption from state regulation (covered securities at (b)(4)(F); notice filings and fees preserved at (c)(2))",
      url: "https://www.law.cornell.edu/uscode/text/15/77r",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-11"
    },
    {
      n: 14,
      label: "15 U.S.C. 78o(a)(1), registration of brokers and dealers",
      url: "https://www.law.cornell.edu/uscode/text/15/78o",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-11"
    },
    {
      n: 15,
      label: "17 CFR 240.3a4-1, associated persons of an issuer deemed not to be brokers (no transaction-based compensation; one offering every 12 months)",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-17.xml?part=240&section=240.3a4-1",
      publisher: "Office of the Federal Register (eCFR)",
      accessed: "2026-11-11"
    },
    {
      n: 16,
      label: "Filing requirements for Regulation D offerings in Texas (Form D copy within 15 calendar days of the first sale in Texas; fee of 1/10 of 1 percent of the offering, no more than $500; filed through the Electronic Filing Depository)",
      url: "https://ssb.texas.gov/securities-professionals/regulation-securities/filing-requirements-regulation-d-offerings-texas",
      publisher: "Texas State Securities Board",
      accessed: "2026-11-11"
    },
    {
      n: 17,
      label: "Matthews Hotel Markets rate sheet, October 2026 edition (SBA 504 borrower contribution of at least 15 percent on a hotel, 20 percent if the business has operated two years or less; $5 million gross debenture cap; other lender types' equity requirements not yet published)",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-11-11"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/how-much-money-do-you-need",
      "/buy-a-hotel/how-to-underwrite-a-hotel-deal",
      "/buy-a-hotel/first-hotel-no-experience",
      "/buy-a-hotel/seller-financing"
    ],
    glossary: [
      "/glossary/mezzanine-debt",
      "/glossary/dscr",
      "/glossary/cap-rate"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Size the debt before you size the raise",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets arranges the debt that decides how much equity you have to raise, and represents buyers on the purchase itself; the offering documents are securities counsel's work, not ours."
};

export default page;
