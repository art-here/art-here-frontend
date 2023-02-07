import styled from "@emotion/styled";
import { IMyLocationProps } from "../types";

const MyLocationView = ({ userLatLng }: IMyLocationProps) => {
  return (
    <Container>
      현재 나의 위치는
      <span>{(userLatLng.lat, userLatLng.lng)}</span>
    </Container>
  );
};

export default MyLocationView;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: -15px;
  transform: translateX(-30px);
  padding: 2px 4px;
  font-size: 12px;
  color: white;
  border-radius: 8px;
  background-color: black;
`;
