import * as types from "../actions/types";

const initialState = {
  popular: { loading: true },
  topRated: { loading: true },
  upcoming: { loading: true },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_POPULAR_SHOWS:
      return {
        ...state,
        popular: {
          ...state.popular,
          loading: true,
        },
      };
    case types.REQUEST_POPULAR_SHOWS_COMPLETE:
      return {
        ...state,
        popular: {
          ...state.popular,
          ...action.payload,
          loading: false,
        },
      };
    case types.REQUEST_TOP_RATED_SHOWS:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          loading: true,
        },
      };
    case types.REQUEST_TOP_RATED_SHOWS_COMPLETE:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          ...action.payload,
          loading: false,
        },
      };
    case types.REQUEST_UPCOMING_SHOWS:
      return {
        ...state,
        upcoming: {
          ...state.upcoming,
          loading: true,
        },
      };
    case types.REQUEST_UPCOMING_SHOWS_COMPLETE:
      return {
        ...state,
        upcoming: {
          ...state.upcoming,
          ...action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
};
