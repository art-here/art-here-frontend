import { useQuery } from "@tanstack/react-query";
import CACHE_KEYS from "../../../services/cacheKeys";
import { TArtDetail, getArtDetailInfo } from "../../../services/art/account";
import { AxiosError } from "axios";

const useArtAccount = (id: number) => {
  const { data: ArtAccountDetail } = useQuery<
    TArtDetail,
    AxiosError,
    Partial<TArtDetail>
  >(CACHE_KEYS.art(id), () => getArtDetailInfo(id), {
    select: (data) => {
      return {
        artName: data.artName,
        agency: data.agency,
        info: data.info,
        roadAddress: data.roadAddress,
        imageURL: data.imageURL
      };
    }
  });

  return ArtAccountDetail;
};

export default useArtAccount;
