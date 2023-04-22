import { useLocation } from "react-router-dom";
import { TProperyForSearch } from "../../component/Searcher/types";
import Gallery from "../Home/Gallery";
import useSearchGalleryByFilter from "../../hooks/Search/useSearchGallery";

import { useRecoilValue } from "recoil";
import { searchedArts } from "../../store/gallery";
import { TImagesRes } from "../Home/Gallery/types";

const SearchGallery = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const filter = params.get("filter") as TProperyForSearch;
  const query = params.get("query") as string;

  const { data, isLoading, setNextQuery } = useSearchGalleryByFilter(
    filter,
    query
  );

  const thumbnailsAll = useRecoilValue(searchedArts);
  const imagesRes: TImagesRes = {
    data,
    isLoading,
    setNextQuery,
    thumbnailsAll
  };

  return <Gallery {...imagesRes} />;
};

export default SearchGallery;
