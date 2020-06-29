import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestMovie, requestCredits } from "../../redux/actions/index";
import Cast from "../Cast/Cast";
import "./MovieDetails.scss";
import Rating from "react-rating";

function MovieDetails(props) {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const config = useSelector((state) => state.config);
  const movie = useSelector((state) => state.movie);
  const credits = useSelector((state) => state.credits);
  console.log(movie);

  useEffect(() => {
    dispatch(requestMovie(movieId));
    dispatch(requestCredits(movieId));
  }, []);

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
            <div className="movie-title">{movie.original_title}</div>
            <div className="movie-tagline">{movie.tagline}</div>
            <div className="movie-info">
              Science Fiction, Drama {/*CHANGE GENRE*/} | English{" "}
              {/* CHANGE ORIGINAL LANGUAGE */} | {movie.runtime} min.
            </div>
            <Rating
              className="movie-rating"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={movie.vote_average * 0.5}
              readonly
            />{" "}
            <div className="movie-secondary-title">Synopsis</div>
            <div className="movie-synopsis">{movie.overview}</div>
            <div className="movie-secondary-title">Cast</div>
            <div className="movie-cast">
              <Cast />
            </div>
            <div className="buttons-container">
              <div className="buttons-wrapper">
                <button className="button1">
                  <i className="fas fa-film"></i> Trailer
                </button>
                <a
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                >
                  <button className="button2">
                    <i className="fab fa-imdb"></i> IMDb
                  </button>
                </a>
                <a href={movie.homepage} target="_blank">
                  <button className="button3">
                    <i className="fas fa-link"></i> Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
