import api from "../api";

import { TReview } from "../../pages/Review/types";
import {
  TComment,
  TComments,
  TCommentsResponse
} from "../../pages/Review/Comments/types";
import { TResponse } from "../../types/types";

export const getReview = (id: number) => {
  return api.get<null, TReview>("/api/posts", {
    params: {
      id
    }
  });
};

export const reviewLike = (postId: number) => {
  return api.post<void>("/api/like", {
    params: {
      postId
    }
  });
};

export const reviewDislike = (postId: number) => {
  return api.post<void>("/api/dislike", {
    params: {
      postId
    }
  });
};

export const getComments = (postId: number, page: number) => {
  return api.get<null, TCommentsResponse>(`/api/posts/${postId}/comments`, {
    params: {
      page,
      size: 3,
      sort: "revisionDate,desc"
    }
  });
};

export const createComment = (postId: number, comment: { content: string }) => {
  return api.post<void>(`/api/posts/${postId}/comments`, comment);
};

export const editComment = (
  commentId: number,
  comment: Pick<TComment, "content">
) => {
  return api.put<void>(`/api/comments/${commentId}`, comment);
};

export const deleteComment = (commentId: number) => {
  return api.delete<void>(`/api/comments/${commentId}`);
};
