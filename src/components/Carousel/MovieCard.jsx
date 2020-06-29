import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import "./Carousel.scss";

function MovieCard(props) {
  return (
    <div className="swiper-slide card-slide">
      <Link to={`/movies/${props.movie.id}`}>
        <img
          className="card-img"
          src={`${props.config.images.secure_base_url}${props.config.images.poster_sizes[1]}${props.movie.poster_path}`}
        />
      </Link>
      <div className="card-details-container">
        <div className="card-details-title">{`${props.selection ? props.movie.title : props.movie.name} `}</div>
        <div className="card-details-genre">
          {props.movie.genre_ids.map((id) => `${props.genreList.get(id)}`).join(', ')}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
