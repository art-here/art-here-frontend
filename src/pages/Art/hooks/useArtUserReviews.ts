import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";
import { TArtUserReviewsParams } from "../ArtReviews/types";
import { getArtUserReviews } from "../../../services/art/userReviews";

const useGetArtUserReviews = ({
  id,
  sortingLike,
  cursor
}: TArtUserReviewsParams) => {
  const { data: artUserReviews } = useQuery(
    CACHE_KEYS.artUserReviews(id, sortingLike, cursor),
    () => getArtUserReviews({ id, sortingLike, cursor })
  );

  return artUserReviews;
};

export default useGetArtUserReviews;
