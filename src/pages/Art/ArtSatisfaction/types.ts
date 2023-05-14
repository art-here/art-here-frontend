export interface IArtRateProps {
  isModalOpen: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  FillStars: JSX.Element[];
  EmptyStars: JSX.Element[];
}
