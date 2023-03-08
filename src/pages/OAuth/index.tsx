import Cookies from "js-cookie";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const OAuth = () => {
  useEffect(() => {
    const location = useLocation();
    const accessToken = Cookies.get("access_token");
    const webId = Cookies.get("webid");
    console.log("accessToken", accessToken);
    console.log("location", location.pathname);
    console.log("webId", webId);
  }, []);
  return <div> auth page</div>;
};
