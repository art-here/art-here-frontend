import UserbarView from "./View/UserbarView";
import { IUserbarProps } from "./types";
import useGetUserProfile from "../../../hooks/Auth/profile";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { logout } from "../../../services/auth";
import {
  getAccessTokenFromCookie,
  removeAccessTokenFromCookie
} from "../../../utils/token";

const Userbar = () => {
  const location = useLocation();
  const isAuthenticated = !!location.state || !!getAccessTokenFromCookie();
  const { userProfile } = useGetUserProfile(isAuthenticated);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const onUserMenuOpen = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const onLogout = () => {
    userProfile && logout(userProfile.id);
    // .then((status) => {
    //   if (status === 200) window.location.href = "/";
    // });
  };

  const UserbarViewProps: IUserbarProps = {
    onLogout,
    isUserMenuOpen,
    onUserMenuOpen,
    userName: userProfile?.name,
    userImage: userProfile?.profile
  };
  return <UserbarView {...UserbarViewProps} />;
};

export default Userbar;
