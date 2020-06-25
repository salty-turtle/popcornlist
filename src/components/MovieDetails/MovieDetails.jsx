import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { requestMovie } from "../../redux/actions/index";

function MovieDetails(props) {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMovie(movieId));
  });

  return <div>{movieId}</div>;
}

export default MovieDetails;
