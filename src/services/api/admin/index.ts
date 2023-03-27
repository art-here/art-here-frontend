import { TArt } from "./../../../types/gallery";
import api from "..";
import { TViewArt } from "../../../types/gallery";
import { ADMIN_API } from "../../../constants/api";

export const createArt = (art: TArt) => {
  return api.post<null, TViewArt>(ADMIN_API, art);
};

export const editArt = (id: string, art: TArt) => {
  return api.patch<null>(ADMIN_API, art, {
    params: {
      id
    }
  });
};

export const deleteArt = (id: string) => {
  return api.delete<null>(ADMIN_API, {
    params: {
      id
    }
  });
};
