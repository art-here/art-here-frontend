import { AxiosInstance } from "axios";
import Cookies from "js-cookie";

export const getUserIdFromCookie = () => {
  return Number(Cookies.get("id"));
};

export const setUserIDCookie = (id: number) => {
  Cookies.set("id", String(id));
};

export const getAccessTokenFromCookie = () => {
  return Cookies.get("accessToken");
};

export const setAccessTokenToCookie = (token: string) => {
  Cookies.set("accessToken", token);
};

export const getRefreshTokenFromCookie = () => {
  return Cookies.get("refreshToken");
};

export const setRefreshTokenToCookie = (token: string) => {
  Cookies.set("refreshToken", token);
};

export const setAuthorizationHeader = (api: AxiosInstance, token: string) => {
  // 임시 토큰으로 저장헤둔 헤더 설정 삭제
  if ("Token" in api.defaults.headers) {
    const { Token, ...headersWithoutToken } = api.defaults.headers;
    api.defaults.headers = headersWithoutToken;
  }
  api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;
};
