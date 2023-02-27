import { TThumbnail } from "../../pages/Home/Gallery/types";
import { TUserLatLng } from "../../pages/Home/Map/types";
import api from "../api";

export const getArtsOnMap = ({ lat, lng }: TUserLatLng) => {
  return api.get("/image/map", {
    params: {
      latitude: lat,
      longitude: lng
    }
  });
};

export const getArtInfo = (id: number) => {
  return api.get("/art/map", {
    params: {
      id
    }
  });
};
