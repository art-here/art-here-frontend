import { useRecoilValue } from "recoil";
import Gallery from ".";
import useGetThumbnails from "../../../hooks/Gallery/useGetThumbnails";
import { galleryArts } from "../../../store/gallery";
import { TImagesRes } from "./types";
import { useEffect } from "react";

const GalleryHOC = () => {
  const thumbnailsAll = useRecoilValue(galleryArts);

  const { data, isLoading, setNextQuery, refetch } = useGetThumbnails(true);
  const imagesRes: TImagesRes = {
    thumbnailsAll: thumbnailsAll,
    data,
    isLoading,
    setNextQuery
  };

  useEffect(() => {
    if (thumbnailsAll.length === 0) {
      refetch();
    }
  }, []);

  return <Gallery {...imagesRes} />;
};

export default GalleryHOC;
