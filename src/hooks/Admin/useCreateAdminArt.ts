import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArt } from "../../services/api/admin";
import CACHE_KEYS from "../../services/cacheKeys";

const useCreateAdminArt = () => {
  const client = useQueryClient();

  const { mutate: onCreateArt } = useMutation(CACHE_KEYS.art, createArt, {
    onSuccess: () => {
      client.invalidateQueries(CACHE_KEYS.art);
      // FIXME: toast로 바꾸기
      alert("새로운 작품이 등록되었습니다.");
    },
    onError: (error) => {
      // TODO: 에러 처리 APIError 클래스로! toast로 변경
      alert("작품 등록에 실패하였습니다.");
    }
  });
  return { onCreateArt };
};

export default useCreateAdminArt;
