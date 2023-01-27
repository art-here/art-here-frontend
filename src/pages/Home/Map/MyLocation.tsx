import useGetUserLocation from "../../../hooks/useGetUserLocation";
import { IMyLocationProps } from "./types";
import MyLocationView from "./View/MyLocationView";

export default function MyLocation() {
  const { userLatLng } = useGetUserLocation();
  const MyLocationProps: IMyLocationProps = {
    userLatLng
  };

  return <MyLocationView {...MyLocationProps} />;
}
