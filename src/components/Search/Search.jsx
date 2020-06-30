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
      <div className="search-buttons-container">
        <button>Movies</button>
        <button>TV Shows</button>
        <button>People</button>
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
              <div className="search-title">{movie.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
