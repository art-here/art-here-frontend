import { Outlet } from "react-router-dom";
import Sorter from "../../../component/Sorter";

const HomeView = () => {
  return (
    <>
      <Sorter />
      <Outlet />
    </>
  );
};

export default HomeView;
