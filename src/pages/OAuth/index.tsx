import { useLocation } from "react-router-dom";
import useGetUserAuth from "../../hooks/Auth/useGetUserAuth";

export const OAuth = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = Number(searchParams.get("id"));
  const temporaryToken = searchParams.get("token");

  // FIXME: userId, 임시 토큰이 없을 수 있나?
  if (!userId || !temporaryToken) return <></>;

  // 유저 토큰 가져오기
  useGetUserAuth({ userId, temporaryToken });

  //  가져온 토큰으로 유저 정보 가져오기

  // 메인 페이지로 이동

  return <div> 이동 중 </div>;
};
