/**
 * The only benchmarks a tool page may show come from the current /rates
 * edition, with the observation date. These helpers read the rate sheet
 * directly, so when the Rate Sheet agent publishes a new edition the tool
 * pages follow it and never carry a stale figure.
 */
import { benchmark, latestEdition } from "../../rates/sheet";
import type { BenchmarkKey } from "../../rates/types";

function longDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** "September 2026" */
export const EDITION_LABEL = latestEdition().label;

/** "4.94% on September 17, 2026" */
export function benchmarkOn(key: BenchmarkKey): string {
  const b = benchmark(key);
  if (!b) throw new Error(`rate sheet has no benchmark "${key}"`);
  return `${b.value.toFixed(2)}% on ${longDate(b.asOf)}`;
}

/** ISO date of the observation, for a source's label. */
export function benchmarkAsOf(key: BenchmarkKey): string {
  const b = benchmark(key);
  if (!b) throw new Error(`rate sheet has no benchmark "${key}"`);
  return b.asOf;
}
