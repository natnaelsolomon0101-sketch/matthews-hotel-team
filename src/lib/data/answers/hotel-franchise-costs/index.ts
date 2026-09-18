/** Barrel for the hotel-franchise-costs cluster. Hub first, then spokes in URL order. */
import { page as a_doubletree } from "./doubletree";
import { page as a_hampton_inn } from "./hampton-inn";
import { page as a_hilton_garden_inn } from "./hilton-garden-inn";
import { page as a_home2_suites } from "./home2-suites";
import { page as a_homewood_suites } from "./homewood-suites";
import { page as a_hub } from "./hub";
import { page as a_spark_by_hilton } from "./spark-by-hilton";
import { page as a_tapestry_collection } from "./tapestry-collection";
import { page as a_tru_by_hilton } from "./tru-by-hilton";
import { page as b_best_western } from "./best-western";
import { page as b_comfort_inn } from "./comfort-inn";
import { page as b_days_inn } from "./days-inn";
import { page as b_hyatt_place } from "./hyatt-place";
import { page as b_la_quinta } from "./la-quinta";
import { page as b_super_8 } from "./super-8";
import { page as c_quality_inn } from "./quality-inn";
import { page as c_sleep_inn } from "./sleep-inn";
import { page as c_econo_lodge } from "./econo-lodge";
import { page as c_cambria } from "./cambria";
import { page as c_woodspring_suites } from "./woodspring-suites";
import { page as c_hyatt_house } from "./hyatt-house";
import { page as c_surestay } from "./surestay";
import { page as c_red_roof_inn } from "./red-roof-inn";
import { page as c_motel_6 } from "./motel-6";
import { page as c_microtel } from "./microtel";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  b_best_western,
  c_cambria,
  b_comfort_inn,
  b_days_inn,
  a_doubletree,
  c_econo_lodge,
  a_hampton_inn,
  a_hilton_garden_inn,
  a_home2_suites,
  a_homewood_suites,
  c_hyatt_house,
  b_hyatt_place,
  b_la_quinta,
  c_microtel,
  c_motel_6,
  c_quality_inn,
  c_red_roof_inn,
  c_sleep_inn,
  a_spark_by_hilton,
  b_super_8,
  c_surestay,
  a_tapestry_collection,
  a_tru_by_hilton,
  c_woodspring_suites,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
