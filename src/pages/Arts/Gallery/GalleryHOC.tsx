import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";
import { useRecoilValue } from "recoil";
import useGetThumbnails from "../../../hooks/Gallery/useGetThumbnails";

const GalleryHOC = () => {
  const queryClient = useQueryClient();
  const thumbnailsAll = useRecoilValue(galleryArts);

  const { data, isLoading, setNextQuery } = useGetThumbnails(true);
  const imagesRes: TImagesRes = {
    thumbnailsAll: thumbnailsAll,
    data,
    isLoading,
    hasNext: data?.hasNext,
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
