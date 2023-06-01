import styled from "@emotion/styled";
import React, { useState } from "react";
import Comment from "../Comment";
import { FaRegComment } from "react-icons/fa";
import { Modal } from "antd";
import useGetComments from "../../hooks/useGetComments";
import useIdFromParam from "../../../Art/hooks/useIdFromParam";
import { useInView } from "react-intersection-observer";
import LoaderView from "../../../../component/Common/Loader/View";

const CommentsView = () => {
  const { ref, inView } = useInView();

  // FIXME: VSC 패턴에 맞게 고쳐야함
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const postId = useIdFromParam();
  const { comments, fetchNextPage, isFetchingNextPage } =
    useGetComments(postId);

  const handleOpenCreateModal = () => {
    setOpen(true);
  };

  const handleCreate = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCreateCancel = () => {
    setOpen(false);
  };

  const CreateModalFooter = (
    <>
      <PopupButton onClick={handleCreateCancel}>취소</PopupButton>
      <PopupButton onClick={handleCreate}>작성하기</PopupButton>
    </>
  );

  return (
    <Container>
      <Divider />
      <CommentInfoContainer>
        <CommentInfo>
          <FaRegComment />
          <p>3</p>
          <button onClick={handleOpenCreateModal}>댓글 작성</button>
        </CommentInfo>
        <Modal
          title="댓글 작성하기"
          width={500}
          open={open}
          centered
          onOk={handleOpenCreateModal}
          confirmLoading={confirmLoading}
          onCancel={handleCreateCancel}
          footer={CreateModalFooter}
        >
          <TextArea cols={10} rows={5} wrap="virtual" autoFocus />
        </Modal>
      </CommentInfoContainer>
      {/* FIXME: select 함수로 추출하기 */}
      {comments?.pages[0].data.map((it) => (
        <Comment key={it.id} />
      ))}
      {isFetchingNextPage ? <LoaderView /> : <div ref={ref}></div>}
    </Container>
  );
};

export default CommentsView;

const Container = styled.div``;

const Divider = styled.div`
  border: solid 1px #ececec;
`;

const CommentInfoContainer = styled.div`
  padding: 1rem 2rem;
`;

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  column-gap: 0.5rem;

  button {
    margin-left: 0.5rem;
    font-size: 1rem;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
  }
`;

const TextArea = styled.textarea`
  margin-top: 1rem;
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
