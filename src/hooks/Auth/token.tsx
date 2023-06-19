import { useQuery } from "@tanstack/react-query";
import { issueToken } from "../../services/auth";
import CACHE_KEYS from "../../services/cacheKeys";
import {
  setAccessTokenToCookie,
  setRefreshTokenToCookie
} from "../../utils/token";
import { TTemporaryUserAuth } from "../../services/auth/types";
import { toast } from "react-toastify";

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
      onSuccess: (data) => {
        setAccessTokenToCookie(data.accessToken);
        setRefreshTokenToCookie(data.refreshToken);
        // setAuthorizationHeader(api, data.accessToken);
        // TODO: ['me'] 쿼리 객체에 업데이트해야할지 체크
      },
      onError: () =>
        toast.error("서버 로그인에 실패하였습니다. 담당자에게 문의하세요.")
      // TODO: 메인페이지로 전환
    }
  );

  return !!userAuth;
};

export default useGetToken;
