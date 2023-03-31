export type TArt = {
  [key: string]: string | undefined;
  id?: string;
  artName: string;
  imageURL?: string;
  latitude: string;
  longitude: string;
  roadAddress: string;
  oldAddress: string;
  category: string;
  authorName: string;
  agency: string;
  info: string;
  startDate: string;
  endDate?: string;
};

export type TViewArt = Pick<TArt, "id" | "artName">;
