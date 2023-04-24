import { useEffect } from "react";
import { TGalleryProps } from "./types";
import GalleryView from "./View";
import { useInView } from "react-intersection-observer";

const GalleryHOC = ({
  thumbnails,
  data,
  setNextQuery,
  isLoading
}: TGalleryProps) => {
  const { ref: intObserver, inView } = useInView({ threshold: 0.8 });

  const isScrolledToBottom = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    return scrollTop + clientHeight >= scrollHeight - 100;
  };

  const readyToFetchNext = isScrolledToBottom() && inView;

  const onIntersection = () => {
    if (data?.hasNext)
      setNextQuery({
        date: data.nextRevisionDateIdx,
        idx: data.nextIdx
      });
  };

  useEffect(() => {
    if (!readyToFetchNext) return;
    onIntersection();
  }, [readyToFetchNext]);

  const GalleryProps: TGalleryProps = {
    thumbnails,
    isLoading,
    hasNext: data?.hasNext,
    setNextQuery
  };

  return <GalleryView {...GalleryProps} ref={intObserver} />;
};

export default GalleryHOC;
