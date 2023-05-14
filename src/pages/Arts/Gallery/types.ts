import { CATEGORIES } from "../../../constants/categories";

export type IThumbNailProps = {
  imageURL: string;
  artName: string;
};

export type TImagesRes = {
  isSearchGallery?: boolean;
  data?: TArtImageResponse;
  isLoading: boolean;
  setNextQuery:
    | React.Dispatch<
        React.SetStateAction<{
          date?: string;
          idx?: number;
        } | null>
      >
    | React.Dispatch<
        React.SetStateAction<{
          idx?: number;
        } | null>
      >;
  thumbnailsAll?: TThumbnail[];
};

export type TGalleryProps = {
  data?: TArtImageResponse;
  thumbnails?: TThumbnail[];
  isLoading: boolean;
  hasNext?: boolean;
  setNextQuery:
    | React.Dispatch<
        React.SetStateAction<{
          date?: string;
          idx?: number;
        } | null>
      >
    | React.Dispatch<
        React.SetStateAction<{
          idx?: number;
        } | null>
      >;
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
  nextRevisionDateIdx?: string;
};

export type TCatgorizedArts = {
  categoryName: TCategories;
  categorizedArts: TArtImageResponse[`artImageResponses`];
};

export type TThumbnail = {
  id: number;
  artName: string;
  imageURL: string;
};

export type TArtOnMap = {
  latitude: number;
  longitude: number;
} & TThumbnail;

export type TCategories = (typeof CATEGORIES)[number];
