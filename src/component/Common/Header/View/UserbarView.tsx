import styled from "@emotion/styled";
import { IUserbarProps } from "../types";
import { Link } from "react-router-dom";
import { Theme, theme } from "../../../../styles/theme";
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
        <>
          <UserProfile onClick={onUserMenuOpen}>
            <img src={userImage} />
            <span>{userName}</span>
          </UserProfile>
          {isUserMenuOpen && (
            <UserMenu>
              <li>My Page</li>
              <li onClick={onLogout}>Logout</li>
            </UserMenu>
          )}
        </>
      ) : (
        <StartButton to="signup" theme={theme}>
          시작하기
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

const StartButton = styled(Link)<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  min-width: 50px;
  &:hover {
    color: ${(props) => props.theme.colors.point};
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
