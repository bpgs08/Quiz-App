import React, { useEffect } from "react";
import { connect } from "react-redux";
import Search from "./Search";

import { addArticlesAction } from "../../actions/addArticlesAction";

let SearchContainer = ({
  maxPages,
  searchParam,
  currentPage,
  addArticlesAction,
}) => {
  let mountArticles = () => {
    return addArticlesAction({
      searchParam: "",
      currentPage: currentPage,
    });
  };

  const useMountEffect = (func) => useEffect(func, []);

  useMountEffect(mountArticles);

  let handleSearchParam = (e) => {
    addArticlesAction({
      searchParam: e.target.value,
      currentPage: currentPage,
    });
  };

  let handlePageChange = (e) => {
    let numChange = parseInt(e.target.value, 10);
    addArticlesAction({
      searchParam,
      currentPage: currentPage + numChange,
    });
  };

  return (
    <Search
      maxPages={maxPages}
      searchParam={searchParam}
      currentPage={currentPage}
      handleSearchParam={handleSearchParam}
      handlePageChange={handlePageChange}
    />
  );
};

const mapDispatchToProps = {
  addArticlesAction,
};

const mapStateToProps = ({ addArticlesReducer }) => {
  return {
    maxPages: addArticlesReducer.maxPages,
    searchParam: addArticlesReducer.searchParam,
    currentPage: addArticlesReducer.currentPage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
