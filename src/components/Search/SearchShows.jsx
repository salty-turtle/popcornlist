import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { requestSearchShows } from "../../redux/actions/index";
import "./Search.scss";
import poster from "../../images/poster.svg";
import Pagination from "../Pagination/Pagination";
import { useEffect } from "react";

function SearchShows(props) {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();

  const config = useSelector((state) => state.config);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(requestSearchShows(searchQuery, currentPage));
  }, [currentPage]);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return props.shows.loading ? (
    <div></div>
  ) : (
    <>
      <div className="search-container">
        {props.shows.results.map((show) => {
          return (
            <Link to={`/shows/${show.id}`} className="search-item">
              {show.poster_path ? (
                <img
                  src={`${config.images.secure_base_url}${config.images.poster_sizes[3]}${show.poster_path}`}
                  className="search-img"
                ></img>
              ) : (
                <img src={poster} className="search-img-placeholder"></img>
              )}
              <div className="search-item-title">{show.name}</div>
            </Link>
          );
        })}
      </div>
      <Pagination items={props.shows} paginate={paginate} />
    </>
  );
}

export default SearchShows;
