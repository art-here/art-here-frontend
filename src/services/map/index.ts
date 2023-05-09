import axios from "axios";
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

export const getUserAddress = async (userLatLng: TUserLatLng) => {
  const res = await axios.get(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${userLatLng.lng}&y=${userLatLng.lat}&input_coord=WGS84`,
    {
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`
      }
    }
  );

  if (!!res.data.documents[0].road_address)
    return res.data.documents[0].road_address.address_name;
  return res.data.documents[0].address.address_name;
};
