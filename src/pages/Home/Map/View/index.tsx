import styled from "@emotion/styled";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import MyLocation from "../MyLocation";
import Overlay from "../Overlay";
import { IMapProps } from "../types";

const MapView = ({ userLatLng }: IMapProps) => {
  return (
    <Container>
      <MapContainer>
        <MyLocation />
        <Map
          center={userLatLng}
          style={{ width: "100%", height: "100%" }}
          level={3}
        >
          <MapMarker position={userLatLng}>
            <Overlay />
          </MapMarker>
        </Map>
      </MapContainer>
    </Container>
  );
};

export default MapView;

const Container = styled.section`
  position: absolute;
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: 100%;
  top: 13rem;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const MapContainer = styled.div`
  width: 95%;
  height: 412px;
  margin: 0.5rem auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media (max-width: 480px) {
    width: 95%;
    height: 320px;
  }
  img {
    @media (max-width: 480px) {
      width: 100%;
      height: 320px;
    }
  }
`;
