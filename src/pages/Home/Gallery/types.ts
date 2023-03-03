export interface IThumbNailProps {
  imageURL: string;
  artName: string;
}

export type TGalleryProps = {
  thumbnails?: TThumbnail[];
  isLoading: boolean;
};

export type THomeImage = {
  id?: number;
  artName: string;
  imageURL: string;
};

export type TArtImageResponse = {
  artImageResponses: TThumbnail[];
  hasNext: boolean;
  nextIdx: number;
  nextRevisionDateIdx: string;
};
export type TThumbnail = {
  id: number;
  artName: string;
  imageURL: string;
};
