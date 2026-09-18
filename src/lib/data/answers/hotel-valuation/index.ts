/** Barrel for the hotel-valuation cluster. Hub first, then spokes in URL order. */
import { page as a_broker_opinion_of_value } from "./broker-opinion-of-value";
import { page as a_hotel_cap_rates } from "./hotel-cap-rates";
import { page as a_how_to_value_a_hotel } from "./how-to-value-a-hotel";
import { page as a_hub } from "./hub";
import { page as a_select_service_vs_full_service } from "./select-service-vs-full-service";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  a_broker_opinion_of_value,
  a_hotel_cap_rates,
  a_how_to_value_a_hotel,
  a_select_service_vs_full_service,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
