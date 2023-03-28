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
    }
  });

  return accessToken;
};

export default useGetUserAuth;
