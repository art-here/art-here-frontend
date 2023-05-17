import { useState } from "react";
import ArtReviewsView from "./View";
import { IArtReviewsProps } from "./types";

const ArtReviews = ({ artId }: { artId: number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const ArtReviewProps: IArtReviewsProps = {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel
  };
  return <ArtReviewsView {...ArtReviewProps} />;
};

export default ArtReviews;
