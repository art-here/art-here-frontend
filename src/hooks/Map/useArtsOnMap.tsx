import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { TArtOnMap } from "../../pages/Home/Gallery/types";
import { TUserLatLng } from "../../pages/Home/Map/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { getArtsOnMap } from "../../services/map";

interface ArtsOnMapProps {
  userLocation: TUserLatLng;
  isUserLocationLoading: boolean | null;
}

const useArtsOnMap = ({
  userLocation,
  isUserLocationLoading
}: ArtsOnMapProps) => {
  const { data: arts } = useQuery<
    AxiosResponse<TArtOnMap[], unknown>,
    AxiosError,
    TArtOnMap[]
  >([...CACHE_KEYS.map, userLocation], () => getArtsOnMap(userLocation), {
    enabled: !isUserLocationLoading
  });
  return { arts };
};

export default useArtsOnMap;
