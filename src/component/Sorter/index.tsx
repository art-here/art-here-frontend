import { useNavigate } from "react-router-dom";
import { ISorterProps } from "./types";
import SorterView from "./View";
import { useSetRecoilState } from "recoil";
import { userCategory } from "../../store/gallery";

const Sorter = () => {
  const navigator = useNavigate();
  const setCategory = useSetRecoilState(userCategory);

  const SorterViewProps: ISorterProps = {
    onClickMap: () => {
      navigator("/home/map");
    },
    onClickGallery: () => {
      setCategory("전체");
      navigator("/home");
    }
  };
  return <SorterView {...SorterViewProps} />;
};

export default Sorter;
