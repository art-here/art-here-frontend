import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import { TOTAL_STARS } from "../../../constants/art/rate";
import ArtSatisfactionView from "./View";
import { IArtRateProps, T_SATISFACTION_TAG } from "./types";
import useArtCountAndRating from "../hooks/useArtCountAndRating";
import getSortedSatisfaction from "../../../utils/getSortedSatisfaction";
import {
  useCreateUserSatisfaction,
  useEditUserSatisfaction,
  useGetUserSatisfaction
} from "../hooks/useUserSatisfaction";
import { TUserProfile } from "../../../services/auth/types";
import { toast } from "react-toastify";

const ArtSatisfaction = ({
  artId,
  user
}: {
  artId: number;
  user?: TUserProfile | null;
}) => {
  const artCountAndRating = useArtCountAndRating(artId);
  const satisfactionItems = artCountAndRating?.satisfactionsCount
    ? getSortedSatisfaction(artCountAndRating.satisfactionsCount)
    : { goods: [], bads: [] };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);
  const [selectedTags, setSelectedTags] = useState<T_SATISFACTION_TAG[]>([]);

  const userSatisfaction = useGetUserSatisfaction(artId, isModalOpen);
  const createUserSatisfaction = useCreateUserSatisfaction(artId, user?.id);
  const editUserSatisfaction = useEditUserSatisfaction();

  const isCreateMode = !!user;
  const isEditMode = !!selectedStars || !!selectedTags;

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

  const showModal = async () => {
    if (!isCreateMode) {
      toast.error("로그인 후 사용이 가능합니다");
      return;
    }
    setIsModalOpen(true);
    if (userSatisfaction) {
      const { starRating, satisfactions } = userSatisfaction;
      setSelectedStars(starRating === null ? 0 : starRating);
      setSelectedTags(satisfactions);
    }
  };

  const handleAdd = () => {
    // TODO: validate 추가해야함
    createUserSatisfaction!.mutate({
      artsId: artId,
      starRating: selectedStars,
      satisfactions: selectedTags
    });
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    // TODO: validate 추가(변경된 사항이 있는지)
    editUserSatisfaction.mutate({
      artsId: artId,
      starRating: selectedStars,
      addSatisfactions: [],
      deleteSatisfactions: []
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSelectTag = (
    e: React.MouseEvent<HTMLLIElement>,
    tag: T_SATISFACTION_TAG
  ) => {
    e.currentTarget.classList.toggle("selected");
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((prevTag) => prevTag !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  const ArtRateProps: IArtRateProps = {
    isModalOpen,
    isEditMode,
    isCreateMode,
    showModal,
    handleAdd,
    handleEdit,
    handleCancel,
    handleSelectTag,
    FillStars,
    EmptyStars,
    satisfactionItems
  };

  return <ArtSatisfactionView {...ArtRateProps} />;
};

export default ArtSatisfaction;
