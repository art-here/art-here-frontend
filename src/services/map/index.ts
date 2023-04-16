import { MAP_RADIUS } from "../../constants/map";
import { TUserLatLng } from "../../pages/Home/Map/types";
import api from "../api";

export const getArtsOnMap = ({ lat, lng }: TUserLatLng) => {
  return api.get("api/image/map", {
    params: {
      latitude: lat,
      longitude: lng,
      radius: MAP_RADIUS
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
