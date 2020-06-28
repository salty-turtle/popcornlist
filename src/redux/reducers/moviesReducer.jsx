import * as types from "../actions/types";

const initialState = {
  popular: { loading: true },
  topRated: { loading: true },
  upcoming: { loading: true },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_POPULAR_MOVIES:
      return {
        ...state,
        popular: {
          ...state.popular,
          loading: true,
        },
      };
    case types.REQUEST_POPULAR_MOVIES_COMPLETE:
      return {
        ...state,
        popular: {
          ...state.popular,
          ...action.payload,
          loading: false,
        },
      };
    case types.REQUEST_TOP_RATED_MOVIES:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          loading: true,
        },
      };
    case types.REQUEST_TOP_RATED_MOVIES_COMPLETE:
      return {
        ...state,
        topRated: {
          ...state.topRated,
          ...action.payload,
          loading: false,
        },
      };
    case types.REQUEST_UPCOMING_MOVIES:
      return {
        ...state,
        upcoming: {
          ...state.upcoming,
          loading: true,
        },
      };
    case types.REQUEST_UPCOMING_MOVIES_COMPLETE:
      return {
        ...state,
        upcoming: {
          ...state.upcoming,
          ...action.payload,
          loading: true,
        },
      };
    default:
      return state;
  }
};
