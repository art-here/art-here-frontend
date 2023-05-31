import { ISearcherProps } from "./types";
import SearcherView from "./View";
import { PROPERTIES_SEARCH } from "../../constants/index";
import useRouter from "../../hooks/useRouter";
import { useSetRecoilState } from "recoil";
import { searchedArts } from "../../store/gallery";

const Searcher = () => {
  const { routeTo, path } = useRouter();
  const initializeSearchedArts = useSetRecoilState(searchedArts);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    initializeSearchedArts([]);

    const formData = new FormData(e.currentTarget);
    const query = formData.get("search-query") as string;
    const filter = formData.get("select-filter") as string;

    const searchURL = `search?filter=${filter}&query=${query}`;
    routeTo(searchURL);
  };

  const SearcherProps: ISearcherProps = {
    PROPERTIES_SEARCH,
    onSearch
  };
  return <SearcherView {...SearcherProps} />;
};

export default Searcher;
