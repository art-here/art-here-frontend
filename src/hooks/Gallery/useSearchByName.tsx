import React from "react";
import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../../services/cacheKeys";
import { searchByName } from "../../services/api/gallery";
import { AxiosError, AxiosResponse } from "axios";

const useSearchByName = (name: string) => {
  const { data: ArtsByName } = useQuery([...CACHE_KEYS.images, name], () =>
    searchByName(name)
  );
  return ArtsByName;
};

export default useSearchByName;
