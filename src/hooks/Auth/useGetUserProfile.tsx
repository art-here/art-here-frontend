import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/auth";

const useGetUserProfile = () => {
  const { data: userProfile } = useQuery(["me"], () => getUserProfile(), {
    onSuccess: (data) => data.data
  });

  return userProfile;
};

export default useGetUserProfile;
