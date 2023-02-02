import { useState } from "react";
import { ISearcherProps, TPROPERTIES_SEARCH } from "./types";
import SearcherView from "./View";
import { PROPERTIES_SEARCH } from "../../constants/index";

const Searcher = () => {
  const [selectValue, SetSelectValue] = useState("oldAddress");

  const SearcherProps: ISearcherProps = {
    PROPERTIES_SEARCH,
    selectValue,
    onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => {
      SetSelectValue(e.target.value);
    }
  };
  return <SearcherView {...SearcherProps} />;
};

export default Searcher;
