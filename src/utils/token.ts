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

export const setAuthorizationHeader = (
  api: AxiosInstance,
  token: string,
  type?: "Bearer" | "Basic"
) => {
  api.defaults.headers.common[`Authorization`] = type
    ? `${type} ${token}`
    : token;
};
