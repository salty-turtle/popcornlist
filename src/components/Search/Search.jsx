import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import { requestSearchMovies } from "../../redux/actions/index";
import "./Search.scss";
import poster from "../../images/poster.svg";
import queryString from "query-string";

function Search() {
  const { searchQuery } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const search = useSelector((state) => state.search);
  const config = useSelector((state) => state.config);

  const query = queryString.parse(location.search);

  useEffect(() => {
    !query.page
      ? dispatch(requestSearchMovies(searchQuery, 1))
      : dispatch(requestSearchMovies(searchQuery, query.page));
  }, []);

  return search.movies.loading ? (
    <div></div>
  ) : (
    <div className="search-wrapper">
      <div className="search-title">Search by Category</div>
      <div className="search-buttons-container">
        <div className="search-hr-container">
          <hr className="search-hr" />
        </div>
        <button className="search-button-1">Movies</button>
        <button className="search-button-2">TV Shows</button>
        <button className="search-button-3">People</button>
        <div className="search-hr-container">
          <hr className="search-hr" />
        </div>
      </div>
      <div className="search-container">
        {search.movies.results.map((movie) => {
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
      {search.movies.page >= search.movies.total_pages ? (
        <div></div>
      ) : (
        <div className="search-button-next-container">
          <Link to={`/search/${searchQuery}?page=${search.movies.page + 1}`}>
            <button className="search-button-next">Next Page</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Search;
