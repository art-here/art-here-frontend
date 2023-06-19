import { TOptioinForSearch } from "../component/Searcher/types";
import { TCategories } from "../pages/Arts/Gallery/types";

const CACHE_KEYS = {
  me: ["me"],
  signup: ["signup"],

  images: (category: TCategories, nextQueryDate?: string) => [
    "images",
    category,
    nextQueryDate
  ],

  map: ["map"],
  address: ["address"],

  search: (
    filter?: TOptioinForSearch,
    category?: TCategories,
    query?: string,
    nextIdx?: number
  ) => ["search", filter, query, category, nextIdx],

  art: (id: number) => ["art", id],

  ratingAndSatisfaction: (id?: number) => ["ratingAndSatisfaction", id],

  userSatisfaction: (userId?: number, artId?: number) => [
    "artSatisfaction",
    userId,
    artId
  ],

  adminArt: ["adminArt"],

  // FIXME: 검색어 있으면
  adminArts: (currentPage: number, sort: string, name?: string) => [
    "adminArts",
    sort,
    currentPage,
    name
  ]
};

export default CACHE_KEYS;
