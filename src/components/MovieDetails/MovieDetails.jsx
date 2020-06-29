import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestMovie, requestCredits } from "../../redux/actions/index";
import Cast from "../Cast/Cast";
import "./MovieDetails.scss";
import creditsReducer from "../../redux/reducers/creditsReducer";

function MovieDetails(props) {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const config = useSelector((state) => state.config);
  const movie = useSelector((state) => state.movie);
  const credits = useSelector((state) => state.credits);
  console.log(credits);

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
          <div
            className="movie-poster"
            style={{
              background: `url(${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}) no-repeat`,
              backgroundSize: "cover",
              borderRadius: "20px",
              minWidth: "400px",
              minHeight: "625px",
              boxShadow: "6px 9px 19px 1px rgba(0,0,0,0.54)",
              // marginRight: "100px",
            }}
          ></div>
          <div className="movie-text-container">
            <div className="movie-title">{movie.original_title}</div>
            <div className="movie-tagline">{movie.tagline}</div>
            <div className="movie-info">
              <i className="fas fa-star"></i> {movie.vote_average} Rating |
              Science Fiction, Drama {/*CHANGE GENRE*/} | English{" "}
              {/* CHANGE ORIGINAL LANGUAGE */} | {movie.runtime} min.
            </div>
            <div className="movie-extra-details">[ MORE DETAILS HERE ]</div>
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
                <button className="button2">
                  <i className="fab fa-imdb"></i> IMDb
                </button>
                <button className="button3">
                  <i className="fas fa-link"></i> Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
