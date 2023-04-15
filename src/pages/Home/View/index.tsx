import { Outlet } from "react-router-dom";
import Searcher from "../../../component/Searcher";
import Sorter from "../../../component/Sorter";
import Categories from "../../../component/Categories";

const HomeView = () => {
  return (
    <>
      <Searcher />
      <Categories />
      {/* <Sorter /> */}
      <Outlet />
    </>
  );
};

export default HomeView;
