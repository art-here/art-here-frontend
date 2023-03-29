import UserbarView from "./View/UserbarView";
import { BASE_AUTH_URL } from "../../../constants";
import { IUserbarProps } from "./types";
import useGetUserProfile from "../../../hooks/Auth/profile";
import { useLocation } from "react-router-dom";

const Userbar = () => {
  const location = useLocation();
  const isUserAuthFromOAuthPage = location.state as boolean;
  const { userProfile } = useGetUserProfile(isUserAuthFromOAuthPage);

  const onAuthOpen = () => {
    window.open(
      BASE_AUTH_URL,
      "_self",
      "width=400,height=600,left=400,top=400"
    );
  };

  const UserbarViewProps: IUserbarProps = {
    onAuthOpen,
    userName: userProfile?.name,
    userImage: userProfile?.profile
  };
  return <UserbarView {...UserbarViewProps} />;
};

export default Userbar;
