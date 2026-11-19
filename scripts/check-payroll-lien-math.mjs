/**
 * Recomputes every figure in /sell-a-hotel/irs-liens-and-payroll-taxes.
 *
 *   node scripts/check-payroll-lien-math.mjs
 *
 * Rates and thresholds come from the sources the page cites, read on
 * 2026-11-19:
 *   - Social security 6.2% and Medicare 1.45%, each for employee and
 *     employer: IRS Publication 15 (2026).
 *   - Failure-to-deposit tiers 2 / 5 / 10 / 15 percent: 26 U.S.C. 6656(b).
 *   - Underpayment interest 7% for the fourth quarter of 2026, compounded
 *     daily: IRS quarterly interest rates (page reviewed September 10, 2026).
 *   - 214,099 notices of federal tax lien, 196,996 the prior year, 339,137
 *     levy notices and 50 seizures: IRS Data Book FY2025 Table 4-1.
 *   - 1,216,346 federal tax deposit penalties on employment taxes,
 *     $117,895,214 thousand assessed and $117,210,987 thousand abated:
 *     Table 4-2.
 * Every assumption about the hypothetical hotel is labelled as one on the
 * page. Exits non-zero on the first mismatch.
 */
let failures = 0;
function eq(label, got, want, tol = 0.005) {
  const ok = Math.abs(got - want) <= tol;
  if (!ok) failures++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: got ${got}, page says ${want}`);
}

/* ---------------------------------------------- the published IRS counts */
const nftl2025 = 214099, nftl2024 = 196996, levies = 339137, seizures = 50;
eq("NFTL year over year increase, percent", +(((nftl2025 - nftl2024) / nftl2024) * 100).toFixed(1), 8.7);
eq("NFTL increase, count", nftl2025 - nftl2024, 17103);
eq("liens per seizure", Math.round(nftl2025 / seizures), 4282);
eq("levy notices per seizure", Math.round(levies / seizures), 6783);
const ftdAssessed = 117_895_214_000, ftdAbated = 117_210_987_000;
eq("deposit penalty abated share, percent", +((ftdAbated / ftdAssessed) * 100).toFixed(1), 99.4);

/* ------------------------------------- the hypothetical hotel's payroll */
const wagesPerQuarter = 420_000;      // assumption
const quarters = 4;                    // assumption
const incomeTaxWithheldPerQuarter = 50_400;  // assumption, 12.0% of wages
eq("withholding as a share of wages, percent", +((incomeTaxWithheldPerQuarter / wagesPerQuarter) * 100).toFixed(1), 12.0);

const FICA = 0.062 + 0.0145;           // Publication 15 (2026)
eq("combined FICA rate, percent", +(FICA * 100).toFixed(2), 7.65);
const employeeFicaPerQuarter = wagesPerQuarter * FICA;
eq("employee FICA per quarter", employeeFicaPerQuarter, 32_130);
const employerFicaPerQuarter = employeeFicaPerQuarter;

const trustFundPerQuarter = incomeTaxWithheldPerQuarter + employeeFicaPerQuarter;
eq("trust fund per quarter", trustFundPerQuarter, 82_530);
const liabilityPerQuarter = trustFundPerQuarter + employerFicaPerQuarter;
eq("Form 941 liability per quarter", liabilityPerQuarter, 114_660);

const totalWages = wagesPerQuarter * quarters;
eq("wages over four quarters", totalWages, 1_680_000);
const trustFund = trustFundPerQuarter * quarters;
eq("trust fund total", trustFund, 330_120);
const employerShare = employerFicaPerQuarter * quarters;
eq("employer share total", employerShare, 128_520);
const tax = liabilityPerQuarter * quarters;
eq("unpaid tax total", tax, 458_640);
eq("trust fund plus employer share equals the tax", trustFund + employerShare, tax);
eq("trust fund share of the tax, percent", +((trustFund / tax) * 100).toFixed(1), 72.0);

/* --------------------------------------------- penalty and interest */
const ftd10 = tax * 0.10;              // 6656(b)(1)(A)(iii)
eq("failure to deposit at 10 percent", ftd10, 45_864);
const ftd15 = tax * 0.15;              // 6656(b)(1)(B)
eq("failure to deposit at 15 percent", ftd15, 68_796);
eq("the 15 percent tier costs this much more", ftd15 - ftd10, 22_932);

const dailyFactor = Math.pow(1 + 0.07 / 365, 365) - 1;   // 7%, compounded daily
eq("effective annual rate on a 7 percent underpayment, percent", +(dailyFactor * 100).toFixed(3), 7.250);
const interest = Math.round((tax + ftd10) * dailyFactor);
eq("one year of interest on the tax plus the 10 percent penalty", interest, 36_577, 0.5);

const assessed = tax + ftd10 + interest;
eq("balance the notice of lien would show", assessed, 541_081);

/* ------------------------------------------------------- the first sale */
const price = 9_400_000;               // assumption
const mortgage = 7_900_000;            // assumption
const costRate = 0.05;                 // assumption
const costs = price * costRate;
eq("closing costs and brokerage at 5.0 percent", costs, 470_000);
const equityBeforeIrs = price - mortgage - costs;
eq("cash available after the mortgage and the costs", equityBeforeIrs, 1_030_000);
const irsTake = Math.min(equityBeforeIrs, assessed);
eq("what the IRS must receive to discharge under 6325(b)(2)(A)", irsTake, 541_081);
const sellerNets = equityBeforeIrs - irsTake;
eq("seller's remaining proceeds", sellerNets, 488_919);
eq("the lien takes this share of the equity, percent", +((irsTake / equityBeforeIrs) * 100).toFixed(1), 52.5);

/* --------------------------- the same hotel 900,000 dollars lower */
const price2 = 8_500_000;
const costs2 = price2 * costRate;
eq("closing costs at the lower price", costs2, 425_000);
const equity2 = price2 - mortgage - costs2;
eq("cash available at the lower price", equity2, 175_000);
const irsTake2 = Math.min(equity2, assessed);
eq("what the IRS receives at the lower price", irsTake2, 175_000);
const shortfall = assessed - irsTake2;
eq("balance still owed after the discharge", shortfall, 366_081);
eq("trust fund still exposed to the 6672 penalty", trustFund, 330_120);
eq("seller's proceeds at the lower price", equity2 - irsTake2, 0);

/* --------------------------------- 6325(b)(1), the double test, fails */
eq("value the double test would require to be left behind", assessed * 2, 1_082_162);

/* --------------------------------------- 3505(b), the lender's exposure */
const payrollFunded = 420_000;         // one quarter of wages, assumption
eq("ceiling on a lender's section 3505(b) liability at 25 percent", payrollFunded * 0.25, 105_000);

/* ------------------------------------- cost of a 45-day discharge wait */
const prime = 0.0700;                  // /rates, October 2026 edition
const waitDays = 45;
eq("45 days of carry on the mortgage at Prime", +((mortgage * prime * waitDays) / 365).toFixed(2), 68_178.08, 0.02);

console.log(failures ? `\n${failures} mismatch(es)` : `\nall assertions matched`);
if (failures) process.exitCode = 1;
