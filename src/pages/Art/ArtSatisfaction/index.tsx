import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";

const ArtSatisfaction = ({ artId }: { artId: number }) => {
  const client = useQueryClient();
  const user = {
    id: 1
  };

  const artCountAndRating = useArtCountAndRating(artId);
  const satisfactionItems = artCountAndRating?.satisfactionsCount
    ? getSortedSatisfaction(artCountAndRating.satisfactionsCount)
    : { goods: [], bads: [] };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);
  const [selectedTags, setSelectedTags] = useState<T_SATISFACTION_TAG[]>([]);
  const [editedTags, setEditedTags] = useState<{
    add: T_SATISFACTION_TAG[];
    delete: T_SATISFACTION_TAG[];
  }>({
    add: [],
    delete: []
  });

  const userSatisfaction = useGetUserSatisfaction(artId, isModalOpen);
  const createUserSatisfaction = useCreateUserSatisfaction(artId, user?.id);
  const editUserSatisfaction = useEditUserSatisfaction(artId, user?.id);

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
    const me = client.getQueryData(CACHE_KEYS.me);
    console.log(me);

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

  const findTagChanges = () => {
    if (!userSatisfaction?.satisfactions) {
      return;
    }
    for (let i = 0; i < userSatisfaction.satisfactions.length; i++) {
      if (!selectedTags.includes(userSatisfaction.satisfactions[i]))
        setEditedTags((prev) => {
          return {
            ...prev,
            delete: [...prev.delete, userSatisfaction.satisfactions[i]]
          };
        });
    }

    for (let i = 0; i < selectedTags.length; i++) {
      if (!userSatisfaction.satisfactions.includes(selectedTags[i]))
        setEditedTags((prev) => {
          return {
            ...prev,
            add: [...prev.add, selectedTags[i]]
          };
        });
    }
  };

  const handleEdit = () => {
    findTagChanges();
    editUserSatisfaction!.mutate({
      artsId: artId,
      starRating: selectedStars,
      addSatisfactions: editedTags.add,
      deleteSatisfactions: editedTags.delete
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
