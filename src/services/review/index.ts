import api from "../api";

import { TReview } from "../../pages/Review/types";

export const getReview = (id: number) => {
  return api.get<null, TReview>("/api/posts", {
    params: {
      id
    }
  });
};

export const increaseLike = (postId: number) => {
  return api.post("/api/like", {
    params: {
      postId
    }
  });
};

export const decreaseLike = (postId: number) => {
  return api.post("/api/dislike", {
    params: {
      postId
    }
  });
};
