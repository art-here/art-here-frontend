import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { INavbarProps } from "../types";
import { Theme, theme } from "../../../../styles/theme";

const NavbarView = ({ titles }: INavbarProps) => {
  return (
    <MenuList>
      {titles.map((title, idx) => {
        return (
          <MenuItem key={idx}>
            <ItemLink to={`/${title.toLowerCase()}`} theme={theme}>
              {title}
            </ItemLink>
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

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 2rem;
    background-color: white;
    border-bottom: 1px solid black;
  }
`;

export const ItemLink = styled(Link)<{ theme: Theme }>`
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 20px;
  border-radius: 2px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  :hover {
    color: ${(props) => props.theme.colors.point};
  }
  @media screen and (max-width: 480px) {
    color: black;
  }
`;
