import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAdminArt } from "../../services/api/admin";
import CACHE_KEYS from "../../services/cacheKeys";

const SIZE = 10;

const useGetAdminArt = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data } = useQuery(
    CACHE_KEYS.adminArt(currentPage),
    () => getAdminArt(currentPage, SIZE),
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
      queryClient.prefetchQuery(CACHE_KEYS.adminArt(nextPage), () =>
        getAdminArt(nextPage, SIZE)
      );
    }
  }, [currentPage, totalPages, queryClient]);

  return { data, totalPages, currentPage, setCurrentPage, SIZE };
};

export default useGetAdminArt;
