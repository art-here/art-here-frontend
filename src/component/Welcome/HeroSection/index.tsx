import styled from "@emotion/styled";
import background from "/assets/images/background.jpg";
import introductionArts from "/assets/images/introduction_arts.png";
import introductionMap from "/assets/images/introduction_map.png";
import introductionReview from "/assets/images/introduction_review.png";
const HeroSection = () => {
  return (
    <Container>
      <Background>
        <Title>
          <p>내 손 안의 공공미술</p>
          <h2>SHARE YOUR ART</h2>
        </Title>
        <ImageBackground src={background} />
      </Background>
      <Content>
        <Introduction>
          <ServiceSnapShot src={introductionArts} />
          <ServiceDescription>
            <h2>서울 시내 공공미술을 둘러보세요!</h2>
            <p>
              우연히 길거리에서 보았던 작품들을 카테고리별로 나누어 작품의 작가,
              위치, 자세한 설명도 한눈에 볼 수 있어요!
            </p>
          </ServiceDescription>
        </Introduction>
        <Introduction>
          <ServiceSnapShot src={introductionMap} />
          <ServiceDescription>
            <h2>가장 가까이 있는 작품을 찾아보세요!</h2>
            <p>
              유저의 현재 위치를 중심으로 가장 가까이에 있는 미술 작품도 찾을 수
              있습니다.
            </p>
          </ServiceDescription>
        </Introduction>
        <Introduction>
          <ServiceSnapShot src={introductionReview} />
          <ServiceDescription>
            <h2>작품 만족도와 리뷰를 나누어보세요!</h2>
            <p>
              작품별로 별점도 매길 수 있고, 좋았어요-아쉬웠어요 태그를 달 수도
              있어요. 또한 자신이 직접 작품을 찍어 리뷰를 작성하고, 의견을 다른
              사용자와 공유할 수도 있답니다.
            </p>
          </ServiceDescription>
        </Introduction>
      </Content>
      <RightReserved>
        내 손 안의 공공미술, Art-here <br />
        © 2023 Team Art-here. all rights reserved. <br />
        Please contact{" "}
        <a href="https://github.com/art-here" target="_blank">
          Team Art-here
        </a>
      </RightReserved>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
`;

const Background = styled.div`
  position: relative;
  height: 80%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Content = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  min-height: 400px;
  padding-top: 120px;
  padding-bottom: 200px;
  background-color: black;

  ${({ theme }) => theme.media.tablet} {
    padding-top: 100px;
    padding-bottom: 150px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const Introduction = styled.div`
  color: whitesmoke;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;

  ${({ theme }) => theme.media.tablet} {
    flex-wrap: wrap;
    gap: 20px;
  }
  ${({ theme }) => theme.media.mobile} {
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const ServiceSnapShot = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 20px;

  ${({ theme }) => theme.media.tablet} {
    width: 300px;
  }
  ${({ theme }) => theme.media.mobile} {
    width: 300px;
  }
`;

const ServiceDescription = styled.div`
  width: 450px;
  padding: 2rem;

  h2 {
    font-size: 1.8rem;
    color: whitesmoke;
    font-weight: 800;

    ${({ theme }) => theme.media.tablet} {
      text-align: center;
      font-size: 1.6rem;
    }
    ${({ theme }) => theme.media.mobile} {
      text-align: center;
      font-size: 1.4rem;
    }
  }

  p {
    margin-top: 20px;
    white-space: normal;
    font-size: 1.2rem;
    line-height: 1.4;
    color: gray;

    ${({ theme }) => theme.media.tablet} {
      width: 100%;
      white-space: normal;
      text-align: center;
      font-size: 1rem;
    }
    ${({ theme }) => theme.media.mobile} {
      width: 100%;
      white-space: normal;
      text-align: center;
      font-size: 1rem;
    }
  }
`;

const Title = styled.div`
  position: absolute;

  p {
    color: whitesmoke;
    font-weight: 600;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.ShadowsIntoLight};
    font-size: 8rem;
    color: whitesmoke;

    ${({ theme }) => theme.media.tablet} {
      font-size: 4rem;
    }
    ${({ theme }) => theme.media.mobile} {
      font-size: 3rem;
    }
  }
`;

const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const RightReserved = styled.footer`
  padding: 80px 0 50px 100px;
  font-size: 1rem;
  line-height: 1.2;
  color: lightgray;
  background-color: #1f1f1f;

  ${({ theme }) => theme.media.tablet} {
    padding: 60px 0 30px 80px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding: 20px;
    text-align: center;
  }

  a {
    color: whitesmoke;
  }
`;
