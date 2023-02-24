import { useState } from "react";
import useArtInfo from "../../../hooks/Map/useArtInfo";
import { TThumbnail } from "../Gallery/types";
import OverlayView from "./View/OverlayView";

const Overlay = ({ art, onCloseOverlay }: TOverlayProps) => {
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
