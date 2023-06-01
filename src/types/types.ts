export type TArt = {
  [key: string]: string | undefined;
  id?: string;
  artName: string;
  imageURL?: string;
  latitude: string;
  longitude: string;
  roadAddress: string;
  category: string;
  authorName: string;
  agency: string;
  info?: string;
  startDate: string;
  endDate?: string;
};

export type TViewArt = Pick<TArt, "id" | "artName">;
export type TArtForAdminReponses = TArt & {
  createDate?: Date;
  revisionDate?: Date;
};

export type TAdminArt = {
  totalElements: number;
  totalPages: number;
  artForAdminResponses: TArtForAdminReponses[];
};

export type TAwsInfo = {
  preSignedURL: string;
  key: string;
};

export type TResponse<T> = {
  data: T;
  nextPage: number;
  hasNext: boolean;
};
