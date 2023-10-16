import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";
import { useRecoilValue } from "recoil";
import useGetThumbnails from "../../../hooks/Gallery/useGetThumbnails";
import { galleryArts } from "../../../store/gallery";
import { TImagesRes } from "./types";
import Gallery from ".";

const GalleryLayout = () => {
  const queryClient = useQueryClient();
  const thumbnailsAll = useRecoilValue(galleryArts);
  const { data, isLoading, setNextQuery } = useGetThumbnails();
  const imagesRes: TImagesRes = {
    thumbnailsAll: thumbnailsAll,
    data,
    isLoading,
    setNextQuery
  };

  useEffect(() => {
    if (thumbnailsAll.length === 0) {
      setNextQuery(null);
      queryClient.invalidateQueries(CACHE_KEYS.images("전체"));
    }
  }, []);

  return <Gallery {...imagesRes} />;
};

export default GalleryLayout;
