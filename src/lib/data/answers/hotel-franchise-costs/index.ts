/** Barrel for the hotel-franchise-costs cluster. Hub first, then spokes in URL order. */
import { page as a_hub } from "./hub";
import type { AnswerPage } from "../types";

export const hub: AnswerPage = a_hub;

export const spokes: AnswerPage[] = [];

export const pages: AnswerPage[] = [hub, ...spokes];

export default pages;
