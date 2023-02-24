import { useQuery } from "@tanstack/react-query";
import { TThumbnail } from "../../pages/Home/Gallery/types";
import CACHE_KEYS from "../../services/cacheKeys";
import { getArtInfo } from "../../services/map";

const useArtInfo = (id: number) => {
  const { data, isLoading } = useQuery(
    [...CACHE_KEYS.map, id],
    () => getArtInfo(id),
    { select: (data) => data.data }
  );
  return data;
};

export default useArtInfo;
