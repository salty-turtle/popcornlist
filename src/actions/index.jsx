import * as types from "./types";
import API from "../api/api";

export const requestConfig = () => {
  return (dispatch) => {
    return API.get("/configuration").then((res) => {
      dispatch({
        type: types.REQUEST_CONFIG,
        payload: res.data,
      });

      dispatch({
        type: types.REQUEST_CONFIG_COMPLETE,
      });
    });
  };
};

// export const requestPopularMovies = () => {
//   return (dispatch) => {
//     return API.get("/movie/popular").then((res) => {
//       dispatch({
//         type: types.REQUEST_POPULAR_MOVIES,
//         payload: res.data,
//       });

//       dispatch({
//         type: types.REQUEST_POPULAR_MOVIES_COMPLETE,
//       });
//     });
//   };
// };

export const requestPopularMovies = () => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_POPULAR_MOVIES,
    });

    return API.get("/movie/popular").then((res) => {
      dispatch({
        type: types.REQUEST_POPULAR_MOVIES_COMPLETE,
        payload: res.data,
      });
    });
  };
};
