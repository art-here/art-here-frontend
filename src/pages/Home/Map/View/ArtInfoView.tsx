import styled from "@emotion/styled";

const ArtInfoView = () => {
  return (
    <Container>
      <h2>청계 광장 소라 기둥</h2>
      <h3> 서울 중구 태평로1가 1</h3>
      <p>
        청계광장은 서울 종로구 서린동 14-1에 위치한 서울특별시의 청계천에 딸린
        작은 광장이자, 청계천의 발원지이다. 인근에는 동아일보사옥과
        서울특별시청이 있다. 2016년 10월 29일에는 박근혜 대통령 퇴진 운동의
        제1차 촛불집회가 이곳에서 열리기도 했다
      </p>
    </Container>
  );
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
