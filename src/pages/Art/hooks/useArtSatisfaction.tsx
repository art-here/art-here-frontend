import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";
import { AxiosError, AxiosResponse } from "axios";
import { TArtCountAndRating } from "../types";
import { getArtCountAndRating } from "../../../services/art/satisfaction";

const useArtCountAndRating = (id?: number) => {
  if (!id) return;

  const { data: artCountAndRating } = useQuery<
    AxiosResponse,
    AxiosError,
    TArtCountAndRating
  >(CACHE_KEYS.satisfaction(id), () => getArtCountAndRating(id));

  return artCountAndRating;
};

export default useArtCountAndRating;
