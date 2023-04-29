import { useLocation } from "react-router-dom";
import { TProperyForSearch } from "../../component/Searcher/types";
import Gallery from "../Arts/Gallery";
import useSearchGalleryByFilter from "../../hooks/Search/useSearchGallery";

import { useRecoilValue } from "recoil";
import { searchedArts, userCategory } from "../../store/gallery";
import { TImagesRes } from "../Arts/Gallery/types";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import CACHE_KEYS from "../../services/cacheKeys";

const SearchGallery = () => {
  const queryClient = useQueryClient();
  const category = useRecoilValue(userCategory);
  const thumbnailsAll = useRecoilValue(searchedArts);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filter = params.get("filter") as TProperyForSearch;
  const query = params.get("query") as string;

  const { data, isLoading, setNextQuery } = useSearchGalleryByFilter(
    filter,
    query,
    category
  );

  useEffect(() => {
    if (thumbnailsAll.length === 0) {
      setNextQuery(null);
      queryClient.invalidateQueries(CACHE_KEYS.search(filter, category, query));
    }
  }, []);

  const imagesRes: TImagesRes = {
    data,
    isLoading,
    setNextQuery,
    thumbnailsAll,
    isSearchGallery: true
  };

  return <Gallery {...imagesRes} />;
};

export default SearchGallery;
