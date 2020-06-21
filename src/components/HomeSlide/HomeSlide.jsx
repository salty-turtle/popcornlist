import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../../actions/index";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "./HomeSlide.scss";

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
      observeParents: true,
      autoplay: {
        delay: 10000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  return movies.loading ? (
    <div>LOADING...</div>
  ) : (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {movies.popular.results.slice(0, 5).map((movie) => {
          return (
            <div className="swiper-slide">
              <img src="" alt="" />
              {/* {console.log(movie)} */}
              {/* {console.log(config.base.images.secure_base_url)} */}
            </div>
          );
        })}
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}

export default HomeSlide;
