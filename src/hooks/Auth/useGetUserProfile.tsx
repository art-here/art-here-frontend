import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/auth";
import useGetUserAuth from "./useGetUserAuth";

const useGetUserProfile = (token: string) => {
  const { data: userProfile } = useQuery(["me"], () => getUserProfile(token), {
    onSuccess: (data) => data.data
  });

  return userProfile;
};

export default useGetUserProfile;
