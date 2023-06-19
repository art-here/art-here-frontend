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
      // TODO: msg로 변경
      onSuccess: () => clinet.invalidateQueries(CACHE_KEYS.userSatisfaction())
    }
  );

  return createSatisfaction;
};

export const useEditUserSatisfaction = () => {
  const editSatisfaction = useMutation(
    (editedSatisfaction: TEditedSatisfactionRequest) =>
      patchUserSatisfaction(editedSatisfaction),
    {
      // TODO: msg로 변경
      onSuccess: () => console.log("patch 성공")
    }
  );

  return editSatisfaction;
};
