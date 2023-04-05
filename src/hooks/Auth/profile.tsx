import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getUserProfile, reIssueAccessToken } from "../../services/auth";
import { getUserIdFromCookie } from "../../utils/token";

const useGetUserProfile = (isUserAuth: boolean) => {
  const userId = getUserIdFromCookie();
  const { data: userProfile, isError } = useQuery(
    ["me"],
    () => getUserProfile(),
    {
      enabled: isUserAuth === true,
      select: (data) => data.data,
      onSuccess: (res) =>
        // TODO: Toast - 로그인 성공 !
        console.log("profile 가져오기 성공!"),
      onError: (error) => {
        // unAuthorizsed or forbidden 이라면 AT 재발급
        if (error instanceof AxiosError && (error.status === 401 || 403)) {
          userId && reIssueAccessToken(error as AxiosError, userId);
        }
        // TODO: Toast- 로그인할 수 없습니다. 담당자에게 문의하세요 (Oauth에서 새로고침해야하는지 확인)
        console.log("at 재발급에 실패했어요 ");
        window.location.href = "/";
      }
    }
  );

  return { userProfile, isError };
};

export default useGetUserProfile;
