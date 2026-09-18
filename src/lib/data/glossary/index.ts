import type { GlossaryEntry } from "./types";
import { entry as capRate } from "./cap-rate";
import { entry as revpar } from "./revpar";
import { entry as adr } from "./adr";
import { entry as pip } from "./pip";
import { entry as bov } from "./bov";
import { entry as iom } from "./iom";
import { entry as dscr } from "./dscr";
import { entry as debtYield } from "./debt-yield";
import { entry as noi } from "./noi";
import { entry as ltv } from "./ltv";
import { entry as ffeReserve } from "./ffe-reserve";
import { entry as mpiAriRgi } from "./mpi-ari-rgi";
import { entry as perKey } from "./per-key";
import { entry as goingConcernValue } from "./going-concern-value";
import { entry as comfortLetter } from "./comfort-letter";
import { entry as franchiseFdd } from "./franchise-fdd";
import { entry as keyMoney } from "./key-money";
import { entry as sofr } from "./sofr";
import { entry as primeRate } from "./prime-rate";
import { entry as sba7a } from "./sba-7a";
import { entry as sba504 } from "./sba-504";
import { entry as defeasance } from "./defeasance";
import { entry as yieldMaintenance } from "./yield-maintenance";
import { entry as nonRecourseCarveOuts } from "./non-recourse-carve-outs";
import { entry as mezzanineDebt } from "./mezzanine-debt";
import { entry as compSet } from "./comp-set";
import { entry as gop } from "./gop";
import { entry as groundLease } from "./ground-lease";
import { entry as franchiseAgreement } from "./franchise-agreement";

export type { GlossaryEntry, GlossaryFaq, GlossarySource } from "./types";

export const glossary: GlossaryEntry[] = [
  capRate,
  revpar,
  adr,
  pip,
  bov,
  iom,
  dscr,
  debtYield,
  noi,
  ltv,
  ffeReserve,
  mpiAriRgi,
  perKey,
  goingConcernValue,
  comfortLetter,
  franchiseFdd,
  keyMoney,
  sofr,
  primeRate,
  sba7a,
  sba504,
  defeasance,
  yieldMaintenance,
  nonRecourseCarveOuts,
  mezzanineDebt,
  compSet,
  gop,
  groundLease,
  franchiseAgreement,
];

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossary.find((g) => g.slug === slug);
}
