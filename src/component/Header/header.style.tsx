import { Link } from "react-router-dom";
import styled from "styled-components";

export const SHeaderLayout = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 1.2rem;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  background-color: black;
`;

export const SLogoLink = styled(Link)`
  color: black;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    position: absolute;
    left: 7rem;
  }
`;

export const SLogo = styled.h1`
  margin: 0;
  height: 4rem;
  padding: 0.8rem;
  font-size: 3.5rem;
  border-radius: 40%;
  background-color: #fff;
`;

export const SBarLayout = styled.div`
  display: flex;
`;
