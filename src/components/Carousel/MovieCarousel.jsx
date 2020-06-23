import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../../actions/index";
import MovieCard from "./MovieCard.jsx"
import "./MovieCard.scss";

function MovieCarousel(props) {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const config = useSelector((state) => state.config);

  // useEffect(() => {
  //   dispatch(requestPopularMovies());
  // }, []);

  // useEffect(() => {
  //   // console.log(movies.loading)
  //   if (!movies.loading && cards.length === 0) {
  //   }
  // }, [movies.loading, cards]);

  return movies.loading ? (
    <div>LOADING...</div>
  ) : (
    movies.popular.results.slice(0, 5).map((movie) => <MovieCard movie={movie}/>)
  );
}

export default MovieCarousel;
