import React from "react";
import { IThumbNailProps } from "./types";
import ThumbnailView from "./View/ThumbnailView";

const Thumbnail = React.forwardRef<HTMLImageElement, IThumbNailProps>(
  ({ artName, imageURL }, intObserver?) => {
    const ThumbnailProps: IThumbNailProps = {
      imageURL,
      artName
    };
    return <ThumbnailView {...ThumbnailProps} ref={intObserver} />;
  }
);

export default Thumbnail;
