import styled from "@emotion/styled";
import { ILayoutProps } from "./types";

const LayoutView = ({ children }: ILayoutProps) => {
  return <Container>{children}</Container>;
};

export default LayoutView;

const Container = styled.div`
  position: relative;
  max-width: 1800px;
  min-height: 100vh;
  margin: 0 auto;
`;
