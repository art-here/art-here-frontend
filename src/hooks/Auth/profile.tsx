import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/auth";
import CACHE_KEYS from "../../services/cacheKeys";
import { toast } from "react-toastify";

const useGetUserProfile = (isUserAuth: boolean) => {
  const { data: userProfile, isError } = useQuery(
    CACHE_KEYS.me,
    () => getUserProfile(),
    {
      enabled: isUserAuth === true,
      onError: () =>
        toast.error("로그인에 실패하였습니다. 담당자에게 문의하세요")
    }
  );

  return { userProfile, isError };
};

export default useGetUserProfile;
