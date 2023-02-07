import styled from "@emotion/styled";

const OverlayView = () => {
  return <Container> Ovelay </Container>;
};

export default OverlayView;

export const Container = styled.div`
  width: 200px;
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
