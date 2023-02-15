import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CACHE_KEYS } from "../../../services/cacheKeys";
import { getImages } from "../../../services/image";
import { TGalleryProps } from "./types";
import GalleryView from "./View";

const Gallery = () => {
  const { data } = useQuery(CACHE_KEYS.images, () => getImages(), {
    staleTime: 500,
    select: (data) => data.data
  });
  const GalleryProps: TGalleryProps = {
    data
  };

  return <GalleryView {...GalleryProps} />;
};

export default Gallery;
