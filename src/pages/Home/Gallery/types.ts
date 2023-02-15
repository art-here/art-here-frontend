export interface IThumbNailProps {
  imageURL: string;
  artName: string;
}

export type TGalleryProps = {
  data?: THomeImage[];
};

export type THomeImage = {
  id?: number;
  artName: string;
  imageURL: string;
};
