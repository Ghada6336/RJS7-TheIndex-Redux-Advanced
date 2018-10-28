import { combineReducers } from "redux";

import authorsReducer from "./authors";
import booksReducer from "./books";

const rootReducer = combineReducers({
  rootAuthors: authorsReducer,
  rootBooks: booksReducer
});

export default rootReducer;
