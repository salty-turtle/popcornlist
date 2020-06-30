import { combineReducers } from "redux";
import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";
import genresReducer from "./genresReducer";
import creditsReducer from "./creditsReducer";
import showsReducer from "./showsReducer";
import showReducer from "./showReducer";

const rootReducer = combineReducers({
  config: configReducer,
  movies: moviesReducer,
  movie: movieReducer,
  genres: genresReducer,
  credits: creditsReducer,
  shows: showsReducer,
  show: showReducer,
});

export default rootReducer;
