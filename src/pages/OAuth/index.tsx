import { useLocation, useNavigate } from "react-router-dom";
import useGetToken from "../../hooks/Auth/token";
import useGetUserProfile from "../../hooks/Auth/profile";
import { setUserIDCookie } from "../../utils/token";

export const OAuth = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = Number(searchParams.get("id"));
  const temporaryToken = searchParams.get("token") as string;
  const routeTo = useNavigate();

  setUserIDCookie(id);

  const authWithTemporaryToken = {
    id,
    temporaryToken
  };

  // 임시토큰으로 유효 토큰 발급 -> api 헤더 설정 및 쿠키 저장
  const isAuthenticated = useGetToken(authWithTemporaryToken);

  const { userProfile } = useGetUserProfile(isAuthenticated);

  if (!!userProfile) {
    routeTo("/arts", { state: isAuthenticated });
  }

  return <></>;
};
