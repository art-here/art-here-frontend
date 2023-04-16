import { useEffect, useState } from "react";
import { TUserLatLng } from "../pages/Home/Map/types";

const useGetUserLocation = () => {
  const [userLatLng, setUserLatLng] = useState<TUserLatLng>(initialLocation);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

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

  return { userLatLng, setUserLatLng, isLoading };
};

export default useGetUserLocation;

const initialLocation = {
  lat: 33.450701,
  lng: 126.570667
};
