import useGetUserLocation from "../../../hooks/useGetUserLocation";
import { IMapProps } from "./types";
import MapView from "./View";

const Map = () => {
  const { userLatLng } = useGetUserLocation();

  const MapProps: IMapProps = {
    userLatLng
  };

  return <MapView {...MapProps} />;
};

export default Map;
