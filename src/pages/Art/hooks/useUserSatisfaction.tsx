import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";
import {
  TEditedSatisfactionRequest,
  TUserSatisfactionRequest,
  TUserSatisfactionResponse,
  getUserSatisfaction,
  patchUserSatisfaction,
  postUserSatisfaction
} from "../../../services/art/satisfaction";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const useGetUserSatisfaction = (
  id: number,
  isSatisfactionModalOpen: boolean
) => {
  const { data } = useQuery<TUserSatisfactionResponse, AxiosError>(
    CACHE_KEYS.userSatisfaction(id),
    () => getUserSatisfaction(id),
    {
      enabled: !!isSatisfactionModalOpen
    }
  );
  return data;
};

export const useCreateUserSatisfaction = (artId: number, userId?: number) => {
  if (!!userId) return;
  const clinet = useQueryClient();
  const createSatisfaction = useMutation(
    CACHE_KEYS.userSatisfaction(userId, artId),
    (userSatisfaction: TUserSatisfactionRequest) =>
      postUserSatisfaction(userSatisfaction),
    {
      onSuccess: () => {
        clinet.invalidateQueries(CACHE_KEYS.userSatisfaction(userId, artId));
        toast.success("만족도 작성 완료");
      }
    }
  );

  return createSatisfaction;
};

export const useEditUserSatisfaction = (artId: number, userId?: number) => {
  if (!!userId) return;
  const clinet = useQueryClient();
  const editSatisfaction = useMutation(
    CACHE_KEYS.userSatisfaction(userId, artId),
    (editedSatisfaction: TEditedSatisfactionRequest) =>
      patchUserSatisfaction(editedSatisfaction),
    {
      onSuccess: () => {
        clinet.invalidateQueries(CACHE_KEYS.userSatisfaction(userId, artId));
        toast.success("만족도 수정 완료");
      }
    }
  );

  return editSatisfaction;
};
