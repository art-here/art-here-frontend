import { useState } from "react";
import { TUserLatLng } from "../../pages/Arts/Map/types";
import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../../services/cacheKeys";
import { getUserAddress } from "../../services/map";

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

// 위치 미허용시 중심 위치 - 서울특별시청 기준 (서울 중구)
const initialLocation = {
  lat: 37.566295,
  lng: 126.977945
};
