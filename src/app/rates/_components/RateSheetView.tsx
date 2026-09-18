import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeadline } from "@/components/ui/TwoToneHeadline";
import { Pill } from "@/components/ui/Pill";
import { SITE_URL, BRAND, bioMembers } from "@/lib/entity";
import {
  BENCHMARKS,
  EDITIONS,
  MHDI_ABBR,
  MHDI_DEFINITION,
  MHDI_NAME,
  MHDI_RULES,
  cellCounts,
  citationString,
  citedSourceIds,
  mhdiHistory,
} from "@/lib/rates/sheet";
import { RATE_SOURCES } from "@/lib/rates/sources";
import type { RateEdition } from "@/lib/rates/types";
import RateCell from "./RateCell";
import MhdiChart from "./MhdiChart";

const LONG_DATE = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};

const COLUMNS: { key: string; label: string }[] = [
  { key: "indexLabel", label: "Index" },
  { key: "spread", label: "Spread" },
  { key: "allIn", label: "All-in coupon" },
  { key: "maxLtv", label: "Max LTV / LTC" },
  { key: "dscrFloor", label: "DSCR floor" },
  { key: "termAmort", label: "Term / amortization" },
  { key: "recourse", label: "Recourse" },
  { key: "minLoan", label: "Minimum loan" },
];

export function RateSheetView({
  edition,
  isArchive,
}: {
  edition: RateEdition;
  isArchive: boolean;
}) {
  const counts = cellCounts(edition);
  const cited = citedSourceIds(edition);
  const sources = RATE_SOURCES.filter((s) => cited.includes(s.id));
  const readings = mhdiHistory();
  const luke = bioMembers().find((m) => m.slug === "luke-thompson");
  const nate = bioMembers().find((m) => m.slug === "nate-solomon");
  const canonical = isArchive
    ? `${SITE_URL}/rates/${edition.slug}`
    : `${SITE_URL}/rates`;

  return (
    <>
      {/* ---------------------------------------------------------- header */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1024px] px-6">
          <Eyebrow>Rate sheet</Eyebrow>
          <div className="mt-6">
            <TwoToneHeadline
              as="h1"
              size="section"
              lead={`Hotel Loan Rate Sheet, ${edition.label}.`}
              follow="What the public benchmarks say, and what we have not published yet."
            />
          </div>

          <p className="mt-6 text-[13px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
            Published by {BRAND} &middot; Last updated: {LONG_DATE(edition.publishedAt)}
            {isArchive ? null : (
              <>
                {" "}
                &middot; Next edition: {LONG_DATE(edition.nextRefresh)}
              </>
            )}
          </p>

          {isArchive ? (
            <p className="mt-4 rounded-[14px] bg-[#f5f5f7] px-5 py-4 text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]">
              This is the archived {edition.label} edition. It is kept exactly
              as published so a citation to it stays true.{" "}
              <Link href="/rates" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                See the current edition
              </Link>
              .
            </p>
          ) : null}

          {/* The 40 to 70 word lift block. */}
          <p className="mt-8 max-w-[68ch] text-[19px] leading-[1.42] tracking-[0.012em] text-[color:var(--text-primary)]">
            {edition.directAnswer}
          </p>

          <div className="mt-8 rounded-[14px] border border-[color:var(--divider)] px-5 py-4">
            <p className="text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              <strong className="text-[color:var(--text-primary)]">
                What is and is not on this page.
              </strong>{" "}
              Of {counts.total} priced cells in the table below,{" "}
              {counts.published} are public benchmarks or published program
              rules with a source link
              {counts.observed > 0
                ? `, ${counts.observed} are this team's observations from live quotes,`
                : ","}{" "}
              and {counts.pending} say &ldquo;not yet published&rdquo;. Nobody
              publishes those, and we have not yet released our own figure for
              them. We would rather show you the gap than fill it with a number
              we made up. Every index value in the table is real, sourced and
              dated.{" "}
              <Link href="/rates/methodology" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                Methodology
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ benchmarks */}
      <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1024px] px-6">
          <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
            The indexes every quote is struck against
          </h2>
          <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
            Each figure below comes straight from the institution that
            publishes it. The as-of date is the date of the observation, not
            the date we fetched it.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 border-t border-[color:var(--divider)] pt-10">
            {BENCHMARKS.map((b) => (
              <div key={b.key}>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                  {b.label}
                </p>
                <p className="mt-2 text-[28px] font-semibold tabular-nums leading-none tracking-[-0.02em] text-[color:var(--text-primary)]">
                  {b.value.toFixed(2)}%
                </p>
                <p className="mt-2 text-[12px] leading-[1.45] text-[color:var(--text-secondary)]">
                  As of {LONG_DATE(b.asOf)}
                  <br />
                  <a
                    href={b.sourceUrl}
                    rel="noopener external"
                    className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                  >
                    {b.sourceName}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- table */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
            {edition.label} terms by lender type
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[1180px] text-[14px] tracking-[-0.014em] text-[color:var(--text-primary)]">
              <caption className="sr-only">
                Hotel loan terms by lender type, {edition.label}. Cells marked
                &ldquo;not yet published&rdquo; have no figure.
              </caption>
              <thead className="border-b border-[color:var(--divider)] text-left text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                <tr>
                  <th scope="col" className="py-3 pr-4 font-medium align-bottom min-w-[170px]">
                    Lender type
                  </th>
                  {COLUMNS.map((c) => (
                    <th
                      key={String(c.key)}
                      scope="col"
                      className="py-3 pr-4 font-medium align-bottom min-w-[130px]"
                    >
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {edition.rows.map((row) => (
                  <tr
                    key={row.key}
                    className="border-b border-[color:var(--divider)] align-top"
                  >
                    <th scope="row" className="py-5 pr-4 text-left font-semibold">
                      {row.lenderType}
                      <span className="mt-1 block text-[12px] font-normal leading-[1.4] text-[color:var(--text-secondary)]">
                        {row.summary}
                      </span>
                    </th>
                    <td className="py-5 pr-4">
                      <span className="font-semibold">{row.indexLabel}</span>
                      <span className="mt-1 block text-[12px] leading-[1.4] text-[color:var(--text-secondary)]">
                        {row.index
                          .map((k) => {
                            const b = BENCHMARKS.find((x) => x.key === k);
                            return b ? `${b.label} ${b.value.toFixed(2)}%` : k;
                          })
                          .join(" · ")}
                      </span>
                    </td>
                    <td className="py-5 pr-4"><RateCell cell={row.spread} /></td>
                    <td className="py-5 pr-4"><RateCell cell={row.allIn} /></td>
                    <td className="py-5 pr-4"><RateCell cell={row.maxLtv} /></td>
                    <td className="py-5 pr-4"><RateCell cell={row.dscrFloor} /></td>
                    <td className="py-5 pr-4"><RateCell cell={row.termAmort} /></td>
                    <td className="py-5 pr-4"><RateCell cell={row.recourse} /></td>
                    <td className="py-5 pr-4"><RateCell cell={row.minLoan} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-8 space-y-3">
            {edition.rows.map((row) => (
              <li
                key={row.key}
                className="text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-secondary)]"
              >
                <span className="font-semibold text-[color:var(--text-primary)]">
                  {row.lenderType}:
                </span>{" "}
                {row.notes}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ MHDI */}
      <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1024px] px-6">
          <h2 className="text-[clamp(22px,2.2vw,28px)] font-semibold leading-[1.2] tracking-[-0.016em] text-[color:var(--text-primary)]">
            {MHDI_NAME} ({MHDI_ABBR})
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 border-y border-[color:var(--divider)] py-8">
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                {edition.label} reading
              </p>
              <p className="mt-2 text-[28px] font-semibold tabular-nums leading-none tracking-[-0.02em] text-[color:var(--text-primary)]">
                {edition.mhdi.value === null
                  ? "Not yet published"
                  : `${edition.mhdi.value.toFixed(2)}%`}
              </p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                Quotes behind it
              </p>
              <p className="mt-2 text-[28px] font-semibold tabular-nums leading-none tracking-[-0.02em] text-[color:var(--text-primary)]">
                {edition.mhdi.quoteCount === null ? "None yet" : edition.mhdi.quoteCount}
              </p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
                Series start
              </p>
              <p className="mt-2 text-[20px] font-semibold leading-none tracking-[-0.02em] text-[color:var(--text-primary)]">
                {EDITIONS[EDITIONS.length - 1].label}
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
            <strong>Definition.</strong> {MHDI_DEFINITION}
          </p>

          {edition.mhdi.note ? (
            <p className="mt-4 max-w-[68ch] text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              {edition.mhdi.note}
            </p>
          ) : null}

          <MhdiChart readings={readings} />

          <h3 className="mt-12 text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
            The rules the index runs on
          </h3>
          <ul className="mt-5 space-y-3 list-disc list-outside pl-5 marker:text-[color:var(--text-secondary)]">
            {MHDI_RULES.map((r) => (
              <li
                key={r}
                className="text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]"
              >
                {r}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-[68ch] text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
            The MHDI is the debt-side companion to the{" "}
            <Link href="/research/mhi" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
              Matthews Hotel Index
            </Link>
            , which publishes quarterly cap rates, ADR and RevPAR across 14
            markets from public sources. Two different datasets: MHI measures
            what hotels trade at, MHDI measures what the debt costs. They are
            not combined, because they run on different cadences and different
            kinds of evidence.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- changelog */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1024px] px-6">
          <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
            What moved
          </h2>
          <ol className="mt-8 space-y-4 list-decimal list-outside pl-5 marker:text-[color:var(--text-secondary)]">
            {edition.changelog.map((c) => (
              <li
                key={c}
                className="max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]"
              >
                {c}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------- cite this */}
      <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1024px] px-6">
          <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
            Cite this
          </h2>
          <p className="mt-6 max-w-[68ch] text-[15px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-primary)]">
            Published under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              rel="noopener external"
              className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
            >
              CC BY 4.0
            </a>
            . Reuse it anywhere, including in an AI assistant&rsquo;s answer,
            with attribution. The archived edition URL never changes, so a
            citation to it stays true after the next refresh.
          </p>
          <pre className="mt-6 overflow-x-auto rounded-[14px] bg-white p-5 text-[13px] leading-[1.6] text-[color:var(--text-primary)]">
            <code>{citationString(edition, SITE_URL)}</code>
          </pre>
          <p className="mt-6 text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
            Machine-readable:{" "}
            <a href="/rates.json" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
              /rates.json
            </a>{" "}
            and{" "}
            <a href="/rates.csv" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
              /rates.csv
            </a>
            . Both carry the same basis label on every cell, so a pending cell
            cannot be read back as a number. Cross-origin requests are allowed.
          </p>
          <p className="mt-4 text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
            Archive:{" "}
            {EDITIONS.map((e, i) => (
              <React.Fragment key={e.slug}>
                {i > 0 ? ", " : null}
                <Link
                  href={`/rates/${e.slug}`}
                  className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                >
                  {e.label}
                </Link>
              </React.Fragment>
            ))}
            .
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------- sources */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1024px] px-6">
          <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
            Sources
          </h2>
          <ol className="mt-6 space-y-3 list-decimal list-outside pl-5 marker:text-[color:var(--text-secondary)]">
            {sources.map((s) => (
              <li
                key={s.id}
                className="text-[14px] leading-[1.5] tracking-[-0.014em] text-[color:var(--text-primary)]"
              >
                <a
                  href={s.url}
                  rel="noopener external"
                  className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                >
                  {s.name}
                </a>
                <span className="text-[color:var(--text-secondary)]">
                  {" "}
                  &middot; {s.publisher} &middot; source date {s.asOf} &middot;
                  last verified {s.verified}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------------------------------------- authors */}
      <section className="bg-[color:var(--surface-elevated)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1024px] px-6">
          <h2 className="text-[12px] uppercase tracking-[0.18em] font-medium text-[color:var(--text-secondary)]">
            Who publishes this
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[luke, nate].filter(Boolean).map((m) => (
              <div key={m!.slug} className="rounded-[18px] bg-white p-6">
                <p className="text-[16px] font-semibold tracking-[-0.014em] text-[color:var(--text-primary)]">
                  <Link
                    href={`/team/${m!.slug}`}
                    className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                  >
                    {m!.name}
                  </Link>
                </p>
                <p className="mt-1 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                  {m!.title}, {BRAND}
                </p>
                <p className="mt-3 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
                  <a href={`tel:${m!.phone.replace(/[^0-9+]/g, "")}`} className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                    {m!.phone}
                  </a>
                  {" "}&middot;{" "}
                  <a href={`mailto:${m!.email}`} className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                    {m!.email}
                  </a>
                </p>
                {m!.linkedin ? (
                  <p className="mt-1 text-[14px] tracking-[-0.014em]">
                    <a
                      href={m!.linkedin}
                      rel="noopener external"
                      className="text-[#1a3a6b] hover:underline underline-offset-[3px]"
                    >
                      LinkedIn
                    </a>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[68ch] text-[14px] leading-[1.55] tracking-[-0.014em] text-[color:var(--text-secondary)]">
            Luke Thompson runs debt placement for {BRAND} and owns the observed
            figures on this sheet. Nate Solomon compiles the public benchmarks
            and the monthly refresh.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1024px] px-6">
          <div className="rounded-[18px] bg-[color:var(--surface-elevated)] p-10 lg:p-14 text-center">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
              {edition.label}
            </p>
            <h2 className="mt-4 max-w-[58ch] mx-auto text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.18] tracking-[-0.016em] text-[color:var(--text-primary)]">
              A rate sheet is a starting point. A quote on your hotel is the
              real answer.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Pill variant="primary" href="/contact">Ask for a quote</Pill>
              <Pill variant="secondary" href="/services/capital-markets">Capital markets</Pill>
              <Pill variant="secondary" href="/rates/methodology">Methodology</Pill>
            </div>
            <p className="mt-8 text-[14px] tracking-[-0.014em] text-[color:var(--text-secondary)]">
              Related:{" "}
              <Link href="/research/mhi" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                Matthews Hotel Index
              </Link>
              {" "}&middot;{" "}
              <Link href="/data/hotel-financing-statistics" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                Hotel financing statistics
              </Link>
              {" "}&middot;{" "}
              <Link href="/glossary" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                Glossary
              </Link>
              {" "}&middot;{" "}
              <Link href="/research" className="text-[#1a3a6b] hover:underline underline-offset-[3px]">
                Research
              </Link>
            </p>
            <p className="mt-6 text-[13px] tracking-[-0.014em] text-[color:var(--text-tertiary)]">
              Canonical URL for this edition:{" "}
              <span className="tabular-nums">{canonical}</span>
              <ChevronRight className="inline h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default RateSheetView;
