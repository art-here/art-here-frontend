import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Search = () => {
  const params = useParams();
  console.log(params);
  return <>{Outlet}</>;
};

export default Search;
