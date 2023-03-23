import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import { ILayoutProps } from "../types";

const LayoutView = ({ children }: ILayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      <Container>
        {children}
        <Outlet />
      </Container>
    </LayoutWrapper>
  );
};

export default LayoutView;

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1800px;
  padding-top: 50px;
`;
