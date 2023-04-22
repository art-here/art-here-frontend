import { useRecoilValue } from "recoil";
import Gallery from ".";
import useGetThumbnails from "../../../hooks/Gallery/useGetThumbnails";
import { galleryArts } from "../../../store/gallery";
import { TImagesRes } from "./types";

const GalleryHOC = () => {
  const thumbnailsAll = useRecoilValue(galleryArts);
  const { data, isLoading, setNextQuery } = useGetThumbnails();
  const imagesRes: TImagesRes = {
    thumbnailsAll: thumbnailsAll,
    data,
    isLoading,
    setNextQuery
  };

  return <Gallery {...imagesRes} />;
};

export default GalleryHOC;
