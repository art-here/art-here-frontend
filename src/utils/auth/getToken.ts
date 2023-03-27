import { ACCESS_TOKEN } from "../../constants";

const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

export default getToken;

// TODO: 나중에 지우기
export const getTemporaryToken = () => {
  return "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNjc5ODk2MzI0LCJleHAiOjE2Nzk4OTk5MjR9.8t4GTYZoSMev4HHNWzUny9IetWOx19b-sBqWks0rngU";
};
