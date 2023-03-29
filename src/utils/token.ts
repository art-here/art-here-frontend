import { AxiosInstance } from "axios";
import Cookies from "js-cookie";

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
