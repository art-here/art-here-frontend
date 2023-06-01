import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewLike } from "../../../services/review";
import CACHE_KEYS from "../../../services/cacheKeys";

export function useLike(id: number) {
  const queryClient = useQueryClient();

  const { mutate: onLike } = useMutation(() => reviewLike(id), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(CACHE_KEYS.review);
    },
    onError: (error) => {
      // FIXME: TOAST로 바꾸기
      console.log("좋아요 실패하였습니다.");
    }
  });

  return { onLike };
}
