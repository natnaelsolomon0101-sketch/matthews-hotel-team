// Median summary of the Lighthouse JSON files written by lighthouse-local.sh.
//   node scripts/lighthouse-summary.mjs <dir>
import fs from "node:fs";

const dir = process.argv[2];
const by = {};
for (const f of fs.readdirSync(dir).filter((f) => /\.\d+\.json$/.test(f))) {
  const r = JSON.parse(fs.readFileSync(`${dir}/${f}`, "utf8"));
  if (!r.audits || !r.categories?.performance?.score) continue;
  const a = r.audits;
  const key = f.replace(/\.\d+\.json$/, "");
  (by[key] ??= []).push({
    perf: Math.round(r.categories.performance.score * 100),
    seo: Math.round(r.categories.seo.score * 100),
    a11y: Math.round(r.categories.accessibility.score * 100),
    fcp: a["first-contentful-paint"].numericValue,
    lcp: a["largest-contentful-paint"].numericValue,
    tbt: a["total-blocking-time"].numericValue,
    cls: a["cumulative-layout-shift"].numericValue,
    si: a["speed-index"].numericValue,
    lcpEl:
      a["largest-contentful-paint-element"]?.details?.items?.[0]?.items?.[0]?.node?.snippet ??
      a["lcp-breakdown-insight"]?.details?.items?.find((i) => i.type === "node")?.snippet,
  });
}
const med = (xs) => xs.slice().sort((x, y) => x - y)[Math.floor(xs.length / 2)];
const out = {};
for (const [k, rs] of Object.entries(by)) {
  out[k] = { runs: rs.length };
  for (const m of ["perf", "seo", "a11y", "fcp", "lcp", "tbt", "cls", "si"]) out[k][m] = med(rs.map((r) => r[m]));
  out[k].lcpEl = rs[0].lcpEl;
}
fs.writeFileSync(`${dir}/summary.json`, JSON.stringify(out, null, 2));
console.table(
  Object.fromEntries(
    Object.entries(out).map(([k, v]) => [
      k,
      { perf: v.perf, seo: v.seo, a11y: v.a11y, FCP: Math.round(v.fcp), LCP: Math.round(v.lcp), TBT: Math.round(v.tbt), CLS: +v.cls.toFixed(3), SI: Math.round(v.si) },
    ]),
  ),
);
for (const [k, v] of Object.entries(out)) console.log(k, "LCP element:", v.lcpEl);
