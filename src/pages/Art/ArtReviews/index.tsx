import { useState } from "react";
import ArtReviewsView from "./View";
import { IArtReviewsProps } from "./types";
import { TUserProfile } from "../../../services/auth/types";

const ArtReviews = ({
  artId
}: {
  artId: number;
  user?: TUserProfile | null;
}) => {
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
