import useGetImages from "../../../hooks/Gallery/useGetImages";
import { TGalleryProps, TThumbnail } from "./types";
import GalleryView from "./View";

const Gallery = () => {
  const { data, isLoading } = useGetImages();

  const GalleryProps: TGalleryProps = {
    thumbnails: data?.artImageResponses,
    isLoading
  };

  return <GalleryView {...GalleryProps} />;
};

export default Gallery;

const initialThumbnail: TThumbnail[] = [
  { id: 0, artName: "hi", imageURL: "unknown" }
];
