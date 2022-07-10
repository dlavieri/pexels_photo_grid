import React, { createContext, useContext, useState } from "react";

export const photosCtx = createContext({});

export const usePhotosContext = () => useContext(photosCtx);

const PhotosProvider = ({ children }) => {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  return (
    <photosCtx.Provider
      value={{
        perPage,
        setPerPage,
        currentPage,
        setCurrentPage,
        query,
        setQuery,
      }}
    >
      {children}
    </photosCtx.Provider>
  );
};

export default PhotosProvider;
