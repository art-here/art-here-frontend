import { SMapLayout, SMapViewLayout } from "./MapView.style";
import MapInfo from "./MapInfo";
import MyLocation from "./MyLocation";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useGetUserLocation from "../../../hooks/useGetUserLocation";
import Overlay from "../../../component/Map/Overlay";

export default function MapView() {
  const { userLatLng, setUserLatLng } = useGetUserLocation();
  const userLocation = { lat: userLatLng.lat, lng: userLatLng.lng };
  return (
    <SMapViewLayout>
      <SMapLayout>
        <MyLocation />
        <Map
          center={userLocation}
          style={{ width: "100%", height: "100%" }}
          level={3}
          onClick={(_t, mouseEvent) => {
            setUserLatLng({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng()
            });
          }}
        >
          <MapMarker position={userLocation}>
            <Overlay />
          </MapMarker>
        </Map>
      </SMapLayout>
      <MapInfo />
    </SMapViewLayout>
  );
}
