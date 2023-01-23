import React, { useEffect } from "react";
import useGetUserLocation from "./useGetUserLocation";

const { kakao } = window;

export default function useMakeMap() {
  const { userLatLng } = useGetUserLocation();
  useEffect(() => {
    const position = new kakao.maps.LatLng(
      userLatLng.latitude,
      userLatLng.longitude
    );
    const container = document.getElementById("kakaoMap");
    const options = {
      center: position,
      levvel: 3
    };

    const map = new kakao.maps.Map(container, options);
    const marker = new kakao.maps.Marker({
      position
    });
    marker.setMap(map);
  }, [userLatLng]);
}
