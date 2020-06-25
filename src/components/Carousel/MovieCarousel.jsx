import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard.jsx";
import "./Carousel.scss";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

function MovieCarousel(props) {
  const movies = useSelector((state) => state.movies);
  const config = useSelector((state) => state.config);

  useEffect(() => {
    var swiper2 = new Swiper(".swiper2", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  return movies.loading ? (
    <div>LOADING...</div>
  ) : (
    <div class="swiper-container swiper2">
      <div class="swiper-wrapper">
        {movies.popular.results.slice(0, 5).map((movie) => (
          <MovieCard movie={movie} config={config} />
        ))}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  );
}

export default MovieCarousel;
