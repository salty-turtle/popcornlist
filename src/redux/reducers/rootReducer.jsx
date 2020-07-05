import { combineReducers } from "redux";
import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";
import genresReducer from "./genresReducer";
import showsReducer from "./showsReducer";
import showReducer from "./showReducer";
import personReducer from "./personReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  config: configReducer,
  movies: moviesReducer,
  movie: movieReducer,
  genres: genresReducer,
  shows: showsReducer,
  show: showReducer,
  person: personReducer,
  search: searchReducer,
});

export default rootReducer;
