import * as types from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_CONFIG:
      return { base: action.payload };
    default:
      return state;
  }
};
