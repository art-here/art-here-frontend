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
      logout(userProfile.id)
        .then((status) => status === 200 && removeAccessTokenFromCookie())
        // TODO: Toast "로그아웃에 실패했습니다. 담당자에게 문의하세요"
        .catch(console.log);
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
