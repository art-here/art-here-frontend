import { useQuery } from "@tanstack/react-query";
import { issueToken, TTemporaryUserAuth } from "../../services/auth";
import CACHE_KEYS from "../../services/cacheKeys";
import {
  setAccessTokenToCookie,
  setRefreshTokenToCookie
} from "../../utils/token";

export type TUserAuth = {
  id: number;
  accessToken: string;
  refreshToken: string;
};

const useGetToken = (authWithTemporaryToken: TTemporaryUserAuth) => {
  const { data: userAuth } = useQuery(
    CACHE_KEYS.signup,
    () => issueToken(authWithTemporaryToken),
    {
      // select: (data) => data.data,
      onSuccess: (data) => {
        setAccessTokenToCookie(data.accessToken);
        setRefreshTokenToCookie(data.refreshToken);
        // setAuthorizationHeader(api, data.accessToken);
        // TODO: ['me'] 쿼리 객체에 업데이트해야할지 체크
      },
      onError: (e) => console.log("진짜 토큰 발급에 실패했어요")
      //TODO: Toast: 서버 로그인에 실패하였습니다. 담당자에게 문의하세요.
      // TODO: 메인페이지로 전환
    }
  );

  return !!userAuth;
};

export default useGetToken;
