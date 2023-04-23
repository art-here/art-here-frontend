import axios, { AxiosError, AxiosResponse } from "axios";
import {
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
  setAccessTokenToCookie
} from "../../utils/token";
import api from "../api";

type TUserToken = {
  accessToken: string;
  refreshToken: string;
};

export type TTemporaryUserAuth = {
  id: number;
  temporaryToken: string;
};

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

type TUserProfile = {
  id: number;
  email: string;
  name: string;
  profile: string;
  socialType: string;
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
