import { TThumbnail } from "../Gallery/types";

export interface IMapProps {
  selected?: TThumbnail;
  arts?: TThumbnail[];
  userLatLng: TUserLatLng;
  isUserLocationLoading: boolean;
  isOverlayOpen: boolean;
  onClickMarker: (id: number) => void;
  onCloseOverlay: () => void;
  ArtContent?: TArtInfoResponse;
}

export interface IMyLocationProps {
  userLatLng: TUserLatLng;
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

export type TArtInfoResponse = TArtInfo | { default: string } | undefined;

export type TArtInfo = {
  id: number;
  artName: string;
  roadAddress: string;
  authorName: string;
  agency: string;
  info: string;
};
