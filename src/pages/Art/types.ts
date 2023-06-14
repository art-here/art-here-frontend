import { T_SATISFACTION_TAG } from "./ArtSatisfaction/types";

export type TArtCountAndRating = {
  postCount: number;
  satisfactionsCount: TArtSatisfaction[];
  starRating: number;
};

export type TSortedSatisfaction = {
  goods: TArtSatisfaction[];
  bads: TArtSatisfaction[];
};

export type TArtSatisfaction = {
  satisfaction: T_SATISFACTION_TAG;
  count: number;
};
