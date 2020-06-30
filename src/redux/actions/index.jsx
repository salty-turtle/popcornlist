import * as types from "./types";
import API from "../../api/api";

const topRatedParams = {
  params: {
    language: "en-US",
    region: "US",
    sort_by: "vote_average.desc",
    include_adult: false,
    include_video: false,
    page: 1,
    "vote_count.gte": 4000,
  },
};

export const requestConfig = () => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_CONFIG,
    });

    return API.get("/configuration").then((res) => {
      dispatch({
        type: types.REQUEST_CONFIG,
        payload: res.data,
      });

      dispatch({
        type: types.REQUEST_CONFIG_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestMovieGenres = () => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_MOVIE_GENRES,
    });

    return API.get("/genre/movie/list").then((res) => {
      dispatch({
        type: types.REQUEST_MOVIE_GENRES_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestShowGenres = () => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_SHOW_GENRES,
    });

    return API.get("/genre/tv/list").then((res) => {
      dispatch({
        type: types.REQUEST_SHOW_GENRES_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestMovie = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_MOVIE,
    });

    return API.get(`/movie/${id}`, {
      params: {
        append_to_response: "videos,recommendations,similar,credits",
      },
    }).then((res) => {
      dispatch({
        type: types.REQUEST_MOVIE_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestShow = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_SHOW,
    });

    return API.get(`/tv/${id}`, {
      params: {
        append_to_response: "videos,recommendations,similar,credits",
      },
    }).then((res) => {
      dispatch({
        type: types.REQUEST_SHOW_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestMovieCredits = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_MOVIE_CREDITS,
    });

    return API.get(`/movie/${id}/credits`).then((res) => {
      dispatch({
        type: types.REQUEST_MOVIE_CREDITS_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestShowCredits = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_SHOW_CREDITS,
    });

    return API.get(`/tv/${id}/credits`).then((res) => {
      dispatch({
        type: types.REQUEST_SHOW_CREDITS_COMPLETE,
        payload: res.data,
      });
    });
  };
};

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

export const requestTopRatedMovies = () => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_TOP_RATED_MOVIES,
    });

    return API.get("/discover/movie", topRatedParams).then((res) => {
      dispatch({
        type: types.REQUEST_TOP_RATED_MOVIES_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestUpcomingMovies = () => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_UPCOMING_MOVIES,
    });

    return API.get("/movie/upcoming").then((res) => {
      dispatch({
        type: types.REQUEST_UPCOMING_MOVIES_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestPopularShows = () => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_POPULAR_SHOWS,
    });

    return API.get("/tv/popular").then((res) => {
      dispatch({
        type: types.REQUEST_POPULAR_SHOWS_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestTopRatedShows = () => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_TOP_RATED_SHOWS,
    });

    return API.get("/discover/tv", topRatedParams).then((res) => {
      dispatch({
        type: types.REQUEST_TOP_RATED_SHOWS_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestUpcomingShows = () => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_UPCOMING_SHOWS,
    });

    return API.get("/tv/on_the_air").then((res) => {
      dispatch({
        type: types.REQUEST_UPCOMING_SHOWS_COMPLETE,
        payload: res.data,
      });
    });
  };
};

export const requestSearchMovies = (str, pageNumber) => {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_SEARCH_MOVIES,
    });

    return API.get(`/search/movie`, {
      params: {
        query: str,
        page: pageNumber,
      },
    }).then((res) => {
      dispatch({
        type: types.REQUEST_SEARCH_MOVIES_COMPLETE,
        payload: res.data,
      });
    });
  };
};
