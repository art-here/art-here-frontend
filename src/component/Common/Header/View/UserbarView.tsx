import styled from "@emotion/styled";
import { FaUserCircle } from "react-icons/fa";
import { IUserbarProps } from "../types";

const UserbarView = ({ onAuthOpen, userImage, userName }: IUserbarProps) => {
  return (
    <Container>
      {userImage && userName ? (
        <>
          <img src={userImage} />
          <span>{userName}</span>
        </>
      ) : (
        <FaUserCircle size={30} color={"white"} onClick={onAuthOpen} />
      )}
    </Container>
  );
};

export default UserbarView;

const Container = styled.span`
  display: flex;
  margin-right: 1rem;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    position: absolute;
    right: 0;

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
  }
`;
