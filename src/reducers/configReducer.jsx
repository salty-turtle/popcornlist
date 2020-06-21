import * as types from "../actions/types";

const initialState = {
  base: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_CONFIG:
      return {
        ...state,
        base: action.payload,
      };
    default:
      return state;
  }
};
