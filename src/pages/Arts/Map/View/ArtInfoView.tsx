import styled from "@emotion/styled";
import { TArtInfo } from "../types";

interface ArtInfoProps {
  isArts?: boolean;
  artInfo?: TArtInfo;
}

const ArtInfoView = ({ artInfo, isArts }: ArtInfoProps) => {
  if (!!artInfo) {
    return (
      <Container>
        <h2 className="name">{artInfo.artName}</h2>
        <h3 className="address"> {artInfo.roadAddress}</h3>
        <p className="info">{artInfo.info}</p>
        <h4 className="author">작가: {artInfo.authorName}</h4>
        <h5 className="agency">담당기관: {artInfo.agency}</h5>
      </Container>
    );
  }
  if (isArts === false) {
    return (
      <Container>
        <h6 className="notice">
          가까운 곳에 작품이 없네요. <br /> 드래그하여 마커를 옮겨 보세요!
        </h6>
      </Container>
    );
  }

  return (
    <Container>
      <h6 className="notice">주변의 작품을 선택해보세요 😀</h6>
    </Container>
  );
};

export default ArtInfoView;

const Container = styled.div`
  position: relative;
  width: 30%;
  margin: 0 auto;
  min-height: 420px;
  max-height: fit-content;
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

  .name {
    width: 90%;
    white-space: normal;
    margin-left: 0.5rem;
    margin-bottom: 0.1rem;
    color: white;
    font-weight: 700;
    text-align: left;
  }

  .address {
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    color: #888383;
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    border-bottom: 1px solid white;
  }

  .info {
    width: 100%;
    padding: 0.3rem;
    margin-bottom: 3rem;
    text-align: left;
    line-height: 1.5;

    white-space: normal;
  }

  .author {
    position: absolute;
    right: 1rem;
    bottom: 2rem;
    max-width: 80%;
    width: fit-content;
    padding: 2px 4px;
    margin: 5px;
    font-size: 14px;
    color: #000;

    white-space: normal;
    background-color: #f7ff8a;
    border-radius: 3px;
  }

  .agency {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    width: fit-content;
    padding: 2px 4px;
    margin: 5px;
    font-size: 14px;
    color: #000;
    background-color: #97e998;
    border-radius: 3px;
  }

  .notice {
    text-align: center;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    color: #d5d4d4;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.5;
  }
`;
