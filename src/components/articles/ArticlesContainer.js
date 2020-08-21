import React from "react";
import { connect } from "react-redux";
import Articles from "./Articles";

const ArticlesContainer = ({ articles, loading, error }) => {
  return <Articles articles={articles} loading={loading} error={error} />;
};

const mapStateToProps = ({ addArticlesReducer }) => {
  return {
    articles: addArticlesReducer.articles,
    loading: addArticlesReducer.loading,
    error: addArticlesReducer.error,
  };
};

export default connect(mapStateToProps)(ArticlesContainer);
