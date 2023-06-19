import axios, { AxiosError } from "axios";
import {
  getRefreshTokenFromCookie,
  setAccessTokenToCookie
} from "../../utils/token";
import api from "../api";
import { TTemporaryUserAuth, TUserProfile, TUserToken } from "./types";

export const issueToken = async ({
  id,
  temporaryToken
}: TTemporaryUserAuth) => {
  return await api.post<null, TUserToken>(
    "api/auth/token/issue",
    { id },
    {
      headers: {
        Token: temporaryToken
      }
    }
  );
};

export const reIssueAccessToken = async (error: AxiosError, userId: number) => {
  const originalRequest = error.config;

  const reIssue = await axios.post<null, { accessToken: string }>(
    "api/auth/token/reissue",
    {
      id: userId,
      refreshToken: getRefreshTokenFromCookie()
    }
  );

  const newAccessToken = reIssue.accessToken;

  // 새 accessToken으로 헤더 재설정, 내부 변수 변경
  // setAuthorizationHeader(api, newAccessToken);
  setAccessTokenToCookie(newAccessToken);

  if (!!originalRequest) {
    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
    // 실패했던 getUserProfile() 재요청
    return api(originalRequest);
  }
};

export const getUserProfile = async () => {
  return api.get<null, TUserProfile>("api/member");
};

export const logout = async (userId: number) => {
  const logoutRes = await api.post("api/auth/logout", {
    id: userId,
    refreshToken: getRefreshTokenFromCookie()
  });

  return logoutRes.status;
};
