import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getUserProfile } from "../../services/auth";
import { getUserIdFromCookie } from "../../utils/token";

const useGetUserProfile = (isUserAuth: boolean) => {
  const userId = getUserIdFromCookie();
  const { data: userProfile, isError } = useQuery(
    ["me"],
    () => getUserProfile(),
    {
      enabled: isUserAuth === true,
      select: (data) => data.data,
      onSuccess: (res) => console.log("profile 가져오기 성공!"),
      onError: (error) => {
        console.log("error 유저 정보 조회에 실패했어요", error);
        // unAuthorizsed or forbidden 이라면 AT 재발급
        if ((error instanceof AxiosError && error.status === 401) || 403) {
          // userId && reIssueAccessToken(error as AxiosError, userId);
        }
        console.log("at 재발급에 실패했어요 ");
      }
    }
  );

  return { userProfile, isError };
};

export default useGetUserProfile;
