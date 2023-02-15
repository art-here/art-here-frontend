import { IThumbNailProps, THomeImage } from "./types";
import ThumbnailView from "./View/ThumbnailView";

const Thumbnail = ({ artName, imageURL }: THomeImage) => {
  const ThumbnailProps: IThumbNailProps = {
    imageURL,
    artName
  };

  return <ThumbnailView {...ThumbnailProps} />;
};

export default Thumbnail;
