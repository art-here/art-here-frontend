import { useEffect, useState } from "react";
import UserbarView from "./View/UserbarView";
import { BASE_AUTH_URL } from "../../../constants";
import { IUserbarProps } from "./types";

const Userbar = () => {
  const [popUp, setPopUp] = useState<Window | null>(null);
  const onAuthOpen = () => {
    const OAuthPage = window.open(
      BASE_AUTH_URL,
      "_self",
      "width=400,height=600,left=400,top=400"
    );
    setPopUp(OAuthPage);
  };

  useEffect(() => {
    if (!popUp) return;
    // window.addEventListener("message", (e) => {
    //   console.log(e);
    // });
    // const intervalKey = setInterval(() => {
    //   if (getToken()) {
    //     popUp.close();
    //     clearInterval(intervalKey);
    //   } else {
    //     clearInterval(intervalKey);
    //   }
    // }, 500);
  }, [popUp]);

  const UserbarViewProps: IUserbarProps = {
    onAuthOpen
  };
  return <UserbarView {...UserbarViewProps} />;
};

export default Userbar;
