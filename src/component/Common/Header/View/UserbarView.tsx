import styled from "@emotion/styled";
import { IUserbarProps } from "../types";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme";
const UserbarView = ({
  isUserMenuOpen,
  userImage,
  userName,
  onUserMenuOpen,
  onLogout
}: IUserbarProps) => {
  return (
    <Container>
      {userImage && userName ? (
        <UserProfile onClick={onUserMenuOpen}>
          <img src={userImage} />
          <span>{userName}</span>
          {isUserMenuOpen && (
            <UserMenu>
              <li>My Page</li>
              <li onClick={onLogout}>Logout</li>
            </UserMenu>
          )}
        </UserProfile>
      ) : (
        <StartButton to="signup" theme={theme}>
          Login
        </StartButton>
      )}
    </Container>
  );
};

export default UserbarView;

const Container = styled.span`
  margin-right: 1rem;
  cursor: pointer;
`;

const UserProfile = styled.div`
  position: relative;
  display: flex;
  img {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid white;
  }

  span {
    color: white;
  }
`;

const UserMenu = styled.ul`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  background-color: #fff;
  border-radius: 12px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #000;
  }

  li:hover {
    background-color: #000;
    color: #fff;
  }
`;

const StartButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;

  text-decoration: none;
  min-width: 50px;
  font-family: ${(props) => props.theme.fonts.ShadowsIntoLight};

  &:hover {
    color: ${(props) => props.theme.colors.point};
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
