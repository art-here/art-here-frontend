import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getServerAuth } from "../../services/api";

export const OAuth = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = Number(searchParams.get("id"));
  const temporaryToken = searchParams.get("token");

  // FIXME: 로그인 실패 시 redirect, responses 물어보고 해당 페이지에서 처리 예정
  if (!userId || !temporaryToken) return <></>;

  useEffect(() => {
    getServerAuth(userId, temporaryToken);
  }, []);

  return <div> 이동 중 </div>;
};
