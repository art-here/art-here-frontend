import styled from "@emotion/styled";
import React from "react";
import Sorter from "../../../component/Sorter";
import ArtAccountView from "../ArtAccount/View";
import ArtRateView from "../ArtRate/View";
import ArtReviewsView from "../ArtReviews/View";

const ArtView = () => {
  return (
    <Container>
      <Sorter />
      <ArtAccountView />
      <ArtRateView />
      <ArtReviewsView />
    </Container>
  );
};

export default ArtView;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
`;
