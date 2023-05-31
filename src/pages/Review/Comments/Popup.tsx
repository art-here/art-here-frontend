import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "antd/es/modal/Modal";

const Popup = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOpenEditModal = () => {
    setEditOpen(true);
  };

  const handleOpenDeleteModal = () => {
    setDeleteOpen(true);
  };

  const handleEditCancel = () => {
    setEditOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteOpen(false);
  };

  const handleEdit = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setEditOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleDelete = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setDeleteOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const EditModalFooter = (
    <>
      <PopupButton onClick={handleEditCancel}>취소</PopupButton>
      <PopupButton onClick={handleEdit}>수정하기</PopupButton>
    </>
  );

  const DeleteModalFooter = (
    <>
      <PopupButton onClick={handleDeleteCancel}>취소</PopupButton>
      <PopupButton onClick={handleDelete}>삭제하기</PopupButton>
    </>
  );

  return (
    <>
      <Container>
        <button onClick={handleOpenEditModal}>수정하기</button>
        <span> | </span>
        <button onClick={handleOpenDeleteModal}>삭제하기</button>
      </Container>
      <Modal
        title="댓글 수정하기"
        width={500}
        open={editOpen}
        centered
        onOk={handleEdit}
        confirmLoading={confirmLoading}
        onCancel={handleEditCancel}
        footer={EditModalFooter}
      >
        <TextArea cols={10} rows={5} wrap="virtual" autoFocus />
      </Modal>
      <Modal
        title="정말 삭제하시겠습니까?"
        width={500}
        open={deleteOpen}
        centered
        onOk={handleDelete}
        confirmLoading={confirmLoading}
        onCancel={handleDeleteCancel}
        footer={DeleteModalFooter}
      ></Modal>
    </>
  );
};

export default Popup;

const Container = styled.div`
  display: flex;
  row-gap: 4px;
  span {
    color: lightgray;
  }
  button {
    &:hover {
      color: gray;
    }
  }
`;

const TextArea = styled.textarea`
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  width: 100%;
  border: 1px solid #ececec;
`;

const PopupButton = styled.button`
  border: 1px solid #ececec;
  padding: 0.5rem;
  &:hover {
    background-color: black;
    color: white;
  }
  border-radius: 4px;
`;
