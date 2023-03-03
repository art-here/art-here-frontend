import api from "..";
import { PER_PAGE } from "../../../constants";
import { TArtImageResponse } from "../../../pages/Home/Gallery/types";

const getNextImages = async ({ revisionDateIdx, nextIdx }: NextPageRequest) => {
  const limit = PER_PAGE;
  return api.get<TArtImageResponse>("api/image/media", {
    params: {
      revisionDateIdx,
      nextIdx,
      limit
    }
  });
};

export default getNextImages;

export type NextPageRequest = {
  revisionDateIdx: string;
  nextIdx: number;
  limit?: number;
};
