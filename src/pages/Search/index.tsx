import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { TProperyForSearch } from "../../component/Searcher/types";
import useSearchGallery from "../../hooks/Search/useSearchGallery";

const Search = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const filter = params.get("filter") as TProperyForSearch;
  const query = params.get("query") as string;

  useSearchGallery(filter, query);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Search;
