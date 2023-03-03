import { useInfiniteQuery } from "@tanstack/react-query";
import useGetImages from "./useGetImages";

const useNextImages = () => {
  const { data } = useGetImages();
  // const { data } = useInfiniteQuery(["posts"], ({ pageParam = 1 }) =>
  //   getNextImages(pageParam)
  // );
  console.log(data);
};

export default useNextImages;
