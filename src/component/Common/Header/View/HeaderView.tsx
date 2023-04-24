import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Userbar from "../Userbar";

const HeaderView = () => {
  return (
    <Container>
      <Inner>
        <LogoLink to={"/"}>
          <Logo>Art here</Logo>
        </LogoLink>
        <BarContainer>
          <Navbar />
          <Userbar />
        </BarContainer>
      </Inner>
    </Container>
  );
};

export default HeaderView;

const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 6rem;
  box-sizing: border-box;
  background-color: #000;
  /* background: rgb(232, 168, 231);
  background: linear-gradient(
    90deg,
    rgba(232, 168, 231, 1) 0%,
    rgba(128, 188, 242, 1) 67%,
    rgb(0, 212, 255) 100%
  ); */

  @media (max-width: 480px) {
    min-width: 385px;
  }

  @media (max-width: 1024px) {
    height: 4rem;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1080px;
  @media (max-width: 1024px) {
  }
`;

const Logo = styled.h1`
  margin: 0 2rem;
  width: 100%;
  height: 4rem;
  padding-top: 0.5rem;
  font-size: 4.4rem;
  font-weight: 700;

  @media (max-width: 1024px) {
    margin-left: 2rem;
    height: 3rem;
    font-size: 3rem;
    min-width: 120px;
  }

  @media (max-width: 480px) {
    min-width: 30px;
    width: 130px;
    margin-left: 1rem;
    margin-right: 0;
    line-height: 1.4;
    font-size: 2.2rem;
  }
`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;

const BarContainer = styled.div`
  display: flex;
  margin-right: 2rem;
  @media (max-width: 1024px) {
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    margin: 0;
  }
`;
