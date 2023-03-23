import Axios from "axios";

const ADMIN_ACCESS_TOKEN = import.meta.env.VITE_ADMIN_ACCESS_TOKEN;
const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const adminApi = Axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    ...{ Authorization: `Bearer ${ADMIN_ACCESS_TOKEN}` }
  }
});

const api = Axios.create({
  baseURL: SERVER_BASE_URL
});

const getServerAuth = (userId: number, temporaryToken: string) =>
  api.post("auth/token/issue", userId, {
    headers: {
      ...{ Authorization: `Bearer ${temporaryToken}` }
    }
  });

export default api;
