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
  padding: 1.2rem 0;
  height: 5.625rem;

  box-sizing: border-box;
  background-color: #000;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 90vw;

  @media (max-width: 1024px) {
  }
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;

  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.ShadowsIntoLight};
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
`;
