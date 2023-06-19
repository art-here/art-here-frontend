import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteArt } from "../../services/admin";
import CACHE_KEYS from "../../services/cacheKeys";

const useDeleteAdminArt = () => {
  const client = useQueryClient();

  const { mutate: onDeleteArt } = useMutation(CACHE_KEYS.adminArt, deleteArt, {
    onSuccess: () => {
      client.invalidateQueries(CACHE_KEYS.adminArt);
      // FIXME: toast로 바꾸기
      alert("작품이 삭제 되었습니다.");
    },
    onError: (error) => {
      // TODO: 에러 처리 APIError 클래스로! toast로 변경
      alert("작품 삭제에 실패하였습니다.");
    }
  });
  return { onDeleteArt };
};

export default useDeleteAdminArt;
