import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getUserProfile, reIssueAccessToken } from "../../services/auth";
import { getUserIdFromCookie } from "../../utils/token";

const useGetUserProfile = (isUserAuth: boolean) => {
  const { data: userProfile, isError } = useQuery(
    ["me"],
    () => getUserProfile(),
    {
      enabled: isUserAuth === true,

      onSuccess: (res) =>
        // TODO: Toast - 로그인 성공 !
        console.log("profile 가져오기 성공!"),
      onError: (error) => {
        // TODO: Toast- 로그인할 수 없습니다. 담당자에게 문의하세요 (Oauth에서 새로고침해야하는지 확인)
        // FIXME:
        // console.log("at 재발급에 실패했어요 ");
        // window.location.href = "/";
      }
    }
  );

  return { userProfile, isError };
};

export default useGetUserProfile;
