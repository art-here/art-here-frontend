import { useEffect, useState } from "react";
import UserbarView from "./View/UserbarView";
import { BASE_AUTH_URL } from "../../../constants";
import getToken from "../../../utils/getToken";
import { IUserbarProps } from "./types";

const Userbar = () => {
  const [popUp, setPopUp] = useState<Window | null>(null);

  const onAuthOpen = () => {
    const OAuthPage = window.open(
      BASE_AUTH_URL,
      "self",
      "width=400,height=600,left=400,top=400"
    );
    setPopUp(OAuthPage);
  };

  useEffect(() => {
    if (!popUp) return;
    const intervalKey = setInterval(() => {
      if (getToken()) {
        popUp.close();
        clearInterval(intervalKey);
      }
    }, 500);
  }, [popUp]);

  const UserbarViewProps: IUserbarProps = {
    onAuthOpen
  };
  return <UserbarView {...UserbarViewProps} />;
};

export default Userbar;
