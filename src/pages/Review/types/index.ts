import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

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
  onLike: UseMutateFunction<AxiosResponse<any, any>, unknown, void, unknown>;
  onDisLike: UseMutateFunction<AxiosResponse<any, any>, unknown, void, unknown>;
}
