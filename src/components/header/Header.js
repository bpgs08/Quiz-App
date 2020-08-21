import React from "react";

const Header = ({ searchParam = "", currentPage }) => {
  let searchTitle;
  let searchParamLength = searchParam?.length;
  if (searchParamLength <= 0) {
    searchTitle = "Top Headlines";
  } else {
    searchTitle = `Search for: ${searchParam}`;
  }
  return (
    <header className="App-header">
      <h1 className="App-title">{searchTitle}</h1>
      <h2>{searchParamLength > 0 && `Page: ${currentPage}`}</h2>
    </header>
  );
};

export default Header;
