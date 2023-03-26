import { useLocation } from "react-router-dom";
import { TProperyForSearch } from "../../component/Searcher/types";
import Gallery from "../Home/Gallery";
import useSearchGalleryByFilter from "../../hooks/Search/useSearchGallery";
import { TImagesRes } from "../Home/Gallery/GalleryHOC";

const SearchGallery = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const filter = params.get("filter") as TProperyForSearch;
  const query = params.get("query") as string;

  const { thumbnailsAll, data, isLoading, setNextQuery } =
    useSearchGalleryByFilter(filter, query);

  const imagesRes: TImagesRes = {
    thumbnailsAll,
    data,
    isLoading,
    setNextQuery
  };

  return <Gallery {...imagesRes} />;
};

export default SearchGallery;
