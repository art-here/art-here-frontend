import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Userbar from "../Userbar";

const HeaderView = () => {
  return (
    <Container>
      <Inner>
        <LogoLink to={"/home"}>
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
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1080px;
`;

const Logo = styled.h1`
  margin: 0 2rem;
  width: 400px;
  height: 4rem;
  padding-top: 0.5rem;
  font-size: 4.4rem;
  font-weight: 700;
`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    position: absolute;
    left: 7rem;
  }
`;

const BarContainer = styled.div`
  display: flex;
  margin-right: 2rem;
`;
