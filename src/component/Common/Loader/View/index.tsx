import styled from "@emotion/styled";
import React from "react";
import { Circles } from "react-loader-spinner";

const LoaderView = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <Container ref={ref}>
      <Circles height="80" width="80" color="black" ariaLabel="loading" />;
    </Container>
  );
});

export default LoaderView;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  padding-top: 100px;
`;
