import styled from "@emotion/styled";
import Sorter from "../../../component/Sorter";
import ArtAccountView from "../ArtAccount/View";
import ArtSatisfaction from "../ArtSatisfaction";
import ArtReviews from "../ArtReviews";
import { IArtProps } from "..";

const ArtView = ({ artId }: IArtProps) => {
  return (
    <Container>
      <Sorter />
      <ArtAccountView />
      <ArtSatisfaction />
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
