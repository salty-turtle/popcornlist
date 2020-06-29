import * as types from "../actions/types";

const initialState = {
  movies: { genreList: [], loading: true },
  shows: { genreList: [], loading: true },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_MOVIE_GENRES":
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: true,
        },
      };
    case "REQUEST_MOVIE_GENRES_COMPLETE":
      return {
        ...state,
        movies: {
          ...state.movies,
          genreList: action.payload.genres,
          loading: false,
        },
      };
      case "REQUEST_SHOW_GENRES":
      return {
        ...state,
        shows: {
          ...state.shows,
          loading: true,
        },
      };
    case "REQUEST_SHOW_GENRES_COMPLETE":
      return {
        ...state,
        shows: {
          ...state.shows,
          genreList: action.payload.genres,
          loading: false,
        },
      };
    default:
      return state;
  }
};
