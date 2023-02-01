import useGetUserLocation from "../../../hooks/useGetUserLocation";
import { IMapProps } from "./types";
import MapView from "./View";

const Map = () => {
  const { userLatLng, isLoading } = useGetUserLocation();

  const MapProps: IMapProps = {
    userLatLng,
    isLoading
  };

  return <MapView {...MapProps} />;
};

export default Map;
