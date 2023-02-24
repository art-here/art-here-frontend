import styled from "@emotion/styled";
import { TOverlayProps } from "../Overlay";

const OverlayView = ({ art, onCloseOverlay }: TOverlayProps) => {
  const { artName, imageURL } = art;
  return (
    <Container>
      <CloseButton onClick={onCloseOverlay}>X</CloseButton>
      <Title>{artName}</Title>
      <Thumbnail src={imageURL} alt={artName} />
    </Container>
  );
};

export default OverlayView;

export const Container = styled.div`
  display: flex;
  height: 100px;
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
  height: 80px;
  border-radius: 10px;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 8px;
  width: 10px;
  height: 10px;
  color: white;
  font-size: 2px;
  text-align: center;
  background-color: black;
  border-radius: 100%;
`;

export const Title = styled.h3`
  max-width: 50px;
  white-space: pre-line;
  font-size: 12px;
  margin: 8px 0 5px 10px;
`;
