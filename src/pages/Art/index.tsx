import { useParams } from "react-router-dom";
import ArtView from "./View";
import useArtSatisfaction from "./hooks/useArtSatisfaction";

interface RouteParams {
  id?: number;
}

export interface IArtProps {
  artId: number;
}

const Art = () => {
  const params: RouteParams = useParams();
  const artId = Number(params.id);

  const artSatisfaction = useArtSatisfaction(artId);
  // TODO: accout, satisfaction 컴포넌트 각각에서 useArtSatisfaction 부르기
  console.log(artSatisfaction);

  const ArtProps: IArtProps = {
    artId
  };
  return <ArtView {...ArtProps} />;
};

export default Art;
