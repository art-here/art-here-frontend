import { TThumbnail } from "../Gallery/types";
import OverlayView from "./View/OverlayView";
import useArtInfo from "../../../hooks/Map/useArtInfo";

const Overlay = ({ art, onCloseOverlay }: TOverlayProps) => {
  useArtInfo(art.id);

  const overlayProps: TOverlayProps = {
    onCloseOverlay,
    art
  };
  return <OverlayView {...overlayProps} />;
};

export default Overlay;

export type TOverlayProps = {
  art: TThumbnail;
  onCloseOverlay?: () => void;
};
