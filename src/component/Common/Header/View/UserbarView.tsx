import styled from "@emotion/styled";
import { FaUserCircle } from "react-icons/fa";
import { IUserbarProps } from "../types";

const UserbarView = ({
  isUserMenuOpen,
  onAuthOpen,
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
        <FaUserCircle size={30} color={"white"} onClick={onAuthOpen} />
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
  width: 200px;
  height: 100px;
  background-color: #fff;
  border-radius: 12px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000;
  }

  li:hover {
    background-color: #000;
    color: #fff;
  }
`;
