/** Barrel for the hotel-financing cluster. Hub first, then spokes in URL order. */
import { page as a_1031_exchange_hotels } from "./1031-exchange-hotels";
import { page as a_brand_conversion_financing } from "./brand-conversion-financing";
import { page as a_bridge_loans } from "./bridge-loans";
import { page as a_c_pace_financing } from "./c-pace-financing";
import { page as a_cmbs_loans } from "./cmbs-loans";
import { page as a_construction_loans } from "./construction-loans";
import { page as a_eb_5_financing } from "./eb-5-financing";
import { page as a_extended_stay_financing } from "./extended-stay-financing";
import { page as a_faq } from "./faq";
import { page as a_historic_tax_credits } from "./historic-tax-credits";
import { page as a_hotel_lenders_by_type } from "./hotel-lenders-by-type";
import { page as a_hotel_loan_rates } from "./hotel-loan-rates";
import { page as a_how_debt_placement_works } from "./how-debt-placement-works";
import { page as a_hub } from "./hub";
import { page as a_interest_only_loans } from "./interest-only-loans";
import { page as a_lenders_under_5_million } from "./lenders-under-5-million";
import { page as a_loan_assumption } from "./loan-assumption";
import { page as a_loan_maturities_2026_2027 } from "./loan-maturities-2026-2027";
import { page as a_loan_requirements } from "./loan-requirements";
import { page as a_loan_workouts } from "./loan-workouts";
import { page as a_non_recourse_loans } from "./non-recourse-loans";
import { page as a_opportunity_zones } from "./opportunity-zones";
import { page as a_pip_and_renovation_loans } from "./pip-and-renovation-loans";
import { page as a_refinance_or_sell } from "./refinance-or-sell";
import { page as a_refinance } from "./refinance";
import { page as a_sba_7a_vs_504 } from "./sba-7a-vs-504";
import { page as a_usda_b_and_i_loans } from "./usda-b-and-i-loans";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [
  a_1031_exchange_hotels,
  a_brand_conversion_financing,
  a_bridge_loans,
  a_c_pace_financing,
  a_cmbs_loans,
  a_construction_loans,
  a_eb_5_financing,
  a_extended_stay_financing,
  a_faq,
  a_historic_tax_credits,
  a_hotel_lenders_by_type,
  a_hotel_loan_rates,
  a_how_debt_placement_works,
  a_interest_only_loans,
  a_lenders_under_5_million,
  a_loan_assumption,
  a_loan_maturities_2026_2027,
  a_loan_requirements,
  a_loan_workouts,
  a_non_recourse_loans,
  a_opportunity_zones,
  a_pip_and_renovation_loans,
  a_refinance_or_sell,
  a_refinance,
  a_sba_7a_vs_504,
  a_usda_b_and_i_loans,
];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
