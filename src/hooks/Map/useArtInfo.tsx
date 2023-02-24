import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../../services/cacheKeys";
import { getArtInfo } from "../../services/map";
import { AxiosError, AxiosResponse } from "axios";
import { TArtInfo } from "../../pages/Home/Map/types";

const useArtInfo = (id: number) => {
  const { data, isSuccess } = useQuery<AxiosResponse, AxiosError, TArtInfo>(
    [...CACHE_KEYS.map, id],
    () => getArtInfo(id),
    {
      select: (data) => data.data
    }
  );
  return { data, isSuccess };
};

export default useArtInfo;
