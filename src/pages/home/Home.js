import React from "react";
import { connect } from "react-redux";
import Header from "../../components/header";
import Search from "../../components/search";
import Articles from "../../components/articles";

import { addAdditionalArticlesAction } from "../../actions/addArticlesAction";

let Home = ({ history, match, addAdditionalArticlesAction }) => {
  console.log(match);
  let addNew = () => {
    return addAdditionalArticlesAction();
  };

  return (
    <div className="App">
      <Header />
      <Search />
      <Articles />
      <button onClick={() => addNew()}>Add Articles</button>
    </div>
  );
};

const mapDispatchToProps = {
  addAdditionalArticlesAction,
};

const mapStateToProps = ({ addArticlesReducer }) => {
  return {
    maxPages: addArticlesReducer.maxPages,
    searchParam: addArticlesReducer.searchParam,
    currentPage: addArticlesReducer.currentPage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
