import { AxiosResponse } from "axios";
import api from "..";

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
