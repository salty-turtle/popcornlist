import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../../actions/index";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
// import "swiper/swiper.scss";
import "./HomeSlide.scss";
import { EffectCoverflow } from "swiper/js/swiper.esm";
import { findByLabelText } from "@testing-library/react";

function HomeSlide(props) {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const config = useSelector((state) => state.config);

  useEffect(() => {
    dispatch(requestPopularMovies());
  }, []);

  useEffect(() => {
    var swiper1 = new Swiper(".swiper1", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      observer: true,
      autoHeight: true,
      autoplay: {
        delay: 10000,
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: "true",
      },
    });
  });

  return movies.loading ? (
    <div>LOADING...</div>
  ) : (
    <div className="swiper-container swiper1">
      <div className="swiper-wrapper">
        {movies.popular.results.slice(0, 5).map((movie) => {
          return (
            <div className="swiper-slide">
              <div className="home-text-wrapper">
                <div className="home-text-container">
                  <div className="home-title">{movie.original_title}</div>
                  {/*NEED TO FIX GENRE */}
                  <div className="home-genre">Action, Adventure</div>{" "}
                  <div className="home-rating">
                    <i class="fas fa-star"></i> 7.1 {movie.vote_average}
                  </div>
                  <br />
                  <div className="home-description">{movie.overview}</div>
                </div>
                <div className="home-backdrop-border">
                  <div className="home-backdrop-gradient">
                    <img
                      className="home-backdrop-image"
                      src={`${config.base.images.secure_base_url}${config.base.images.backdrop_sizes[2]}${movie.backdrop_path}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* <img
                src={`${config.base.images.secure_base_url}${config.base.images.backdrop_sizes[2]}${movie.backdrop_path}`}
                alt=""
              /> */}
            </div>
          );
        })}
      </div>

      <div className="swiper-pagination swiper-pagination1"></div>
    </div>
  );
}

export default HomeSlide;
