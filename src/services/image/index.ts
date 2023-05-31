import { TArtImageResponse, TCategories } from "../../pages/Arts/Gallery/types";
import api from "../api";

export const getImages = (
  limit: number,
  category: TCategories,
  date?: string,
  idx?: number
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
