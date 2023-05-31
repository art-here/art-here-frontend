import useArtSatisfaction from "../hooks/useArtSatisfaction";
import ArtAccountView from "./View";

export interface IArtAccountProps {
  starRating: number;
  postCount: number;
}

const ArtAccount = ({ artId }: { artId: number }) => {
  const artCountAndRating = useArtSatisfaction(artId);
  const starRating = artCountAndRating?.starRating ?? 0;
  const postCount = artCountAndRating?.postCount ?? 0;

  const ArtAccountProps = {
    starRating,
    postCount
  };
  return <ArtAccountView {...ArtAccountProps} />;
};

export default ArtAccount;
