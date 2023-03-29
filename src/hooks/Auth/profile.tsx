import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRecoilValue } from "recoil";
import { getUserProfile, reIssueAccessToken } from "../../services/auth";
import { userAccesssTokenWithId } from "../../store/auth";

const useGetUserProfile = () => {
  const userAuth = useRecoilValue(userAccesssTokenWithId);
  console.log(userAuth);
  const { data: userProfile, isError } = useQuery(
    ["me"],
    () => getUserProfile(),
    {
      onSuccess: (res) => console.log("profile 가져오기 성공!"),
      onError: (error) => {
        console.log("error 유저 정보 조회에 실패했어요", error);
        // unAuthorizsed or forbidden 이라면 AT 재발급
        if ((error instanceof AxiosError && error.status === 401) || 403) {
          // const userAuth = client.getQueryData<TUserAuth>(["signup"]);
          console.log("리프레시 토큰 만료로 다시 aT를 발급받고 요청할게요");
          userAuth && reIssueAccessToken(error as AxiosError, userAuth.id);
        }
        console.log("at 재발급에 실패했어요, userId가 없나봐요 ");
      }
    }
  );

  return { userProfile, isError };
};

export default useGetUserProfile;
