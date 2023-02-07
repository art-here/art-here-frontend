import { useState } from "react";
import { ISearcherProps, TPROPERTIES_SEARCH } from "./types";
import SearcherView from "./View";

const Searcher = () => {
  const [selectValue, SetSelectValue] = useState("oldAddress");

  const PROPERTIES_SEARCH: TPROPERTIES_SEARCH[] = [
    { property: "artName", propertyTitle: "작품 이름으로 검색" },
    { property: "oldAddress", propertyTitle: "옛 주소로 검색" },
    { property: "roadAddress", propertyTitle: "도로명 주소로 검색" }
  ];

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
