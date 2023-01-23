import useGetUserLocation from "../../../../hooks/useGetUserLocation";
import { SLocationLayout } from "./MyLocation.style";

export default function MyLocation() {
  const { userLatLng } = useGetUserLocation();
  return (
    <SLocationLayout>
      현재 나의 위치는
      <span>{`${userLatLng.lat}, ${userLatLng.lng}`}</span>
    </SLocationLayout>
  );
}
