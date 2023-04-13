import styled from "@emotion/styled";
import { IUserbarProps } from "../types";
import { Link } from "react-router-dom";

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
        <StartButton to="signup">시작하기</StartButton>
      )}
    </Container>
  );
};

export default UserbarView;

const Container = styled.span`
  margin-right: 1rem;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    position: absolute;
    right: 0;
  }
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

const StartButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
