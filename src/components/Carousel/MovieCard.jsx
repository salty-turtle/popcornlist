import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../../actions/index";
import "./MovieCard.scss";

function MovieCard(props) {
  return (
    console.log(props.movie),
    <div>movie</div>)
}

export default MovieCard;
