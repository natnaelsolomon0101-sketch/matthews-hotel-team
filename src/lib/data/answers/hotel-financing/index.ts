/** Barrel for the hotel-financing cluster. Hub first, then spokes in URL order. */
import { page as a_1031_exchange_hotels } from "./1031-exchange-hotels";
import { page as a_bridge_loans } from "./bridge-loans";
import { page as a_cmbs_loans } from "./cmbs-loans";
import { page as a_faq } from "./faq";
import { page as a_hotel_lenders_by_type } from "./hotel-lenders-by-type";
import { page as a_hotel_loan_rates } from "./hotel-loan-rates";
import { page as a_how_debt_placement_works } from "./how-debt-placement-works";
import { page as a_hub } from "./hub";
import { page as a_loan_maturities_2026_2027 } from "./loan-maturities-2026-2027";
import { page as a_loan_requirements } from "./loan-requirements";
import { page as a_loan_workouts } from "./loan-workouts";
import { page as a_pip_and_renovation_loans } from "./pip-and-renovation-loans";
import { page as a_refinance_or_sell } from "./refinance-or-sell";
import { page as a_refinance } from "./refinance";
import { page as a_sba_7a_vs_504 } from "./sba-7a-vs-504";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  a_1031_exchange_hotels,
  a_bridge_loans,
  a_cmbs_loans,
  a_faq,
  a_hotel_lenders_by_type,
  a_hotel_loan_rates,
  a_how_debt_placement_works,
  a_loan_maturities_2026_2027,
  a_loan_requirements,
  a_loan_workouts,
  a_pip_and_renovation_loans,
  a_refinance_or_sell,
  a_refinance,
  a_sba_7a_vs_504,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
