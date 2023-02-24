import { useQuery } from "@tanstack/react-query";
import { TThumbnail } from "../../pages/Home/Gallery/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { getImages } from "../../services/image";

const useGetThumbnails = () => {
  const { data: thumbnails, isLoading } = useQuery(
    [...CACHE_KEYS.images],
    () => getImages(),
    {
      staleTime: 500,
      select: (data) => data.data
    }
  );
  return { thumbnails, isLoading };
};

export default useGetThumbnails;
