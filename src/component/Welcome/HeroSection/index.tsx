import styled from "@emotion/styled";
import React from "react";
import Image from "/assets/images/background.jpg";

const HeroSection = () => {
  return (
    <Container>
      <Background>
        <Title>
          <h2>SHARE YOUR ART</h2>
        </Title>
        <ImageBackground src={Image} />
      </Background>
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
  height: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.div`
  position: absolute;

  h2 {
    font-family: ${(props) => props.theme.fonts.ShadowsIntoLight};
    font-size: 8rem;
    color: whitesmoke;

    ${({ theme }) => theme.media.laptop} {
      font-size: 6rem;
    }
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
