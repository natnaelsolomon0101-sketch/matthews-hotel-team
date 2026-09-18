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
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  a_doubletree,
  a_hampton_inn,
  a_hilton_garden_inn,
  a_home2_suites,
  a_homewood_suites,
  a_spark_by_hilton,
  a_tapestry_collection,
  a_tru_by_hilton,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
