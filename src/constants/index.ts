import { TPROPERTIES_SEARCH } from "../component/Searcher/types";

export const WELCOME_RENDER_TIME = 2000;

export const MENU_TITLE = ["Agora", "Suggest", "Reference"];

export const PROPERTIES_SEARCH: TPROPERTIES_SEARCH[] = [
  { property: "artName", propertyTitle: "작품 이름으로 검색" },
  { property: "oldAddress", propertyTitle: "옛 주소로 검색" },
  { property: "roadAddress", propertyTitle: "도로명 주소로 검색" }
];

export const ACCESS_TOKEN = "accessToken";
export const USER_ID = "userId";

export const BASE_AUTH_URL =
  "http://ec2-54-180-163-64.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/google ";

export const PER_PAGE = 9;
