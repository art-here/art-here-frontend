import Axios from "axios";

const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const api = Axios.create({
  baseURL: SERVER_BASE_URL
});

export default api;
