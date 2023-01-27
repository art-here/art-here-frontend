import { IThumbNailProps } from "./types";
import ThumbnailView from "./View/ThumbnailView";

const Thumbnail = () => {
  const ThumbnailProps: IThumbNailProps = {
    photoURL: "http://picsum.photos/400/300",
    title: "sample"
  };

  return <ThumbnailView {...ThumbnailProps} />;
};

export default Thumbnail;
