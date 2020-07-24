import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestMovie } from "../../redux/actions/index";
import Cast from "../Cast/Cast";
import Rating from "react-rating";
import "./Details.scss";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import ItemCard from "../Carousel/ItemCard";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

function MovieDetails(props) {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const config = useSelector((state) => state.config);
  const movie = useSelector((state) => state.movie);
  const genres = useSelector((state) => state.genres);
  const genreList = new Map();
  genres.genreList.forEach((item) =>
    item.map((genre) => genreList.set(genre.id, genre.name))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(requestMovie(movieId));
  }, []);

  useEffect(() => {
    var recommendedMovieSwiper = new Swiper(".recommended-movie-swiper", {
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
      scrollbar: {
        el: ".scrollbar-1",
        draggable: true,
      },
    });
  });

  function displayInfo(genres, language, time) {
    const result = [];

    if (genres.length !== 0) {
      result.push(genres.map((genre) => genre.name).join(", "));
    } else {
      result.push("N/A Genre");
    }

    if (language.length !== 0) {
      result.push(language[0].name);
    } else {
      result.push("N/A Language");
    }

    result.push(`${time} min.`);

    return result.join(" | ");
  }

  function displayTrailer(videos, isModalOpen, setIsModalOpen) {
    let result = videos.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    );

    return result ? (
      <>
        <ModalVideo
          channel="youtube"
          isOpen={isModalOpen}
          videoId={result.key}
          onClose={() => setIsModalOpen(!isModalOpen)}
        />
        <button
          className="button1"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <i className="fas fa-film"></i> Trailer
        </button>
      </>
    ) : null;
  }

  function displayImdb(id) {
    if (!id) {
      return;
    }
    return (
      <>
        <a href={`https://www.imdb.com/title/${id}`} target="_blank">
          <button className="button2">
            <i className="fab fa-imdb"></i> IMDb
          </button>
        </a>
      </>
    );
  }

  function displayWebsite(homepage) {
    if (homepage) {
      return (
        <>
          <a href={homepage} target="_blank">
            <button className="button3">
              <i className="fas fa-link"></i> Website
            </button>
          </a>
        </>
      );
    }
  }

  return movie.loading ? (
    <div></div>
  ) : (
    <>
      <div className="item-wrapper">
        <div className="item-container">
          <div className="item-poster">
            <img
              src={`${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`}
              alt=""
            ></img>
          </div>
          <div className="item-text-container">
            <div className="item-title">{movie.title}</div>
            <div className="item-tagline">{movie.tagline}</div>
            <div className="item-info">
              {displayInfo(movie.genres, movie.spoken_languages, movie.runtime)}
            </div>
            <div className="item-rating-container">
              <Rating
                className="item-rating-stars"
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={movie.vote_average * 0.5}
                readonly
              />
              <div className="item-rating-text">
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <div className="item-secondary-title">Synopsis</div>
            <div className="item-synopsis">{movie.overview}</div>
            <div className="item-secondary-title">Cast</div>
            <div className="item-cast">
              <Cast credits={movie.credits} />
            </div>
            <div className="buttons-container">
              {displayTrailer(movie.videos, isModalOpen, setIsModalOpen)}
              {displayImdb(movie.imdb_id)}
              {displayWebsite(movie.homepage)}
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-recommended" />
      {movie.recommendations.results.length > 0 ? (
        <>
          <div className="carousel-container">
            <div className="carousel-header">
              <span className="carousel-title">Recommended</span>
            </div>
            <div className="carousel-wrapper">
              <div className="swiper-container recommended-movie-swiper">
                <div className="swiper-wrapper">
                  {movie.recommendations.results.map((item) => (
                    <ItemCard
                      item={item}
                      config={config}
                      genreList={genreList}
                      selection={true}
                      url={"/movies/"}
                    />
                  ))}
                </div>
                <div className="swiper-scrollbar scrollbar-1"></div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
export default MovieDetails;
