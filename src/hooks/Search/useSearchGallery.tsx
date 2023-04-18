import { useQuery } from "@tanstack/react-query";
import { TProperyForSearch } from "../../component/Searcher/types";
import { PER_PAGE } from "../../constants";
import api from "../../services/api";
import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchedArts } from "../../store/gallery";

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

const useSearchGalleryByFilter = (filter: TProperyForSearch, query: string) => {
  const setSearchedArt = useSetRecoilState(searchedArts);
  const [nextQuery, setNextQuery] = useState<{
    nextIdx: number;
  }>();
  const { data, isLoading } = useQuery<
    AxiosResponse,
    AxiosError,
    Omit<TArtImageResponse, "nextRevisionDateIdx">
  >(
    CACHE_KEYS.search(filter, query, nextQuery?.nextIdx),
    () =>
      filter === "address"
        ? getSearchedByAddress(query)
        : getSearchedByName(query),
    {
      onSuccess(data) {
        setSearchedArt((prev) => [...prev, ...data.artImageResponses]);
      }
    }
  );
  // FIXME: filter, query가 변경된 경우 상태값을 비우고 다시 저장해야 함
  return {
    data,
    isLoading,
    setNextQuery
  };
};

export default useSearchGalleryByFilter;
