import React, { useEffect } from "react";
import { TGalleryProps } from "./types";
import GalleryView from "./View";
import { useInView } from "react-intersection-observer";
import { TImagesRes } from "./GalleryHOC";

const Gallery = ({
  thumbnailsAll,
  data,
  setNextQuery,
  isLoading
}: TImagesRes) => {
  const { ref: intObserver, inView } = useInView({ threshold: 0.8 });
  useEffect(() => {
    if (!window.scrollY) return;
    if (data?.hasNext) {
      setNextQuery({
        nextRevisionDateIdx: data.nextRevisionDateIdx,
        nextIdx: data.nextIdx
      });
    }
  }, [inView]);

  const GalleryProps: TGalleryProps = {
    thumbnails: thumbnailsAll,
    isLoading,
    hasNext: data?.hasNext,
    setNextQuery
  };

  return <GalleryView {...GalleryProps} ref={intObserver} />;
};

export default Gallery;
