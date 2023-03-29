import { useLocation } from "react-router-dom";
import useGetToken from "../../hooks/Auth/token";
import useGetUserProfile from "../../hooks/Auth/profile";

export const OAuth = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const authWithTemporaryToken = {
    userId: Number(searchParams.get("id")),
    temporaryToken: searchParams.get("token") as string
  };

  // 임시토큰으로 유효 토큰 발급 -> api 헤더 설정 및 쿠키 저장
  useGetToken(authWithTemporaryToken);

  //  유저 정보 가져오기
  const { userProfile, isError } = useGetUserProfile();

  // 메인 페이지로 이동

  return (
    <div>
      {userProfile && userProfile.name}님 반가워요!
      {isError && <span> 유저 정보 가져오기 실패</span>}
    </div>
  );
};
