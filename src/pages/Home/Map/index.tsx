import useArtsOnMap from "../../../hooks/Map/useArtsOnMap";
import useGetUserLocation from "../../../hooks/useGetUserLocation";
import { TMapProps, TUserLatLng } from "./types";
import MapView from "./View";
import { useEffect, useState } from "react";

const Map = () => {
  const {
    isLoading: isUserLocationLoading,
    userLatLng,
    setUserLatLng
  } = useGetUserLocation();

  const { arts, refetchArtsOnMap } = useArtsOnMap({
    userLocation: userLatLng,
    isUserLocationLoading
  });
  const [ArtId, setArtId] = useState<number>(0);
  const clickedArt = arts?.filter((art) => art.id === ArtId)[0];

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const onCloseOverlay = () => {
    setIsOverlayOpen(false);
    setArtId(0);
  };

  const onClickMarker = (id: number) => {
    setArtId(id);
    setIsOverlayOpen(true);
  };

  const onMoveMarker = (userLatLng: TUserLatLng) => {
    setUserLatLng(userLatLng);
    refetchArtsOnMap();
  };

  useEffect(() => {
    setArtId(0);
  }, []);

  const MapProps: TMapProps = {
    clickedArt,
    arts,
    userLatLng,
    isUserLocationLoading,
    isOverlayOpen,
    onClickMarker,
    onCloseOverlay,
    onMoveMarker
  };
  return <MapView {...MapProps} />;
};

export default Map;
