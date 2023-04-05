import { ISearcherProps } from "./types";
import SearcherView from "./View";
import { PROPERTIES_SEARCH } from "../../constants/index";
import useRouter from "../../hooks/useRouter";
import useSearchGalleryByFilter from "../../hooks/Search/useSearchGallery";
import { useSetRecoilState } from "recoil";
import { searchedArts } from "../../store/gallery";

const Searcher = () => {
  const { routeTo } = useRouter();
  const setSearchedArts = useSetRecoilState(searchedArts);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("search-query") as string;
    const filter = formData.get("select-filter") as string;

    const searchURL = `search?filter=${filter}&query=${query}`;
    setSearchedArts([]);
    routeTo(searchURL);
  };

  const SearcherProps: ISearcherProps = {
    PROPERTIES_SEARCH,
    onSearch
  };
  return <SearcherView {...SearcherProps} />;
};

export default Searcher;
