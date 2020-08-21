/* 
  src/actions/addArticlesAction.js
*/

const API_KEY = `2fe954b0a2844ed992865ef802cf421f`;
const GET_NEW_ARTICLE_ATTEMPT = "GET_NEW_ARTICLE_ATTEMPT";
const GET_NEW_ARTICLE_SUCCESS = "GET_NEW_ARTICLE_SUCCESS";
const GET_NEW_ARTICLE_FAILURE = "GET_NEW_ARTICLE_FAILURE";

export const addArticlesAction = ({ searchParam = "", currentPage = 1 }) => {
  const baseUrl = "https://newsapi.org/v2";
  let query = searchParam
    ? `${baseUrl}/everything?q=${searchParam}&pageSize=10&page=${currentPage}&apiKey=${API_KEY}`
    : `${baseUrl}/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
  return (dispatch) => {
    return fetch(query)
      .then((response) => {
        dispatch({
          type: GET_NEW_ARTICLE_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: GET_NEW_ARTICLE_SUCCESS,
          payload: {
            articles: data.articles,
            maxPages: Math.ceil(data.totalResults / 10),
            searchParam,
            currentPage,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_NEW_ARTICLE_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
          },
        });
      });
  };
};

const GET_ADDITIONAL_ARTICLE_ATTEMPT = "GET_ADDITIONAL_ARTICLE_ATTEMPT";
const GET_ADDITIONAL_ARTICLE_SUCCESS = "GET_ADDITIONAL_ARTICLE_SUCCESS";
const GET_ADDITIONAL_ARTICLE_FAILURE = "GET_ADDITIONAL_ARTICLE_FAILURE";

export const addAdditionalArticlesAction = () => {
  const baseUrl = "https://newsapi.org/v2";
  let query = `${baseUrl}/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
  console.log(query);
  return (dispatch) => {
    console.log("here2");
    return fetch(query)
      .then((response) => {
        dispatch({
          type: GET_ADDITIONAL_ARTICLE_ATTEMPT,
          payload: {
            loading: true,
          },
        });
        // console.log(response.json());
        // console.log(response.then((results) => results));
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_ADDITIONAL_ARTICLE_SUCCESS,
          payload: {
            articles: data.articles,
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: GET_ADDITIONAL_ARTICLE_FAILURE,
          payload: {
            error: "Error: Failed to fetch",
          },
        });
      });
  };
};
