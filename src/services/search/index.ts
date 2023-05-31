import { PER_PAGE } from "../../constants";
import { TCategories } from "../../pages/Arts/Gallery/types";
import api from "../../services/api";

export const getSearchedByAddress = async (
  query: string,
  category: TCategories,
  idx?: number
) => {
  // TODO: endPoint 상수 관리
  return await api.get("api/image/media/address", {
    params: {
      idx,
      query,
      limit: PER_PAGE,
      category: category === "전체" ? undefined : category
    }
  });
};

export const getSearchedByName = async (
  name: string,
  category: TCategories,
  idx?: number
) => {
  // TODO: endPoint 상수 관리
  return await api.get("api/image/media/name", {
    params: {
      idx,
      name,
      limit: PER_PAGE,
      category: category === "전체" ? undefined : category
    }
  });
};
