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
  background-color: black;
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
  border-radius: 40%;
  color: #fff;
`;

const LogoLink = styled(Link)`
  color: black;
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
