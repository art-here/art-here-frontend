import { TAdminArt, TArt, TAwsInfo } from "../../types/types";
import api from "../api";
import { TViewArt } from "../../types/types";
import {
  ADMIN_ART_API,
  ADMIN_IMAGE_DELETE,
  ADMIN_IMAGE_UPLOAD
} from "../../constants/admin/api";

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

export const uploadImage = () => {
  return api.get<null, TAwsInfo>(ADMIN_IMAGE_UPLOAD);
};

export const storeImageToAWS = (url: string, image: ArrayBuffer) => {
  return api.put(url, image);
};

export const deleteImage = (path?: string) => {
  return api.get<null, TAwsInfo>(ADMIN_IMAGE_DELETE, {
    params: { image: path }
  });
};

export const deleteImageFromAWS = (url: string) => {
  return api.delete(url);
};

export const getAdminArt = (
  page: number,
  size: number,
  sort: string,
  name?: string
) => {
  return api.get<null, TAdminArt>(ADMIN_ART_API, {
    params: {
      page,
      size,
      sort,
      name
    }
  });
};
