import * as types from "../actions/types";

const initialState = {
  loading: true,
  base: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_CONFIG:
      return {
        ...state,
        base: action.payload,
      };
    case types.REQUEST_CONFIG_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
