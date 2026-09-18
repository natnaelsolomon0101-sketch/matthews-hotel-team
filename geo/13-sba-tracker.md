# 13. SBA hotel lending tracker

Shipped 2026-09-18 by the `sba-tracker` role. An original dataset: SBA 7(a) and 504 lending to
hotels, aggregated from SBA's own loan-level files, refreshed each quarter by a GitHub Action.

## 1. What exists

| Thing | Where |
|---|---|
| Page | `/data/sba-hotel-lending` (`src/app/data/sba-hotel-lending/page.tsx`, chart in `ApprovalsChart.tsx`) |
| Downloads | `/data/sba-hotel-lending.json`, `/data/sba-hotel-lending.csv` (route handlers beside the page; not under `/api/`, which robots.txt disallows) |
| Markdown twin | `/data/sba-hotel-lending.md`, built by `sbaHotelLendingTwin()` in `src/lib/agent/static-pages.ts` |
| Prose, tables, JSON and CSV builders | `src/lib/sba/index.ts`, `src/lib/sba/tables.ts` |
| Aggregates (committed) | `content/sba/summary.json`, `by-state.json`, `lenders.json` |
| Build script | `scripts/fetch-sba-hotel-loans.ts` |
| Quarterly job | `.github/workflows/sba-refresh.yml` |

The page has no hand-typed number. Every sentence that carries a figure is a template in
`src/lib/sba/index.ts` filled from `content/sba/*.json`, and the page and the twin both import those
strings, so the gate's parity check passes without a second copy of the prose. "Last updated" is
the date in `meta.fetchedAt`; "SBA data as of" is the `AsOfDate` column in SBA's files.

## 2. Source and license

- Dataset: SBA "7(a) & 504 FOIA", identifier `SBA-OHA-2016-08-001`,
  https://data.sba.gov/dataset/7a-504-foia
- Metadata API (the script reads the current file list from here):
  https://data.sba.gov/api/1/metastore/schemas/dataset/items/SBA-OHA-2016-08-001
- Data dictionary:
  https://data.sba.gov/sites/default/files/uploaded_resources/7a_504_foia_data_dictionary.xlsx
- License: the dataset record declares `https://www.usa.gov/publicdomain/label/1.0/` (U.S.
  government work, public domain). SBA says the files update quarterly, about one month after the
  quarter ends. All read 2026-09-18.
- The file names carry the as-of date (`FOIA_7a_FY2020_Present_asof_260630.csv`) and change every
  quarter. Never hard-code them.

## 3. Definitions the page depends on

- **Hotel** = NAICS `721110`. `721120`, `721191` and `721199` are reported in one separate table
  and excluded everywhere else.
- **Window** = approval fiscal year 2010 onward (the `FY2010-Present` 504 file and the two 7(a)
  files from FY2010).
- **Cancelled loans** (`LoanStatus` = `CANCLD`) are excluded from every table. The script prints
  how many were dropped.
- **Gross approval**: for 7(a) the full loan; for 504 the SBA/CDC debenture only. SBA reports the
  bank first mortgage in `ThirdPartyDollars`; the JSON carries that per year, the page does not add
  it in.
- **State** = `ProjectState`, falling back to `BorrState` when blank.
- **Lender** = `BankName` (7(a)) or `CDC_Name` (504), as printed by SBA. SBA defines `BankName` as
  the bank the loan is *currently assigned to*. The page says so.
- **Last full fiscal year**: derived from the as-of date. FY ends September 30. A release dated
  September 30 makes that fiscal year complete; any other date makes the current fiscal year
  partial, and it is labeled "(partial)" in every table and drawn lighter in the chart.
- **Charged off**: loans whose `LoanStatus` is `CHGOFF`, which the data dictionary defines as
  "Charged Off", counted by approval-year cohort. It is labeled as a share of loans by count and
  never as a default or loss rate.
- **Privacy**: aggregates only. No borrower name, address or loan row is written anywhere. In the
  per-state lender lists, dollars are `null` when a lender has fewer than three hotel loans in the
  state, because one or two loans would expose a single loan amount.

## 4. The quarterly refresh

Automatic: `sba-refresh.yml` runs at 14:00 UTC on the 5th and 20th of February, May, August and
November, and on manual dispatch. It:

1. asks the metadata API for the current distributions and picks the CSVs by title;
2. exits early, downloading nothing, if the titles match `content/sba/summary.json`;
3. otherwise streams the CSVs, aggregates, reconciles and writes the three JSON files;
4. runs `bash scripts/geo-check.sh` inside the job (a PR opened with `GITHUB_TOKEN` does not
   trigger the PR gate, so the gate has to run here);
5. pushes `agent/sba-tracker/asof-<date>-run-<id>` and opens a PR with the reconciliation in the
   body.

One-time repo setting the job needs: Settings, Actions, General, "Allow GitHub Actions to create
and approve pull requests". Without it step 5 fails with a 403 and the branch is still pushed.

Manual, from a laptop:

```bash
npx tsx scripts/fetch-sba-hotel-loans.ts --dry-run                 # print the reconciliation, write nothing
npx tsx scripts/fetch-sba-hotel-loans.ts --cache-dir ~/sba-cache   # keep the raw CSVs OUTSIDE the repo
npx tsx scripts/fetch-sba-hotel-loans.ts --force                   # rebuild although SBA posted nothing new
bash scripts/geo-check.sh
```

Reviewing the refresh PR (a person or the Maintainer):

- Read the reconciliation block. Every line must say `OK`. The script refuses to write otherwise.
- Open the page preview and read the direct answer and the takeaways. They are generated, so check
  they still read as sentences (for example when a fiscal year has just completed and there is no
  partial year).
- Add the `geo/agent-log.md` line for role `sba-tracker`.
- Numbers for past years can move a little between releases, because SBA cancels and reassigns
  loans after approval. That is the source changing, which AGENTS.md rule 2 allows. The PR diff is
  the record of old and new values.

## 5. When SBA moves things

The script fails loudly and says what it looked for:

| Error | Meaning | Fix |
|---|---|---|
| `metadata API returned HTTP 404` | Dataset identifier or portal API changed | Find the dataset from https://data.sba.gov/oca-datasets and update `DATASET_ID`, `METADATA_URL`, `LANDING_URL` |
| `No current "7(a) (FYxxxx-Present)" CSV found` (it lists the titles SBA has) | Distribution titles changed format | Update the regular expression in `discover()` |
| `... is missing expected column(s)` | CSV layout changed | Compare with the data dictionary; update `processFile()` |
| `Expected one AsOfDate across all files` | SBA is part-way through an upload | Re-run later |
| `reconciliation check(s) failed` | A bug, or a malformed CSV | Do not publish. Re-run with `--cache-dir` and compare with a straight count |

The portal already moved once: the CKAN API (`/api/3/action/...`) is gone and the site is now
Drupal/DKAN, which is why the script uses `/api/1/metastore/`.

## 6. Reconciliation at first publication (SBA data as of 2026-06-30)

| File | Rows read | NAICS 721110 rows | Cancelled | Counted | Gross approval counted |
|---|---|---|---|---|---|
| `FOIA_504_FY2010_Present_asof_260630.csv` | 117,983 | 5,244 | 714 | 4,530 | $8,949,814,290 |
| `FOIA_7a_FY2010_FY2019_asof_260630.csv` | 545,751 | 8,636 | 930 | 7,706 | $14,593,480,400 |
| `FOIA_7a_FY2020_Present_asof_260630.csv` | 388,338 | 5,613 | 489 | 5,124 | $13,086,916,600 |
| Total | 1,052,072 | 19,493 | 2,133 | 17,360 | $36,630,211,290 |

All eleven internal checks passed, and an independent count with Python's `csv` module over the
same three files returned the same 17,360 loans and $36,630,211,290.

## 7. Not done, on purpose

- No pre-FY2010 history. The older files exist; NAICS coverage in them was not checked.
- No lender-level charge-off figures. That would read as a judgment on a named lender.
- No per-loan rates or terms, although `InitialInterestRate` is in the 7(a) file. A later version
  could publish the distribution of initial rates by year as an aggregate.
- No MCP tool for this dataset yet. `get_hotel_financing_statistics` is the model if one is added;
  bump `MCP_SERVER_VERSION` and the expected tool list in `scripts/agent-access-check.mjs`.
- Inbound links from the SBA answer pages and glossary terms belong to other owners. Suggested:
  add `/data/sba-hotel-lending` to `related.data` on `/hotel-financing/sba-7a-vs-504` and
  `/hotel-financing/lenders-under-5-million` (the label is already in `path-labels.ts`).
