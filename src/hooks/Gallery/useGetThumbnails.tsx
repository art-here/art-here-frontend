import { useQuery } from "@tanstack/react-query";
import { TArtImageResponse } from "../../pages/Home/Gallery/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { getImages } from "../../services/image";
import { useState } from "react";
import { PER_PAGE } from "../../constants";
import { useRecoilState } from "recoil";
import { galleryArts } from "../../store/gallery";

const useGetThumbnails = () => {
  const [categorized, setCategorized] = useRecoilState(galleryArts);

  const [nextQuery, setNextQuery] = useState<{
    nextRevisionDateIdx?: string;
    nextIdx: number;
  } | null>(null);

  const { data, isLoading } = useQuery<
    AxiosResponse,
    AxiosError,
    TArtImageResponse
  >(
    [
      ...CACHE_KEYS.images,
      nextQuery?.nextRevisionDateIdx,
      categorized.categoryName
    ],
    () => {
      return getImages(
        PER_PAGE,
        nextQuery?.nextRevisionDateIdx,
        nextQuery?.nextIdx,
        categorized.categoryName
      );
    },
    {
      staleTime: 2000,
      onSuccess(data) {
        setCategorized((prev) => {
          return {
            ...prev,
            categorizedArts: [
              ...prev.categorizedArts,
              ...data.artImageResponses
            ]
          };
        });
      }
    }
  );

  return {
    data,
    isLoading,
    setNextQuery
  };
};

export default useGetThumbnails;
