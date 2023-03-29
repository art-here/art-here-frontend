import { useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import api from "../../services/api";
import { issueToken, TTemporaryUserAuth } from "../../services/auth";
import CACHE_KEYS from "../../services/cacheKeys";
import { userAccesssTokenWithId } from "../../store/auth";
import {
  setAuthorizationHeader,
  setRefreshTokenToCookie
} from "../../utils/token";

export type TUserAuth = {
  id: number;
  accessToken: string;
  refreshToken: string;
};

const useGetToken = (authWithTemporaryToken: TTemporaryUserAuth) => {
  const setUserAccessTokenWithId = useSetRecoilState(userAccesssTokenWithId);
  const { data: userAuth } = useQuery(
    CACHE_KEYS.signup,
    () => issueToken(authWithTemporaryToken),
    {
      onSuccess: (data) => {
        console.log("진짜 토큰 발급 성공", data);
        setRefreshTokenToCookie(data.refreshToken);
        setAuthorizationHeader(api, data.accessToken, "Bearer");
        setUserAccessTokenWithId(
          (prev) => prev && { ...prev, accessToken: data.accessToken }
        );
        // TODO: ['me'] 쿼리 객체에 업데이트해야할지 체크
        // TODO: 성공시, 메인페이지로 전환 navigateTo("/");
      },
      onError: (e) => console.log("진짜 토큰 발급에 실패했어요")
      //TODO: Toast: 서버 로그인에 실패하였습니다. 담당자에게 문의하세요.
      // TODO: 메인페이지로 전환
    }
  );

  return userAuth;
};

export default useGetToken;
