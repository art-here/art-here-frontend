import styled from "@emotion/styled";
import { TOverlayProps } from "../types";
import { Link } from "react-router-dom";

const OverlayView = ({ art, onCloseOverlay }: TOverlayProps) => {
  const { artName, imageURL, id } = art;
  return (
    <Container>
      <CloseButton onClick={onCloseOverlay}>X</CloseButton>
      <Link to={`/arts/${id}`}>
        <Title>{artName}</Title>
        <Thumbnail src={imageURL} alt={artName} />
      </Link>
    </Container>
  );
};

export default OverlayView;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 120px;
  height: max-content;
  padding: 4px;
  font-size: 14px;
  color: black;
  border: 1px solid black;
  border-radius: 12px;
  background-color: white;
  transform: scale(1.1);
  box-sizing: border-box;
`;

export const Thumbnail = styled.img`
  display: block;
  margin: 5px;
  width: 100px;
  border-radius: 10px;
`;

export const CloseButton = styled.div`
  position: absolute;
  padding: 1px;
  right: 8px;
  width: 10px;
  height: 10px;
  color: white;
  font-size: 4px;
  text-align: center;
  background-color: black;
  border-radius: 100%;
`;

export const Title = styled.h3`
  width: fit-content;
  white-space: pre-line;
  font-size: 12px;
  font-weight: 700;
  margin: 8px 0 5px 10px;
`;
