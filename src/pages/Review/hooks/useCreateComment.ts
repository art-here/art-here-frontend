import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../../../services/review";
import CACHE_KEYS from "../../../services/cacheKeys";

type TCommentParams = {
  postId: number;
  newComment: { content: string };
};

type TMutationFn = (params: TCommentParams) => Promise<void>;

const mutationFn: TMutationFn = async ({ postId, newComment }) => {
  await createComment(postId, newComment);
};

const useCreateComment = () => {
  const queryClient = useQueryClient();

  const { mutate: onCreateComment } = useMutation(
    (params: TCommentParams) => mutationFn(params),
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
