import styled from "@emotion/styled";
import { Progress } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

const ArtRateView = () => {
  return (
    <Container>
      <GoodRate>
        <h3>😃 좋았어요</h3>
        {["좋아1", "좋아2", "좋아3", "좋아4", "좋아5"].map((item) => (
          <RateItem>
            <Label>{item}</Label>
            <Progress
              format={(percent) => percent}
              percent={30}
              size="default"
              strokeColor="#44cdff"
            />
          </RateItem>
        ))}
      </GoodRate>
      <BadRate>
        <h3>🥲 아쉬웠어요</h3>
        {["아쉬워1", "아쉬워2", "아쉬워3", "아쉬워4", "아쉬워5"].map((item) => (
          <RateItem>
            <Label>{item}</Label>
            <Progress
              format={(percent) => percent}
              percent={60}
              size="default"
              strokeColor="#ff5555"
            />
          </RateItem>
        ))}
      </BadRate>

      <ButtonBox>
        <BtnLabel>만족도 남기기</BtnLabel>
        <RateModalBtn>
          <AiOutlinePlus />
        </RateModalBtn>
      </ButtonBox>
    </Container>
  );
};

export default ArtRateView;

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
