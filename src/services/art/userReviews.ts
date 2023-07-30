import { TArtUserReviewsParams } from "../../pages/Art/ArtReviews/types";
import api from "../api";

export const getArtUserReviews = async ({
  id,
  sortingLike,
  cursor
}: TArtUserReviewsParams): Promise<ArtUserReviewsResponse> => {
  const sorting = sortingLike ? "like" : null;

  return api.get("api/posts/list", {
    params: {
      id,
      sorting,
      cursor
    }
  });
};

export type TPostInfo = {
  id: number;
  imageURL: string;
  like: number;
  name: string;
  title: string;
};

export type ArtUserReviewsResponse = {
  cursor: number | null;
  postInfo: TPostInfo[];
};
