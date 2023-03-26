import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Gallery from ".";
import useGetThumbnails from "../../../hooks/Gallery/useGetThumbnails";
import { galleryArts, searchedArts } from "../../../store/gallery";
import { TArtImageResponse, TThumbnail } from "./types";

export type TImagesRes = {
  data?: TArtImageResponse;
  isLoading: boolean;
  setNextQuery: React.Dispatch<
    React.SetStateAction<
      { nextRevisionDateIdx?: string; nextIdx: number } | undefined
    >
  >;
  thumbnailsAll?: TThumbnail[];
};

const GalleryHOC = () => {
  const thumbnailsAll = useRecoilValue(galleryArts);
  const { data, isLoading, setNextQuery } = useGetThumbnails();

  const imagesRes: TImagesRes = {
    thumbnailsAll,
    data,
    isLoading,
    setNextQuery
  };

  return <Gallery {...imagesRes} />;
};

export default GalleryHOC;
