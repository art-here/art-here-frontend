import React, { useEffect, useState } from "react";

export default function useGetUserLocation() {
  const [userLatLng, setUserLatLng] = useState(initialLocation);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    } else {
      //TODO: 위치 정보를 찾을 수 없습니다 알람
      console.log("위치 정보를 찾을 수 없습니다");
    }
  }, []);

  return { userLatLng, setUserLatLng };
}

const initialLocation = {
  lat: 33.450701,
  lng: 126.570667
};
