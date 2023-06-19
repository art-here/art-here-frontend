export type TUserToken = {
  accessToken: string;
  refreshToken: string;
};

export type TTemporaryUserAuth = {
  id: number;
  temporaryToken: string;
};

export type TUserProfile = {
  id: number;
  email: string;
  name: string;
  profile: string;
  socialType: string;
};
