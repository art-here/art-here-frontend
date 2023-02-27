import useGetThumbnails from "../../../hooks/Gallery/useGetThumbnails";
import { TGalleryProps } from "./types";
import GalleryView from "./View";

const Gallery = () => {
  const { thumbnails, isLoading } = useGetThumbnails();
  const GalleryProps: TGalleryProps = {
    thumbnails,
    isLoading
  };

  return <GalleryView {...GalleryProps} />;
};

export default Gallery;
