import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../../redux/actions/index";
import "./Carousel.scss";

function MovieCard(props) {
  return (
    (
      <div className="swiper-slide card-slide">
        <img
          className="card-img"
          src={`${props.config.images.secure_base_url}${props.config.images.poster_sizes[1]}${props.movie.poster_path}`}
        />
        <div className="card-details-container">
          <div className="card-details-title">
            {`${props.movie.title} `}
          </div>
          <div className="card-details-genre">
            {props.movie.genre_ids.map((id) => `${props.genreList.get(id)} `)}
          </div>
        </div>
      </div>
    )
  );
}

export default MovieCard;
