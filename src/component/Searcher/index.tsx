import { ISearcherProps } from "./types";
import SearcherView from "./View";
import { PROPERTIES_SEARCH } from "../../constants/index";
import useRouter from "../../hooks/useRouter";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchedArts, userCategory } from "../../store/gallery";
import { useRef } from "react";

const Searcher = () => {
  const { routeTo } = useRouter();
  const searchInputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const initializeSearchedArts = useSetRecoilState(searchedArts);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    if (!searchInputRef.current) return;
    if (!searchInputRef.current.value) return;
    e.preventDefault();
    initializeSearchedArts([]);

    const formData = new FormData(e.currentTarget);
    const query = formData.get("search-query") as string;
    const filter = formData.get("select-filter") as string;

    const searchURL = `/home/search?filter=${filter}&query=${query}`;
    routeTo(searchURL);
  };

  const SearcherProps: ISearcherProps = {
    PROPERTIES_SEARCH,
    onSearch,
    searchInputRef
  };
  return <SearcherView {...SearcherProps} />;
};

export default Searcher;
