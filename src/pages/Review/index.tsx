import ReviewView from "./View";
import useGetReview from "./hooks/useGetReview";
import useIdFromParam from "../Art/hooks/useIdFromParam";
import { IReviewProps } from "./types";

const Review = () => {
  const userId = useIdFromParam();
  const { review } = useGetReview(userId);

  const ReviewProps: IReviewProps = {
    review
  };

  return <ReviewView {...ReviewProps} />;
};

export default Review;
