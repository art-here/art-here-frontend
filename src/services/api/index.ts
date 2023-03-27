import { getTemporaryToken } from "./../../utils/auth/getToken";
import Axios, { AxiosError, HttpStatusCode } from "axios";
import { getApiEndpoint } from "../../env/env";

export const createApi = () => {
  const accessToken = getTemporaryToken();

  const _api = Axios.create({
    baseURL: getApiEndpoint(),
    validateStatus: (status) =>
      status >= HttpStatusCode.Ok && status < HttpStatusCode.BadRequest, // 200 ~ 300
    headers: {
      ...{ Authorization: `Bearer ${accessToken}` }
    }
  });

  _api.interceptors.request.use((config) => {
    return config;
  });

  _api.interceptors.response.use(
    async (response) => {
      return await response.data;
    },
    async (error) => {
      if (error instanceof AxiosError) {
        const errorStatus = error.response?.status ?? 0;

        if (
          [HttpStatusCode.Unauthorized, HttpStatusCode.Forbidden].includes(
            errorStatus
          ) // 401 or 403
        ) {
          /**
           * 리프레쉬 토큰 없을 경우 로그인 페이지로 리다이렉트
           * 리프레쉬 토큰 있을 경우 리프레쉬 토큰으로 교환 후 다시 요청 로직
           */
        }
      }
      return Promise.reject(error);
    }
  );
  return _api;
};

const api = createApi();

export default api;
