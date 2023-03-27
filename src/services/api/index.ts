import Axios from "axios";

const ADMIN_ACCESS_TOKEN = import.meta.env.VITE_ADMIN_ACCESS_TOKEN;
const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const adminApi = Axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    ...{ Token: `${ADMIN_ACCESS_TOKEN}` }
  }
});

const api = Axios.create({
  baseURL: SERVER_BASE_URL
});

export const getServerAuth = async (userId: number, temporaryToken: string) => {
  const { data } = await api.post(
    "api/auth/token/issue",
    { id: userId },
    {
      headers: {
        ...{ Token: `${temporaryToken}` }
      }
    }
  );
  console.log(data);
};

export default api;
