import styled from "@emotion/styled";
import Sorter from "../../../component/Sorter";

import ArtSatisfaction from "../ArtSatisfaction";
import ArtReviews from "../ArtReviews";
import { IArtProps } from "..";
import ArtAccount from "../ArtAccount";

const ArtView = ({ artId, user }: IArtProps) => {
  return (
    <Container>
      <Sorter />
      <ArtAccount artId={artId} />
      <ArtSatisfaction artId={artId} user={user} />
      <ArtReviews artId={artId} user={user} />
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
