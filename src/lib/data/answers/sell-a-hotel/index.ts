/** Barrel for the sell-a-hotel cluster. Hub first, then spokes in URL order. */
import { page as a_broker_fees } from "./broker-fees";
import { page as a_documents_needed } from "./documents-needed";
import { page as a_faq } from "./faq";
import { page as a_franchise_agreement_expiration } from "./franchise-agreement-expiration";
import { page as a_how_long_it_takes } from "./how-long-it-takes";
import { page as a_how_to_choose_a_hotel_broker } from "./how-to-choose-a-hotel-broker";
import { page as a_how_to_sell_a_hotel } from "./how-to-sell-a-hotel";
import { page as a_hub } from "./hub";
import { page as a_off_market_vs_marketed } from "./off-market-vs-marketed";
import { page as a_selling_a_distressed_hotel } from "./selling-a-distressed-hotel";
import { page as a_taxes_when_selling_a_hotel } from "./taxes-when-selling-a-hotel";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  a_broker_fees,
  a_documents_needed,
  a_faq,
  a_franchise_agreement_expiration,
  a_how_long_it_takes,
  a_how_to_choose_a_hotel_broker,
  a_how_to_sell_a_hotel,
  a_off_market_vs_marketed,
  a_selling_a_distressed_hotel,
  a_taxes_when_selling_a_hotel,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
