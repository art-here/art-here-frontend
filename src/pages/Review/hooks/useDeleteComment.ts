import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "../../../services/review";
import CACHE_KEYS from "../../../services/cacheKeys";

type TMutationFn = (commentId: number) => Promise<void>;

const mutationFn: TMutationFn = async (commentId) => {
  await deleteComment(commentId);
};

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const { mutate: onDeleteComment } = useMutation(
    (commentId: number) => mutationFn(commentId),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(CACHE_KEYS.comments);
      },
      onError: (error) => {
        // FIXME: TOAST로 바꾸기
        console.log("댓글 삭제에 실패하였습니다.");
      }
    }
  );
  return { onDeleteComment };
};

export default useDeleteComment;
