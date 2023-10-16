import { useState } from "react";
import ArtReviewsView from "./View";
import { IArtReviewsProps } from "./types";
import useGetArtUserReviews from "../hooks/useArtUserReviews";

const ArtReviews = ({ artId }: { artId: number }) => {
  const [isSortingLike, setIsSortingLike] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const artUserReviews = useGetArtUserReviews({
    id: artId,
    sortingLike: isSortingLike
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSorting = () => {
    setIsSortingLike((prev) => !prev);
  };

  const ArtReviewProps: IArtReviewsProps = {
    isModalOpen,
    artUserReviews,
    isSortingLike,
    showModal,
    handleSorting,
    handleOk,
    handleCancel
  };
  return <ArtReviewsView {...ArtReviewProps} />;
};

export default ArtReviews;
