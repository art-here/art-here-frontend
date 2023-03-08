import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import api from "../api";

export const getImages = (limit = 9) => {
  const revisionDateIdx = undefined;
  const nextIdx = undefined;
  return api.get<TArtImageResponse>("api/image/media", {
    params: {
      limit,
      revisionDateIdx,
      nextIdx
    }
  });
};
