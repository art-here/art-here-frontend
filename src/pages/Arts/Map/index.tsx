import { useQueryClient } from "@tanstack/react-query";
import useArtsOnMap from "../../../hooks/Map/useArtsOnMap";
import useGetUserLocation from "../../../hooks/useGetUserLocation";
import { TMapProps, TUserLatLng } from "./types";
import MapView from "./View";
import { useEffect, useState } from "react";
import CACHE_KEYS from "../../../services/cacheKeys";

const Map = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: isUserLocationLoading,
    setIsLoading,
    userLatLng,
    setUserLatLng,
    userRoadAddress
  } = useGetUserLocation();
  const { arts } = useArtsOnMap({
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
    queryClient.invalidateQueries(CACHE_KEYS.address);
    queryClient.invalidateQueries(CACHE_KEYS.map);
  };

  useEffect(() => {
    setArtId(0);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLatLng({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLoading(false);
        },
        console.error,
        { timeout: 10000, enableHighAccuracy: true }
      );
    }
  }, []);

  const MapProps: TMapProps = {
    clickedArt,
    arts,
    userLatLng,
    userRoadAddress,
    isUserLocationLoading,
    isOverlayOpen,
    onClickMarker,
    onCloseOverlay,
    onMoveMarker
  };
  return <MapView {...MapProps} />;
};

export default Map;
