import { combineReducers } from "redux";
import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";
import genresReducer from "./genresReducer";

const rootReducer = combineReducers({
  config: configReducer,
  movies: moviesReducer,
  movie: movieReducer,
  genres: genresReducer,
});

export default rootReducer;
