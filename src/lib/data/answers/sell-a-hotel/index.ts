/** Barrel for the sell-a-hotel cluster. Hub first, then spokes in URL order. */
import { page as a_broker_fees } from "./broker-fees";
import { page as a_documents_needed } from "./documents-needed";
import { page as a_how_long_it_takes } from "./how-long-it-takes";
import { page as a_how_to_choose_a_hotel_broker } from "./how-to-choose-a-hotel-broker";
import { page as a_how_to_sell_a_hotel } from "./how-to-sell-a-hotel";
import { page as a_hub } from "./hub";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  a_broker_fees,
  a_documents_needed,
  a_how_long_it_takes,
  a_how_to_choose_a_hotel_broker,
  a_how_to_sell_a_hotel,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
