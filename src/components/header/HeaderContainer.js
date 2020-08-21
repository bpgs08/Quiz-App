import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

const HeaderContainer = ({ searchParam, currentPage }) => {
  return <Header searchParam={searchParam} currentPage={currentPage} />;
};

const mapStateToProps = ({ addArticlesReducer }) => {
  return {
    searchParam: addArticlesReducer.searchParam,
    currentPage: addArticlesReducer.currentPage,
  };
};

export default connect(mapStateToProps)(HeaderContainer);
