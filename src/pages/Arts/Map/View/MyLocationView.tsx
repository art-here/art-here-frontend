import styled from "@emotion/styled";
import { IMyLocationProps } from "../types";

const MyLocationView = ({ userRoadAddress }: { userRoadAddress: string }) => {
  return (
    <Container>
      <span className="label">현재 나의 위치는</span>
      <span className="userLocation">{userRoadAddress}</span>
    </Container>
  );
};

export default MyLocationView;

const Container = styled.div`
  position: absolute;
  left: 4rem;
  top: -10px;
  transform: translateX(-30px);

  font-size: 16px;
  color: #000;

  ${({ theme }) => theme.media.mobile} {
    left: 3.5rem;
    top: -4.5rem;
  }

  .label {
    padding: 6px 8px;
    margin-right: 10px;
    background-color: #000;
    color: #fff;
    font-weight: 700;
    border-radius: 8px;

    ${({ theme }) => theme.media.mobile} {
      font-size: 12px;
    }
  }

  .userLocation {
    padding: 2px 8px;
    border-bottom: 1px solid #000;

    ${({ theme }) => theme.media.mobile} {
      font-size: 14px;
    }
  }
`;
