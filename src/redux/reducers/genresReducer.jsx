import * as types from "../actions/types";

const initialState = {
  movies: { loading: true },
  shows: { loading: true },
  genreList: [],
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
          loading: false,
        },
        genreList: [...state.genreList, action.payload.genres],
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
          loading: false,
        },
        genreList: [...state.genreList, action.payload.genres],
      };
    default:
      return state;
  }
};
