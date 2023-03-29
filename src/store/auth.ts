import { atom } from "recoil";
import { TUserAuth } from "../hooks/Auth/token";

export const userAccesssTokenWithId = atom<Omit<
  TUserAuth,
  "refreshToken"
> | null>({
  key: "me",
  default: null
});
