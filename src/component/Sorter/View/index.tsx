import styled from "@emotion/styled";
import { AiOutlinePicture } from "react-icons/ai";
import { FiMap } from "react-icons/fi";
import { ISorterProps } from "../types";

const SorterView = ({ onClickGallery, onClickMap }: ISorterProps) => {
  return (
    <Container>
      <SortItem onClick={onClickGallery}>
        <AiOutlinePicture size={24} />
      </SortItem>
      <SortItem onClick={onClickMap}>
        <FiMap />
      </SortItem>
    </Container>
  );
};

export default SorterView;

export const Container = styled.div`
  position: absolute;
  top: 10rem;
  right: 2rem;
  @media screen and (max-width: 480px) {
    right: 2rem;
  }
`;

export const SortItem = styled.span`
  padding: 1rem;
  font-size: 20px;
  border-radius: 12px;
  background-color: lightgray;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s linear;

  :hover {
    color: white;
  }
`;
