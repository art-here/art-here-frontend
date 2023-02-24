import styled from "@emotion/styled";
import Skeleton from "react-loading-skeleton";

const CardType = () => {
  return (
    <Container>
      <Skeleton count={9} />
    </Container>
  );
};

export default CardType;

const Container = styled.div`
  background-color: red;
`;
