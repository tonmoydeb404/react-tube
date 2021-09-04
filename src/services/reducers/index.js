import { combineReducers } from "redux";
import { searchReducer } from "./searchReducers";
import { getVideoReducer, selectVideoReducer } from "./videoReducers";

const reducers = combineReducers({
  getVideo: getVideoReducer,
  selectVideo: selectVideoReducer,
  search: searchReducer,
});

export default reducers;
