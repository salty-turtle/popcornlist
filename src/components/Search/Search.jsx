import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { requestSearchMovies } from "../../redux/actions/index";
import "./Search.scss";
import poster from "../../images/poster.svg";

function Search(props) {
  const { searchQuery } = useParams();
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search);
  const config = useSelector((state) => state.config);

  const [pageNumber, setPageNumber] = useState(1);

  console.log(search);

  useEffect(() => {
    dispatch(requestSearchMovies(searchQuery, pageNumber));
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
      <div className="search-button-next-container">
        <button className="search-button-next">Next Page</button>
      </div>
    </div>
  );
}

export default Search;
