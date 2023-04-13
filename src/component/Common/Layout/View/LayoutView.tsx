import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const LayoutView = () => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Container>
          <Outlet />
        </Container>
      </LayoutWrapper>
    </>
  );
};

export default LayoutView;

export const LayoutWrapper = styled.div`
  position: relative;
  max-width: 1080px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1800px;
  padding-top: 50px;
`;
