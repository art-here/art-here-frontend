import styled from "@emotion/styled";
import { FaUserCircle } from "react-icons/fa";
import { IUserbarProps } from "../types";

const UserbarView = ({ onAuthOpen }: IUserbarProps) => {
  return (
    <Container>
      <FaUserCircle size={30} color={"white"} onClick={onAuthOpen} />\
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
