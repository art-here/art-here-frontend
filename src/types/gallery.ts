export type TArt = {
  id?: string;
  artName: string;
  imageURL: string;
  latitude: number;
  longitude: number;
  roadAddress: string;
  oldAddress: string;
  category: string;
  authorName: string;
  agency: string;
  info: string;
  startDate: string;
  endDate: string;
};

export type TViewArt = Pick<TArt, "id" | "artName">;
