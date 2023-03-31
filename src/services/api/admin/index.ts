import { TArt } from "./../../../types/gallery";
import api from "..";
import { TViewArt } from "../../../types/gallery";
import {
  ADMIN_ART_API,
  ADMIN_IMAGE_UPLOAD
} from "../../../constants/admin/api";

export const createArt = (art: TArt) => {
  return api.post<null, TViewArt>(ADMIN_ART_API, art);
};

export const editArt = (id: string, art: TArt) => {
  return api.patch<null>(ADMIN_ART_API, art, {
    params: {
      id
    }
  });
};

export const deleteArt = (id: string) => {
  return api.delete<null>(ADMIN_ART_API, {
    params: {
      id
    }
  });
};

export const imageUpload = () => {
  return api.get(ADMIN_IMAGE_UPLOAD);
};
