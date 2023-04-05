import { TProperyForSearch } from "../component/Searcher/types";

const CACHE_KEYS = {
  images: ["images"],
  map: ["map"],
  search: (filter: TProperyForSearch, query: string, nextIdx?: number) => [
    "search",
    filter,
    query,
    nextIdx
  ],
  signup: ["signup"]
};

export default CACHE_KEYS;
