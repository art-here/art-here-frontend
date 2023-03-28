import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getServerAuth, TTemporaryUserAuth } from "../../services/api/auth";
import CACHE_KEYS from "../../services/cacheKeys";
import { setRefreshTokenToCookie } from "../../utils/token";

const useGetUserAuth = (temporaryUserAuth: TTemporaryUserAuth) => {
  const [accessToken, setAccessToken] = useState("");
  useQuery(CACHE_KEYS.signup, () => getServerAuth(temporaryUserAuth), {
    onSuccess: (data) => {
      setRefreshTokenToCookie(data.data.refreshToken);
      setAccessToken(data.data.accessToken);
    }
  });
};

export default useGetUserAuth;
