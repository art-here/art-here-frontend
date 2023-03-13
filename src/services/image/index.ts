import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import api from "../api";

export const getImages = (
  limit: number,
  revisionDateIdx?: string,
  idx?: number
) => {
  return api.get<TArtImageResponse>("api/image/media", {
    params: {
      limit,
      revisionDateIdx,
      idx
    }
  });
};
