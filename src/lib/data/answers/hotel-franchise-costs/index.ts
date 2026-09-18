/** Barrel for the hotel-franchise-costs cluster. Hub first, then spokes in URL order. */
import { page as a_hub } from "./hub";
import { page as b_best_western } from "./best-western";
import { page as b_comfort_inn } from "./comfort-inn";
import { page as b_days_inn } from "./days-inn";
import { page as b_hyatt_place } from "./hyatt-place";
import { page as b_la_quinta } from "./la-quinta";
import { page as b_super_8 } from "./super-8";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  b_best_western,
  b_comfort_inn,
  b_days_inn,
  b_hyatt_place,
  b_la_quinta,
  b_super_8,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
