/*
  src/actions/rootReducer.js
*/

import { combineReducers } from "redux";
import { addQuestionsReducer } from "./addQuestionsReducer";

export const rootReducer = combineReducers({
  addQuestionsReducer,
});
