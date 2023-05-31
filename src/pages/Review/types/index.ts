export type TReview = {
  content: string;
  likeCount: number;
  dislikeCount: number;
  createDate: Date;
  revisionDate: Date;
  likeState: boolean;
  dislikeState: boolean;
  writer: {
    id: number;
    name: string;
    profile: string;
  };
};

export type TReviews = TReview[];

export interface IReviewProps {
  review?: TReview;
}
