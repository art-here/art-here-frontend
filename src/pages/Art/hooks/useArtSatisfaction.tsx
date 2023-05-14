import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";
import { getArtSatisfaction } from "../../../services/art/satisfaction";

const useArtSatisfaction = (id?: number) => {
  if (!id) return;

  const { data: artSatisfaction } = useQuery(CACHE_KEYS.satisfaction(id), () =>
    getArtSatisfaction(id)
  );

  return artSatisfaction;
};

export default useArtSatisfaction;
