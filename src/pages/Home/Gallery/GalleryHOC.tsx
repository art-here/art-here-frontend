import React from "react";
import Gallery from ".";
import useGetThumbnails from "../../../hooks/Gallery/useGetThumbnails";
import { TArtImageResponse, TThumbnail } from "./types";

export type TImagesRes = {
  thumbnailsAll: TThumbnail[];
  data?: TArtImageResponse;
  isLoading: boolean;
  setNextQuery: React.Dispatch<
    React.SetStateAction<
      { nextRevisionDateIdx?: string; nextIdx: number } | undefined
    >
  >;
};

const GalleryHOC = () => {
  const { thumbnailsAll, data, isLoading, setNextQuery } = useGetThumbnails();

  const imagesRes: TImagesRes = {
    thumbnailsAll,
    data,
    isLoading,
    setNextQuery
  };

  return <Gallery {...imagesRes} />;
};

export default GalleryHOC;
