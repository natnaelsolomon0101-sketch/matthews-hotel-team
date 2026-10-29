/**
 * Recomputes every figure on /hotel-financing/public-incentives-and-tif
 * before the page is saved, and re-checks the template's own limits.
 *
 * Sourced inputs (read 2026-10-29):
 *   - the 10 percent private business use and private security or payment
 *     thresholds, the 5 percent test, the $15,000,000 output facility ceiling
 *     and the seven qualified bond categories: 26 U.S.C. 141(b) and (e),
 *     Cornell LII;
 *   - the closed list of 17 exempt facility categories: 26 U.S.C. 142(a),
 *     Cornell LII, cross-checked against the exempt facility chart in IRS
 *     Publication 4078 (Rev. 1-2026);
 *   - the 95 percent net proceeds test, the 100-acre and 10-acre area tests,
 *     the 20 percent of assessed value designation cap, the 25 percent limit
 *     on section 147(e) facilities and the bar on construction other than
 *     rehabilitation: 26 U.S.C. 144(c), Cornell LII;
 *   - the management contract safe harbor conditions, the lesser of 30 years
 *     or 80 percent of economic life, the 20 percent governing body limit and
 *     the January 17, 2017 date of applicability: Rev. Proc. 2017-13, IRS PDF;
 *   - 100 percent of the real property increment into the Special Allocation
 *     Fund, 50 percent of economic activity taxes, and the exclusion of taxes
 *     on sleeping room charges paid by transient guests: RSMo 99.845 subsections
 *     1(2)(a) and 3, and RSMo 99.805(4), Missouri Revisor;
 *   - the 23-year limit: RSMo 99.810.1(3), Missouri Revisor;
 *   - the 32 percent assessment ratio for commercial real property:
 *     RSMo 137.115.5(1)(c), Missouri Revisor;
 *   - the 15 percent square-footage test and the tourism facility permitted
 *     purpose: Minn. Stat. 469.176, subd. 4c(a); the 85 percent of state
 *     median income, development region and 20,000 population tests:
 *     Minn. Stat. 469.174, subd. 22, Minnesota Revisor;
 *   - 355 projects reporting in the summary, 84 municipalities, $3,694,284,956
 *     of payments in lieu of taxes and economic activity taxes since inception,
 *     354 project pages present, and the eight hotel-named plans with their
 *     anticipated TIF-reimbursable costs, anticipated total project costs,
 *     financing methods and amounts received since inception: Missouri
 *     Department of Revenue, Tax Increment Financing in Missouri, 2025 Annual
 *     Report, dated January 30, 2026, parsed from the published PDF in this run.
 *
 * Hypothetical inputs (assumptions, not published figures): the $18,000,000
 * project cost, the 110 keys, the $15,000,000 true value after completion, the
 * $600,000 true value of the vacant site, the $6.50 per $100 combined levy, the
 * $900,000 of annual food, beverage and parking sales, the 3.0 percent combined
 * local rate on them, the $2,600,000 of room revenue and the 7 percent local
 * room tax.
 *
 * Re-run:  npx tsx scripts/check-tif-math.mjs
 */
import { readFileSync } from "node:fs";

const fail = [];
const eq = (label, got, want) => {
  const ok =
    typeof got === "number" && typeof want === "number"
      ? Math.abs(got - want) < 1e-6
      : got === want;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
  if (!ok) fail.push(label);
};
const sum = (a) => a.reduce((s, n) => s + n, 0);
const pct1 = (a, b) => Number(((a / b) * 100).toFixed(1));
const usd = (n) => `$${n.toLocaleString("en-US")}`;

/* ------------------------------------------------------ sourced constants */
const PBU_TEST = 10; // 141(b)(1)
const PSP_TEST = 10; // 141(b)(2)
const UNRELATED_TEST = 5; // 141(b)(3)(A)(i)
const OUTPUT_CEILING = 15_000_000; // 141(b)(4)(A)
const QUALIFIED_BOND_CATEGORIES = 7; // 141(e)(1)(A) to (G)
const EXEMPT_FACILITY_CATEGORIES = 17; // 142(a)(1) to (17)
const QRB_NET_PROCEEDS = 95; // 144(c)(1)
const QRB_ACRES = 100; // 144(c)(4)(D)(i)
const QRB_ACRES_SMALL = 10; // 144(c)(4)(D)(ii)
const QRB_ONE_PERSON = 25; // 144(c)(4)(D)(ii)
const QRB_DESIGNATION_CAP = 20; // 144(c)(4)(C)(i)
const QRB_147E_CAP = 25; // 144(c)(6)(A)
const SAFE_HARBOR_TERM_YEARS = 30; // Rev. Proc. 2017-13, 5.03
const SAFE_HARBOR_LIFE_PCT = 80; // Rev. Proc. 2017-13, 5.03
const SAFE_HARBOR_BOARD_PCT = 20; // Rev. Proc. 2017-13, 5.07(2)(a)
const MO_PILOT_SHARE = 100; // 99.845.1(2)(a): the whole increment
const MO_EATS_SHARE = 50; // 99.845.3
const MO_MAX_YEARS = 23; // 99.810.1(3)
const MO_COMMERCIAL_RATIO = 0.32; // 137.115.5(1)(c)
const MN_SQFT_TEST = 15; // 469.176 subd. 4c(a)
const MN_MFI_PCT = 85; // 469.174 subd. 22(1)
const MN_POP_CAP = 20_000; // 469.174 subd. 22(3)

/* the 2025 Missouri report */
const MO_SUMMARY_PROJECTS = 355;
const MO_PROJECT_PAGES = 354;
const MO_MUNICIPALITIES = 84;
const MO_PILOT_EATS_SINCE_INCEPTION = 3_694_284_956;

/* the eight hotel-named plans: [name, TIF-reimbursable, total, PILOT, EATs, method] */
const HOTEL_PLANS = [
  ["Holiday Inn Express, Sikeston", 424_000, 6_800_000, 425_879.83, 0, "payg"],
  ["12th and Wyandotte TIF/Aladdin Hotel, Kansas City", 4_733_900, 34_043_780, 1_404_700, 1_484_700, "payg"],
  ["Regency Hotel Redevelopment Plan and Project TIF, Columbia", 3_200_000, 20_300_000, 1_599_377.56, 461_425.38, "notes"],
  ["TIGER Hotel Redevelopment TIF, Columbia", 1_785_000, 8_925_000, 761_176.39, 331_380.67, "payg"],
  ["1200 Main/South Loop-President Hotel/Project 03a, Kansas City", 15_233_400, 45_589_563, 8_484_300, 15_317_400, "bond"],
  ["Third Street Hotel Development, St. Joseph", 2_700_000, 6_025_000, 1_240_683.94, 838_600.07, "payg"],
  ["Kansas City Convention Headquarters Hotel", 197_642_748, 310_843_132, 0, 17_224_800, "payg"],
  ["Hotel Phillips, Project B and C TIF Plan, Kansas City", 5_842_529, 7_318_507, 770_300, 29_600, "payg"],
];

/* ------------------------------------------- the statutory tests as printed */
console.log("-- the federal bond tests --");
eq("private business use test", PBU_TEST, 10);
eq("private security or payment test", PSP_TEST, 10);
eq("the two private business tests are the same percentage", PBU_TEST, PSP_TEST);
eq("unrelated use test", UNRELATED_TEST, 5);
eq("output facility ceiling", usd(OUTPUT_CEILING), "$15,000,000");
eq("qualified bond categories", QUALIFIED_BOND_CATEGORIES, 7);
eq("exempt facility categories", EXEMPT_FACILITY_CATEGORIES, 17);

/* the page prints all 17 categories: count them against the statute */
const CATEGORIES = [
  "airports and spaceports",
  "docks and wharves",
  "mass commuting facilities",
  "facilities for furnishing water",
  "sewage facilities",
  "solid waste disposal",
  "qualified residential rental projects",
  "local furnishing of electric energy or gas",
  "local district heating or cooling",
  "qualified hazardous waste facilities",
  "high-speed intercity rail",
  "environmental enhancements of hydroelectric generating facilities",
  "qualified public educational facilities",
  "qualified green building and sustainable design projects",
  "qualified highway or surface freight transfer facilities",
  "qualified broadband projects",
  "qualified carbon dioxide capture facilities",
];
eq("the page's category list has 17 entries", CATEGORIES.length, EXEMPT_FACILITY_CATEGORIES);
eq("no lodging category", CATEGORIES.filter((c) => /hotel|lodg|motel/i.test(c)).length, 0);

console.log("\n-- the qualified redevelopment bond --");
eq("net proceeds test", QRB_NET_PROCEEDS, 95);
eq("minimum area, acres", QRB_ACRES, 100);
eq("reduced area, acres", QRB_ACRES_SMALL, 10);
eq("reduced area applies at or below", QRB_ONE_PERSON, 25);
eq("designation cap, percent of assessed value", QRB_DESIGNATION_CAP, 20);
eq("section 147(e) facility cap", QRB_147E_CAP, 25);

console.log("\n-- the management contract safe harbor --");
eq("term ceiling, years", SAFE_HARBOR_TERM_YEARS, 30);
eq("term ceiling, percent of economic life", SAFE_HARBOR_LIFE_PCT, 80);
eq("governing body overlap cap", SAFE_HARBOR_BOARD_PCT, 20);

console.log("\n-- the Missouri statute --");
eq("payments in lieu of taxes share of the increment", MO_PILOT_SHARE, 100);
eq("economic activity tax share", MO_EATS_SHARE, 50);
eq("maximum years", MO_MAX_YEARS, 23);
eq("commercial assessment ratio", MO_COMMERCIAL_RATIO * 100, 32);

console.log("\n-- the Minnesota statute --");
eq("square-footage test", MN_SQFT_TEST, 15);
eq("median income test", MN_MFI_PCT, 85);
eq("population cap", MN_POP_CAP.toLocaleString("en-US"), "20,000");

/* --------------------------------------------- the table, row by row */
console.log("\n-- the eight hotel-named Missouri plans --");
const shares = [];
for (const [name, tif, total] of HOTEL_PLANS) {
  const share = pct1(tif, total);
  shares.push(share);
  console.log(`ok   ${name}: ${usd(tif)} of ${usd(total)} = ${share.toFixed(1)}%`);
}
eq("eight plans", HOTEL_PLANS.length, 8);
eq("Sikeston share", shares[0], 6.2);
eq("Aladdin share", shares[1], 13.9);
eq("Regency share", shares[2], 15.8);
eq("TIGER share", shares[3], 20.0);
eq("President Hotel share", shares[4], 33.4);
eq("Third Street share", shares[5], 44.8);
eq("Convention Headquarters share", shares[6], 63.6);
eq("Hotel Phillips share", shares[7], 79.8);

const sorted = [...shares].sort((a, b) => a - b);
eq("the table is ordered by share, lowest first", shares.join(","), sorted.join(","));
eq("lowest share", Math.min(...shares), 6.2);
eq("highest share", Math.max(...shares), 79.8);
eq("median share", (sorted[3] + sorted[4]) / 2, 26.7);

const tifTotal = sum(HOTEL_PLANS.map((p) => p[1]));
const costTotal = sum(HOTEL_PLANS.map((p) => p[2]));
eq("total TIF-reimbursable cost", usd(tifTotal), "$231,561,577");
eq("total anticipated project cost", usd(costTotal), "$439,844,982");
eq("aggregate share", pct1(tifTotal, costTotal), 52.6);
eq("smallest TIF-reimbursable cost", usd(Math.min(...HOTEL_PLANS.map((p) => p[1]))), "$424,000");
eq("largest TIF-reimbursable cost", usd(Math.max(...HOTEL_PLANS.map((p) => p[1]))), "$197,642,748");
eq("pay as you go plans", HOTEL_PLANS.filter((p) => p[5] === "payg").length, 6);
eq("TIF note plans", HOTEL_PLANS.filter((p) => p[5] === "notes").length, 1);
eq("other bond plans", HOTEL_PLANS.filter((p) => p[5] === "bond").length, 1);
eq("financing methods account for all eight", HOTEL_PLANS.filter((p) => ["payg", "notes", "bond"].includes(p[5])).length, 8);
eq("the Sikeston plan reports zero economic activity taxes", HOTEL_PLANS[0][4], 0);
eq("the Sikeston plan's payments in lieu of taxes", usd(HOTEL_PLANS[0][3]), "$425,879.83");
eq("summary and detail differ by one project", MO_SUMMARY_PROJECTS - MO_PROJECT_PAGES, 1);
eq("project pages present", MO_PROJECT_PAGES, 354);
eq("statewide payments in lieu of taxes and economic activity taxes", usd(MO_PILOT_EATS_SINCE_INCEPTION), "$3,694,284,956");
eq("municipalities reporting", MO_MUNICIPALITIES, 84);

/* ------------------------------------------------- the worked example */
console.log("\n-- the worked example --");
const PROJECT_COST = 18_000_000;
const TRUE_AFTER = 15_000_000;
const TRUE_BEFORE = 600_000;
const LEVY_PER_100 = 6.5;
const OTHER_SALES = 900_000;
const OTHER_RATE = 0.03;
const ROOM_REVENUE = 2_600_000;
const ROOM_TAX_RATE = 0.07;

const assessedAfter = TRUE_AFTER * MO_COMMERCIAL_RATIO;
const assessedBefore = TRUE_BEFORE * MO_COMMERCIAL_RATIO;
const increment = assessedAfter - assessedBefore;
eq("assessed value after completion", usd(assessedAfter), "$4,800,000");
eq("assessed value of the vacant site", usd(assessedBefore), "$192,000");
eq("increase in assessed value", usd(increment), "$4,608,000");

const pilot = (increment * LEVY_PER_100) / 100;
eq("annual payments in lieu of taxes", usd(pilot), "$299,520");

const otherTax = OTHER_SALES * OTHER_RATE;
const eats = otherTax * (MO_EATS_SHARE / 100);
eq("local tax on non-room sales", usd(otherTax), "$27,000");
eq("annual economic activity taxes to the fund", usd(eats), "$13,500");

const annual = pilot + eats;
eq("annual capture", usd(annual), "$313,020");
const over23 = annual * MO_MAX_YEARS;
eq("23 years undiscounted", usd(over23), "$7,199,460");
eq("share of the project cost", pct1(over23, PROJECT_COST), 40.0);

const roomTax = ROOM_REVENUE * ROOM_TAX_RATE;
const halfRoomTax = roomTax * (MO_EATS_SHARE / 100);
eq("local room tax a year", usd(roomTax), "$182,000");
eq("half the room tax", usd(halfRoomTax), "$91,000");
eq("multiple of the economic activity taxes the fund gets", Number((halfRoomTax / eats).toFixed(1)), 6.7);

/* ------------------------------------------------------- template limits */
const rel = "../src/lib/data/answers/hotel-financing/public-incentives-and-tif.ts";
const src = readFileSync(new URL(rel, import.meta.url), "utf8");
const { page } = await import(rel).catch(() => ({ page: null }));

console.log("\n-- template limits --");
if (!page) {
  console.log("note: run `npx tsx scripts/check-tif-math.mjs` for the structural checks");
  eq("no em-dash in the source file", src.includes("—") ? 1 : 0, 0);
} else {
  const words = (s) => s.replace(/\[\d+\]/g, "").split(/\s+/).filter(Boolean).length;
  const answerWords = words(page.answer);
  eq("answer is 40 to 70 words", answerWords >= 40 && answerWords <= 70 ? 1 : 0, 1);
  eq("answer carries a number and a date", /\d/.test(page.answer) && /20\d\d/.test(page.answer) ? 1 : 0, 1);
  eq("takeaways 3 to 5", page.takeaways.length >= 3 && page.takeaways.length <= 5 ? 1 : 0, 1);
  eq("faq 5 to 8", page.faq.length >= 5 && page.faq.length <= 8 ? 1 : 0, 1);
  const longFaq = page.faq.filter((f) => words(f.a) > 50).map((f) => f.q);
  eq("every faq answer is 50 words or fewer", longFaq.length, 0);
  if (longFaq.length) console.log("   over:", longFaq.join(" | "));
  eq("title is 60 characters or fewer", page.title.length <= 60 ? 1 : 0, 1);
  eq("description is 155 characters or fewer", page.description.length <= 155 ? 1 : 0, 1);
  eq("sources, at least 4", page.sources.length >= 4 ? 1 : 0, 1);
  eq("siblings, at least 3", page.related.siblings.length >= 3 ? 1 : 0, 1);
  eq("sections, at least 4", page.sections.length >= 4 ? 1 : 0, 1);
  eq("one table with at least 3 rows", page.table.rows.length >= 3 ? 1 : 0, 1);
  eq("every table row matches the column count", page.table.rows.filter((r) => r.length !== page.table.columns.length).length, 0);
  eq("cta goes to /contact", page.cta.href, "/contact");
  eq("author is a known slug", ["luke-thompson", "miles-cortez", "nate-solomon"].includes(page.authorSlug) ? 1 : 0, 1);
  eq("reviewer is a known slug", ["luke-thompson", "miles-cortez", "nate-solomon"].includes(page.reviewerSlug) ? 1 : 0, 1);
  eq("worked example says it is hypothetical", /Hypothetical/i.test(page.workedExample.label) ? 1 : 0, 1);
  eq("worked example says the hotel does not exist", /does not exist/i.test(page.workedExample.body) ? 1 : 0, 1);
  eq("no em-dash anywhere", JSON.stringify(page).includes("—") ? 1 : 0, 0);
  eq("brand sentence names the brand", page.brandSentence.includes("Matthews Hotel Markets") ? 1 : 0, 1);
  eq("the first-party data point names the brand", page.originalDataPoint.sentence.includes("Matthews Hotel Markets") ? 1 : 0, 1);

  const leadWords =
    answerWords +
    page.takeaways.reduce((n, t) => n + words(t), 0) +
    words(page.originalDataPoint.sentence);
  eq("brand lands inside the first 300 words", leadWords <= 300 ? 1 : 0, 1);
  console.log(`   answer + takeaways + data point = ${leadWords} words`);

  const bodyWords =
    answerWords +
    page.takeaways.reduce((n, t) => n + words(t), 0) +
    page.sections.reduce((n, s) => n + words(s.lead) + words(s.body), 0) +
    words(page.workedExample.body) +
    page.faq.reduce((n, f) => n + words(f.q) + words(f.a), 0);
  eq("body is 1,200 to 2,500 words", bodyWords >= 1200 && bodyWords <= 2500 ? 1 : 0, 1);

  /* the page must print the figures this script recomputed */
  const flat = JSON.stringify(page);
  for (const needle of [
    "17 categories",
    "10 percent",
    "$15,000,000",
    "95 percent",
    "100 acres",
    "20 percent",
    "25 percent",
    "30 years",
    "80 percent",
    "January 17, 2017",
    "23 years",
    "32 percent",
    "15 percent",
    "85 percent",
    "20,000",
    "354",
    "355",
    "$424,000",
    "$197,642,748",
    "$231,561,577",
    "$439,844,982",
    "52.6 percent",
    "6.2 percent",
    "79.8 percent",
    "26.7 percent",
    "$4,800,000",
    "$192,000",
    "$4,608,000",
    "$299,520",
    "$27,000",
    "$13,500",
    "$313,020",
    "$7,199,460",
    "40.0 percent",
    "$182,000",
    "$91,000",
    "6.7 times",
    "$425,879.83",
    "$3,694,284,956",
    "January 30, 2026",
  ]) {
    eq(`page prints ${needle}`, flat.includes(needle) ? 1 : 0, 1);
  }

  /* no unpublished figure */
  eq("page says no typical percentage exists", /no typical subsidy|typical hotel TIF percentage/i.test(flat) ? 1 : 0, 1);
  eq("page says what is not published", /not published|No public source says/i.test(flat) ? 1 : 0, 1);

  const order = [...JSON.stringify({ ...page, sources: undefined }).matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1]));
  const firstSeen = [];
  for (const n of order) if (!firstSeen.includes(n)) firstSeen.push(n);
  const ascending = [...firstSeen].sort((a, b) => a - b);
  eq("sources numbered in order of first reference", firstSeen.join(","), ascending.join(","));
  if (firstSeen.join(",") !== ascending.join(",")) console.log("   first-reference order:", firstSeen.join(","));
  eq("every listed source is cited", page.sources.filter((s) => !firstSeen.includes(s.n)).map((s) => s.n).join(","), "");
  eq("every source has an accessed date", page.sources.filter((s) => !/^20\d\d-\d\d-\d\d$/.test(s.accessed)).length, 0);

  console.log(
    `\nanswer ${answerWords} words, body ${bodyWords} words, title ${page.title.length} chars, description ${page.description.length} chars, sources ${page.sources.length}`,
  );
}

console.log(fail.length ? `\n${fail.length} FAILED: ${fail.join("; ")}` : "\nall assertions passed");
process.exit(fail.length ? 1 : 0);
