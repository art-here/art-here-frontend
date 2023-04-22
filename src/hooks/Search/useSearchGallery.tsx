import { useQuery } from "@tanstack/react-query";
import { TProperyForSearch } from "../../component/Searcher/types";

import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchedArts } from "../../store/gallery";
import { getSearchedByAddress, getSearchedByName } from "../../services/search";

const useSearchGalleryByFilter = (filter: TProperyForSearch, query: string) => {
  const setSearchedArt = useSetRecoilState(searchedArts);
  const [nextQuery, setNextQuery] = useState<{
    idx?: number;
  } | null>(null);
  const { data, isLoading } = useQuery<
    AxiosResponse,
    AxiosError,
    Omit<TArtImageResponse, "nextRevisionDateIdx">
  >(
    CACHE_KEYS.search(filter, query, nextQuery?.idx),
    () =>
      filter === "address"
        ? getSearchedByAddress(query, nextQuery?.nextIdx)
        : getSearchedByName(query, nextQuery?.nextIdx),
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
