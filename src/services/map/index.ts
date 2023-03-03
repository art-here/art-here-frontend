import { TUserLatLng } from "../../pages/Home/Map/types";
import api from "../api";

export const getArtsOnMap = ({ lat, lng }: TUserLatLng) => {
  return api.get("api/image/media", {
    params: {
      latitude: lat,
      longitude: lng
    }
  });
};

export const getArtInfo = (id: number) => {
  return api.get("api/art/map", {
    params: {
      id
    }
  });
};
