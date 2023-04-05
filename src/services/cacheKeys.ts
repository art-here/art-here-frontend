import { TProperyForSearch } from "../component/Searcher/types";

const CACHE_KEYS = {
  images: ["images"],
  map: ["map"],
  art: ["art"],

  // FIXME: 검색어 있으면
  adminArt: (currentPage: number, search?: string) => [
    "adminArt",
    currentPage,
    search
  ],
  search: (filter: TProperyForSearch, query: string, nextIdx?: number) => [
    "search",
    filter,
    query,
    nextIdx
  ],
  signup: ["signup"]
};

export default CACHE_KEYS;
