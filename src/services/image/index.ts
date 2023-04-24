import { TArtImageResponse, TCategories } from "../../pages/Home/Gallery/types";
import api from "../api";

export const getImages = (
  limit: number,
  date?: string,
  idx?: number,
  category?: TCategories
) => {
  return api.get<TArtImageResponse>("api/image/media", {
    params: {
      limit,
      date,
      idx,
      category: category === "전체" ? undefined : category
    }
  });
};

export const getSearchImages = (limit: number, date?: string, idx?: number) => {
  return api.get<TArtImageResponse>("api/image/media", {
    params: {
      limit,
      date,
      idx
    }
  });
};
