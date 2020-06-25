import * as types from "../actions/types";

const initialState = {
  genreList: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_GENRES":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST_GENRES_COMPLETE":
      return {
        ...state,
        genreList: action.payload.genres,
        loading: false,
      };
    default:
      return state;
  }
};
