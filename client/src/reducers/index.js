import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import { fetchPostsReducer } from "./FetchAllPosts";

import usersReducer from "./users";

export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  fetchPostsReducer,
});
