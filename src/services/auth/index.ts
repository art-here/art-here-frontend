import axios, { AxiosError, AxiosResponse } from "axios";
import { useSetRecoilState } from "recoil";
import { userAccesssTokenWithId } from "../../store/auth";
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
  id: number;
  temporaryToken: string;
};

export const issueToken = async ({
  id,
  temporaryToken
}: TTemporaryUserAuth): Promise<AxiosResponse<userToken>> => {
  return await api.post(
    "api/auth/token/issue",
    { id },
    {
      headers: {
        ...{ Token: `${temporaryToken}` }
      }
    }
  );
};

export const reIssueAccessToken = async (error: AxiosError, userId: number) => {
  const setUserAuth = useSetRecoilState(userAccesssTokenWithId);
  const originalRequest = error.config;

  const reIssue: AxiosResponse<{ accessToken: string }> = await axios.post(
    "https://dev.art-here.site/api/auth/token/reissue",
    {
      id: userId,
      refreshToken: getRefreshTokenFromCookie()
    }
  );

  const newAccessToken = reIssue.data.accessToken;

  // 새 accessToken으로 헤더 재설정, 내부 변수 변경
  setAuthorizationHeader(api, newAccessToken, "Bearer");
  setUserAuth((prev) => prev && { ...prev, accessToken: newAccessToken });

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
