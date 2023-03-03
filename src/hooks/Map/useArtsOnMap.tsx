import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { TArtOnMap } from "../../pages/Home/Gallery/types";
import { TUserLatLng } from "../../pages/Home/Map/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { getArtsOnMap } from "../../services/map";

const useArtsOnMap = (userLocation: TUserLatLng) => {
  const { data: arts } = useQuery<
    AxiosResponse<TArtOnMap[], unknown>,
    AxiosError,
    TArtOnMap[]
  >(CACHE_KEYS.map, () => getArtsOnMap(userLocation), {
    select: (data) => data.data
  });
  return arts;
};

export default useArtsOnMap;
