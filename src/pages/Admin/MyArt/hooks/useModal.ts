import Modal from "antd/es/modal";
import { Dispatch, useEffect, useState } from "react";
import useDeleteAdminArt from "../../../../hooks/Admin/useDeleteAdminArt";

const useModal = (
  setImage: Dispatch<React.SetStateAction<ArrayBuffer | null>>
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { confirm } = Modal;

  useEffect(() => {
    setImage(null);
  }, [isModalOpen]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { onDeleteArt } = useDeleteAdminArt();

  const onDeleteConfirm = (id: string) => {
    confirm({
      title: "정말로 삭제하시겠습니까?",
      okText: "네",
      okType: "danger",
      cancelText: "아니요",
      onOk() {
        onDeleteArt(id);
        // FIXME:토스트 띄우기
        console.log("삭제 되었습니다.");
      }
    });
  };

  return {
    isModalOpen,
    setIsModalOpen,
    onDeleteConfirm,
    handleOk,
    handleCancel
  };
};

export default useModal;
