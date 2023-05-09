import { T_OPTIONS_SEARCH } from "../component/Searcher/types";

export const WELCOME_RENDER_TIME = 2000;

export const MENU_TITLE = ["ART", "REVIEW"];

export const OPTIONS_SEARCH: T_OPTIONS_SEARCH[] = [
  { option: "name", optionName: "작품 이름" },
  { option: "address", optionName: "주소" }
];

export const ACCESS_TOKEN = "accessToken";
export const USER_ID = "userId";

export const BASE_AUTH_URL =
  "https://dev.art-here.site/oauth2/authorization/google";

export const PER_PAGE = 9;
