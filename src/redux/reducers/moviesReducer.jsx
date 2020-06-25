import * as types from "../actions/types";

const initialState = {
  popular: {},
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
    default:
      return state;
  }
};
