import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAdminArt } from "../../services/admin";
import CACHE_KEYS from "../../services/cacheKeys";

const SIZE = 10;

const useGetAdminArt = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState("latest");
  const [name, setName] = useState<string | undefined>();

  const { data } = useQuery(
    CACHE_KEYS.adminArts(currentPage, sort, name),
    () => getAdminArt(currentPage, SIZE, sort, name),
    {
      onSuccess: (data) => {
        setTotalPages(data.totalPages);
      },
      onError(err) {
        // FIXME: Toast로 고쳐야함
        console.log(err);
      },
      staleTime: 2000,
      keepPreviousData: true // 쿼리 키가 바뀔 때도 지난 데이터를 유지해서 이전 페이지로 돌아갔을 때 캐시에 해당 데이터 있게 함
    }
  );

  const queryClient = useQueryClient();
  useEffect(() => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(
        CACHE_KEYS.adminArts(nextPage, sort, name),
        () => getAdminArt(nextPage, SIZE, sort, name)
      );
    }
  }, [currentPage, totalPages, queryClient]);

  return {
    data,
    totalPages,
    currentPage,
    setCurrentPage,
    SIZE,
    setSort,
    sort,
    setName
  };
};

export default useGetAdminArt;
