import { AxiosResponse } from "axios";
import api from "../api";

type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export type TTemporaryUserAuth = {
  userId: number;
  temporaryToken: string;
};

export const getServerAuth = async ({
  userId,
  temporaryToken
}: TTemporaryUserAuth) => {
  return api.post<AuthResponse>(
    "api/auth/token/issue",
    { id: userId },
    {
      headers: {
        ...{ Token: `${temporaryToken}` }
      }
    }
  );
};

type TUserProfile = {
  id: number;
  email: string;
  name: string;
  profile: string;
  socialType: string;
};

export const getUserProfile = async (token: string) => {
  return api.get<TUserProfile>("api/member", {
    headers: {
      ...{
        Authorization: `Bearer ${token}`
      }
    }
  });
};
