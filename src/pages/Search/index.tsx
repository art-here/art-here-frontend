import { useLocation } from "react-router-dom";
import { TOptioinForSearch } from "../../component/Searcher/types";
import Gallery from "../Home/Gallery/GalleryHOC";
import useSearchGalleryByFilter from "../../hooks/Search/useSearchGallery";

import { useRecoilValue } from "recoil";
import { searchedArts, userCategory } from "../../store/gallery";
import { TGalleryProps } from "../Home/Gallery/types";

const SearchGallery = () => {
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

  const thumbnails = useRecoilValue(searchedArts);
  const SearchGalleryProps: TGalleryProps = {
    data,
    isLoading,
    setNextQuery,
    thumbnails
  };

  return <Gallery {...SearchGalleryProps} />;
};

export default SearchGallery;
