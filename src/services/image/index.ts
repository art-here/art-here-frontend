import api from "../api";

export const getImages = (pageParam = 0, limit = 9) => {
  return api.get("/image/media", {
    params: {
      offset: pageParam,
      limit
    }
  });
};
