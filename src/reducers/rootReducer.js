/*
  src/actions/rootReducer.js
*/

import { combineReducers } from "redux";
import { addArticlesReducer } from "./addArticlesReducer";

export const rootReducer = combineReducers({
  addArticlesReducer,
});
