/**
 * Recomputes every figure in the worked example and the FAQ for
 * /hotel-industry/ota-commissions before the page is saved.
 *
 * Sourced inputs (read 2026-11-04):
 *   - 14.5%: Booking Holdings' total revenues as a percentage of total gross
 *     bookings for full-year 2025 ($26,917M / $186,107M), stated in its Form
 *     10-K for the year ended December 31, 2025. Used in the example as a
 *     published bound, NOT as a commission quote for any hotel.
 *   - $6.05 per stay: Third-Party Reservation Charges, 2026 US Hilton Garden
 *     Inn Franchise Disclosure Document (issuance date March 30, 2026),
 *     Item 6, p. 26, "currently, up to $6.05 per stay".
 *   - 1.35% of eligible Digital Direct Revenue, not to exceed $30 per stay:
 *     Hilton Advance Fee, same FDD and page.
 *   - 8.0% cap rate: taken from inside the Matthews Hotel Index Q1 2026 band
 *     of 7.5% to 8.25% for stabilized, PIP-current select-service in Austin.
 *
 * Hypothetical inputs (assumptions, not published figures): 120 keys, 70
 * percent occupancy, $150 ADR, a 25 percent platform share of room nights,
 * a 1.5-night average length of stay, and the 5-point shift.
 */
const KEYS = 120;
const NIGHTS = 365;
const OCC = 0.70;
const ADR = 150;
const OTA_SHARE = 0.25;
const ALOS = 1.5;
const TAKE = 0.145;        // Booking Holdings 2025, published
const TPRC = 6.05;         // HGI FDD Item 6, per stay
const ADVANCE_FEE = 0.0135;// HGI FDD Item 6, of eligible Digital Direct Revenue
const ADVANCE_CAP = 30;    // per stay
const SHIFT = 0.05;
const CAP_RATE = 0.08;     // inside the MHI Q1 2026 Austin band

const fail = [];
/** Integral to within floating-point noise: 120*365*0.70 lands at 30659.999... */
const whole = (x) => (Math.abs(x - Math.round(x)) < 1e-6 ? 1 : 0);
const eq = (label, got, want) => {
  const ok = Math.abs(got - want) < 1e-6;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
  if (!ok) fail.push(label);
};

console.log("--- the hotel");
const roomNights = KEYS * NIGHTS * OCC;
eq("room nights sold (120 x 365 x 0.70)", roomNights, 30660);
const roomRevenue = roomNights * ADR;
eq("room revenue (30,660 x $150)", roomRevenue, 4599000);

console.log("--- the channel");
const otaNights = roomNights * OTA_SHARE;
eq("platform room nights (30,660 x 0.25)", otaNights, 7665);
const otaRevenue = otaNights * ADR;
eq("platform room revenue (7,665 x $150)", otaRevenue, 1149750);
const otaStays = otaNights / ALOS;
eq("platform stays (7,665 / 1.5)", otaStays, 5110);
eq("platform stays divides evenly at a 1.5-night stay", whole(otaStays), 1);

console.log("--- the cost");
const commission = otaRevenue * TAKE;
eq("commission at the published 14.5% ($1,149,750 x 0.145)", commission, 166713.75);
const resCharges = otaStays * TPRC;
eq("Third-Party Reservation Charges (5,110 x $6.05)", resCharges, 30915.5);
const channelCost = commission + resCharges;
eq("total channel cost", channelCost, 197629.25);
const pctOfRooms = Math.round((channelCost / roomRevenue) * 10000) / 100;
eq("channel cost as a percent of room revenue, 2dp", pctOfRooms, 4.3);

console.log("--- the shift");
const shiftNights = roomNights * SHIFT;
eq("shifted room nights (30,660 x 0.05)", shiftNights, 1533);
const shiftStays = shiftNights / ALOS;
eq("shifted stays (1,533 / 1.5)", shiftStays, 1022);
eq("shifted stays divides evenly at a 1.5-night stay", whole(shiftStays), 1);
const shiftRevenue = shiftNights * ADR;
eq("shifted room revenue (1,533 x $150)", shiftRevenue, 229950);
const commissionSaved = shiftRevenue * TAKE;
eq("commission saved ($229,950 x 0.145)", commissionSaved, 33342.75);
const resSaved = shiftStays * TPRC;
eq("reservation charges saved (1,022 x $6.05)", resSaved, 6183.1);
const advanceFee = Math.round(shiftRevenue * ADVANCE_FEE * 100) / 100;
eq("Hilton Advance Fee at 1.35% ($229,950 x 0.0135)", advanceFee, 3104.33);
const advanceCapTotal = shiftStays * ADVANCE_CAP;
eq("Advance Fee per-stay cap in aggregate (1,022 x $30)", advanceCapTotal, 30660);
eq("the $30-per-stay cap does not bind", advanceFee < advanceCapTotal ? 1 : 0, 1);

const netSaving = Math.round((commissionSaved + resSaved - advanceFee) * 100) / 100;
eq("net saving to NOI", netSaving, 36421.52);

console.log("--- the value");
const value = Math.round(netSaving / CAP_RATE);
eq("value of the saving at an 8.0% cap rate", value, 455269);
const perKey = Math.round((value / KEYS) * 100) / 100;
eq("value per key", perKey, 3793.91);

console.log("--- what would break it: one point of occupancy");
const onePointNights = Math.round((roomNights / OCC) * 0.01);
eq("one occupancy point in room nights (30,660 / 0.70 x 0.01)", onePointNights, 438);
const onePointRevenue = onePointNights * ADR;
eq("one occupancy point in room revenue (438 x $150)", onePointRevenue, 65700);
eq("one lost occupancy point exceeds the whole saving", onePointRevenue > netSaving ? 1 : 0, 1);

console.log("--- the published ratios the page prints");
eq("Booking Holdings 2025 revenues / gross bookings, 1dp",
  Math.round((26917 / 186107) * 1000) / 10, 14.5);
eq("Expedia Group 2025 revenue / gross bookings, 1dp",
  Math.round((14733 / 119590) * 1000) / 10, 12.3);
eq("Expedia lodging share of revenue is a majority",
  11752 / 14733 > 0.5 ? 1 : 0, 1);
eq("Expedia merchant + agency + advertising = total revenue",
  10256 + 3183 + 1294, 14733);
eq("Expedia lodging + air + EG ads + trivago ads + other = total revenue",
  11752 + 407 + 758 + 417 + 1399, 14733);
eq("Booking merchant + agency gross bookings = total",
  130025 + 56082, 186107);
eq("Booking merchant + agency + advertising revenues = total",
  17755 + 7968 + 1194, 26917);
eq("Booking merchant share of gross bookings rounds to 70%",
  Math.round((130025 / 186107) * 100), 70);

console.log(fail.length ? `\n${fail.length} FAILED` : "\nall OTA-commission figures check out");
process.exitCode = fail.length ? 1 : 0;
