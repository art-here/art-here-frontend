import { AxiosResponse } from "axios";

export interface IThumbNailProps {
  imageURL: string;
  artName: string;
}

export type TGalleryProps = {
  thumbnails?: AxiosResponse<TThumbnail[], any>;
  isLoading: boolean;
};

export type THomeImage = {
  id?: number;
  artName: string;
  imageURL: string;
};

export type TThumbnail = {
  id: number;
  artName: string;
  imageURL: string;
  latitude: number;
  longitude: number;
};
