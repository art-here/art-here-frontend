import { useQuery } from "@tanstack/react-query";
import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { getImages } from "../../services/image";
import { useState } from "react";
import { PER_PAGE } from "../../constants";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { galleryArts, userCategory } from "../../store/gallery";

const useGetThumbnails = () => {
  const [artsOnGallery, setArtsOnGallery] = useRecoilState(galleryArts);
  const category = useRecoilValue(userCategory);

  const [nextQuery, setNextQuery] = useState<{
    date?: string;
    idx?: number;
  } | null>(null);

  const { data, isLoading, refetch } = useQuery<
    AxiosResponse,
    AxiosError,
    TArtImageResponse
  >(
    CACHE_KEYS.images(category, nextQuery?.date),
    () => {
      return getImages(PER_PAGE, nextQuery?.date, nextQuery?.idx, category);
    },
    {
      onSuccess(data) {
        setArtsOnGallery((prev) => [...prev, ...data.artImageResponses]);
      }
    }
  );

  return {
    data,
    isLoading,
    setNextQuery,
    refetch
  };
};

export default useGetThumbnails;
