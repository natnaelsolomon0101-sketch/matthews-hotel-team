/** Barrel for the hotel-valuation cluster. Hub first, then spokes in URL order. */
import { page as a_appraisal_lower_than_expected } from "./appraisal-lower-than-expected";
import { page as a_branded_select_service_hotel_value } from "./branded-select-service-hotel-value";
import { page as a_broker_opinion_of_value } from "./broker-opinion-of-value";
import { page as a_hotel_cap_rates } from "./hotel-cap-rates";
import { page as a_how_to_value_a_hotel } from "./how-to-value-a-hotel";
import { page as a_hub } from "./hub";
import { page as a_interest_rates_and_hotel_value } from "./interest-rates-and-hotel-value";
import { page as a_pip_and_hotel_value } from "./pip-and-hotel-value";
import { page as a_revpar_multiples_and_per_key } from "./revpar-multiples-and-per-key";
import { page as a_select_service_vs_full_service } from "./select-service-vs-full-service";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  a_appraisal_lower_than_expected,
  a_branded_select_service_hotel_value,
  a_broker_opinion_of_value,
  a_hotel_cap_rates,
  a_how_to_value_a_hotel,
  a_interest_rates_and_hotel_value,
  a_pip_and_hotel_value,
  a_revpar_multiples_and_per_key,
  a_select_service_vs_full_service,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
