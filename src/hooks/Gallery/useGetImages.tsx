import { useQuery } from "@tanstack/react-query";
import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { getImages } from "../../services/image";

const useGetImages = () => {
  // TODO: useInfiniteQuery로 바꾸기
  const { data, isLoading } = useQuery<
    AxiosResponse,
    AxiosError,
    TArtImageResponse
  >([...CACHE_KEYS.images, 1], () => getImages(), {
    staleTime: 500,
    select: (data) => data.data
  });
  return { data, isLoading };
};

export default useGetImages;
