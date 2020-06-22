import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../../actions/index";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
// import "swiper/swiper.scss";
import "./HomeSlide.scss";
import { EffectCoverflow } from "swiper/js/swiper.esm";

function HomeSlide(props) {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const config = useSelector((state) => state.config);

  useEffect(() => {
    dispatch(requestPopularMovies());
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      observer: true,
      autoplay: {
        delay: 10000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
    });
  });

  return movies.loading ? (
    <div>LOADING...</div>
  ) : (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {movies.popular.results.slice(5, 10).map((movie) => {
          return (
            <div
              className="swiper-slide"
              style={{
                background: `linear-gradient(rgb(13, 12, 15, 0.5), rgb(13, 12, 15, 0.5)), center center no-repeat, url(${config.base.images.secure_base_url}${config.base.images.backdrop_sizes[2]}${movie.backdrop_path})`,
                backgroundSize: "cover",
              }}
            ></div>
          );
        })}
      </div>

      <div className="swiper-pagination"></div>
    </div>
  );
}

export default HomeSlide;
