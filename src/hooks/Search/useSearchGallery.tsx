import { useQuery } from "@tanstack/react-query";
import { TProperyForSearch } from "../../component/Searcher/types";

import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { TArtImageResponse, TCategories } from "../../pages/Arts/Gallery/types";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchedArts } from "../../store/gallery";
import { getSearchedByAddress, getSearchedByName } from "../../services/search";

const useSearchGalleryByFilter = (
  filter: TProperyForSearch,
  query: string,
  category: TCategories
) => {
  const setSearchedArt = useSetRecoilState(searchedArts);
  const [nextQuery, setNextQuery] = useState<{
    idx?: number;
  } | null>(null);

  const { data, isLoading } = useQuery<
    AxiosResponse,
    AxiosError,
    Omit<TArtImageResponse, "nextRevisionDateIdx">
  >(
    CACHE_KEYS.search(filter, category, query, nextQuery?.idx),
    () =>
      filter === "address"
        ? getSearchedByAddress(query, category, nextQuery?.idx)
        : getSearchedByName(query, category, nextQuery?.idx),
    {
      onSuccess(data) {
        setSearchedArt((prev) => [...prev, ...data.artImageResponses]);
      }
    }
  );
  return {
    data,
    isLoading,
    setNextQuery
  };
};

export default useSearchGalleryByFilter;
