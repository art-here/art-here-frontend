import { useNavigate } from "react-router-dom";
import { ISorterProps } from "./types";
import SorterView from "./View";
import { useSetRecoilState } from "recoil";
import { userCategory } from "../../store/gallery";

const Sorter = () => {
  const navigator = useNavigate();
  const setCategory = useSetRecoilState(userCategory);

  const initializeCategoryAndArts = () => {
    setGalleryArts([]);
    setSearchedArts([]);
    setCategory("전체");
  };

  const SorterViewProps: ISorterProps = {
    onClickMap: () => {
      navigator("/arts/map");
    },
    onClickGallery: () => {
      setCategory("전체");
      navigator("/arts");
    }
  };
  return <SorterView {...SorterViewProps} />;
};

export default Sorter;
