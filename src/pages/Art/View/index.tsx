import styled from "@emotion/styled";
import Sorter from "../../../component/Sorter";
import ArtAccountView from "../ArtAccount/View";
import ArtRate from "../ArtRate";
import ArtReviews from "../ArtReviews";

const ArtView = () => {
  return (
    <Container>
      <Sorter />
      <ArtAccountView />
      <ArtRate />
      <ArtReviews />
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
