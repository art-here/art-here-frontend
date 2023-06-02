import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editComment } from "../../../services/review";
import CACHE_KEYS from "../../../services/cacheKeys";

type TCommentParams = {
  commentId: number;
  newComment: { content: string };
};

type TMutationFn = (params: TCommentParams) => Promise<void>;

const mutationFn: TMutationFn = async ({ commentId: postId, newComment }) => {
  await editComment(postId, newComment);
};

const useEditComment = () => {
  const queryClient = useQueryClient();

  const { mutate: onEditComment } = useMutation(
    (params: TCommentParams) => mutationFn(params),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(CACHE_KEYS.comments);
      },
      onError: (error) => {
        // FIXME: TOAST로 바꾸기
        console.log("댓글 수정에 실패하였습니다.");
      }
    }
  );
  return { onEditComment };
};

export default useEditComment;
