import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import api from "../api";

export const getImages = (limit: number, date?: string, idx?: number) => {
  return api.get<TArtImageResponse>("api/image/media", {
    params: {
      limit,
      date,
      idx
    }
  });
};
