import { useLocation } from "react-router-dom";
import { TProperyForSearch } from "../../component/Searcher/types";
import Gallery from "../Home/Gallery";
import useSearchGalleryByFilter from "../../hooks/Search/useSearchGallery";

import { useRecoilValue } from "recoil";
import { searchedArts, userCategory } from "../../store/gallery";
import { TImagesRes } from "../Home/Gallery/types";

const SearchGallery = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const filter = params.get("filter") as TProperyForSearch;
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
    thumbnailsAll,
    isSearchGallery: true
  };

  return <Gallery {...imagesRes} />;
};

export default SearchGallery;
