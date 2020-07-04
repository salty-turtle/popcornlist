import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  requestSearchMovies,
  requestSearchShows,
  requestSearchPeople,
} from "../../redux/actions/index";
import "./Search.scss";
import poster from "../../images/poster.svg";
import queryString from "query-string";
import Pagination from "../Pagination/Pagination";

function Search() {
  const { searchQuery } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const search = useSelector((state) => state.search);
  const config = useSelector((state) => state.config);

  console.log(search);

  const query = queryString.parse(location.search);

  useEffect(() => {
    if (!query.page) {
      dispatch(requestSearchMovies(searchQuery, 1));
      dispatch(requestSearchShows(searchQuery, 1));
      dispatch(requestSearchPeople(searchQuery, 1));
    } else {
      dispatch(requestSearchMovies(searchQuery, query.page));
      dispatch(requestSearchShows(searchQuery, query.page));
      dispatch(requestSearchPeople(searchQuery, query.page));
    }
  }, []);

  return search.movies.loading ||
    search.shows.loading ||
    search.people.loading ? (
    <div></div>
  ) : (
    <div className="search-wrapper">
      <div className="search-title">Search by Category</div>
      <div className="search-buttons-container">
        <div className="search-hr-container">
          <hr className="search-hr" />
        </div>
        <button className="search-button-1">
          Movies<span className="total">{search.movies.total_results}</span>
        </button>
        <button className="search-button-2">
          TV Shows<span className="total">{search.shows.total_results}</span>
        </button>
        <button className="search-button-3">
          People<span className="total">{search.people.total_results}</span>
        </button>
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
      <Pagination movies={search.movies} />
    </div>
  );
}

export default Search;
