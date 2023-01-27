import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "../../../component/Common/Header/Header";
import Searcher from "../../../component/Searcher";
import Sorter from "../../../component/Sorter";

const HomeView = () => {
  return (
    <Layout>
      <Header />
      <Searcher />
      <Sorter />
      <Outlet />
    </Layout>
  );
};

export default HomeView;

export const Layout = styled.div`
  position: relative;
  max-width: 1800px;
  min-height: 100vh;
  margin: 0 auto;
`;
