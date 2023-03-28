import Cookies from "js-cookie";

export const setRefreshTokenToCookie = (token: string) => {
  Cookies.set("refreshToken", token, {
    expires: 20,
    sameSite: "lax"
  });
};
