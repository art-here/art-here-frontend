import React, { useEffect } from "react";
import useGetImages from "../../../hooks/Gallery/useGetImages";
import { TGalleryProps } from "./types";
import GalleryView from "./View";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  // TODO: 사용할 데이터 외부에서 주입하기. (default data, searched data)
  const { data, isLoading, setNextQuery, allImages } = useGetImages();
  const { ref: intObserver, inView } = useInView({ threshold: 0.3 });

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
    thumbnails: allImages,
    isLoading
  };

  return <GalleryView {...GalleryProps} ref={intObserver} />;
};

export default Gallery;
