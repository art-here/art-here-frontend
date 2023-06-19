import api from "../api";

// 작품 계정 기본 정보
export const getArtDetailInfo = async (id: number): Promise<TArtDetail> => {
  return api.get("api/art", {
    params: {
      id
    }
  });
};

export type TArtDetail = {
  id: number;
  authorName: string;
  agency: string;
  info: string;
  state: boolean;
  startDate: Date;
  endDate: Date;
  roadAddress: string;
  category: string;
  location: Location;
  imageURL: string;
};

export type Location = {
  latitude: number;
  longitude: number;
};
