import { TProperyForSearch } from "../component/Searcher/types";

const CACHE_KEYS = {
  images: ["images"],
  map: ["map"],
  search: (filter: TProperyForSearch, query: string) => [
    "search",
    filter,
    query
  ]
};

export default CACHE_KEYS;
