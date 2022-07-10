import React, { useState, useEffect } from "react";
import { StyledSearch } from "../styled-components/Search.styled";
import searchIcon from "../assets/magnifying-glass-solid.svg";
import { usePhotosContext } from "../providers/photosProvider";
import useDebounceValue from "../hooks/useDebounceValue";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const debouncedValue = useDebounceValue(searchTerm, 300);
  const { setQuery } = usePhotosContext();

  useEffect(() => {
    if (debouncedValue) {
      setQuery(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <StyledSearch>
      <img src={searchIcon} />
      <input
        data-testid="search"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </StyledSearch>
  );
};

export default Search;
