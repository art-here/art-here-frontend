import { useLocation } from "react-router-dom";
import { TOptioinForSearch } from "../../component/Searcher/types";
import Gallery from "../Home/Gallery/GalleryHOC";
import useSearchGalleryByFilter from "../../hooks/Search/useSearchGallery";

import { useRecoilValue } from "recoil";
import { searchedArts, userCategory } from "../../store/gallery";
import { TImagesRes } from "../Home/Gallery/types";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import CACHE_KEYS from "../../services/cacheKeys";

const SearchGallery = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const filter = params.get("filter") as TOptioinForSearch;
  const query = params.get("query") as string;

  const category = useRecoilValue(userCategory);

  const { data, isLoading, setNextQuery } = useSearchGalleryByFilter(
    filter,
    query,
    category
  );

  const thumbnailsAll = useRecoilValue(searchedArts);
  const imagesRes: TImagesRes = {
    data,
    isLoading,
    setNextQuery,
    thumbnailsAll
  };

  return <Gallery {...TImagesRes} />;
};

export default SearchGallery;
