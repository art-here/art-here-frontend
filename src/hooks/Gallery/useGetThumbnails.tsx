import { useQuery } from "@tanstack/react-query";
import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { getImages } from "../../services/image";
import { useState } from "react";
import { PER_PAGE } from "../../constants";
import { galleryArts } from "../../store/gallery";
import { useRecoilState, useRecoilValue } from "recoil";

const useGetThumbnails = () => {
  const [artsOnGallery, setArtsOnGallery] = useRecoilState(galleryArts);
  const category = useRecoilValue(userCategory);

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
      onSuccess(data) {
        setArtsOnGallery((prev) => {
          return [...prev, ...data.artImageResponses];
        });
      }
    }
  );

  return { data, isLoading, setNextQuery };
};

export default useGetThumbnails;
