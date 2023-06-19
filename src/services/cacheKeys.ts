import { TOptioinForSearch } from "../component/Searcher/types";
import { TCategories } from "../pages/Arts/Gallery/types";

const CACHE_KEYS = {
  images: (category: TCategories, nextQueryDate?: string) => [
    "images",
    category,
    nextQueryDate
  ],
  map: ["map"],
  address: ["address"],
  art: (id: number) => ["art", id],

  // FIXME: 검색어 있으면
  adminArt: (currentPage: number, sort: string, name?: string) => [
    "adminArt",
    sort,
    currentPage,
    name
  ],

  search: (
    filter?: TOptioinForSearch,
    category?: TCategories,
    query?: string,
    nextIdx?: number
  ) => ["search", filter, query, category, nextIdx],

  signup: ["signup"],

  ratingAndSatisfaction: (id?: number) => ["ratingAndSatisfaction", id],

  userSatisfaction: (id?: number) => ["artSatisfaction", id]
};

export default CACHE_KEYS;
