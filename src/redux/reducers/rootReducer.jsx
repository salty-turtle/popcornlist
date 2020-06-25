import { combineReducers } from "redux";
import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({
  config: configReducer,
  movies: moviesReducer,
});

export default rootReducer;
