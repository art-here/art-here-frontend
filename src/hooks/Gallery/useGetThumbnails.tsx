import { useQuery } from "@tanstack/react-query";
import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { getImages } from "../../services/image";
import { useState } from "react";
import { PER_PAGE } from "../../constants";
import { useSetRecoilState } from "recoil";
import { galleryArts } from "../../store/gallery";

const useGetThumbnails = () => {
  const setGalleryArts = useSetRecoilState(galleryArts);
  const [nextQuery, setNextQuery] = useState<{
    nextRevisionDateIdx?: string;
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
      select: (data) => data.data,
      onSuccess(data) {
        setGalleryArts((prev) => [...prev, ...data.artImageResponses]);
      }
    }
  );

  return { data, isLoading, setNextQuery };
};

export default useGetThumbnails;
