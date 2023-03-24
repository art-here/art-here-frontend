import { useNavigate } from "react-router-dom";

const useRouter = () => {
  const router = useNavigate();

  return {
    path: window.location.pathname,
    search: window.location.search,
    routeTo: (path: string) => router(path)
  };
};

export default useRouter;
