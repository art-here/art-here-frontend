import { Outlet } from "react-router-dom";
import Searcher from "../../../component/Searcher";
import Sorter from "../../../component/Sorter";

const HomeView = () => {
  return (
    <>
      <Searcher />
      {/* <Sorter /> */}
      <Outlet />
    </>
  );
};

export default HomeView;
