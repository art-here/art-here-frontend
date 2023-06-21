import { useMutation, useQueryClient } from "@tanstack/react-query";
import { decreaseLike } from "../../../services/review";
import CACHE_KEYS from "../../../services/cacheKeys";

export function useDisLike(id: number) {
  const queryClient = useQueryClient();

  const { mutate: onDisLike } = useMutation(() => decreaseLike(id), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(CACHE_KEYS.review(id));
    },
    onError: (error) => {
      // FIXME: TOAST로 바꾸기
      console.log("좋아요 실패하였습니다.");
    }
  });

  return { onDisLike };
}
