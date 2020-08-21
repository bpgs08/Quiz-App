import React from "react";
import styled from "styled-components";

const Search = ({
  maxPages,
  searchParam,
  currentPage,
  handleSearchParam,
  handlePageChange,
}) => {
  return (
    <SearchContainer>
      <SearchInput
        id="SearchHere"
        placeholder="Search here"
        value={searchParam}
        onChange={handleSearchParam}
        type="text"
      />
      {searchParam && (
        <PaginationContainer>
          <button
            disabled={currentPage === 1}
            value={-1}
            onClick={handlePageChange}
          >
            back
          </button>
          <button
            disabled={currentPage === maxPages}
            value={1}
            onClick={handlePageChange}
          >
            forward
          </button>
        </PaginationContainer>
      )}
    </SearchContainer>
  );
};

const SearchInput = styled.input`
  margin-top: 20px;
`;

const PaginationContainer = styled.div`
  margin-top: 10px;
  display: flex;
  width: 200px;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: auto;
  align-items: center;
`;

export default Search;
