import React from "react";
import { SSearchForm, SSearchInput, SSearchLabel } from "./Search.style";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <SSearchForm>
      <SSearchLabel>
        <FiSearch />
      </SSearchLabel>
      <SSearchInput placeholder="지역 이름을 입력하세요. OO구" />
      <button> 검색 </button>
    </SSearchForm>
  );
}
