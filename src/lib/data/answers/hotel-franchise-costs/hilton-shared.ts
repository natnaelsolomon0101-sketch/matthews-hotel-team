/**
 * Shared sections for the Hilton-family brand guides in /hotel-franchise-costs.
 *
 * Hilton Franchise Holding LLC issues one FDD per brand, and several parts of
 * those documents are word-for-word the same across brands: the Item 17 term,
 * renewal and transfer rows, the Item 6 liquidated damages formula and the
 * Item 10 development incentive. Those passages were checked in each of the
 * eight 2026 FDDs on 2026-09-18 before being shared here. Only the page
 * numbers and the fee amounts differ, and each brand file passes them in.
 *
 * Everything brand-specific (Item 5/6 amounts, Item 7, Item 19, the worked
 * example, FAQs) lives in that brand's own file. When Hilton issues the 2027
 * FDDs, re-read each document, then update the brand file and, if the shared
 * wording changed, this file. Bump `lastUpdated` on every page touched.
 */
import type { AnswerSection, AnswerSource } from "../types";

export const HILTON_FDD_ISSUED = "March 30, 2026";
export const HILTON_LAST_UPDATED = "2026-09-18";

export type HiltonShared = {
  /** Short brand name used in prose, e.g. "Hampton". */
  short: string;
  /** Printed FDD page numbers. */
  pages: {
    item10: string;
    item17Term: string;
    item17Transfer: string;
    liquidatedDamages: string;
    note8: string;
    transferFees: string;
    comfortLetter: string;
  };
  /** Item 17(a) term wording, which differs by brand. */
  termLead: string;
  relicensingFee: string;
  changeOfOwnershipFee: string;
  /** Pre-opening liquidated damages, which differ for Spark. */
  preOpeningDamages: string;
  /** First leg of the opening-to-second-anniversary test, second leg. */
  earlyDamagesFloor: string;
  /** False for Spark, whose formula does not use the system average. */
  usesSystemAverage: boolean;
  /** "It agreed to modify the monthly royalty fee in N instances during 2025..." */
  negotiatedSentence: string;
  /** Markdown links to matching /hotels-for-sale pages. */
  forSaleSentence: string;
};

export function termSection(s: HiltonShared): AnswerSection {
  return {
    h2: `How long is a ${s.short} franchise agreement, and can I renew it?`,
    lead: s.termLead,
    body: `Item 17 of the 2026 ${s.short} FDD (p. ${s.pages.item17Term}) states that on a change of ownership the term is generally the remaining term under the existing franchise agreement, or another term Hilton approves.[1] The franchisee does not have the right to renew or extend. If Hilton agrees, in its sole discretion, to re-license the hotel, the owner may be asked to sign a contract with materially different terms and must meet any PIP conditions Hilton sets.[1] The re-licensing application fee is ${s.relicensingFee} (Item 6, p. ${s.pages.transferFees}).[1]\n\nThe franchisee is not authorized to terminate before the term expires. Item 17 treats a unilateral termination without cause as a material breach, and liquidated damages become payable on demand.[1] The contract itself is defined at [franchise agreement](/glossary/franchise-agreement).`,
  };
}

export function transferSection(s: HiltonShared): AnswerSection {
  return {
    h2: `What happens to the ${s.short} franchise when the hotel is sold?`,
    lead: `A sale that changes control of a ${s.short} is a change of ownership transfer: the seller gives Hilton 60 days' written notice and the buyer applies for a new franchise.[1]`,
    body: `Item 17 of the 2026 ${s.short} FDD (p. ${s.pages.item17Transfer}) requires the buyer to meet Hilton's then-current requirements for new franchisees, including credit, a background investigation and operations experience. The buyer submits a change of ownership application, pays the franchise application fee (${s.changeOfOwnershipFee}), signs the then-current form of franchise agreement and agrees to Hilton's requested upgrades, which may include a PIP fee.[1] The seller must not be in default and must pay all amounts due through closing. If the buyer has SBA financing, buyer and seller must agree to escrow Hilton's estimated fees and disburse them at closing.[1]\n\nPermitted transfers are those that do not change control. Transfers of publicly traded equity, and of privately held equity where the transferee holds less than 50 percent afterward, need no notice or consent. Transfers to affiliates, to a family member or trust, or on death need 60 days' written notice, Hilton's consent and a $5,500 processing fee.[1] An owner may mortgage the hotel to a lender that finances its acquisition, development or operation without Hilton's consent if the owner is the sole borrower and the loan is not secured by other hotels or other collateral. A lender [comfort letter](/glossary/comfort-letter) costs $3,500 (Item 6, p. ${s.pages.comfortLetter}).[1]\n\n${s.forSaleSentence} The buyer's checklist is at [What due diligence do I need before buying a hotel?](/buy-a-hotel/due-diligence-checklist).`,
  };
}

export function damagesSection(s: HiltonShared): AnswerSection {
  const systemAverage = s.usesSystemAverage
    ? ` The system's average is the average monthly royalty per guest room owed by U.S. ${s.short} hotels over the prior 12 full calendar months, multiplied by the hotel's approved guest rooms.`
    : "";
  return {
    h2: `What does it cost to leave ${s.short} before the term ends?`,
    lead: `Hilton's liquidated damages for a ${s.short} that has been open more than two years are the hotel's average monthly royalty fees multiplied by 60, or by the months remaining in the final 60 months of the term.[1]`,
    body: `Item 6 of the 2026 ${s.short} FDD (p. ${s.pages.liquidatedDamages}) sets four cases for a termination by Hilton. Before opening: ${s.preOpeningDamages}. From opening to the second anniversary: the greater of the hotel's average monthly royalty fees multiplied by 60, or ${s.earlyDamagesFloor}. After the second anniversary and before the final 60 months of the term: the hotel's average monthly royalty fees multiplied by 60. Within the final 60 months: the hotel's average monthly royalty fees multiplied by the number of months remaining.[1]\n\nNote 8 to Item 6 (p. ${s.pages.note8}) defines the hotel's average as the royalty fees due for the 24 months before the month of termination, divided by 24.${systemAverage} Fee discounts, ramps and waivers are excluded from the calculation.[1] Opening without Hilton's written authorization costs $5,000 per day.[1] Item 6 states that the monthly royalty fee and liquidated damages are the only fees in the item that are not subject to change.[1]`,
  };
}

export function keyMoneySection(s: HiltonShared): AnswerSection {
  return {
    h2: `Does Hilton offer key money on a ${s.short}?`,
    lead: `Hilton may, in its sole discretion, offer a development incentive on a ${s.short}, and the 2026 FDD calls it a contingent liability, not a loan.[1]`,
    body: `Item 10 of the 2026 ${s.short} FDD (p. ${s.pages.item10}) describes an incentive as a financial contribution toward the development or conversion of the hotel, documented by a development incentive note signed with the franchise agreement. It bears no interest and does not have to be repaid unless the franchise terminates before the end of the term or a transfer occurs. The repayable amount falls by an equal share for each year the hotel is open: one-twentieth a year on a 20-year term, in Hilton's example.[1] On a sale, the seller pays the then-current repayable amount unless Hilton permits the buyer to assume the note.[1] The FDD does not publish incentive amounts, and the program can be changed or ended at any time. The term is defined at [key money](/glossary/key-money).`,
  };
}

export function financingSection(s: HiltonShared): AnswerSection {
  return {
    h2: `How do owners finance ${s.short} franchise fees, a PIP or a conversion?`,
    lead: `Inside the acquisition or construction loan when the costs are part of a purchase or a build, or with a separate renovation loan when they are not.`,
    body: `Lenders size the loan to the hotel's income, and no lender type publishes its leverage limits or spreads. As of September 17, 2026, Prime is 7.00 percent, SOFR is 3.85 percent and the SBA 7(a) maximum allowable rate is 10.00 percent.[2] Item 7 of the ${s.short} FDD notes that many lenders will require an environmental assessment report.[1] The loan structures are at [How do I finance converting my hotel to a new brand?](/hotel-financing/brand-conversion-financing) and [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans). The wider trade between a flag and independence is at [Should I buy a branded or independent hotel?](/buy-a-hotel/branded-vs-independent), and the upgrade list itself is defined at [PIP](/glossary/pip).`,
  };
}

export function provenanceSection(s: HiltonShared): AnswerSection {
  return {
    h2: "Whose numbers are these, and how current are they?",
    lead: `Every figure on this page comes from Hilton's 2026 ${s.short} Franchise Disclosure Document, issued ${HILTON_FDD_ISSUED}. It is the franchisor's document, not ours.[1]`,
    body: `The FDD is written by the franchisor, Hilton Franchise Holding LLC, and a prospective franchisee must receive it at least 14 calendar days before signing a binding agreement or paying anything.[1] Hilton reissues it every year and marks most fees "currently", which means they can change. Hilton also reports that it negotiates. ${s.negotiatedSentence}\n\nGet the current FDD from Hilton, and read the franchise agreement attached to it, before you rely on any number here. This page is a neutral fee guide. It does not rank brands or recommend one. The document type is explained at [franchise disclosure document](/glossary/franchise-fdd), and the other brand guides are listed at [How much does a hotel franchise cost?](/hotel-franchise-costs).`,
  };
}

/** Sections shared by every Hilton brand page, in page order. */
export function sharedSections(s: HiltonShared): AnswerSection[] {
  return [
    termSection(s),
    transferSection(s),
    damagesSection(s),
    keyMoneySection(s),
    financingSection(s),
    provenanceSection(s),
  ];
}

export function hiltonSources(label: string, url: string): AnswerSource[] {
  return [
    {
      n: 1,
      label,
      url,
      publisher: "Hilton Franchise Holding LLC",
      accessed: HILTON_LAST_UPDATED,
    },
    {
      n: 2,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: HILTON_LAST_UPDATED,
    },
  ];
}

export const HILTON_DATA_POINT = {
  source: "rates" as const,
  ref: "/rates",
  sentence:
    "Matthews Hotel Markets' September 2026 rate sheet records Prime at 7.00% effective September 17, 2026, SOFR at 3.85% and the SBA 7(a) maximum allowable rate at 10.00%, the indexes a loan for franchise fees, a PIP or a conversion is priced against.[2]",
};

export const HILTON_GLOSSARY = [
  "/glossary/franchise-fdd",
  "/glossary/key-money",
  "/glossary/pip",
  "/glossary/franchise-agreement",
  "/glossary/revpar",
];

export const HILTON_BRAND_SENTENCE =
  "Matthews Hotel Markets sells and finances franchised hotels, so we read these disclosure documents alongside owners and buyers.";

/** Every Hilton brand page in the cluster, used to build sibling links. */
export const HILTON_PATHS = [
  "/hotel-franchise-costs/hampton-inn",
  "/hotel-franchise-costs/hilton-garden-inn",
  "/hotel-franchise-costs/home2-suites",
  "/hotel-franchise-costs/homewood-suites",
  "/hotel-franchise-costs/tru-by-hilton",
  "/hotel-franchise-costs/spark-by-hilton",
  "/hotel-franchise-costs/tapestry-collection",
  "/hotel-franchise-costs/doubletree",
];

export function hiltonSiblings(self: string): string[] {
  return [
    ...HILTON_PATHS.filter((p) => p !== self),
    "/hotel-financing/brand-conversion-financing",
    "/hotel-financing/pip-and-renovation-loans",
    "/buy-a-hotel/branded-vs-independent",
  ];
}
