import { TArtOnMap, TThumbnail } from "../Gallery/types";

export type TMapProps = {
  clickedArt?: TArtOnMap;
  arts?: TArtOnMap[];
  userLatLng: TUserLatLng;
  isUserLocationLoading: boolean | null;
  isOverlayOpen: boolean;
  onMoveMarker: (userLatLng: TUserLatLng) => void;
  onClickMarker: (id: number) => void;
  onCloseOverlay: () => void;
};

export interface IMyLocationProps {
  userRoadAddress: string;
}

export type TUserLatLng = {
  lat: number;
  lng: number;
};

export type TOverlayArt = {
  id: number;
  artName: string;
  imageURL: string;
  latitude: number;
  longitude: number;
};

export type TArtInfo = {
  id: number;
  artName: string;
  roadAddress: string;
  authorName: string;
  agency: string;
  info: string;
};

export type TArtInfoProps = {
  artId: number;
};

export type TOverlayProps = {
  art: TThumbnail;
  onCloseOverlay: () => void;
};
