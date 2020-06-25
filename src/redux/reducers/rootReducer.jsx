import { combineReducers } from "redux";
import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  config: configReducer,
  movies: moviesReducer,
  movie: movieReducer,
});

export default rootReducer;
