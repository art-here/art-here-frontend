import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

export const OAuth = () => {
  const params = useParams();
  const cookies = Cookies.get("accessToken");
  console.log("cookie", cookies);
  console.log("params", params);
  return <div> auth page</div>;
};
