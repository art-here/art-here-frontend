import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Auth = () => {
  const [searchParams, _] = useSearchParams();
  const accessToken = searchParams.get("accessToken");
  const userId = searchParams.get("id");

  useLayoutEffect(() => {
    if (accessToken !== null && userId !== null) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", userId);
    }
  }, []);
  return <></>;
};
