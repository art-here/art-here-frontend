import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { TOTAL_STARS } from "../../../constants/art/rate";
import ArtSatisfactionView from "./View";
import { IArtRateProps } from "./types";
import useArtSatisfaction from "../hooks/useArtSatisfaction";
import getSortedSatisfaction from "../../../utils/getSortedSatisfaction";

const ArtSatisfaction = ({ artId }: { artId: number }) => {
  const artCountAndRating = useArtSatisfaction(artId);

  const satisfactionItems = artCountAndRating?.satisfactionsCount
    ? getSortedSatisfaction(artCountAndRating.satisfactionsCount)
    : { goods: [], bads: [] };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);

  const FillStars = Array.from({ length: selectedStars }, (_, idx) => (
    <AiFillStar
      key={`fill-${idx}`}
      className="stars selected"
      onClick={() => setSelectedStars(idx + 1)}
    />
  ));

  const EmptyStars = Array.from(
    { length: TOTAL_STARS - selectedStars },
    (_, idx) => (
      <AiOutlineStar
        key={`empty-${idx}`}
        className={`stars ${idx < hoveredStars ? "hover" : ""}`}
        onMouseEnter={() => {
          setHoveredStars(idx + 1);
        }}
        onMouseLeave={() => setHoveredStars(0)}
        onClick={() => {
          setSelectedStars((prev) => prev + hoveredStars);
          setHoveredStars(0);
        }}
      />
    )
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const ArtRateProps: IArtRateProps = {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    FillStars,
    EmptyStars,
    satisfactionItems
  };

  return <ArtSatisfactionView {...ArtRateProps} />;
};

export default ArtSatisfaction;