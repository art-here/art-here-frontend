import { useState } from "react";
import { useNavigate } from "react-router";
import { ADMIN_ROUTE } from "../../../constants/router";
import SidebarView from "./View";

const Sidebar = () => {
  const [selectPage, setSelectPage] = useState<"myArt" | "createArt">("myArt");

  const navigate = useNavigate();
  const onNavigateGallery = () => {
    setSelectPage("myArt");
    navigate(ADMIN_ROUTE.MY_ART);
  };
  const onNavigateCreate = () => {
    setSelectPage("createArt");
    navigate(ADMIN_ROUTE.CREATE_ART);
  };

  const sideBarViewProps = {
    onNavigateGallery,
    onNavigateCreate,
    selectPage
  };

  return <SidebarView {...sideBarViewProps} />;
};

export default Sidebar;
