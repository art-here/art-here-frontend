import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editArt } from "../../services/api/admin";
import CACHE_KEYS from "../../services/cacheKeys";
import { TArt } from "../../types/types";

export type TEditArt = (params: { newArt: TArt; id: string }) => Promise<void>;

const patchArt: TEditArt = async ({ id, newArt }) => {
  try {
    await editArt(id, newArt);
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while submitting the post.");
  }
};

const useEditAdminArt = () => {
  const client = useQueryClient();

  const { mutate: onEditArt } = useMutation(CACHE_KEYS.art, patchArt, {
    onSuccess: () => {
      client.invalidateQueries(CACHE_KEYS.art);
      // FIXME: toast로 바꾸기
      alert("작품이 수정되었습니다.");
    },
    onError: (error) => {
      // TODO: 에러 처리 APIError 클래스로! toast로 변경
      alert("작품 수정에 실패하였습니다.");
    }
  });
  return { onEditArt };
};

export default useEditAdminArt;
