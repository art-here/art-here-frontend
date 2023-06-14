import { T_SATISFACTION_TAG } from "../../pages/Art/ArtSatisfaction/types";
import api from "../api";

// 작품 계정 기본 정보
export const getArtCountAndRating = async (id: number) => {
  return api.get("api/satisfaction/list", {
    params: {
      id
    }
  });
};

// 유저별 작품 만족도
export const getArtSatisfaction = async (
  id: number
): Promise<TUserSatisfactionResponse> => {
  return api.get("api/satisfaction", {
    params: {
      id
    }
  });
};

export const postArtSatisfaction = async (
  userSatisfaction: TUserSatisfactionRequest
) => {
  return api.post("api/satisfaction", userSatisfaction);
};

export const patchArtSatisfaction = async (
  editedSatisfaction: TEditedSatisfactionRequest
) => {
  return api.patch("api/satisfaction", editedSatisfaction);
};

type TUserSatisfactionRequest = {
  artsId: number;
} & TUserSatisfactionResponse;

type TEditedSatisfactionRequest = {
  artsId: number;
  starRating: number;
  addSatisfactions: T_SATISFACTION_TAG[];
  deleteSatisfactions: T_SATISFACTION_TAG[];
};

type TUserSatisfactionResponse = {
  starRating: number;
  satisfactions: T_SATISFACTION_TAG[];
};
