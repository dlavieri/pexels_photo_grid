import React, { useEffect, useState } from "react";
import Page from "./components/Page";
import Search from "./components/Search";
import { createClient } from "pexels";
import { API_KEY } from "../api";

const App = () => {
  const client = createClient(API_KEY);
  const [pageCount, setPageCount] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchCuratedPhotos();
  }, [perPage, currentPage]);

  const fetchCuratedPhotos = async () => {
    const response = await client.photos.curated({ per_page: perPage });
    const count = Math.ceil(response.total_results / perPage);
    setPageCount(count);
    setPhotos(response.photos);
  };

  const fetchQueryPhotos = async () => {
    const response = client.photos.search({ query, per_page: perPage });
  };

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
      />
    </>
  );
};

export default App;
