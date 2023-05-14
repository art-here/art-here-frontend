import styled from "@emotion/styled";
import { AiFillStar } from "react-icons/ai";
const ArtAccountView = () => {
  return (
    <Container>
      <Thumbnail></Thumbnail>
      <Information>
        <div>
          <Title>Art Name</Title>
          <Agency>관리기관명</Agency>
          <Star>
            <AiFillStar color="red" /> 4.3
          </Star>
        </div>
        <Description>
          과거와 현재 한강을 보여주고 싶었다가 첫 번째 포인트였습니다. 과거
          한강은 자연스러운 모래사장과 그곳에서 사람들이 쉬기도 했는데 현재는
          콘크리트 바닥으로 형성되어 있는 점에서 과거와 현재 한강을 보여주고
          싶었습니다. 또한 장소가 한강이다 보니 바람의 흐름, 물의 흐름을
          보여주고 싶었고 두 개를 적절히 결합해서 돛처럼 무언가를 만들면
          좋겠다는 생각을 가지고 풍향계에서 힌트를 얻어 돛처럼 돌아가는 작품을
          기획했습니다.
        </Description>
        <Address>
          <strong>위치</strong>
          서울 용산구 양녕로 445
        </Address>
      </Information>
    </Container>
  );
};

export default ArtAccountView;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding: 1rem;
  width: 90%;
  min-height: 100px;
  height: fit-content;
  background-color: #fff;
  border-bottom: 1px solid gray;
`;

const Thumbnail = styled.image`
  display: block;
  padding: 20px;
  width: 250px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid black;
  outline: 1px solid black;
  outline-offset: 5px;
`;

const Information = styled.div`
  width: 100%;
  margin-left: 1rem;
  padding: 1rem;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
  }
`;

const Title = styled.h2`
  display: inline;
  margin: 0 1rem;
  font-weight: bold;
`;

const Agency = styled.span`
  height: 2rem;
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
  color: white;
  background-color: black;
`;

const Star = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-left: 0.5rem;
  width: 4rem;
  height: 2rem;
`;

const Description = styled.p`
  width: 100%;
  padding: 1rem 1rem 0 1rem;
  line-height: 1.5;
  white-space: normal;
`;

const Address = styled.div`
  width: 100%;
  padding-left: 0.5rem;

  strong {
    font-weight: bold;
    margin-right: 0.8rem;
    border-right: 2px solid black;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;
