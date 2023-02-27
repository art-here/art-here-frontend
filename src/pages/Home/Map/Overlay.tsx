import OverlayView from "./View/OverlayView";
import useArtInfo from "../../../hooks/Map/useArtInfo";
import { TOverlayProps } from "./types";

const Overlay = ({ art, onCloseOverlay }: TOverlayProps) => {
  useArtInfo(art.id);

  const overlayProps: TOverlayProps = {
    onCloseOverlay,
    art
  };
  return <OverlayView {...overlayProps} />;
};

export default Overlay;
