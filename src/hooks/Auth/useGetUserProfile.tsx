import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/auth";
import useGetUserAuth from "./useGetUserAuth";

const useGetUserProfile = (token: string) => {
  const { data: userProfile } = useQuery(["me"], () => getUserProfile(token), {
    select: (data) => data.data,
    onSuccess: (res) => console.log("성공!"),
    onError: (error) => console.log("error 유저 정보 조회에 실패했어요", error)
  });

  return userProfile;
};

export default useGetUserProfile;
