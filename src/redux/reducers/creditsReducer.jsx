import * as types from "../actions/types";

const initialState = {
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_CREDITS:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_CREDITS_COMPLETE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
