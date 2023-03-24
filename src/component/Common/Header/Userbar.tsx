import UserbarView from "./View/UserbarView";
import { BASE_AUTH_URL } from "../../../constants";
import { IUserbarProps } from "./types";

const Userbar = () => {
  const onAuthOpen = () => {
    window.open(
      BASE_AUTH_URL,
      "_self",
      "width=400,height=600,left=400,top=400"
    );
  };

  const UserbarViewProps: IUserbarProps = {
    onAuthOpen
  };
  return <UserbarView {...UserbarViewProps} />;
};

export default Userbar;
