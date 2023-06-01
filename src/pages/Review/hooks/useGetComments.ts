import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import CACHE_KEYS from "../../../services/cacheKeys";
import { getComments } from "../../../services/review";
import { TResponse } from "../../../types/types";
import { TComments } from "../Comments/types";

type TGetComments<T> = (
  postId: number,
  pageParam: number
) => Promise<TResponse<T>>;

const fetchComments: TGetComments<TComments> = async (postId, pageParam) => {
  const res = await getComments(pageParam, postId);
  const { commentResponses: data, hasNext: last } = res;
  return { data, nextPage: pageParam + 1, hasNext: last };
};

const useGetComments = (postId: number) => {
  const {
    data: comments,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery(
    CACHE_KEYS.comments(postId),
    ({ pageParam = 0 }) => fetchComments(postId, pageParam),
    {
      // FIXME: select 함수로 추출?
      // select: (data) => data.pages[0].data ,
      getNextPageParam: (lastPage) =>
        lastPage.hasNext ? lastPage.nextPage : undefined
    }
  );
  return { comments, fetchNextPage, isFetchingNextPage };
};

export default useGetComments;
