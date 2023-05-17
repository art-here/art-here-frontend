import styled from "@emotion/styled";
import { Button, Progress } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "antd";
import { IArtRateProps } from "../types";

const ArtSatisfactionView = ({
  isModalOpen,
  showModal,
  handleOk,
  handleCancel,
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
          <Button key="submit" type="primary" onClick={handleOk}>
            완료
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
                <div className="hashTag-inner">
                  <span className="hashTag good selected">#멋져요</span>
                  <span className="hashTag good">#장소에 어울려요</span>
                  <span className="hashTag good">#자연친화적</span>
                  <span className="hashTag good">#여기가포토존</span>
                  <span className="hashTag good">#재밌어요</span>
                </div>
              </div>
              <div className="hashTag-container">
                <h6 className="hashTag-title">🥲 아쉬웠어요</h6>
                <div className="hashTag-inner">
                  <span className="hashTag bad selected">#파손됐어요</span>
                  <span className="hashTag bad">#안예뻐요</span>
                  <span className="hashTag bad">#지저분해요</span>
                  <span className="hashTag bad">#장소랑안어울려요</span>
                  <span className="hashTag bad">#불쾌해요</span>
                </div>
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
`;

const GoodRate = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 250px;

  h3 {
    font-weight: bold;
    margin-bottom: 0.5rem;
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
`;

const BtnLabel = styled(Label)`
  color: lightgray;
  margin-right: 0;
  margin-bottom: 0.3rem;
  font-size: 0.8rem;
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
