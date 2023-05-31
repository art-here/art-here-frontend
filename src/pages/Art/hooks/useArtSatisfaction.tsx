import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";
import { getArtSatisfaction } from "../../../services/art/satisfaction";
import { AxiosError, AxiosResponse } from "axios";
import { TArtCountAndRating } from "../types";

const useArtSatisfaction = (id?: number) => {
  if (!id) return;

  const { data: artCountAndRating } = useQuery<
    AxiosResponse,
    AxiosError,
    TArtCountAndRating
  >(CACHE_KEYS.satisfaction(id), () => getArtSatisfaction(id));

  return artCountAndRating;
};

export default useArtSatisfaction;
