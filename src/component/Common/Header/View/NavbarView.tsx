import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { INavbarProps } from "../types";
import { theme } from "../../../../styles/theme";

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
  margin: 0.3rem;
  display: flex;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  padding-right: 2rem;
  margin-right: 0.5rem;
  @media (max-width: 1024px) {
    padding-right: 1rem;
  }
`;

export const ItemLink = styled(Link)`
  padding-left: 0.5rem;
  color: white;
  text-decoration: none;

  font-family: ${(props) => props.theme.fonts.ShadowsIntoLight};
  font-weight: 600;

  /* border-radius: 2px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff; */
  :hover {
    color: ${(props) => props.theme.colors.point};
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;
