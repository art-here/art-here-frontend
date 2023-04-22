import { atom } from "recoil";
import {
  TArtImageResponse,
  TCategories,
  TCatgorizedArts
} from "../pages/Home/Gallery/types";

export const searchedArts = atom<TArtImageResponse[`artImageResponses`]>({
  key: "searchedArts",
  default: []
});

export const galleryArts = atom<TArtImageResponse[`artImageResponses`]>({
  key: "galleryArts",
  default: []
});

export const userCategory = atom<TCategories>({
  key: "userCategory",
  default: "전체"
});
