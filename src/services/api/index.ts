import Axios from "axios";

const ADMIN_ACCESS_TOKEN = import.meta.env.VITE_ADMIN_ACCESS_TOKEN;
const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const api = Axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    ...{ Authorization: `Bearer ${ADMIN_ACCESS_TOKEN}` }
  }
});

export default api;
