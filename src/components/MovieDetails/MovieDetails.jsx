import React from "react";
import { useParams } from "react-router-dom";

function MovieDetails(props) {
  const { movieId } = useParams();

  return <div>{movieId}</div>;
}

export default MovieDetails;
