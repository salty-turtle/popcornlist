import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../../redux/actions/index";
import "./Carousel.scss";

function MovieCard(props) {
  return (
    console.log(props.movie, props.config),
    (
      <div className="swiper-slide">
        <img className="card-img"
          src={`${props.config.images.secure_base_url}${props.config.images.poster_sizes[1]}${props.movie.poster_path}`}
        />
        <div className="card-details">
          {`${props.movie.original_title} `}
          {props.movie.genre_ids.map(id => `${props.genreList.get(id)} `)}
        </div>
      </div>
    )
  );
}

export default MovieCard;
