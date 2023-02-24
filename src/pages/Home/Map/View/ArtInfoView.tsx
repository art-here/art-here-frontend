import styled from "@emotion/styled";
import { TArtInfo } from "../types";

const ArtInfoView = ({ artInfo }: { artInfo?: TArtInfo }) => {
  if (artInfo) {
    return (
      <Container>
        <h2>{artInfo.artName}</h2>
        <h3> {artInfo.roadAddress}</h3>
        <p>{artInfo.info}</p>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>주변의 작품을 선택해보세요 😀</h2>
      </Container>
    );
  }
};

export default ArtInfoView;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 420px;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid black;
  box-sizing: border-box;
  color: white;
  background-color: black;

  @media (max-width: 480px) {
    width: 95%;
    margin: 1rem auto;
    height: fit-content;
  }

  h2 {
    font-weight: 700;
    margin-left: 0.5rem;
    margin-bottom: 0.1rem;
    text-align: left;
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
    border-bottom: 1px solid white;
  }

  p {
    padding: 0.3rem;
    text-align: left;
  }
`;
