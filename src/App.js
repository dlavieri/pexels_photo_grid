import React, { useEffect, useState } from "react";
import Page from "./components/Page";
import Search from "./components/Search";
import useApi from "./hooks/useApi";

const App = () => {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const { loading, photos, pageCount, error } = useApi(
    query,
    perPage,
    currentPage
  );

  const onPageSelect = () => {};

  return (
    <>
      <h1>This is a React App.</h1>
      <Search />
      <Page
        photos={photos}
        onPageSelect={onPageSelect}
        currentPage={currentPage}
        pageCount={pageCount}
        loading={loading}
      />
    </>
  );
};

export default App;
