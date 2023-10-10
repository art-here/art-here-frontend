import styled from "@emotion/styled";
import { Button, Progress } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "antd";
import {
  IArtRateProps,
  T_SATISFACTION_BAD,
  T_SATISFACTION_GOOD
} from "../types";
import {
  SATISFACTION_BAD,
  SATISFACTION_GOOD
} from "../../../../constants/art/satisfaction";

const ArtSatisfactionView = ({
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
}: IArtRateProps) => {
  return (
    <Container>
      <GoodRate>
        <h3>😃 좋았어요</h3>
        {satisfactionItems.goods.map((good, idx) => (
          <RateItem key={`good-${idx}`}>
            <Label>{good.satisfaction}</Label>
            <Progress
              format={(percent) => percent}
              percent={good.count * 10}
              size="default"
              strokeColor="#44cdff"
            />
          </RateItem>
        ))}
      </GoodRate>
      <BadRate>
        <h3>🥲 아쉬웠어요</h3>
        {satisfactionItems.bads.map((bad, idx) => (
          <RateItem key={`bad-${idx}`}>
            <Label>{bad.satisfaction}</Label>
            <Progress
              format={(percent) => percent}
              percent={bad.count * 10}
              size="default"
              strokeColor="#ff5555"
            />
          </RateItem>
        ))}
      </BadRate>

      <ButtonBox>
        <BtnLabel>만족도 남기기</BtnLabel>
        <RateModalBtn onClick={showModal}>
          <AiOutlinePlus />
        </RateModalBtn>
      </ButtonBox>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        cancelText="취소"
        okText="완료"
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={isEditMode ? handleEdit : handleAdd}
          >
            {isEditMode ? "수정 완료" : "작성 완료"}
          </Button>,
          <Button key="create-review">리뷰도 남기기</Button>
        ]}
      >
        <Inner>
          <div className="modal-top">Art Name에 대한 만족도 작성 중...</div>
          <div className="modal-content">
            <div className="modal-stars">
              {FillStars}
              {EmptyStars}
            </div>
            <div className="modal-hashTag">
              <div className="hashTag-container">
                <h6 className="hashTag-title">😃 좋았어요</h6>
                <ul className="hashTag-inner">
                  {SATISFACTION_GOOD.map((goodTag, idx) => (
                    <li
                      key={`${goodTag}-${idx}`}
                      className="hashTag good"
                      onClick={(e) =>
                        handleSelectTag(e, goodTag as T_SATISFACTION_GOOD)
                      }
                    >
                      {goodTag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hashTag-container">
                <h6 className="hashTag-title">🥲 아쉬웠어요</h6>
                <ul className="hashTag-inner">
                  {SATISFACTION_BAD.map((badTag, idx) => (
                    <li
                      key={`${badTag}-${idx}`}
                      className="hashTag bad"
                      onClick={(e) =>
                        handleSelectTag(e, badTag as T_SATISFACTION_BAD)
                      }
                    >
                      {badTag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Inner>
      </Modal>
    </Container>
  );
};

export default ArtSatisfactionView;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 300px;
  gap: 40px;
  border-bottom: 1px solid lightgray;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem 0;
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 2rem 0;
    flex-wrap: wrap;
    max-width: 480px;
  }
`;

const GoodRate = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 250px;

  h3 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  ${({ theme }) => theme.media.tablet} {
    max-width: 50%;
  }

  ${({ theme }) => theme.media.mobile} {
    max-width: 80%;
  }
`;

const RateItem = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
`;
const Label = styled.label`
  margin-right: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  padding-bottom: 0.3rem;
`;

const BadRate = styled(GoodRate)``;

const RateModalBtn = styled.button`
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
  right: 1rem;
  top: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80px;
  ${({ theme }) => theme.media.mobile} {
    right: 0rem;
    width: 50px;
  }
`;

const BtnLabel = styled(Label)`
  color: lightgray;
  margin-right: 0;
  margin-bottom: 0.3rem;
  font-size: 0.8rem;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const Inner = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  .modal-top {
    width: 96%;
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
    .modal-stars {
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      margin-bottom: 0.5rem;
      font-size: 2rem;
      .stars.selected {
        color: red;
      }
      .stars {
        color: lightgray;
        cursor: pointer;
      }
      .stars.hover {
        color: red;
      }
    }
    .modal-hashTag {
      display: flex;
      .hashTag-container {
        padding-left: 1rem;
        padding-right: 1rem;
        width: 50%;
        :nth-last-of-type(1) {
          border-left: 1px dotted lightgray;
        }
      }
      .hashTag-title {
        padding: 0.5rem 0 1rem;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        color: black;
      }
      .hashTag-inner {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .hashTag {
          cursor: pointer;
          margin-right: 0.2rem;
          margin-bottom: 0.2rem;
          padding: 0.2rem;
          border: 1px dotted lightgray;
          border-radius: 10px;
        }
        .hashTag.good:hover {
          border: 1px solid #44cdff;
        }
        .hashTag.good.selected {
          font-weight: bold;
          color: white;
          background-color: #44cdff;
          border: 1px solid skyblue;
        }
        .hashTag.bad:hover {
          border: 1px solid #ff5555;
        }
        .hashTag.bad.selected {
          font-weight: bold;
          color: white;
          background-color: #ff5555;
          border: 1px solid #ff5555;
        }
      }
    }
  }
`;
