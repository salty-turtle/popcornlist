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
        {movies.popular.results.slice(0, 5).map((movie) => {
          return (
            <div
              className="swiper-slide"
              // style={{
              //   background: `linear-gradient(rgb(13, 12, 15, 0.5), rgb(13, 12, 15, 0.5)), center center no-repeat, url(${config.base.images.secure_base_url}${config.base.images.backdrop_sizes[2]}${movie.backdrop_path})`,
              //   backgroundPosition: "top right",
              //   backgroundRepeat: "no-repeat",
              // }}
            >
              <div className="home-text-wrapper">
                <div className="home-text-container">
                  <div className="home-title">Sonic the Hedgehog</div>
                  <div className="home-genre">Action, Adventure</div>
                  <div className="home-rating">
                    <i class="fas fa-star"></i> 7.1 Rating
                  </div>
                  <br />
                  <div className="home-description">
                    Based on the global blockbuster videogame franchise from
                    Sega, Sonic the Hedgehog tells the story of the world’s
                    speediest hedgehog as he embraces his new home on Earth. In
                    this live-action adventure comedy, Sonic and his new best
                    friend team up to defend the planet from the evil genius Dr.
                    Robotnik and his plans for world domination.
                  </div>
                </div>
                <div className="home-backdrop-border">
                  <div className="home-backdrop-gradient">
                    <img
                      className="home-backdrop-image"
                      // style={{
                      //   background: `linear-gradient(rgb(13, 12, 15, 0.5), rgb(13, 12, 15, 0.5)), url(${config.base.images.secure_base_url}${config.base.images.backdrop_sizes[2]}${movie.backdrop_path})`,
                      //   backgroundRepeat: "no-repeat",
                      //   backgroundSize: "cover",
                      // }}
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

      <div className="swiper-pagination"></div>
    </div>
  );
}

export default HomeSlide;
