import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  requestPopularMovies,
  requestTopRatedMovies,
  requestUpcomingMovies,
  requestPopularShows,
  requestTopRatedShows,
  requestUpcomingShows,
} from "../../redux/actions/index";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "./HomeSlide.scss";
import "../../styles/_carousel.scss";
import Rating from "react-rating";

function HomeSlide(props) {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const config = useSelector((state) => state.config);
  const genres = useSelector((state) => state.genres);
  const genreList = new Map();
  genres.genreList.forEach((item) =>
    item.map((genre) => genreList.set(genre.id, genre.name))
  );

  useEffect(() => {
    dispatch(requestPopularMovies());
    dispatch(requestTopRatedMovies());
    dispatch(requestUpcomingMovies());
    dispatch(requestPopularShows());
    dispatch(requestTopRatedShows());
    dispatch(requestUpcomingShows());
  }, []);

  useEffect(() => {
    var homeSwiper = new Swiper(".home-swiper", {
      loop: true,
      autoHeight: true,
      autoplay: {
        delay: 10000,
      },
      pagination: {
        el: ".home-swiper-pagination",
        type: "progressbar",
      },
    });
  });

  return movies.popular.loading ? (
    <div></div>
  ) : (
    <div>
      <div className="swiper-container home-swiper">
        <div className="swiper-wrapper">
          {movies.popular.results.slice(0, 5).map((movie) => {
            return (
              <div className="swiper-slide">
                <div className="home-text-wrapper">
                  <div className="home-text-container">
                    <div className="home-title">{movie.title}</div>
                    <div className="home-genre">
                      {movie.genre_ids
                        .map((id) => `${genreList.get(id)}`)
                        .join(", ")}
                    </div>
                    <div className="home-rating-container">
                      <Rating
                        className="item-rating-stars"
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={movie.vote_average * 0.5}
                        readonly
                      />
                      <span className="home-rating-text">
                        {movie.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <br />
                    <div className="home-description">{movie.overview}</div>
                  </div>
                  <div className="home-backdrop-border">
                    <div className="home-backdrop-gradient">
                      <Link to={`/movies/${movie.id}`}>
                        <img
                          className="home-backdrop-image"
                          src={`${config.images.secure_base_url}${config.images.backdrop_sizes[2]}${movie.backdrop_path}`}
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
        <div className="swiper-pagination home-swiper-pagination"></div>
      </div>
    </div>
  );

  // const dispatch = useDispatch();

  // const movies = useSelector((state) => state.movies);
  // const config = useSelector((state) => state.config);
  // const genres = useSelector((state) => state.genres);

  // useEffect(() => {
  //   dispatch(requestPopularMovies());
  // }, []);

  // useEffect(() => {
  //   const swiper = new Swiper(".swiper-container", {
  //     slidesPerView: 1,
  //     loop: true,
  //     spaceBetween: 0,
  //     observer: true,
  //     autoHeight: true,
  //     autoplay: {
  //       delay: 10000,
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: "true",
  //     },
  //   });
  // });

  // return movies.loading ? (
  //   <div>LOADING...</div>
  // ) : (
  //   <div className="swiper-container">
  //     <div className="swiper-wrapper">
  //       {movies.popular.results.slice(0, 5).map((movie) => {
  //         return (
  //           <div className="swiper-slide">
  //             <div className="home-text-wrapper">
  //               <div className="home-text-container">
  //                 <div className="home-title">{movie.original_title}</div>
  //                 {/*NEED TO FIX GENRE */}
  //                 <div className="home-genre">Action, Adventure</div>{" "}
  //                 <div className="home-rating">
  //                   <i className="fas fa-star"></i> {movie.vote_average} Rating
  //                 </div>
  //                 <br />
  //                 <div className="home-description">{movie.overview}</div>
  //               </div>
  //               <div className="home-backdrop-border">
  //                 <div className="home-backdrop-gradient">
  //                   <Link to={`/movies/${movie.id}`}>
  //                     <img
  //                       className="home-backdrop-image"
  //                       src={`${config.images.secure_base_url}${config.images.backdrop_sizes[2]}${movie.backdrop_path}`}
  //                       alt=""
  //                     />
  //                   </Link>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>

  //     <div className="swiper-pagination"></div>
  //   </div>
}

export default HomeSlide;
