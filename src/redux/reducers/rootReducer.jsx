import { combineReducers } from "redux";
import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";
import genresReducer from "./genresReducer";

const rootReducer = combineReducers({
  config: configReducer,
  movies: moviesReducer,
  genres: genresReducer,
});

export default rootReducer;
