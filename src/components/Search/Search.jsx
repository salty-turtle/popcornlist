import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import {
  requestSearchMovies,
  requestSearchShows,
  requestSearchPeople,
} from "../../redux/actions/index";
import "./Search.scss";
import SearchMovies from "./SearchMovies";
import SearchShows from "./SearchShows";
import SearchPeople from "./SearchPeople";

function Search() {
  const { searchQuery } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const search = useSelector((state) => state.search);
  const config = useSelector((state) => state.config);

  const [display, setDisplay] = useState("movies");

  useEffect(() => {
    dispatch(requestSearchMovies(searchQuery, 1));
    dispatch(requestSearchShows(searchQuery, 1));
    dispatch(requestSearchPeople(searchQuery, 1));
  }, []);

  function displaySearch() {
    switch (display) {
      case "movies":
        return <SearchMovies movies={search.movies} />;
      case "shows":
        return <SearchShows shows={search.shows} />;
      case "people":
        return <SearchPeople people={search.people} />;
      default:
        return null;
    }
  }

  return (
    <div className="search-wrapper">
      <div className="search-title">Search by Category</div>
      <div className="search-buttons-container">
        <button
          className="search-button-1"
          onClick={() => setDisplay("movies")}
        >
          Movies<span className="total">{search.movies.total_results}</span>
        </button>
        <button className="search-button-2" onClick={() => setDisplay("shows")}>
          TV Shows<span className="total">{search.shows.total_results}</span>
        </button>
        <button
          className="search-button-3"
          onClick={() => setDisplay("people")}
        >
          People<span className="total">{search.people.total_results}</span>
        </button>
      </div>
      <hr className="search-hr" />
      {displaySearch()}
    </div>
  );
}

export default Search;
