import * as types from "../actions/types";

const initialState = {
  movies: { loading: true },
  shows: { loading: true },
  people: { loading: true },
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
    case types.REQUEST_SEARCH_SHOWS:
      return {
        ...state,
        shows: {
          loading: true,
        },
      };
    case types.REQUEST_SEARCH_SHOWS_COMPLETE:
      return {
        ...state,
        shows: {
          ...action.payload,
          loading: false,
        },
      };
    case types.REQUEST_SEARCH_PEOPLE:
      return {
        ...state,
        people: {
          loading: true,
        },
      };
    case types.REQUEST_SEARCH_PEOPLE_COMPLETE:
      return {
        ...state,
        people: {
          ...action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
};
