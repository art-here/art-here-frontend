import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";
import { getReview } from "../../../services/review";

const useGetReview = (id: number) => {
  const { data: review } = useQuery(CACHE_KEYS.review, () => getReview(id), {
    onError() {
      console.log("리뷰 가져오는데 실패함");
    }
  });

  return { review };
};

export default useGetReview;
