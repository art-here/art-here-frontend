import axios, { AxiosError } from "axios";
import {
  getRefreshTokenFromCookie,
  setAuthorizationHeader
} from "../../utils/token";
import api from "../api";

type userToken = {
  accessToken: string;
  refreshToken: string;
};

export type TTemporaryUserAuth = {
  userId: number;
  temporaryToken: string;
};

export const issueToken = async ({
  userId,
  temporaryToken
}: TTemporaryUserAuth) => {
  return api.post<null, userToken>(
    "api/auth/token/issue",
    { id: userId },
    {
      headers: {
        ...{ Token: `${temporaryToken}` }
      }
    }
  );
};

export const reIssueAccessToken = async (error: AxiosError, userId: number) => {
  const originalRequest = error.config;

  const { accessToken: newAccessToken } = await axios.post<
    null,
    { accessToken: string }
  >("https://dev.art-here.site/api/auth/token/reissue", {
    id: userId,
    refreshToken: getRefreshTokenFromCookie()
  });

  setAuthorizationHeader(api, newAccessToken, "Bearer");
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
