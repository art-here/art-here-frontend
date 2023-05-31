import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import { useLocation } from "react-router-dom";

const LayoutView = () => {
  const { pathname } = useLocation();

  const isFullWidth = pathname === "/" || pathname.startsWith("/admin");

  return (
    <>
      <Container>
        <Header />
        <LayoutContainer isFullWidth={isFullWidth}>
          <LayoutWrapper>
            <Outlet />
          </LayoutWrapper>
        </LayoutContainer>
      </Container>
    </>
  );
};

export default LayoutView;

const Container = styled.div``;

const LayoutContainer = styled.div<{ isFullWidth: boolean }>`
  position: relative;
  max-width: ${(props) => (props.isFullWidth ? "" : "90vw")};
  /* min-height: 100vh; */
  min-width: 385px;
  margin: 0 auto;
`;

const LayoutWrapper = styled.div`
  max-width: 1800px;
`;
