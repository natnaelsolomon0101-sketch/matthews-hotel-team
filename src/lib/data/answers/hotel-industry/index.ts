/** Barrel for the hotel-industry cluster. Hub first, then spokes in URL order. */
import { page as a_chain_scales_and_classes } from "./chain-scales-and-classes";
import { page as a_how_hotels_make_money } from "./how-hotels-make-money";
import { page as a_hub } from "./hub";
import { page as a_industry_size_2026 } from "./industry-size-2026";
import { page as a_outlook_2026_2027 } from "./outlook-2026-2027";
import { page as a_owner_franchisor_management_company } from "./owner-franchisor-management-company";
import { page as a_revpar_adr_occupancy } from "./revpar-adr-occupancy";
import { page as a_who_owns_hotels } from "./who-owns-hotels";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  a_chain_scales_and_classes,
  a_how_hotels_make_money,
  a_industry_size_2026,
  a_outlook_2026_2027,
  a_owner_franchisor_management_company,
  a_revpar_adr_occupancy,
  a_who_owns_hotels,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
