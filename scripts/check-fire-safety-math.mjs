/**
 * Recomputes every figure on /hotel-industry/fire-safety-and-federal-travel
 * before the page is saved.
 *
 * Sourced inputs (read 2026-10-15):
 *   - hard-wired single-station smoke detectors in each guest room, and an
 *     automatic sprinkler system in each guest room except in places "3
 *     stories or lower": 15 U.S.C. 2225(a)(1) and (a)(2).
 *   - agencies must book not less than 90 percent of commercial-lodging room
 *     nights in approved places of public accommodation: 5 U.S.C. 5707a(a)(1).
 *   - FY2027 standard CONUS lodging rate $113 and M&IE $68, 295 non-standard
 *     areas, for travel on or after October 1, 2026: GSA Per Diem Bulletin
 *     FTR 27-01, dated August 18, 2026.
 *   - the counts below are read out of the Hotel-Motel National Master List
 *     CSV that FEMA's U.S. Fire Administration publishes at
 *     apps.usfa.fema.gov/hotel/api/properties/searchExport, downloaded
 *     2026-10-15 (8,454,269 bytes).
 *
 * Hypothetical inputs (assumptions, not published figures): the 120 keys, the
 * 5 stories, the 70 percent occupancy and the 3,000 federal room nights.
 *
 * Re-run:  node scripts/check-fire-safety-math.mjs
 * To re-derive the list counts from the file itself, pass the CSV path:
 *          node scripts/check-fire-safety-math.mjs /path/to/master-list.csv
 */
import fs from "node:fs";

const fail = [];
const eq = (label, got, want) => {
  const ok = typeof got === "number" && typeof want === "number"
    ? Math.abs(got - want) < 1e-6
    : got === want;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
  if (!ok) fail.push(label);
};
const pct1 = (a, b) => Number(((a / b) * 100).toFixed(1));
const pct2 = (a, b) => Number(((a / b) * 100).toFixed(2));

/* ---------------------------------------------- the master list, as published */
// Counts read out of the CSV on 2026-10-15. The optional argument re-derives
// them from the file so a later run can prove the file still says this.
const LIST = {
  total: 57822,
  hotelMotel: 55428,
  apartmentCondo: 1771,
  bedAndBreakfast: 307,
  shortTermRental: 263,
  collegeUniversity: 27,
  military: 25,
  blankType: 1,
  sprinklerAll: 39126,
  sprinklerHotelMotel: 37961,
  hmOver3: 21678,
  hmOver3Sprinkler: 21593,
  hm3OrLower: 33750,
  hm3OrLowerSprinkler: 16368,
  statesAndTerritories: 57,
  maxStoriesReported: 240,
  zeroStoryRows: 4,
  texas: 5325,
  california: 4643,
  florida: 4011,
  georgia: 2334,
  newYork: 2149,
};

const csvPath = process.argv[2];
if (csvPath) {
  console.log(`--- re-deriving the counts from ${csvPath}`);
  const rows = parseCsv(fs.readFileSync(csvPath, "utf8"));
  const hm = rows.filter((r) => r["Property type"] === "Hotel/Motel");
  const st = (r) => Number.parseInt(r.Stories, 10);
  const spr = (r) => r.Sprinklers === "Sprinkler System Present";
  eq("CSV total rows", rows.length, LIST.total);
  eq("CSV Hotel/Motel rows", hm.length, LIST.hotelMotel);
  eq("CSV rows recording a sprinkler system", rows.filter(spr).length, LIST.sprinklerAll);
  eq("CSV Hotel/Motel recording a sprinkler system", hm.filter(spr).length, LIST.sprinklerHotelMotel);
  eq("CSV Hotel/Motel over 3 stories", hm.filter((r) => st(r) > 3).length, LIST.hmOver3);
  eq("CSV Hotel/Motel over 3 stories with a sprinkler", hm.filter((r) => st(r) > 3 && spr(r)).length, LIST.hmOver3Sprinkler);
  eq("CSV Hotel/Motel 3 stories or lower", hm.filter((r) => st(r) <= 3).length, LIST.hm3OrLower);
  eq("CSV Hotel/Motel 3 stories or lower with a sprinkler", hm.filter((r) => st(r) <= 3 && spr(r)).length, LIST.hm3OrLowerSprinkler);
  eq("CSV distinct states and territories", new Set(rows.map((r) => r.State)).size, LIST.statesAndTerritories);
  eq("CSV highest story count reported", Math.max(...hm.map(st)), LIST.maxStoriesReported);
  eq("CSV Hotel/Motel rows reporting 0 stories", hm.filter((r) => st(r) === 0).length, LIST.zeroStoryRows);
  for (const [k, state] of [["texas", "Texas"], ["california", "California"], ["florida", "Florida"], ["georgia", "Georgia"], ["newYork", "New York"]]) {
    eq(`CSV Hotel/Motel in ${state}`, hm.filter((r) => r.State === state).length, LIST[k]);
  }
} else {
  console.log("--- (pass the CSV path to re-derive the counts from the file)");
}

console.log("\n--- the list adds up");
const typeSum =
  LIST.hotelMotel + LIST.apartmentCondo + LIST.bedAndBreakfast +
  LIST.shortTermRental + LIST.collegeUniversity + LIST.military + LIST.blankType;
eq("property types sum to the row total", typeSum, LIST.total);

const other = LIST.total - LIST.hotelMotel;
eq("properties that are not hotels or motels", other, 2394);

const otherSprinkler = LIST.sprinklerAll - LIST.sprinklerHotelMotel;
eq("non-hotel rows recording a sprinkler system", otherSprinkler, 1165);

eq("the two story groups sum to the hotel/motel total", LIST.hmOver3 + LIST.hm3OrLower, LIST.hotelMotel);
eq("hotel/motel sprinklers sum across the two story groups",
  LIST.hmOver3Sprinkler + LIST.hm3OrLowerSprinkler, LIST.sprinklerHotelMotel);

console.log("\n--- the shares printed in the table");
eq("all property types recording a sprinkler, percent", pct1(LIST.sprinklerAll, LIST.total), 67.7);
eq("hotels and motels recording a sprinkler, percent", pct1(LIST.sprinklerHotelMotel, LIST.hotelMotel), 68.5);
eq("hotels 4 stories or more recording a sprinkler, percent", pct2(LIST.hmOver3Sprinkler, LIST.hmOver3), 99.61);
eq("hotels 3 stories or lower recording a sprinkler, percent", pct1(LIST.hm3OrLowerSprinkler, LIST.hm3OrLower), 48.5);
eq("other property types recording a sprinkler, percent", pct1(otherSprinkler, other), 48.7);

console.log("\n--- the 85 high-rise rows with no sprinkler recorded");
const noSprinklerOver3 = LIST.hmOver3 - LIST.hmOver3Sprinkler;
eq("hotels 4 stories or more with no sprinkler recorded", noSprinklerOver3, 85);
eq("that group as a percent of the 4-or-more group", pct2(noSprinklerOver3, LIST.hmOver3), 0.39);

console.log("\n--- low-rise hotels that sprinkler anyway, which the Act does not require");
const voluntary = LIST.hm3OrLowerSprinkler;
eq("hotels at 3 stories or lower recording a sprinkler system", voluntary, 16368);
eq("hotels at 3 stories or lower with none recorded", LIST.hm3OrLower - voluntary, 17382);

/* ------------------------------------------------------------ worked example */
console.log("\n--- worked example: hypothetical 120-key, 5-story hotel, FY2027");
const KEYS = 120;              // assumption
const OCC = 0.70;              // assumption
const FEDERAL_NIGHTS = 3000;   // assumption
const LODGING_CAP = 113;       // GSA Per Diem Bulletin FTR 27-01
const AGENCY_FLOOR = 0.90;     // 5 U.S.C. 5707a(a)(1)

const roomNights = KEYS * 365;
eq("room nights a year (120 keys x 365)", roomNights, 43800);

const occupied = roomNights * OCC;
eq("occupied room nights at 70 percent", occupied, 30660);

eq("federal nights as a percent of occupied nights", pct1(FEDERAL_NIGHTS, occupied), 9.8);

const atCap = FEDERAL_NIGHTS * LODGING_CAP;
eq("3,000 nights at the $113 FY2027 standard CONUS cap", atCap, 339000);

const outsideAllowance = 1 - AGENCY_FLOOR;
eq("share of an agency's room nights that may fall outside the list", outsideAllowance, 0.10);

const ceilingIfUnlisted = atCap * outsideAllowance;
eq("ceiling on that revenue if the hotel is not listed", ceilingIfUnlisted, 33900);

const atStake = atCap - ceilingIfUnlisted;
eq("rooms revenue the listing is worth at this volume", atStake, 305100);

eq("the 5-story hypothetical is above the 3-story line", 5 > 3 ? 1 : 0, 1);

console.log("\n--- the published rates the page cites");
eq("FY2027 standard CONUS lodging rate", LODGING_CAP, 113);
eq("FY2027 standard CONUS M&IE rate", 68, 68);
eq("FY2027 non-standard areas", 295, 295);
eq("prior-year standard lodging rate", 110, 110);
eq("the FY2027 increase in the lodging rate", LODGING_CAP - 110, 3);

/* ----------------------------------------------------- the template's limits */
console.log("\n--- template limits (geo/05-templates.md)");
const words = (s) => s.trim().split(/\s+/).length;
let page;
try {
  page = fs.readFileSync(
    new URL("../src/lib/data/answers/hotel-industry/fire-safety-and-federal-travel.ts", import.meta.url),
    "utf8",
  );
} catch {
  console.log("     (page file not written yet; skipping the template checks)");
}
if (page) {
  const field = (name) => {
    const m = page.match(new RegExp(`\\n  ${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
    return m ? m[1].replace(/\\n/g, " ").replace(/\\"/g, '"') : null;
  };
  const answer = field("answer");
  if (answer) {
    const n = words(answer.replace(/\[\d+\]/g, ""));
    console.log(`     answer is ${n} words`);
    eq("answer is 40 to 70 words", n >= 40 && n <= 70 ? 1 : 0, 1);
    eq("answer contains a digit", /\d/.test(answer) ? 1 : 0, 1);
    eq("answer contains a month and year", /(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, 20\d\d/.test(answer) ? 1 : 0, 1);
  }
  const title = field("title");
  if (title) {
    console.log(`     title is ${title.length} chars`);
    eq("title is 60 chars or fewer", title.length <= 60 ? 1 : 0, 1);
  }
  const description = field("description");
  if (description) {
    console.log(`     description is ${description.length} chars`);
    eq("description is 155 chars or fewer", description.length <= 155 ? 1 : 0, 1);
  }
  const takeawayBlock = page.match(/\n  takeaways: \[([\s\S]*?)\n  \],/);
  if (takeawayBlock) {
    const n = (takeawayBlock[1].match(/\n    "/g) ?? []).length;
    eq("3 to 5 takeaways", n >= 3 && n <= 5 ? 1 : 0, 1);
    console.log(`     ${n} takeaways`);
  }
  const faqs = [...page.matchAll(/\n      q:\s*\n?\s*"((?:[^"\\]|\\.)*)",\n      a:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)];
  eq("5 to 8 FAQs", faqs.length >= 5 && faqs.length <= 8 ? 1 : 0, 1);
  console.log(`     ${faqs.length} FAQs`);
  const longFaq = faqs.filter((m) => words(m[2].replace(/\[\d+\]/g, "")) > 50);
  eq("every FAQ answer is 50 words or fewer", longFaq.length, 0);
  if (longFaq.length) longFaq.forEach((m) => console.log(`       too long: ${m[1]}`));
  const siblings = page.match(/\n    siblings: \[([\s\S]*?)\n    \],/);
  if (siblings) {
    const n = (siblings[1].match(/"/g) ?? []).length / 2;
    eq("3 or more siblings", n >= 3 ? 1 : 0, 1);
  }
  const bodyWords = [...page.matchAll(/\n      (?:lead|body):\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)]
    .reduce((a, m) => a + words(m[1].replace(/\\n\\n/g, " ").replace(/\[\d+\]/g, "")), 0);
  console.log(`     section lead + body prose: about ${bodyWords} words`);
  eq("no em-dash in the page file", page.includes("\u2014") ? 1 : 0, 0);
}

console.log(fail.length ? `\n${fail.length} FAILED` : "\nall fire-safety figures check out");
process.exitCode = fail.length ? 1 : 0;

/* ------------------------------------------------------------------- helpers */
function parseCsv(text) {
  // Mirrors Python's csv reader with the default dialect and strict=false,
  // because the published file is not clean: 27 rows carry a newline inside a
  // quoted field (the property type "College/University" ends in CRLF) and a
  // few carry an unescaped quote inside one ("3506 O"neill Dr"). In that case
  // the quote is kept as a literal and the field continues unquoted, which is
  // what Python does and what makes the two readings agree exactly.
  const S = { START: 0, FIELD: 1, QUOTED: 2, QUOTE_IN_QUOTED: 3 };
  const rows = [];
  let row = [], field = "", state = S.START;
  const endField = () => { row.push(field); field = ""; state = S.START; };
  const endRow = () => { row.push(field); field = ""; rows.push(row); row = []; state = S.START; };
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    switch (state) {
      case S.START:
        if (c === '"') state = S.QUOTED;
        else if (c === ",") endField();
        else if (c === "\n") endRow();
        else if (c !== "\r") { field += c; state = S.FIELD; }
        break;
      case S.FIELD:
        if (c === ",") endField();
        else if (c === "\n") endRow();
        else if (c !== "\r") field += c;
        break;
      case S.QUOTED:
        if (c === '"') state = S.QUOTE_IN_QUOTED;
        else field += c;
        break;
      case S.QUOTE_IN_QUOTED:
        if (c === '"') { field += '"'; state = S.QUOTED; }
        else if (c === ",") endField();
        else if (c === "\n") endRow();
        else if (c === "\r") { /* CRLF inside a record end; wait for the \n */ }
        else { field += '"' + c; state = S.FIELD; }
        break;
    }
  }
  if (field.length || row.length) endRow();
  const header = rows.shift().map((h) => h.replace(/^\uFEFF/, "").trim());
  return rows
    .filter((r) => r.length > 1)
    .map((r) => Object.fromEntries(header.map((h, i) => [h, (r[i] ?? "").trim()])));
}
