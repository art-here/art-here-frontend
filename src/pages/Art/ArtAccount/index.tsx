import { TArtDetail } from "../../../services/art/account";
import useArtAccount from "../hooks/useArtAccount";
import useArtCountAndRating from "../hooks/useArtCountAndRating";
import ArtAccountView from "./View";

export interface IArtAccountProps {
  starRating: number;
  postCount: number;
  artAccountInfo?: Partial<TArtDetail>;
}

const ArtAccount = ({ artId }: { artId: number }) => {
  const artCountAndRating = useArtCountAndRating(artId);
  const starRating = artCountAndRating?.starRating ?? 0;
  const postCount = artCountAndRating?.postCount ?? 0;

  const artAccountInfo = useArtAccount(artId);

  const ArtAccountProps = {
    starRating,
    postCount,
    artAccountInfo
  };
  return <ArtAccountView {...ArtAccountProps} />;
};

export default ArtAccount;
