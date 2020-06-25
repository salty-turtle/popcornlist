import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestPopularMovies } from "../../redux/actions/index";
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
      autoHeight: true,
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
            <div className="swiper-slide">
              <div className="home-text-wrapper">
                <div className="home-text-container">
                  <div className="home-title">{movie.original_title}</div>
                  {/*NEED TO FIX GENRE */}
                  <div className="home-genre">Action, Adventure</div>{" "}
                  <div className="home-rating">
                    <i className="fas fa-star"></i> {movie.vote_average} Rating
                  </div>
                  <br />
                  <div className="home-description">{movie.overview}</div>
                </div>
                <div className="home-backdrop-border">
                  <div className="home-backdrop-gradient">
                    <Link to={`/movies/${movie.id}`}>
                      <img
                        className="home-backdrop-image"
                        src={`${config.base.images.secure_base_url}${config.base.images.backdrop_sizes[2]}${movie.backdrop_path}`}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="swiper-pagination"></div>
    </div>
  );
}

export default HomeSlide;
