import { Outlet } from "react-router-dom";
import Sorter from "../../component/Sorter";

const Arts = () => {
  return (
    <>
      <Sorter />
      <Outlet />
    </>
  );
};

export default Arts;
