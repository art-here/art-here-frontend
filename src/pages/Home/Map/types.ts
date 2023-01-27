export interface IMapProps {
  userLatLng: TUserLatLng;
}

export interface IMyLocationProps {
  userLatLng: TUserLatLng;
}

export type TUserLatLng = {
  lat: number;
  lng: number;
};
