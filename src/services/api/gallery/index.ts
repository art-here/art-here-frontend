import api from "..";
import { PER_PAGE } from "../../../constants";
import { TArtImageResponse } from "../../../pages/Home/Gallery/types";

export const getNextImages = async ({
  revisionDateIdx,
  nextIdx
}: NextPageRequest) => {
  const limit = PER_PAGE;
  return api.get<TArtImageResponse>("api/image/media", {
    params: {
      revisionDateIdx,
      nextIdx,
      limit
    }
  });
};

export const searchByName = async (name: string) => {
  const limit = PER_PAGE;
  return api.get<Omit<TArtImageResponse, "nextRevisionDateIdx">>(
    "api/image/media/name",
    {
      params: {
        name,
        limit
      }
    }
  );
};

export type NextPageRequest = {
  revisionDateIdx: string;
  nextIdx: number;
  limit?: number;
};
