import { ACCESS_TOKEN } from "../constants";

const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export default getToken;
