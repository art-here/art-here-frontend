import { useQuery } from "@tanstack/react-query";
import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { getImages } from "../../services/image";
import { useState } from "react";
import { PER_PAGE } from "../../constants";

const useGetImages = () => {
  const [allImages, setAllImages] = useState<
    TArtImageResponse[`artImageResponses`]
  >([]);
  const [nextQuery, setNextQuery] = useState<{
    nextRevisionDateIdx: string;
    nextIdx: number;
  }>();
  const { data, isLoading } = useQuery<
    AxiosResponse,
    AxiosError,
    TArtImageResponse
  >(
    [...CACHE_KEYS.images, nextQuery?.nextRevisionDateIdx],
    () => {
      return getImages(
        PER_PAGE,
        nextQuery?.nextRevisionDateIdx,
        nextQuery?.nextIdx
      );
    },
    {
      staleTime: 500,
      onSuccess(data) {
        setAllImages((prev) => [...prev, ...data.artImageResponses]);
      }
    }
  );

  return { data, isLoading, setNextQuery, allImages };
};

export default useGetImages;