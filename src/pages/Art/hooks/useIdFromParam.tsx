import { useParams } from "react-router-dom";

type TRouterParams = {
  id?: number;
};

const useIdFromParam = () => {
  const params: TRouterParams = useParams();
  return Number(params.id);
};

export default useIdFromParam;
