import { useNavigate } from "react-router-dom";
import { ISorterProps } from "./types";
import SorterView from "./View";
import { useSetRecoilState } from "recoil";
import { galleryArts, searchedArts, userCategory } from "../../store/gallery";

const Sorter = () => {
  const navigator = useNavigate();

  const setCategory = useSetRecoilState(userCategory);
  const setGalleryArts = useSetRecoilState(galleryArts);
  const setSearchedArts = useSetRecoilState(searchedArts);

  const initializeCategoryAndArts = () => {
    setGalleryArts([]);
    setSearchedArts([]);
    setCategory("전체");
  };

  const SorterViewProps: ISorterProps = {
    onClickMap: () => {
      navigator("/home/map");
    },
    onClickGallery: () => {
      navigator("/home");
      setGalleryArts([]);
      setSearchedArts([]);
      setCategory("전체");
    }
  };
  return <SorterView {...SorterViewProps} />;
};

export default Sorter;
