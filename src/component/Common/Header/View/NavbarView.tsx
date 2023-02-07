import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { INavbarProps } from "../types";

const NavbarView = ({ titles }: INavbarProps) => {
  return (
    <MenuList>
      {titles.map((title, idx) => {
        return (
          <MenuItem key={idx}>
            <ItemLink to={`/${title.toLowerCase()}`}>{title}</ItemLink>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default NavbarView;

export const MenuList = styled.ul`
  width: 300px;
  margin: 0.3rem;
  display: flex;
  @media screen and (max-width: 480px) {
    position: fixed;
    left: -20px;
    top: 4.5rem;
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    z-index: 1000;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;

  padding-right: 2rem;
  margin-right: 0.5rem;
  transition: all ease-in 0.5s;
  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 2rem;

    background-color: white;
    border-bottom: 1px solid black;
  }
`;

export const ItemLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  @media screen and (max-width: 480px) {
    color: black;
  }
`;
