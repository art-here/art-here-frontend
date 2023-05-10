import { TProperyForSearch } from "../component/Searcher/types";
import { TCategories } from "../pages/Home/Gallery/types";

const CACHE_KEYS = {
  images: (category: TCategories, nextQueryDate?: string) => [
    "images",
    category,
    nextQueryDate
  ],
  map: ["map"],
  art: ["art"],
  address: ["address"],

  // FIXME: 검색어 있으면
  adminArt: (currentPage: number, sort: string, name?: string) => [
    "adminArt",
    sort,
    currentPage,
    name
  ],
  search: (
    filter: TProperyForSearch,
    category: TCategories,
    query: string,
    nextIdx?: number
  ) => ["search", filter, query, category, nextIdx],
  signup: ["signup"]
};

export default CACHE_KEYS;
