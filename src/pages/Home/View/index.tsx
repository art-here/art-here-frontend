import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "../../../component/Common/Header/Header";
import Searcher from "../../../component/Searcher";
import Sorter from "../../../component/Sorter";

const HomeView = () => {
  return (
    <>
      <Searcher />
      <Sorter />
    </>
  );
};

export default HomeView;
