import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewDislike } from "../../../services/review";
import CACHE_KEYS from "../../../services/cacheKeys";

export function useDislike(id: number) {
  const queryClient = useQueryClient();

  const { mutate: onDisLike } = useMutation(() => reviewDislike(id), {
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
