import { ISearcherProps } from "./types";
import SearcherView from "./View";
import { PROPERTIES_SEARCH } from "../../constants/index";
import useSearchByName from "../../hooks/Gallery/useSearchByName";
import useRouter from "../../hooks/useRouter";

const Searcher = () => {
  const { routeTo } = useRouter();

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
