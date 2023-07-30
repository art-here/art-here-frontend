import styled from "@emotion/styled";
import ThumbnailView from "../../../Arts/Gallery/View/ThumbnailView";
import { TfiPencil } from "react-icons/tfi";
import { AiFillLike } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { IArtReviewsProps } from "../types";
import { Button, Modal } from "antd";
import UserReviews from "./UserReviews";

const ArtReviewsView = ({
  isModalOpen,
  artUserReviews,
  showModal,
  handleOk,
  handleCancel,
  handleSorting
}: IArtReviewsProps) => {
  return (
    <Container>
      <SorterBox>
        <Sorter>
          <AiFillLike />
          인기순
        </Sorter>
        <Sorter>
          <MdDashboard />
          최신순
        </Sorter>
      </SorterBox>
      <ButtonBox>
        <ReviewModalBtn onClick={showModal}>
          <TfiPencil />
        </ReviewModalBtn>
      </ButtonBox>
      {artUserReviews ? (
        <UserReviews {...artUserReviews} />
      ) : (
        <div>첫 리뷰를 작성해 보세요! </div>
      )}
      <Modal
        width="800px"
        open={isModalOpen}
        onCancel={handleCancel}
        okText="완료"
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            완료
          </Button>
        ]}
      >
        <Inner>
          <div className="modal-top">Art Name에 대한 리뷰 작성 중...</div>
          <div className="modal-content">
            <div className="post-image">
              <img
                className="image-field"
                src="/assets/images/art_default.jpeg"
              />
              <button className="image-uploader">
                <BiImageAdd />
              </button>
            </div>
            <div className="post-caption">
              <div className="caption-user">
                <img
                  className="user-image"
                  src="/assets/images/admin_default.png"
                />
                <span className="user-name">USER_NAME</span>
              </div>
              <div className="caption-text">
                <textarea
                  className="text-field"
                  placeholder="
     ▪️ 공공 미술 작품에 대한 아이디어 혹은 개선 사항
     ▪️ 작품을 보며 느낀 감정, 생각 등 

              자신만의 작품 경험을 자유롭게 써주세요 😀
                "
                />
              </div>
            </div>
          </div>
        </Inner>
      </Modal>
    </Container>
  );
};

export default ArtReviewsView;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const SorterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 1rem;
  width: 100%;
  height: 50px;
`;
const Sorter = styled.button`
  display: flex;
  width: 5rem;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
  color: gray;
  font-weight: bold;
  background-color: white;
`;
const Reviews = styled.div`
  width: 90%;
  min-height: 300px;
  height: fit-content;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  grid-auto-rows: 300px;
  grid-auto-columns: 1fr;
  box-sizing: border-box;
`;

const ReviewModalBtn = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  line-height: 1.8;
  border-radius: 50%;
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80px;
`;

const Inner = styled.div`
  width: 100%;
  padding-top: 1rem;
  .modal-top {
    width: 97%;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
  .modal-content {
    display: flex;
    .post-image {
      width: 40%;
      display: flex;
      justify-content: center;
      position: relative;
      margin-top: 1.5rem;
      padding: 0.5rem;
      .image-field {
        width: 100%;
      }
      .image-uploader {
        position: absolute;
        right: 0;
        bottom: -1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: black;
        color: white;
        font-size: 1.5rem;
        line-height: 1.8;
        border-radius: 50%;
      }
    }
    .post-caption {
      margin-top: 1.5rem;
      flex-grow: 1;
      padding-left: 2rem;
      .caption-user {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 0.5rem;
        .user-image {
          width: 40px;
          height: 40px;
        }
        .user-name {
        }
      }
      .caption-text {
        width: 100%;
        height: 80%;
        .text-field {
          width: 100%;
          height: 100%;
          padding-top: 1rem;
          font-size: 16px;
          line-height: 1.5;
          white-space: pre-wrap;
          border-top: 1px solid lightgray;
          border-bottom: 1px solid lightgray;

          ::placeholder {
            color: lightgray;
          }
        }
      }
    }
  }
`;
