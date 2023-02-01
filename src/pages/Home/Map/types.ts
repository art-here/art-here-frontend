export interface IMapProps {
  userLatLng: TUserLatLng;
  isLoading: boolean;
}

export interface IMyLocationProps {
  userLatLng: TUserLatLng;
}

export type TUserLatLng = {
  lat: number;
  lng: number;
};
