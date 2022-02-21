import React from 'react';
import { InputDiv, SearchInput, SearchIcon } from './SearchBar.styles';

const SearchBar = () => {
  return (
    <InputDiv>
      <SearchInput
        value="SearchBar"
        type="text"
        placeholder="Search.."
        onChange={() => {}}
      />
      <SearchIcon />
    </InputDiv>
  );
};

export default SearchBar;
