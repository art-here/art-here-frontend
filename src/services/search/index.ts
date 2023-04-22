import { PER_PAGE } from "../../constants";
import api from "../../services/api";

export const getSearchedByAddress = async (query: string, idx?: number) => {
  // TODO: endPoint 상수 관리
  return await api.get("api/image/media/address", {
    params: {
      idx,
      query,
      limit: PER_PAGE
    }
  });
};

export const getSearchedByName = async (name: string, idx?: number) => {
  // TODO: endPoint 상수 관리
  return await api.get("api/image/media/name", {
    params: {
      idx,
      name,
      limit: PER_PAGE
    }
  });
};
