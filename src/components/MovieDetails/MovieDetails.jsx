import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestMovie, requestCredits } from "../../redux/actions/index";
import Cast from "../Cast/Cast";
import Rating from "react-rating";
import "./MovieDetails.scss";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function MovieDetails(props) {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const config = useSelector((state) => state.config);
  const movie = useSelector((state) => state.movie);
  const credits = useSelector((state) => state.credits);

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(movie);

  useEffect(() => {
    dispatch(requestMovie(movieId));
    dispatch(requestCredits(movieId));
  }, []);

  function displayInfo(genres, language, time) {
    const result = [];
    result.push(genres.map((genre) => genre.name).join(", "));

    if (language) {
      result.push(language[0].name);
    }

    result.push(`${time} min.`);

    return result.join(" | ");
  }

  function displayTrailer(videos, isModalOpen, setIsModalOpen) {
    let result = videos.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    );

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  function displayImdb(id) {
    if (id) {
      return (
        <React.Fragment>
          <a href={`https://www.imdb.com/title/${id}`} target="_blank">
            <button className="button2">
              <i className="fab fa-imdb"></i> IMDb
            </button>
          </a>
        </React.Fragment>
      );
    }
  }

  function displayWebsite(homepage) {
    if (homepage) {
      return (
        <React.Fragment>
          <a href={homepage} target="_blank">
            <button className="button3">
              <i className="fas fa-link"></i> Website
            </button>
          </a>
        </React.Fragment>
      );
    }
  }

  return movie.loading || credits.loading ? (
    <div></div>
  ) : (
    <div>
      <div className="movie-wrapper">
        <div className="movie-container">
          <div className="movie-poster">
            <img
              src={`${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`}
            ></img>
          </div>
          <div className="movie-text-container">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-tagline">{movie.tagline}</div>
            <div className="movie-info">
              {displayInfo(movie.genres, movie.spoken_languages, movie.runtime)}
            </div>
            <div className="movie-rating-container">
              <Rating
                className="movie-rating-stars"
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={movie.vote_average * 0.5}
                readonly
              />
              <div className="movie-rating-text">
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <div className="movie-secondary-title">Synopsis</div>
            <div className="movie-synopsis">{movie.overview}</div>
            <div className="movie-secondary-title">Cast</div>
            <div className="movie-cast">
              <Cast />
            </div>
            <div className="buttons-container">
              <div className="buttons-wrapper">
                {displayTrailer(movie.videos, isModalOpen, setIsModalOpen)}
                {displayImdb(movie.imdb_id)}
                {displayWebsite(movie.homepage)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
