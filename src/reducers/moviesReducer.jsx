import * as types from "../actions/types";

const initialState = {
  popular: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_POPULAR_MOVIES":
      return {
        ...state,
        popular: action.payload,
      };
    case "REQUEST_POPULAR_MOVIES_COMPLETE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
