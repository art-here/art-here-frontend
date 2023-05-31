import api from "../api";

export const getArtSatisfaction = async (id: number) => {
  return api.get("api/satisfaction/list", {
    params: {
      id
    }
  });
};
