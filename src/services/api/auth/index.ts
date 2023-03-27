import api from "..";

export const getServerAuth = (userId: number, temporaryToken: string) => {
  return api.post("auth/token/issue", userId);
};
