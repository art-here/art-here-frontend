import { atom } from "recoil";
import {
  TArtImageResponse,
  TCatgorizedArts
} from "../pages/Home/Gallery/types";

export const searchedArts = atom<TArtImageResponse[`artImageResponses`]>({
  key: "searchedArts",
  default: []
});

export const galleryArts = atom<TCatgorizedArts>({
  key: "galleryArts",
  default: { categoryName: "전체", categorizedArts: [] }
});
