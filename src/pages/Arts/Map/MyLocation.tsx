import { useQueryClient } from "@tanstack/react-query";
import { IMyLocationProps } from "./types";
import MyLocationView from "./View/MyLocationView";
import CACHE_KEYS from "../../../services/cacheKeys";

export default function MyLocation() {
  const queryClient = useQueryClient();
  const cachedAddresses = queryClient.getQueriesData(CACHE_KEYS.address);
  const userRoadAddress = cachedAddresses[
    cachedAddresses.length - 1
  ][1] as string;

  const MyLocationProps: IMyLocationProps = {
    userRoadAddress
  };

  return <MyLocationView {...MyLocationProps} />;
}
