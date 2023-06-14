import ArtView from "./View";
import useArtCountAndRating from "./hooks/useArtCountAndRating";
import useIdFromParam from "./hooks/useIdFromParam";
import { TArtCountAndRating } from "./types";

export interface IArtProps {
  artId: number;
  artCountAndRating?: TArtCountAndRating;
}

const Art = () => {
  const artId = useIdFromParam();
  const artCountAndRating = useArtCountAndRating(artId);

  const ArtProps: IArtProps = {
    artId,
    artCountAndRating
  };
  return <ArtView {...ArtProps} />;
};

export default Art;
