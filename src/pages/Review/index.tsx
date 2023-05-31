import ReviewView from "./View";
import useGetReview from "./hooks/useGetReview";
import useIdFromParam from "../Art/hooks/useIdFromParam";
import { IReviewProps } from "./types";
import { useLike } from "./hooks/useLike";
import { useDisLike } from "./hooks/useDisLike";

const Review = () => {
  const postId = useIdFromParam();
  const { review } = useGetReview(postId);
  const { onLike } = useLike(postId);
  const { onDisLike } = useDisLike(postId);

  const ReviewProps: IReviewProps = {
    review,
    onLike,
    onDisLike
  };

  return <ReviewView {...ReviewProps} />;
};

export default Review;
