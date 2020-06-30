import * as types from "../actions/types";

const initialState = {
  movies: { loading: true },
  // shows: { loading: true, },
  // people: { loading: true, },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_SEARCH_MOVIES:
      return {
        ...state,
        movies: {
          loading: true,
        },
      };
    case types.REQUEST_SEARCH_MOVIES_COMPLETE:
      return {
        ...state,
        movies: {
          ...action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
};
