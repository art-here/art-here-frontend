import { useQuery } from "@tanstack/react-query";
import { TProperyForSearch } from "../../component/Searcher/types";
import { PER_PAGE } from "../../constants";
import api from "../../services/api";
import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import { useState } from "react";

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
  const [thumbnailsAll, setThumbnailsAll] = useState<
    TArtImageResponse[`artImageResponses`]
  >([]);
  const [nextQuery, setNextQuery] = useState<{
    nextIdx: number;
  }>();
  const { data, isLoading } = useQuery<
    AxiosResponse,
    AxiosError,
    Omit<TArtImageResponse, "nextRevisionDateIdx">
  >(
    CACHE_KEYS.search(filter, query),
    () =>
      filter === "address"
        ? getSearchedByAddress(query)
        : getSearchedByName(query),
    {
      staleTime: 500,
      select: (data) => data.data,
      onSuccess(data) {
        setThumbnailsAll((prev) => [...prev, ...data.artImageResponses]);
      }
    }
  );

  return { data, isLoading, setNextQuery, thumbnailsAll };
};

export default useSearchGalleryByFilter;
