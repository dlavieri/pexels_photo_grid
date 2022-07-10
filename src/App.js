import React from "react";
import Page from "./components/Page";
import Search from "./components/Search";
import useApi from "./hooks/useApi";
import { usePhotosContext } from "./providers/photosProvider";

const App = () => {
  const { currentPage, perPage, query } = usePhotosContext();
  const { loading, photos, pageCount } = useApi(query, perPage, currentPage);

  return (
    <>
      <Search />
      <Page photos={photos} pageCount={pageCount} loading={loading} />
    </>
  );
};

export default App;
