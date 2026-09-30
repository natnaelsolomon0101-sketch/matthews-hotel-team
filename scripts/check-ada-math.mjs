/**
 * Recomputes every figure in the worked example for
 * /hotel-industry/ada-requirements before the page is saved.
 * Scoping bands are transcribed from Table 224.2 and Table 224.4 of the
 * 2010 ADA Standards for Accessible Design (ada.gov, read 2026-09-30).
 */
const MOBILITY = [
  [1, 25, 1, 0], [26, 50, 2, 0], [51, 75, 3, 1], [76, 100, 4, 1],
  [101, 150, 5, 2], [151, 200, 6, 2], [201, 300, 7, 3], [301, 400, 8, 4],
  [401, 500, 9, 4],
];
const COMMS = [
  [2, 25, 2], [26, 50, 4], [51, 75, 7], [76, 100, 9], [101, 150, 12],
  [151, 200, 14], [201, 300, 17], [301, 400, 20], [401, 500, 22],
];
const mob = (n) => { const r = MOBILITY.find(([lo, hi]) => n >= lo && n <= hi); return { noRollIn: r[2], rollIn: r[3], total: r[2] + r[3] }; };
const com = (n) => COMMS.find(([lo, hi]) => n >= lo && n <= hi)[2];

const fail = [];
const eq = (label, got, want) => {
  const ok = Math.abs(got - want) < 1e-9;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
  if (!ok) fail.push(label);
};

console.log("--- room scoping, 96-key hotel altered in two phases");
const p1 = mob(40), p2 = mob(96);
eq("phase one, 40 rooms altered: rooms without roll-in showers", p1.noRollIn, 2);
eq("phase one, 40 rooms altered: rooms with roll-in showers", p1.rollIn, 0);
eq("phase one, 40 rooms altered: total mobility rooms", p1.total, 2);
eq("phase one: communication-feature rooms", com(40), 4);
eq("cumulative 96 rooms: total mobility rooms", p2.total, 5);
eq("cumulative 96 rooms: of which with roll-in showers", p2.rollIn, 1);
eq("phase two: additional mobility rooms owed", p2.total - p1.total, 3);
eq("cumulative 96 rooms: communication-feature rooms", com(96), 9);
eq("phase two: additional communication rooms owed", com(96) - com(40), 5);
eq("224.5 ten percent of the 5 mobility rooms (whole rooms creditable)", Math.floor(p2.total * 0.10), 0);
eq("224.5 ten percent of the 5 mobility rooms (exact)", p2.total * 0.10, 0.5);

console.log("--- path of travel, 28 CFR 36.403(f)(1) and (h)(2)(i)");
const phase1Cost = 1_200_000, phase2Cost = 900_000, scopePrice = 305_000;
const cap1 = phase1Cost * 0.20;
eq("phase one disproportionality cap (20 percent of $1,200,000)", cap1, 240_000);
eq("scope price exceeds the cap", scopePrice > cap1 ? 1 : 0, 1);
eq("unfunded remainder of the scope", scopePrice - cap1, 65_000);
const aggregate = phase1Cost + phase2Cost;
eq("three-year aggregate of primary-function alterations", aggregate, 2_100_000);
const cap2 = aggregate * 0.20;
eq("recomputed cap on the aggregate", cap2, 420_000);
eq("allowance still available after the $240,000 already spent", cap2 - cap1, 180_000);
eq("the $65,000 remainder fits inside the remaining allowance", (scopePrice - cap1) <= (cap2 - cap1) ? 1 : 0, 1);

console.log("--- tax offsets, 26 U.S.C. 44 and 190");
const credit = 0.50 * (10_250 - 250);
eq("disabled access credit: 50 percent of $10,250 less $250", credit, 5_000);
eq("section 190 deduction cap", 15_000, 15_000);
eq("credit as a share of $305,000, percent (1 dp)", Number((credit / scopePrice * 100).toFixed(1)), 1.6);
eq("credit plus deduction", credit + 15_000, 20_000);
eq("credit plus deduction as a share of $305,000, percent (1 dp)", Number(((credit + 15_000) / scopePrice * 100).toFixed(1)), 6.6);

console.log(fail.length ? `\n${fail.length} FAILED` : "\nall figures check out");
process.exit(fail.length ? 1 : 0);
