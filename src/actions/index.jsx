import * as types from "./types";
import API from "../api/api";

export const requestConfig = () => {
  return (dispatch) => {
    const config = API.get("/configuration").then((res) =>
      dispatch({
        type: types.REQUEST_CONFIG,
        payload: res.data,
      })
    );
    return config;
  };
};
