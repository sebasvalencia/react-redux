import { createStore, compose } from "redux";

//hook up react with redux
import { syncHistoryWithStore } from "react-router-redux";

import { browserHistory } from "react-router";

//import the root reducer
import rootReducer from "./reducers/index";

//import data
import comments from "./data/comments";
import posts from "./data/posts";

//create an object for the default data
const defaultState = {
  posts,
  comments
};

//Create store (reducers, defaultState)
const store = createStore(rootReducer, defaultState);
export default store;

//Keep it tracking where I done
export const history = syncHistoryWithStore(browserHistory, store);

