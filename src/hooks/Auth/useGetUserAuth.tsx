import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { getServerAuth, TTemporaryUserAuth } from "../../services/auth";
import CACHE_KEYS from "../../services/cacheKeys";
import {
  setAuthorizationHeader,
  setRefreshTokenToCookie
} from "../../utils/token";

const useGetUserAuth = (temporaryUserAuth: TTemporaryUserAuth) => {
  const navigateTo = useNavigate();
  const [accessToken, setAccessToken] = useState("");
  useQuery(CACHE_KEYS.signup, () => getServerAuth(temporaryUserAuth), {
    onSuccess: (data) => {
      setRefreshTokenToCookie(data.data.refreshToken);
      setAccessToken(data.data.accessToken);
      // setAuthorizationHeader(api, data.data.accessToken, "Bearer");
      // navigateTo("/");
      console.log("진짜 토큰 발급 성공", data);
    },
    onError: (e) => console.log("진짜 토큰 발급에 실패했어요")
  });

  return accessToken;
};

export default useGetUserAuth;
