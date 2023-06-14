import { TSortedSatisfaction } from "../types";

export type T_SATISFACTION_TAG = T_SATISFACTION_BAD | T_SATISFACTION_GOOD;

export type T_SATISFACTION_BAD =
  | "파손됐어요"
  | "안예뻐요"
  | "지저분해요"
  | "장소랑안어울려요"
  | "불쾌해요";

export type T_SATISFACTION_GOOD =
  | "멋져요"
  | "장소랑어울려요"
  | "자연힐링"
  | "여기가포토존"
  | "재밌어요";

export interface IArtRateProps {
  isModalOpen: boolean;
  isEditMode: boolean;
  showModal: () => void;
  handleAdd: () => void;
  handleEdit: () => void;
  handleCancel: () => void;
  handleSelectTag: (
    e: React.MouseEvent<HTMLLIElement>,
    tag: T_SATISFACTION_TAG
  ) => void;
  FillStars: JSX.Element[];
  EmptyStars: JSX.Element[];
  satisfactionItems: TSortedSatisfaction;
}
