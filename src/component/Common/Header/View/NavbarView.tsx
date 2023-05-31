import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { INavbarProps } from "../types";
import { MENU_TITLE } from "../../../../constants";

const NavbarView = ({ titles }: INavbarProps) => {
  return (
    <MenuList>
      {titles.map((title, idx) => {
        return (
          <MenuItem key={idx}>
            {title === "Arts" ? (
              <ItemLink to={`/${title.toLowerCase()}`}>{title}</ItemLink>
            ) : (
              <Disabled>{title}</Disabled>
            )}
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
  ${({ theme }) => theme.media.mobile} {
    padding-right: 1rem;
  }
`;

export const ItemLink = styled(Link)`
  padding-left: 0.5rem;
  color: white;
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.ShadowsIntoLight};
  font-weight: 600;
  font-size: 1.2rem;

  /* border-radius: 2px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff; */
  :hover {
    color: ${(props) => props.theme.colors.point};
  }
`;

export const Disabled = styled.span`
  padding-left: 0.5rem;
  color: gray;
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.ShadowsIntoLight};
  font-weight: 600;
  font-size: 1.2rem;
`;
