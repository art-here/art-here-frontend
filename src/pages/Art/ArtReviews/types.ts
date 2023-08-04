import { ArtUserReviewsResponse } from "../../../services/art/userReviews";

export interface IArtReviewsProps {
  isModalOpen: boolean;
  isSortingLike: boolean;
  artUserReviews?: ArtUserReviewsResponse;
  showModal: () => void;
  handleSorting: () => void;
  handleOk: () => void;
  handleCancel: () => void;
}

export type TArtUserReviewsParams = {
  id: number;
  sortingLike: boolean;
  cursor?: number;
};
