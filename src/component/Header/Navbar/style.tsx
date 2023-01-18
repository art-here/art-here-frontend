import { Link } from "react-router-dom";
import styled from "styled-components";

export const SMenu = styled.ul`
  width: 300px;
  margin: 0.3rem;
  display: flex;
`;

export const SMenuItem = styled.li`
  display: flex;
  justify-content: center;

  padding-right: 2rem;
  margin-right: 0.5rem;
  transition: all ease-in 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;

export const SMenuItemLink = styled(Link)`
  color: white;
  font-size: 18px;
`;
