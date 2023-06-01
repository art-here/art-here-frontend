import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { createComment } from "../../../services/review";
import { TComment } from "../Comments/types";
import CACHE_KEYS from "../../../services/cacheKeys";

type TCommentParams = {
  postId: number;
  newComment: { content: string };
};

type TAddComment = (params: TCommentParams) => Promise<void>;

const addComment: TAddComment = async ({ postId, newComment }) => {
  try {
    await createComment(postId, newComment);
  } catch (err) {
    alert(err);
  }
};

const useCreateComment = () => {
  const queryClient = useQueryClient();

  const { mutate: onCreateComment } = useMutation(
    (params: TCommentParams) => addComment(params),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(CACHE_KEYS.comments);
      },
      onError: (error) => {
        // FIXME: TOAST로 바꾸기
        console.log("댓글 작성에 실패하였습니다.");
      }
    }
  );
  return { onCreateComment };
};

export default useCreateComment;
