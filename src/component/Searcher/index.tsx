import { ISearcherProps, TProperyForSearch } from "./types";
import SearcherView from "./View";
import useRouter from "../../hooks/useRouter";
import { useSetRecoilState } from "recoil";
import { searchedArts } from "../../store/gallery";
import { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import CACHE_KEYS from "../../services/cacheKeys";
import { useLocation } from "react-router-dom";

const Searcher = () => {
  const queryClient = useQueryClient();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramFilter = params.get("filter") as TProperyForSearch;
  const paramQuery = params.get("query") as string;

  const { routeTo } = useRouter();
  const searchInputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const initializeSearchedArts = useSetRecoilState(searchedArts);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    if (!searchInputRef.current) return;
    if (!searchInputRef.current.value) return;
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("search-query") as string;
    const filter = formData.get("select-filter") as string;
    if (paramFilter === filter && paramQuery === query) return;

    initializeSearchedArts([]);
    queryClient.invalidateQueries(CACHE_KEYS.search());

    const searchURL = `/arts/search?filter=${filter}&query=${query}`;
    routeTo(searchURL);
  };

  const SearcherProps: ISearcherProps = {
    onSearch,
    searchInputRef
  };
  return <SearcherView {...SearcherProps} />;
};

export default Searcher;
