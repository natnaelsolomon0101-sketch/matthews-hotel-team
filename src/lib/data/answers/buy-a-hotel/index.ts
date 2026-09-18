/** Barrel for the buy-a-hotel cluster. Hub first, then spokes in URL order. */
import { page as a_branded_vs_independent } from "./branded-vs-independent";
import { page as a_buying_a_hotel_from_receivership_or_foreclosure } from "./buying-a-hotel-from-receivership-or-foreclosure";
import { page as a_due_diligence_checklist } from "./due-diligence-checklist";
import { page as a_first_hotel_no_experience } from "./first-hotel-no-experience";
import { page as a_how_much_money_do_you_need } from "./how-much-money-do-you-need";
import { page as a_hub } from "./hub";
import { page as a_seller_financing } from "./seller-financing";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  a_branded_vs_independent,
  a_buying_a_hotel_from_receivership_or_foreclosure,
  a_due_diligence_checklist,
  a_first_hotel_no_experience,
  a_how_much_money_do_you_need,
  a_seller_financing,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
