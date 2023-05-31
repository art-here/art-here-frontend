import styled from "@emotion/styled";
import Sorter from "../../../component/Sorter";

import ArtSatisfaction from "../ArtSatisfaction";
import ArtReviews from "../ArtReviews";
import { IArtProps } from "..";
import ArtAccount from "../ArtAccount";

const ArtView = ({ artId }: IArtProps) => {
  return (
    <Container>
      <Sorter />
      <ArtAccount artId={artId} />
      <ArtSatisfaction artId={artId} />
      <ArtReviews artId={artId} />
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
