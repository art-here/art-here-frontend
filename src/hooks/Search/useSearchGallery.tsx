import { useQuery } from "@tanstack/react-query";
import { TProperyForSearch } from "../../component/Searcher/types";
import { PER_PAGE } from "../../constants";
import api from "../../services/api";
import CACHE_KEYS from "../../services/cacheKeys";

// TODO: address, name 합치기

const getSearchedByAddress = async (query: string) => {
  // TODO: endPoint 상수 관리
  return await api.get("api/image/media/address", {
    params: {
      query,
      limit: PER_PAGE
    }
  });
};

const getSearchedByName = async (name: string) => {
  // TODO: endPoint 상수 관리
  return await api.get("api/image/media/name", {
    params: {
      name,
      limit: PER_PAGE
    }
  });
};

const useSearchGallery = (filter: TProperyForSearch, query: string) => {
  if (filter === "address")
    return useQuery(CACHE_KEYS.search(filter, query), () =>
      getSearchedByAddress(query)
    );
  else {
    return useQuery(CACHE_KEYS.search(filter, query), () =>
      getSearchedByName(query)
    );
  }
};

export default useSearchGallery;
