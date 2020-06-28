import * as types from "../actions/types";

const initialState = {
  popular: {},
  topRated: {},
  upcoming: {},
  popularLoading: true,
  topRatedLoading: true,
  upcomingLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_POPULAR_MOVIES:
      return {
        ...state,
        popularLoading: true,
      };
    case types.REQUEST_POPULAR_MOVIES_COMPLETE:
      return {
        ...state,
        popular: action.payload,
        popularLoading: false,
      };
    case types.REQUEST_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedLoading: true,
      };
    case types.REQUEST_TOP_RATED_MOVIES_COMPLETE:
      return {
        ...state,
        topRated: action.payload,
        topRatedLoading: false,
      };
    case types.REQUEST_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingLoading: true,
      };
    case types.REQUEST_UPCOMING_MOVIES_COMPLETE:
      return {
        ...state,
        upcoming: action.payload,
        upcomingLoading: false,
      };
    default:
      return state;
  }
};
