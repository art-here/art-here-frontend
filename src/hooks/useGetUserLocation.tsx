import { useState } from "react";
import { TUserLatLng } from "../pages/Home/Map/types";
import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../services/cacheKeys";
import { getUserAddress } from "../services/map";

const useGetUserLocation = () => {
  const [userLatLng, setUserLatLng] = useState<TUserLatLng>(initialLocation);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { data: userRoadAddress } = useQuery(
    [...CACHE_KEYS.address, userLatLng],
    () => getUserAddress(userLatLng),
    {
      enabled: userLatLng !== initialLocation
    }
  );

  return {
    userLatLng,
    setUserLatLng,
    isLoading,
    setIsLoading,
    userRoadAddress
  };
};

export default useGetUserLocation;

const initialLocation = {
  lat: 33.450701,
  lng: 126.570667
};
