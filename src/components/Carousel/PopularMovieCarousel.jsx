import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard.jsx";
import "./Carousel.scss";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

function PopularMovieCarousel(props) {
  const movies = useSelector((state) => state.movies);
  const config = useSelector((state) => state.config);
  const genres = useSelector((state) => state.genres);
  const genreList = new Map();
  genres.genreList.map((genre) => genreList.set(genre.id, genre.name));

  useEffect(() => {
    var swiper2 = new Swiper(".swiper2", {
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 70,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 90,
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 110,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  return movies.popularLoading ? (
    <div>LOADING...</div>
  ) : (
    <div className="carousel-container">
      <div className="carousel-title">Popular</div>
      <div className="carousel-wrapper">
        <div className="swiper-container swiper2">
          <div className="swiper-wrapper">
            {movies.popular.results.slice(0, 10).map((movie) => (
              <MovieCard movie={movie} config={config} genreList={genreList} />
            ))}
          </div>
        </div>
        {/* <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> */}
      </div>
    </div>
  );
}

export default PopularMovieCarousel;
