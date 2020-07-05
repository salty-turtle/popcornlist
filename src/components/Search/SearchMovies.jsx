import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { requestSearchMovies } from "../../redux/actions/index";
import "./Search.scss";
import poster from "../../images/poster.svg";
import Pagination from "../Pagination/Pagination";
import { useEffect } from "react";

function SearchMovies(props) {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();

  const config = useSelector((state) => state.config);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(requestSearchMovies(searchQuery, currentPage));
  }, [currentPage]);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return props.movies.loading ? (
    <div></div>
  ) : (
    <React.Fragment>
      <div className="search-container">
        {props.movies.results.map((movie) => {
          return (
            <Link to={`/movies/${movie.id}`} className="search-item">
              {movie.poster_path ? (
                <img
                  src={`${config.images.secure_base_url}${config.images.poster_sizes[3]}${movie.poster_path}`}
                  className="search-img"
                ></img>
              ) : (
                <img src={poster} className="search-img-placeholder"></img>
              )}
              <div className="search-item-title">{movie.title}</div>
            </Link>
          );
        })}
      </div>
      <Pagination items={props.movies} paginate={paginate} />
    </React.Fragment>
  );
}

export default SearchMovies;
