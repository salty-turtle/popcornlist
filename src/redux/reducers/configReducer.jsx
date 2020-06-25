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
        loading: true,
      };
    case types.REQUEST_CONFIG_COMPLETE:
      return {
        ...state,
        loading: false,
        base: action.payload,
      };
    default:
      return state;
  }
};
