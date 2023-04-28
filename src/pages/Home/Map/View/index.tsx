import styled from "@emotion/styled";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import ArtInfo from "../ArtInfo";
import MyLocation from "../MyLocation";
import Overlay from "../Overlay";
import ArtInfoView from "./ArtInfoView";
import { MAP_LEVEL } from "../../../../constants/map";
import { TMapProps } from "../types";
import LoaderView from "../../../../component/Common/Loader/View/index";
import MyLocationView from "./MyLocationView";

const MapView = ({
  clickedArt,
  userLatLng,
  arts,
  isUserLocationLoading,
  isOverlayOpen,
  onClickMarker,
  onCloseOverlay,
  onMoveMarker,
  userRoadAddress
}: TMapProps) => {
  return (
    <Container>
      {isUserLocationLoading ? (
        // 유저 위치 로딩 중 사용 컴포넌트
        <>
          <LoaderView />
          <ArtInfoView />
        </>
      ) : (
        <>
          <MapContainer>
            <MyLocation />
            <Map
              center={userLatLng}
              style={{ width: "100%", height: "100%" }}
              level={MAP_LEVEL["2000M"]}
              onDragEnd={(map) => {
                onMoveMarker({
                  lat: map.getCenter().getLat(),
                  lng: map.getCenter().getLng()
                });
              }}
            >
              {/* 유저 현재 위치 */}
              <MapMarker
                position={userLatLng}
                image={{
                  src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                  size: {
                    width: 28,
                    height: 36
                  }
                }}
              />

              {/* 작품 위치 */}
              {arts?.map((art) => {
                const { id, longitude, latitude } = art;
                return (
                  <MapMarker
                    key={id}
                    position={{ lat: latitude, lng: longitude }}
                    clickable={true}
                    onClick={() => onClickMarker(id)}
                  />
                );
              })}
              {clickedArt && isOverlayOpen && (
                <CustomOverlayMap
                  position={{
                    lat: clickedArt.latitude,
                    lng: clickedArt.longitude
                  }}
                >
                  <Overlay art={clickedArt} onCloseOverlay={onCloseOverlay} />
                </CustomOverlayMap>
              )}
            </Map>
          </MapContainer>
          {clickedArt ? (
            <ArtInfo artId={clickedArt.id} />
          ) : (
            <ArtInfoView isArts={!!arts?.length} />
          )}
        </>
      )}
    </Container>
  );
};

export default MapView;

const Container = styled.section`
  position: absolute;
  width: 1080px;
  height: fit-content;
  display: flex;
  top: 8rem;
  padding: 1rem;
  box-sizing: border-box;
  @media (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const MapContainer = styled.div`
  width: 65%;
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
