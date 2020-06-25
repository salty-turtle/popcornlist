import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../../actions/index";
import "./Carousel.scss";

function MovieCard(props) {
  return (
    console.log(props.movie, props.config),
    (
      <div className="swiper-slide">
        <img className="card-img"
          src={`${props.config.base.images.secure_base_url}${props.config.base.images.poster_sizes[1]}${props.movie.poster_path}`}
        />
        <div className="card-details">
          {props.movie.original_title}
        </div>
      </div>
    )
  );
}

export default MovieCard;
