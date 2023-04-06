import { TAdminArt, TArt } from "../../types/types";
import api from "../api";
import { TViewArt } from "../../types/types";
import { ADMIN_ART_API, ADMIN_IMAGE_UPLOAD } from "../../constants/admin/api";

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

export const getAdminArt = (page: number, size: number) => {
  // FIXME: Json서버에 있는거 고치기
  return api.get<null, TAdminArt>(ADMIN_ART_API, {
    params: {
      page,
      size
    }
  });
  // return api.get<null, TAdminArt>(`http://localhost:3000/artData`, {
  //   params: {
  //     page,
  //     size
  //   }
  // });
};
