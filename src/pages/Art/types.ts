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
  satisfaction: string;
  count: number;
};
