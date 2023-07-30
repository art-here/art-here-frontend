import { useState } from "react";
import ArtReviewsView from "./View";
import { IArtReviewsProps } from "./types";
import useGetArtUserReviews from "../hooks/useArtUserReviews";

const ArtReviews = ({ artId }: { artId: number }) => {
  const [sortingLike, setSortingLike] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const artUserReviews = useGetArtUserReviews({ id: artId, sortingLike });

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
    setSortingLike((prev) => !prev);
  };

  const ArtReviewProps: IArtReviewsProps = {
    isModalOpen,
    artUserReviews,
    showModal,
    handleSorting,
    handleOk,
    handleCancel
  };
  return <ArtReviewsView {...ArtReviewProps} />;
};

export default ArtReviews;
