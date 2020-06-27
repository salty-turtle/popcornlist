import * as types from "../actions/types";

const initialState = {
  popular: {},
  topRated: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_POPULAR_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_POPULAR_MOVIES_COMPLETE:
      return {
        ...state,
        popular: action.payload,
        loading: false,
      };
      case types.REQUEST_TOP_RATED_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_TOP_RATED_MOVIES_COMPLETE:
      return {
        ...state,
        topRated: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
