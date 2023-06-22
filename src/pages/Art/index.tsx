import { useQueryClient } from "@tanstack/react-query";
import ArtView from "./View";
import useArtCountAndRating from "./hooks/useArtCountAndRating";
import useIdFromParam from "./hooks/useIdFromParam";
import { TArtCountAndRating } from "./types";
import CACHE_KEYS from "../../services/cacheKeys";
import { TUserProfile } from "../../services/auth/types";

export interface IArtProps {
  user?: TUserProfile | null;
  artId: number;
  artCountAndRating?: TArtCountAndRating;
}

const Art = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<TUserProfile | null>(CACHE_KEYS.me);
  console.log(user);
  console.log(!!user);

  const artId = useIdFromParam();
  const artCountAndRating = useArtCountAndRating(artId);

  const ArtProps: IArtProps = {
    user,
    artId,
    artCountAndRating
  };
  return <ArtView {...ArtProps} />;
};

export default Art;
