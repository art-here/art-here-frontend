import useGetUserLocation from "../../../hooks/useGetUserLocation";
import { IMyLocationProps } from "./types";
import MyLocationView from "./View/MyLocationView";

export default function MyLocation() {
  const { userRoadAddress } = useGetUserLocation();
  const MyLocationProps: IMyLocationProps = {
    userRoadAddress
  };

  return <MyLocationView {...MyLocationProps} />;
}
