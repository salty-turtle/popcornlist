import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard.jsx";
import "./MovieCard.scss";

function MovieCarousel(props) {
  const movies = useSelector((state) => state.movies);
  const config = useSelector((state) => state.config);

  return movies.loading ? (
    <div>LOADING...</div>
  ) : (
    movies.popular.results
      .slice(0, 5)
      .map((movie) => <MovieCard movie={movie} config={config} />)
  );
}

export default MovieCarousel;
