import { atom } from "recoil";
import { TArtImageResponse } from "../pages/Home/Gallery/types";

export const searchedArts = atom<TArtImageResponse[`artImageResponses`]>({
  key: "search",
  default: []
});

export const galleryArts = atom<TArtImageResponse[`artImageResponses`]>({
  key: "gallery",
  default: []
});
