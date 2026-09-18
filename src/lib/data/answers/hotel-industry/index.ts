/** Barrel for the hotel-industry cluster. Hub first, then spokes in URL order. */
import { page as a_chain_scales_and_classes } from "./chain-scales-and-classes";
import { page as a_how_hotels_make_money } from "./how-hotels-make-money";
import { page as a_hub } from "./hub";
import { page as a_industry_size_2026 } from "./industry-size-2026";
import { page as a_outlook_2026_2027 } from "./outlook-2026-2027";
import { page as a_owner_franchisor_management_company } from "./owner-franchisor-management-company";
import { page as a_revpar_adr_occupancy } from "./revpar-adr-occupancy";
import { page as a_who_owns_hotels } from "./who-owns-hotels";
import { page as a_hotel_management_agreements } from "./hotel-management-agreements";
import { page as a_hotel_operating_costs } from "./hotel-operating-costs";
import { page as a_extended_stay_hotels } from "./extended-stay-hotels";
import { page as a_cost_to_build_a_hotel } from "./cost-to-build-a-hotel";
import { page as a_who_buys_hotels } from "./who-buys-hotels";
import { page as a_how_hotel_reits_work } from "./how-hotel-reits-work";
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
  a_hotel_management_agreements,
  a_hotel_operating_costs,
  a_extended_stay_hotels,
  a_cost_to_build_a_hotel,
  a_who_buys_hotels,
  a_how_hotel_reits_work,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
