import useArtInfo from "../../../hooks/Map/useArtInfo";
import { TArtInfoProps } from "./types";
import ArtInfoView from "./View/ArtInfoView";

const ArtInfo = ({ artId }: TArtInfoProps) => {
  const { data } = useArtInfo(artId);
  return <ArtInfoView artInfo={data} />;
};

export default ArtInfo;
