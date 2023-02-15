import api from "../api";

export const getImages = (offset = 0, limit = 10) => {
  return api.get("/image/media", {
    params: {
      offset,
      limit
    }
  });
};
