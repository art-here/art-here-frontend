import { useRecoilValue } from "recoil";
import Gallery from ".";
import useGetThumbnails from "../../../hooks/Gallery/useGetThumbnails";
import { galleryArts } from "../../../store/gallery";
import { useEffect } from "react";
import { TGalleryProps } from "./types";

const GalleryHOC = () => {
  const thumbnails = useRecoilValue(galleryArts);

  const { data, isLoading, setNextQuery, refetch } = useGetThumbnails();
  const GalleryHOCProps: TGalleryProps = {
    thumbnails,
    data,
    isLoading,
    setNextQuery
  };

  useEffect(() => {
    if (thumbnails.length === 0) {
      refetch();
    }
  }, []);

  return <Gallery {...GalleryHOCProps} />;
};

export default GalleryHOC;
