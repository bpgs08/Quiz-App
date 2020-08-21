/*
  src/actions/addArticlesReducer.js
*/

export const addArticlesReducer = (state = {}, { type, payload }) => {
  console.log(state, "state");
  switch (type) {
    case "GET_NEW_ARTICLE_ATTEMPT":
      return {
        ...state,
        loading: true,
      };
    case "GET_NEW_ARTICLE_SUCCESS":
      return {
        ...state,
        articles: payload.articles,
        maxPages: payload.maxPages,
        searchParam: payload.searchParam,
        currentPage: payload.currentPage,
        loading: false,
      };
    case "GET_NEW_ARTICLE_FAILURE":
      return {
        ...state,
        error: payload.error,
      };
    case "GET_ADDITIONAL_ARTICLE_ATTEMPT":
      return {
        ...state,
        loading: true,
      };
    case "GET_ADDITIONAL_ARTICLE_SUCCESS":
      return {
        ...state,
        articles: [...state.articles, ...payload.articles],
        loading: false,
      };
    case "GET_ADDITIONAL_ARTICLE_FAILURE":
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
