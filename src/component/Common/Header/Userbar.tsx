import UserbarView from "./View/UserbarView";
import { BASE_AUTH_URL } from "../../../constants";
import { IUserbarProps } from "./types";
import useGetUserProfile from "../../../hooks/Auth/profile";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { logout } from "../../../services/auth";
import { removeAccessTokenFromCookie } from "../../../utils/token";

const Userbar = () => {
  const location = useLocation();
  const isUserAuthFromOAuthPage = location.state as boolean;
  const { userProfile } = useGetUserProfile(isUserAuthFromOAuthPage);
  console.log("user바임");
  console.log("여기서 유저정보불러옴 user넷바");

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const onAuthOpen = () => {
    window.open(
      BASE_AUTH_URL,
      "_self",
      "width=400,height=600,left=400,top=400"
    );
  };

  const onUserMenuOpen = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const onLogout = () => {
    userProfile &&
      logout(userProfile.id).then((status) => {
        if (status === 200) removeAccessTokenFromCookie();
        window.location.href = "/";
      });
  };

  const UserbarViewProps: IUserbarProps = {
    onLogout,
    isUserMenuOpen,
    onUserMenuOpen,
    onAuthOpen,
    userName: userProfile?.name,
    userImage: userProfile?.profile
  };
  return <UserbarView {...UserbarViewProps} />;
};

export default Userbar;
