import useArtsOnMap from "../../../hooks/Map/useArtsOnMap";
import useGetUserLocation from "../../../hooks/useGetUserLocation";
import { IMapProps } from "./types";
import MapView from "./View";
import { useState } from "react";

const Map = () => {
  const { isLoading: isUserLocationLoading } = useGetUserLocation();

  const arts = useArtsOnMap({ lat: 37.587231, lng: 127.019941 });
  const [ArtId, setArtId] = useState<number>(0);
  const selected = arts?.filter((art) => art.id === ArtId)[0];

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const onCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const onClickMarker = (id: number) => {
    setArtId(id);
    setIsOverlayOpen(true);
  };

  const MapProps: IMapProps = {
    selected,
    arts,
    userLatLng: { lat: 37.587231, lng: 127.019941 },
    isUserLocationLoading,
    isOverlayOpen,
    onClickMarker,
    onCloseOverlay
  };
  return <MapView {...MapProps} />;
};

export default Map;
