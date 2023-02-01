import styled from "@emotion/styled";
import { Circles } from "react-loader-spinner";

const LoaderView = () => {
  return (
    <Container>
      <Circles height="80" width="80" color="black" ariaLabel="loading" />;
    </Container>
  );
};

export default LoaderView;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-top: 200px;
`;
